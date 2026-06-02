# TopMoneyTools - Google Cloud Edition

A modern, scalable financial tools website built with **Google Cloud** infrastructure, **Vertex AI** for design, and **GitHub Actions** for automated deployment.

## 🚀 Quick Start

### For the Impatient

```bash
# 1. Setup GCP (one-time, ~30 minutes)
bash cloud-config/setup-workload-identity.sh

# 2. Deploy to Cloud Run
bash cloud-config/cloud-run-deploy.sh

# 3. Update your domain (one-time)
# Follow instructions in output

# 4. That's it! Your site is live 🎉
```

### For Everyone Else

1. **Read the Architecture** → [docs/ARCHITECTURE_OVERVIEW.md](docs/ARCHITECTURE_OVERVIEW.md)
2. **Complete GCP Setup** → [docs/GCP_SETUP_CHECKLIST.md](docs/GCP_SETUP_CHECKLIST.md)
3. **Design with Vertex AI** → [docs/VERTEX_AI_WORKFLOW.md](docs/VERTEX_AI_WORKFLOW.md)
4. **Deploy & Monitor** → [docs/IMPLEMENTATION_GUIDE.md](docs/IMPLEMENTATION_GUIDE.md)

---

## 📋 What This Project Includes

### Infrastructure
- ✅ **Cloud Run**: Serverless container hosting (auto-scales to zero)
- ✅ **Cloud DNS**: Domain management and global routing
- ✅ **Firebase Hosting**: Optional static content CDN
- ✅ **Cloud Build**: Automated Docker image building
- ✅ **Artifact Registry**: Private container image storage

### Development Tools
- ✅ **GitHub Actions**: Automated CI/CD pipeline
- ✅ **Workload Identity Federation**: Secure GCP authentication (no passwords!)
- ✅ **Docker**: Container packaging for consistent deployment
- ✅ **nginx**: High-performance web server

### AI-Powered Design
- ✅ **Vertex AI (Gemini 1.5 Pro)**: Architect phase (construction)
- ✅ **Vertex AI (Gemini 1.5 Flash)**: Stylist phase (marketing)
- ✅ **GenAI App Builder**: For chatbots and search features

### Documentation
- ✅ **Architecture Overview**: System design and data flow
- ✅ **GCP Setup Checklist**: Step-by-step configuration
- ✅ **Vertex AI Workflow**: Three-phase design pipeline
- ✅ **Implementation Guide**: Full deployment instructions

---

## 📁 Project Structure

```
TopMoneyTools/
│
├── 📂 .github/workflows/
│   └── gcp-deploy.yml              # GitHub Actions CI/CD pipeline
│
├── 📂 public/                       # Website files (served by nginx)
│   ├── index.html                   # Homepage
│   ├── about/, contact/, etc.       # Site pages
│   └── tools/                       # Calculator tools
│       ├── debt-cost-calculator/
│       └── food-inflation-calculator/
│
├── 📂 assets/                       # Static assets
│   └── css/                         # Stylesheets
│
├── 📂 cloud-config/                 # GCP configuration scripts
│   ├── cloud-run-deploy.sh          # Deploy to Cloud Run
│   └── setup-workload-identity.sh   # Setup GitHub ↔ GCP auth
│
├── 📂 docs/                         # Comprehensive guides
│   ├── ARCHITECTURE_OVERVIEW.md     # System design
│   ├── GCP_SETUP_CHECKLIST.md       # Setup steps
│   ├── VERTEX_AI_WORKFLOW.md        # Design pipeline
│   └── IMPLEMENTATION_GUIDE.md      # Deployment guide
│
├── 📂 src/                          # Source code (for future use)
│   └── (Vertex AI outputs go here)
│
├── Dockerfile                       # Container definition
├── nginx.conf                       # Web server configuration
├── firebase.json                    # Firebase Hosting config
├── cloudbuild.yaml                  # Cloud Build config
├── package.json                     # Node dependencies
├── vercel.json                      # (Legacy - not used)
└── README.md                        # This file
```

