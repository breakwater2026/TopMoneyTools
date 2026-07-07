// The Result HUD — a glowing mint window that "pulses" when active.
// Renders a labelled list of key numbers (the headline figure + supporting
// breakdown rows). All numbers rendered in monospaced "data" font.
//
// rows: [{ label, value, emphasis?: "mint" | "amber" | "default" }]
//   headline: the largest key number, gets a pulsing glow ring.
export default function ToolResultBlock({ headline, rows = [], visible }) {
  if (!visible) return null;

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rotate-45 bg-[#A3FFD6]" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/80">// Result HUD</span>
      </div>

      {/* Headline — pulsing mint window */}
      {headline && (
        <div className="mt-3 rounded-sm border border-[#A3FFD6]/40 bg-[#A3FFD6]/5 p-6 pulse-glow">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{headline.label}</p>
          <p className="mt-1 font-data text-4xl font-semibold text-[#A3FFD6] sm:text-5xl">{headline.value}</p>
          {headline.sub && <p className="mt-1 text-sm text-[#889988]">{headline.sub}</p>}
        </div>
      )}

      {/* Breakdown grid */}
      {rows.length > 0 && (
        <dl className="mt-4 grid gap-3 sm:grid-cols-3">
          {rows.map((r, i) => {
            const color = r.emphasis === "amber" ? "text-[#FFD6A3]" : r.emphasis === "mint" ? "text-[#A3FFD6]" : "text-[#E0E0E0]";
            return (
              <div key={i} className="hairline-border rounded-sm bg-void/60 p-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{r.label}</dt>
                <dd className={`mt-2 font-data text-xl font-semibold ${color}`}>{r.value}</dd>
              </div>
            );
          })}
        </dl>
      )}
    </div>
  );
}