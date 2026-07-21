import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Home Affordability — DTI Ratios, the 28/36 Rule, and Hidden Ownership Costs",
  description:
    "Learn how lenders evaluate your ability to afford a home, the 28/36 rule, down payment strategies, PMI, closing costs, and the hidden expenses of homeownership.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/home-affordability",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the 28/36 rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 28/36 rule says your total housing costs (mortgage, taxes, insurance) should not exceed 28% of your gross monthly income, and your total debt payments (housing plus all other debts) should not exceed 36%.",
      },
    },
    {
      "@type": "Question",
      name: "Do I really need a 20% down payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Many conventional loans accept as little as 3-5% down. However, putting less than 20% down usually requires private mortgage insurance (PMI), which adds a monthly cost until you reach 20% equity.",
      },
    },
    {
      "@type": "Question",
      name: "What are closing costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Closing costs are the fees paid at settlement, typically 2-5% of the purchase price. They include loan origination fees, appraisal, title insurance, property taxes, and other charges. You can sometimes negotiate for the seller to cover part of them.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Home Affordability — DTI, 28/36 Rule, Hidden Costs — TopMoneyTools",
  description:
    "Calculate how much house you can really afford. Understand DTI ratios, the 28/36 rule, down payments, PMI, and the hidden costs of ownership.",
  url: "https://topmoneytools.com/education/home-affordability",
  image: "https://topmoneytools.com/og/home-affordability.png",
  type: "article",
};

export default function HomeAffordability() {
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
        "name": "Home Affordability — DTI Ratios, the 28/36 Rule, and Hidden Ownership Costs",
        "item": "https://topmoneytools.com/education/home-affordability",
      },
    ],
  };

  return (
    <ArticleShell
      title="Home Affordability — DTI Ratios, the 28/36 Rule, and Hidden Ownership Costs"
      description="Learn how lenders evaluate your ability to afford a home, the 28/36 rule, down payment strategies, PMI, closing costs, and the hidden expenses of homeownership."
      path="/education/home-affordability"
      sidebarTerms={[
        { q: "What is a mortgage?", slug: "mortgage" },
        { q: "What is debt-to-income ratio?", slug: "debt-to-income" },
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is net worth?", slug: "net-worth" },
      ]}
      relatedTools={[
        { label: "Mortgage Calculator", to: "/tools/mortgage" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">How lenders determine what you can afford</h2>
      <p className="text-[#889988]">
        Lenders look primarily at your debt-to-income (DTI) ratio. They calculate your front-end DTI — housing costs
        divided by gross monthly income — and your back-end DTI — all monthly debt payments divided by income. Most
        conventional loans want the front-end under 28% and the back-end under 36%.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The 28/36 rule explained</h2>
      <p className="text-[#889988]">
        The 28/36 rule says no more than 28% of your gross income should go to housing (mortgage, taxes, insurance, HOA),
        and no more than 36% should go to all debt payments combined (including housing). On a $7,000 monthly gross income,
        that means a maximum of about $1,960 for housing and $2,520 for all debt.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Down payments: how much do you need?</h2>
      <p className="text-[#889988]">
        The 20% down payment is a myth for many buyers. FHA loans accept 3.5% down, and conventional loans often accept
        3-5%. But putting less than 20% down triggers private mortgage insurance (PMI), which can cost 0.5-1.5% of the
        loan annually until you reach 20% equity. PMI protects the lender, not you.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Closing costs: the upfront surprise</h2>
      <p className="text-[#889988]">
        Closing costs range from 2% to 5% of the home's purchase price. On a $350,000 home, expect to pay $7,000 to
        $17,500 in closing costs. These cover origination fees, appraisal, title insurance, escrow deposits, property
        taxes, and recording fees. These are due at closing, on top of your down payment.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Hidden ownership costs that surprise new buyers</h2>
      <p className="text-[#889988]">
        Beyond the mortgage, homeowners pay property taxes (typically 1-2% of home value annually), homeowners insurance,
        HOA fees, maintenance (budget at least 1% of home value per year), and utilities that tend to be higher than in
        apartments. A $350,000 home can easily carry $800-1,200 per month in non-mortgage costs.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to calculate what you can truly afford</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Multiply your gross monthly income by 0.28 for the maximum housing payment.</li>
        <li>Subtract estimated property taxes, insurance, and HOA from that number to find the max mortgage payment.</li>
        <li>Factor in maintenance costs — don't assume the mortgage payment is the full picture.</li>
        <li>Make sure you have a separate emergency fund after closing — a major repair on day one should not break you.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#mortgage" className="text-[#A3FFD6] hover:underline">
              Mortgage
            </Link>{" "}
            — a loan used to purchase a home, typically repaid over 15 or 30 years.
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
          <strong>Q:</strong> What is the 28/36 rule?
          <br />
          <strong>A:</strong> Housing costs should not exceed 28% of gross income, and total debt payments should not
          exceed 36%. This is a guideline most conventional lenders follow.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Do I really need a 20% down payment?
          <br />
          <strong>A:</strong> No. Many loans accept 3-5% down, but less than 20% usually requires PMI, adding a monthly
          cost until you reach 20% equity.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What are closing costs?
          <br />
          <strong>A:</strong> Fees paid at settlement, typically 2-5% of the purchase price. They cover origination fees,
          appraisal, title insurance, and other charges due at closing.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Lenders use DTI ratios, not the price tag, to decide what you can borrow.</li>
          <li>The 28/36 rule keeps your housing and total debt payments at a manageable level.</li>
          <li>PMI is required when you put less than 20% down and adds significant monthly cost.</li>
          <li>Budget at least 1% of the home's value annually for maintenance and repairs.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Run real numbers with the{" "}
          <Link to="/tools/mortgage" className="text-[#A3FFD6] hover:underline">
            Mortgage Calculator
          </Link>
          . Then build a realistic monthly plan with the{" "}
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
            <Link to="/education/rent-vs-buy" className="text-[#A3FFD6] hover:underline">
              Rent vs Buy: The Full Financial Picture
            </Link>
          </li>
          <li>
            <Link to="/education/car-buying-guide" className="text-[#A3FFD6] hover:underline">
              Car Buying Guide
            </Link>
          </li>
          <li>
            <Link to="/education/net-worth-by-age" className="text-[#A3FFD6] hover:underline">
              Net Worth by Age Benchmarks
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
