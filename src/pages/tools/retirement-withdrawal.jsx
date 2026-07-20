import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function RetirementWithdrawal() {
  const [savings, setSavings] = useState(1000000);
  const [annualWithdrawal, setAnnualWithdrawal] = useState(40000);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [inflationRate, setInflationRate] = useState(3);
  const [yearsRetirement, setYearsRetirement] = useState(30);
  const [calculated, setCalculated] = useState(false);

  // Simulate year by year
  let remaining = savings;
  let yearsLasted = 0;
  let withdrawal = annualWithdrawal;

  for (let y = 0; y < yearsRetirement; y++) {
    // Withdraw at start of year
    remaining -= withdrawal;
    if (remaining <= 0) {
      yearsLasted = y;
      remaining = 0;
      break;
    }
    // Grow what's left
    remaining *= 1 + expectedReturn / 100;
    // Increase withdrawal for inflation
    withdrawal *= 1 + inflationRate / 100;
    yearsLasted = y + 1;
  }

  const finalBalance = yearsLasted < yearsRetirement ? 0 : remaining;

  // Success rate: years lasted / target years
  const successRate = Math.min(100, (yearsLasted / yearsRetirement) * 100);

  // Recommended withdrawal using 4% rule
  const recommendedWithdrawal = savings * 0.04;

  return (
    <Layout>
      <ToolPageShell
        slug="retirement-withdrawal"
        name="Retirement Withdrawal Calculator"
        num="20"
        title="Will Your Savings Last Through Retirement?"
        subtitle="Test if your nest egg can sustain your planned withdrawals — accounting for market returns, inflation, and a long retirement."
        inputs={
          <>
            <NumberField label="Retirement savings balance" helper="Your total nest egg at the start of retirement." value={savings} onChange={setSavings} prefix="$" ariaLabel="Retirement savings" />
            <NumberField label="Annual withdrawal" helper="How much you plan to withdraw each year (before tax)." value={annualWithdrawal} onChange={setAnnualWithdrawal} prefix="$" ariaLabel="Annual withdrawal" />
            <NumberField label="Expected annual return (%)" helper="Conservative estimate: 5-6% for a balanced portfolio." value={expectedReturn} onChange={setExpectedReturn} step={0.1} suffix="%" ariaLabel="Expected return" />
            <NumberField label="Expected inflation rate (%)" helper="Long-term average is around 3%." value={inflationRate} onChange={setInflationRate} step={0.1} suffix="%" ariaLabel="Inflation rate" />
            <NumberField label="Years in retirement" helper="Plan for at least 30 years. Many retirements last longer." value={yearsRetirement} onChange={setYearsRetirement} ariaLabel="Years in retirement" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">4% rule recommends withdrawing ~{usd(recommendedWithdrawal)}/year sustainably.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Run Retirement Simulation</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{
              label: yearsLasted >= yearsRetirement ? "Your savings lasted the full retirement" : "Savings ran out early",
              value: yearsLasted >= yearsRetirement ? `${yearsLasted}+ years` : `${yearsLasted} years`,
              sub: yearsLasted >= yearsRetirement ? `Ending balance: ${usd(finalBalance)}` : "You may need to reduce withdrawals or save more.",
            }}
            rows={[
              { label: "Final Balance", value: usd(finalBalance), emphasis: "mint" },
              { label: "Success Rate", value: `${successRate.toFixed(0)}%` },
              { label: "4% Rule Withdrawal", value: usd(recommendedWithdrawal) },
            ]}
          />
        }
        intelBrief={[
          { title: "The 4% rule is a starting point, not a guarantee", body: "The 4% rule says you can withdraw 4% of your portfolio in year one, adjusted for inflation each year, and have a high probability of not running out over 30 years. But it was built on historical US market data — the future may differ." },
          { title: "Sequence of returns risk is real", body: "If markets drop sharply in the first few years of retirement, you're withdrawing from a shrinking portfolio. This 'sequence risk' is why many retirees shift to more conservative allocations near and just after retirement." },
          { title: "Inflation is retirement's silent killer", body: "A $40,000/year withdrawal today needs to be about $72,000 after 20 years of 3% inflation just to maintain the same purchasing power. Your withdrawals must grow, which means your portfolio must too." },
        ]}
        learnMore={[
          { label: "Read: Understanding the 4% Rule", to: "/education/4-percent-rule-retirement" },
          { label: "Glossary: Safe Withdrawal Rate", to: "/glossary#safe-withdrawal-rate" },
          { label: "Glossary: FIRE", to: "/glossary#fire" },
          { label: "Use: FIRE Number Calculator", to: "/tools/fire-number" },
        ]}
        sidebarTerms={[
          { q: "What is the 4% rule?", slug: "safe-withdrawal-rate" },
          { q: "What is inflation?", slug: "inflation" },
          { q: "What is FIRE?", slug: "fire" },
          { q: "What is an emergency fund?", slug: "emergency-fund" },
          { q: "What is purchasing power?", slug: "purchasing-power" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Peaceful retirement scene with coffee and a book"
        imageCaption="A secure retirement isn't about how much you have — it's about whether it lasts."
      />
    </Layout>
  );
}
