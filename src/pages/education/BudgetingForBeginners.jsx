import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Budgeting for Beginners — The 50/30/20 Rule Explained",
  "description":
    "A clear, beginner-friendly guide to building your first budget using the 50/30/20 rule, with examples, glossary links, and common mistakes to avoid.",
  "author": {
    "@type": "Organization",
    "name": "TopMoneyTools",
  },
  "publisher": {
    "@type": "Organization",
    "name": "TopMoneyTools",
  },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/budgeting-for-beginners-50-30-20-rule-explained",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the 50/30/20 rule right for everyone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s a helpful starting point, but you can adjust the percentages based on your income, cost of living, and goals.",
      },
    },
    {
      "@type": "Question",
      "name": "How often should I review my budget?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Review your budget at least once per month and after any major life change, such as a new job or move.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Budgeting for Beginners — The 50/30/20 Rule Explained — TopMoneyTools",
  description:
    "Learn how to build your first budget using the 50/30/20 rule, with examples, glossary links, and common mistakes to avoid.",
  url: "https://topmoneytools.com/education/budgeting-for-beginners-50-30-20-rule-explained",
  image: "https://topmoneytools.com/og/budgeting-for-beginners-50-30-20-rule-explained.png",
  type: "article",
};

export default function BudgetingForBeginners() {
  return (
    <ArticleShell
      title="Budgeting for Beginners — The 50/30/20 Rule Explained"
      description="A clear, beginner-friendly guide to building your first budget using the 50/30/20 rule, with examples, glossary links, and common mistakes to avoid."
      path="/education/budgeting-for-beginners-50-30-20-rule-explained"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What are fixed expenses?", slug: "fixed-expenses" },
        { q: "What are variable expenses?", slug: "variable-expenses" },
        { q: "What is discretionary spending?", slug: "discretionary-spending" },
        { q: "What is a sinking fund?", slug: "sinking-fund" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
        { label: "Debt Payoff Calculator", to: "/tools/debt-payoff" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why budgeting matters</h2>
      <p className="text-[#889988]">
        A{" "}
        <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
          budget
        </Link>{" "}
        gives you control, clarity, and confidence. It’s not restrictive — it’s a plan for how your money supports your
        goals. The 50/30/20 rule is a simple starting point that works for many people.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The 50/30/20 breakdown</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>
          <strong>50% Needs:</strong> Rent, groceries, utilities, insurance — your{" "}
          <Link to="/glossary#fixed-expenses" className="text-[#A3FFD6] hover:underline">
            fixed expenses
          </Link>{" "}
          plus essential variable costs.
        </li>
        <li>
          <strong>30% Wants:</strong> Dining out, entertainment, travel —{" "}
          <Link to="/glossary#discretionary-spending" className="text-[#A3FFD6] hover:underline">
            discretionary spending
          </Link>{" "}
          that adds enjoyment but isn’t essential.
        </li>
        <li>
          <strong>20% Savings:</strong> Emergency fund, investments, debt payoff — your future security.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Fixed vs variable expenses</h2>
      <p className="text-[#889988]">
        Fixed expenses stay the same each month — rent, insurance, subscriptions. Variable expenses change — groceries,
        utilities, fuel. Understanding both helps you identify where adjustments can be made without sacrificing
        essentials.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Sinking funds: your secret weapon</h2>
      <p className="text-[#889988]">
        A{" "}
        <Link to="/glossary#sinking-fund" className="text-[#A3FFD6] hover:underline">
          sinking fund
        </Link>{" "}
        is money set aside monthly for predictable but irregular expenses — car repairs, gifts, travel. It prevents
        budget surprises and keeps your 50/30/20 plan stable.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Mini‑calculation: building your first budget</h2>
      <p className="text-[#889988]">
        Example: If your monthly take‑home pay is $4,000:
      </p>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>50% Needs → $2,000</li>
        <li>30% Wants → $1,200</li>
        <li>20% Savings → $800</li>
      </ul>
      <p className="mt-2 text-[#889988]">
        Use the{" "}
        <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
          Budget Planner
        </Link>{" "}
        to map your actual categories to these amounts.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common budgeting mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Not tracking spending at all.</li>
        <li>Ignoring irregular expenses like car repairs or annual fees.</li>
        <li>Setting unrealistic savings targets that cause burnout.</li>
        <li>Not reviewing the budget monthly.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
              Budget
            </Link>{" "}
            — a plan for how income is allocated.
          </li>
          <li>
            <Link to="/glossary#fixed-expenses" className="text-[#A3FFD6] hover:underline">
              Fixed expenses
            </Link>{" "}
            — costs that stay the same each month.
          </li>
          <li>
            <Link to="/glossary#variable-expenses" className="text-[#A3FFD6] hover:underline">
              Variable expenses
            </Link>{" "}
            — costs that change month to month.
          </li>
          <li>
            <Link to="/glossary#sinking-fund" className="text-[#A3FFD6] hover:underline">
              Sinking fund
            </Link>{" "}
            — savings for predictable irregular expenses.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Is the 50/30/20 rule right for everyone?
          <br />
          <strong>A:</strong> It’s a helpful starting point, but you can adjust the percentages based on your income,
          cost of living, and goals.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How often should I review my budget?
          <br />
          <strong>A:</strong> Review your budget at least once per month and after any major life change, such as a new
          job or move.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>The 50/30/20 rule is a simple, effective starting point.</li>
          <li>Tracking spending is essential for accuracy.</li>
          <li>Sinking funds prevent budget surprises.</li>
          <li>Small adjustments compound into major improvements.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Build your first plan using the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>
          . Then set your savings targets using the{" "}
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
            <Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">
              Budgeting 101
            </Link>
          </li>
          <li>
            <Link to="/education/emergency-funds-and-safety-nets" className="text-[#A3FFD6] hover:underline">
              Emergency Funds & Financial Safety Nets
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
