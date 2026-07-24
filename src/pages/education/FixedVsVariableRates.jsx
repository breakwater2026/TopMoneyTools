import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fixed vs Variable Rate Loans",
  description: "Payment certainty versus rate risk. How to stress-test a variable rate and choose with eyes open.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/fixed-vs-variable-rates",
};

export default function FixedVsVariableRates() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Fixed vs Variable Rate Loans", item: "https://topmoneytools.com/education/fixed-vs-variable-rates" },
    ],
  };

  return (
    <ArticleShell
      title="Fixed vs Variable Rate Loans"
      description="Payment certainty versus rate risk. How to stress-test a variable rate and choose with eyes open."
      path="/education/fixed-vs-variable-rates"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is APR?", slug: "apr" }
      ]}
      relatedTools={[
        { label: "Mortgage Payment", to: "/tools/mortgage-payment" },
        { label: "Debt Cost Calculator", to: "/tools/debt-cost" }
      ]}
      seoMeta={{
        title: "Fixed vs Variable Rate Loans | TopMoneyTools",
        description: "Payment certainty versus rate risk. How to stress-test a variable rate and choose with eyes open.",
        url: "https://topmoneytools.com/education/fixed-vs-variable-rates",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        A <strong className="text-[#E0E0E0]">fixed rate</strong> stays the same for a defined term. A <strong className="text-[#E0E0E0]">variable (or adjustable) rate</strong> can move with a reference index. One buys certainty; the other can start cheaper and then change the payment story.
      </p>
      <p className="mt-3 text-[#889988]">
        Neither is morally superior. The fit depends on your cash-flow flexibility, time horizon, and tolerance for payment shock.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Fixed rates: what you are buying
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Pros</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Predictable principal & interest</li>
        <li>Easier long-term budgeting</li>
        <li>Protection if market rates rise</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Cons</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Often a higher starting rate than variable teaser/start rates</li>
        <li>If rates fall materially, you may need to refinance (with costs) to benefit</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Use the <Link to="/tools/mortgage-payment" className="text-[#A3FFD6] hover:underline">Mortgage Payment Calculator</Link> and <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost Calculator</Link> to map a fixed path.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Variable rates: what you are accepting
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Pros</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Sometimes lower initial rate</li>
        <li>Benefit if rates decline and your contract allows</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Cons</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Payment or interest cost can rise</li>
        <li>Harder to plan tight budgets</li>
        <li>Stress in news-cycle rate spikes</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Some products adjust payment; others adjust amortization. Read the contract structure for your country and product.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        The +2% stress test
      </h2>
      <p className="mt-3 text-[#889988]">
        Before choosing variable, run:
      </p>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Current estimated payment at today’s variable rate</li>
        <li>Payment if the rate is <strong className="text-[#E0E0E0]">+2 percentage points</strong></li>
        <li>Payment at a severe case you pick (e.g. +3–4% if you want a harder test)</li>
      </ol>
      <p className="mt-3 text-[#889988]">
        If the stress payment breaks the budget or eliminates all saving, variable is a lifestyle risk—not just a finance nerd debate.
      </p>
      <h3 className="mt-4 text-lg font-semibold text-[#E0E0E0]">
        Mini example
      </h3>
      <p className="mt-3 text-[#889988]">
        Loan balance <strong className="text-[#E0E0E0]">$300,000</strong>, remaining amortization long enough that rate drives payment.
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>At <strong className="text-[#E0E0E0]">5%</strong>, payment is manageable in your budget</li>
        <li>At <strong className="text-[#E0E0E0]">7%</strong>, payment jumps enough to erase vacation, investing, or both</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        If you only “afford” the 5% version, you are not choosing variable—you are betting on rates.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        When variable can be reasonable
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>You have stable income and a <strong className="text-[#E0E0E0]">wide</strong> monthly surplus</li>
        <li>You can tolerate higher payments without high-interest card debt</li>
        <li>You expect to repay or refinance on a clear timeline</li>
        <li>You understand triggers, caps, floors, and adjustment frequency</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        When fixed is often calmer
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Budget is tight</li>
        <li>Income is variable (commission, freelance)</li>
        <li>You sleep poorly when payments might jump</li>
        <li>You will hold the loan across uncertain macro periods</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Mortgages vs shorter loans
      </h2>
      <p className="mt-3 text-[#889988]">
        Rate-type choice shows up in mortgages, HELOCs, some private credit, and certain consumer products. Auto and student loans are often fixed, but not always. Always verify <strong className="text-[#E0E0E0]">your</strong> offer.
      </p>
      <p className="mt-3 text-[#889988]">
        For housing decisions, pair rate analysis with <Link to="/tools/rent-vs-buy" className="text-[#A3FFD6] hover:underline">Rent vs Buy</Link> and <Link to="/tools/home-affordability" className="text-[#A3FFD6] hover:underline">Home Affordability</Link>.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Taking variable to stretch into more house</li>
        <li>Ignoring adjustment caps that still allow painful moves</li>
        <li>Comparing fixed vs variable on the first payment only</li>
        <li>Refinancing costs ignored when “chasing” rate moves</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/education/understanding-interest-rates" className="text-[#A3FFD6] hover:underline">Understanding Interest Rates</Link></li>
        <li><Link to="/education/how-to-compare-loans" className="text-[#A3FFD6] hover:underline">How to Compare Loans</Link></li>
        <li><Link to="/tools/mortgage-payment" className="text-[#A3FFD6] hover:underline">Mortgage Payment Calculator</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
