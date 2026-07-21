import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rent vs Buy — The Full Financial Picture",
  description:
    "A data-driven guide to the rent vs buy decision: hidden costs of homeownership, opportunity cost, and when renting is actually the smarter financial move.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/rent-vs-buy",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is renting always throwing money away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Renting pays for shelter without the costs of maintenance, property taxes, insurance, and transaction fees that come with homeownership. In many markets, renting and investing the difference can outperform buying.",
      },
    },
    {
      "@type": "Question",
      name: "What are the hidden costs of buying a home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beyond the mortgage, homeowners pay property taxes, homeowners insurance, PMI (if less than 20% down), maintenance (roughly 1% of home value per year), HOA fees, and closing costs when buying and selling.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I stay in a home for buying to make sense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A common rule of thumb is at least 5-7 years. This gives you enough time for home appreciation to offset the high transaction costs of buying and selling, which can total 8-10% of the home's value.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Rent vs Buy — The Full Cost Comparison — TopMoneyTools",
  description:
    "Compare renting vs buying with real numbers: hidden costs, opportunity cost of your down payment, and when renting wins financially.",
  url: "https://topmoneytools.com/education/rent-vs-buy",
  image: "https://topmoneytools.com/og/rent-vs-buy.png",
  type: "article",
};

export default function RentVsBuy() {
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
        "name": "Rent vs Buy — The Full Financial Picture",
        "item": "https://topmoneytools.com/education/rent-vs-buy",
      },
    ],
  };

  return (
    <ArticleShell
      title="Rent vs Buy — The Full Financial Picture"
      description="A data-driven guide to the rent vs buy decision: hidden costs of homeownership, opportunity cost, and when renting is actually the smarter financial move."
      path="/education/rent-vs-buy"
      sidebarTerms={[
        { q: "What is a mortgage?", slug: "mortgage" },
        { q: "What is net worth?", slug: "net-worth" },
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is an emergency fund?", slug: "emergency-fund" },
      ]}
      relatedTools={[
        { label: "Mortgage Calculator", to: "/tools/mortgage" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">The real cost of homeownership</h2>
      <p className="text-[#889988]">
        A mortgage payment is only the beginning. Homeowners also pay property taxes, homeowners insurance, private
        mortgage insurance (PMI) if they put down less than 20%, HOA fees in many communities, and ongoing maintenance.
        Budgeting 1% of the home's value per year for maintenance is a common rule of thumb.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The hidden cost of renting</h2>
      <p className="text-[#889988]">
        Renting provides flexibility and a predictable monthly cost, but it has drawbacks. Rent tends to increase over
        time, you build no equity, and your landlord can decide to sell or not renew your lease. You also have limited
        freedom to modify the space to your liking.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The opportunity cost of your down payment</h2>
      <p className="text-[#889988]">
        A 20% down payment on a $400,000 home is $80,000. If you invested that $80,000 in a diversified index fund
        earning 7% annually, it would grow to roughly $157,000 in 10 years. You must weigh that forgone investment return
        against the equity you build and any home appreciation.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Transaction costs: the buy-sell friction</h2>
      <p className="text-[#889988]">
        Buying and selling a home involves significant transaction costs. Real estate agent commissions typically total
        5-6% of the sale price. Add closing costs of 2-5% on both the buy and sell side. Altogether, transaction costs
        can eat 8-10% of a home's value over the full cycle.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">When renting is the smarter financial choice</h2>
      <p className="text-[#889988]">
        Renting often wins financially when you plan to move within 5 years, live in a high-cost market where the
        price-to-rent ratio is unfavorable, value flexibility for career moves, or don't have a large enough emergency
        fund to cover surprise repairs on top of a mortgage.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">When buying makes sense</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>You plan to stay in the same home for at least 5-7 years.</li>
        <li>You have a stable income and a separate emergency fund for repairs.</li>
        <li>You can put at least 20% down to avoid PMI.</li>
        <li>The price-to-rent ratio in your market favors buying.</li>
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
            <Link to="/glossary#net-worth" className="text-[#A3FFD6] hover:underline">
              Net worth
            </Link>{" "}
            — the value of everything you own minus everything you owe.
          </li>
          <li>
            <Link to="/glossary#interest-rate" className="text-[#A3FFD6] hover:underline">
              Interest rate
            </Link>{" "}
            — the cost of borrowing money, expressed as a percentage of the loan.
          </li>
          <li>
            <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
              Inflation
            </Link>{" "}
            — the general increase in prices over time, which reduces purchasing power.
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
          <strong>Q:</strong> Is renting always throwing money away?
          <br />
          <strong>A:</strong> No. Renting pays for shelter without the costs of maintenance, property taxes, insurance,
          and transaction fees that come with homeownership. In many markets, renting and investing the difference can
          outperform buying.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What are the hidden costs of buying a home?
          <br />
          <strong>A:</strong> Beyond the mortgage, homeowners pay property taxes, homeowners insurance, PMI, maintenance,
          HOA fees, and closing costs when buying and selling.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How long should I stay for buying to make sense?
          <br />
          <strong>A:</strong> At least 5-7 years. This gives home appreciation enough time to offset the high transaction
          costs of buying and selling.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Homeownership costs extend well beyond the mortgage payment.</li>
          <li>The opportunity cost of your down payment can be significant over time.</li>
          <li>Transaction costs for buying and selling can total 8-10% of the home's value.</li>
          <li>Renting is often better financially if you plan to move within 5 years.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Run the numbers with the{" "}
          <Link to="/tools/mortgage" className="text-[#A3FFD6] hover:underline">
            Mortgage Calculator
          </Link>
          . Then check your overall financial picture with the{" "}
          <Link to="/tools/net-worth" className="text-[#A3FFD6] hover:underline">
            Net Worth Tool
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/home-affordability" className="text-[#A3FFD6] hover:underline">
              Home Affordability Guide
            </Link>
          </li>
          <li>
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
          <li>
            <Link to="/education/inflation-proofing-savings" className="text-[#A3FFD6] hover:underline">
              Inflation-Proofing Your Savings
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
