# Ad Units — TopMoneyTools

The site uses 4 manual AdSense slots, mapped in `src/config/adsense.config.js`.
All four IDs are currently the placeholder `"0000000000"` — until real IDs are
entered, every slot renders a "Financial Sponsorship" placeholder and no ads serve.

## Ad units to create in AdSense (Ads → By ad unit → New)

| Config key        | Suggested unit name | Type                     | Used on |
|-------------------|---------------------|--------------------------|---------|
| `AD_UNIT_TOP`     | tmt_top_banner      | Display (horizontal)     | Home, tool pages, all index pages |
| `AD_UNIT_MID`     | tmt_mid_inarticle   | In-article (fluid)       | Home mid, article pages (in-content) |
| `AD_UNIT_SIDEBAR` | tmt_sidebar_rect    | Display (vertical/rect)  | Tool pages + article pages (MoneyBasicsSidebar) |
| `AD_UNIT_FOOTER`  | tmt_footer_banner   | Display (horizontal)     | Every page (Layout Footer) |

## Ad density per page (max 3 — policy limit)

- Tool pages:   top + sidebar + footer = 3
- Article pages: mid (in-article) + sidebar + footer = 3
- Home:         top + mid + footer = 3
- Index pages:  top + footer = 2

## Steps

1. Create the 4 units in AdSense, copy each numeric Slot ID (`data-ad-slot`).
2. Paste them into `src/config/adsense.config.js` replacing the `"0000000000"` values.
3. Deploy, then verify a live page renders a real `<ins>` instead of the placeholder.

## Notes

- Slot heights use `min-h-*` reservations (not fixed heights) so larger
  high-RPM creatives (300x250, 336x280, 728x90, 300x600) can serve without CLS.
- The mid unit on article pages is created as **In-article** and rendered with
  `data-ad-format="fluid"` + `data-ad-layout="in-article"`.
- Consider also enabling Auto Ads (anchor on mobile) in AdSense → Ads → By site.
