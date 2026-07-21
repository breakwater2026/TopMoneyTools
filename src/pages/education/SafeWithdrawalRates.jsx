import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safe Withdrawal Rates — The 4% Rule, Trinity Study, and Retirement Income",
  description:
    "Understand safe withdrawal rates for retirement: the 4% rule, the Trinity Study, sequence of returns risk, and variable withdrawal strategies that protect your nest egg.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/safe-withdrawal-rates",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the 4% rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4% rule says you can withdraw 4% of your retirement portfolio in the first year, then adjust that dollar amount for inflation each year, and have a high probability of not running out of money over a 30-year retirement.",
      },
    },
    {
      "@type": "Question",
      name: "What is sequence of returns risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sequence of returns risk is the danger that poor investment returns early in retirement will deplete your portfolio faster than if those same poor returns happened later. Early losses leave less capital to recover when markets rebound.",
      },
    },
    {
      "@type": "Question",
      name: "Is the 4% rule still safe today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The original Trinity Study assumed a 30-year retirement with a 50/50 stock/bond portfolio. For longer retirements or current low-yield environments, many planners suggest a more conservative 3.0-3.5% initial withdrawal rate.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Safe Withdrawal Rates — 4% Rule, Trinity Study — TopMoneyTools",
  description:
    "Learn how much you can safely withdraw in retirement without running out of money. The 4% rule, sequence of returns risk, and variable strategies explained.",
  url: "https://topmoneytools.com/education/safe-withdrawal-rates",
  image: "https://topmoneytools.com/og/safe-withdrawal-rates.png",
  type: "article",
};

export default function SafeWithdrawalRates() {
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
        "name": "Safe Withdrawal Rates — The 4% Rule, Trinity Study, and Retirement Income",
        "item": "https://topmoneytools.com/education/safe-withdrawal-rates",
      },
    ],
  };

  return (
    <ArticleShell
      title="Safe Withdrawal Rates — The 4% Rule, Trinity Study, and Retirement Income"
      description="Understand safe withdrawal rates for retirement: the 4% rule, the Trinity Study, sequence of returns risk, and variable withdrawal strategies that protect your nest egg."
      path="/education/safe-withdrawal-rates"
      sidebarTerms={[
        { q: "What is the safe withdrawal rate?", slug: "safe-withdrawal-rate" },
        { q: "What is FIRE?", slug: "fire" },
        { q: "What is an index fund?", slug: "index-fund" },
        { q: "What is a savings rate?", slug: "savings-rate" },
        { q: "What is inflation?", slug: "inflation" },
      ]}
      relatedTools={[
        { label: "Retirement Calculator", to: "/tools/retirement" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is a safe withdrawal rate?</h2>
      <p className="text-[#889988]">
        A safe withdrawal rate is the percentage of your portfolio you can withdraw each year in retirement without
        running out of money. The most famous benchmark is the 4% rule, which comes from the Trinity Study published in
        1998. The study found that a 4% initial withdrawal rate, adjusted for inflation each year, survived 30-year
        retirements in most historical scenarios.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The 4% rule: how it works</h2>
      <p className="text-[#889988]">
        The rule is simple: in year one of retirement, withdraw 4% of your total portfolio. Each subsequent year, take
        the same dollar amount adjusted for inflation — regardless of what the market does. For example, a $1 million
        portfolio yields a $40,000 first-year withdrawal. If inflation is 3%, you withdraw $41,200 in year two.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The Trinity Study: what it actually found</h2>
      <p className="text-[#889988]">
        The Trinity Study tested withdrawal rates from 3% to 12% against historical market returns from 1926 to 1995. It
        found that a 4% rate, with a portfolio of at least 50% stocks, had a 95%+ success rate over 30-year periods. For
        longer retirements of 40 or 50 years, the success rate drops — which is why early retirees often aim for 3-3.5%.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Sequence of returns risk</h2>
      <p className="text-[#889988]">
        The order of your investment returns matters enormously in retirement. If the market drops 30% in your first two
        years of retirement, you're selling shares at depressed prices just to cover living expenses. Those withdrawn
        shares never recover. A bad sequence early in retirement is far more damaging than the same losses later, when
        fewer years remain.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Variable withdrawal strategies</h2>
      <p className="text-[#889988]">
        Instead of a rigid inflation-adjusted withdrawal, many retirees use flexible strategies. One approach is the
        guardrails method: set a floor and ceiling around your target withdrawal rate and adjust spending within that band
        based on portfolio performance. Another is the endowment method, which withdraws a fixed percentage of the current
        portfolio value each year — providing more income in good years and less in bad.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to calculate your FIRE number</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Estimate your annual retirement expenses (e.g., $50,000).</li>
        <li>Multiply by 25 (the inverse of 4%) — that's your target portfolio ($1.25 million).</li>
        <li>For a more conservative 3.5% rate, multiply by about 28.5 ($1.425 million).</li>
        <li>This number does not include Social Security or other income sources — consider those as a cushion.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#safe-withdrawal-rate" className="text-[#A3FFD6] hover:underline">
              Safe withdrawal rate
            </Link>{" "}
            — the percentage of your portfolio you can withdraw annually with low risk of depletion.
          </li>
          <li>
            <Link to="/glossary#fire" className="text-[#A3FFD6] hover:underline">
              FIRE
            </Link>{" "}
            — Financial Independence Retire Early, a movement focused on aggressive saving and investing.
          </li>
          <li>
            <Link to="/glossary#index-fund" className="text-[#A3FFD6] hover:underline">
              Index fund
            </Link>{" "}
            — a mutual fund that tracks a market index, offering broad diversification at low cost.
          </li>
          <li>
            <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings rate
            </Link>{" "}
            — the percentage of your income you save and invest each year.
          </li>
          <li>
            <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
              Inflation
            </Link>{" "}
            — the general increase in prices over time, which reduces the purchasing power of your withdrawals.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is the 4% rule?
          <br />
          <strong>A:</strong> Withdraw 4% of your portfolio in year one, then adjust for inflation each year. This has
          historically sustained a 30-year retirement in most scenarios.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What is sequence of returns risk?
          <br />
          <strong>A:</strong> The danger that poor returns early in retirement deplete your portfolio faster than if those
          same poor returns happened later, because early losses leave less capital to compound.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Is the 4% rule still safe today?
          <br />
          <strong>A:</strong> For 30-year retirements, yes, though many planners suggest 3.0-3.5% for longer retirements
          or as an extra margin of safety in low-return environments.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>The 4% rule is a research-backed starting point, not a guarantee.</li>
          <li>Sequence of returns risk makes the first 5-10 years of retirement especially critical.</li>
          <li>Variable withdrawal strategies can increase your portfolio's longevity.</li>
          <li>Multiply your annual expenses by 25 for a quick FIRE number estimate.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Project your retirement readiness with the{" "}
          <Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">
            Retirement Calculator
          </Link>
          . Then model different growth scenarios with the{" "}
          <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">
            Investment Growth Calculator
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/fire-movement" className="text-[#A3FFD6] hover:underline">
              The FIRE Movement Explained
            </Link>
          </li>
          <li>
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
          <li>
            <Link to="/education/retirement-planning-basics" className="text-[#A3FFD6] hover:underline">
              Retirement Planning Basics
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
