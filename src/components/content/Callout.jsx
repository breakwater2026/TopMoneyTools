import { cn } from "@/lib/utils";

const tones = {
  note: "border-[#A3FFD6]/25 bg-[#A3FFD6]/5",
  example: "border-[#A3FFD6]/20 bg-void/60",
  caution: "border-amber/40 bg-amber/5",
};

const labels = {
  note: "Note",
  example: "Example",
  caution: "Caution",
};

/** Content callout — note | example | caution */
export default function Callout({ tone = "note", title, children, className }) {
  return (
    <aside
      className={cn(
        "rounded-sm border px-4 py-3 text-sm leading-relaxed text-[#889988]",
        tones[tone] || tones.note,
        className
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">
        {title || labels[tone] || "Note"}
      </p>
      <div className="mt-2 space-y-2">{children}</div>
    </aside>
  );
}
