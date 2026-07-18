import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd, toNumber } from "@/components/tools/FormControls";

export default function SavingsGoal() {
  const [goal, setGoal] = useState(15000);
  const [current, setCurrent] = useState(2000);
  const [monthly, setMonthly] = useState(300);
  const [rate, setRate] = useState(2);
  const [calculated, setCalculated] = useState(false);

  const safeGoal = toNumber(goal, 0);
  const safeCurrent = toNumber(current, 0);
  const safeMonthly = toNumber(monthly, 0);
  const safeRate = toNumber(rate, 0);
  const remaining = Math.max(0, safeGoal - safeCurrent);
  const monthlyRate = safeRate / 100 / 12;

  let months = 0;
  let balance = safeCurrent;
  if (remaining > 0 && (monthly > 0 || monthlyRate > 0)) {
    let safety = 0;
    while (balance < safeGoal && safety < 2400) {
      balance = balance * (1 + monthlyRate) + safeMonthly;
      months++;
      safety++;
    }
  }

  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + months);
  const totalInterest = Math.round(balance > safeCurrent ? balance - safeCurrent - safeMonthly * months < 0 ? 0 : balance - safeCurrent - safeMonthly * months : 0);

  return (
    <Layout>
      <ToolPageShell
        slug="savings-goal"
        name="Savings Goal Calculator"
        num="08"
        title="Find Out How Long It'll Take to Reach Any Goal — and By What Date."
        subtitle="Whether it's a vacation, an emergency fund, or a house deposit, enter your numbers to see the timeline in months, a target date, and projected interest."
        introParagraph={
          <>
            Setting a specific savings target makes it easier to stay motivated and measure progress.
            This calculator shows how much you need to save each month to reach your goal within
            your chosen timeframe, including the impact of compound interest.
          </>
        }
        example={
          <>
            Saving $10,000 over 3 years with a 4% annual return means setting aside about $262 per
            month. Without the interest, you would need $278 per month — the difference shows how
            letting your money work for you adds up over time.
          </>
        }
        updatedDate="Updated July 2026"
        inputs={
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Savings goal" helper="The full amount you want saved." value={goal} onChange={setGoal} prefix="$" ariaLabel="Savings goal" />
              <NumberField label="Already saved" helper="What you've banked so far." value={current} onChange={setCurrent} prefix="$" ariaLabel="Already saved" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Monthly contribution" helper="What you can set aside each month." value={monthly} onChange={setMonthly} prefix="$" ariaLabel="Monthly contribution" />
              <NumberField label="Interest rate (%)" helper="A high-yield savings account typically offers 0-4%." value={rate} onChange={setRate} prefix="" suffix="%" step={0.1} ariaLabel="Interest rate" />
            </div>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate Savings Timeline</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={
              remaining === 0
                ? { label: "Goal status", value: "Reached", sub: "You've already hit your target — well done!" }
                : (monthly === 0 && rate === 0)
                ? { label: "Need input", value: "—", sub: "Add a monthly contribution or interest rate to see a timeline." }
                : { label: "Time to reach goal", value: `${months} months`, sub: `Target date: ${futureDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}` }
            }
            rows={
              remaining === 0
                ? [{ label: "Currently Saved", value: usd(safeCurrent), emphasis: "mint" }]
                : [
                    { label: "Per Month", value: usd(safeMonthly), emphasis: "mint" },
                    { label: "Amount Remaining", value: usd(remaining) },
                    { label: "Projected Interest", value: usd(totalInterest), emphasis: "mint" },
                  ]
            }
          />
        }
        intelBrief={[
          { title: "Consistency beats size", body: "Saving a smaller amount every month reliably almost always beats big, irregular deposits — partly because of compounding, partly because habits stick." },
          { title: "Even small interest helps", body: "A high-yield savings account at 3-4% over years meaningfully shortens the timeline, especially on longer-term goals." },
          { title: "Goals need a number", body: "A vague goal like 'save money' rarely gets met. Giving it a dollar amount and a deadline turns it into something your brain can plan around." },
        ]}
        explanation="This estimate shows how long a savings goal may take if you keep making the monthly contribution and earn the selected rate. It is a helpful planning number, but actual results can vary if your income, rate, or timing changes."
        assumptions={[
          "The calculator assumes the monthly contribution and rate stay constant until the goal is reached.",
          "It does not account for irregular deposits, inflation, or changes in interest rate over time.",
          "It projects a simple timeline rather than a detailed savings schedule."
        ]}
        dataSources={[
          "The timeline uses the standard savings growth formula with regular monthly deposits.",
          "The result is meant to guide planning rather than guarantee a real-world outcome."
        ]}
        learnMore={[
          { label: "Glossary: Compound Growth", to: "/glossary#compound-growth" },
          { label: "Use: Budget Planner", to: "/tools/budget-planner" },
          { label: "Use: Investment Growth Calculator", to: "/tools/investment-growth" },
        ]}
        relatedTools={[
          { label: "Budget Planner", to: "/tools/budget-planner" },
          { label: "Emergency Fund Calculator", to: "/tools/emergency-fund" },
        ]}
        relatedArticles={[
          { label: "Budgeting for beginners", to: "/education/budgeting-for-beginners" },
          { label: "How inflation affects your daily budget", to: "/education/how-inflation-affects-your-daily-budget" },
        ]}
        relatedGlossary={[
          { label: "Compound growth", to: "/glossary#compound-growth" },
          { label: "Savings rate", to: "/glossary#savings-rate" },
        ]}
        sidebarTerms={[
          { q: "What is compound growth?", slug: "compound-growth" },
          { q: "What is a savings rate?", slug: "savings-rate" },
          { q: "What is an emergency fund?", slug: "emergency-fund" },
          { q: "What is yield?", slug: "yield" },
          { q: "What is surplus?", slug: "surplus" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1606761568499-4d24ad9d3df8?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of a vintage brass mechanical counter and a coin on dark wood"
        imageCaption="A goal with a number and a date gets reached faster."
      />
    </Layout>
  );
}
