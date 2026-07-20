import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function InsuranceGap() {
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [dependents, setDependents] = useState(2);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [existingCoverage, setExistingCoverage] = useState(250000);
  const [yearsNeeded, setYearsNeeded] = useState(20);
  const [calculated, setCalculated] = useState(false);

  // Dependents factor: single = 5x, 1 dependent = 8x, 2+ = 10x
  const dependentFactor = dependents <= 0 ? 5 : dependents === 1 ? 8 : 10;

  // Recommended coverage = income × years × scaling factor
  const recommendedCoverage = annualIncome * yearsNeeded * (dependentFactor / 10);

  const coverageGap = Math.max(0, recommendedCoverage - existingCoverage);
  const gapPercentage = recommendedCoverage > 0 ? (coverageGap / recommendedCoverage) * 100 : 0;

  return (
    <Layout>
      <ToolPageShell
        slug="insurance-gap"
        name="Insurance Gap Analyzer"
        num="23"
        title="Is Your Family Protected if the Unexpected Happens?"
        subtitle="Calculate how much life insurance coverage your family actually needs — and how big the gap might be."
        inputs={
          <>
            <NumberField label="Annual income" helper="Your household's total annual pre-tax income." value={annualIncome} onChange={setAnnualIncome} prefix="$" ariaLabel="Annual income" />
            <NumberField label="Number of dependents" helper="How many people rely on your income (spouse, children, etc)." value={dependents} onChange={setDependents} min={0} ariaLabel="Number of dependents" />
            <NumberField label="Current savings and investments" helper="Existing assets that could support your family." value={currentSavings} onChange={setCurrentSavings} prefix="$" ariaLabel="Current savings" />
            <NumberField label="Existing life insurance coverage" helper="Total death benefit from all current policies." value={existingCoverage} onChange={setExistingCoverage} prefix="$" ariaLabel="Existing coverage" />
            <NumberField label="Years of income replacement needed" helper="How many years your family would need support." value={yearsNeeded} onChange={setYearsNeeded} min={1} max={40} ariaLabel="Years needed" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Income replacement: {yearsNeeded} years × {dependents} dependents = ~{dependentFactor}× income multiplier.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Analyze Coverage Gap</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{
              label: coverageGap > 0 ? "Coverage gap detected" : "You're fully covered",
              value: coverageGap > 0 ? usd(coverageGap) : "$0",
              sub: coverageGap > 0 ? `${gapPercentage.toFixed(0)}% of recommended coverage is missing.` : "Your existing coverage meets or exceeds the recommendation.",
            }}
            rows={[
              { label: "Recommended Coverage", value: usd(recommendedCoverage), emphasis: "mint" },
              { label: "Existing Coverage", value: usd(existingCoverage) },
              { label: "Coverage Gap", value: coverageGap > 0 ? usd(coverageGap) : "None" },
            ]}
          />
        }
        intelBrief={[
          { title: "The DIME method for calculating coverage", body: "Most advisors use the DIME formula: Debt (pay off all debts) + Income (replace income for X years) + Mortgage (pay off the house) + Education (fund college for kids). This gives a more complete picture than just income replacement alone." },
          { title: "Employer-provided insurance is rarely enough", body: "Many people have 1-2× their salary through work and think they're covered. The typical recommendation is 10-12× your annual income — especially if you have young children. Employer coverage is a start, not a complete plan." },
          { title: "Term life is usually the right answer", body: "For most families, term life insurance (20-30 year terms) provides the best value. It's affordable when you're young and covers the years when your family depends on your income — typically until kids are through college and the mortgage is paid." },
        ]}
        learnMore={[
          { label: "Read: Insurance Essentials Guide", to: "/education/insurance-essentials" },
          { label: "Glossary: Insurance Premium", to: "/glossary#insurance-premium" },
          { label: "Glossary: Deductible", to: "/glossary#deductible" },
        ]}
        sidebarTerms={[
          { q: "What is life insurance?", slug: "life-insurance" },
          { q: "What is an insurance premium?", slug: "insurance-premium" },
          { q: "What is a deductible?", slug: "deductible" },
          { q: "What is term life insurance?", slug: "term-life-insurance" },
          { q: "What is an emergency fund?", slug: "emergency-fund" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Family walking together on a beach"
        imageCaption="Insurance isn't about you — it's about the people who depend on you if you're not there."
      />
    </Layout>
  );
}
