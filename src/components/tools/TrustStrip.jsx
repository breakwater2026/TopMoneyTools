import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

/** Trust strip under tool H1 — privacy split + not-advice. */
export default function TrustStrip({ className = "" }) {
  return (
    <div
      className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-sm border border-[#A3FFD6]/15 bg-void/50 px-3 py-2.5 text-xs text-[#889988] ${className}`}
    >
      <span className="inline-flex items-center gap-1.5 text-[#A3FFD6]">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Browser-local inputs</span>
      </span>
      <span className="hidden h-3 w-px bg-[#A3FFD6]/20 sm:block" aria-hidden />
      <span>
        Not personalized advice —{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
          Disclaimer
        </Link>
      </span>
      <span className="hidden h-3 w-px bg-[#A3FFD6]/20 sm:block" aria-hidden />
      <Link to="/tools/how-our-calculators-work" className="text-[#A3FFD6] hover:underline">
        About formulas
      </Link>
    </div>
  );
}
