import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Investing 101 — Compound Growth, Risk, and Time Explained",
  "description":
    "A plain‑English introduction to investing: compound growth, risk, time horizons, and how to get started without guessing.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage": "https://topmoneytools.com/education/investing-101",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a lot of money to start investing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Many platforms let you start with small amounts or even fractional shares. Consistency matters more than size at the beginning.",
      },
    },
    {
      "@type": "Question",
      "name": "Is it better to pay off debt or invest first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High‑interest debt usually comes first. If your debt interest rate is higher than expected investment returns, prioritize paying it down.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Investing 101 — Compound Growth, Risk, and Time Explained — TopMoneyTools",
  description:
    "Learn the basics of investing: compound growth, risk, time horizons, and how to get started without guessing.",
  url: "https://topmoneytools.com/education/investing-101",
  image: "https://topmoneytools.com/og/investing-101.png",
  type: "article",
};

export default function Investing101() {
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
        "name": "Investing 101 — Compound Growth, Risk, and Time Explained",
        "item": "https://topmoneytools.com/education/investing-101",
      },
    ],
  };

  return (
    <ArticleShell
      title="Investing 101 — Compound Growth, Risk, and Time Explained"
      description="A plain‑English introduction to investing: compound growth, risk, time horizons, and how to get started without guessing."
      path="/education/investing-101"
      sidebarTerms={[
        { q: "What is compound growth?", slug: "compound-growth" },
        { q: "What is risk tolerance?", slug: "risk-tolerance" },
        { q: "What is diversification?", slug: "diversification" },
        { q: "What is an index fund?", slug: "index-fund" },
        { q: "What is time horizon?", slug: "time-horizon" },
      ]}
      relatedTools={[
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
        { label: "Retirement Calculator", to: "/tools/retirement" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why investing matters</h2>
      <p className="text-[#889988]">
        Investing is how you turn savings into future income. It uses{" "}
        <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">
          compound growth
        </Link>{" "}
        — growth on top of growth — to build wealth over time. The earlier you start, the more time works in your
        favour.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Compound growth in plain English</h2>
      <p className="text-[#889988]">
        With compound growth, your returns are reinvested, so future returns are earned on a larger base. Even modest
        returns can become significant over long periods.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Risk and risk tolerance</h2>
      <p className="text-[#889988]">
        <Link to="/glossary#risk-tolerance" className="text-[#A3FFD6] hover:underline">
          Risk tolerance
        </Link>{" "}
        is how much volatility you can emotionally and financially handle. Higher‑risk investments can offer higher
        potential returns but larger swings. Lower‑risk options are steadier but may grow more slowly.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Diversification: not putting all eggs in one basket</h2>
      <p className="text-[#889988]">
        <Link to="/glossary#diversification" className="text-[#A3FFD6] hover:underline">
          Diversification
        </Link>{" "}
        spreads risk across different assets — stocks, bonds, funds. If one area struggles, others can balance it out.
        Many beginners use{" "}
        <Link to="/glossary#index-fund" className="text-[#A3FFD6] hover:underline">
          index funds
        </Link>{" "}
        to diversify in a single investment.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Mini‑calculation: compound growth example</h2>
      <p className="text-[#889988]">
        If you invest $200/month at an average 6% annual return for 25 years, your total contributions are $60,000 —
        but your balance can be well over $100,000 thanks to compound growth. Use the{" "}
        <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">
          Investment Growth Calculator
        </Link>{" "}
        to see your own numbers.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common investing mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Trying to time the market instead of investing consistently.</li>
        <li>Putting all money into a single stock or sector.</li>
        <li>Ignoring fees that quietly reduce returns.</li>
        <li>Investing without an emergency fund in place.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">
              Compound growth
            </Link>{" "}
            — growth on top of growth.
          </li>
          <li>
            <Link to="/glossary#risk-tolerance" className="text-[#A3FFD6] hover:underline">
              Risk tolerance
            </Link>{" "}
            — how much volatility you can handle.
          </li>
          <li>
            <Link to="/glossary#diversification" className="text-[#A3FFD6] hover:underline">
              Diversification
            </Link>{" "}
            — spreading risk across different assets.
          </li>
          <li>
            <Link to="/glossary#index-fund" className="text-[#A3FFD6] hover:underline">
              Index fund
            </Link>{" "}
            — a fund that tracks a market index.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Do I need a lot of money to start investing?
          <br />
          <strong>A:</strong> No. Many platforms let you start with small amounts or even fractional shares. Consistency
          matters more than size at the beginning.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Is it better to pay off debt or invest first?
          <br />
          <strong>A:</strong> High‑interest debt usually comes first. If your debt interest rate is higher than expected
          investment returns, prioritize paying it down.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Time and consistency are more powerful than trying to “pick winners.”</li>
          <li>Diversification reduces risk without requiring complex strategies.</li>
          <li>Understanding your risk tolerance prevents panic decisions.</li>
          <li>Compound growth rewards early, steady investing.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Explore your potential growth using the{" "}
          <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">
            Investment Growth Calculator
          </Link>
          . Then connect your investing plan to retirement using the{" "}
          <Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">
            Retirement Calculator
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/retirement-planning-basics" className="text-[#A3FFD6] hover:underline">
              Retirement Planning Basics
            </Link>
          </li>
          <li>
            <Link to="/education/understanding-interest-rates" className="text-[#A3FFD6] hover:underline">
              Understanding Interest Rates
            </Link>
          </li>
          <li>
            <Link to="/education/emergency-funds-and-safety-nets" className="text-[#A3FFD6] hover:underline">
              Emergency Funds & Financial Safety Nets
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
