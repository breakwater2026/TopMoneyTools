# Project Organization Guide

This document explains how the TopMoneyTools project is organized after the migration to Google Cloud.

## 📂 Root-Level Structure

```
TopMoneyTools/
│
├── 📁 legacy/                        ← OLD ARCHITECTURE (archived)
│   ├── original-pages/               Original HTML pages
│   ├── vercel.json                   Old Vercel config
│   ├── cloudbuild.yaml               Old Cloud Build config
│   └── README.md                     Legacy documentation
│
├── 📁 PUBLIC WEBSITE FILES (Active) ─────────────────────
│   ├── 📁 public/                    HTML pages served by nginx
│   ├── 📁 assets/                    CSS, images, fonts
│   ├── 📁 tools/                     Calculator applications
│   └── 📁 src/                       Vertex AI design outputs
│
├── 📁 GOOGLE CLOUD ARCHITECTURE ─────────────────────
│   ├── 📁 .github/workflows/         GitHub Actions CI/CD
│   ├── 📁 cloud-config/              GCP setup scripts
│   ├── 📁 docs/                      Comprehensive guides
│   ├── Dockerfile                    Container definition
│   ├── nginx.conf                    Web server config
│   ├── firebase.json                 Firebase Hosting config
│   └── cloudbuild.yaml               Cloud Build config (NEW)
│
├── 📁 DOCUMENTATION ─────────────────────────────────
│   ├── START_HERE.md                 👈 Start here
│   ├── README_GOOGLE_CLOUD.md        Project overview
│   ├── QUICKSTART.md                 Quick start guide
│   ├── PROJECT_STRUCTURE.md          File organization
│   ├── IMPLEMENTATION_SUMMARY.md     What was created
│   └── ORGANIZATION_GUIDE.md         This file
│
└── OTHER FILES
    ├── package.json                  Node dependencies
    ├── ads.txt                       AdSense config
    ├── robot.txt                     SEO robots
    ├── favicon.ico                   Site icon
    ├── AD_UNITS.md                   AdSense documentation
    ├── .gitignore                    Git exclusions
    ├── .git/                         Git repository
    └── .firebase/                    Firebase config
```

---

## 🗂️ File Categories

### 🌐 ACTIVE WEBSITE FILES (Keep in Root)
**Purpose**: Served to users via Cloud Run

- `public/` - HTML pages and site structure
- `assets/` - CSS, images, fonts
- `tools/` - Calculator tools
- `package.json` - Dependencies for npm scripts
- `ads.txt` - AdSense publisher ID
- `robot.txt` - Search engine crawling
- `favicon.ico` - Browser tab icon

**These files are actively used and modified.**

---

### 🚀 GOOGLE CLOUD INFRASTRUCTURE (New)
**Purpose**: Cloud deployment and automation

**Container & Web Server:**
- `Dockerfile` - Docker image definition
- `nginx.conf` - Web server configuration

**Deployment:**
- `.github/workflows/gcp-deploy.yml` - GitHub Actions pipeline
- `cloud-config/` - GCP setup scripts
- `firebase.json` - Firebase Hosting config
- `cloudbuild.yaml` - Cloud Build configuration (NEW)

**Documentation:**
- `docs/ARCHITECTURE_OVERVIEW.md` - System design
- `docs/GCP_SETUP_CHECKLIST.md` - Setup guide
- `docs/VERTEX_AI_WORKFLOW.md` - AI design pipeline
- `docs/IMPLEMENTATION_GUIDE.md` - Deployment guide

**Vertex AI Outputs:**
- `src/` - Stores design outputs from Vertex AI

---

### 📚 QUICK START DOCUMENTATION
**Purpose**: Getting started with the project

**Read in this order:**
1. `START_HERE.md` - Entry point (2 min)
2. `README_GOOGLE_CLOUD.md` - Overview (10 min)
3. `QUICKSTART.md` - Getting started (5 min)
4. `PROJECT_STRUCTURE.md` - File reference (10 min)
5. `docs/ARCHITECTURE_OVERVIEW.md` - Deep dive (15 min)

