import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Car Buying: Cash, Loan, or Wait",
  description: "Depreciation, total cost of ownership, and when financing is tool versus trap.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/car-buying-cash-loan-wait",
};

export default function CarBuyingCashLoanWait() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Car Buying: Cash, Loan, or Wait", item: "https://topmoneytools.com/education/car-buying-cash-loan-wait" },
    ],
  };

  return (
    <ArticleShell
      title="Car Buying: Cash, Loan, or Wait"
      description="Depreciation, total cost of ownership, and when financing is tool versus trap."
      path="/education/car-buying-cash-loan-wait"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is an auto loan?", slug: "auto-loan" },
        { q: "What is opportunity cost?", slug: "opportunity-cost" }
      ]}
      relatedTools={[
              { label: "Auto Loan Calculator", to: "/tools/auto-loan" },
              { label: "Savings Goal", to: "/tools/savings-goal" },
              { label: "Budget Planner", to: "/tools/budget-planner" }
            ]}
            relatedArticles={[
              { label: "Car Buying: New vs. Used", to: "/education/car-buying-guide", num: "116" },
            ]}
            seoMeta={{
              title: "Car Buying: Cash, Loan, or Wait | TopMoneyTools",
              description: "Depreciation, total cost of ownership, and when financing is tool versus trap.",
              url: "https://topmoneytools.com/education/car-buying-cash-loan-wait",
              type: "article",
            }}
            structuredData={[structuredData, breadcrumbSchema]}
          >
            <p className="mt-3 rounded-sm border border-[#A3FFD6]/20 bg-[#A3FFD6]/5 px-3 py-2 text-sm text-[#889988]">
              <strong className="text-[#E0E0E0]">How this differs:</strong>{" "}
              <Link to="/education/car-buying-guide" className="text-[#A3FFD6] hover:underline">Car Buying: New vs. Used</Link>
              {" "}compares vehicle type and depreciation. This article is about <em>funding</em> — cash, loan, or waiting — once you roughly know what car you need.
            </p>
            <p className="mt-3 text-[#889988]">
              Cars are mostly declining assets. The “best” purchase is often the one that meets reliable-transport needs at the lowest <strong className="text-[#E0E0E0]">total cost of ownership</strong> without wrecking your safety net.
            </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Total cost of ownership (not just sticker)
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Purchase price or payment</li>
        <li>Interest if financed (<Link to="/tools/auto-loan" className="text-[#A3FFD6] hover:underline">Auto Loan Calculator</Link>)</li>
        <li>Insurance, fuel, parking, maintenance</li>
        <li>Opportunity cost of cash used</li>
        <li>Depreciation</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Cash
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Pros:</strong> no interest; simpler; no payment hanging over you. <strong className="text-[#E0E0E0]">Cons:</strong> large cash drain can empty emergency funds; money spent cannot invest.
      </p>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Cash is healthier when</strong> reserves remain funded after purchase and high-APR debt is already gone.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Loan
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Pros:</strong> preserves liquidity; sometimes useful if rate is low and cash has a clearer job. <strong className="text-[#E0E0E0]">Cons:</strong> interest; temptation to buy more car; negative equity on long terms.
      </p>
      <p className="mt-3 text-[#889988]">
        Stress-test the payment inside the <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link>. If the payment only works with zero saving, wait or buy less car.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Wait
      </h2>
      <p className="mt-3 text-[#889988]">
        Waiting is underrated:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Ride down a repairable car with a known history</li>
        <li>Build the <Link to="/tools/savings-goal" className="text-[#A3FFD6] hover:underline">savings goal</Link> for a larger down payment</li>
        <li>Avoid dealer urgency tactics</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Waiting fails when repairs become unsafe or more expensive than replacing.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example: $28,000 car
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Path</th>
              <th className="py-2 pr-3 font-semibold">Structure</th>
              <th className="py-2 pr-3 font-semibold">Watch-outs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Cash</td>
              <td className="py-2 pr-3">$28,000 out of savings</td>
              <td className="py-2 pr-3">Keep emergency fund intact first</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Loan</td>
              <td className="py-2 pr-3">$4,000 down, $24,000 at 7% for 60 months</td>
              <td className="py-2 pr-3">Interest + payment discipline</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Wait 12 months</td>
              <td className="py-2 pr-3">Save hard; buy later</td>
              <td className="py-2 pr-3">Repair risk on current car</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        Run interest totals in the auto loan tool. A “small” payment over 84 months can hide a large interest bill and a car worth far less than the balance.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Shopping payment only</li>
        <li>Extending term to “afford” luxury trims</li>
        <li>Rolling negative equity forward</li>
        <li>Skipping independent inspection on used cars</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/tools/auto-loan" className="text-[#A3FFD6] hover:underline">Auto Loan Calculator</Link></li>
        <li><Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost</Link></li>
        <li><Link to="/education/how-to-compare-loans" className="text-[#A3FFD6] hover:underline">How to Compare Loans</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
