import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

export default function Budgeting101() {
  return (
    <ArticleShell
      title="Budgeting 101 — The Beginner's Complete Guide"
      description="Learn the fundamentals of budgeting: why it works, how to build one, and how to make it stick. No spreadsheets required."
      path="/education/budgeting-101"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What is surplus?", slug: "surplus" },
        { q: "What is a deficit?", slug: "deficit" },
        { q: "What is a savings rate?", slug: "savings-rate" },
        { q: "What are fixed expenses?", slug: "fixed-expenses" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
      ]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is a budget, really?</h2>
      <p className="text-[#889988]">A <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">budget</Link> is simply a plan for where your money goes. You earn income, you spend on needs and wants, and ideally something is left over — that's your <Link to="/glossary#surplus" className="text-[#A3FFD6] hover:underline">surplus</Link>. A budget makes that flow intentional rather than accidental.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Why most budgets fail</h2>
      <p className="text-[#889988]">Most budgets fail because they're too complicated or too restrictive. The goal isn't a perfect spreadsheet — it's awareness. Knowing roughly where your money goes every month is already a massive improvement over not knowing.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Fixed vs. variable expenses</h2>
      <p className="text-[#889988]"><Link to="/glossary#fixed-expenses" className="text-[#A3FFD6] hover:underline">Fixed expenses</Link> are predictable: rent, loan payments, insurance. <Link to="/glossary#variable-expenses" className="text-[#A3FFD6] hover:underline">Variable expenses</Link> fluctuate: groceries, dining, entertainment. Fixed costs are hard to cut quickly; variable costs are where flexibility lives.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The 50/30/20 starting point</h2>
      <p className="text-[#889988]">A simple framework: 50% of take-home income to needs, 30% to wants, and 20% to savings or debt repayment. This isn't a law — it's a compass. Adjust for your situation, especially if you live in a high-cost city or carry debt.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Your savings rate is the score</h2>
      <p className="text-[#889988]">Your <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">savings rate</Link> — the percentage of income you keep — is the single best indicator of long-term financial health. Even 5% is better than 0%. Build it gradually. Use our <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">Savings Rate Calculator</Link> to see where you stand today.</p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <p className="mt-2 text-sm text-[#889988]">Use our <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link> to build your first budget in minutes. Then visit <Link to="/start-here" className="text-[#A3FFD6] hover:underline">Start Here</Link> for a guided tour of all our tools.</p>
      </div>
    </ArticleShell>
  );
}