import { useEffect, useRef } from "react";
import { ADSENSE, ADS_ENABLED, SLOT_MAP } from "@/config/adsense.config";

// Min heights sized for standard creatives — reserve space so units can serve without CLS.
const SLOT_MIN_H = {
  top: "min-h-[90px] sm:min-h-[100px]",
  mid: "min-h-[250px] sm:min-h-[280px]",
  sidebar: "min-h-[250px] lg:min-h-[600px]",
  footer: "min-h-[90px] sm:min-h-[100px]",
};

// AdSense ad slot.
// slot: "top" | "mid" | "sidebar" | "footer"
// layout: pass "in-article" for fluid in-article units on long-form pages
// P0: never render fake "Ad slot / Financial Sponsorship" chrome pre-approval.
export default function AdSlot({
  slot,
  className = "",
  format = "auto",
  style,
  layout,
  // Hide on mobile (e.g. sidebar) — recommended desktop-only placements
  desktopOnly = false,
}) {
  const ref = useRef(null);
  const slotKey = SLOT_MAP[slot];
  const adUnitId = slotKey ? ADSENSE[slotKey] : "";
  // Treat missing/placeholder unit IDs as inactive (do not render fake ad chrome).
  const looksLikeRealUnit = typeof adUnitId === "string" && /^\d{6,}$/.test(adUnitId);
  const placeholder = !ADS_ENABLED || !adUnitId || adUnitId === "0000000000" || !looksLikeRealUnit;
  const minH = SLOT_MIN_H[slot] || "min-h-[90px]";
  const hideClass = desktopOnly ? "hidden lg:flex" : "flex";

  useEffect(() => {
    if (placeholder || !ref.current) return;

    const loadAd = () => {
      try {
        // eslint-disable-next-line no-undef
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // no-op
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadAd();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [placeholder]);

  if (placeholder) return null;

  return (
    <div
      className={`${hideClass} flex-col items-center justify-center ${minH} ${className}`}
      style={style}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]/70">
        Advertisement
      </span>
      <div className={`mt-2 w-full flex-1 hairline-border rounded-sm bg-void/40 p-1 ${minH}`}>
        <ins
          ref={ref}
          className="adsbygoogle block"
          style={{ display: "block", ...(layout ? { textAlign: "center" } : {}) }}
          data-ad-client={ADSENSE.PUBLISHER_ID}
          data-ad-slot={adUnitId}
          data-ad-format={layout ? "fluid" : format}
          {...(layout ? { "data-ad-layout": layout } : {})}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
