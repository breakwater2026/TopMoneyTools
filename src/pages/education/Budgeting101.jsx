import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Budgeting for Beginners — The 50/30/20 Rule Explained",
  "description":
    "A simple, beginner‑friendly guide to building your first budget using the 50/30/20 rule, with examples, tips, and common mistakes to avoid.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/budgeting-for-beginners-50-30-20-rule-explained",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the 50/30/20 rule good for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. It’s simple, flexible, and helps beginners understand the difference between needs, wants, and savings.",
      },
    },
    {
      "@type": "Question",
      "name": "What if my needs are more than 50%?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many people have needs above 50%. Adjust the rule to 60/20/20 or 70/15/15 until your financial situation improves.",
      },
    },
  ],
};

const openGraphMeta = {
  title:
    "Budgeting for Beginners — The 50/30/20 Rule Explained — TopMoneyTools",
  description:
    "Learn how to build your first budget using the 50/30/20 rule, with examples, tips, and common mistakes to avoid.",
  url: "https://topmoneytools.com/education/budgeting-for-beginners-50-30-20-rule-explained",
  image:
    "https://topmoneytools.com/og/budgeting-for-beginners-50-30-20-rule-explained.png",
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
        "item": "https://topmoneytools.com/education/budgeting-for-beginners-50-30-20-rule-explained",
      },
    ],
  };

  return (
    <ArticleShell
      title="Budgeting for Beginners — The 50/30/20 Rule Explained"
      description="A simple, beginner‑friendly guide to building your first budget using the 50/30/20 rule."
      path="/education/budgeting-for-beginners-50-30-20-rule-explained"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What are fixed expenses?", slug: "fixed-expenses" },
        { q: "What are variable expenses?", slug: "variable-expenses" },
        { q: "What is discretionary spending?", slug: "discretionary-spending" },
        { q: "What is savings rate?", slug: "savings-rate" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Emergency Fund Calculator", to: "/tools/emergency-fund" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        A simple rule that makes budgeting easy
      </h2>
      <p className="text-[#889988]">
        If you’re new to budgeting, the{" "}
        <Link
          to="/glossary#budget"
          className="text-[#A3FFD6] hover:underline"
        >
          50/30/20 rule
        </Link>{" "}
        is one of the easiest ways to start. It divides your after‑tax income
        into three simple categories:
      </p>

      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>50% for needs</li>
        <li>30% for wants</li>
        <li>20% for savings and debt repayment</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What counts as “needs”?
      </h2>
      <p className="text-[#889988]">
        Needs are essential expenses — the things you must pay to live and work.
      </p>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Rent or mortgage</li>
        <li>Utilities</li>
        <li>Groceries</li>
        <li>Transportation</li>
        <li>Insurance</li>
        <li>Minimum loan payments</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What counts as “wants”?
      </h2>
      <p className="text-[#889988]">
        Wants make life enjoyable — but they’re optional.
      </p>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Dining out</li>
        <li>Streaming services</li>
        <li>Hobbies</li>
        <li>Travel</li>
        <li>Shopping</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What counts as “savings”?
      </h2>
      <p className="text-[#889988]">
        Savings build your future financial stability.
      </p>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Emergency fund</li>
        <li>Retirement accounts</li>
        <li>Investments</li>
        <li>Extra debt payments</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Mini‑calculation: applying the 50/30/20 rule
      </h2>
      <p className="text-[#889988]">
        If your monthly take‑home pay is <strong>$4,000</strong>:
      </p>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>50% needs → $2,000</li>
        <li>30% wants → $1,200</li>
        <li>20% savings → $800</li>
      </ul>
      <p className="text-[#889988]">
        Use the{" "}
        <Link
          to="/tools/budget-planner"
          className="text-[#A3FFD6] hover:underline"
        >
          Budget Planner
        </Link>{" "}
        to calculate your own numbers automatically.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes beginners make
      </h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Underestimating grocery and transportation costs</li>
        <li>Not tracking small purchases</li>
        <li>Ignoring irregular expenses (car repairs, annual fees)</li>
        <li>Trying to be “perfect” instead of consistent</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Glossary Highlights
        </p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
              Budget
            </Link>{" "}
            — a plan for how you spend your money.
          </li>
          <li>
            <Link
              to="/glossary#fixed-expenses"
              className="text-[#A3FFD6] hover:underline"
            >
              Fixed expenses
            </Link>{" "}
            — costs that stay the same each month.
          </li>
          <li>
            <Link
              to="/glossary#variable-expenses"
              className="text-[#A3FFD6] hover:underline"
            >
              Variable expenses
            </Link>{" "}
            — costs that change month to month.
          </li>
          <li>
            <Link
              to="/glossary#discretionary-spending"
              className="text-[#A3FFD6] hover:underline"
            >
              Discretionary spending
            </Link>{" "}
            — optional purchases.
          </li>
          <li>
            <Link
              to="/glossary#savings-rate"
              className="text-[#A3FFD6] hover:underline"
            >
              Savings rate
            </Link>{" "}
            — the percentage of income you save.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // FAQ
        </p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Is the 50/30/20 rule good for beginners?
          <br />
          <strong>A:</strong> Yes. It’s simple, flexible, and helps beginners
          understand the difference between needs, wants, and savings.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What if my needs are more than 50%?
          <br />
          <strong>A:</strong> Many people have needs above 50%. Adjust the rule
          to 60/20/20 or 70/15/15 until your financial situation improves.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Key Takeaways
        </p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>The 50/30/20 rule is a simple beginner framework.</li>
          <li>Needs, wants, and savings must be clearly separated.</li>
          <li>Budgets should be adjusted as income or expenses change.</li>
          <li>Consistency matters more than perfection.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">
          // Next Steps
        </p>
        <p className="mt-2 text-sm text-[#889988]">
          Use the{" "}
          <Link
            to="/tools/budget-planner"
            className="text-[#A3FFD6] hover:underline"
          >
            Budget Planner
          </Link>{" "}
          to build your first budget. Then calculate your{" "}
          <Link
            to="/tools/savings-rate"
            className="text-[#A3FFD6] hover:underline"
          >
            savings rate
          </Link>{" "}
          to see how close you are to the 20% target.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link
              to="/education/budgeting-101"
              className="text-[#A3FFD6] hover:underline"
            >
              Budgeting 101
            </Link>
          </li>
          <li>
            <Link
              to="/education/emergency-funds-and-safety-nets"
              className="text-[#A3FFD6] hover:underline"
            >
              Emergency Funds & Safety Nets
            </Link>
          </li>
          <li>
            <Link
              to="/education/investing-101"
              className="text-[#A3FFD6] hover:underline"
            >
              Investing 101
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
