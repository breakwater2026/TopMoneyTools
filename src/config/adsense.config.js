// Google AdSense configuration.
// PUBLISHER_ID must match ads.txt + index.html client= query.
// AD_UNIT_* are numeric IDs from AdSense → By ad unit (NOT ca-pub-…).
//
// Layout target (Domain 6): max 3 ads/page
//   Desktop: top + sidebar + footer
//   Mobile:  top + footer (sidebar desktopOnly)
//
// TODO: Create units in AdSense, paste numeric IDs below.
export const ADSENSE = {
  PUBLISHER_ID: "ca-pub-1946389838026565",
  AD_UNIT_TOP: "0000000000",
  AD_UNIT_MID: "0000000000", // reserved for in-article if used later
  AD_UNIT_SIDEBAR: "0000000000",
  AD_UNIT_FOOTER: "0000000000",
};

// true = load script path + show shells or live units; placeholders stay shells
export const ADS_ENABLED = true;

export const SLOT_MAP = {
  top: "AD_UNIT_TOP",
  mid: "AD_UNIT_MID",
  sidebar: "AD_UNIT_SIDEBAR",
  footer: "AD_UNIT_FOOTER",
};
