import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Inflation Affects Your Daily Budget",
  description:
    "A plain-English guide to inflation: why prices rise, how it affects groceries, rent, and bills, and what to do about it.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/how-inflation-affects-your-daily-budget",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does inflation make everyday life feel more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because inflation raises the price of common goods and services over time, which reduces what each dollar can buy.",
      },
    },
    {
      "@type": "Question",
      name: "Can inflation hurt savers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your savings grow more slowly than inflation, your money loses purchasing power over time.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "How Inflation Affects Your Daily Budget — TopMoneyTools",
  description:
    "Learn how inflation affects groceries, rent, savings, and monthly planning — and what you can do to adapt.",
  url: "https://topmoneytools.com/education/how-inflation-affects-your-daily-budget",
  image: "https://topmoneytools.com/og/how-inflation-affects-your-daily-budget.png",
  type: "article",
};

export default function HowInflationAffectsYourDailyBudget() {
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
        "name": "How Inflation Affects Your Daily Budget",
        "item": "https://topmoneytools.com/education/how-inflation-affects-your-daily-budget",
      },
    ],
  };

  return (
    <ArticleShell
      title="How Inflation Affects Your Daily Budget"
      description="A plain-English guide to inflation: why prices rise, how it affects groceries, rent, and bills, and what to do about it."
      path="/education/how-inflation-affects-your-daily-budget"
      sidebarTerms={[
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is purchasing power?", slug: "purchasing-power" },
        { q: "What is cost of living?", slug: "cost-of-living" },
        { q: "What is real income?", slug: "real-income" },
        { q: "What is CPI?", slug: "cpi" },
      ]}
      relatedTools={[
        { label: "Food Inflation Tool", to: "/tools/food-inflation" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why inflation matters in daily life</h2>
      <p className="text-[#889988]">
        Inflation means prices rise over time, so each dollar buys a little less than before. That affects groceries,
        gas, rent, insurance, and nearly every category in a household budget.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">What inflation looks like in a budget</h2>
      <p className="text-[#889988]">
        You may notice the same paycheck covering less each month. Even if your income stays the same, rising prices
        can squeeze your room for savings, debt payments, and unexpected costs.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Purchasing power in plain English</h2>
      <p className="text-[#889988]">
        <Link to="/glossary#purchasing-power" className="text-[#A3FFD6] hover:underline">
          Purchasing power
        </Link>{" "}
        is what your money can actually buy. When inflation rises faster than your income, your purchasing power falls.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">A quick example</h2>
      <p className="text-[#889988]">
        If your weekly groceries used to cost $120 and now cost $138, that increase may not seem huge at first — but
        over a month or year it can noticeably change your plan. Small price increases across many categories add up.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to respond without panic</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Review recurring expenses first, because fixed costs have the biggest long-term impact.</li>
        <li>Update budget categories using real current prices instead of old estimates.</li>
        <li>Protect emergency savings so short-term price shocks do not become debt.</li>
        <li>Look for steady adjustments, not perfection, in spending habits.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
              Inflation
            </Link>{" "}
            — a general rise in prices over time.
          </li>
          <li>
            <Link to="/glossary#purchasing-power" className="text-[#A3FFD6] hover:underline">
              Purchasing power
            </Link>{" "}
            — what your money can actually buy.
          </li>
          <li>
            <Link to="/glossary#cost-of-living" className="text-[#A3FFD6] hover:underline">
              Cost of living
            </Link>{" "}
            — the ongoing cost of basic life expenses.
          </li>
          <li>
            <Link to="/glossary#cpi" className="text-[#A3FFD6] hover:underline">
              CPI
            </Link>{" "}
            — a common measure of consumer price changes.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Why does inflation make everyday life feel more expensive?
          <br />
          <strong>A:</strong> Because inflation raises the price of common goods and services over time, which reduces
          what each dollar can buy.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Can inflation hurt savers?
          <br />
          <strong>A:</strong> Yes. If your savings grow more slowly than inflation, your money loses purchasing power
          over time.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Inflation affects more than one item; it compounds across your whole budget.</li>
          <li>Stable income can still feel weaker when prices rise.</li>
          <li>Budget updates should reflect current prices, not last year’s assumptions.</li>
          <li>Small spending adjustments can protect savings and reduce stress.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Measure current grocery pressure with the{" "}
          <Link to="/tools/food-inflation" className="text-[#A3FFD6] hover:underline">
            Food Inflation Tool
          </Link>
          . Then update your monthly categories using the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/how-inflation-works" className="text-[#A3FFD6] hover:underline">
              How Inflation Works
            </Link>
          </li>
          <li>
            <Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">
              Budgeting 101
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
