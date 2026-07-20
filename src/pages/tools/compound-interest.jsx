import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, RangeField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function CompoundInterest() {
  const [initial, setInitial] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(20);
  const [calculated, setCalculated] = useState(false);

  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;

  // Future value = P(1+r)^n + PMT*((1+r)^n - 1)/r
  const futureValue =
    monthlyRate === 0
      ? initial + monthly * months
      : initial * Math.pow(1 + monthlyRate, months) +
        monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

  const totalContributions = initial + monthly * months;
  const totalEarnings = futureValue - totalContributions;
  const earningsPct = futureValue > 0 ? (totalEarnings / futureValue) * 100 : 0;

  return (
    <Layout>
      <ToolPageShell
        slug="compound-interest"
        name="Compound Interest Visualizer"
        num="17"
        title="What Could Your Money Grow Into Over Time?"
        subtitle="See how your initial investment plus regular contributions compound over the years — and how much of your final balance is pure earnings."
        inputs={
          <>
            <NumberField label="Starting amount" helper="How much you have invested right now." value={initial} onChange={setInitial} prefix="$" ariaLabel="Starting amount" />
            <NumberField label="Monthly contribution" helper="How much you add every month going forward." value={monthly} onChange={setMonthly} prefix="$" ariaLabel="Monthly contribution" />
            <NumberField label="Expected annual return (%)" helper="Market average is ~7% after inflation." value={annualReturn} onChange={setAnnualReturn} step={0.1} suffix="%" ariaLabel="Annual return" />
            <RangeField label="Investment timeline (years)" helper="The longer you stay invested, the more compounding works." value={years} onChange={setYears} min={1} max={50} unit=" yrs" ariaLabel="Years" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">≈ Compounding {monthly > 0 ? "monthly contributions + " : ""}returns over {years} years at {annualReturn}%.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Project My Growth</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Projected future value", value: usd(futureValue), sub: `After ${years} years of growth` }}
            rows={[
              { label: "Total Contributions", value: usd(totalContributions) },
              { label: "Total Earnings", value: usd(totalEarnings), emphasis: "mint" },
              { label: "Earnings % of Total", value: `${earningsPct.toFixed(1)}%` },
            ]}
          />
        }
        intelBrief={[
          { title: "Compounding is earning interest on interest", body: "In year one, you earn returns on your contributions. In year two, you earn returns on your contributions AND last year's returns. This snowball effect is why starting early matters more than starting big." },
          { title: "Time beats timing", body: "An investor who starts at 25 with $500/month can end up with more at retirement than someone who starts at 35 with $1,000/month — even though the second person contributes more total dollars. Time in the market beats timing the market." },
          { title: "The Rule of 72", body: "To quickly estimate how long it takes money to double, divide 72 by your annual return. At 7%, your money doubles roughly every 10.3 years (72 ÷ 7). That means $10,000 becomes ~$40,000 over ~30 years — without adding another dollar." },
        ]}
        learnMore={[
          { label: "Read: The Power of Compound Interest", to: "/education/compound-interest-explained" },
          { label: "Glossary: Compound Growth", to: "/glossary#compound-growth" },
          { label: "Use: Investment Growth Calculator", to: "/tools/investment-growth" },
        ]}
        sidebarTerms={[
          { q: "What is compound growth?", slug: "compound-growth" },
          { q: "What is an index fund?", slug: "index-fund" },
          { q: "What is dollar-cost averaging?", slug: "dollar-cost-averaging" },
          { q: "What is an ETF?", slug: "etf" },
          { q: "What is a stock?", slug: "stock" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Growing plant with coins in soil"
        imageCaption="Compound interest is the eighth wonder of the world — and it works best with time on its side."
      />
    </Layout>
  );
}
