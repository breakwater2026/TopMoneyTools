# Project Structure - Complete Reference

## 📂 TopMoneyTools Project Organization

### Root Level Files

```
TopMoneyTools/
│
├── 📄 README_GOOGLE_CLOUD.md          ⭐ Start here - Project overview
├── 📄 QUICKSTART.md                   Quick-start guide with timeline
├── 📄 IMPLEMENTATION_SUMMARY.md        Summary of what was created
├── 📄 PROJECT_STRUCTURE.md            This file
│
├── 📄 Dockerfile                      NEW - Container configuration
├── 📄 nginx.conf                      NEW - Web server config
├── 📄 firebase.json                   NEW - Firebase Hosting config
├── 📄 package.json                    Node.js dependencies
├── 📄 cloudbuild.yaml                 Cloud Build configuration
│
├── 📄 index.html                      Homepage
├── 📄 ads.txt                         AdSense configuration
├── 📄 robot.txt                       SEO robots configuration
├── 📄 vercel.json                     (Legacy - not used)
├── 📄 README.md                       Original project readme
│
├── 📄 .gitignore                      UPDATED - Git file exclusions
├── 📄 AD_UNITS.md                     AdSense units documentation
└── 📄 Architecture Cloud Assist 060126.txt  Original context file

```

---

## 📂 `.github/` - GitHub Configuration

```
.github/
│
└── 📁 workflows/                      GitHub Actions workflows
    │
    └── 📄 gcp-deploy.yml              ⭐ NEW - CI/CD Pipeline
                                       Automatically builds and deploys
                                       when you push to GitHub
```

### What gcp-deploy.yml Does:
1. Triggers on push to main branch
2. Authenticates with Google Cloud
3. Builds Docker container
4. Deploys to Cloud Run
5. Updates your live website

---

## 📂 `cloud-config/` - Google Cloud Configuration Scripts

```
cloud-config/
│
├── 📄 cloud-run-deploy.sh             ⭐ NEW - Deploy to Cloud Run
│                                      Bash script for one-command deployment
│                                      Usage: bash cloud-config/cloud-run-deploy.sh
│
└── 📄 setup-workload-identity.sh      ⭐ NEW - Setup authentication
                                       Configures secure GitHub ↔ GCP connection
                                       Usage: bash cloud-config/setup-workload-identity.sh
```

### Script Details

#### cloud-run-deploy.sh
- Enables required Google Cloud APIs
- Builds Docker container
- Deploys to Cloud Run (us-central1)
- Outputs service URL
- Shows domain mapping instructions

#### setup-workload-identity.sh
- Creates service account
- Sets up Workload Identity Pool
- Creates OIDC Provider
- Grants necessary IAM roles
- Outputs configuration values for GitHub Actions

---

## 📂 `docs/` - Comprehensive Documentation

```
docs/
│
├── 📄 ARCHITECTURE_OVERVIEW.md        ⭐ System Design
│   │  
│   └─ What it covers:
│      • System architecture diagram
│      • Component descriptions
│      • Data flow & scaling
│      • Security architecture
│      • Cost breakdown
│      • Disaster recovery
│      • Next steps
│
├── 📄 GCP_SETUP_CHECKLIST.md          ⭐ Setup Instructions
│   │
│   └─ What it covers:
│      • Initial project setup
│      • API enablement
│      • Service account creation
│      • Workload Identity Federation
│      • GitHub configuration
│      • First deployment
│      • Domain mapping
│      • Monitoring setup
│      • Troubleshooting
│
├── 📄 VERTEX_AI_WORKFLOW.md           ⭐ AI Design Pipeline
│   │
│   └─ What it covers:
│      • Phase 1: Architect (Gemini 1.5 Pro)
│      • Phase 2: Handover (Serialization)
│      • Phase 3: Stylist (Gemini 1.5 Flash)
│      • Exact prompts to use
│      • File exports and integration
│      • Testing & optimization
│      • AdSense placement strategies
│
└── 📄 IMPLEMENTATION_GUIDE.md         ⭐ Deployment & Monitoring
    │
    └─ What it covers:
       • Project structure overview
       • Three-phase deployment
       • Local testing
       • GitHub commit workflow
       • Automatic deployment
       • Manual deployment
       • Domain mapping
       • Cost optimization
       • Troubleshooting
       • Next steps
```

### Documentation Reading Order:
1. **ARCHITECTURE_OVERVIEW.md** (15 min) - Understand the system
2. **GCP_SETUP_CHECKLIST.md** (30-45 min) - Configure Google Cloud
3. **VERTEX_AI_WORKFLOW.md** (1-2 hours) - Design with AI
4. **IMPLEMENTATION_GUIDE.md** (15 min) - Deploy and monitor

---

## 📂 `src/` - Source Code (New Directory)

