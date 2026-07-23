// Google AdSense configuration.
// PUBLISHER_ID must match ads.txt + index.html client= query.
// AD_UNIT_* are numeric IDs from AdSense → By ad unit (NOT ca-pub-…).
//
// Layout target (Domain 6): max 3 ads/page
//   Desktop tools: top + sidebar + footer
//   Articles: mid (in-article) + sidebar + footer
//   Mobile: no sidebar (desktopOnly)
export const ADSENSE = {
  PUBLISHER_ID: "ca-pub-1946389838026565",
  AD_UNIT_TOP: "01", // TMT Top banner
  AD_UNIT_MID: "02", // TMT In-article
  AD_UNIT_SIDEBAR: "03", // TMT Sidebar
  AD_UNIT_FOOTER: "04", // TMT Footer
};

// true = load script path + show live units when real ad unit IDs are configured.
// Keep false until AdSense units are approved — avoids "Ad slot / Financial Sponsorship" chrome.
export const ADS_ENABLED = false;

export const SLOT_MAP = {
  top: "AD_UNIT_TOP",
  mid: "AD_UNIT_MID",
  sidebar: "AD_UNIT_SIDEBAR",
  footer: "AD_UNIT_FOOTER",
};
