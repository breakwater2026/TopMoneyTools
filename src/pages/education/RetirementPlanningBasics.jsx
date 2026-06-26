import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

export default function RetirementPlanningBasics() {
  return (
    <ArticleShell
      title="Retirement Planning Basics — Building Your Future Income"
      description="Learn the core concepts of retirement planning: how much to save, what the 4% rule means, and how to project your nest egg."
      path="/education/retirement-planning-basics"
      sidebarTerms={[
        { q: "What is the 4% rule?", slug: "4-percent-rule" },
        { q: "What is compound growth?", slug: "compound-growth" },
        { q: "What is an annuity?", slug: "annuity" },
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is risk tolerance?", slug: "risk-tolerance" },
      ]}
      relatedTools={[
        { label: "Retirement Calculator", to: "/tools/retirement" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
      ]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why retirement planning starts now</h2>
      <p className="text-[#889988]">Retirement can last 20–30 years. The earlier you start saving, the more <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">compound growth</Link> works in your favour. Waiting 10 years to start can cost you more than doubling your monthly contribution ever could recover.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How much do you need?</h2>
      <p className="text-[#889988]">A common estimate: multiply your desired annual retirement income by 25. Want $50,000/year? Aim for $1.25 million. This comes from the <Link to="/glossary#4-percent-rule" className="text-[#A3FFD6] hover:underline">4% rule</Link> — the guideline that withdrawing 4% of savings annually is sustainable for about 30 years. Use the <Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">Retirement Savings Calculator</Link> to project your specific number.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The three buckets of retirement income</h2>
      <p className="text-[#889988]">Most people's retirement income comes from three places: government pensions (Social Security, CPP), employer plans (401k, RRSP, pension), and personal savings (investments, savings accounts). Understanding all three lets you plan the gaps — not every retiree has all three.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Inflation quietly shrinks your nest egg</h2>
      <p className="text-[#889988]"><Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">Inflation</Link> means $1 million in 25 years buys less than $1 million today. Your savings target should account for rising prices — especially in healthcare, which tends to inflate faster than the general rate. Build in a buffer.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Start small, increase consistently</h2>
      <p className="text-[#889988]">Even saving 5% now and increasing by 1% each year puts you dramatically ahead of doing nothing. Small, consistent contributions plus time and <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">compound growth</Link> are the combination that builds real retirement security.</p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <p className="mt-2 text-sm text-[#889988]">Run your numbers with the <Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">Retirement Savings Calculator</Link>. See all <Link to="/resources" className="text-[#A3FFD6] hover:underline">Resources</Link> including government retirement planning links.</p>
      </div>
    </ArticleShell>
  );
}