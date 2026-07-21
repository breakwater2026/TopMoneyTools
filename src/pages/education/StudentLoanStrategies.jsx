import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Student Loan Strategies — Federal vs Private, IDR, PSLF, and Payoff Plans",
  description:
    "Navigate student loans with confidence: federal vs private loans, income-driven repayment plans, Public Service Loan Forgiveness, refinancing, and the fastest payoff strategies.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/student-loan-strategies",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between federal and private student loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal loans are issued by the government and offer income-driven repayment plans, deferment, forbearance, and forgiveness programs like PSLF. Private loans are issued by banks and credit unions — they lack these protections and typically have variable interest rates.",
      },
    },
    {
      "@type": "Question",
      name: "What is income-driven repayment (IDR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IDR plans cap your monthly payment at a percentage of your discretionary income — typically 10-20% — and forgive any remaining balance after 20-25 years of qualifying payments.",
      },
    },
    {
      "@type": "Question",
      name: "Should I refinance my student loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Refinancing can lower your interest rate, but it converts federal loans into private loans — permanently losing access to IDR plans, PSLF, and federal deferment options. Only refinance if you're confident in your job security and don't need federal protections.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Student Loan Strategies — Federal vs Private, PSLF — TopMoneyTools",
  description:
    "A complete guide to managing student loans: federal vs private, income-driven repayment, PSLF, refinancing, and payoff strategies that save you money.",
  url: "https://topmoneytools.com/education/student-loan-strategies",
  image: "https://topmoneytools.com/og/student-loan-strategies.png",
  type: "article",
};

export default function StudentLoanStrategies() {
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
        "name": "Student Loan Strategies — Federal vs Private, IDR, PSLF, and Payoff Plans",
        "item": "https://topmoneytools.com/education/student-loan-strategies",
      },
    ],
  };

  return (
    <ArticleShell
      title="Student Loan Strategies — Federal vs Private, IDR, PSLF, and Payoff Plans"
      description="Navigate student loans with confidence: federal vs private loans, income-driven repayment plans, Public Service Loan Forgiveness, refinancing, and the fastest payoff strategies."
      path="/education/student-loan-strategies"
      sidebarTerms={[
        { q: "What is a student loan?", slug: "student-loan" },
        { q: "What is debt-to-income ratio?", slug: "debt-to-income" },
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is a budget?", slug: "budget" },
        { q: "What is a credit score?", slug: "credit-score" },
      ]}
      relatedTools={[
        { label: "Debt Cost Calculator", to: "/tools/debt-cost" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Federal vs private student loans</h2>
      <p className="text-[#889988]">
        Federal loans come with protections that private loans lack: income-driven repayment plans, deferment and
        forbearance options, and forgiveness programs like Public Service Loan Forgiveness (PSLF). Federal interest rates
        are fixed. Private loans, issued by banks and credit unions, often have variable rates and none of these
        protections. Always max out federal loans before considering private ones.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Income-driven repayment (IDR) plans</h2>
      <p className="text-[#889988]">
        IDR plans cap your monthly payment at a percentage of your discretionary income — typically 10-20%. The most
        common plans are SAVE (formerly REPAYE), PAYE, IBR, and ICR. After 20-25 years of qualifying payments, any
        remaining balance is forgiven. These plans are essential if your loan balance is high relative to your income.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Public Service Loan Forgiveness (PSLF)</h2>
      <p className="text-[#889988]">
        PSLF forgives the remaining balance on your federal Direct Loans after you make 120 qualifying monthly payments
        while working full-time for a qualifying employer — typically a government organization or a 501(c)(3) nonprofit.
        The forgiven amount is tax-free. This program can wipe out six figures of debt for teachers, nurses, and public
        servants.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">When refinancing makes sense</h2>
      <p className="text-[#889988]">
        Refinancing replaces your current loans with a new private loan, ideally at a lower interest rate. This can save
        thousands, but it permanently strips away federal protections. Only refinance if you have a stable job, strong
        credit, and don't anticipate needing IDR or PSLF. Never refinance federal loans if you're pursuing forgiveness.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Payoff strategies: avalanche vs snowball</h2>
      <p className="text-[#889988]">
        The debt avalanche targets your highest-interest loans first, which saves you the most money mathematically.
        The snowball targets the smallest balance first, which provides psychological momentum. For most borrowers with
        multiple loans at different rates, avalanche wins on paper, but snowball wins if it keeps you consistently
        paying extra every month.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Key decisions to make about your loans</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Are you on track for PSLF? Submit the Employment Certification Form annually.</li>
        <li>Would IDR lower your payment enough to free up cash for higher-interest debt?</li>
        <li>Is your interest rate high enough that aggressive payoff beats investing the difference?</li>
        <li>Do you have a stable enough career to safely refinance federal loans?</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#student-loan" className="text-[#A3FFD6] hover:underline">
              Student loan
            </Link>{" "}
            — money borrowed to pay for education, typically with deferred repayment until after graduation.
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
            <Link to="/glossary#credit-score" className="text-[#A3FFD6] hover:underline">
              Credit score
            </Link>{" "}
            — a number that represents your creditworthiness, which affects your refinancing options.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is the difference between federal and private student loans?
          <br />
          <strong>A:</strong> Federal loans offer IDR plans, deferment, and forgiveness programs like PSLF. Private loans
          lack these protections and typically have variable rates.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What is income-driven repayment (IDR)?
          <br />
          <strong>A:</strong> IDR caps your monthly payment at 10-20% of your discretionary income and forgives any
          remaining balance after 20-25 years of qualifying payments.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Should I refinance my student loans?
          <br />
          <strong>A:</strong> Only if you're confident in your job security and don't need federal protections.
          Refinancing converts federal loans to private, permanently losing IDR and PSLF access.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Federal loans offer protections and forgiveness options that private loans do not.</li>
          <li>PSLF can forgive six figures of debt after 10 years of qualifying public service employment.</li>
          <li>Refinancing saves on interest but permanently strips federal protections.</li>
          <li>Choose the payoff strategy — avalanche or snowball — that keeps you consistently paying extra.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Calculate how much interest your loans will cost with the{" "}
          <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">
            Debt Cost Calculator
          </Link>
          . Then build a payoff plan into your monthly budget with the{" "}
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
            <Link to="/education/credit-card-interest" className="text-[#A3FFD6] hover:underline">
              Credit Card Interest Explained
            </Link>
          </li>
          <li>
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
          <li>
            <Link to="/education/side-hustle-economics" className="text-[#A3FFD6] hover:underline">
              Side Hustle Economics
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
