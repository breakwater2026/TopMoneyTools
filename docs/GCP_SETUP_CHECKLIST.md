# Google Cloud Setup Checklist

Complete these steps in order to set up your Google Cloud infrastructure.

## ✅ Phase 1: Initial Setup (One-time)

### Step 1: Verify GCP Project
- [ ] Project ID: `project-7ee9ba0e-6038-467d-83a`
- [ ] Project Number: *(retrieve from console)*
- [ ] Billing Account: Connected and active
- [ ] Region: `us-central1` (primary deployment region)

**How to find Project Number:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click the Project ID at the top
3. Find "Project Number" in the information panel
4. Copy and save it (you'll need this multiple times)

### Step 2: Enable Required APIs
Open [Cloud Shell](https://shell.cloud.google.com) and run:

```bash
gcloud services enable \
    run.googleapis.com \
    cloudbuild.googleapis.com \
    artifactregistry.googleapis.com \
    aiplatform.googleapis.com \
    discoveryengine.googleapis.com \
    iam.googleapis.com \
    --project project-7ee9ba0e-6038-467d-83a
```

Verify each shows "Service enabled":
- ✅ `run.googleapis.com` (Cloud Run)
- ✅ `cloudbuild.googleapis.com` (Cloud Build)
- ✅ `artifactregistry.googleapis.com` (Container Registry)
- ✅ `aiplatform.googleapis.com` (Vertex AI)
- ✅ `discoveryengine.googleapis.com` (GenAI App Builder)
- ✅ `iam.googleapis.com` (Identity & Access Management)

---

## ✅ Phase 2: Workload Identity Federation (GitHub ↔ GCP)

This allows GitHub Actions to deploy directly to Cloud Run without passwords.

### Step 3: Create Service Account
```bash
gcloud iam service-accounts create github-website-bot \
    --display-name="GitHub Action Bot" \
    --project project-7ee9ba0e-6038-467d-83a
```

Verify: `github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com`

### Step 4: Grant IAM Roles to Service Account
```bash
# Cloud Run deployment
gcloud projects add-iam-policy-binding project-7ee9ba0e-6038-467d-83a \
    --member="serviceAccount:github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com" \
    --role="roles/run.admin"

# Cloud Build
gcloud projects add-iam-policy-binding project-7ee9ba0e-6038-467d-83a \
    --member="serviceAccount:github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com" \
    --role="roles/cloudbuild.builds.editor"

# Vertex AI
gcloud projects add-iam-policy-binding project-7ee9ba0e-6038-467d-83a \
    --member="serviceAccount:github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com" \
    --role="roles/aiplatform.user"

# Service Account User (required for Cloud Build)
gcloud projects add-iam-policy-binding project-7ee9ba0e-6038-467d-83a \
    --member="serviceAccount:github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"

# Artifact Registry writer (for container images)
gcloud projects add-iam-policy-binding project-7ee9ba0e-6038-467d-83a \
    --member="serviceAccount:github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.writer"
```

### Step 5: Create Workload Identity Pool
```bash
gcloud iam workload-identity-pools create github-pool \
    --project=project-7ee9ba0e-6038-467d-83a \
    --location=global \
    --display-name="GitHub Actions Pool"
```

### Step 6: Create OIDC Provider
```bash
gcloud iam workload-identity-pools providers create-oidc github-provider \
    --project=project-7ee9ba0e-6038-467d-83a \
    --location=global \
    --workload-identity-pool=github-pool \
    --display-name="GitHub Provider" \
    --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
    --issuer-uri="https://token.actions.githubusercontent.com"
```

### Step 7: Connect Service Account to Identity Pool
Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME`:

```bash
PROJECT_NUMBER=$(gcloud projects describe project-7ee9ba0e-6038-467d-83a --format='value(projectNumber)')

gcloud iam service-accounts add-iam-policy-binding \
    github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com \
    --project=project-7ee9ba0e-6038-467d-83a \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/github-pool/attribute.repository/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
```

Example:
```bash
# If your GitHub is github.com/johndoe/TopMoneyTools
# Replace with: johnedoe/TopMoneyTools
```

### Step 8: Get Provider ID for GitHub Actions
```bash
gcloud iam workload-identity-pools providers describe github-provider \
    --project=project-7ee9ba0e-6038-467d-83a \
    --location=global \
    --workload-identity-pool=github-pool \
    --format='value(name)'
```

**Copy the output. You'll need it in the next step.**

Example output:
```
projects/123456789/locations/global/workloadIdentityPools/github-pool/providers/github-provider
```

---

## ✅ Phase 3: GitHub Configuration

### Step 9: Update GitHub Workflow File
Edit `.github/workflows/gcp-deploy.yml`:

1. Replace `PROJECT_NUMBER` with your actual project number (from Step 1)
2. Replace `workload_identity_provider` value with the output from Step 8
3. Ensure `service_account` matches your service account email

Example:
```yaml
with:
  workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/github-pool/providers/github-provider'
  service_account: 'github-website-bot@project-7ee9ba0e-6038-467d-83a.iam.gserviceaccount.com'
```

### Step 10: Commit Workflow to GitHub
```bash
git add .github/workflows/gcp-deploy.yml
git commit -m "ci: configure GitHub Actions for GCP deployment"
git push origin main
```

Then check the Actions tab on GitHub to verify the workflow runs successfully.

---

## ✅ Phase 4: Cloud Run Deployment

### Step 11: Deploy Manually (First Time)
From your project root directory:

```bash
gcloud run deploy topmoneytools-website \
    --source . \
    --region us-central1 \
    --allow-unauthenticated \
    --project project-7ee9ba0e-6038-467d-83a \
    --platform managed \
    --memory 512Mi \
    --cpu 1 \
    --timeout 60s \
    --max-instances 100
```

Wait for the deployment to complete. You should see:
```
Service URL: https://topmoneytools-website-xyz.a.run.app
```

### Step 12: Test the Deployment
```bash
# Replace with your actual Service URL
curl https://topmoneytools-website-xyz.a.run.app

# Or open in browser
# https://topmoneytools-website-xyz.a.run.app
```

Verify:
- [ ] Page loads successfully
- [ ] HTML renders (no 500 errors)
- [ ] CSS loads (styling applies)
- [ ] Images display
- [ ] All links work

---

## ✅ Phase 5: Domain Configuration

### Step 13: Map Custom Domain
Replace `yourdomain.com` with your actual domain:

```bash
gcloud beta run domain-mappings create \
    --service topmoneytools-website \
    --domain yourdomain.com \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a
```

### Step 14: Update Domain Registrar DNS
After running the above, you'll see DNS records to add:

```
Record Type    | Name              | Value
CNAME          | yourdomain.com    | ghs.googlehosted.com
```

1. Log into your domain registrar (GoDaddy, Namecheap, etc.)
2. Go to DNS/Name Server settings
3. Add the CNAME record above
4. **Wait 24-48 hours** for DNS to propagate

### Step 15: Verify Domain Mapping
```bash
# Check if domain is mapped
gcloud beta run domain-mappings list \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a

# Test DNS (after 24-48 hours)
nslookup yourdomain.com

# Test in browser
# https://yourdomain.com (should redirect to your Cloud Run service)
```

---

## ✅ Phase 6: Firebase Hosting (Optional - Static CDN)

If you want Firebase Hosting as an additional CDN layer:

### Step 16: Initialize Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

### Step 17: Deploy to Firebase
```bash
firebase deploy --project project-7ee9ba0e-6038-467d-83a
```

---

## ✅ Phase 7: Vertex AI Preparation

### Step 18: Test Vertex AI Access
1. Open [Vertex AI Studio](https://console.cloud.google.com/vertex-ai/generative/language)
2. Create a new "Freeform Prompt"
3. Select Model: "Gemini 1.5 Pro"
4. Ask: "Hello, what's your name?"
5. Verify it responds

**Note**: This uses your GenAI App Builder credits.

---

## ✅ Phase 8: Monitoring & Logs

### Step 19: View Cloud Run Logs
```bash
# Real-time logs
gcloud run logs read topmoneytools-website \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a \
    --limit 50 \
    --follow

# View logs in Cloud Console
# https://console.cloud.google.com/run/detail/us-central1/topmoneytools-website
```

### Step 20: Set Up Alerts (Optional)
In Cloud Console:
1. Go to Monitoring > Alert Policies
2. Create alert for "Cloud Run service > Error rate > 5% or higher"
3. Set notification channel (email)

---

## ✅ Final Verification Checklist

| Task | Status |
|------|--------|
| APIs enabled | ☐ |
| Service account created | ☐ |
| IAM roles assigned | ☐ |
| Workload Identity Pool created | ☐ |
| OIDC Provider created | ☐ |
| GitHub workflow updated | ☐ |
| First deployment successful | ☐ |
| Service URL accessible | ☐ |
| Domain mapped | ☐ |
| DNS propagated (wait 24-48h) | ☐ |
| Vertex AI access verified | ☐ |
| Logs accessible | ☐ |

---

## Quick Reference Commands

```bash
# Check service status
gcloud run services describe topmoneytools-website \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a

# View recent deployments
gcloud run revisions list \
    --service topmoneytools-website \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a

# Check service account permissions
gcloud projects get-iam-policy project-7ee9ba0e-6038-467d-83a \
    --flatten="bindings[].members" \
    --filter="bindings.members:github-website-bot*"

# Redeploy from current directory
gcloud run deploy topmoneytools-website \
    --source . \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a
```

---

## Troubleshooting

### "Permission denied" on deployment
- Verify service account has `roles/run.admin` and `roles/iam.serviceAccountUser`
- Re-run IAM role assignment from Step 4

### GitHub Actions workflow not running
- Check `.github/workflows/gcp-deploy.yml` syntax
- Verify `workload_identity_provider` is correctly set
- Check GitHub Actions logs in the repo's Actions tab

### DNS not resolving
- Wait 24-48 hours after adding CNAME record
- Check that CNAME value matches Cloud Run's DNS entry
- Test with: `nslookup yourdomain.com`

### Cloud Run service returning 503
- Check logs: `gcloud run logs read topmoneytools-website`
- Verify Dockerfile and nginx.conf are correct
- Test locally with Docker first

---

**Last Updated**: June 2026  
**GCP Region**: us-central1  
**Project ID**: project-7ee9ba0e-6038-467d-83a
