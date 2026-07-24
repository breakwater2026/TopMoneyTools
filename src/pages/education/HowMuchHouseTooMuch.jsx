import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much House Is Too Much?",
  description: "Payment comfort, maintenance, and opportunity cost\u2014why lender maximum is not the same as enough life left over.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/how-much-house-too-much",
};

export default function HowMuchHouseTooMuch() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "How Much House Is Too Much?", item: "https://topmoneytools.com/education/how-much-house-too-much" },
    ],
  };

  return (
    <ArticleShell
      title="How Much House Is Too Much?"
      description="Payment comfort, maintenance, and opportunity cost\u2014why lender maximum is not the same as enough life left over."
      path="/education/how-much-house-too-much"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is debt-to-income?", slug: "debt-to-income" },
        { q: "What is a mortgage?", slug: "mortgage" }
      ]}
      relatedTools={[
              { label: "Home Affordability", to: "/tools/home-affordability" },
              { label: "Mortgage Payment", to: "/tools/mortgage-payment" },
              { label: "Budget Planner", to: "/tools/budget-planner" }
            ]}
            relatedArticles={[
              { label: "Home Affordability: How Much House?", to: "/education/home-affordability", num: "115" },
              { label: "Down Payments: 5%, 10%, or 20%?", to: "/education/down-payment-tradeoffs", num: "130" },
            ]}
            seoMeta={{
              title: "How Much House Is Too Much? | TopMoneyTools",
              description: "Payment comfort, maintenance, and opportunity cost—why lender maximum is not the same as enough life left over.",
              url: "https://topmoneytools.com/education/how-much-house-too-much",
              type: "article",
            }}
            structuredData={[structuredData, breadcrumbSchema]}
          >
            <p className="mt-3 rounded-sm border border-[#A3FFD6]/20 bg-[#A3FFD6]/5 px-3 py-2 text-sm text-[#889988]">
              <strong className="text-[#E0E0E0]">How this differs:</strong>{" "}
              <Link to="/education/home-affordability" className="text-[#A3FFD6] hover:underline">Home Affordability</Link>
              {" "}explains lender DTI rules and closing costs. This article is the household comfort test — why the bank’s max is often too high for a life you still want to live. For down-payment sizing, see{" "}
              <Link to="/education/down-payment-tradeoffs" className="text-[#A3FFD6] hover:underline">Down Payments: 5%, 10%, or 20%?</Link>.
            </p>
            <p className="mt-3 text-[#889988]">
              A lender’s maximum approval is a risk decision for the lender. <strong className="text-[#E0E0E0]">Your</strong> maximum should leave room to live, save, and absorb repairs.
            </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Three ceilings (use the lowest)
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li><strong className="text-[#E0E0E0]">Qualification ceiling</strong> — what rules and credit might allow</li>
        <li><strong className="text-[#E0E0E0]">Budget ceiling</strong> — what still funds retirement, buffers, and childcare</li>
        <li><strong className="text-[#E0E0E0]">Stress ceiling</strong> — what still works if rates reset, hours drop, or a furnace dies</li>
      </ol>
      <p className="mt-3 text-[#889988]">
        Tools: <Link to="/tools/home-affordability" className="text-[#A3FFD6] hover:underline">Home Affordability</Link>, <Link to="/tools/mortgage-payment" className="text-[#A3FFD6] hover:underline">Mortgage Payment</Link>, <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link>.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Costs people forget
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Maintenance and repairs</li>
        <li>Higher utilities in larger spaces</li>
        <li>Commuting if the “affordable” house is far away</li>
        <li>Furniture and setup</li>
        <li>HOA special assessments</li>
        <li>Higher insurance deductibles</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        If P&I is 28% of gross but total housing life is 45% of net, the house is too much.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example: affordable vs stretch
      </h2>
      <p className="mt-3 text-[#889988]">
        Household net income: <strong className="text-[#E0E0E0]">$7,000/month</strong>.
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Path</th>
              <th className="py-2 pr-3 font-semibold">Total housing costs</th>
              <th className="py-2 pr-3 font-semibold">Left for everything else</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Comfort</td>
              <td className="py-2 pr-3">$2,100</td>
              <td className="py-2 pr-3">$4,900</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Stretch</td>
              <td className="py-2 pr-3">$3,200</td>
              <td className="py-2 pr-3">$3,800</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Break</td>
              <td className="py-2 pr-3">$3,800</td>
              <td className="py-2 pr-3">$3,200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        Stretch still “qualifies” in some systems. Break fails the first job blip. Comfort funds <Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">emergency savings</Link> and investing simultaneously.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Opportunity cost
      </h2>
      <p className="mt-3 text-[#889988]">
        Every extra $500/month of house is $500 not compounding for retirement. Over long periods that is a different lifestyle at 65. Compare directions with <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">Investment Growth</Link>—humbly.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Lifestyle truth questions
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Will we host enough to justify the space?</li>
        <li>Are we buying status for visitors we see twice a year?</li>
        <li>Can we maintain this at 50-hour workweeks with kids?</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Shopping listings before a comfort number</li>
        <li>Bidding wars funded by draining reserves</li>
        <li>Ignoring dual-income risk if one parent steps back</li>
        <li>Treating renovations as free future equity</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/tools/rent-vs-buy" className="text-[#A3FFD6] hover:underline">Rent vs Buy</Link></li>
        <li><Link to="/education/down-payment-tradeoffs" className="text-[#A3FFD6] hover:underline">Down payment tradeoffs</Link></li>
        <li><Link to="/education/how-to-compare-loans" className="text-[#A3FFD6] hover:underline">How to Compare Loans</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
