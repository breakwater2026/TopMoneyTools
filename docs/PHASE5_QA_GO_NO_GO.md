# Phase 5 — QA / SEO go–no-go (TMT-Grok sandbox)

**Date:** 2026-07-23  
**Repo:** `breakwater2026/TMT-Grok` only (not production TopMoneyTools)  
**Scope:** Pre-AdSense / release-train gate after Phases 1–4  

Automated check: `npm run qa:phase5`  
Regenerate sitemap: `npm run sitemap`

***

## Global P0 gates (from Website-Grok Page Checklist)

| # | Check | Status | Evidence / notes |
|---|--------|--------|------------------|
| G1 | HTTPS | **Human (prod)** | Sandbox localhost HTTP OK. Production must force HTTPS + no mixed content. |
| G2 | Canonical host | **Human (prod)** | App SEO uses `SITE.baseUrl` apex (`https://topmoneytools.com`). Confirm www→apex (or reverse) on host. |
| G3 | Footer legal | **Pass** | About · Contact · Privacy · Terms · Disclaimer in Trust column (`Footer.jsx`). |
| G4 | Privacy vs marketing | **Pass** | No absolute “no tracking ever” in marketing JSX (Privacy may discuss the phrase). Root `index.html` meta aligned with calculator-vs-ads split. |
| G5 | Fake ad slots | **Pass** | `ADS_ENABLED = false`; `AdSlot` returns `null` without real unit IDs. |
| G6 | Contact works | **Pass (mailto)** | `contact@topmoneytools.com` only. Human: confirm inbox monitored. |
| G7 | Disclaimer live | **Pass** | `/disclaimer` routed + page + footer + sitemap. |
| G8 | Terms live | **Pass** | `/terms` routed + full legal pack + sitemap. |
| G9 | Privacy AdSense clauses | **Pass** | AdSense, cookies, opt-outs, calculator split, last updated. |
| G10 | About identity | **Pass** | André Denis · Montreal, Quebec · not-advice · build date in footer. |
| G11 | Sitemap | **Pass** | **76 URLs** — core + 22 tools + how-our-calculators-work + 40 education + legal. Generator: `scripts/gen-sitemap.py`. |
| G12 | Search Console | **Human (prod)** | Not automatable in sandbox. After deploy: verify property; submit sitemap. |
| G13 | Mobile | **Pass (code)** | Hangar responsive shell, `min-h-dvh`, focus-visible, 44px targets. Human: spot-check 360px on 2–3 tools. |
| G14 | ads.txt | **Pass** | `public/ads.txt` present with publisher line. |
| G15 | Title tags | **Pass** | No Base44 defaults found. Root title cleaned. |

**Automated P0 script result (2026-07-23):** `FAIL: 0` / `WARN: 0`

***

## Inventory gates

| Surface | Target | Actual | Status |
|---------|--------|--------|--------|
| Tools (hangar) | 01–22 | 22 in `site.config` TOOLS | Pass |
| Tool explainers | 22 | `toolExplainers.js` keyed per slug | Pass |
| Trust strip + /disclaimer on tools | all | `ToolPageShell` | Pass |
| Education articles | 101–140 (40) | 40 in `ARTICLES` + routes | Pass |
| Articles 126–140 in sitemap | 15 | present | Pass |
| Budgeting series distinct | 102 / 104 / 127 | lanes rewritten + banners | Pass |

***

## Calculator definition-of-done (sample gate)

All 22 tools share shell features: TrustStrip, explainer sections (what/when/how/example/assumptions/read/mistakes), FAQ accordion, related links, not-advice + disclaimer.

| Criterion | Status |
|-----------|--------|
| Body depth (shared explainer) | Pass (systemic) |
| Worked example section | Pass (per explainer data) |
| Assumptions list | Pass |
| Not-advice + /disclaimer | Pass |
| Internal links (articles/tools) | Pass (related block) |
| Unique meta | Mostly pass — each tool page sets own SEO via shell props; spot-check any thin titles in a later polish pass |
| Formula sense-check | **Human** — sample 2–3 tools vs spreadsheet before AdSense submit |
| No Lorem/TODO chrome | Pass (scan) |

***

## Education definition-of-done

| Criterion | Status |
|-----------|--------|
| 40 index cards | Pass |
| H2 structure on new 15 | Pass |
| Tool links on new 15 | Pass |
| Differentiation banners on overlap pairs | Pass |
| Budgeting 102 vs 104 split | Pass |
| Housing path 115→136→130 | Pass |
| Word-count perfection on oldest 25 | **Optional polish** — not blocking Phase 5 gate |

***

## Human-only before production / AdSense

1. Deploy sandbox build to a staging host (or production when you order).  
2. Confirm HTTPS + host canonical redirect.  
3. Google Search Console: property + sitemap submit (`/sitemap.xml`).  
4. Click `mailto:contact@topmoneytools.com` end-to-end.  
5. Mobile smoke: home, one YMYL tool (mortgage/FIRE), one new article, legal footer.  
6. Formula spot-check: mortgage, compound interest, FIRE number.  
7. When AdSense units approved: set real unit IDs + `ADS_ENABLED = true` — never re-enable fake chrome.  
8. **Do not** merge to original TopMoneyTools until you explicitly order it.

***

## Go / No-go

| Track | Verdict |
|-------|---------|
| **Sandbox code gate (Phase 5 automated + P0 legal/SEO inventory)** | **GO** |
| **Production deploy** | **HOLD** — human host/GSC/HTTPS items above |
| **AdSense application / ads on** | **HOLD** — ads off by design; human approval + real units |
| **Merge to baseline TopMoneyTools** | **HOLD** — isolation rule |

***

## Commands

```bash
npm run sitemap      # regenerate public/sitemap.xml
npm run qa:phase5    # automated P0 inventory gates
npm run build
npm test
```

***

## Phase map (refactor arc)

| Phase | Status |
|-------|--------|
| 1 Trust / legal | Done |
| 2 Design chrome | Done |
| 3 Tool shell + explainers | Done |
| 4 Education 126–140 | Done |
| 5 QA / SEO gate | **Done (this doc)** |
| 6 Production merge / AdSense on | Not started — your order |

