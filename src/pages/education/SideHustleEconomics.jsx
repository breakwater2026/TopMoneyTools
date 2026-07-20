import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Side Hustle Economics — Real Hourly Rate, Self-Employment Tax, and Quarterly Payments",
  description:
    "Understand the real economics of side hustles: how to calculate your true hourly rate after taxes and expenses, self-employment tax, quarterly estimated payments, and when a side hustle is actually worth it.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/side-hustle-economics",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is self-employment tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-employment tax is the Social Security and Medicare tax for people who work for themselves. It is 15.3% of your net earnings — 12.4% for Social Security and 2.9% for Medicare. Employees split these with their employer, but self-employed people pay the full amount.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my real hourly rate for a side hustle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with your gross pay, then subtract expenses (mileage, supplies, platform fees), self-employment tax (15.3%), income tax, and the value of unpaid time (commuting, admin, marketing). The number that remains, divided by total hours worked, is your real hourly rate.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay quarterly estimated taxes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you expect to owe $1,000 or more in taxes from your side hustle, the IRS requires quarterly estimated tax payments. Deadlines are April 15, June 15, September 15, and January 15. Missing them can result in penalties.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Side Hustle Economics — Real Hourly Rate, Self-Employment Tax — TopMoneyTools",
  description:
    "Calculate your true hourly rate from a side hustle after taxes, expenses, and unpaid time. Learn self-employment tax rules and quarterly payment deadlines.",
  url: "https://topmoneytools.com/education/side-hustle-economics",
  image: "https://topmoneytools.com/og/side-hustle-economics.png",
  type: "article",
};

export default function SideHustleEconomics() {
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
        "name": "Side Hustle Economics — Real Hourly Rate, Self-Employment Tax, and Quarterly Payments",
        "item": "https://topmoneytools.com/education/side-hustle-economics",
      },
    ],
  };

  return (
    <ArticleShell
      title="Side Hustle Economics — Real Hourly Rate, Self-Employment Tax, and Quarterly Payments"
      description="Understand the real economics of side hustles: how to calculate your true hourly rate after taxes and expenses, self-employment tax, quarterly estimated payments, and when a side hustle is actually worth it."
      path="/education/side-hustle-economics"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What is a savings rate?", slug: "savings-rate" },
        { q: "What is a tax bracket?", slug: "tax-bracket" },
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is net worth?", slug: "net-worth" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Your side hustle rate isn't your real rate</h2>
      <p className="text-[#889988]">
        If you earn $25 per hour from a gig platform, that's your gross rate — not your real rate. After self-employment
        tax, income tax, expenses like gas and supplies, platform fees, and unpaid time spent on admin, your real hourly
        rate could be $12 or less. Always calculate the true take-home per hour before deciding if a side hustle is worth
        your time.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Self-employment tax: the 15.3% surprise</h2>
      <p className="text-[#889988]">
        Self-employment tax is 15.3% of your net earnings — covering Social Security (12.4%) and Medicare (2.9%).
        Employees split this with their employer and only see 7.65% withheld from their paycheck. As a side hustler,
        you pay the full 15.3% on your first dollar of profit. This alone can eat a meaningful chunk of what looks like
        good money on paper.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to calculate your real hourly rate</h2>
      <p className="text-[#889988]">
        Start with your gross earnings. Subtract all direct expenses (mileage at $0.67/mile for 2024, supplies,
        platform fees). Subtract self-employment tax (15.3% of net profit). Subtract income tax at your marginal rate.
        Then subtract the value of unpaid time — commuting, invoicing, marketing, and learning the platform. Divide
        what's left by total hours committed (paid + unpaid) to find your true hourly rate.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Quarterly estimated taxes: don't get penalized</h2>
      <p className="text-[#889988]">
        If you expect to owe $1,000 or more in taxes from side income, the IRS requires quarterly estimated tax payments.
        Deadlines are April 15, June 15, September 15, and January 15. A safe method is to set aside 25-30% of every side
        hustle payment in a separate savings account and pay the IRS quarterly. Missing these deadlines triggers penalties
        and interest.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">When a side hustle is worth it (and when it isn't)</h2>
      <p className="text-[#889988]">
        A side hustle is worth it when it pays well above minimum wage after all deductions, builds a skill that leads to
        higher income later, or replaces an expense you'd otherwise pay for. It's not worth it when the real hourly rate
        is below minimum wage, it consumes time better spent advancing your main career, or the stress and burnout cost
        more than the money is worth.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Smart ways to maximize side hustle income</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Track all business expenses — mileage, home office, equipment — to reduce taxable income.</li>
        <li>Open a SEP IRA or solo 401(k) to shelter side hustle income from taxes while saving for retirement.</li>
        <li>Set aside 25-30% of every payment into a separate account for taxes.</li>
        <li>Focus on side hustles with high hourly ceilings, not ones that trade time for capped pay.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
              Budget
            </Link>{" "}
            — a plan for how to use your money, including side hustle income.
          </li>
          <li>
            <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings rate
            </Link>{" "}
            — the percentage of your income you save and invest.
          </li>
          <li>
            <Link to="/glossary#tax-bracket" className="text-[#A3FFD6] hover:underline">
              Tax bracket
            </Link>{" "}
            — a range of income taxed at a specific rate; side hustle income stacks on top of your day job.
          </li>
          <li>
            <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">
              Emergency fund
            </Link>{" "}
            — cash set aside for unexpected expenses, ideally 3-6 months of living costs.
          </li>
          <li>
            <Link to="/glossary#net-worth" className="text-[#A3FFD6] hover:underline">
              Net worth
            </Link>{" "}
            — the value of everything you own minus everything you owe.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is self-employment tax?
          <br />
          <strong>A:</strong> It's 15.3% of net earnings covering Social Security and Medicare. Unlike employees who
          split these with their employer, self-employed individuals pay the full amount.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How do I calculate my real hourly rate?
          <br />
          <strong>A:</strong> Subtract expenses, self-employment tax, income tax, and value of unpaid time from gross
          pay. Divide the remainder by total hours (paid + unpaid) for your true hourly rate.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Do I need to pay quarterly estimated taxes?
          <br />
          <strong>A:</strong> Yes, if you expect to owe $1,000 or more. Set aside 25-30% of each payment and submit
          quarterly to the IRS by the April, June, September, and January deadlines.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Your real hourly rate is always lower than your gross rate after taxes and expenses.</li>
          <li>Self-employment tax adds 15.3% on top of income tax — budget for it from day one.</li>
          <li>Track all business expenses to reduce taxable income legally.</li>
          <li>A side hustle is worth it when the real hourly rate justifies the time and energy it costs.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Plan how side hustle income fits into your finances with the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>
          . Track your growing savings rate with the{" "}
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
            <Link to="/education/tax-brackets-explained" className="text-[#A3FFD6] hover:underline">
              Tax Brackets Explained
            </Link>
          </li>
          <li>
            <Link to="/education/budgeting-for-beginners" className="text-[#A3FFD6] hover:underline">
              Budgeting for Beginners
            </Link>
          </li>
          <li>
            <Link to="/education/fire-movement" className="text-[#A3FFD6] hover:underline">
              The FIRE Movement Explained
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
