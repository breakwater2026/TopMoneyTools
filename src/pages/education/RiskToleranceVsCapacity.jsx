import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Risk Tolerance vs Risk Capacity",
  description: "Feelings about volatility are not the same as the ability to absorb losses. Align investing with both.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/risk-tolerance-vs-capacity",
};

export default function RiskToleranceVsCapacity() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Risk Tolerance vs Risk Capacity", item: "https://topmoneytools.com/education/risk-tolerance-vs-capacity" },
    ],
  };

  return (
    <ArticleShell
      title="Risk Tolerance vs Risk Capacity"
      description="Feelings about volatility are not the same as the ability to absorb losses. Align investing with both."
      path="/education/risk-tolerance-vs-capacity"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is risk tolerance?", slug: "risk-tolerance" },
        { q: "What is volatility?", slug: "volatility" }
      ]}
      relatedTools={[
        { label: "Retirement Savings", to: "/tools/retirement" },
        { label: "Emergency Fund", to: "/tools/emergency-fund" }
      ]}
      seoMeta={{
        title: "Risk Tolerance vs Risk Capacity | TopMoneyTools",
        description: "Feelings about volatility are not the same as the ability to absorb losses. Align investing with both.",
        url: "https://topmoneytools.com/education/risk-tolerance-vs-capacity",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Risk tolerance</strong> is how you <em>feel</em> about ups and downs. <strong className="text-[#E0E0E0]">Risk capacity</strong> is how much loss you can <em>absorb</em> without breaking goals, debt plans, or essential spending.
      </p>
      <p className="mt-3 text-[#889988]">
        Good plans respect both. High tolerance with low capacity is how people freeze at the worst moment. High capacity with tiny tolerance may leave long-term growth on the table—or push someone into speculative side bets that do not match their real portfolio.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Risk tolerance (the gut)
      </h2>
      <p className="mt-3 text-[#889988]">
        Signs of lower tolerance:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>You check prices constantly and lose sleep</li>
        <li>You sold in a past crash and regret the timing</li>
        <li>You need stability language to stay invested</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Signs of higher tolerance:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>You can ignore noise for years</li>
        <li>You understand drawdowns as part of equity history</li>
        <li>You will not raid long-term accounts for lifestyle shocks</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Tolerance can be trained somewhat with education; it is still real.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Risk capacity (the math of your life)
      </h2>
      <p className="mt-3 text-[#889988]">
        Capacity rises when:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Horizon is long</li>
        <li>Job is stable or diversified</li>
        <li>Emergency fund is funded</li>
        <li>Essential spending is low relative to income</li>
        <li>No high-interest debt spiral</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Capacity falls when:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>You need the money in 1–3 years</li>
        <li>Income is fragile</li>
        <li>You are the sole earner with high fixed costs</li>
        <li>You would have to sell investments to pay rent in a downturn</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example: same age, different capacity
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Jordan and Sam, both 40.</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><strong className="text-[#E0E0E0]">Jordan:</strong> dual income, 6-month emergency fund, mortgage manageable, investing for age 65.</li>
        <li><strong className="text-[#E0E0E0]">Sam:</strong> single income, 3 weeks cash, variable freelance revenue, may need funds for a career reset in two years.</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Even if both <em>feel</em> brave, Sam’s <strong className="text-[#E0E0E0]">capacity</strong> for stock-heavy volatility on near-term money is lower. Sam may still invest surplus long-term money, but not the cash that replaces the emergency fund.
      </p>
      <p className="mt-3 text-[#889988]">
        Tools: <Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">Emergency Fund</Link>, <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link>, <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">Investment Growth</Link>.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Aligning the two
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Situation</th>
              <th className="py-2 pr-3 font-semibold">Lean toward</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">High tolerance, high capacity</td>
              <td className="py-2 pr-3">Long-term growth assets as appropriate for goals</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">High tolerance, low capacity</td>
              <td className="py-2 pr-3">Build capacity first (cash, costs, debt)</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Low tolerance, high capacity</td>
              <td className="py-2 pr-3">Automation + simpler allocations + education</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Low tolerance, low capacity</td>
              <td className="py-2 pr-3">Stability first; investing is secondary to survival math</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Behavior is part of risk
      </h2>
      <p className="mt-3 text-[#889988]">
        The “correct” academic portfolio is useless if you abandon it in a drawdown. A slightly more conservative plan you can hold may beat an aggressive plan you dump at the bottom.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Taking risk to catch up after years of undersaving without fixing savings rate</li>
        <li>Confusing a bull market for high tolerance</li>
        <li>Using leverage to manufacture “capacity”</li>
        <li>Ignoring spouses/partners with different tolerances</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">Investing 101</Link></li>
        <li><Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">Retirement Savings</Link></li>
        <li><Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">Savings Rate</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
