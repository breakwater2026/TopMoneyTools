import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal — progressive enhancement only.
 * Content is ALWAYS visible (never left at opacity-0), so grids and
 * long pages cannot show blank “dead space” if IntersectionObserver
 * is delayed, unsupported, or not yet fired.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Prefer reduced motion: no animation class needed
    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduce) {
      setActive(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${active ? "reveal" : ""} ${className}`.trim()}
      style={active && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
