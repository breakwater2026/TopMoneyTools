import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Credit Scores & Borrowing — How Your Score Affects Rates and Approvals",
  "description":
    "Learn what your credit score means, how it’s calculated, and how it affects borrowing costs and approvals.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/credit-scores-and-borrowing",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a good credit score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranges vary by country, but generally higher scores unlock better rates and more approvals. Many lenders consider scores in the “good” or “excellent” range as lower risk.",
      },
    },
    {
      "@type": "Question",
      "name": "Does checking my own credit score hurt it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Soft inquiries, like checking your own score, do not affect your credit. Hard inquiries from new credit applications can have a small impact.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Credit Scores & Borrowing — How Your Score Affects Rates and Approvals — TopMoneyTools",
  description:
    "Understand what your credit score means, how it’s calculated, and how it affects borrowing costs and approvals.",
  url: "https://topmoneytools.com/education/credit-scores-and-borrowing",
  image: "https://topmoneytools.com/og/credit-scores-and-borrowing.png",
  type: "article",
};

export default function CreditScoresAndBorrowing() {
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
        "name": "Credit Scores & Borrowing — How Your Score Affects Rates and Approvals",
        "item": "https://topmoneytools.com/education/credit-scores-and-borrowing",
      },
    ],
  };

  return (
    <ArticleShell
      title="Credit Scores & Borrowing — How Your Score Affects Rates and Approvals"
      description="Learn what your credit score means, how it’s calculated, and how it affects borrowing costs and approvals."
      path="/education/credit-scores-and-borrowing"
      sidebarTerms={[
        { q: "What is a credit score?", slug: "credit-score" },
        { q: "What is a hard inquiry?", slug: "hard-inquiry" },
        { q: "What is a soft inquiry?", slug: "soft-inquiry" },
        { q: "What is credit utilization?", slug: "credit-utilization" },
        { q: "What is payment history?", slug: "payment-history" },
      ]}
      relatedTools={[
        { label: "Debt Payoff Calculator", to: "/tools/debt-payoff" },
        { label: "Loan Comparison Calculator", to: "/tools/loan-comparison" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What your credit score represents</h2>
      <p className="text-[#889988]">
        A{" "}
        <Link to="/glossary#credit-score" className="text-[#A3FFD6] hover:underline">
          credit score
        </Link>{" "}
        is a number estimating how reliably you repay borrowed money. Higher scores usually unlock better interest
        rates, higher limits, and more approvals. Lower scores signal higher risk to lenders.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Key factors that shape your score</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>
          <Link to="/glossary#payment-history" className="text-[#A3FFD6] hover:underline">
            Payment history
          </Link>{" "}
          — whether you pay on time.
        </li>
        <li>
          <Link to="/glossary#credit-utilization" className="text-[#A3FFD6] hover:underline">
            Credit utilization
          </Link>{" "}
          — how much of your available credit you use.
        </li>
        <li>Length of credit history — how long accounts have been open.</li>
        <li>Types of credit — mix of cards, loans, lines of credit.</li>
        <li>Recent inquiries — new applications for credit.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Mini‑calculation: utilization example</h2>
      <p className="text-[#889988]">
        If you have $10,000 of total credit limits and carry $3,000 in balances, your{" "}
        <Link to="/glossary#credit-utilization" className="text-[#A3FFD6] hover:underline">
          credit utilization
        </Link>{" "}
        is 30%. Many scoring models prefer utilization below about 30%.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How your score affects borrowing</h2>
      <p className="text-[#889988]">
        Higher scores can mean lower interest rates, which reduce total borrowing cost. Lower scores can mean higher
        rates, stricter terms, or even denials. Over time, improving your score can save thousands in interest.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common credit score mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Missing payments or paying late.</li>
        <li>Maxing out credit cards and keeping high balances.</li>
        <li>Closing old accounts without understanding the impact on history.</li>
        <li>Applying for multiple new credit lines in a short period.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#credit-score" className="text-[#A3FFD6] hover:underline">
              Credit score
            </Link>{" "}
            — a number estimating how reliably you repay borrowed money.
          </li>
          <li>
            <Link to="/glossary#hard-inquiry" className="text-[#A3FFD6] hover:underline">
              Hard inquiry
            </Link>{" "}
            — a credit check from a new application that can affect your score.
          </li>
          <li>
            <Link to="/glossary#soft-inquiry" className="text-[#A3FFD6] hover:underline">
              Soft inquiry
            </Link>{" "}
            — a credit check that does not affect your score.
          </li>
          <li>
            <Link to="/glossary#credit-utilization" className="text-[#A3FFD6] hover:underline">
              Credit utilization
            </Link>{" "}
            — the percentage of available credit you’re using.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is a good credit score?
          <br />
          <strong>A:</strong> Ranges vary by country, but generally higher scores unlock better rates and more
          approvals. Many lenders consider scores in the “good” or “excellent” range as lower risk.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Does checking my own credit score hurt it?
          <br />
          <strong>A:</strong> No. Soft inquiries, like checking your own score, do not affect your credit. Hard
          inquiries from new credit applications can have a small impact.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Your credit score directly affects borrowing costs.</li>
          <li>Payment history and utilization are major drivers of your score.</li>
          <li>Soft inquiries don’t hurt your score; hard inquiries can.</li>
          <li>Improving your score can save significant interest over time.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Use the{" "}
          <Link to="/tools/debt-payoff" className="text-[#A3FFD6] hover:underline">
            Debt Payoff Calculator
          </Link>{" "}
          to plan reducing balances. Then compare future borrowing scenarios with the{" "}
          <Link to="/tools/loan-comparison" className="text-[#A3FFD6] hover:underline">
            Loan Comparison Calculator
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/understanding-interest-rates" className="text-[#A3FFD6] hover:underline">
              Understanding Interest Rates
            </Link>
          </li>
          <li>
            <Link to="/education/how-to-compare-loans" className="text-[#A3FFD6] hover:underline">
              How to Compare Loans
            </Link>
          </li>
          <li>
            <Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">
              Budgeting 101
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
