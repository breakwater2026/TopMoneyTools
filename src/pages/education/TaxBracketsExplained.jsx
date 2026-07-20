import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tax Brackets Explained — Progressive Tax, Marginal vs Effective Rates",
  description:
    "Understand how progressive tax brackets work, the difference between marginal and effective tax rates, and common myths about moving into a higher bracket.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/tax-brackets-explained",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a marginal tax rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your marginal tax rate is the rate applied to the last dollar you earn. Only income that falls into a higher bracket is taxed at that higher rate.",
      },
    },
    {
      "@type": "Question",
      name: "Will earning more push me into a higher tax bracket and make me lose money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Only the income above the bracket threshold is taxed at the higher rate, not your entire income. Earning more always leaves you with more after-tax income.",
      },
    },
    {
      "@type": "Question",
      name: "What is an effective tax rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your effective tax rate is the average rate you pay on your total income — total tax divided by total income. It is always lower than your marginal rate in a progressive system.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Tax Brackets Explained — Marginal vs Effective Rates — TopMoneyTools",
  description:
    "Learn how U.S. progressive tax brackets actually work, see 2024 bracket examples, and understand why a raise never makes you take home less.",
  url: "https://topmoneytools.com/education/tax-brackets-explained",
  image: "https://topmoneytools.com/og/tax-brackets-explained.png",
  type: "article",
};

export default function TaxBracketsExplained() {
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
        "name": "Tax Brackets Explained — Progressive Tax, Marginal vs Effective Rates",
        "item": "https://topmoneytools.com/education/tax-brackets-explained",
      },
    ],
  };

  return (
    <ArticleShell
      title="Tax Brackets Explained — Progressive Tax, Marginal vs Effective Rates"
      description="Understand how progressive tax brackets work, the difference between marginal and effective tax rates, and common myths about moving into a higher bracket."
      path="/education/tax-brackets-explained"
      sidebarTerms={[
        { q: "What is a tax bracket?", slug: "tax-bracket" },
        { q: "What is capital gains tax?", slug: "capital-gains" },
        { q: "What is a 401(k)?", slug: "401k" },
        { q: "What is an IRA?", slug: "ira" },
        { q: "What is a Roth IRA?", slug: "roth-ira" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is a progressive tax system?</h2>
      <p className="text-[#889988]">
        The U.S. uses a progressive tax system. This means your income is divided into slices — or brackets — and each slice
        is taxed at a different rate. The first slice is taxed at the lowest rate, the next slice at a slightly higher rate,
        and so on. Only the income that falls into each bracket gets taxed at that bracket's rate.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How 2024 tax brackets work (single filers)</h2>
      <p className="text-[#889988]">
        For 2024, single filers pay 10% on the first $11,600 of taxable income, 12% on income from $11,601 to $47,150,
        22% from $47,151 to $100,525, 24% up to $191,950, 32% up to $243,725, 35% up to $609,350, and 37% on income above
        that. The brackets are slightly different for married couples filing jointly and heads of household.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Marginal vs effective tax rate</h2>
      <p className="text-[#889988]">
        Your marginal rate is the rate applied to your highest dollar of income — the top bracket you reach. Your effective
        rate is your total tax divided by your total income. For example, if you earn $60,000 and pay $8,460 in federal
        income tax, your marginal rate might be 22%, but your effective rate is only about 14.1%.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common tax bracket myths</h2>
      <p className="text-[#889988]">
        Many people believe that getting a raise that pushes them into a higher bracket means they'll take home less money.
        This is a myth. Only the income above the bracket threshold is taxed at the higher rate. Your first dollars are
        still taxed at the same low rates as before. A raise always increases your after-tax income.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How deductions and credits reduce your tax</h2>
      <p className="text-[#889988]">
        Tax deductions reduce your taxable income — they effectively lower the highest bracket your income reaches.
        Tax credits are even more powerful because they reduce your tax bill dollar for dollar. Common deductions include
        mortgage interest, student loan interest, and contributions to traditional 401(k) and IRA accounts.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to lower your taxable income</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Contribute to a traditional 401(k) or 403(b) — contributions are pre-tax.</li>
        <li>Max out a traditional IRA if you qualify for the deduction.</li>
        <li>Use a Health Savings Account (HSA) — contributions, growth, and withdrawals for medical expenses are all tax-free.</li>
        <li>Harvest tax losses in your taxable investment accounts to offset capital gains.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#tax-bracket" className="text-[#A3FFD6] hover:underline">
              Tax bracket
            </Link>{" "}
            — a range of income taxed at a specific rate.
          </li>
          <li>
            <Link to="/glossary#capital-gains" className="text-[#A3FFD6] hover:underline">
              Capital gains
            </Link>{" "}
            — profit from selling an asset for more than you paid.
          </li>
          <li>
            <Link to="/glossary#401k" className="text-[#A3FFD6] hover:underline">
              401(k)
            </Link>{" "}
            — an employer-sponsored retirement account with tax advantages.
          </li>
          <li>
            <Link to="/glossary#roth-ira" className="text-[#A3FFD6] hover:underline">
              Roth IRA
            </Link>{" "}
            — a retirement account funded with after-tax dollars; withdrawals are tax-free in retirement.
          </li>
          <li>
            <Link to="/glossary#ira" className="text-[#A3FFD6] hover:underline">
              IRA
            </Link>{" "}
            — an individual retirement account with tax advantages.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is a marginal tax rate?
          <br />
          <strong>A:</strong> Your marginal tax rate is the rate applied to the last dollar you earn. Only income that
          falls into a higher bracket is taxed at that higher rate.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Will earning more push me into a higher tax bracket and make me lose money?
          <br />
          <strong>A:</strong> No. Only the income above the bracket threshold is taxed at the higher rate. Earning more
          always leaves you with more after-tax income.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What is an effective tax rate?
          <br />
          <strong>A:</strong> Your effective tax rate is the average rate you pay on your total income — total tax divided
          by total income. It is always lower than your marginal rate in a progressive system.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>The U.S. tax system is progressive — only the income in each bracket is taxed at that bracket's rate.</li>
          <li>Your effective tax rate is always lower than your marginal rate.</li>
          <li>A raise never reduces your after-tax income, no matter which bracket it pushes you into.</li>
          <li>Tax-advantaged accounts like 401(k)s and IRAs can significantly lower your taxable income.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Estimate your take-home pay using the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>
          . Then track your savings progress with the{" "}
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
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
          <li>
            <Link to="/education/safe-withdrawal-rates" className="text-[#A3FFD6] hover:underline">
              Safe Withdrawal Rates Explained
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
