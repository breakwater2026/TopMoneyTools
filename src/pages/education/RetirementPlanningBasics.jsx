import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Retirement Planning Basics — Building Your Future Income",
  "description":
    "Learn the core concepts of retirement planning: how much to save, what the 4% rule means, and how to project your nest egg.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/retirement-planning-basics",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I start saving for retirement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As early as possible. Even small contributions made consistently over time benefit from compound growth.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the 4% rule guaranteed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It’s a guideline based on historical data. Your actual safe withdrawal rate depends on market returns, inflation, and personal circumstances.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Retirement Planning Basics — Building Your Future Income — TopMoneyTools",
  description:
    "Understand how much you need, how the 4% rule works, and how to plan for a secure retirement.",
  url: "https://topmoneytools.com/education/retirement-planning-basics",
  image: "https://topmoneytools.com/og/retirement-planning-basics.png",
  type: "article",
};

export default function RetirementPlanningBasics() {
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
        "name": "Retirement Planning Basics — Building Your Future Income",
        "item": "https://topmoneytools.com/education/retirement-planning-basics",
      },
    ],
  };

  return (
    <ArticleShell
      title="Retirement Planning Basics — Building Your Future Income"
      description="Learn the core concepts of retirement planning: how much to save, what the 4% rule means, and how to project your nest egg."
      path="/education/retirement-planning-basics"
      sidebarTerms={[
        { q: "What is the 4% rule?", slug: "4-percent-rule" },
        { q: "What is compound growth?", slug: "compound-growth" },
        { q: "What is an annuity?", slug: "annuity" },
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is risk tolerance?", slug: "risk-tolerance" },
      ]}
      relatedTools={[
        { label: "Retirement Calculator", to: "/tools/retirement" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why retirement planning starts now</h2>
      <p className="text-[#889988]">
        Retirement can last 20–30 years. The earlier you start saving, the more{" "}
        <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">
          compound growth
        </Link>{" "}
        works in your favour. Waiting 10 years to start can cost you more than doubling your monthly contribution ever
        could recover.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How much do you need?</h2>
      <p className="text-[#889988]">
        A common estimate: multiply your desired annual retirement income by 25. Want $50,000/year? Aim for $1.25
        million. This comes from the{" "}
        <Link to="/glossary#4-percent-rule" className="text-[#A3FFD6] hover:underline">
          4% rule
        </Link>{" "}
        — the guideline that withdrawing 4% of savings annually is often sustainable for about 30 years. Use the{" "}
        <Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">
          Retirement Calculator
        </Link>{" "}
        to project your specific number.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The three buckets of retirement income</h2>
      <p className="text-[#889988]">
        Most people's retirement income comes from three places: government pensions (Social Security, CPP), employer
        plans (401k, RRSP, pension), and personal savings (investments, savings accounts). Understanding all three lets
        you plan the gaps — not every retiree has all three.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Inflation quietly shrinks your nest egg</h2>
      <p className="text-[#889988]">
        <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
          Inflation
        </Link>{" "}
        means $1 million in 25 years buys less than $1 million today. Your savings target should account for rising
        prices — especially in healthcare, which tends to inflate faster than the general rate. Build in a buffer.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Mini‑calculation: retirement income estimate</h2>
      <p className="text-[#889988]">
        If you want $60,000/year in retirement, multiplying by 25 suggests a target of $1.5 million. Use the{" "}
        <Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">
          Retirement Calculator
        </Link>{" "}
        to see how contributions, returns, and time affect your path to that number.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Start small, increase consistently</h2>
      <p className="text-[#889988]">
        Even saving 5% now and increasing by 1% each year puts you dramatically ahead of doing nothing. Small,
        consistent contributions plus time and{" "}
        <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">
          compound growth
        </Link>{" "}
        are the combination that builds real retirement security.
      </p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#4-percent-rule" className="text-[#A3FFD6] hover:underline">
              4% rule
            </Link>{" "}
            — a guideline for sustainable withdrawal rates.
          </li>
          <li>
            <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">
              Compound growth
            </Link>{" "}
            — growth on top of growth.
          </li>
          <li>
            <Link to="/glossary#annuity" className="text-[#A3FFD6] hover:underline">
              Annuity
            </Link>{" "}
            — a product that converts savings into regular payments.
          </li>
          <li>
            <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
              Inflation
            </Link>{" "}
            — rising prices over time.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> When should I start saving for retirement?
          <br />
          <strong>A:</strong> As early as possible. Even small contributions made consistently over time benefit from
          compound growth.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Is the 4% rule guaranteed?
          <br />
          <strong>A:</strong> No. It’s a guideline based on historical data. Your actual safe withdrawal rate depends on
          market returns, inflation, and personal circumstances.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Starting early dramatically reduces the pressure later.</li>
          <li>The 4% rule is a helpful planning anchor, not a guarantee.</li>
          <li>Inflation must be factored into long‑term targets.</li>
          <li>Small, consistent increases in savings add up over decades.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Run your numbers with the{" "}
          <Link to="/tools/retirement" className="text-[#A3FFD6] hover:underline">
            Retirement Calculator
          </Link>
          . Then explore how investing supports your plan using the{" "}
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
            <Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">
              Investing 101
            </Link>
          </li>
          <li>
            <Link to="/education/how-inflation-works" className="text-[#A3FFD6] hover:underline">
              How Inflation Works
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
