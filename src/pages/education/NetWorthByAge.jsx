import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Net Worth by Age — How to Calculate, Benchmarks, and Tracking Progress",
  description:
    "Learn how to calculate your net worth, what the typical benchmarks are by age, how to track your progress over time, and the difference between assets and liabilities.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/net-worth-by-age",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate my net worth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add up everything you own (assets) — bank accounts, investments, home value, car value — and subtract everything you owe (liabilities) — mortgage, car loan, credit card debt, student loans. The result is your net worth.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good net worth by age?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One common formula is: (your age × your pre-tax annual income) ÷ 10. For example, a 30-year-old earning $60,000 would have a target net worth of $180,000. But this is a rough guide — focus on your own trajectory.",
      },
    },
    {
      "@type": "Question",
      name: "Should I include my home equity in net worth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, home equity is part of your net worth. But be conservative — use the current market value minus 6-8% for selling costs, and remember that home equity is not liquid. Don't count it toward retirement spending unless you plan to downsize.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Net Worth by Age — How to Calculate, Benchmarks — TopMoneyTools",
  description:
    "Calculate your net worth, see how you compare to age benchmarks, and learn how to track assets vs liabilities to measure financial progress.",
  url: "https://topmoneytools.com/education/net-worth-by-age",
  image: "https://topmoneytools.com/og/net-worth-by-age.png",
  type: "article",
};

export default function NetWorthByAge() {
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
        "name": "Net Worth by Age — How to Calculate, Benchmarks, and Tracking Progress",
        "item": "https://topmoneytools.com/education/net-worth-by-age",
      },
    ],
  };

  return (
    <ArticleShell
      title="Net Worth by Age — How to Calculate, Benchmarks, and Tracking Progress"
      description="Learn how to calculate your net worth, what the typical benchmarks are by age, how to track your progress over time, and the difference between assets and liabilities."
      path="/education/net-worth-by-age"
      sidebarTerms={[
        { q: "What is net worth?", slug: "net-worth" },
        { q: "What is a savings rate?", slug: "savings-rate" },
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is a mortgage?", slug: "mortgage" },
        { q: "What is an index fund?", slug: "index-fund" },
      ]}
      relatedTools={[
        { label: "Net Worth Tool", to: "/tools/net-worth" },
        { label: "Retirement Calculator", to: "/tools/retirement" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is net worth and why it matters</h2>
      <p className="text-[#889988]">
        Net worth is the single number that captures your financial position: everything you own minus everything you
        owe. Income tells you what's coming in; net worth tells you what you've kept. It's the scoreboard of personal
        finance — and unlike income, you can't fake it. Tracking it over time reveals whether you're building wealth or
        just earning and spending.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to calculate your net worth</h2>
      <p className="text-[#889988]">
        List your assets: bank account balances, retirement accounts (401(k), IRA), taxable investment accounts, home
        value (current market), car value (Kelley Blue Book trade-in), and any other valuables. Then list your
        liabilities: mortgage balance, car loan, credit card debt, student loans, personal loans, and any other debts.
        Subtract total liabilities from total assets. The result is your net worth.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Net worth benchmarks by age</h2>
      <p className="text-[#889988]">
        One widely used formula is the "age times income divided by 10" rule. A 30-year-old earning $60,000 would aim
        for $180,000. By 40 at $80,000, the target is $320,000. By 50 at $100,000, it's $500,000. These are aspirational
        targets, not pass-fail grades. The real benchmark is your own trajectory: is your net worth growing year over
        year? If your net worth is negative, you're normal for your 20s — focus on paying down debt and building savings.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Assets vs liabilities: a deeper look</h2>
      <p className="text-[#889988]">
        Assets are things that put money in your pocket or have value you can convert to cash. The most powerful assets
        are income-producing: stocks, bonds, rental properties. Liabilities are obligations that take money out. Some
        liabilities — like a mortgage on a home you live in — build an asset over time. Others — like credit card debt —
        are pure drains. Not all debt is bad, but all debt affects net worth.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to track your net worth over time</h2>
      <p className="text-[#889988]">
        Calculate your net worth at the same time each quarter — or at minimum, every six months. Record the numbers in a
        spreadsheet or a tool. Focus on the trend line, not the individual snapshots. Market dips will temporarily lower
        your net worth; that's normal and not a reason to panic. The goal is to see the line trend upward over years,
        driven by consistent saving and compound growth.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common net worth mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Overvaluing your home — use recent comparable sales, not what you think it's worth.</li>
        <li>Counting cars at retail value — use trade-in or private-party sale value instead.</li>
        <li>Forgetting to subtract selling costs from home equity — budget 6-8% for agent commissions and closing costs.</li>
        <li>Comparing yourself to averages instead of focusing on your own progress.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#net-worth" className="text-[#A3FFD6] hover:underline">
              Net worth
            </Link>{" "}
            — total assets minus total liabilities; your financial scoreboard.
          </li>
          <li>
            <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings rate
            </Link>{" "}
            — the percentage of income saved and invested; the engine that grows net worth.
          </li>
          <li>
            <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">
              Emergency fund
            </Link>{" "}
            — liquid cash for unexpected expenses, ideally 3-6 months of living costs.
          </li>
          <li>
            <Link to="/glossary#mortgage" className="text-[#A3FFD6] hover:underline">
              Mortgage
            </Link>{" "}
            — a loan used to purchase a home, a major liability for most households.
          </li>
          <li>
            <Link to="/glossary#index-fund" className="text-[#A3FFD6] hover:underline">
              Index fund
            </Link>{" "}
            — a low-cost mutual fund tracking a market index, a core wealth-building asset.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> How do I calculate my net worth?
          <br />
          <strong>A:</strong> Add all assets (bank accounts, investments, home, car) and subtract all liabilities
          (mortgage, loans, credit cards). The result is your net worth.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What is a good net worth by age?
          <br />
          <strong>A:</strong> The formula (age × income) ÷ 10 is a rough benchmark. Focus more on your own trajectory —
          is your net worth growing year over year?
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Should I include home equity in net worth?
          <br />
          <strong>A:</strong> Yes, but be conservative — use market value minus 6-8% for selling costs. Home equity is
          part of your wealth but isn't liquid.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Net worth = assets minus liabilities — it's the single best snapshot of financial health.</li>
          <li>Age benchmarks are guides, not grades; your personal trajectory matters more.</li>
          <li>Track net worth quarterly and focus on the long-term trend, not short-term fluctuations.</li>
          <li>Income-producing assets (stocks, bonds) build wealth faster than depreciating assets (cars).</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Calculate yours now with the{" "}
          <Link to="/tools/net-worth" className="text-[#A3FFD6] hover:underline">
            Net Worth Tool
          </Link>
          . Then see how your current savings rate projects into the future with the{" "}
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
            <Link to="/education/fire-movement" className="text-[#A3FFD6] hover:underline">
              The FIRE Movement Explained
            </Link>
          </li>
          <li>
            <Link to="/education/safe-withdrawal-rates" className="text-[#A3FFD6] hover:underline">
              Safe Withdrawal Rates Explained
            </Link>
          </li>
          <li>
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
