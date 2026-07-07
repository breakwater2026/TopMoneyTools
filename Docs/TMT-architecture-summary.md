# TopMoneyTools Terraform-like Architecture

This document is intended for Google Cloud Assist / App Design Center review to identify product/services SKUs and compare them against available credits.

## Target architecture

### User-facing entry and UI
- Global External HTTPS Load Balancer
- Cloud Run service: `qa-service`
- Optional static assets bucket for frontend assets if needed

### Orchestration
- Vertex AI Agent Engine service: `genai-agent-engine`
- Purpose: root supervisor / master agent orchestration for content creation, market intelligence, style review, coding workflow coordination, and deployment workflow coordination

### Stateful memory and retrieval
- Cloud SQL for PostgreSQL: `genai-primary-db`
- Purpose:
  - task state
  - approval records
  - decision log
  - project memory
  - semantic retrieval metadata / pgvector if enabled

### Artifact and document storage
- Cloud Storage bucket: `genai-assets-bucket`
- Purpose:
  - uploaded source documents
  - competitor screenshots
  - generated reports
  - workflow artifacts

### Background ingestion / worker service
- Cloud Run service: `ingestion-service`
- Purpose:
  - process uploaded documents
  - prepare data for retrieval
  - write extracted metadata into PostgreSQL

### Secrets and credentials
- Secret Manager secrets:
  - `genai-db-secret`
  - `genai-ingestion-db-secret`

### Existing workflow integration
- GitHub already connected to Cloud Run for CI/CD
- VS Code used as development environment
- Human approval required before PR merge or production deploy

## Logical connections
- User browser -> Global External HTTPS Load Balancer -> `qa-service`
- `qa-service` -> Vertex AI Agent Engine (`genai-agent-engine`)
- `qa-service` -> Cloud SQL PostgreSQL (`genai-primary-db`)
- `qa-service` -> Secret Manager (`genai-db-secret`)
- `qa-service` -> Cloud Storage (`genai-assets-bucket`)
- `ingestion-service` -> Cloud Storage (`genai-assets-bucket`)
- `ingestion-service` -> Cloud SQL PostgreSQL (`genai-primary-db`)
- `ingestion-service` -> Secret Manager (`genai-ingestion-db-secret`)
- Vertex AI Agent Engine (`genai-agent-engine`) -> Cloud SQL PostgreSQL (`genai-primary-db`)
- Vertex AI Agent Engine (`genai-agent-engine`) -> Cloud Storage (`genai-assets-bucket`) if artifact access is needed

## Main GCP product families likely involved
- Cloud Run
- Vertex AI / Agent Engine
- Cloud SQL for PostgreSQL
- Cloud Storage
- Secret Manager
- Cloud Load Balancing / Cloud CDN / networking-related HTTPS entry services
- Logging / Monitoring may be automatically relevant depending on deployment choices

## Notes for Cloud Assist SKU review
Please identify:
1. Product/service SKUs involved for this architecture.
2. Which SKUs are typically eligible to be offset by project credits in the linked billing account.
3. Which components are fixed-cost versus usage-based.
4. Whether any hidden networking or observability costs are likely to appear.
5. Whether Agent Engine and Gemini/Vertex AI usage are billed under separate SKUs from general Cloud Run or database resources.
