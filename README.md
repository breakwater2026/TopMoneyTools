# TopMoneyTools

Privacy-first financial calculators and guides. All tools run locally in your browser.

<<<<<<< HEAD
## Repository layout

The website source is now contained under the `Website/` folder.

- `Website/` - the web application source, config, public assets, and Docker build context
- root folder - repository metadata and supporting files for development

## Cloud Build / Deployment

The root `cloudbuild.yaml` builds the Docker image from the `Website/` directory:

```bash
cloudbuild.yaml -> dir: 'Website'
```

=======
>>>>>>> parent of ceb17cf (Move website source into Website/ and document new repo layout)
## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Linting

```bash
npm run lint
```
