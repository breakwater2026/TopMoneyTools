# Configure the Google Cloud Provider
provider "google" {
  project = "project-7ee9ba0e-6038-467d-83a"
  region  = "us-central1"
}

# 1. Cloud Storage Bucket for raw files and task artifacts
module "genai_assets_bucket" {
  source        = "terraform-google-modules/cloud-storage/google//modules/simple_bucket"
  version       = "~> 6.0"
  name          = "genai-ingestion-bucket-123"
  project_id    = "project-7ee9ba0e-6038-467d-83a"
  location      = "us-central1"
  storage_class = "STANDARD"
}

# 2. Secret Manager for Database Credentials
module "genai_db_secret" {
  source     = "GoogleCloudPlatform/secret-manager/google//modules/simple-secret"
  version    = "~> 0.9"
  name       = "genai-db-credentials"
  project_id = "project-7ee9ba0e-6038-467d-83a"
}

# 3. Cloud SQL for PostgreSQL (Vector Database)
module "genai_primary_db" {
  source           = "terraform-google-modules/sql-db/google//modules/postgresql"
  version          = "~> 28.0"
  name             = "genai-knowledge-db"
  project_id       = "project-7ee9ba0e-6038-467d-83a"
  database_version = "POSTGRES_15"
  region           = "us-central1"
}

# 4. Vertex AI Agent Engine (Master Agent Orchestrator)
resource "google_vertex_ai_reasoning_engine" "genai_agent_engine" {
  display_name = "genai-agent-engine"
  project      = "project-7ee9ba0e-6038-467d-83a"
  region       = "us-central1"

  spec {
    package_spec {
      python_version = "3.10"
      requirements_gcs_uri = "gs://${module.genai_assets_bucket.name}/requirements.txt"
    }
  }
}

# 5. Cloud Run Service (User Interface & Frontend)
module "genai_app_tier" {
  source       = "GoogleCloudPlatform/cloud-run/google//modules/v2"
  version      = "~> 0.33"
  service_name = "qa-service"
  project_id   = "project-7ee9ba0e-6038-467d-83a"
  location     = "us-central1"
  ingress      = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"

  containers = [
    {
      container_image = "us-docker.pkg.dev/cloudrun/container/hello"
      env_vars = {
        "DATABASE_URL"             = module.genai_primary_db.instance_connection_name
        "VERTEX_AGENT_ENGINE_URL"  = google_vertex_ai_reasoning_engine.genai_agent_engine.id
      }
    }
  ]
}

# 6. Global HTTP(S) Load Balancer (Frontend Entry Point)
module "genai_ingress_lb_backend" {
  source     = "terraform-google-modules/lb-http/google//modules/backend"
  version    = "~> 14.0"
  name       = "genai-qa-lb-backend"
  project_id = "project-7ee9ba0e-6038-467d-83a"
  protocol   = "HTTP"

  serverless_neg_backends = [
    {
      region       = "us-central1"
      type         = "cloud-run"
      service_name = module.genai_app_tier.service_name
    }
  ]
}

module "genai_ingress_lb_frontend" {
  source     = "terraform-google-modules/lb-http/google//modules/frontend"
  version    = "~> 14.0"
  name       = "genai-qa-lb-frontend"
  project_id = "project-7ee9ba0e-6038-467d-83a"
  
  url_map_input = module.genai_ingress_lb_backend.backend_service_info
}
