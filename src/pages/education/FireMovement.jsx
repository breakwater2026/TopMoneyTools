import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The FIRE Movement — Financial Independence Retire Early, Explained",
  description:
    "A complete guide to the FIRE movement: calculate your FIRE number, understand Lean vs Fat FIRE, the savings rate math that drives early retirement, and common misconceptions.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/fire-movement",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does FIRE stand for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FIRE stands for Financial Independence Retire Early. It's a movement of people who save and invest aggressively — often 50-70% of their income — to achieve financial independence and the option to retire decades before the traditional retirement age.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my FIRE number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply your annual expenses by 25 (based on the 4% safe withdrawal rule). If you spend $40,000 per year, your FIRE number is $1 million. For a more conservative 3.5% withdrawal rate, multiply by about 28.5 instead.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Lean FIRE and Fat FIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lean FIRE targets a minimalist lifestyle with annual expenses under $40,000-$50,000, requiring a smaller portfolio. Fat FIRE aims to maintain a comfortable upper-middle-class lifestyle in retirement, typically requiring $2 million or more. Regular FIRE falls between them.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "The FIRE Movement — Financial Independence Retire Early — TopMoneyTools",
  description:
    "Learn how the FIRE movement works: calculate your FIRE number, understand Lean vs Fat FIRE, the savings rate math, and what early retirement actually requires.",
  url: "https://topmoneytools.com/education/fire-movement",
  image: "https://topmoneytools.com/og/fire-movement.png",
  type: "article",
};

export default function FireMovement() {
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
        "name": "The FIRE Movement — Financial Independence Retire Early, Explained",
        "item": "https://topmoneytools.com/education/fire-movement",
      },
    ],
  };

  return (
    <ArticleShell
      title="The FIRE Movement — Financial Independence Retire Early, Explained"
      description="A complete guide to the FIRE movement: calculate your FIRE number, understand Lean vs Fat FIRE, the savings rate math that drives early retirement, and common misconceptions."
      path="/education/fire-movement"
      sidebarTerms={[
        { q: "What is FIRE?", slug: "fire" },
        { q: "What is the safe withdrawal rate?", slug: "safe-withdrawal-rate" },
        { q: "What is a savings rate?", slug: "savings-rate" },
        { q: "What is an index fund?", slug: "index-fund" },
        { q: "What is compound growth?", slug: "compound-growth" },
      ]}
      relatedTools={[
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Retirement Calculator", to: "/tools/retirement" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is the FIRE movement?</h2>
      <p className="text-[#889988]">
        FIRE — Financial Independence Retire Early — is a lifestyle movement centered on aggressive saving and investing
        to achieve financial independence as quickly as possible. The core idea is to save a large enough portfolio that
        your investment returns cover your living expenses, giving you the freedom to stop working for money decades
        before the traditional retirement age of 65.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The math behind FIRE: savings rate is everything</h2>
      <p className="text-[#889988]">
        Your savings rate — the percentage of income you save — determines how fast you reach financial independence.
        With a 10% savings rate, you'll need about 51 years to retire. At a 50% savings rate, that drops to roughly 17
        years. At 70%, you're looking at about 8.5 years. The relationship is powerful: every percentage point of savings
        rate improvement accelerates your timeline.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to calculate your FIRE number</h2>
      <p className="text-[#889988]">
        Your FIRE number is 25 times your annual expenses, based on the 4% safe withdrawal rule. If you spend $40,000
        per year, your target is $1 million. This portfolio should support withdrawing 4% the first year, adjusted for
        inflation each year after. For a more conservative approach, multiply by 28.5 (a 3.5% withdrawal rate) or 33 (3%)
        to build in a margin of safety.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Lean FIRE vs Fat FIRE vs Barista FIRE</h2>
      <p className="text-[#889988]">
        Lean FIRE targets a minimalist lifestyle with annual spending of $25,000-$40,000, requiring a portfolio of
        $625,000-$1,000,000. Fat FIRE aims to maintain a comfortable lifestyle with $80,000+ in annual spending, meaning
        a portfolio of $2 million or more. Barista FIRE is a middle path: reach partial financial independence, then
        work part-time to cover some expenses while your portfolio grows untouched.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common FIRE misconceptions</h2>
      <p className="text-[#889988]">
        FIRE isn't about extreme frugality forever — many FIRE adherents continue working on their own terms. It's not
        only for high earners; a teacher saving 40% of a $60,000 salary can reach FI in about 22 years. And it doesn't
        mean you never work again — most early retirees pursue passion projects, consulting, or part-time work that brings
        in some income, extending the life of their portfolio even further.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Getting started on your FIRE journey</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Track every dollar for 3 months to know your real spending and calculate your savings rate.</li>
        <li>Max out tax-advantaged accounts first: 401(k), IRA, HSA.</li>
        <li>Invest the rest in low-cost index funds in a taxable brokerage account.</li>
        <li>Focus on increasing income while keeping lifestyle inflation in check — the savings rate gap widens fastest this way.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#fire" className="text-[#A3FFD6] hover:underline">
              FIRE
            </Link>{" "}
            — Financial Independence Retire Early; reaching a portfolio large enough to cover living expenses indefinitely.
          </li>
          <li>
            <Link to="/glossary#safe-withdrawal-rate" className="text-[#A3FFD6] hover:underline">
              Safe withdrawal rate
            </Link>{" "}
            — the percentage of your portfolio you can withdraw annually with low risk of depletion.
          </li>
          <li>
            <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings rate
            </Link>{" "}
            — the percentage of income saved; the primary driver of how fast you reach FI.
          </li>
          <li>
            <Link to="/glossary#index-fund" className="text-[#A3FFD6] hover:underline">
              Index fund
            </Link>{" "}
            — a low-cost mutual fund tracking a market index; the default FIRE investment.
          </li>
          <li>
            <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">
              Compound growth
            </Link>{" "}
            — growth building on itself over time; the engine behind long-term FIRE math.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What does FIRE stand for?
          <br />
          <strong>A:</strong> Financial Independence Retire Early. It's a movement of aggressive savers who invest to
          reach a portfolio that covers their living expenses, giving them freedom from mandatory work.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How do I calculate my FIRE number?
          <br />
          <strong>A:</strong> Multiply your annual expenses by 25 (based on 4% rule). If you spend $40,000/year, your
          number is $1 million. Use 28.5x for a conservative 3.5% withdrawal rate.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What is Lean vs Fat FIRE?
          <br />
          <strong>A:</strong> Lean FIRE targets a minimalist lifestyle ($25K-$40K/year). Fat FIRE maintains a comfortable
          lifestyle ($80K+/year). Barista FIRE blends partial FI with part-time work.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>FIRE is about reaching financial independence — having the choice to work, not necessarily never working again.</li>
          <li>Your savings rate is the single biggest lever controlling how fast you reach FI.</li>
          <li>Multiply annual expenses by 25 for a quick FIRE number; by 28.5-33 for a conservative buffer.</li>
          <li>Max out tax-advantaged accounts, invest in low-cost index funds, and keep lifestyle inflation in check.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Find your current savings rate with the{" "}
          <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">
            Savings Rate Calculator
          </Link>
          . Then project your FI timeline with the{" "}
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
            <Link to="/education/safe-withdrawal-rates" className="text-[#A3FFD6] hover:underline">
              Safe Withdrawal Rates Explained
            </Link>
          </li>
          <li>
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
          <li>
            <Link to="/education/dollar-cost-averaging" className="text-[#A3FFD6] hover:underline">
              Dollar Cost Averaging
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
