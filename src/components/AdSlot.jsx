import { useEffect, useRef, useState } from "react";
import { ADSENSE, ADS_ENABLED, SLOT_MAP } from "@/config/adsense.config";

// Fixed minimum heights per slot type for CLS prevention.
const SLOT_HEIGHTS = {
  top: 90,
  mid: 250,
  sidebar: 280,
  footer: 90,
};

// AdSense-compliant label variants rotated per slot so they don't all read identically.
const SLOT_LABELS = {
  top: "Advertisement",
  mid: "Sponsored",
  sidebar: "Sponsored Placement",
  footer: "Advertisement",
};

// slot: "top" | "mid" | "sidebar" | "footer"
export default function AdSlot({ slot, className = "", format = "auto" }) {
  const slotKey = SLOT_MAP[slot];
  const adUnitId = slotKey ? ADSENSE[slotKey] : "";
  const isPlaceholder = !ADS_ENABLED || !adUnitId || adUnitId === "0000000000";
  const minH = SLOT_HEIGHTS[slot] || 90;
  const label = SLOT_LABELS[slot] || "Advertisement";

  const insRef = useRef(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (isPlaceholder) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { /* no-op */ }

    // Ad-blocker detection: if the ins element has zero height after 1.5s, flag it.
    const timer = setTimeout(() => {
      if (insRef.current && insRef.current.offsetHeight < 2) {
        setBlocked(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isPlaceholder]);

  return (
    <div
      className={`my-4 w-full ${className}`}
      style={{ minHeight: minH }}
      aria-label={label}
    >
      {/* AdSense-compliant label above the unit */}
      <p className="mb-1 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]/60">
        {label}
      </p>

      <div
        className="hairline-border rounded-sm bg-void/30"
        style={{ minHeight: minH - 20 }}
      >
        {isPlaceholder ? (
          // Dev placeholder — preserves layout, invisible to end users
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ minHeight: minH - 20 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]/20">
              {slot} ad
            </span>
          </div>
        ) : blocked ? (
          // Non-intrusive ad-blocker fallback — no layout collapse
          <div
            className="flex items-center justify-center px-4 text-center"
            style={{ minHeight: minH - 20 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#889988]/40">
              Support free tools — consider allowing ads
            </p>
          </div>
        ) : (
          <ins
            ref={insRef}
            className="adsbygoogle block"
            style={{ display: "block", minHeight: minH - 20 }}
            data-ad-client={ADSENSE.PUBLISHER_ID}
            data-ad-slot={adUnitId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        )}
      </div>
    </div>
  );
}