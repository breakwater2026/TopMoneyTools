import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function EmergencyFund() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(3000);
  const [currentSavings, setCurrentSavings] = useState(9000);
  const [targetMonths, setTargetMonths] = useState("6");
  const [calculated, setCalculated] = useState(false);

  const months = Number(targetMonths);
  const monthsCovered = monthlyExpenses > 0 ? currentSavings / monthlyExpenses : 0;
  const targetAmount = monthlyExpenses * months;
  const amountShort = Math.max(0, targetAmount - currentSavings);

  return (
    <Layout>
      <ToolPageShell
        slug="emergency-fund"
        name="Emergency Fund Calculator"
        num="09"
        title="How Many Months of Expenses Does Your Savings Cushion Cover?"
        subtitle="An emergency fund is your financial shock absorber. Enter your monthly expenses and current savings to see how many months of runway you have — and what's left to reach 3, 6, or 12 months."
        inputs={
          <div className="space-y-6">
            <NumberField label="Monthly expenses" helper="Fixed + variable costs your fund must cover" value={monthlyExpenses} onChange={setMonthlyExpenses} prefix="$" ariaLabel="Monthly expenses" />
            <NumberField label="Current emergency savings" helper="Cash already set aside for emergencies" value={currentSavings} onChange={setCurrentSavings} prefix="$" ariaLabel="Current emergency savings" />
            <SelectField label="Target coverage" helper="How many months of expenses to aim for" value={targetMonths} onChange={setTargetMonths} options={[{ value: "3", label: "3 months — starter" }, { value: "6", label: "6 months — solid" }, { value: "12", label: "12 months — conservative" }]} ariaLabel="Target coverage months" />
          </div>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate My Emergency Fund</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Months of expenses covered", value: `${monthsCovered.toFixed(1)} months`, sub: amountShort > 0 ? `You're ${usd(amountShort)} short of your ${months}-month target.` : "Target reached — your safety net is fully funded." }}
            rows={[
              { label: "Target fund size", value: usd(targetAmount), emphasis: "mint" },
              { label: "Current savings", value: usd(currentSavings), emphasis: "mint" },
              { label: "Amount short", value: amountShort > 0 ? usd(amountShort) : "—", emphasis: amountShort > 0 ? "amber" : "default" },
            ]}
          />
        }
        intelBrief={[
          { title: "Cover fixed costs first", body: "Your emergency fund needs to cover the bills you can't cancel — rent, loan payments, insurance. Variable costs like dining out can be cut in a crisis." },
          { title: "Three to six months is the standard", body: "A starter fund of three months handles most surprises; six months protects against longer disruptions. Self-employed or single-income households often aim higher." },
          { title: "Keep it liquid", body: "An emergency fund must be accessible in days, not weeks. High-yield savings beats investing it — resilience matters more than return." },
        ]}
        learnMore={[
          { label: "Glossary: Emergency Fund", to: "/glossary#emergency-fund" },
          { label: "Glossary: Liquidity", to: "/glossary#liquidity" },
          { label: "Use: Budget Planner", to: "/tools/budget-planner" },
        ]}
        sidebarTerms={[
          { q: "What is an emergency fund?", slug: "emergency-fund" },
          { q: "What is liquidity?", slug: "liquidity" },
          { q: "What is a cash reserve?", slug: "cash-reserve" },
          { q: "What are fixed expenses?", slug: "fixed-expenses" },
          { q: "What is financial resilience?", slug: "financial-resilience" },
        ]}
        imageAlt="Glass jar of rolled banknotes beside a folded umbrella on a dark stone surface"
        imageCaption="Your financial safety net."
      />
    </Layout>
  );
}
