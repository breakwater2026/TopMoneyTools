import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function FireNumber() {
  const [annualExpenses, setAnnualExpenses] = useState(50000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [annualSavings, setAnnualSavings] = useState(24000);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [calculated, setCalculated] = useState(false);

  // FIRE number = annual expenses / safe withdrawal rate
  const fireNumber = annualExpenses / (withdrawalRate / 100);
  const annualRate = expectedReturn / 100;

  // Years to FIRE: solve for t in currentSavings*(1+r)^t + annualSavings*((1+r)^t - 1)/r = fireNumber
  let yearsToFire = 0;

  if (annualRate === 0) {
    yearsToFire = currentSavings >= fireNumber ? 0 : (fireNumber - currentSavings) / annualSavings;
  } else if (currentSavings >= fireNumber) {
    yearsToFire = 0;
  } else {
    // Solve: P(1+r)^t + PMT*((1+r)^t - 1)/r = FV
    // (1+r)^t = (FV*r + PMT) / (P*r + PMT)
    const numerator = fireNumber * annualRate + annualSavings;
    const denominator = currentSavings * annualRate + annualSavings;
    if (numerator <= 0 || denominator <= 0) {
      yearsToFire = Infinity;
    } else {
      yearsToFire = Math.log(numerator / denominator) / Math.log(1 + annualRate);
    }
  }

  const fiPercentage = fireNumber > 0 ? Math.min(100, (currentSavings / fireNumber) * 100) : 100;
  const fireAge = yearsToFire < 100 ? Math.round(30 + yearsToFire) : null; // assumes starting at 30

  return (
    <Layout>
      <ToolPageShell
        slug="fire-number"
        name="FIRE Number Calculator"
        num="22"
        title="How Much Do You Need to Retire Early and Never Worry About Money Again?"
        subtitle="Calculate your FIRE (Financial Independence, Retire Early) number — the amount you need invested to live off your investments forever."
        inputs={
          <>
            <NumberField label="Annual expenses in retirement" helper="What you expect to spend each year after retiring." value={annualExpenses} onChange={setAnnualExpenses} prefix="$" ariaLabel="Annual expenses" />
            <NumberField label="Safe withdrawal rate (%)" helper="The 4% rule is the standard starting point." value={withdrawalRate} onChange={setWithdrawalRate} step={0.1} suffix="%" ariaLabel="Withdrawal rate" />
            <NumberField label="Current savings and investments" helper="What you have invested right now." value={currentSavings} onChange={setCurrentSavings} prefix="$" ariaLabel="Current savings" />
            <NumberField label="Annual savings" helper="How much you save and invest each year going forward." value={annualSavings} onChange={setAnnualSavings} prefix="$" ariaLabel="Annual savings" />
            <NumberField label="Expected annual return (%)" helper="Long-term market average is ~7% after inflation." value={expectedReturn} onChange={setExpectedReturn} step={0.1} suffix="%" ariaLabel="Expected return" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">You're {fiPercentage.toFixed(1)}% of the way to FIRE. Target: {usd(fireNumber)}.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Calculate My FIRE Number</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{
              label: "Your FIRE number",
              value: usd(fireNumber),
              sub: isFinite(yearsToFire) && yearsToFire > 0
                ? `≈ ${yearsToFire.toFixed(1)} years to reach it`
                : yearsToFire === 0
                ? "You're already FI!"
                : "Increase savings or reduce expenses to reach FI.",
            }}
            rows={[
              { label: "FI Progress", value: `${fiPercentage.toFixed(1)}%`, emphasis: "mint" },
              { label: "Years to FIRE", value: isFinite(yearsToFire) ? (yearsToFire <= 0 ? "Now" : `${yearsToFire.toFixed(1)} years`) : "N/A" },
              { label: fireAge ? `Est. FIRE Age` : "FIRE Age", value: fireAge ? `${fireAge}` : "N/A" },
            ]}
          />
        }
        intelBrief={[
          { title: "The FIRE number is simple math", body: "Take your annual expenses and divide by your safe withdrawal rate (typically 4%). If you spend $50,000/year, you need $1,250,000 invested. That's it — the formula is simple. The discipline to get there is the hard part." },
          { title: "Saving rate matters more than income", body: "Someone earning $60,000 and saving 50% reaches FIRE faster than someone earning $200,000 and saving 10%. Your savings rate — not your salary — determines your timeline to financial independence." },
          { title: "FIRE is about freedom, not retirement", body: "Most people pursuing FIRE don't plan to stop working entirely. They want the freedom to choose work they care about, take risks, or spend more time with family — without the anxiety of needing a paycheck. The 'RE' is optional." },
        ]}
        learnMore={[
          { label: "Read: The FIRE Movement Explained", to: "/education/fire-movement" },
          { label: "Glossary: FIRE", to: "/glossary#fire" },
          { label: "Glossary: Safe Withdrawal Rate", to: "/glossary#safe-withdrawal-rate" },
          { label: "Use: Retirement Withdrawal Calculator", to: "/tools/retirement-withdrawal" },
        ]}
        sidebarTerms={[
          { q: "What is FIRE?", slug: "fire" },
          { q: "What is a safe withdrawal rate?", slug: "safe-withdrawal-rate" },
          { q: "What is dollar-cost averaging?", slug: "dollar-cost-averaging" },
          { q: "What is an index fund?", slug: "index-fund" },
          { q: "What is compound growth?", slug: "compound-growth" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Tropical beach with clear water"
        imageCaption="Financial independence isn't about escaping work — it's about owning your time."
      />
    </Layout>
  );
}
