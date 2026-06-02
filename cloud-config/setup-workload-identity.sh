#!/bin/bash

# Workload Identity Federation Setup Script
# This script configures GitHub Actions to authenticate with Google Cloud

set -e

# Configuration
PROJECT_ID="project-7ee9ba0e-6038-467d-83a"
SERVICE_ACCOUNT="github-website-bot"
POOL_NAME="github-pool"
PROVIDER_NAME="github-provider"
GITHUB_REPO="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"  # UPDATE THIS

echo "=========================================="
echo "Setting up Workload Identity Federation"
echo "=========================================="

# Step 1: Create Service Account
echo ""
echo "Creating service account: $SERVICE_ACCOUNT"
gcloud iam service-accounts create $SERVICE_ACCOUNT \
    --display-name="GitHub Action Bot" \
    --project=$PROJECT_ID || echo "Service account already exists"

# Step 2: Grant Vertex AI and Cloud Run permissions
echo ""
echo "Granting permissions to service account..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/aiplatform.user"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/cloudbuild.builds.editor"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"

# Step 3: Create Workload Identity Pool
echo ""
echo "Creating Workload Identity Pool: $POOL_NAME"
gcloud iam workload-identity-pools create $POOL_NAME \
    --project=$PROJECT_ID \
    --location=global \
    --display-name="GitHub Actions Pool" || echo "Pool already exists"

# Step 4: Create OIDC Provider
echo ""
echo "Creating OIDC Provider: $PROVIDER_NAME"
gcloud iam workload-identity-pools providers create-oidc $PROVIDER_NAME \
    --project=$PROJECT_ID \
    --location=global \
    --workload-identity-pool=$POOL_NAME \
    --display-name="GitHub Provider" \
    --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
    --issuer-uri="https://token.actions.githubusercontent.com" || echo "Provider already exists"

# Step 5: Connect Service Account to Identity Pool
echo ""
echo "Connecting service account to identity pool..."

PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')

gcloud iam service-accounts add-iam-policy-binding \
    "${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com" \
    --project=$PROJECT_ID \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_NAME}/attribute.repository/${GITHUB_REPO}"

# Step 6: Get Provider ID for GitHub Actions
echo ""
echo "Retrieving provider ID..."
PROVIDER_ID=$(gcloud iam workload-identity-pools providers describe $PROVIDER_NAME \
    --project=$PROJECT_ID \
    --location=global \
    --workload-identity-pool=$POOL_NAME \
    --format='value(name)')

echo ""
echo "=========================================="
echo "Setup Complete!"
echo "=========================================="
echo ""
echo "Update your GitHub Actions workflow with:"
echo "workload_identity_provider: '$PROVIDER_ID'"
echo "service_account: '${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com'"
echo ""
echo "Project Number: $PROJECT_NUMBER"
echo ""
