import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Index Funds in Plain English",
  description: "What an index fund is, why fees matter, and how diversification works\u2014without product hype.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/index-funds-plain-english",
};

export default function IndexFundsPlainEnglish() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Index Funds in Plain English", item: "https://topmoneytools.com/education/index-funds-plain-english" },
    ],
  };

  return (
    <ArticleShell
      title="Index Funds in Plain English"
      description="What an index fund is, why fees matter, and how diversification works\u2014without product hype."
      path="/education/index-funds-plain-english"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is an index fund?", slug: "index-fund" },
        { q: "What is an expense ratio?", slug: "expense-ratio" },
        { q: "What is diversification?", slug: "diversification" }
      ]}
      relatedTools={[
        { label: "Investment Growth", to: "/tools/investment-growth" },
        { label: "Compound Interest", to: "/tools/compound-interest" }
      ]}
      seoMeta={{
        title: "Index Funds in Plain English | TopMoneyTools",
        description: "What an index fund is, why fees matter, and how diversification works\u2014without product hype.",
        url: "https://topmoneytools.com/education/index-funds-plain-english",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        An <strong className="text-[#E0E0E0]">index</strong> is a list of assets chosen by rules (for example, a broad stock market index). An <strong className="text-[#E0E0E0]">index fund</strong> is built to track that list rather than bet heavily on a few hand-picked winners.
      </p>
      <p className="mt-3 text-[#889988]">
        This is education—not a recommendation to buy any specific fund or product.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Why people use index-style investing (conceptually)
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li><strong className="text-[#E0E0E0]">Diversification</strong> — many companies or bonds in one vehicle reduces single-name blow-up risk</li>
        <li><strong className="text-[#E0E0E0]">Low costs (often)</strong> — less expensive trading and research overhead than many active strategies</li>
        <li><strong className="text-[#E0E0E0]">Honesty about skill</strong> — most active managers underperform their benchmarks over long periods after fees (historical pattern, not a promise about the future)</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Fees are a quiet leak
      </h2>
      <p className="mt-3 text-[#889988]">
        A 1%–2% annual fee difference compounded over decades can consume a large slice of end wealth. Illustrative idea only:
      </p>
      <p className="mt-3 text-[#889988]">
        If two portfolios earn similar <strong className="text-[#E0E0E0]">gross</strong> returns but differ by <strong className="text-[#E0E0E0]">1% per year in fees</strong>, the higher-fee path can finish far behind over 25–30 years. Run magnitudes with the <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">Investment Growth Calculator</Link> by lowering the assumed return to approximate net-of-fee growth.
      </p>
      <p className="mt-3 text-[#889988]">
        You do not control markets. You often control <strong className="text-[#E0E0E0]">costs, contributions, and behavior</strong>.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What index funds do not do
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Guarantee gains</li>
        <li>Remove volatility</li>
        <li>Replace an emergency fund</li>
        <li>Make timing irrelevant for money needed soon</li>
        <li>Eliminate the need to understand taxes and account types at a basic level</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Diversification in one picture
      </h2>
      <p className="mt-3 text-[#889988]">
        Owning one company is a job bet. Owning a broad market basket is a bet on a large slice of the economy. Concentration can win big or hurt big; diversification aims for the middle of that spectrum.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        How this fits TopMoneyTools
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Growth math: <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">Investment Growth</Link></li>
        <li>Teaching curve: <Link to="/tools/compound-interest" className="text-[#A3FFD6] hover:underline">Compound Interest Visualizer</Link></li>
        <li>Timing questions: <Link to="/tools/dca-vs-lump-sum" className="text-[#A3FFD6] hover:underline">DCA vs Lump Sum</Link></li>
        <li>Context: <Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">Investing 101</Link></li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Practical guardrails (not a portfolio design)
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Invest money with a <strong className="text-[#E0E0E0]">long</strong> horizon</li>
        <li>Prefer clarity on <strong className="text-[#E0E0E0]">fees and holdings</strong></li>
        <li>Automate contributions when possible</li>
        <li>Avoid borrowing to invest without expert advice and high risk tolerance</li>
        <li>Revisit goals yearly, not hourly prices</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Chasing last year’s hottest theme fund as if it were “the market”</li>
        <li>Checking daily and panic-selling</li>
        <li>Holding short-term goal cash in volatile equity funds</li>
        <li>Ignoring account location (tax-advantaged vs taxable) entirely</li>
      </ol>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
