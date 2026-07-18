// MethodologyBlock — reusable "How this tool works" section for calculator pages
export default function MethodologyBlock({ explanation, assumptions = [], dataSources = [], example }) {
  const hasContent = explanation || assumptions.length > 0 || dataSources.length > 0 || example;
  if (!hasContent) return null;

  return (
    <section className="mt-8 rounded-sm border border-[#A3FFD6]/10 bg-void/40 p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">
        // How this tool works
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[#889988]">
        This calculator is designed to give you a practical estimate based on the numbers you enter.
        Results are for educational purposes only and should be checked against lender terms, account
        statements, tax rules, or advice from a qualified professional before you make financial decisions.
      </p>

      {explanation && (
        <>
          <h4 className="mt-4 font-heading text-sm font-semibold text-[#E0E0E0]">What this result means</h4>
          <p className="mt-1 text-sm leading-relaxed text-[#889988]">{explanation}</p>
        </>
      )}

      {example && (
        <>
          <h4 className="mt-4 font-heading text-sm font-semibold text-[#E0E0E0]">Example</h4>
          <div className="mt-1 rounded-sm border border-[#A3FFD6]/10 bg-[#0A1A0A] p-4 text-sm leading-relaxed text-[#889988]">
            {example}
          </div>
        </>
      )}

      {assumptions.length > 0 && (
        <div className="mt-4">
          <h4 className="font-heading text-sm font-semibold text-[#E0E0E0]">Assumptions and limitations</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#889988]">
            {assumptions.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      )}

      {dataSources.length > 0 && (
        <div className="mt-4">
          <h4 className="font-heading text-sm font-semibold text-[#E0E0E0]">Data sources</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#889988]">
            {dataSources.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}

      <p className="mt-4 border-t border-[#A3FFD6]/10 pt-3 text-[10px] text-[#667766]">
        Informational use only. Not financial advice. Individual results vary.
      </p>
    </section>
  );
}
