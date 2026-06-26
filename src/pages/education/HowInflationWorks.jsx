import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

export default function HowInflationWorks() {
  return (
    <ArticleShell
      title="How Inflation Works — and What It Means for Your Wallet"
      description="Inflation silently erodes your purchasing power every year. Learn what causes it, how it compounds, and what you can do to stay ahead."
      path="/education/how-inflation-works"
      sidebarTerms={[
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is purchasing power?", slug: "purchasing-power" },
        { q: "What is compound growth?", slug: "compound-growth" },
        { q: "What is a budget?", slug: "budget" },
        { q: "What is a savings rate?", slug: "savings-rate" },
      ]}
      relatedTools={[
        { label: "Food Inflation Calculator", to: "/tools/food-inflation" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
      ]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is inflation?</h2>
      <p className="text-[#889988]"><Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">Inflation</Link> is the rate at which prices rise over time. A 3% annual inflation rate means what costs $100 today will cost $103 next year. Over 10 years, that same item costs about $134. Your money buys less — not because you spent it, but because prices moved.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">What causes inflation?</h2>
      <p className="text-[#889988]">Inflation is driven by several forces: too much money chasing too few goods (demand-pull), rising production costs (cost-push), and expectations that prices will keep rising. Central banks manage interest rates to try to keep inflation in a stable range — typically 2% annually in most developed economies.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The compound effect on purchasing power</h2>
      <p className="text-[#889988]">Like interest, inflation compounds. At 4% inflation, your <Link to="/glossary#purchasing-power" className="text-[#A3FFD6] hover:underline">purchasing power</Link> halves in about 18 years. This means a fixed pension or savings balance buys dramatically less over a long retirement. Use the <Link to="/tools/food-inflation" className="text-[#A3FFD6] hover:underline">Food Inflation Calculator</Link> to see this for your grocery bill specifically.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Inflation vs. your income</h2>
      <p className="text-[#889988]">If your salary doesn't keep pace with inflation, you've effectively taken a real pay cut. Many employers offer raises below the inflation rate. Tracking your personal inflation rate — how much your specific expenses are rising — gives you clearer data than the headline CPI figure.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Staying ahead of inflation</h2>
      <p className="text-[#889988]">Cash savings erode in real terms if the interest rate is below inflation. Investing in assets that grow — equities, real estate, inflation-linked bonds — is how most people protect their wealth long-term. Your <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">savings rate</Link> must account for inflation to be truly meaningful.</p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <p className="mt-2 text-sm text-[#889988]">See how inflation hits your grocery bill with the <Link to="/tools/food-inflation" className="text-[#A3FFD6] hover:underline">Food Inflation Calculator</Link>, or read our <Link to="/education/how-inflation-affects-your-daily-budget" className="text-[#A3FFD6] hover:underline">full article on inflation and budgets</Link>.</p>
      </div>
    </ArticleShell>
  );
}