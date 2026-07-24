import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sequence of Returns Risk (Why Early Retirement Is Harder)",
  description: "Why average returns mislead early retirees and how bad markets at the start of withdrawals change outcomes.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/sequence-of-returns",
};

export default function SequenceOfReturns() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Sequence of Returns Risk (Why Early Retirement Is Harder)", item: "https://topmoneytools.com/education/sequence-of-returns" },
    ],
  };

  return (
    <ArticleShell
      title="Sequence of Returns Risk (Why Early Retirement Is Harder)"
      description="Why average returns mislead early retirees and how bad markets at the start of withdrawals change outcomes."
      path="/education/sequence-of-returns"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is a safe withdrawal rate?", slug: "safe-withdrawal-rate" },
        { q: "What is the 4% rule?", slug: "4-percent-rule" }
      ]}
      relatedTools={[
        { label: "Retirement Withdrawal", to: "/tools/retirement-withdrawal" },
        { label: "FIRE Number", to: "/tools/fire-number" }
      ]}
      seoMeta={{
        title: "Sequence of Returns Risk (Why Early Retirement Is Harder) | TopMoneyTools",
        description: "Why average returns mislead early retirees and how bad markets at the start of withdrawals change outcomes.",
        url: "https://topmoneytools.com/education/sequence-of-returns",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        Two retirees can earn the <strong className="text-[#E0E0E0]">same average return</strong> over 30 years and finish in very different places if one hits a bear market at the start of withdrawals and the other hits it later. That is <strong className="text-[#E0E0E0]">sequence of returns risk</strong>.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        The idea in one story
      </h2>
      <p className="mt-3 text-[#889988]">
        Both start with <strong className="text-[#E0E0E0]">$800,000</strong> and withdraw <strong className="text-[#E0E0E0]">$32,000</strong> in year one (4%), adjusting somewhat for inflation.
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><strong className="text-[#E0E0E0]">Path A:</strong> Strong markets early, weak later</li>
        <li><strong className="text-[#E0E0E0]">Path B:</strong> Weak markets early, strong later</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Average returns over the full period might match. Path B still hurts more because withdrawals <strong className="text-[#E0E0E0]">lock in losses</strong> when the portfolio is down—fewer shares remain to recover.
      </p>
      <p className="mt-3 text-[#889988]">
        Smooth calculators that assume one constant return every year <strong className="text-[#E0E0E0]">understate</strong> this risk. Use <Link to="/tools/retirement-withdrawal" className="text-[#A3FFD6] hover:underline">Retirement Withdrawal</Link> for intuition, then treat results with humility.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Why early retirement is more exposed
      </h2>
      <p className="mt-3 text-[#889988]">
        Leaving work at 50–55 can mean:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>More decades of withdrawals</li>
        <li>Fewer paycheck years to refill the gap</li>
        <li>Healthcare bridges before public programs</li>
        <li>Higher lifetime sequence risk than a short retirement</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        FI/FIRE plans should stress spending flexibility, not only a headline <Link to="/tools/fire-number" className="text-[#A3FFD6] hover:underline">FIRE number</Link>.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What helps (conceptual, not a product list)
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li><strong className="text-[#E0E0E0]">Flexible spending</strong> — cut optional costs after bad return years</li>
        <li><strong className="text-[#E0E0E0]">Cash buffer</strong> — reduce forced selling in a crash</li>
        <li><strong className="text-[#E0E0E0]">Part-time or bridge income</strong> — lowers withdrawal pressure</li>
        <li><strong className="text-[#E0E0E0]">Lower fixed costs</strong> before retirement (housing, cars)</li>
        <li><strong className="text-[#E0E0E0]">Diversification and modest fees</strong> — not magic, still material</li>
        <li><strong className="text-[#E0E0E0]">Later retirement or phased retirement</strong> — underrated lever</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example (words, not a promise)
      </h2>
      <p className="mt-3 text-[#889988]">
        Identically averaged “7% years” ordered differently change ending balances a lot when withdrawals are ongoing. If your plan only works in the friendly order, it is not robust.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Accumulation vs decumulation
      </h2>
      <p className="mt-3 text-[#889988]">
        While <strong className="text-[#E0E0E0]">working and contributing</strong>, falling prices can help long-term buyers (you may buy cheaper). While <strong className="text-[#E0E0E0]">withdrawing</strong>, falling prices plus sales can harm the plan.
      </p>
      <p className="mt-3 text-[#889988]">
        That is why “I survived 2008 while working” does not automatically mean “I can retire on a tight 4% tomorrow.”
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Using a single average return as destiny</li>
        <li>Retiring on the peak of markets with zero flexibility</li>
        <li>One hundred percent stocks with no cash buffer and high fixed spending</li>
        <li>Ignoring taxes in withdrawal order</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/tools/retirement-withdrawal" className="text-[#A3FFD6] hover:underline">Retirement Withdrawal Calculator</Link></li>
        <li><Link to="/tools/fire-number" className="text-[#A3FFD6] hover:underline">FIRE Number Calculator</Link></li>
        <li><Link to="/education/retirement-planning-basics" className="text-[#A3FFD6] hover:underline">Retirement Planning Basics</Link></li>
        <li><Link to="/education/emergency-funds-and-safety-nets" className="text-[#A3FFD6] hover:underline">Emergency Funds</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
