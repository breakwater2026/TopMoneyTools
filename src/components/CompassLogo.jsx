import { useEffect, useRef, useState } from "react";

// Compass SVG — the needle rotates toward the mouse cursor, acting as a
// functional pointer to the user's intent. Falls back to a subtle idle drift
// when the mouse isn't moving.
export default function CompassLogo({ size = 40, withWordmark = true, interactive = false }) {
  const ref = useRef(null);
  const [needleAngle, setNeedleAngle] = useState(0);

  useEffect(() => {
    if (!interactive) return;
    let frame;

    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setNeedleAngle(angle));
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [interactive]);

  return (
    <span className="inline-flex items-center gap-2.5" ref={interactive ? ref : undefined}>
      <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="22" fill="none" stroke="#A3FFD6" strokeWidth="1.2" opacity="0.85" />
        <circle cx="24" cy="24" r="14" fill="none" stroke="#A3FFD6" strokeWidth="0.4" opacity="0.25" />
        <g transform={`rotate(${needleAngle} 24 24)`} style={{ transition: "transform 0.15s ease-out" }}>
          <polygon points="24,7 27,24 24,39 21,24" fill="#A3FFD6" />
          <polygon points="24,7 21,24 24,16" fill="#0E1A0E" opacity="0.6" />
        </g>
        <line x1="24" y1="3" x2="24" y2="6.5" stroke="#A3FFD6" strokeWidth="1.2" />
        <line x1="24" y1="41.5" x2="24" y2="45" stroke="#A3FFD6" strokeWidth="1.2" />
        <line x1="3" y1="24" x2="6.5" y2="24" stroke="#A3FFD6" strokeWidth="1.2" />
        <line x1="41.5" y1="24" x2="45" y2="24" stroke="#A3FFD6" strokeWidth="1.2" />
        <circle cx="24" cy="24" r="1.6" fill="#A3FFD6" />
      </svg>
      {withWordmark && (
        <span className="font-heading text-base font-bold tracking-[0.04em] text-[#E0E0E0]" style={{ letterSpacing: "0.1em" }}>
          TOP<span className="text-[#A3FFD6]">MONEY</span>TOOLS
        </span>
      )}
    </span>
  );
}