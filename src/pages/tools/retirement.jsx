import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function Retirement() {
  const [currentAge, setCurrentAge] = useState(30);
  const [currentSavings, setCurrentSavings] = useState(20000);
  const [monthly, setMonthly] = useState(400);
  const [rate, setRate] = useState(6);
  const [retireAge, setRetireAge] = useState(65);
  const [calculated, setCalculated] = useState(false);

  const yearsToRetire = Math.max(0, retireAge - currentAge);
  const months = yearsToRetire * 12;
  const monthlyRate = rate / 100 / 12;
  const futureSavings =
    monthlyRate === 0
      ? currentSavings + monthly * months
      : currentSavings * Math.pow(1 + monthlyRate, months) +
        monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  const monthlyIncome = futureSavings * 0.04 / 12; // 4% rule
  const annualIncome = monthlyIncome * 12;

  return (
    <Layout>
      <ToolPageShell
        slug="retirement"
        name="Retirement Savings Calculator"
        num="05"
        title="Project What You'll Actually Have Saved — and Whether It's Enough."
        subtitle="Enter your age, current savings, monthly contribution, and expected return to see your projected nest egg and a simple monthly income estimate."
        inputs={
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Current age" helper="Your age today." value={currentAge} onChange={setCurrentAge} prefix="" min={18} max={80} ariaLabel="Current age" />
              <NumberField label="Retirement age" helper="The age you plan to retire." value={retireAge} onChange={setRetireAge} prefix="" min={currentAge + 1} max={90} ariaLabel="Retirement age" />
            </div>
            <NumberField label="Current retirement savings" helper="What you have saved today." value={currentSavings} onChange={setCurrentSavings} prefix="$" ariaLabel="Current savings" />
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Monthly contribution" helper="What you add each month." value={monthly} onChange={setMonthly} prefix="$" ariaLabel="Monthly contribution" />
              <NumberField label="Expected annual return (%)" helper="A balanced portfolio averages ~6%." value={rate} onChange={setRate} prefix="" suffix="%" step={0.1} ariaLabel="Annual return" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">≈ {yearsToRetire} years to retirement.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate Retirement Outlook</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: `Projected savings at age ${retireAge}`, value: usd(futureSavings) }}
            rows={[
              { label: "Monthly Income (4% Rule)", value: usd(monthlyIncome), emphasis: "mint" },
              { label: "Annual Income (4% Rule)", value: usd(annualIncome) },
              { label: "Total Contributed", value: usd(currentSavings + monthly * months) },
            ]}
          />
        }
        intelBrief={[
          { title: "The 4% rule", body: "A common guideline: you can safely withdraw about 4% of your retirement savings each year for ~30 years. So $1M gives roughly $40,000/year of income." },
          { title: "Time is your biggest ally", body: "Money saved at 30 has decades to compound. The same amount saved at 55 has far less time to grow — which is why starting early matters so much." },
          { title: "Inflation shrinks your nest egg", body: "Your target should account for future prices. $1M in 25 years buys meaningfully less than $1M today." },
        ]}
        learnMore={[
          { label: "Glossary: Risk Tolerance", to: "/glossary#risk-tolerance" },
          { label: "Glossary: Compound Growth", to: "/glossary#compound-growth" },
          { label: "Use: Investment Growth Calculator", to: "/tools/investment-growth" },
        ]}
        sidebarTerms={[
          { q: "What is compound growth?", slug: "compound-growth" },
          { q: "What is the 4% rule?", slug: "4-percent-rule" },
          { q: "What is risk tolerance?", slug: "risk-tolerance" },
          { q: "What is an annuity?", slug: "annuity" },
          { q: "What is inflation?", slug: "inflation" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1583947581924-860bda7a3df1?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of an old leather-bound navigator's journal"
        imageCaption="Retirement planning is about the runway you give your savings."
      />
    </Layout>
  );
}
