import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function HomeAffordability() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [loanTerm, setLoanTerm] = useState("30");
  const [calculated, setCalculated] = useState(false);

  const monthlyGross = annualIncome / 12;

  // Front-end ratio: max PITI = 28% of gross monthly income
  const maxPITI = monthlyGross * 0.28;

  // Back-end ratio: max PITI + debts = 36% of gross monthly income
  const maxDTI = monthlyGross * 0.36;
  const maxPIFromDTI = maxDTI - monthlyDebts;

  // The binding constraint is the tighter of the two
  const maxMonthlyPI = Math.min(maxPITI, maxPIFromDTI);
  // But we also need to subtract property tax and insurance from maxPITI
  // Estimate: monthly property tax + insurance
  // We'll solve iteratively since the home price determines property tax

  const termMonths = parseInt(loanTerm) * 12;
  const monthlyRate = interestRate / 100 / 12;

  // Solve for max home price: monthly PI payment + monthly prop tax + monthly insurance <= maxPITI
  // monthly PI = L * r(1+r)^n / ((1+r)^n - 1) where L = homePrice - downPayment
  // monthly prop tax = homePrice * propertyTaxRate / 100 / 12
  // monthly insurance ≈ homePrice * 0.0035 / 12 (rough estimate)

  let maxHomePrice = 0;
  let estimatedMonthly = 0;
  let dtiRatio = 0;

  if (monthlyRate === 0) {
    // Simple case: no interest
    const monthlyFactor = 1 / termMonths + propertyTaxRate / 100 / 12 + 0.0035 / 12;
    const maxPriceNoDP = maxPITI / monthlyFactor;
    maxHomePrice = maxPriceNoDP;
  } else {
    const factor = (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);

    // Binary search for max home price
    let lo = downPayment;
    let hi = downPayment + 2000000;

    for (let i = 0; i < 50; i++) {
      const mid = (lo + hi) / 2;
      const loan = mid - downPayment;
      const monthlyPI = loan * factor;
      const monthlyPropTax = mid * (propertyTaxRate / 100) / 12;
      const monthlyIns = mid * 0.0035 / 12;
      const totalMonthly = monthlyPI + monthlyPropTax + monthlyIns;

      if (totalMonthly <= maxPITI && (totalMonthly + monthlyDebts) <= maxDTI) {
        maxHomePrice = mid;
        lo = mid;
      } else {
        hi = mid;
      }
    }
  }

  if (maxHomePrice > downPayment) {
    const finalLoan = maxHomePrice - downPayment;
    if (monthlyRate === 0) {
      estimatedMonthly = finalLoan / termMonths + maxHomePrice * (propertyTaxRate / 100) / 12 + maxHomePrice * 0.0035 / 12;
    } else {
      const factor = (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
      estimatedMonthly = finalLoan * factor + maxHomePrice * (propertyTaxRate / 100) / 12 + maxHomePrice * 0.0035 / 12;
    }
    dtiRatio = ((estimatedMonthly + monthlyDebts) / monthlyGross) * 100;
  }

  const maxPayment = maxMonthlyPI;

  return (
    <Layout>
      <ToolPageShell
        slug="home-affordability"
        name="Home Affordability Calculator"
        num="18"
        title="How Much Home Can You Actually Afford?"
        subtitle="See the maximum home price you qualify for based on your income, debts, and lender guidelines — not what a realtor tells you."
        inputs={
          <>
            <NumberField label="Annual household income" helper="Total pre-tax income from all earners." value={annualIncome} onChange={setAnnualIncome} prefix="$" ariaLabel="Annual income" />
            <NumberField label="Monthly debt payments" helper="Car loans, student loans, credit card minimums, etc." value={monthlyDebts} onChange={setMonthlyDebts} prefix="$" ariaLabel="Monthly debts" />
            <NumberField label="Down payment available" helper="How much cash you have for a down payment." value={downPayment} onChange={setDownPayment} prefix="$" ariaLabel="Down payment" />
            <NumberField label="Mortgage interest rate (%)" helper="Current 30-year fixed rate." value={interestRate} onChange={setInterestRate} step={0.1} suffix="%" ariaLabel="Interest rate" />
            <NumberField label="Property tax rate (%)" helper="Annual property tax as percentage of home value." value={propertyTaxRate} onChange={setPropertyTaxRate} step={0.1} suffix="%" ariaLabel="Property tax rate" />
            <SelectField
              label="Loan term"
              helper="Shorter terms mean higher payments but less total interest."
              value={loanTerm}
              onChange={setLoanTerm}
              ariaLabel="Loan term"
              options={[
                { value: "30", label: "30-Year Fixed" },
                { value: "15", label: "15-Year Fixed" },
              ]}
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Lenders typically cap housing at 28% of gross income and total DTI at 36%.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Calculate Affordability</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Maximum home price", value: usd(maxHomePrice), sub: `Based on standard 28/36 lender guidelines with ${loanTerm}-year term` }}
            rows={[
              { label: "Max Monthly Payment (PITI)", value: usd(maxPITI), emphasis: "mint" },
              { label: "Estimated Monthly Payment", value: usd(estimatedMonthly) },
              { label: "DTI Ratio", value: `${dtiRatio.toFixed(1)}%` },
            ]}
          />
        }
        intelBrief={[
          { title: "The 28/36 rule", body: "Most conventional lenders follow the 28/36 rule: housing costs shouldn't exceed 28% of your gross monthly income, and total debt payments (including housing) shouldn't exceed 36%. These are ceilings, not targets — less is better." },
          { title: "Your debt-to-income ratio matters as much as your credit score", body: "DTI is one of the biggest factors in mortgage approval. Even with a great credit score, high existing debt payments can severely limit what you qualify for. Paying down debt before applying can increase your buying power significantly." },
          { title: "Affordable ≠ comfortable", body: "Just because a lender says you can afford a certain home doesn't mean you should buy at that price. The lender doesn't account for your lifestyle, savings goals, or childcare costs. A good rule of thumb: keep housing under 25% of take-home pay." },
        ]}
        learnMore={[
          { label: "Read: How Much Home Can You Afford?", to: "/education/home-affordability" },
          { label: "Glossary: Mortgage", to: "/glossary#mortgage" },
          { label: "Glossary: Debt-to-Income", to: "/glossary#debt-to-income" },
          { label: "Use: Mortgage Calculator", to: "/tools/mortgage" },
        ]}
        sidebarTerms={[
          { q: "What is a mortgage?", slug: "mortgage" },
          { q: "What is debt-to-income?", slug: "debt-to-income" },
          { q: "What is a down payment?", slug: "down-payment" },
          { q: "What is PMI?", slug: "pmi" },
          { q: "What is PITI?", slug: "piti" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Modern house exterior with landscaping"
        imageCaption="Affordability isn't about the maximum — it's about what lets you sleep at night."
      />
    </Layout>
  );
}
