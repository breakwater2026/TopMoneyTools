#!/bin/bash
# deploy.sh — Build + push + deploy to Cloud Run in one command
# Usage: ./deploy.sh [branch]
#   branch: git branch to deploy (default: DSRebuild)
#
# Prerequisites:
#   - .env file with GCP_CLIENT_ID, GCP_CLIENT_SECRET, GCP_REFRESH_TOKEN
#   - Copy .env.example to .env and fill in credentials
#
# No Docker or gcloud CLI needed.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# ── 0. Load credentials ──
if [ -f "$SCRIPT_DIR/.env" ]; then
  export $(grep -v '^#' "$SCRIPT_DIR/.env" | xargs)
fi

: "${GCP_CLIENT_ID:?Missing GCP_CLIENT_ID in .env}"
: "${GCP_CLIENT_SECRET:?Missing GCP_CLIENT_SECRET in .env}"
: "${GCP_REFRESH_TOKEN:?Missing GCP_REFRESH_TOKEN in .env}"

BRANCH="${1:-DSRebuild}"
PROJECT="tmtwebsite-501119"
REPO_URL="https://github.com/breakwater2026/TopMoneyTools.git"
COMMIT=$(git rev-parse HEAD)
SHORT_SHA=$(echo "$COMMIT" | head -c 7)

echo "=== Deploying $BRANCH @ $SHORT_SHA → $PROJECT ==="

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
      "url": "$REPO_URL",
      "revision": "refs/heads/$BRANCH"
    }
  },
  "steps": [
    {
      "name": "gcr.io/cloud-builders/docker",
      "args": [
        "build", "--no-cache",
        "-t", "us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image:\$COMMIT_SHA",
        "-t", "us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image:latest",
        "."
      ]
    },
    {
      "name": "gcr.io/cloud-builders/docker",
      "args": ["push", "us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image:\$COMMIT_SHA"]
    },
    {
      "name": "gcr.io/cloud-builders/docker",
      "args": ["push", "us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image:latest"]
    },
    {
      "name": "gcr.io/google.com/cloudsdktool/cloud-sdk",
      "entrypoint": "gcloud",
      "args": [
        "run", "deploy", "my-website-service",
        "--image=us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image:\$COMMIT_SHA",
        "--project=$PROJECT",
        "--region=us-central1",
        "--platform=managed",
        "--allow-unauthenticated",
        "--quiet"
      ]
    }
  ],
  "images": [
    "us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image:\$COMMIT_SHA",
    "us-central1-docker.pkg.dev/$PROJECT/my-website-image/my-website-image:latest"
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
    echo "Branch: $BRANCH"
    echo "Project: $PROJECT"
    echo "Service: my-website-service"
    echo "Region: us-central1"
    echo ""
    echo "Check: curl -s https://www.topmoneytools.com/ | grep '/assets/index-'"
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
