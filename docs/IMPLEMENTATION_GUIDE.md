# TopMoneyTools - Google Cloud Architecture Implementation Guide

## Project Structure

```
TopMoneyTools/
├── .github/
│   └── workflows/
│       └── gcp-deploy.yml          # GitHub Actions CI/CD pipeline
├── cloud-config/
│   ├── cloud-run-deploy.sh         # Cloud Run deployment script
│   └── setup-workload-identity.sh  # Workload Identity setup
├── docs/
│   ├── IMPLEMENTATION_GUIDE.md      # This file
│   ├── VERTEX_AI_WORKFLOW.md        # Vertex AI integration guide
│   ├── GCP_SETUP_CHECKLIST.md       # Step-by-step setup
│   └── ARCHITECTURE_OVERVIEW.md     # System architecture
├── public/                          # Static assets (static frontend)
│   ├── index.html
│   ├── about/
│   ├── contact/
│   ├── disclaimer/
│   ├── private-policy/
│   ├── terms/
│   ├── tools/
│   │   ├── debt-cost-calculator/
│   │   └── food-inflation-calculator/
│   └── assets/
│       └── css/
├── src/                             # Source code (for future backend)
├── Dockerfile                       # Container configuration
├── nginx.conf                       # Web server configuration
├── firebase.json                    # Firebase Hosting config
├── cloudbuild.yaml                 # Cloud Build configuration
└── package.json                     # Project dependencies
```

## Three-Phase Deployment Strategy

### Phase 1: Architect (Construction)
**Goal**: Build the functional code structure  
**Tool**: Gemini 1.5 Pro (via Vertex AI Studio)  
**Input**: Your script files + design requirements  
**Output**: Complete HTML5/Tailwind CSS structure

1. Open [Vertex AI Studio](https://console.cloud.google.com/vertex-ai/generative/language)
2. Create a new session with "Gemini 1.5 Pro"
3. Use this prompt:

```
You are a Full-Stack Developer specializing in responsive websites. 
I'm providing you with the scripted content for a financial tools website.

Create:
1. Complete HTML5 structure with semantic markup
2. Tailwind CSS configuration and utility classes
3. Mobile-responsive design (640px, 768px, 1024px breakpoints)
4. Ad-unit placeholder comments for AdSense integration
5. Component maps for the Marketing Styling phase

Output format: JSON structure with all CSS classes and component definitions.
```

4. Export the output as a JSON template

### Phase 2: Handover (Serialization)
**Goal**: Freeze the output in a reusable format  
**Tool**: Gemini 1.5 Pro (continued)  

Ask the model:
```
Export all output as a JSON object including:
- Component definitions
- CSS utility class maps
- Page structure
- Asset references
- Placeholder sections for styling customization
```

This creates a bridge between construction and styling phases.

### Phase 3: Stylist (Marketing & UX)
**Goal**: Apply high-conversion marketing design  
**Tool**: Gemini 1.5 Flash (for efficiency)  
**Input**: JSON structure from Phase 2  

Use this prompt in a new Vertex AI session:

```
You are a Digital Marketing and UI/UX Expert specializing in AdSense optimization.

I'm providing you with a website structure for a financial tools website.

Apply:
1. High-conversion color psychology
2. Professional typography hierarchy
3. Optimal AdSense placement strategies ("above the fold" priority)
4. Brand consistency patterns
5. Mobile-first responsive refinements
6. Engagement-optimized layouts

Focus areas:
- Maximize visible ad space without compromising UX
- Use whitespace strategically
- Implement trust-building visual elements
- Add micro-interactions for engagement

Output: Complete CSS stylesheet + brand guidelines document.
```

## Deployment Workflow

### Local Development
```bash
# Navigate to project directory
cd TopMoneyTools

# Make code changes locally
# (Update HTML, CSS, etc.)

# Test locally with nginx
docker build -t topmoneytools-local .
docker run -p 8080:8080 topmoneytools-local

# Verify at http://localhost:8080
```

### Push to GitHub
```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: update styling and AdSense placement"

# Push to main branch (triggers GitHub Actions)
git push origin main
```

### Automatic Deployment (via GitHub Actions)
1. GitHub Actions detects the push to `main`
2. Authenticates with Google Cloud via Workload Identity Federation
3. Builds a Docker container with Cloud Build
4. Deploys to Cloud Run
5. Updates your live website automatically

**View deployment status**: GitHub > Actions tab

### Manual Deployment (if needed)
```bash
# Option 1: Using the deployment script
bash cloud-config/cloud-run-deploy.sh

# Option 2: Direct gcloud command
gcloud run deploy topmoneytools-website \
    --source . \
    --region us-central1 \
    --allow-unauthenticated \
    --project project-7ee9ba0e-6038-467d-83a
```

## Post-Deployment: Domain Mapping

Once you're satisfied with your design:

```bash
# Update DOMAIN_NAME in the command below with your actual domain
gcloud beta run domain-mappings create \
    --service topmoneytools-website \
    --domain yourdomain.com \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a
```

Then update your domain registrar's DNS records to point to the Google Cloud load balancer (instructions will be provided in the output).

## Architecture Components

| Component | Purpose | Covered by Credits |
|-----------|---------|-------------------|
| **Cloud Run** | Serverless container hosting | GenAI/Free Tier |
| **Firebase Hosting** | Static frontend CDN | Free Tier |
| **Cloud DNS** | Domain management | Free Tier |
| **Vertex AI (Gemini)** | Construction & styling | ✅ GenAI App Builder Credit |
| **Cloud Build** | Automated builds | Free Tier |
| **GitHub Actions** | CI/CD pipeline | GitHub (free) |
| **Artifact Registry** | Container storage | Free Tier (first 500MB) |

## Cost Optimization

1. **Cloud Run**: Costs only during active requests (~$0.00001667/vCPU-sec, scales to zero)
2. **Artifact Registry**: First 500MB free per month
3. **Cloud Build**: 120 build-minutes free per day
4. **Firebase Hosting**: Free tier includes 1GB storage, 10GB/month bandwidth

**Estimated monthly cost with moderate traffic**: $5-15 USD

## Troubleshooting

### GitHub Actions Deployment Failing
- Verify `workload_identity_provider` in `.github/workflows/gcp-deploy.yml`
- Check that PROJECT_NUMBER is correctly substituted (not PROJECT_ID)
- Ensure service account has necessary IAM roles

### Cloud Run Service Errors
- Check logs: `gcloud run logs read topmoneytools-website`
- Verify nginx.conf port is `8080` (Cloud Run requirement)
- Test locally with Docker first

### Domain Mapping Issues
- Ensure domain registrar DNS points to the correct nameserver
- Wait 24-48 hours for DNS propagation
- Verify with: `nslookup yourdomain.com`

## Next Steps

1. ✅ **Complete GCP Setup** (see `GCP_SETUP_CHECKLIST.md`)
2. ✅ **Configure Workload Identity** (see Phase 2 below)
3. ✅ **Use Vertex AI for Styling** (see `VERTEX_AI_WORKFLOW.md`)
4. ✅ **Deploy to Cloud Run** (see Deployment Workflow above)
5. ✅ **Map Custom Domain** (see Post-Deployment above)

## Resources

- [Google Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Vertex AI Studio Guide](https://cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- [GitHub Actions + GCP Auth](https://github.com/google-github-actions/auth)
- [Firebase Hosting Deployment](https://firebase.google.com/docs/hosting)
- [Cloud DNS Setup](https://cloud.google.com/dns/docs)

---

**Last Updated**: June 2026  
**Architecture Version**: 1.0 (Google Cloud Ecosystem)
