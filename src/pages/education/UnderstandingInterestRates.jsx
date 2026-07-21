import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Understanding Interest Rates — APR, Amortization, and Finding the Best Terms",
  "description":
    "Learn what APR means, how amortization works, and how to compare interest rates to find the best borrowing and saving options.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/understanding-interest-rates",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is APR the same as the interest rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "APR includes fees and gives a more complete picture of borrowing cost than the nominal interest rate alone.",
      },
    },
    {
      "@type": "Question",
      "name": "Why do longer loans cost more in interest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because interest accrues over more years. Even with a similar rate, paying over a longer term increases total interest paid.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Understanding Interest Rates — APR, Amortization, and Finding the Best Terms — TopMoneyTools",
  description:
    "Understand APR, amortization, and how to compare interest rates to find the best borrowing and saving options.",
  url: "https://topmoneytools.com/education/understanding-interest-rates",
  image: "https://topmoneytools.com/og/understanding-interest-rates.png",
  type: "article",
};

export default function UnderstandingInterestRates() {
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
        "name": "Understanding Interest Rates — APR, Amortization, and Finding the Best Terms",
        "item": "https://topmoneytools.com/education/understanding-interest-rates",
      },
    ],
  };

  return (
    <ArticleShell
      title="Understanding Interest Rates — APR, Amortization, and Finding the Best Terms"
      description="Learn what APR means, how amortization works, and how to compare interest rates to find the best borrowing and saving options."
      path="/education/understanding-interest-rates"
      sidebarTerms={[
        { q: "What is APR?", slug: "apr" },
        { q: "What is amortization?", slug: "amortization" },
        { q: "What is principal?", slug: "principal" },
        { q: "What is compound interest?", slug: "compound-interest" },
        { q: "What is term length?", slug: "term-length" },
      ]}
      relatedTools={[
        { label: "Interest Calculator", to: "/tools/interest" },
        { label: "Loan Comparison Calculator", to: "/tools/loan-comparison" },
        { label: "Debt Payoff Calculator", to: "/tools/debt-payoff" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Interest rates shape the cost of money</h2>
      <p className="text-[#889988]">
        Whether you’re borrowing or saving, interest rates determine how fast balances change. Understanding{" "}
        <Link to="/glossary#apr" className="text-[#A3FFD6] hover:underline">
          APR
        </Link>
        ,{" "}
        <Link to="/glossary#amortization" className="text-[#A3FFD6] hover:underline">
          amortization
        </Link>
        , and{" "}
        <Link to="/glossary#compound-interest" className="text-[#A3FFD6] hover:underline">
          compound interest
        </Link>{" "}
        helps you make smarter decisions about loans and savings.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">APR vs interest rate</h2>
      <p className="text-[#889988]">
        The nominal interest rate is the base percentage charged on{" "}
        <Link to="/glossary#principal" className="text-[#A3FFD6] hover:underline">
          principal
        </Link>
        . APR includes certain fees and gives a more complete picture of borrowing cost. When comparing loans, APR is
        usually the better number to use.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Amortization: how payments are structured</h2>
      <p className="text-[#889988]">
        With{" "}
        <Link to="/glossary#amortization" className="text-[#A3FFD6] hover:underline">
          amortization
        </Link>
        , each payment is split between interest and principal. Early payments are mostly interest; later payments
        increasingly reduce principal. This is why extra payments early in a loan can save significant interest.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Mini‑calculation: interest over time</h2>
      <p className="text-[#889988]">
        If you borrow $10,000 at 6% over 5 years, your total interest will be lower than borrowing the same amount at
        the same rate over 7 years. Use the{" "}
        <Link to="/tools/interest" className="text-[#A3FFD6] hover:underline">
          Interest Calculator
        </Link>{" "}
        to see how term length changes total cost.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common interest rate mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Comparing nominal rates instead of APR.</li>
        <li>Ignoring how term length affects total interest.</li>
        <li>Not understanding how amortization front‑loads interest.</li>
        <li>Focusing only on monthly payment instead of total cost.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#apr" className="text-[#A3FFD6] hover:underline">
              APR
            </Link>{" "}
            — the true annual cost of borrowing.
          </li>
          <li>
            <Link to="/glossary#amortization" className="text-[#A3FFD6] hover:underline">
              Amortization
            </Link>{" "}
            — how payments are split over time.
          </li>
          <li>
            <Link to="/glossary#principal" className="text-[#A3FFD6] hover:underline">
              Principal
            </Link>{" "}
            — the amount originally borrowed.
          </li>
          <li>
            <Link to="/glossary#compound-interest" className="text-[#A3FFD6] hover:underline">
              Compound interest
            </Link>{" "}
            — interest earned on interest.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Is APR the same as the interest rate?
          <br />
          <strong>A:</strong> APR includes fees and gives a more complete picture of borrowing cost than the nominal
          interest rate alone.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Why do longer loans cost more in interest?
          <br />
          <strong>A:</strong> Because interest accrues over more years. Even with a similar rate, paying over a longer
          term increases total interest paid.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>APR is usually the best number for comparing loans.</li>
          <li>Term length changes both monthly payment and total cost.</li>
          <li>Amortization front‑loads interest, making early extra payments powerful.</li>
          <li>Understanding interest rates helps you avoid expensive borrowing decisions.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Compare different loan scenarios using the{" "}
          <Link to="/tools/loan-comparison" className="text-[#A3FFD6] hover:underline">
            Loan Comparison Calculator
          </Link>
          . Then build a payoff plan with the{" "}
          <Link to="/tools/debt-payoff" className="text-[#A3FFD6] hover:underline">
            Debt Payoff Calculator
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/how-to-compare-loans" className="text-[#A3FFD6] hover:underline">
              How to Compare Loans
            </Link>
          </li>
          <li>
            <Link to="/education/credit-scores-and-borrowing" className="text-[#A3FFD6] hover:underline">
              Credit Scores & Borrowing
            </Link>
          </li>
          <li>
            <Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">
              Investing 101
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
