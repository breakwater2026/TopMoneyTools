import { useEffect, useState } from "react";

const STORAGE_KEY = "tmtools-cookie-banner-accepted";

// Informational notice only. EEA/UK ad consent requires Google Funding Choices
// (or another certified CMP) enabled in AdSense → Privacy & messaging.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  function handleAccept() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#A3FFD6]/15 bg-[#081008]/95 px-4 py-4 text-sm text-[#E0E0E0] backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl leading-relaxed text-[#E0E0E0]/90">
          TopMoneyTools runs calculators in your browser and may show Google AdSense ads. Google may use cookies
          to personalize ads and measure performance. We do not collect or store your calculator inputs. In the
          EEA/UK, a separate Google consent prompt (Funding Choices) may appear when enabled — this banner is not
          a substitute for that.
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-sm bg-[#A3FFD6] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#081008] transition hover:bg-[#88e4b9]"
          >
            Accept
          </button>
          <a
            href="/privacy"
            className="rounded-sm border border-[#A3FFD6]/30 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
}