```
src/
│
├── 📄 index.html                      (Empty - for Vertex AI outputs)
├── 📄 component-map.json              (Empty - for Phase 1 output)
└── 📄 website-structure.json          (Empty - for Phase 2 output)
```

**Purpose**: Stores outputs from Vertex AI design workflow  
**Populated by**: VERTEX_AI_WORKFLOW.md Phase 1-2

---

## 📂 `public/` - Website Files (Preserved)

```
public/
│
├── 📄 index.html                      Homepage
├── 📄 ads.txt                         AdSense configuration
├── 📄 robot.txt                       SEO robots file
│
├── 📁 about/
│   └── 📄 index.html
│
├── 📁 contact/
│   └── 📄 index.html
│
├── 📁 disclaimer/
│   └── 📄 index.html
│
├── 📁 private-policy/
│   └── 📄 index.html
│
├── 📁 terms/
│   └── 📄 index.html
│
├── 📁 assets/
│   ├── 📁 css/
│   │   ├── 📄 moneytools.css
│   │   └── 📄 moneytools.js
│   └── 📁 images/                     (NEW - for Vertex AI images)
│
└── 📁 tools/
    │
    ├── 📁 debt-cost-calculator/
    │   ├── 📄 index.html
    │   ├── 📄 debt-cost-calculator-style.js
    │   └── 📄 [calculator logic files]
    │
    └── 📁 food-inflation-calculator/
        ├── 📄 index.html
        ├── 📄 food-inflation-calculator.js
        ├── 📄 script.js
        └── 📄 [calculator logic files]
```

**Status**: All original files preserved  
**Modified by**: Vertex AI workflow (VERTEX_AI_WORKFLOW.md)

---

## 📂 Hidden Files & Folders

```
TopMoneyTools/
│
├── 📁 .git/                           Git repository (existing)
├── 📁 .firebase/                      Firebase config
│   └── 📄 firebaserc
│
└── 📁 .github/                        GitHub configuration
    └── 📁 workflows/
        └── 📄 gcp-deploy.yml
```

---

## 🔄 File Relationships & Dependencies

```
GitHub Repository
│
├──→ .github/workflows/gcp-deploy.yml
│    └──→ Reads Dockerfile
│         └──→ References nginx.conf
│              └──→ Serves files from public/
│
├──→ cloud-config/setup-workload-identity.sh
│    └──→ Configures GitHub ↔ GCP authentication
│         └──→ Enables gcp-deploy.yml to work
│
├──→ cloud-config/cloud-run-deploy.sh
│    └──→ Manual deployment alternative
│         └──→ Also reads Dockerfile
│
└──→ docs/ (all guides)
     ├──→ ARCHITECTURE_OVERVIEW.md
     ├──→ GCP_SETUP_CHECKLIST.md
     ├──→ VERTEX_AI_WORKFLOW.md
     └──→ IMPLEMENTATION_GUIDE.md
```

---

## 📋 File Purpose Quick Reference

