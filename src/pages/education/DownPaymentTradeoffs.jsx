import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Down Payments: 5%, 10%, or 20%?",
  description: "How down payment size changes payment, interest, cash reserves, and risk\u2014not just \u201chow soon can we buy.\u201d",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/down-payment-tradeoffs",
};

export default function DownPaymentTradeoffs() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Down Payments: 5%, 10%, or 20%?", item: "https://topmoneytools.com/education/down-payment-tradeoffs" },
    ],
  };

  return (
    <ArticleShell
      title="Down Payments: 5%, 10%, or 20%?"
      description="How down payment size changes payment, interest, cash reserves, and risk\u2014not just \u201chow soon can we buy.\u201d"
      path="/education/down-payment-tradeoffs"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is a down payment?", slug: "down-payment" },
        { q: "What is PMI?", slug: "pmi" }
      ]}
      relatedTools={[
        { label: "Home Affordability", to: "/tools/home-affordability" },
        { label: "Mortgage Payment", to: "/tools/mortgage-payment" },
        { label: "Emergency Fund", to: "/tools/emergency-fund" }
      ]}
      seoMeta={{
        title: "Down Payments: 5%, 10%, or 20%? | TopMoneyTools",
        description: "How down payment size changes payment, interest, cash reserves, and risk\u2014not just \u201chow soon can we buy.\u201d",
        url: "https://topmoneytools.com/education/down-payment-tradeoffs",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        A larger down payment usually means a smaller loan, less interest, and sometimes cheaper default insurance requirements. A smaller down payment preserves cash and can get you into a home sooner—if the payment and reserves still work.
      </p>
      <p className="mt-3 text-[#889988]">
        The right answer is a tradeoff, not a slogan.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        What changes when the down payment changes
      </h2>
      <p className="mt-3 text-[#889988]">
        For the same price and rate:
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Larger down payment</th>
              <th className="py-2 pr-3 font-semibold">Smaller down payment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Lower loan amount</td>
              <td className="py-2 pr-3">Higher loan amount</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Lower total interest (all else equal)</td>
              <td className="py-2 pr-3">Higher total interest</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Lower monthly P&I</td>
              <td className="py-2 pr-3">Higher monthly P&I</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Less cash after closing</td>
              <td className="py-2 pr-3">More cash kept (if not spent elsewhere)</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Often stronger equity day one</td>
              <td className="py-2 pr-3">Higher risk of negative equity if prices dip</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        Run parallel scenarios in the <Link to="/tools/mortgage-payment" className="text-[#A3FFD6] hover:underline">Mortgage Payment Calculator</Link> and <Link to="/tools/home-affordability" className="text-[#A3FFD6] hover:underline">Home Affordability Calculator</Link>.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example (same home, three downs)
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Home price: $400,000 · Rate: 6.5% · Term: 30 years (illustrative)</strong>
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Down</th>
              <th className="py-2 pr-3 font-semibold">Cash down</th>
              <th className="py-2 pr-3 font-semibold">Loan</th>
              <th className="py-2 pr-3 font-semibold">Directional P&I story</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">5%</td>
              <td className="py-2 pr-3">$20,000</td>
              <td className="py-2 pr-3">$380,000</td>
              <td className="py-2 pr-3">Highest payment; most interest over life</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">10%</td>
              <td className="py-2 pr-3">$40,000</td>
              <td className="py-2 pr-3">$360,000</td>
              <td className="py-2 pr-3">Middle</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">20%</td>
              <td className="py-2 pr-3">$80,000</td>
              <td className="py-2 pr-3">$320,000</td>
              <td className="py-2 pr-3">Lowest P&I; least interest</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        Exact payments belong in the calculator. The pattern is stable: <strong className="text-[#E0E0E0]">cash today vs cost over time.</strong>
      </p>
      <p className="mt-3 text-[#889988]">
        Also budget <strong className="text-[#E0E0E0]">closing costs</strong> on top of the down payment. Buyers who empty every account to hit 20% and then finance a fridge on a credit card have not really “won” 20%.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        The reserve question (often more important than 20%)
      </h2>
      <p className="mt-3 text-[#889988]">
        After closing, do you still have:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Emergency fund (<Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">Emergency Fund Calculator</Link>)</li>
        <li>Money for immediate repairs</li>
        <li>Room in the budget for maintenance</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        A 20% down payment with $0 reserves is fragile. A 10% down payment with six months of essentials and a payment that fits can be stronger <strong className="text-[#E0E0E0]">operationally</strong>.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Opportunity cost
      </h2>
      <p className="mt-3 text-[#889988]">
        Cash placed into home equity does not sit in an investment account. That is not a reason to avoid homeownership; it is a reason to avoid romanticizing “all-in on the down payment” while underfunding retirement or liquidity.
      </p>
      <p className="mt-3 text-[#889988]">
        Use <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">Investment Growth</Link> only for long-horizon comparisons—and with humble return assumptions.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Default insurance and local rules
      </h2>
      <p className="mt-3 text-[#889988]">
        In some markets, smaller down payments trigger insurance or special underwriting that changes monthly cost. Rules differ by country and product. Treat this article as a framework; verify local requirements.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Decision checklist
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Payment comfort at a <strong className="text-[#E0E0E0]">higher</strong> rate stress</li>
        <li>Reserves after closing</li>
        <li>Time you expect to stay (see <Link to="/tools/rent-vs-buy" className="text-[#A3FFD6] hover:underline">Rent vs Buy</Link>)</li>
        <li>Other high-interest debt still open</li>
        <li>Income stability</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Draining emergency cash to hit a round percentage</li>
        <li>Stretching price because “the payment still qualifies”</li>
        <li>Ignoring condo fees and taxes in the affordability story</li>
        <li>Timing a purchase only around FOMO</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/tools/rent-vs-buy" className="text-[#A3FFD6] hover:underline">Rent vs Buy Calculator</Link></li>
        <li><Link to="/tools/savings-goal" className="text-[#A3FFD6] hover:underline">Savings Goal Calculator</Link></li>
        <li><Link to="/education/how-to-compare-loans" className="text-[#A3FFD6] hover:underline">How to Compare Loans</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
