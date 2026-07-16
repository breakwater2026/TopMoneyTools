import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function BudgetPlanner() {
  const [income, setIncome] = useState(4500);
  const [fixed, setFixed] = useState(2000);
  const [variable, setVariable] = useState(1500);
  const [calculated, setCalculated] = useState(false);

  const totalSpending = fixed + variable;
  const surplus = income - totalSpending;
  const savingsRate = income > 0 ? (surplus / income) * 100 : 0;
  const deficit = surplus < 0;

  return (
    <Layout>
      <ToolPageShell
        slug="budget-planner"
        name="Budget Planner"
        num="06"
        title="Split Your Income Simply — Needs, Wants, and Surplus."
        subtitle="Enter your monthly take-home income, fixed expenses (rent, bills), and variable spending (dining, shopping) to see your surplus and savings rate."
        inputs={
          <>
            <NumberField label="Monthly take-home income" helper="Income after taxes — what lands in your account each month." value={income} onChange={setIncome} prefix="$" ariaLabel="Monthly income" />
            <NumberField label="Fixed expenses" helper="Rent, mortgage, utilities, minimums on debt, insurance." value={fixed} onChange={setFixed} prefix="$" ariaLabel="Fixed expenses" />
            <NumberField label="Variable spending" helper="Groceries, dining, subscriptions, transport — the discretionary part." value={variable} onChange={setVariable} prefix="$" ariaLabel="Variable spending" />
            <div className="flex h-3 overflow-hidden rounded-sm">
              <div className="bg-[#A3FFD6]" style={{ width: income > 0 ? `${(fixed / income) * 100}%` : "0%" }} title="Fixed" />
              <div className="bg-[#889988]" style={{ width: income > 0 ? `${(variable / income) * 100}%` : "0%" }} title="Variable" />
              <div className={deficit ? "bg-[#FFD6A3]" : "bg-[#A3FFD6]/40"} style={{ width: income > 0 ? `${Math.abs(surplus) / income * 100}%` : "0%" }} title="Surplus" />
            </div>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]">
              <span>Fixed</span><span>Variable</span><span>{deficit ? "Deficit" : "Surplus"}</span>
            </div>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Plan My Budget</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: deficit ? "Monthly deficit" : "Monthly surplus", value: `${deficit ? "-" : "+"}${usd(Math.abs(surplus))}`, sub: `From ${usd(income)} income` }}
            rows={[
              { label: "Total Spending", value: usd(totalSpending) },
              { label: "Savings Rate", value: `${savingsRate.toFixed(1)}%`, emphasis: surplus >= 0 ? "mint" : "amber" },
              { label: "Fixed as % of Income", value: `${income > 0 ? Math.round((fixed / income) * 100) : 0}%` },
            ]}
          />
        }
        intelBrief={[
          { title: "Pay yourself first", body: "Treat savings as a fixed expense the moment income arrives, not as whatever's left over. The act itself creates wealth — the leftovers rarely do." },
          { title: "Track the variable slice", body: "Fixed costs are hard to change quickly. Variable spending — dining, subscriptions, shopping — is where most budgets gain or lose ground." },
          { title: "Aim for 20%+", body: "A 20% savings rate is the long-term benchmark in the 50/30/20 rule. It's a target, not a starting point — work toward it gradually." },
        ]}
        learnMore={[
          { label: "Read: Budgeting 50/30/20", to: "/education/budgeting-for-beginners-50-30-20-rule-explained" },
          { label: "Use: Savings Goal Calculator", to: "/tools/savings-goal" },
        ]}
        sidebarTerms={[
          { q: "What is a budget?", slug: "budget" },
          { q: "What is surplus?", slug: "surplus" },
          { q: "What is a deficit?", slug: "deficit" },
          { q: "What is a savings rate?", slug: "savings-rate" },
          { q: "What is an emergency fund?", slug: "emergency-fund" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1450101499163-690ced4edff9?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of heavy-stock vintage ledger paper with a fountain pen"
        imageCaption="A budget works best when it's simple enough to actually use."
      />
    </Layout>
  );
}
