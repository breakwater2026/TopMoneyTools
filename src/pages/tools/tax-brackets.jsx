import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

// Simplified 2024 tax brackets (Single filer)
const BRACKETS_2024 = {
  Single: [
    { rate: 0.10, cap: 11600 },
    { rate: 0.12, cap: 47150 },
    { rate: 0.22, cap: 100525 },
    { rate: 0.24, cap: 191950 },
    { rate: 0.32, cap: 243725 },
    { rate: 0.35, cap: 609350 },
    { rate: 0.37, cap: Infinity },
  ],
  "Married Joint": [
    { rate: 0.10, cap: 23200 },
    { rate: 0.12, cap: 94300 },
    { rate: 0.22, cap: 201050 },
    { rate: 0.24, cap: 383900 },
    { rate: 0.32, cap: 487450 },
    { rate: 0.35, cap: 731200 },
    { rate: 0.37, cap: Infinity },
  ],
  "Head of Household": [
    { rate: 0.10, cap: 16550 },
    { rate: 0.12, cap: 63100 },
    { rate: 0.22, cap: 100500 },
    { rate: 0.24, cap: 191950 },
    { rate: 0.32, cap: 243700 },
    { rate: 0.35, cap: 609350 },
    { rate: 0.37, cap: Infinity },
  ],
};

// Simplified 2025 tax brackets (Single filer – slightly wider bands)
const BRACKETS_2025 = {
  Single: [
    { rate: 0.10, cap: 11925 },
    { rate: 0.12, cap: 48475 },
    { rate: 0.22, cap: 103350 },
    { rate: 0.24, cap: 197300 },
    { rate: 0.32, cap: 250525 },
    { rate: 0.35, cap: 626350 },
    { rate: 0.37, cap: Infinity },
  ],
  "Married Joint": [
    { rate: 0.10, cap: 23850 },
    { rate: 0.12, cap: 96950 },
    { rate: 0.22, cap: 206700 },
    { rate: 0.24, cap: 394600 },
    { rate: 0.32, cap: 501050 },
    { rate: 0.35, cap: 751600 },
    { rate: 0.37, cap: Infinity },
  ],
  "Head of Household": [
    { rate: 0.10, cap: 17000 },
    { rate: 0.12, cap: 64850 },
    { rate: 0.22, cap: 103350 },
    { rate: 0.24, cap: 197300 },
    { rate: 0.32, cap: 250500 },
    { rate: 0.35, cap: 626350 },
    { rate: 0.37, cap: Infinity },
  ],
};

function calcTax(income, status, brackets) {
  const bands = brackets[status];
  let tax = 0;
  let remaining = income;
  let marginalRate = 0;
  let prevCap = 0;

  for (const band of bands) {
    const taxable = Math.min(remaining, band.cap - prevCap);
    if (taxable > 0) {
      tax += taxable * band.rate;
      marginalRate = band.rate;
      remaining -= taxable;
    }
    prevCap = band.cap;
    if (remaining <= 0) break;
  }

  return { tax, marginalRate };
}

export default function TaxBrackets() {
  const [income, setIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState("Single");
  const [taxYear, setTaxYear] = useState("2024");
  const [calculated, setCalculated] = useState(false);

  const brackets = taxYear === "2024" ? BRACKETS_2024 : BRACKETS_2025;
  const { tax: taxOwed, marginalRate } = calcTax(income, filingStatus, brackets);
  const effectiveRate = income > 0 ? (taxOwed / income) * 100 : 0;
  const takeHome = income - taxOwed;

  return (
    <Layout>
      <ToolPageShell
        slug="tax-brackets"
        name="Tax Bracket Visualizer"
        num="14"
        title="How Much of Your Income Actually Goes to Taxes?"
        subtitle="Enter your annual income and filing status to see your tax breakdown — effective rate, marginal bracket, and real take-home pay."
        inputs={
          <>
            <NumberField label="What is your annual income?" helper="Your total pre-tax earnings from all sources." value={income} onChange={setIncome} prefix="$" ariaLabel="Annual income" />
            <SelectField
              label="What is your filing status?"
              helper="This determines which tax bracket thresholds apply."
              value={filingStatus}
              onChange={setFilingStatus}
              ariaLabel="Filing status"
              options={[
                { value: "Single", label: "Single" },
                { value: "Married Joint", label: "Married Filing Jointly" },
                { value: "Head of Household", label: "Head of Household" },
              ]}
            />
            <SelectField
              label="Tax year"
              helper="Bracket thresholds adjust slightly each year for inflation."
              value={taxYear}
              onChange={setTaxYear}
              ariaLabel="Tax year"
              options={[
                { value: "2024", label: "2024" },
                { value: "2025", label: "2025" },
              ]}
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Using {taxYear} brackets for {filingStatus} filer.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Calculate Tax Breakdown</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Estimated tax owed", value: usd(taxOwed), sub: `Take-home pay: ${usd(takeHome)}` }}
            rows={[
              { label: "Marginal Tax Rate", value: `${(marginalRate * 100).toFixed(0)}%`, emphasis: "mint" },
              { label: "Effective Tax Rate", value: `${effectiveRate.toFixed(1)}%` },
              { label: "Take-Home Pay", value: usd(takeHome) },
            ]}
          />
        }
        intelBrief={[
          { title: "Marginal vs. effective rate", body: "Your marginal rate is the tax on your last dollar earned — your top bracket. Your effective rate is your actual average tax across all income. The effective rate is almost always lower." },
          { title: "Progressive taxation means not all dollars are equal", body: "Only income that falls into a higher bracket is taxed at that rate. Moving up a bracket doesn't mean all your income gets taxed more — just the portion above the threshold." },
          { title: "Tax brackets shift with inflation", body: "The IRS adjusts bracket thresholds each year to prevent 'bracket creep' — where inflation pushes you into a higher bracket without a real increase in purchasing power." },
        ]}
        learnMore={[
          { label: "Read: How Tax Brackets Work", to: "/education/tax-brackets-explained" },
          { label: "Glossary: Tax Bracket", to: "/glossary#tax-bracket" },
        ]}
        sidebarTerms={[
          { q: "What is a tax bracket?", slug: "tax-bracket" },
          { q: "What is a marginal tax rate?", slug: "marginal-tax-rate" },
          { q: "What is an effective tax rate?", slug: "effective-tax-rate" },
          { q: "What is a standard deduction?", slug: "standard-deduction" },
          { q: "What are capital gains?", slug: "capital-gains" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Calculator and tax forms on a wooden desk"
        imageCaption="Understanding your tax bracket is the first step to smarter tax planning."
      />
    </Layout>
  );
}
