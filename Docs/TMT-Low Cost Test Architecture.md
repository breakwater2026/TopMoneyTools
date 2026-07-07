Below is a concrete, low-cost POC plan.

Goal of the POC
Confirm how free trial vs GenAI/Agent Builder credits are applied in practice.

Exercise:

Cloud Run

Vertex AI Agent Engine / Gemini (or at least one agentic path)

Cloud Storage

Avoid Cloud SQL initially so you don’t burn fixed costs while still learning your credit behavior.

Minimal-cost POC architecture
Use a “V1–lite” version of the architecture:

Cloud Run

qa-service-poc: a very small service that:

takes your natural-language instructions,

calls Agent Engine (or a single Gemini model) once,

writes a tiny JSON transcript to Cloud Storage.

No private VPC or DB integration yet.

Vertex AI / Agent Engine

One simple agent definition:

input: text task,

tools: none or trivial function tools,

output: a structured plan + explanation.

Keep calls short and infrequent to limit token usage.

Cloud Storage

tmt-poc-artifacts: one bucket.

Store:

generated plans,

logs in JSON,

a simple “memory” file (you can move this to SQL later).

Secret Manager

Only if needed for API keys or small config;

one or two secrets max.

No Cloud SQL yet

Temporary “memory” is just JSON files in the bucket for this POC.

This way, your only meaningful paid components at low load are:

Cloud Run (usage-based, tiny for a single container with low traffic).

Vertex AI Agent Engine / Gemini (token-based).

Cloud Storage (cents per GB).

Your fixed-cost monster (Cloud SQL) is not yet switched on.

Concrete POC spec
You can think of this as “TopMoneyTools Supervisor Lite.”

Cloud Run qa-service-poc

0.25 vCPU, 256–512 MiB RAM.

Concurrency: 10–20.

Single endpoint /task that:

receives a JSON body with task_text,

passes it to Agent Engine or a single Gemini call,

writes a result JSON to tmt-poc-artifacts.

Agent Engine

One agent:

description: “TopMoneyTools POC supervisor.”

instructions: lightweight version of your Overarching Principles.

no external data sources yet.

Used to answer only a few POC queries per day.

Cloud Storage

Bucket: tmt-poc-artifacts.

Objects:

runs/<date>/<task_id>.json with:

input,

model response,

any decisions/flags.

Secret Manager (optional)

tmt-poc-config with:

environment flags,

maybe a feature toggle for DB usage when you later add Cloud SQL.

POC experiment design
The POC should be explicitly about billing behavior:

Enable Billing Export

Follow the Cloud Assist instructions you already have to enable standard cost export to BigQuery for the billing account.

Deploy qa-service-poc and one agent

Use the smallest sensible CPU/memory configuration on Cloud Run.

Run a small, controlled workload

For example:

5–10 test tasks per day for 2–3 days.

Each task: a short instruction like:

“Propose 3 new page ideas for TopMoneyTools users with low financial literacy.”

“Summarize the key risks of using high-interest credit cards in one paragraph.”

Inspect billing export

After 24–48 hours, query the billing export:

group by service.description and sku.description,

check which line items have:

amount > 0,

which credits applied,

which credit type (free trial vs GenAI).

You should see:

Cloud Run SKUs,

Vertex AI / Agent Builder / Search / Gemini SKUs,

Cloud Storage SKUs (tiny).

Decide about Cloud SQL

Once you see:

how quickly free trial credits are dropping, and

whether GenAI credits are indeed applied only to Agent Engine/Search,

you can decide whether to:

introduce Cloud SQL in POC #2, or

keep using Storage-based state for a while.

Why this is the right next step
It gives you real data on:

which SKUs appear,

which credits are consumed,

how fast they burn,
without committing to a Cloud SQL monthly baseline.

It exercises Agent Engine in a realistic, low-intensity way.

It still moves the TopMoneyTools project forward (you’ll get real plans and content suggestions) instead of a synthetic test.

If you’d like, next I can
Draft a minimal qa-service-poc Cloud Run spec (Dockerfile or gcloud run deploy command plus a simple Python/Node handler) that:

reads your Overarching Principles file or embeds a trimmed version,

sends one structured request to Agent Engine,

writes a JSON artifact to Cloud Storage, and

is engineered for minimum cost (small resources, low concurrency, no DB).

