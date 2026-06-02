# TopMoneyTools - Google Cloud Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Users/Visitors                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │   Custom Domain │
                    │  yourdomain.com │
                    └────────┬────────┘
                             │
                    ┌────────▼────────────┐
                    │  Cloud DNS / CDN    │
                    │  (DNS Resolution)   │
                    └────────┬────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ┌────▼─────┐      ┌─────▼──────┐      ┌─────▼──────┐
   │ Cloud Run │      │  Firebase  │      │   Cloud    │
   │ (Dynamic) │      │  Hosting   │      │   Storage  │
   │           │      │  (Static)  │      │  (Backup)  │
   │ • Server  │      │            │      │            │
   │ • APIs    │      │ • HTML     │      │ • Logs     │
   │ • Container       │ • CSS     │      │            │
   └───────────┘      │ • JS      │      └────────────┘
                      │ • Assets  │
                      └────────────┘
        │
        │
   ┌────▼────────────────────────────┐
   │   GitHub Repository              │
   │   (Source Code & Versioning)     │
   │                                  │
   │   ├── src/                       │
   │   ├── public/                    │
   │   ├── assets/                    │
   │   ├── cloud-config/              │
   │   ├── .github/workflows/          │
   │   └── Dockerfile                 │
   └────┬───────────────────────────┘
        │
        └──────────────────┬──────────────────┐
                           │                  │
                   ┌───────▼────────┐   ┌────▼──────────┐
                   │ GitHub Actions │   │  Google Cloud │
                   │   (CI/CD)      │   │     Console   │
                   │                │   │  (Monitoring) │
                   │ • Build        │   │               │
                   │ • Test         │   │ • Logs        │
                   │ • Deploy       │   │ • Metrics     │
                   └────────────────┘   │ • Alerts      │
                                        └───────────────┘
```

## Component Descriptions

### 1. **Cloud DNS / CDN** (Google's Global Network)
- **Purpose**: Routes traffic to nearest server, fast DNS resolution
- **Responsibility**: Domain name → IP address mapping
- **Cost**: ~$0.40/month + $0.50/million queries
- **Benefit**: Global content delivery, automatic scaling

### 2. **Cloud Run** (Serverless Container Hosting)
- **Purpose**: Hosts your website as a containerized application
- **Technology**: Docker container running nginx web server
- **Scaling**: Automatically scales from 0 to 100+ instances
- **Cost**: ~$0.00001667 per vCPU-second (scales to zero when not used)
- **Responsibility**: 
  - Serve HTML/CSS/JS files
  - Handle user requests
  - Execute any dynamic code

**How it works:**
1. Your code is packaged in a Docker container (Dockerfile)
2. Container runs nginx web server (nginx.conf)
3. nginx serves files from `/usr/share/nginx/html`
4. Cloud Run exposes service on port 8080
5. Traffic automatically distributed across instances

### 3. **Firebase Hosting** (Static Frontend CDN - Optional)
- **Purpose**: Alternative CDN for static assets (backup/redundancy)
- **Technology**: Global edge servers + Firebase backend
- **Cost**: Free tier includes 1GB storage, 10GB/month bandwidth
- **Benefit**: Blazing fast content delivery worldwide

### 4. **GitHub Actions** (CI/CD Pipeline)
- **Purpose**: Automatically builds, tests, and deploys code
- **Trigger**: Every time you push to the main branch
- **Process**:
  1. Detects new code in GitHub repo
  2. Authenticates with GCP using Workload Identity
  3. Builds Docker container
  4. Pushes container to Artifact Registry
  5. Deploys to Cloud Run
  6. Reports status back to GitHub

### 5. **GitHub Repository** (Version Control)
- **Purpose**: Stores all your code and deployment configs
- **Structure**:
  - `public/` - Website files (HTML, CSS, JS)
  - `src/` - Source code for styling
  - `assets/` - Images, fonts, etc.
  - `.github/workflows/` - Deployment automation
  - `cloud-config/` - GCP setup scripts
  - `Dockerfile` - Container definition
  - `nginx.conf` - Web server config

### 6. **Artifact Registry** (Private Container Storage)
- **Purpose**: Stores Docker images built by Cloud Build
- **Cost**: Free tier includes 500MB per month
- **Responsibility**: Version control for container images

### 7. **Workload Identity Federation** (Security)
- **Purpose**: Secure authentication between GitHub and GCP
- **How**: GitHub proves it's your repository → GCP grants temporary token
- **Benefit**: No passwords, no API keys stored in GitHub
- **Alternative**: This is much more secure than personal access tokens

### 8. **Cloud Build** (Container Building Service)
- **Purpose**: Builds Docker containers from your code
- **Responsibility**:
  1. Takes your code from GitHub
  2. Reads Dockerfile
  3. Builds container image
  4. Pushes to Artifact Registry
  5. Notifies Cloud Run to deploy

---

## Data Flow: From Code to Live Website

```
1. Developer makes changes locally
   └─ Edits HTML/CSS/JS files

