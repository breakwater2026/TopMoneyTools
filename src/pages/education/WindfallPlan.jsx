import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Do With a Windfall (Bonus, Tax Refund, Gift)",
  description: "A calm order of operations for bonuses and tax refunds\u2014debt, buffer, goals, then investing.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/windfall-plan",
};

export default function WindfallPlan() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "What to Do With a Windfall (Bonus, Tax Refund, Gift)", item: "https://topmoneytools.com/education/windfall-plan" },
    ],
  };

  return (
    <ArticleShell
      title="What to Do With a Windfall (Bonus, Tax Refund, Gift)"
      description="A calm order of operations for bonuses and tax refunds\u2014debt, buffer, goals, then investing."
      path="/education/windfall-plan"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is dollar-cost averaging?", slug: "dollar-cost-averaging" }
      ]}
      relatedTools={[
        { label: "DCA vs Lump Sum", to: "/tools/dca-vs-lump-sum" },
        { label: "Emergency Fund", to: "/tools/emergency-fund" },
        { label: "Credit Card Payoff", to: "/tools/credit-card-payoff" }
      ]}
      seoMeta={{
        title: "What to Do With a Windfall (Bonus, Tax Refund, Gift) | TopMoneyTools",
        description: "A calm order of operations for bonuses and tax refunds\u2014debt, buffer, goals, then investing.",
        url: "https://topmoneytools.com/education/windfall-plan",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        A windfall is a gift to your future—or fuel for lifestyle creep. The difference is whether money hits a plan before it hits your habits.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        A simple order of operations
      </h2>
      <p className="mt-3 text-[#889988]">
        Not every step applies every time. Use the sequence as a filter.
      </p>
      <h3 className="mt-4 text-lg font-semibold text-[#E0E0E0]">
        1. Stabilize
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Cover past-due essentials</li>
        <li>Rebuild a starter emergency cushion if it is empty (<Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">Emergency Fund Calculator</Link>)</li>
      </ul>
      <h3 className="mt-4 text-lg font-semibold text-[#E0E0E0]">
        2. Erase expensive debt
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>High-APR cards and predatory balances first (<Link to="/tools/credit-card-payoff" className="text-[#A3FFD6] hover:underline">Credit Card Payoff</Link>, <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost</Link>)</li>
        <li>The guaranteed “return” of paying 20% APR debt is hard to beat safely</li>
      </ul>
      <h3 className="mt-4 text-lg font-semibold text-[#E0E0E0]">
        3. Protect near-term goals
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Known expenses inside 1–3 years (move, tuition installment, essential travel) belong in safer savings, not speculative assets (<Link to="/tools/savings-goal" className="text-[#A3FFD6] hover:underline">Savings Goal</Link>)</li>
      </ul>
      <h3 className="mt-4 text-lg font-semibold text-[#E0E0E0]">
        4. Invest for the long term
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>After the above, deploy long-horizon money per your risk capacity</li>
        <li>For timing anxiety, compare approaches with <Link to="/tools/dca-vs-lump-sum" className="text-[#A3FFD6] hover:underline">DCA vs Lump Sum</Link></li>
      </ul>
      <h3 className="mt-4 text-lg font-semibold text-[#E0E0E0]">
        5. Optionally celebrate—on a cap
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>A small planned treat prevents “I deserve it all” from consuming the windfall</li>
        <li>Cap it as a percentage (for example 5–10%) so the plan remains intact</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example: $8,000 bonus (after tax)
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Slice</th>
              <th className="py-2 pr-3 font-semibold">Amount</th>
              <th className="py-2 pr-3 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Emergency top-up</td>
              <td className="py-2 pr-3">$2,000</td>
              <td className="py-2 pr-3">Raise runway from 1 month toward 3</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Card balance</td>
              <td className="py-2 pr-3">$3,000</td>
              <td className="py-2 pr-3">Clear 22% APR debt</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Long-term investing</td>
              <td className="py-2 pr-3">$2,400</td>
              <td className="py-2 pr-3">Automatic transfer to investments</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Planned celebrate</td>
              <td className="py-2 pr-3">$600</td>
              <td className="py-2 pr-3">Weekend trip with a hard cap</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        Without a plan, $8,000 can disappear into upgrades that raise baseline spending forever.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Bonuses and lifestyle creep
      </h2>
      <p className="mt-3 text-[#889988]">
        A raise or bonus is temporary permission to inflate fixed costs (car, rent, subscriptions). Prefer <strong className="text-[#E0E0E0]">one-time</strong> uses or <strong className="text-[#E0E0E0]">automatic</strong> saving increases the week the money arrives.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Tax refunds are not free money
      </h2>
      <p className="mt-3 text-[#889988]">
        A refund is often an interest-free loan you gave the government. Still use the same order of operations—but also check withholding so you are not over-lending each paycheck unless you do so intentionally.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Investing while carrying crushing card APR</li>
        <li>Spending first, “investing what’s left”</li>
        <li>Lending windfalls to relatives without terms you can afford</li>
        <li>Parking long-term money in volatile assets needed next year</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link></li>
        <li><Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">Savings Rate</Link></li>
        <li><Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">Investing 101</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