---

### 🗃️ LEGACY FILES (Archived)
**Purpose**: Reference only (old architecture)

**Location**: `legacy/` folder

- `original-pages/` - Old HTML page structure
- `vercel.json` - Old Vercel deployment config
- `cloudbuild.yaml` - Old Cloud Build config
- `README_ORIGINAL.md` - Original project README

**Status**: Archive only, not used in current development

---

## 🔄 Development Workflow

### When You Edit Your Website

1. **Edit active files**:
   ```
   public/index.html          (homepage)
   public/about/index.html    (pages)
   assets/css/               (styling)
   tools/                     (tools)
   ```

2. **Commit to GitHub**:
   ```bash
   git add .
   git commit -m "Update homepage"
   git push origin main
   ```

3. **Automatic deployment** (via `.github/workflows/gcp-deploy.yml`):
   - GitHub Actions triggers
   - Builds Docker container
   - Deploys to Cloud Run
   - Website updates live

---

## 📊 File Status Summary

| File/Folder | Type | Status | Location |
|------------|------|--------|----------|
| `public/` | Website | ✅ Active | Root |
| `assets/` | Website | ✅ Active | Root |
| `tools/` | Website | ✅ Active | Root |
| `Dockerfile` | Infrastructure | ✅ Active | Root |
| `nginx.conf` | Infrastructure | ✅ Active | Root |
| `.github/workflows/` | CI/CD | ✅ Active | Root |
| `cloud-config/` | GCP Setup | ✅ Active | Root |
| `docs/` | Documentation | ✅ Active | Root |
| `legacy/` | Archive | 📦 Archived | `legacy/` |
| `vercel.json` | Config | 📦 Archived | `legacy/` |
| Old cloudbuild.yaml | Config | 📦 Archived | `legacy/` |

---

## 🚫 What You Should NOT Do

❌ **Don't edit files in `legacy/`** - This is archive only  
❌ **Don't push to Vercel** - Using Cloud Run now  
❌ **Don't use old cloudbuild.yaml** - Use new one in root  
❌ **Don't deploy manually** - GitHub Actions handles it  

---

## ✅ What You SHOULD Do

✅ **Edit files in `public/`, `assets/`, `tools/`**  
✅ **Push to GitHub main branch**  
✅ **GitHub Actions auto-deploys**  
✅ **Check Cloud Logging for status**  
✅ **Use Vertex AI for design** (see `docs/VERTEX_AI_WORKFLOW.md`)  

---

## 📍 Key Locations

| Need | File/Folder | Location |
|------|-------------|----------|
| **Edit website** | `public/`, `assets/` | Root |
| **Setup GCP** | `docs/GCP_SETUP_CHECKLIST.md` | docs/ |
| **Understand architecture** | `docs/ARCHITECTURE_OVERVIEW.md` | docs/ |
| **Deploy** | `.github/workflows/gcp-deploy.yml` | .github/workflows/ |
| **Web server config** | `nginx.conf` | Root |
| **Container setup** | `Dockerfile` | Root |
| **Old pages (reference)** | `legacy/original-pages/` | legacy/ |
| **Getting started** | `START_HERE.md` | Root |

---

## 🎯 Next Steps

1. **Read** `START_HERE.md` (in root)
2. **Follow** `docs/GCP_SETUP_CHECKLIST.md`
3. **Edit** website files in `public/`, `assets/`, `tools/`
4. **Push** to GitHub
5. **Watch** GitHub Actions deploy automatically

---

## 📞 Quick Help

**"Where should I edit?"**  
→ `public/`, `assets/`, `tools/`

**"How do I deploy?"**  
→ Push to GitHub main branch (automatic)

**"How do I understand the architecture?"**  
→ Read `docs/ARCHITECTURE_OVERVIEW.md`

**"What about the old files?"**  
→ They're in `legacy/` for reference only

**"How do I design with AI?"**  
→ Follow `docs/VERTEX_AI_WORKFLOW.md`

---

**Created**: June 2026  
**Status**: Current organization structure  
**Last Updated**: June 2026