2. Developer commits and pushes to GitHub
   └─ git push origin main

3. GitHub Actions detects push
   └─ Reads .github/workflows/gcp-deploy.yml

4. GitHub Actions authenticates with GCP
   └─ Uses Workload Identity Federation (no passwords!)

5. GitHub Actions triggers Cloud Build
   └─ Sends code snapshot to Cloud Build

6. Cloud Build reads Dockerfile
   └─ Dockerfile tells Cloud Build:
     - Start with nginx:alpine base image
     - Copy your website files
     - Expose port 8080

7. Cloud Build creates Docker image
   └─ Container now contains nginx + your website

8. Cloud Build pushes image to Artifact Registry
   └─ Image stored and versioned

9. Cloud Build notifies Cloud Run
   └─ "New version available!"

10. Cloud Run pulls new image
    └─ Stops old container
    └─ Starts new container

11. Cloud Run exposes URL
    └─ https://topmoneytools-website-xyz.a.run.app

12. Domain DNS points to Cloud Run
    └─ yourdomain.com → Cloud Run service

13. Visitor loads yourdomain.com
    └─ Browser requests → DNS → Cloud Run → nginx → Your HTML/CSS/JS

14. Website displays in browser! 🎉
```

---

## What Happens When Someone Visits Your Site

```
User opens browser and types: yourdomain.com

1. Browser's DNS lookup: "What's the IP for yourdomain.com?"
   └─ Contacts Cloud DNS
   └─ Cloud DNS responds: "It's at this IP"

2. Browser connects to the IP (Cloud Run load balancer)
   └─ TLS/SSL negotiation (HTTPS)

3. Cloud Run load balancer routes request
   └─ Selects fastest available instance
   └─ Could be instance #1, #5, #72, etc.

4. Cloud Run instance running nginx
   └─ nginx receives HTTP request
   └─ Reads nginx.conf (web server configuration)
   └─ Locates file from /usr/share/nginx/html/

5. nginx checks if file exists
   └─ If index.html: serves it
   └─ If 404: returns index.html (SPA support)
   └─ If image/CSS/JS: serves from /assets/

6. Browser receives HTML
   └─ Parses HTML
   └─ Loads referenced CSS files
   └─ Executes JavaScript
   └─ Renders webpage

7. Page displays to user ✓

---

If traffic spikes:
- Cloud Run automatically scales up (creates more instances)
- Load balancer distributes requests
- Each instance handles ~100 concurrent users
- You only pay for what you use

If traffic drops:
- Instances scale down to zero
- No servers running = $0 cost
- Next request wakes up a new instance
---
```

---

## Cost Breakdown

| Service | Estimated Monthly Cost | When You Pay |
|---------|----------------------|--------------|
| Cloud Run | $0-5 | Per request/vCPU-second |
| Cloud Build | $0 | Free 120 build-minutes/day |
| Cloud DNS | $0.40 + $0.50/million | Always + per query |
| Artifact Registry | $0 | Free 500MB/month |
| Firebase Hosting | $0 | Free tier (10GB bandwidth) |
| **Total** | **$5-15/month** | Usage-based |

**Important**: You only pay for Cloud Run when someone uses your site!

---

## Three-Phase Development Workflow

### Phase 1: Architect (Construction)
- **Who**: Gemini 1.5 Pro (from Vertex AI Studio)
- **Input**: Your scripted content
- **Output**: Complete HTML structure with Tailwind CSS
- **Location**: Vertex AI Studio (web interface)
- **Cost**: Covered by GenAI App Builder credits ✅

### Phase 2: Handover (Serialization)
- **Who**: You (manual)
- **Input**: HTML from Phase 1
- **Output**: JSON structure for Phase 3
- **Purpose**: Bridge between construction and styling
- **Cost**: Free

### Phase 3: Stylist (Marketing & UX)
- **Who**: Gemini 1.5 Flash (faster, more cost-efficient)
- **Input**: JSON from Phase 2
- **Output**: Complete CSS + brand guidelines
- **Location**: New Vertex AI Studio session
- **Cost**: Covered by GenAI App Builder credits ✅

Then deploy using:
- VS Code (local editing)
- GitHub (version control)
- GitHub Actions (automated deployment)
- Cloud Run (live hosting)

---

## Security Architecture

### Authentication & Authorization

```
GitHub Action → Workload Identity → Service Account → Cloud Run
   (CI/CD)        (No Passwords!)       (Permissions)    (Deploy)
