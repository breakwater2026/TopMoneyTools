import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Inflation Works — Causes, Compounding, and How to Stay Ahead",
  "description":
    "Understand what causes inflation, how it compounds over time, and practical ways to protect your purchasing power.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage": "https://topmoneytools.com/education/how-inflation-works",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is some inflation normal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many economies target a modest level of inflation (often around 2%) as a sign of healthy growth.",
      },
    },
    {
      "@type": "Question",
      "name": "Does inflation affect all prices equally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Some categories, like housing or healthcare, can inflate faster than others, which affects budgets differently.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "How Inflation Works — Causes, Compounding, and How to Stay Ahead — TopMoneyTools",
  description:
    "Learn what causes inflation, how it compounds over time, and how to protect your purchasing power.",
  url: "https://topmoneytools.com/education/how-inflation-works",
  image: "https://topmoneytools.com/og/how-inflation-works.png",
  type: "article",
};

export default function HowInflationWorks() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://topmoneytools.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Education",
        "item": "https://topmoneytools.com/education",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "How Inflation Works — Causes, Compounding, and How to Stay Ahead",
        "item": "https://topmoneytools.com/education/how-inflation-works",
      },
    ],
  };

  return (
    <ArticleShell
      title="How Inflation Works — Causes, Compounding, and How to Stay Ahead"
      description="Understand what causes inflation, how it compounds over time, and practical ways to protect your purchasing power."
      path="/education/how-inflation-works"
      sidebarTerms={[
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is purchasing power?", slug: "purchasing-power" },
        { q: "What is CPI?", slug: "consumer-price-index" },
        { q: "What is real vs nominal value?", slug: "real-vs-nominal" },
        { q: "What is wage growth?", slug: "wage-growth" },
      ]}
      relatedTools={[
        { label: "Inflation Calculator", to: "/tools/inflation" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What inflation actually is</h2>
      <p className="text-[#889988]">
        <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
          Inflation
        </Link>{" "}
        is the general rise in prices over time. It means each unit of currency buys less than it used to. Even modest
        inflation, when compounded over years, can significantly change your cost of living.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Why inflation happens</h2>
      <p className="text-[#889988]">
        Inflation can be driven by increased demand, reduced supply, higher production costs, or monetary policy. The{" "}
        <Link to="/glossary#consumer-price-index" className="text-[#A3FFD6] hover:underline">
          Consumer Price Index (CPI)
        </Link>{" "}
        tracks price changes across categories like food, housing, and transportation.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Real vs nominal value</h2>
      <p className="text-[#889988]">
        Nominal value is the number printed on your paycheck. Real value is what that money can actually buy. If prices
        rise faster than{" "}
        <Link to="/glossary#wage-growth" className="text-[#A3FFD6] hover:underline">
          wage growth
        </Link>
        , your real income falls even if your nominal income increases.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Mini‑calculation: inflation over time</h2>
      <p className="text-[#889988]">
        At 3% annual inflation, prices roughly double in about 24 years. Use the{" "}
        <Link to="/tools/inflation" className="text-[#A3FFD6] hover:underline">
          Inflation Calculator
        </Link>{" "}
        to see how today’s prices compare to future costs.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to stay ahead of inflation</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Increase income faster than inflation when possible.</li>
        <li>Invest in assets that historically outpace inflation.</li>
        <li>Review your budget regularly to adjust for rising costs.</li>
        <li>Build an emergency fund that accounts for future price levels.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
              Inflation
            </Link>{" "}
            — rising prices over time.
          </li>
          <li>
            <Link to="/glossary#purchasing-power" className="text-[#A3FFD6] hover:underline">
              Purchasing power
            </Link>{" "}
            — what your money can buy.
          </li>
          <li>
            <Link to="/glossary#consumer-price-index" className="text-[#A3FFD6] hover:underline">
              CPI
            </Link>{" "}
            — a measure of average price changes.
          </li>
          <li>
            <Link to="/glossary#real-vs-nominal" className="text-[#A3FFD6] hover:underline">
              Real vs nominal
            </Link>{" "}
            — adjusted vs unadjusted for inflation.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Is some inflation normal?
          <br />
          <strong>A:</strong> Yes. Many economies target a modest level of inflation (often around 2%) as a sign of
          healthy growth.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Does inflation affect all prices equally?
          <br />
          <strong>A:</strong> No. Some categories, like housing or healthcare, can inflate faster than others, which
          affects budgets differently.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Inflation is normal, but unmanaged it erodes purchasing power.</li>
          <li>Real income matters more than nominal income.</li>
          <li>Different categories inflate at different speeds.</li>
          <li>Planning for inflation is essential in long‑term goals like retirement.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Use the{" "}
          <Link to="/tools/inflation" className="text-[#A3FFD6] hover:underline">
            Inflation Calculator
          </Link>{" "}
          to see how inflation affects your savings and future expenses. Then adjust your budget and investing plan to
          stay ahead.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/how-inflation-effects-your-daily-budget" className="text-[#A3FFD6] hover:underline">
              How Inflation Affects Your Daily Budget
            </Link>
          </li>
          <li>
            <Link to="/education/retirement-planning-basics" className="text-[#A3FFD6] hover:underline">
              Retirement Planning Basics
            </Link>
          </li>
          <li>
            <Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">
              Investing 101
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
