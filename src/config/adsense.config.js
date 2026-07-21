// Google AdSense configuration.
// Replace these placeholders with your real AdSense IDs, then set ADS_ENABLED = true.
// Also update the <script src="...client=ca-pub-..."> in index.html <head> to match PUBLISHER_ID.
export const ADSENSE = {
  PUBLISHER_ID: "ca-pub-1540793589237523",
  AD_UNIT_TOP: "0000000000",
  AD_UNIT_MID: "0000000000",
  AD_UNIT_SIDEBAR: "0000000000",
  AD_UNIT_FOOTER: "0000000000",
};

// Set to true once your Publisher ID + Ad Unit IDs are filled in.
export const ADS_ENABLED = true;

// Slot -> AdUnit constant key
export const SLOT_MAP = {
  top: "AD_UNIT_TOP",
  mid: "AD_UNIT_MID",
  sidebar: "AD_UNIT_SIDEBAR",
  footer: "AD_UNIT_FOOTER",
};