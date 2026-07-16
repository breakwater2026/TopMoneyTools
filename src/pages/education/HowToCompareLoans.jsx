import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Compare Loans Without Getting Confused",
  description:
    "A plain-English guide to comparing loans: APR, term length, monthly payment, and total cost explained simply.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/how-to-compare-loans",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What matters most when comparing loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "APR, total cost, term length, and monthly payment are the key numbers to compare.",
      },
    },
    {
      "@type": "Question",
      name: "Is the lowest monthly payment always best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A lower payment can sometimes mean a longer term and a higher total cost over time.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "How to Compare Loans Without Getting Confused — TopMoneyTools",
  description:
    "Learn how to compare APR, term length, monthly payment, and total cost so you can choose the right loan.",
  url: "https://topmoneytools.com/education/how-to-compare-loans",
  image: "https://topmoneytools.com/og/how-to-compare-loans.png",
  type: "article",
};

export default function HowToCompareLoans() {
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
        "name": "How to Compare Loans Without Getting Confused",
        "item": "https://topmoneytools.com/education/how-to-compare-loans",
      },
    ],
  };

  return (
    <ArticleShell
      title="How to Compare Loans Without Getting Confused"
      description="A plain-English guide to comparing loans: APR, term length, monthly payment, and total cost explained simply."
      path="/education/how-to-compare-loans"
      sidebarTerms={[
        { q: "What is APR?", slug: "apr" },
        { q: "What is loan term?", slug: "loan-term" },
        { q: "What is principal?", slug: "principal" },
        { q: "What is total cost?", slug: "total-cost" },
        { q: "What is amortization?", slug: "amortization" },
      ]}
      relatedTools={[
        { label: "Debt Cost Tool", to: "/tools/debt-cost" },
        { label: "Mortgage Payment Tool", to: "/tools/mortgage-payment" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why loan comparison matters</h2>
      <p className="text-[#889988]">
        Loans can look similar at first glance, but small differences add up. A slightly lower rate or shorter term can
        change the total cost a lot more than the monthly payment suggests.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The numbers that matter most</h2>
      <p className="text-[#889988]">
        The most useful numbers are APR, monthly payment, term length, and total amount paid. Looking at all four gives
        you a clearer picture than focusing on one number alone.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">APR vs interest rate</h2>
      <p className="text-[#889988]">
        <Link to="/glossary#apr" className="text-[#A3FFD6] hover:underline">
          APR
        </Link>{" "}
        includes the interest rate and often some fees, so it can be more useful than the sticker rate. If two loans
        have different APRs, the lower APR is usually the cheaper choice overall.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Term length changes the total cost</h2>
      <p className="text-[#889988]">
        A longer term can reduce the monthly payment, but it usually increases the total interest paid. A shorter term
        often costs less overall, even if the monthly payment feels higher.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">A simple comparison example</h2>
      <p className="text-[#889988]">
        If one loan offers a lower monthly payment but stretches the balance over several more years, the cheaper-looking
        option may actually cost more. Always compare the full repayment amount, not just the monthly number.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common loan comparison mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Only checking the monthly payment.</li>
        <li>Ignoring fees and closing costs.</li>
        <li>Choosing the longest term without checking the total cost.</li>
        <li>Comparing loans without confirming the same loan amount and purpose.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#apr" className="text-[#A3FFD6] hover:underline">
              APR
            </Link>{" "}
            — annual percentage rate, often including fees.
          </li>
          <li>
            <Link to="/glossary#loan-term" className="text-[#A3FFD6] hover:underline">
              Loan term
            </Link>{" "}
            — how long you have to repay the loan.
          </li>
          <li>
            <Link to="/glossary#principal" className="text-[#A3FFD6] hover:underline">
              Principal
            </Link>{" "}
            — the amount you borrow before interest.
          </li>
          <li>
            <Link to="/glossary#amortization" className="text-[#A3FFD6] hover:underline">
              Amortization
            </Link>{" "}
            — the schedule showing how payments reduce the balance.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What matters most when comparing loans?
          <br />
          <strong>A:</strong> APR, total cost, term length, and monthly payment are the key numbers to compare.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Is the lowest monthly payment always best?
          <br />
          <strong>A:</strong> No. A lower payment can sometimes mean a longer term and a higher total cost over time.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>APR is often the best starting point for comparison.</li>
          <li>Lower monthly payments can hide a higher total cost.</li>
          <li>Loan term length changes both payment size and interest paid.</li>
          <li>Always compare loans on the same terms and loan amount.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Compare your borrowing options with the{" "}
          <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">
            Debt Cost Tool
          </Link>
          . If you are shopping for a home, check the{" "}
          <Link to="/tools/mortgage-payment" className="text-[#A3FFD6] hover:underline">
            Mortgage Payment Tool
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
            <Link to="/education/budgeting-for-beginners" className="text-[#A3FFD6] hover:underline">
              Budgeting for Beginners
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
