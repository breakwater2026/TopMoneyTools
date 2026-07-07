import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Budgeting for Beginners — The 50/30/20 Rule Explained",
  description:
    "A plain-English guide to budgeting for beginners: how to split your income, cover essentials, and make your money feel manageable.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/budgeting-for-beginners",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the 50/30/20 rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a simple budgeting method that divides income into needs, wants, and savings or debt payments.",
      },
    },
    {
      "@type": "Question",
      name: "Is budgeting only for people who are struggling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Budgeting helps anyone plan with more clarity, even if they already feel financially stable.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Budgeting for Beginners — The 50/30/20 Rule Explained — TopMoneyTools",
  description:
    "Learn a simple budgeting method for beginners: divide your income, cover essentials, and build a plan that actually works.",
  url: "https://topmoneytools.com/education/budgeting-for-beginners",
  image: "https://topmoneytools.com/og/budgeting-for-beginners.png",
  type: "article",
};

export default function BudgetingForBeginners() {
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
        "name": "Budgeting for Beginners — The 50/30/20 Rule Explained",
        "item": "https://topmoneytools.com/education/budgeting-for-beginners",
      },
    ],
  };

  return (
    <ArticleShell
      title="Budgeting for Beginners — The 50/30/20 Rule Explained"
      description="A plain-English guide to budgeting for beginners: how to split your income, cover essentials, and make your money feel manageable."
      path="/education/budgeting-for-beginners"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What are fixed expenses?", slug: "fixed-expenses" },
        { q: "What are variable expenses?", slug: "variable-expenses" },
        { q: "What is the 50/30/20 rule?", slug: "50-30-20-rule" },
        { q: "What is discretionary spending?", slug: "discretionary-spending" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why budgeting helps</h2>
      <p className="text-[#889988]">
        Budgeting gives your money a job before it disappears. Instead of guessing at the end of the month, you decide
        in advance how much should go to needs, wants, savings, and debt.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The 50/30/20 rule</h2>
      <p className="text-[#889988]">
        The 50/30/20 rule is a beginner-friendly way to organize income. Roughly 50% goes to needs, 30% to wants, and
        20% to savings or debt payments.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Needs, wants, and savings</h2>
      <p className="text-[#889988]">
        Needs are essentials like rent, groceries, and utilities. Wants are the extras that improve life but are not
        required. Savings and debt payments help future you stay secure and flexible.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to build your first budget</h2>
      <p className="text-[#889988]">
        Start with your monthly income, then list your fixed bills. Estimate your variable spending next, and leave
        room for savings before the month begins.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">A simple example</h2>
      <p className="text-[#889988]">
        If you bring home $3,000 a month, a 50/30/20 split means about $1,500 for needs, $900 for wants, and $600 for
        savings or debt. The exact numbers can change, but the structure gives you a clear starting point.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common budgeting mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Making the budget too strict to follow.</li>
        <li>Forgetting small recurring charges.</li>
        <li>Not including savings as a real category.</li>
        <li>Giving every dollar a job without leaving any buffer.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
              Budget
            </Link>{" "}
            — a plan for how to use your money.
          </li>
          <li>
            <Link to="/glossary#fixed-expenses" className="text-[#A3FFD6] hover:underline">
              Fixed expenses
            </Link>{" "}
            — bills that stay mostly the same each month.
          </li>
          <li>
            <Link to="/glossary#variable-expenses" className="text-[#A3FFD6] hover:underline">
              Variable expenses
            </Link>{" "}
            — costs that change from month to month.
          </li>
          <li>
            <Link to="/glossary#discretionary-spending" className="text-[#A3FFD6] hover:underline">
              Discretionary spending
            </Link>{" "}
            — money spent on wants rather than essentials.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is the 50/30/20 rule?
          <br />
          <strong>A:</strong> It is a simple budgeting method that divides income into needs, wants, and savings or
          debt payments.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Is budgeting only for people who are struggling?
          <br />
          <strong>A:</strong> No. Budgeting helps anyone plan with more clarity, even if they already feel financially
          stable.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Budgeting turns uncertainty into a plan.</li>
          <li>The 50/30/20 rule is simple enough for beginners to use right away.</li>
          <li>Needs, wants, and savings each deserve a clear category.</li>
          <li>A good budget is realistic, not perfect.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Build your first plan using the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>
          . Then set a savings target with the{" "}
          <Link to="/tools/savings-goal" className="text-[#A3FFD6] hover:underline">
            Savings Goal Calculator
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/how-inflation-affects-your-daily-budget" className="text-[#A3FFD6] hover:underline">
              How Inflation Affects Your Daily Budget
            </Link>
          </li>
          <li>
            <Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">
              Budgeting 101
            </Link>
          </li>
          <li>
            <Link to="/education/emergency-funds-and-safety-nets" className="text-[#A3FFD6] hover:underline">
              Emergency Funds & Financial Safety Nets
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}