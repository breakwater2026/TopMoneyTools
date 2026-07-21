// Google AdSense configuration.
// Replace these placeholders with your real AdSense IDs, then set ADS_ENABLED = true.
// Also update the <script src="...client=ca-pub-..."> in index.html <head> to match PUBLISHER_ID.
//
// 🎯 AdSense Unit Plan:
// - AD_UNIT_TOP: Header leaderboard (728x90 or 320x50)
// - AD_UNIT_MID: In-content ad (responsive between paragraphs)
// - AD_UNIT_SIDEBAR: Sticky vertical ad (300x600 or 160x600)
// - AD_UNIT_FOOTER: Bottom rectangle (300x250)
//
// ⚠️ TODO: Create actual ad units in AdSense → "By site" → topmoneytools.com → "By ad unit"
// Then paste the ad unit IDs here.
export const ADSENSE = {
  PUBLISHER_ID: "ca-pub-1946389838026565",
  AD_UNIT_TOP: "0000000000",       // ← Create in AdSense → replace with numeric ID
  AD_UNIT_MID: "0000000000",       // ← Create in AdSense → replace with numeric ID
  AD_UNIT_SIDEBAR: "0000000000",   // ← Create in AdSense → replace with numeric ID
  AD_UNIT_FOOTER: "0000000000",    // ← Create in AdSense → replace with numeric ID
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