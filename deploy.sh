#!/bin/bash
# deploy.sh — Build + push + deploy to Cloud Run in one command
# Usage: ./deploy.sh [branch]
#   branch: git branch to deploy (default: main)
#
# Also updates Cloudflare tunnel config with the correct Cloud Run URL.
# After deploy, restart the tunnel: cloudflared tunnel run topmoneytools
#
# Prerequisites:
#   - .env file with GCP_CLIENT_ID, GCP_CLIENT_SECRET, GCP_REFRESH_TOKEN

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TUNNEL_CONFIG="$HOME/.cloudflared/config.yml"

# ── 0. Load credentials ──
if [ -f "$SCRIPT_DIR/.env" ]; then
  export $(grep -v '^#' "$SCRIPT_DIR/.env" | xargs)
fi

: "${GCP_CLIENT_ID:?Missing GCP_CLIENT_ID in .env}"
: "${GCP_CLIENT_SECRET:?Missing GCP_CLIENT_SECRET in .env}"
: "${GCP_REFRESH_TOKEN:?Missing GCP_REFRESH_TOKEN in .env}"

BRANCH="${1:-main}"
PROJECT="tmtwebsite-501119"
SERVICE="my-website-service"
REGION="us-central1"
IMAGE_BASE="us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image"
COMMIT=$(git rev-parse HEAD)
SHORT_SHA=$(echo "$COMMIT" | head -c 7)

echo "=== Deploying $BRANCH @ $SHORT_SHA → $PROJECT/$SERVICE ==="

# ── 1. Get access token ──
echo "→ Getting access token..."
TOKEN_RESP=$(curl -s -X POST "https://oauth2.googleapis.com/token" \
  -d "client_id=$GCP_CLIENT_ID" \
  -d "client_secret=$GCP_CLIENT_SECRET" \
  -d "refresh_token=$GCP_REFRESH_TOKEN" \
  -d "grant_type=refresh_token")

ACCESS_TOKEN=$(echo "$TOKEN_RESP" | python3 -c "import sys,json;print(json.load(sys.stdin).get('access_token',''))" 2>/dev/null)
if [ -z "$ACCESS_TOKEN" ]; then
  echo "ERROR: Failed to get access token"
  echo "$TOKEN_RESP"
  exit 1
fi
echo "$ACCESS_TOKEN" > /tmp/gcp_token

# ── 2. Submit build to Cloud Build ──
echo "→ Submitting build to Cloud Build..."
BODY=$(cat <<BODYEOF
{
  "source": {
    "gitSource": {
      "url": "https://github.com/breakwater2026/TopMoneyTools.git",
      "revision": "refs/heads/$BRANCH"
    }
  },
  "steps": [
    {
      "name": "gcr.io/cloud-builders/docker",
      "args": [
        "build", "--no-cache",
        "-t", "$IMAGE_BASE:$COMMIT",
        "-t", "$IMAGE_BASE:latest",
        "."
      ]
    },
    {
      "name": "gcr.io/cloud-builders/docker",
      "args": ["push", "$IMAGE_BASE:$COMMIT"]
    },
    {
      "name": "gcr.io/cloud-builders/docker",
      "args": ["push", "$IMAGE_BASE:latest"]
    },
    {
      "name": "gcr.io/google.com/cloudsdktool/cloud-sdk",
      "entrypoint": "gcloud",
      "args": [
        "run", "deploy", "$SERVICE",
        "--image=$IMAGE_BASE:$COMMIT",
        "--project=$PROJECT",
        "--region=$REGION",
        "--platform=managed",
        "--allow-unauthenticated",
        "--quiet"
      ]
    }
  ],
  "images": [
    "$IMAGE_BASE:$COMMIT",
    "$IMAGE_BASE:latest"
  ]
}
BODYEOF
)

RESP=$(curl -s -X POST \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d "$BODY" \
  "https://cloudbuild.googleapis.com/v1/projects/$PROJECT/builds")

BUILD_ID=$(echo "$RESP" | python3 -c "import sys,json;print(json.load(sys.stdin).get('metadata',{}).get('build',{}).get('id',''))" 2>/dev/null)
if [ -z "$BUILD_ID" ]; then
  echo "ERROR: Build submission failed"
  echo "$RESP" | python3 -m json.tool 2>/dev/null || echo "$RESP"
  exit 1
fi
echo "→ Build submitted: ${BUILD_ID:0:20}..."

# ── 3. Poll until complete ──
echo "→ Waiting for build to complete..."
while true; do
  sleep 15
  BUILD=$(curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \
    "https://cloudbuild.googleapis.com/v1/projects/$PROJECT/builds/$BUILD_ID")
  STATUS=$(echo "$BUILD" | python3 -c "import sys,json;print(json.load(sys.stdin).get('status','UNKNOWN'))" 2>/dev/null)
  echo "  Status: $STATUS"
  if [ "$STATUS" = "SUCCESS" ]; then
    echo ""
    echo "=== ✅ DEPLOYMENT SUCCESSFUL ==="
    echo "Commit: $COMMIT ($SHORT_SHA)"
    echo "Project: $PROJECT"
    echo "Service: $SERVICE"
    break
  elif [ "$STATUS" = "FAILURE" ] || [ "$STATUS" = "TIMEOUT" ] || [ "$STATUS" = "INTERNAL_ERROR" ]; then
    echo "ERROR: Build failed with status $STATUS"
    echo "$BUILD" | python3 -c "
import sys,json
b=json.load(sys.stdin)
for s in b.get('steps',[]):
    if s.get('status')!='SUCCESS':
        print(f'Step {s[\"name\"]}: {s.get(\"status\",\"?\")}')
" 2>/dev/null
    exit 1
  fi
done

# ── 4. Update Cloudflare tunnel config with correct Cloud Run URL ──
echo ""
echo "→ Fetching Cloud Run URL..."
RUN_URL=$(curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \
  "https://run.googleapis.com/v1/projects/$PROJECT/locations/$REGION/services/$SERVICE" \
  | python3 -c "import sys,json;print(json.load(sys.stdin).get('status',{}).get('url',''))" 2>/dev/null)

if [ -z "$RUN_URL" ]; then
  echo "⚠  Could not fetch Cloud Run URL — skipping tunnel config update"
else
  echo "→ Cloud Run URL: $RUN_URL"

  if [ -f "$TUNNEL_CONFIG" ]; then
    echo "→ Updating tunnel config: $TUNNEL_CONFIG"
    # Replace old URL references with the current one
    TUNNEL_HOST=$(echo "$RUN_URL" | sed 's|https://||')
    sed -i "s|service: https://my-website-service-[^.]*\.us-central1\.run\.app|service: $RUN_URL|g" "$TUNNEL_CONFIG"
    sed -i "s|httpHostHeader: my-website-service-[^.]*\.us-central1\.run\.app|httpHostHeader: $TUNNEL_HOST|g" "$TUNNEL_CONFIG"
    sed -i "s|originServerName: my-website-service-[^.]*\.us-central1\.run\.app|originServerName: $TUNNEL_HOST|g" "$TUNNEL_CONFIG"
    echo "✓ Tunnel config updated"
    echo ""
    echo "=== NEXT STEP: Restart Cloudflare tunnel ==="
    echo "  cloudflared tunnel run topmoneytools"
    echo ""
    echo "Then purge Cloudflare cache and test:"
    echo "  curl -s https://www.topmoneytools.com/ | grep '/assets/index-'"
  else
    echo "⚠  No tunnel config found at $TUNNEL_CONFIG"
  fi
fi
