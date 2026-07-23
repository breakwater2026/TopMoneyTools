import { cn } from "@/lib/utils";

/** Section kicker: // The Tool Hangar */
export default function Kicker({ children, className }) {
  return (
    <p
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60",
        className
      )}
    >
      {children}
    </p>
  );
}
