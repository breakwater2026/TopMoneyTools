# Legacy Files - Previous Architecture

This folder contains files from the **original TopMoneyTools website architecture** (pre-Google Cloud).

## 📁 Contents

### `original-pages/`
Original HTML page structure:
- `about/` - About page
- `contact/` - Contact page
- `disclaimer/` - Disclaimer page
- `private-policy/` - Privacy policy page
- `terms/` - Terms of service page

These have been preserved for reference. The active website pages are now in `public/`.

### Configuration Files

| File | Purpose | Status |
|------|---------|--------|
| **vercel.json** | Vercel deployment config (no longer used) | Archived |
| **cloudbuild.yaml** | Old Cloud Build config (replaced by new version in root) | Archived |
| **README_ORIGINAL.md** | Original project README | Reference only |

## 🔄 What's Been Moved

### To Root (Still Active)
These files are still needed and remain in the root:
- `public/` - Active website files
- `assets/` - CSS, images, and other assets
- `tools/` - Calculator tools (debt-cost, food-inflation)
- `package.json` - Dependencies
- `favicon.ico` - Site favicon
- `ads.txt` - AdSense configuration
- `robot.txt` - SEO robots file
- `AD_UNITS.md` - AdSense units documentation

### To Google Cloud Architecture (New)
Created in root for new architecture:
- `.github/workflows/` - GitHub Actions CI/CD
- `cloud-config/` - Google Cloud setup scripts
- `docs/` - Comprehensive guides
- `src/` - Vertex AI outputs
- `Dockerfile` - Container definition
- `nginx.conf` - Web server config
- `firebase.json` - Firebase Hosting
- `cloudbuild.yaml` - NEW version (Cloud Run)
- `README_GOOGLE_CLOUD.md` - Google Cloud documentation

## 📝 Why This Organization

**Old Architecture**: Vercel + static files  
**New Architecture**: Google Cloud Run + containerized application

The legacy folder preserves the original structure for:
- Reference and rollback if needed
- Understanding the evolution
- Comparing old vs. new approaches

## 🚀 Current Development

**Active workflows** use the **Google Cloud architecture**:
1. Edit files in `public/`, `assets/`, `tools/`
2. Push to GitHub
3. GitHub Actions auto-deploys to Cloud Run

**Do NOT use** the old Vercel or legacy cloud build configs.

## 📚 Documentation

For the new architecture, see:
- Root: `START_HERE.md`
- `docs/ARCHITECTURE_OVERVIEW.md`
- `docs/GCP_SETUP_CHECKLIST.md`
- `README_GOOGLE_CLOUD.md`

---

**Last Archived**: June 2026  
**Status**: Reference only
