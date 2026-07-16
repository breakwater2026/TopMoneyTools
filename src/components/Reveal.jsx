import { useEffect, useRef, useState } from "react";

// Scroll-triggered reveal — fades content in from 20px below as it enters
// the viewport. Used by the Intel Brief pacing per the design spec.
export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shown) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={shown ? "reveal" : "opacity-0"}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}