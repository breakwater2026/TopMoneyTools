import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "tmtools-cookie-banner-accepted";

// Compact bottom notice. EEA/UK ad consent still requires Google Funding Choices
// (or another certified CMP) in AdSense → Privacy & messaging.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const acceptRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  // Focus Accept when banner appears; restore body scroll padding so content isn’t covered
  useEffect(() => {
    if (!visible) {
      document.documentElement.style.removeProperty("--cookie-banner-pad");
      return;
    }
    // Reserve space so primary CTAs / form fields aren’t under the bar
    document.documentElement.style.setProperty("--cookie-banner-pad", "7.5rem");
    // Move focus into the notice for keyboard users
    const t = window.setTimeout(() => acceptRef.current?.focus(), 50);
    return () => {
      window.clearTimeout(t);
      document.documentElement.style.removeProperty("--cookie-banner-pad");
    };
  }, [visible]);

  function handleAccept() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#A3FFD6]/25 bg-[#081008]/98 px-3 py-2.5 text-sm text-[#E0E0E0] shadow-[0_-8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-4 sm:py-3"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p id={titleId} className="min-w-0 flex-1 text-xs leading-snug text-[#E0E0E0]/90 sm:text-sm sm:leading-relaxed">
          <span className="font-semibold text-[#E0E0E0]">Cookies & ads. </span>
          Calculators run in your browser — we don’t store your inputs. Google AdSense may use cookies for ads and
          measurement.{" "}
          <Link to="/privacy" className="text-[#A3FFD6] underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          . In the EEA/UK a separate Google consent prompt may also appear.
        </p>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <button
            ref={acceptRef}
            type="button"
            onClick={handleAccept}
            className="inline-flex min-h-10 items-center justify-center rounded-sm bg-[#A3FFD6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#081008] transition hover:bg-[#88e4b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6]"
          >
            Accept
          </button>
          <Link
            to="/privacy"
            className="inline-flex min-h-10 items-center justify-center rounded-sm border border-[#A3FFD6]/35 px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6]"
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
