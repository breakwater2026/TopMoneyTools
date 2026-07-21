import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Compound Interest Guide — Rule of 72, Time Value of Money, and Starting Early",
  description:
    "Master the most powerful force in personal finance: compound interest. Learn the Rule of 72, how time magnifies small differences, and why starting early matters more than you think.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/compound-interest-guide",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Rule of 72?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Rule of 72 is a shortcut to estimate how long it takes for an investment to double. Divide 72 by your annual return rate. For example, at 7% return, your money doubles roughly every 10.3 years (72 ÷ 7 = 10.3).",
      },
    },
    {
      "@type": "Question",
      name: "Why does starting early matter so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time is the most powerful multiplier in compound growth. If you invest $500 per month starting at age 25 with a 7% return, you'll have about $1.2 million by 65. Starting at 35 yields only about $567,000 — less than half — even though you only missed 10 years of contributions.",
      },
    },
    {
      "@type": "Question",
      name: "Does compounding frequency make a big difference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daily compounding yields slightly more than monthly, which yields slightly more than annual. The difference is real but modest. What matters far more is the rate of return and the number of years your money compounds.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Compound Interest Guide — Rule of 72, Time Value of Money — TopMoneyTools",
  description:
    "Learn how compound interest works, the Rule of 72, and see real examples of why starting early beats starting big.",
  url: "https://topmoneytools.com/education/compound-interest-guide",
  image: "https://topmoneytools.com/og/compound-interest-guide.png",
  type: "article",
};

export default function CompoundInterestGuide() {
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
        "name": "Compound Interest Guide — Rule of 72, Time Value of Money, and Starting Early",
        "item": "https://topmoneytools.com/education/compound-interest-guide",
      },
    ],
  };

  return (
    <ArticleShell
      title="Compound Interest Guide — Rule of 72, Time Value of Money, and Starting Early"
      description="Master the most powerful force in personal finance: compound interest. Learn the Rule of 72, how time magnifies small differences, and why starting early matters more than you think."
      path="/education/compound-interest-guide"
      sidebarTerms={[
        { q: "What is compound growth?", slug: "compound-growth" },
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is an index fund?", slug: "index-fund" },
        { q: "What is an ETF?", slug: "etf" },
        { q: "What is a savings rate?", slug: "savings-rate" },
      ]}
      relatedTools={[
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Retirement Calculator", to: "/tools/retirement" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is compound interest?</h2>
      <p className="text-[#889988]">
        Compound interest is interest earned on interest. Unlike simple interest, which only pays on the original
        principal, compound interest pays on both the principal and any accumulated interest. Over time, this creates an
        accelerating effect — your money grows faster the longer it compounds.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The Rule of 72: a mental shortcut</h2>
      <p className="text-[#889988]">
        The Rule of 72 is a quick way to estimate how long it takes for an investment to double. Divide 72 by your
        expected annual return. At 7%, money doubles in roughly 10.3 years (72 ÷ 7). At 10%, it doubles in 7.2 years.
        This rule works for any growth rate — it also tells you how fast inflation cuts your purchasing power in half.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Starting early vs starting big</h2>
      <p className="text-[#889988]">
        Two investors both earn a 7% return. Chloe starts at 25 and invests $5,000 per year for 10 years, then stops.
        Ryan starts at 35 and invests $5,000 per year for 30 years. At 65, Chloe has about $602,000 despite investing
        only $50,000 total. Ryan has about $472,000 despite investing $150,000. Time beats total contributions.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Compounding frequency matters — but not that much</h2>
      <p className="text-[#889988]">
        Daily compounding produces slightly more growth than monthly, which beats annual. On a $10,000 balance at 6% over
        20 years, annual compounding yields $32,071, monthly yields $33,102, and daily yields $33,197. The difference
        is real, but what matters much more is the rate of return and how long you stay invested.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The dark side: compound interest on debt</h2>
      <p className="text-[#889988]">
        Compound interest works against you when you carry debt. A $5,000 credit card balance at 22% APR, if you make
        only minimum payments, can take over 20 years to pay off and cost thousands in interest. The same mathematical
        force that builds wealth also destroys it — depending on which side of the equation you're on.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to put compound interest to work for you</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Start investing as early as possible, even with small amounts.</li>
        <li>Reinvest dividends and capital gains rather than cashing them out.</li>
        <li>Choose low-cost index funds and ETFs to minimize the fees that eat into compounding.</li>
        <li>Automate your investments so you never miss a contribution.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">
              Compound growth
            </Link>{" "}
            — growth that builds on itself, where returns generate their own returns.
          </li>
          <li>
            <Link to="/glossary#interest-rate" className="text-[#A3FFD6] hover:underline">
              Interest rate
            </Link>{" "}
            — the percentage at which money grows or the cost of borrowing.
          </li>
          <li>
            <Link to="/glossary#index-fund" className="text-[#A3FFD6] hover:underline">
              Index fund
            </Link>{" "}
            — a mutual fund that tracks a market index, offering broad diversification at low cost.
          </li>
          <li>
            <Link to="/glossary#etf" className="text-[#A3FFD6] hover:underline">
              ETF
            </Link>{" "}
            — an exchange-traded fund, similar to an index fund but traded like a stock.
          </li>
          <li>
            <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings rate
            </Link>{" "}
            — the percentage of your income you save and invest.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is the Rule of 72?
          <br />
          <strong>A:</strong> Divide 72 by your annual return rate to estimate how long it takes for an investment to
          double. At 7%, money doubles in about 10.3 years.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Why does starting early matter so much?
          <br />
          <strong>A:</strong> Time is the most powerful multiplier. Starting at 25 instead of 35 can more than double
          your final portfolio, even if you invest the same total amount.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Does compounding frequency make a big difference?
          <br />
          <strong>A:</strong> Daily, monthly, or annual compounding produces modest differences. The rate of return and
          the time invested matter far more than the compounding frequency.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Compound interest accelerates wealth-building by earning returns on past returns.</li>
          <li>The Rule of 72 gives you a quick estimate of how fast your money doubles.</li>
          <li>Starting early beats starting big — time is the most powerful variable in the equation.</li>
          <li>Compound interest works against you with debt, so pay off high-interest balances aggressively.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          See what your money can become with the{" "}
          <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">
            Investment Growth Calculator
          </Link>
          . Then check your current pace with the{" "}
          <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">
            Savings Rate Calculator
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/dollar-cost-averaging" className="text-[#A3FFD6] hover:underline">
              Dollar Cost Averaging
            </Link>
          </li>
          <li>
            <Link to="/education/safe-withdrawal-rates" className="text-[#A3FFD6] hover:underline">
              Safe Withdrawal Rates Explained
            </Link>
          </li>
          <li>
            <Link to="/education/inflation-proofing-savings" className="text-[#A3FFD6] hover:underline">
              Inflation-Proofing Your Savings
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
