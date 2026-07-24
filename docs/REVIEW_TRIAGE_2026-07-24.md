# Review triage — Grok 4.5 Post Refactoring Review (24 July 2026)

Working tree: `breakwater2026/TopMoneyTools` @ commit after this pass.

## Already true on live code (stale / no action)

| Review item | Status |
|-------------|--------|
| Hangar “Power of Ten” | **Stale** — live is Tool Hangar / Power of our Tools |
| Base44 legal titles | **Gone** — Privacy/Terms/Disclaimer titles clean |
| Fake Ad slot / Financial Sponsorship chrome | **Gone** — `ADS_ENABLED=false`, AdSlot returns null |
| Tool IDs 01–22 continuous | **OK** |
| /tools inventory = hangar | **OK** (shared `TOOLS` registry) |
| Footer Trust: About/Contact/Privacy/Terms/Disclaimer | **OK** |
| /disclaimer live + sitemap | **OK** |
| Privacy dual model (inputs vs AdSense) on Home FAQ / About | **OK** |
| Hero CTA separation | **OK** (Explore calculators + Start here, stacked mobile) |
| Tool shell TrustStrip + explainer + disclaimer | **OK** (Phase 3) |
| Education 40-article parity + overlap differentiation | **OK** (Phase 4) |
| Math smoke tests | **OK** — 65 vitest fixtures |
| Absolute “no tracking ever” marketing | **OK** (only Privacy mentions the phrase as a control statement) |

## Incorporated this pass (high value, residual)

| Fix | Where |
|-----|--------|
| Remove remaining glossary **counts** | Footer, Home glossary card |
| Education hub **educational-only** line + Disclaimer link | `Education.jsx` |
| Drop **Privacy-First** from Home SEO title | `Home.jsx` |
| Tools index educational notice | `ToolsIndex.jsx` |
| Standard article disclaimer footer sitewide | `ArticleShell.jsx` |

## Intentionally not done (out of scope or human-only)

| Item | Why |
|------|-----|
| New legal drafting | Constraint: no new legal text |
| Redesign / new features | Constraint |
| Lighthouse / full interactive math QA | Human/tooling; fixtures already cover core calcs |
| AdSense unit placement | Ads intentionally off until approval |
| www vs apex host redirect | Production DNS/host config (nginx already has www→apex map) |
| Search Console | Human |

## Suggested 10-minute human checklist after deploy

1. Home hangar title + no fake ads  
2. View-source Privacy/Terms titles (no Base44)  
3. Footer Disclaimer 200  
4. /education disclaimer line visible  
5. One article shows shell disclaimer footer  
6. Footer Glossary has no “(N terms)”  