```

**Why this is secure:**
1. No API keys in GitHub ✓
2. No passwords stored anywhere ✓
3. Google Cloud generates temporary tokens (expires in ~5 minutes) ✓
4. Service account has minimum required permissions ✓
5. Each deployment is audited and logged ✓

### Network Security

```
User Browser
    ↓
TLS/SSL Encryption (HTTPS)
    ↓
Cloud Run (no public SSH, only HTTPS)
    ↓
Firewall (Google Cloud's managed)
    ↓
Container (isolated from other containers)
```

### Data Protection

- **In Transit**: HTTPS (TLS 1.2+) encryption
- **At Rest**: Google's encrypted storage
- **Access Logs**: Stored in Cloud Logging (encrypted)
- **Backups**: Cloud Storage (separate encrypted bucket)

---

## Scalability Features

### Horizontal Scaling (More Servers)
```
1 visitor    → 1 instance
10 visitors  → 2 instances
100 visitors → 5 instances
1000 visitors → 50 instances
0 visitors   → 0 instances (costs nothing!)
```

### Vertical Scaling (Bigger Servers)
```
Current: 1 vCPU, 512MB RAM per instance
Can upgrade to: 2-4 vCPUs, 1-8GB RAM per instance
(Configured in cloud-run-deploy.sh)
```

### Geographic Distribution
```
All users → Nearest Google Cloud region (us-central1)
         → Nearest CDN edge location globally
         → Cached content served from closest server
```

---

## Monitoring & Observability

### Built-in Cloud Monitoring

```
Cloud Console → Cloud Run Service → Metrics & Logs

Tracked metrics:
- Request count
- Error rate (4xx, 5xx)
- Latency (p50, p95, p99)
- CPU usage
- Memory usage
- Container startup time
```

### How to Access

1. **Cloud Console**: https://console.cloud.google.com
2. **Cloud Run Service**: Search "Cloud Run" → topmoneytools-website
3. **Logs**: Cloud Logging → All logs filtered by service name
4. **Alerts**: Create custom alerts (e.g., "notify if error rate > 5%")

### Common Metrics to Monitor

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| Error Rate | < 1% | 1-5% | > 5% |
| P95 Latency | < 500ms | 500-1000ms | > 1000ms |
| Requests/sec | Varies | Varies | > 100 |
| Availability | > 99.9% | 99.5-99.9% | < 99.5% |

---

## Disaster Recovery

### If something breaks:

```
1. Check Cloud Run logs
   gcloud run logs read topmoneytools-website --limit 100

2. Rollback to previous version
   gcloud run services update-traffic topmoneytools-website \
       --to-revisions PREVIOUS_REVISION_ID=100

3. Fix code locally
   git revert COMMIT_HASH
   git push origin main

4. GitHub Actions auto-deploys fix
```

### If Cloud Run service is down:

```
1. Verify Cloud Run is still running
   gcloud run services describe topmoneytools-website

2. Check region isn't having outages
   https://status.cloud.google.com/

3. If truly down, Cloud Run has 99.95% SLA
   Google handles recovery automatically
```

---

## Next Steps

1. ✅ Review this architecture
2. ✅ Complete [GCP_SETUP_CHECKLIST.md](GCP_SETUP_CHECKLIST.md)
3. ✅ Use [VERTEX_AI_WORKFLOW.md](VERTEX_AI_WORKFLOW.md) for design
4. ✅ Follow [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md) for deployment
5. ✅ Deploy to Cloud Run and go live!

---

**Last Updated**: June 2026  
**Architecture Version**: 1.0 (Google Cloud-Native)  
**Status**: Production-Ready