| File | Purpose | Status |
|------|---------|--------|
| **README_GOOGLE_CLOUD.md** | Project overview | ✅ NEW |
| **QUICKSTART.md** | Getting started guide | ✅ NEW |
| **IMPLEMENTATION_SUMMARY.md** | What was created | ✅ NEW |
| **Dockerfile** | Container definition | ✅ NEW |
| **nginx.conf** | Web server config | ✅ NEW |
| **firebase.json** | Firebase Hosting | ✅ NEW |
| **.github/workflows/gcp-deploy.yml** | CI/CD pipeline | ✅ NEW |
| **cloud-config/cloud-run-deploy.sh** | Deploy script | ✅ NEW |
| **cloud-config/setup-workload-identity.sh** | Auth setup | ✅ NEW |
| **docs/ARCHITECTURE_OVERVIEW.md** | System design | ✅ NEW |
| **docs/GCP_SETUP_CHECKLIST.md** | Setup guide | ✅ NEW |
| **docs/VERTEX_AI_WORKFLOW.md** | Design workflow | ✅ NEW |
| **docs/IMPLEMENTATION_GUIDE.md** | Deployment guide | ✅ NEW |
| **public/** | Website files | ✅ PRESERVED |
| **assets/** | Images, CSS, JS | ✅ PRESERVED |
| **tools/** | Calculators | ✅ PRESERVED |
| **package.json** | Dependencies | ✅ EXISTING |
| **cloudbuild.yaml** | Cloud Build | ✅ EXISTING |

---

## 🚀 File Usage Timeline

### Phase 1: Setup (First Time)
```
1. Read: README_GOOGLE_CLOUD.md
2. Read: QUICKSTART.md
3. Read: docs/ARCHITECTURE_OVERVIEW.md
4. Read: docs/GCP_SETUP_CHECKLIST.md
5. Run: bash cloud-config/setup-workload-identity.sh
6. Run: bash cloud-config/cloud-run-deploy.sh
```

### Phase 2: Design
```
1. Read: docs/VERTEX_AI_WORKFLOW.md
2. Use Vertex AI Studio (web interface)
3. Save outputs to src/ directory
4. Apply outputs to public/ and assets/
```

### Phase 3: Deploy
```
1. Commit changes: git add .
2. Commit message: git commit -m "Update design"
3. Push: git push origin main
4. GitHub Actions automatically:
   - Reads .github/workflows/gcp-deploy.yml
   - Builds Docker image
   - Deploys to Cloud Run
5. Monitor: gcloud run logs read topmoneytools-website
```

---

## 💾 Storage Locations

| Type | Location | Purpose |
|------|----------|---------|
| **Website files** | `public/` | Served to users |
| **Styling** | `assets/css/` | CSS stylesheets |
| **Images** | `assets/images/` | Site images |
| **Tools** | `tools/` | Calculator applications |
| **Config** | Root & `cloud-config/` | Settings & scripts |
| **Documentation** | `docs/` | Comprehensive guides |
| **Source** | `src/` | Vertex AI outputs |
| **CI/CD** | `.github/workflows/` | Automation |
| **Version Control** | `.git/` | Git repository |

---

## 🔐 Configuration Files

| File | Contains | Access |
|------|----------|--------|
| **Dockerfile** | Container instructions | Public (GitHub) |
| **nginx.conf** | Web server settings | Public (GitHub) |
| **firebase.json** | Firebase config | Public (GitHub) |
| **.github/workflows/gcp-deploy.yml** | CI/CD pipeline | Public (GitHub) |
| **cloud-config/*.sh** | Setup scripts | Public (GitHub) |
| **.firebase/firebaserc** | Firebase project ID | Public (GitHub) |
| **.gitignore** | Excluded files | Public (GitHub) |
| **package.json** | Dependencies | Public (GitHub) |

**Note**: Sensitive files (API keys, credentials) go in environment variables, never in GitHub.

---

## 📊 Project Metrics

| Metric | Value |
|--------|-------|
| **Total Files Created** | 13 |
| **New Directories** | 4 |
| **Documentation Pages** | 7 |
| **Configuration Files** | 6 |
| **Scripts** | 2 |
| **Total Documentation** | ~15,000 words |
| **Time to Read All Docs** | ~90 minutes |
| **Time to Setup GCP** | ~45 minutes |
| **Time to Design** | 1-2 hours |
| **Time to Deploy** | ~15 minutes |
| **Total Implementation** | 2-3 hours |

---

## ✨ What's New vs. Preserved

### ✅ PRESERVED (Unchanged)
- All website HTML files (`public/`)
- All tools (`tools/`)
- All original assets (`assets/`)
- Original configuration (`cloudbuild.yaml`, `vercel.json`)
- Original docs (`README.md`, `AD_UNITS.md`)

### ✨ NEW (Google Cloud Ecosystem)
- Docker containerization (`Dockerfile`)
- nginx web server (`nginx.conf`)
- GitHub Actions CI/CD (`.github/workflows/`)
- Cloud deployment scripts (`cloud-config/`)
- Comprehensive documentation (`docs/`)
- Firebase Hosting config (`firebase.json`)

---

## 🎯 Quick Navigation

**First Time Setup?**
→ Start with `README_GOOGLE_CLOUD.md`, then follow `docs/GCP_SETUP_CHECKLIST.md`

**Want to Understand the System?**
→ Read `docs/ARCHITECTURE_OVERVIEW.md`

**Ready to Design?**
→ Follow `docs/VERTEX_AI_WORKFLOW.md`

**Ready to Deploy?**
→ Follow `docs/IMPLEMENTATION_GUIDE.md`

**Just Started?**
→ Read `QUICKSTART.md` first

---

## 📞 Finding What You Need

| Question | Answer File |
|----------|-------------|
| "What was created?" | `IMPLEMENTATION_SUMMARY.md` |
| "How do I get started?" | `README_GOOGLE_CLOUD.md` |
| "What's the quick version?" | `QUICKSTART.md` |
| "How does this work?" | `docs/ARCHITECTURE_OVERVIEW.md` |
| "How do I set up GCP?" | `docs/GCP_SETUP_CHECKLIST.md` |
| "How do I design?" | `docs/VERTEX_AI_WORKFLOW.md` |
| "How do I deploy?" | `docs/IMPLEMENTATION_GUIDE.md` |
| "Where are the files?" | `PROJECT_STRUCTURE.md` (this file) |

---

**Last Updated**: June 2026  
**Status**: Complete implementation package ready for use  
**Next Step**: Read `README_GOOGLE_CLOUD.md`