---

## 🔄 Deployment Process

### Local Development
```bash
# Edit your files locally
# HTML, CSS, JS changes in public/ and assets/

# Test with Docker (optional)
docker build -t topmoneytools .
docker run -p 8080:8080 topmoneytools
# Visit: http://localhost:8080
```

### Commit & Push
```bash
git add .
git commit -m "Update homepage styling"
git push origin main
```

### Automatic Deployment
1. ✅ GitHub detects push to main
2. ✅ GitHub Actions workflow triggers
3. ✅ Authenticates with GCP (Workload Identity)
4. ✅ Builds Docker container
5. ✅ Deploys to Cloud Run
6. ✅ Your site updates automatically! 🎉

---

## 💰 Cost Estimate

| Service | Free Tier | Monthly Cost |
|---------|-----------|-------------|
| Cloud Run | 2M requests/month | $0-5 |
| Cloud Build | 120 min/day builds | $0 |
| Artifact Registry | 500MB/month | $0 |
| Cloud DNS | $0.40 base + queries | $0.40-1 |
| Firebase Hosting | 1GB + 10GB bandwidth | $0 |
| **Total** | | **$5-15/month** |

**Key insight**: You only pay when someone visits your site. Zero traffic = zero cost.

---

## 🔐 Security Features

### No Passwords or API Keys
- ✅ Workload Identity Federation (Google's best practice)
- ✅ Temporary tokens (expire automatically)
- ✅ Service accounts with minimal permissions
- ✅ All changes logged and auditable

### HTTPS & Encryption
- ✅ Automatic TLS certificates (Google Cloud managed)
- ✅ HTTPS enforced (HTTP redirects to HTTPS)
- ✅ Data encrypted in transit and at rest

### Network Isolation
- ✅ Container runs in isolated sandbox
- ✅ Only HTTPS traffic allowed
- ✅ Google Cloud firewall protection
- ✅ No public SSH or unsecured access

---

## 🎨 Design with Vertex AI

### Phase 1: Architect (Construction)
**Tool**: Gemini 1.5 Pro  
**Input**: Your scripted content  
**Output**: Complete HTML5 + Tailwind CSS structure

### Phase 2: Handover (Serialization)
**Tool**: Manual export  
**Input**: HTML from Phase 1  
**Output**: JSON structure for Phase 3

### Phase 3: Stylist (Marketing & UX)
**Tool**: Gemini 1.5 Flash  
**Input**: JSON structure  
**Output**: Professional CSS + brand guidelines

**See [docs/VERTEX_AI_WORKFLOW.md](docs/VERTEX_AI_WORKFLOW.md) for detailed instructions.**

---

## 📊 Monitoring & Logs

### View Real-Time Logs
```bash
gcloud run logs read topmoneytools-website --follow
```

### Check Service Health
```bash
gcloud run services describe topmoneytools-website \
    --region us-central1 \
    --project project-7ee9ba0e-6038-467d-83a
```

### Access Cloud Console
https://console.cloud.google.com/run/detail/us-central1/topmoneytools-website

---

## 🔧 Common Tasks

### Update Your Website
```bash
# Edit files locally
nano public/index.html

# Commit and push (auto-deploys)
git add .
git commit -m "Update content"
git push origin main
```

### Deploy Manually
```bash
bash cloud-config/cloud-run-deploy.sh
```

### View Deployment History
```bash
gcloud run revisions list \
    --service topmoneytools-website \
    --region us-central1
```

### Rollback to Previous Version
```bash
gcloud run services update-traffic topmoneytools-website \
    --to-revisions REVISION_ID=100
```

### Check Credit Usage
```bash
# Google Cloud Console → Billing → Reports → Filter by:
# Service: Vertex AI
# Filter by your project ID
```

---

## 🚨 Troubleshooting

### Site not loading after push?
```bash
# Check logs
gcloud run logs read topmoneytools-website --limit 50

# Check if service is running
gcloud run services list --region us-central1

# Restart service (force new deployment)
git commit --allow-empty -m "Force redeploy"
git push origin main
```

### GitHub Actions failing?
1. Check `.github/workflows/gcp-deploy.yml` syntax
2. Verify `workload_identity_provider` value
3. Ensure service account has correct IAM roles
4. Check GitHub Actions logs (Actions tab in GitHub)

### Domain not resolving?
1. Verify CNAME record in registrar DNS settings
2. Wait 24-48 hours for DNS propagation
3. Test: `nslookup yourdomain.com`

### Costs higher than expected?
1. Check Cloud Run traffic metrics
2. Review Cloud Build build minutes
3. Optimize container size (smaller = faster = cheaper)
4. Set billing alerts in Cloud Console

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [ARCHITECTURE_OVERVIEW.md](docs/ARCHITECTURE_OVERVIEW.md) | System design, data flow, security |
| [GCP_SETUP_CHECKLIST.md](docs/GCP_SETUP_CHECKLIST.md) | Step-by-step GCP configuration |
| [VERTEX_AI_WORKFLOW.md](docs/VERTEX_AI_WORKFLOW.md) | Three-phase AI design pipeline |
| [IMPLEMENTATION_GUIDE.md](docs/IMPLEMENTATION_GUIDE.md) | Full deployment and monitoring guide |

---

## 🤝 Support & Resources

### Google Cloud Documentation
- [Cloud Run Quickstart](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)
- [Vertex AI Studio Guide](https://cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- [GitHub Actions + GCP](https://github.com/google-github-actions/auth)

### Your GCP Project
- **Project ID**: `project-7ee9ba0e-6038-467d-83a`
- **Region**: `us-central1`
- **Service**: `topmoneytools-website`
- **Console**: https://console.cloud.google.com

### GitHub Actions
- **Workflow**: `.github/workflows/gcp-deploy.yml`
- **Status**: Check "Actions" tab in your GitHub repo

---

## 📝 Getting Started Checklist

- [ ] Read [docs/ARCHITECTURE_OVERVIEW.md](docs/ARCHITECTURE_OVERVIEW.md)
- [ ] Complete [docs/GCP_SETUP_CHECKLIST.md](docs/GCP_SETUP_CHECKLIST.md)
- [ ] Use [docs/VERTEX_AI_WORKFLOW.md](docs/VERTEX_AI_WORKFLOW.md) for design
- [ ] Deploy using [docs/IMPLEMENTATION_GUIDE.md](docs/IMPLEMENTATION_GUIDE.md)
- [ ] Verify site loads at your domain
- [ ] Set up monitoring & alerts
- [ ] Celebrate! 🎉

---

## 📄 License

This project is proprietary. All rights reserved.

---

## ℹ️ Version Information

- **Architecture Version**: 1.0 (Google Cloud Ecosystem)
- **Created**: June 2026
- **Last Updated**: June 2026
- **Status**: Production-Ready
- **Primary Cloud Provider**: Google Cloud Platform (GCP)
- **Deployment Region**: us-central1
- **High Availability**: 99.95% SLA (Cloud Run)

---

## 🎯 Next Steps

1. **New to Google Cloud?** Start with [docs/ARCHITECTURE_OVERVIEW.md](docs/ARCHITECTURE_OVERVIEW.md)
2. **Ready to setup?** Follow [docs/GCP_SETUP_CHECKLIST.md](docs/GCP_SETUP_CHECKLIST.md)
3. **Want to design?** Use [docs/VERTEX_AI_WORKFLOW.md](docs/VERTEX_AI_WORKFLOW.md)
4. **Ready to deploy?** Follow [docs/IMPLEMENTATION_GUIDE.md](docs/IMPLEMENTATION_GUIDE.md)

---

**Happy building! 🚀**

*For questions or issues, refer to the comprehensive documentation in the `docs/` folder.*
