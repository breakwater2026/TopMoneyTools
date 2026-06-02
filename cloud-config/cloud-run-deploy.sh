#!/bin/bash

# Cloud Run Deployment Script
# This script deploys the TopMoneyTools website to Google Cloud Run

set -e

# Configuration
PROJECT_ID="project-7ee9ba0e-6038-467d-83a"
REGION="us-central1"
SERVICE_NAME="topmoneytools-website"
DOMAIN_NAME="yourdomain.com"  # UPDATE THIS with your actual domain

echo "=========================================="
echo "TopMoneyTools Cloud Run Deployment"
echo "=========================================="

# Step 1: Set the active project
echo ""
echo "Setting GCP project to: $PROJECT_ID"
gcloud config set project $PROJECT_ID

# Step 2: Enable required APIs
echo ""
echo "Enabling required Google Cloud APIs..."
gcloud services enable \
    run.googleapis.com \
    cloudbuild.googleapis.com \
    artifactregistry.googleapis.com \
    aiplatform.googleapis.com \
    discoveryengine.googleapis.com \
    --project $PROJECT_ID

# Step 3: Build and deploy to Cloud Run
echo ""
echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --source . \
    --region $REGION \
    --allow-unauthenticated \
    --project $PROJECT_ID \
    --platform managed \
    --memory 512Mi \
    --cpu 1 \
    --timeout 60s \
    --max-instances 100

# Step 4: Get the service URL
echo ""
echo "Retrieving service URL..."
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
    --region $REGION \
    --project $PROJECT_ID \
    --format='value(status.url)')

echo ""
echo "=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo "Service URL: $SERVICE_URL"
echo ""
echo "To map your custom domain ($DOMAIN_NAME):"
echo "gcloud beta run domain-mappings create \\"
echo "    --service $SERVICE_NAME \\"
echo "    --domain $DOMAIN_NAME \\"
echo "    --region $REGION \\"
echo "    --project $PROJECT_ID"
echo ""
