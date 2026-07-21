import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Car Buying Guide — New vs Used, Depreciation, and Total Cost of Ownership",
  description:
    "A complete guide to buying a car without overpaying: new vs used comparison, depreciation curves, financing vs cash, and the 20/4/10 rule for affordable car payments.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/car-buying-guide",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it better to buy a new or used car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lightly used car (2-3 years old) is typically the best financial value. It has already absorbed the steepest depreciation — roughly 20-30% in the first year — while still having modern safety features and low maintenance needs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 20/4/10 rule for car buying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Put at least 20% down, finance for no more than 4 years (48 months), and keep your total monthly car expenses (loan, insurance, fuel) under 10% of your gross income.",
      },
    },
    {
      "@type": "Question",
      name: "Should I pay cash or finance a car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you can earn a higher return investing your cash than the loan's interest rate, financing may make sense. But if the loan rate is high (above 5-6%), paying cash — or making a large down payment — usually wins financially.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Car Buying Guide — New vs Used, 20/4/10 Rule — TopMoneyTools",
  description:
    "Learn when to buy new vs used, how depreciation destroys value, and how the 20/4/10 rule keeps your car payment affordable.",
  url: "https://topmoneytools.com/education/car-buying-guide",
  image: "https://topmoneytools.com/og/car-buying-guide.png",
  type: "article",
};

export default function CarBuyingGuide() {
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
        "name": "Car Buying Guide — New vs Used, Depreciation, and Total Cost of Ownership",
        "item": "https://topmoneytools.com/education/car-buying-guide",
      },
    ],
  };

  return (
    <ArticleShell
      title="Car Buying Guide — New vs Used, Depreciation, and Total Cost of Ownership"
      description="A complete guide to buying a car without overpaying: new vs used comparison, depreciation curves, financing vs cash, and the 20/4/10 rule for affordable car payments."
      path="/education/car-buying-guide"
      sidebarTerms={[
        { q: "What is debt-to-income ratio?", slug: "debt-to-income" },
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is a credit score?", slug: "credit-score" },
        { q: "What is depreciation?", slug: "inflation" },
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
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">The depreciation curve: new vs used</h2>
      <p className="text-[#889988]">
        A new car loses roughly 20-30% of its value in the first year alone. By year three, it's lost about 40-50%.
        A 3-year-old used car has already absorbed this steepest depreciation while still having modern safety features
        and typically low maintenance needs. The sweet spot for value is generally a car that's 2-4 years old.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Total cost of ownership: beyond the sticker price</h2>
      <p className="text-[#889988]">
        The purchase price is just the start. Factor in fuel, insurance, maintenance, registration, and financing costs.
        Over five years, a $30,000 car can easily cost $45,000-50,000 when you account for everything. Insurance alone
        can range from $800 to over $2,000 per year depending on the car model, your age, and driving history.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The 20/4/10 rule for affordable car payments</h2>
      <p className="text-[#889988]">
        This rule keeps you from overextending: put at least 20% down, finance for no more than 4 years (48 months), and
        keep total transportation costs — loan payment, insurance, and fuel — under 10% of your gross monthly income. On
        a $6,000 monthly income, your total car budget should stay under $600 per month.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Financing vs paying cash</h2>
      <p className="text-[#889988]">
        Paying cash saves you interest and keeps you from overspending — it's harder to write a big check than to sign up
        for monthly payments. But if you can secure a low-interest loan (under 4-5%) and invest the cash at a higher
        return, financing can make mathematical sense. For most people, the behavioral benefit of paying cash outweighs
        the potential arbitrage.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Dealer tricks to watch for</h2>
      <p className="text-[#889988]">
        Dealers often focus on the monthly payment rather than the total price — a tactic that hides how much you're
        really paying. Extended warranties, gap insurance, and fabric protection are high-margin add-ons you can usually
        skip. Always negotiate the out-the-door price first, not the monthly payment.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Alternative approaches to car ownership</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Buy a reliable used car with cash and drive it for 10+ years — the lowest lifetime cost.</li>
        <li>Consider electric vehicles — higher upfront cost but lower fuel and maintenance over time.</li>
        <li>If you live in a walkable city, going car-free and using rideshare or rentals as needed can save thousands annually.</li>
        <li>Leasing is rarely the best financial choice — it's essentially renting a car during its steepest depreciation.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
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
            <Link to="/glossary#credit-score" className="text-[#A3FFD6] hover:underline">
              Credit score
            </Link>{" "}
            — a number that represents your creditworthiness based on your credit history.
          </li>
          <li>
            <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">
              Emergency fund
            </Link>{" "}
            — cash set aside for unexpected expenses, ideally 3-6 months of living costs.
          </li>
          <li>
            <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
              Budget
            </Link>{" "}
            — a plan for how to use your money each month.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Is it better to buy a new or used car?
          <br />
          <strong>A:</strong> A lightly used car (2-3 years old) is typically the best financial value. It has already
          absorbed the steepest depreciation while still having modern features and low maintenance needs.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What is the 20/4/10 rule?
          <br />
          <strong>A:</strong> Put 20% down, finance for no more than 4 years, and keep total car expenses under 10% of
          your gross income. This prevents car payments from dominating your budget.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Should I pay cash or finance a car?
          <br />
          <strong>A:</strong> Paying cash saves interest and prevents overspending. Financing can work if you secure a
          very low rate and invest the difference, but the behavioral benefits of cash usually win.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>A new car loses 20-30% of its value in year one — a 2-4 year old used car offers the best value.</li>
          <li>The total cost of ownership over 5 years often far exceeds the sticker price.</li>
          <li>The 20/4/10 rule prevents your car from dominating your monthly budget.</li>
          <li>Negotiate the out-the-door price, not the monthly payment.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Calculate how much car you can afford with the{" "}
          <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">
            Debt Cost Calculator
          </Link>
          . Then build a full monthly spending plan using the{" "}
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
            <Link to="/education/home-affordability" className="text-[#A3FFD6] hover:underline">
              Home Affordability Guide
            </Link>
          </li>
          <li>
            <Link to="/education/credit-card-interest" className="text-[#A3FFD6] hover:underline">
              Credit Card Interest Explained
            </Link>
          </li>
          <li>
            <Link to="/education/insurance-essentials" className="text-[#A3FFD6] hover:underline">
              Insurance Essentials
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
