import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function SavingsRate() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [monthlySavings, setMonthlySavings] = useState(1500);
  const [calculated, setCalculated] = useState(false);

  const savingsRate = monthlyIncome > 0 ? (monthlySavings / monthlyIncome) * 100 : 0;
  const expenseRatio = monthlyIncome > 0 ? (monthlyExpenses / monthlyIncome) * 100 : 0;
  const discretionary = Math.max(0, monthlyIncome - monthlyExpenses);

  return (
    <Layout>
      <ToolPageShell
        slug="savings-rate"
        name="Savings Rate Calculator"
        num="10"
        title="What Percentage of Your Income Are You Actually Keeping?"
        subtitle="Your savings rate is the single best predictor of long-term wealth. Enter your income, expenses, and what you save each month to see where you stand."
        inputs={
          <div className="space-y-6">
            <NumberField label="Monthly income" helper="Take-home pay after taxes" value={monthlyIncome} onChange={setMonthlyIncome} prefix="$" ariaLabel="Monthly income" />
            <NumberField label="Monthly expenses" helper="Fixed plus variable spending" value={monthlyExpenses} onChange={setMonthlyExpenses} prefix="$" ariaLabel="Monthly expenses" />
            <NumberField label="Amount saved per month" helper="What you put away after expenses" value={monthlySavings} onChange={setMonthlySavings} prefix="$" ariaLabel="Amount saved per month" />
          </div>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate My Savings Rate</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Savings rate", value: `${savingsRate.toFixed(1)}%`, sub: discretionary > 0 ? `${usd(discretionary)} left after your listed expenses.` : "Expenses meet or exceed income — review your budget." }}
            rows={[
              { label: "Expense ratio", value: `${expenseRatio.toFixed(1)}%`, emphasis: "amber" },
              { label: "Discretionary income", value: usd(discretionary), emphasis: "mint" },
              { label: "Saved per month", value: usd(monthlySavings), emphasis: "mint" },
            ]}
          />
        }
        intelBrief={[
          { title: "Rate matters more than amount", body: "Saving 10% of a smaller income builds the same habit as saving 10% of a larger one. The percentage — not the dollars — predicts who reaches their goals." },
          { title: "Every percent compounds", body: "Moving your rate from 5% to 10% doesn't just double your wealth — it can more than double it, because earlier savings get more time to compound." },
          { title: "Separate wants from needs", body: "A high expense ratio usually means wants disguised as needs. Trimming variable expenses is the fastest way to lift your savings rate." },
        ]}
        learnMore={[
          { label: "Glossary: Savings Rate", to: "/glossary#savings-rate" },
          { label: "Glossary: Discretionary Income", to: "/glossary#discretionary-income" },
          { label: "Use: Budget Planner", to: "/tools/budget-planner" },
        ]}
        sidebarTerms={[
          { q: "What is a savings rate?", slug: "savings-rate" },
          { q: "What is discretionary income?", slug: "discretionary-income" },
          { q: "What is budgeting?", slug: "budgeting" },
          { q: "What are fixed expenses?", slug: "fixed-expenses" },
          { q: "What are variable expenses?", slug: "variable-expenses" },
        ]}
        imageAlt="Open notebook with a hand-drawn progress line and stacked coins on a dark desk"
        imageCaption="Track your progress."
      />
    </Layout>
  );
}
