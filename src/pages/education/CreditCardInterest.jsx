import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Credit Card Interest Explained — APR, Minimum Payments, and Payoff Strategies",
  description:
    "Understand how credit card interest works, why minimum payments keep you trapped, and proven strategies like avalanche and snowball to pay off debt faster.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/credit-card-interest",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does APR mean on a credit card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "APR stands for Annual Percentage Rate. It represents the yearly cost of borrowing on your credit card, including interest and certain fees. Credit card APRs are typically much higher than mortgage or auto loan rates.",
      },
    },
    {
      "@type": "Question",
      name: "Why is paying only the minimum so expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum payments are designed to stretch repayment over many years. Most of each minimum payment goes to interest, not principal. A $5,000 balance at 22% APR with a 2% minimum payment takes over 20 years to pay off and costs thousands in interest.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better: debt avalanche or snowball?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The debt avalanche method pays off the highest-interest debt first, which saves the most money mathematically. The snowball method pays off the smallest balance first, which provides psychological wins and momentum. Choose whichever keeps you motivated.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Credit Card Interest Explained — APR, Payoff Strategies — TopMoneyTools",
  description:
    "Learn how credit card interest really works, the minimum payment trap, balance transfers, and which payoff strategy saves you the most money.",
  url: "https://topmoneytools.com/education/credit-card-interest",
  image: "https://topmoneytools.com/og/credit-card-interest.png",
  type: "article",
};

export default function CreditCardInterest() {
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
        "name": "Credit Card Interest Explained — APR, Minimum Payments, and Payoff Strategies",
        "item": "https://topmoneytools.com/education/credit-card-interest",
      },
    ],
  };

  return (
    <ArticleShell
      title="Credit Card Interest Explained — APR, Minimum Payments, and Payoff Strategies"
      description="Understand how credit card interest works, why minimum payments keep you trapped, and proven strategies like avalanche and snowball to pay off debt faster."
      path="/education/credit-card-interest"
      sidebarTerms={[
        { q: "What is a credit score?", slug: "credit-score" },
        { q: "What is debt-to-income ratio?", slug: "debt-to-income" },
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is a budget?", slug: "budget" },
        { q: "What is an emergency fund?", slug: "emergency-fund" },
      ]}
      relatedTools={[
        { label: "Debt Cost Calculator", to: "/tools/debt-cost" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">How credit card APR actually works</h2>
      <p className="text-[#889988]">
        APR, or Annual Percentage Rate, is the yearly cost of borrowing on your card. But interest is typically calculated
        daily. Your card issuer takes your APR, divides it by 365, and multiplies by your average daily balance. That
        means a 24% APR translates to roughly 0.066% daily — compounding against you every single day you carry a balance.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The minimum payment trap</h2>
      <p className="text-[#889988]">
        Minimum payments are typically just 2% of your balance. On a $5,000 balance at 22% APR, a 2% minimum payment
        starts at $100. But that doesn't budge the principal much. It would take over 20 years and cost you roughly
        $7,700 in total to pay off that $5,000 — nearly $2,700 in interest alone.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Balance transfers: the hidden costs</h2>
      <p className="text-[#889988]">
        A 0% balance transfer offer can save you hundreds in interest, but beware of the fine print. Most cards charge a
        balance transfer fee of 3-5% upfront. If you don't pay off the full balance during the 0% promotional period —
        typically 12-18 months — the standard APR kicks in, sometimes retroactively.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Debt avalanche vs debt snowball</h2>
      <p className="text-[#889988]">
        The avalanche method targets the highest-interest debt first while making minimum payments on everything else. It
        saves you the most money mathematically. The snowball method targets the smallest balance first, giving you quick
        wins that keep you motivated. Both work. The best strategy is the one you'll actually stick with.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to avoid paying credit card interest</h2>
      <p className="text-[#889988]">
        The simplest way to avoid interest is to pay your statement balance in full each month. Most cards offer a grace
        period — typically 21-25 days after your statement closes — during which no interest accrues on new purchases if
        you paid your previous statement balance in full. Setting up autopay for the full statement balance is the safest
        habit.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">When credit cards can work for you</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Cash-back and rewards cards earn 2-5% back on categories you already spend in.</li>
        <li>Purchase protection and extended warranties add free insurance on big-ticket items.</li>
        <li>Fraud protection on credit cards is stronger than on debit cards.</li>
        <li>Building credit history with responsible use improves your credit score.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#credit-score" className="text-[#A3FFD6] hover:underline">
              Credit score
            </Link>{" "}
            — a number that represents your creditworthiness based on your credit history.
          </li>
          <li>
            <Link to="/glossary#debt-to-income" className="text-[#A3FFD6] hover:underline">
              Debt-to-income ratio
            </Link>{" "}
            — your total monthly debt payments divided by your gross monthly income.
          </li>
          <li>
            <Link to="/glossary#interest-rate" className="text-[#A3FFD6] hover:underline">
              Interest rate
            </Link>{" "}
            — the cost of borrowing money, expressed as a percentage.
          </li>
          <li>
            <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
              Budget
            </Link>{" "}
            — a plan for how to use your money each month.
          </li>
          <li>
            <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">
              Emergency fund
            </Link>{" "}
            — cash set aside for unexpected expenses, ideally 3-6 months of living costs.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What does APR mean on a credit card?
          <br />
          <strong>A:</strong> APR stands for Annual Percentage Rate. It represents the yearly cost of borrowing on your
          credit card. Credit card APRs are typically much higher than mortgage or auto loan rates.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Why is paying only the minimum so expensive?
          <br />
          <strong>A:</strong> Minimum payments stretch repayment over many years. Most of each payment goes to interest,
          not principal. A $5,000 balance at 22% APR takes over 20 years to pay off with minimums alone.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Which is better: debt avalanche or snowball?
          <br />
          <strong>A:</strong> The avalanche method saves the most money mathematically. The snowball method provides
          psychological wins. Choose whichever keeps you motivated.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Credit card interest compounds daily against you when you carry a balance.</li>
          <li>Minimum payments can trap you in decades of debt at sky-high interest rates.</li>
          <li>Balance transfers can help but watch for fees and promotional period deadlines.</li>
          <li>Paying your full statement balance every month is the only way to avoid interest entirely.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Calculate how fast you can pay off your balances with the{" "}
          <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">
            Debt Cost Calculator
          </Link>
          . Then build a spending plan with the{" "}
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
            <Link to="/education/student-loan-strategies" className="text-[#A3FFD6] hover:underline">
              Student Loan Strategies
            </Link>
          </li>
          <li>
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
          <li>
            <Link to="/education/credit-scores-and-borrowing" className="text-[#A3FFD6] hover:underline">
              Credit Scores & Borrowing
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
