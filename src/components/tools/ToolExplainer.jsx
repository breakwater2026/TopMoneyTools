import { Link } from "react-router-dom";
import Callout from "@/components/content/Callout";

/**
 * Long-form explainer under calculator UI.
 * data shape from src/data/toolExplainers.js
 */
export default function ToolExplainer({ data }) {
  if (!data) return null;

  const Section = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#889988]">{children}</div>
    </section>
  );

  return (
    <div className="mt-10 space-y-10 border-t border-[#A3FFD6]/15 pt-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// How to use this instrument</p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-[#E0E0E0]">Understand the numbers</h2>
        <p className="mt-2 max-w-prose text-sm text-[#889988]">
          Plain-English guide for {data.name}. Read alongside your results — then re-run scenarios.
        </p>
      </div>

      <Section id="what" title="What this tool shows you">
        {data.what?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section id="when" title="When to use it">
        {data.when?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section id="how" title="How to use it">
        {data.steps?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section id="example" title="Worked example">
        <Callout tone="example" title="Illustrative scenario">
          {data.example?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Callout>
      </Section>

      <Section id="assumptions" title="Assumptions and limits">
        <ul className="list-disc space-y-2 pl-5">
          {data.assumptions?.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </Section>

      <Section id="read" title="How to read the results">
        {data.read?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section id="mistakes" title="Common mistakes">
        <ul className="list-disc space-y-2 pl-5">
          {data.mistakes?.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </Section>

      {data.related?.length > 0 && (
        <Section id="related" title="Related guides and tools">
          <ul className="flex flex-wrap gap-2">
            {data.related.map((r) => (
              <li key={r.to}>
                <Link
                  to={r.to}
                  className="inline-flex min-h-10 items-center rounded-sm border border-[#A3FFD6]/30 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <p className="border-t border-[#A3FFD6]/10 pt-4 text-xs leading-relaxed text-[#889988]/90">
        Educational estimates only — not personalized financial advice. Results depend on your inputs.{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
          Disclaimer
        </Link>
        {" · "}
        <Link to="/privacy" className="text-[#A3FFD6] hover:underline">
          Privacy
        </Link>
        {" · "}
        <Link to="/terms" className="text-[#A3FFD6] hover:underline">
          Terms
        </Link>
        .
      </p>
    </div>
  );
}
