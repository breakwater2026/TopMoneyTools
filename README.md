# TopMoneyTools

Privacy-first financial calculators and guides. All tools run locally in your browser.

## Repository layout

The website source is now contained under the `Website/` folder.

- `Website/` - the web application source, config, public assets, and Docker build context
- root folder - repository metadata and supporting files for development

## Cloud Build / Deployment

The root `cloudbuild.yaml` builds the Docker image from the `Website/` directory:

```bash
cloudbuild.yaml -> dir: 'Website'
```

## Local Development

```bash
cd Website
npm install
npm run dev
```

## Build

```bash
cd Website
npm run build
```

## Linting

```bash
cd Website
npm run lint
```
