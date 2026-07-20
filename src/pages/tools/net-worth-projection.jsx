import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function NetWorthProjection() {
  const [currentAge, setCurrentAge] = useState(30);
  const [currentNetWorth, setCurrentNetWorth] = useState(50000);
  const [annualSavings, setAnnualSavings] = useState(12000);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [targetAge, setTargetAge] = useState(60);
  const [calculated, setCalculated] = useState(false);

  const years = Math.max(0, targetAge - currentAge);
  const annualRate = expectedReturn / 100;

  // Projected net worth = P(1+r)^t + PMT * ((1+r)^t - 1)/r
  const projectedNetWorth =
    annualRate === 0
      ? currentNetWorth + annualSavings * years
      : currentNetWorth * Math.pow(1 + annualRate, years) +
        annualSavings * ((Math.pow(1 + annualRate, years) - 1) / annualRate);

  const totalContributions = currentNetWorth + annualSavings * years;
  const investmentEarnings = projectedNetWorth - totalContributions;

  // Monthly savings needed to hit a benchmark (e.g., $1M at target age)
  const milestoneTarget = 1000000;
  const monthlySavingsNeeded =
    annualRate === 0
      ? (milestoneTarget - currentNetWorth) / (years * 12)
      : ((milestoneTarget - currentNetWorth * Math.pow(1 + annualRate, years)) * (annualRate / 12)) /
        (Math.pow(1 + annualRate, years) - 1);

  return (
    <Layout>
      <ToolPageShell
        slug="net-worth-projection"
        name="Net Worth Projection Tool"
        num="24"
        title="What Will Your Net Worth Look Like When You Hit Your Target Age?"
        subtitle="Project your net worth forward based on your current savings, contributions, and expected returns."
        inputs={
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Current age" helper="Your age today." value={currentAge} onChange={setCurrentAge} min={18} max={80} ariaLabel="Current age" />
              <NumberField label="Target age" helper="The age you want to project to." value={targetAge} onChange={setTargetAge} min={currentAge + 1} max={90} ariaLabel="Target age" />
            </div>
            <NumberField label="Current net worth" helper="Assets minus debts — your total financial position today." value={currentNetWorth} onChange={setCurrentNetWorth} prefix="$" ariaLabel="Current net worth" />
            <NumberField label="Annual savings" helper="How much you save and invest each year." value={annualSavings} onChange={setAnnualSavings} prefix="$" ariaLabel="Annual savings" />
            <NumberField label="Expected annual return (%)" helper="Long-term market average is around 7%." value={expectedReturn} onChange={setExpectedReturn} step={0.1} suffix="%" ariaLabel="Expected return" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">≈ {years} years of growth at {expectedReturn}% — {usd(annualSavings)} saved per year.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Project Net Worth</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: `Projected net worth at age ${targetAge}`, value: usd(projectedNetWorth), sub: `${years} years from now — ${usd(currentNetWorth)} today → ${usd(projectedNetWorth)}` }}
            rows={[
              { label: "Total Contributions", value: usd(totalContributions) },
              { label: "Investment Earnings", value: usd(investmentEarnings), emphasis: "mint" },
              { label: "To Reach $1M: Save", value: monthlySavingsNeeded > 0 ? `${usd(monthlySavingsNeeded)}/mo` : "Already on track!" },
            ]}
          />
        }
        intelBrief={[
          { title: "Net worth is the scoreboard of financial health", body: "Unlike income, which can fluctuate year to year, net worth shows the cumulative result of your financial decisions. It's assets minus debts — the simplest measure of where you actually stand." },
          { title: "Your savings rate matters more than your returns (at first)", body: "Early in your wealth-building journey, how much you save each year dominates your net worth growth. Returns start to matter more as your portfolio grows — typically after you've saved 2-3× your annual income." },
          { title: "Net worth grows slowly, then suddenly", body: "The first $100K is the hardest. After that, compounding takes over — your investments start earning more each year than you contribute. This 'crossover point' is when wealth building shifts from effort-driven to momentum-driven." },
        ]}
        learnMore={[
          { label: "Read: How to Calculate Net Worth", to: "/education/how-to-calculate-net-worth" },
          { label: "Glossary: Net Worth", to: "/glossary#net-worth" },
          { label: "Use: Net Worth Calculator", to: "/tools/net-worth" },
        ]}
        sidebarTerms={[
          { q: "What is net worth?", slug: "net-worth" },
          { q: "What is compound growth?", slug: "compound-growth" },
          { q: "What is an emergency fund?", slug: "emergency-fund" },
          { q: "What is an investment?", slug: "investment" },
          { q: "What is a savings rate?", slug: "savings-rate" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Mountain peak at sunrise"
        imageCaption="Net worth is a marathon, not a sprint — and the finish line is worth the climb."
      />
    </Layout>
  );
}
