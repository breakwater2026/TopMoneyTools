import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Emergency Funds & Financial Safety Nets — Protecting Yourself When Life Happens",
  "description":
    "Learn how to build an emergency fund and financial safety nets that protect you from job loss, medical bills, and unexpected expenses.",
  "author": { "@type": "Organization", "name": "TopMoneyTools" },
  "publisher": { "@type": "Organization", "name": "TopMoneyTools" },
  "mainEntityOfPage":
    "https://topmoneytools.com/education/emergency-funds-and-safety-nets",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much should I keep in an emergency fund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many guidelines suggest 3–6 months of essential expenses. The right number depends on your job stability, dependents, and risk tolerance.",
      },
    },
    {
      "@type": "Question",
      "name": "Where should I keep my emergency fund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically in a safe, liquid account — such as a high‑interest savings account — where you can access it quickly without market risk.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Emergency Funds & Financial Safety Nets — Protecting Yourself When Life Happens — TopMoneyTools",
  description:
    "Learn how to build an emergency fund and financial safety nets that protect you from job loss, medical bills, and unexpected expenses.",
  url: "https://topmoneytools.com/education/emergency-funds-and-safety-nets",
  image: "https://topmoneytools.com/og/emergency-funds-and-safety-nets.png",
  type: "article",
};

export default function EmergencyFundsAndSafetyNets() {
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
        "name": "Emergency Funds & Financial Safety Nets — Protecting Yourself When Life Happens",
        "item": "https://topmoneytools.com/education/emergency-funds-and-safety-nets",
      },
    ],
  };

  return (
    <ArticleShell
      title="Emergency Funds & Financial Safety Nets — Protecting Yourself When Life Happens"
      description="Learn how to build an emergency fund and financial safety nets that protect you from job loss, medical bills, and unexpected expenses."
      path="/education/emergency-funds-and-safety-nets"
      sidebarTerms={[
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is risk tolerance?", slug: "risk-tolerance" },
        { q: "What are essential expenses?", slug: "essential-expenses" },
        { q: "What is insurance?", slug: "insurance" },
        { q: "What is income protection?", slug: "income-protection" },
      ]}
      relatedTools={[
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Debt Payoff Calculator", to: "/tools/debt-payoff" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why emergency funds matter</h2>
      <p className="text-[#889988]">
        An{" "}
        <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">
          emergency fund
        </Link>{" "}
        is money set aside specifically for unexpected events — job loss, medical bills, urgent repairs. It’s a
        financial safety net that keeps emergencies from turning into long‑term debt.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How much should you aim for?</h2>
      <p className="text-[#889988]">
        Many guidelines suggest 3–6 months of{" "}
        <Link to="/glossary#essential-expenses" className="text-[#A3FFD6] hover:underline">
          essential expenses
        </Link>
        . If your job is less stable or you have dependents, you may want more. If your income is very stable and you
        have strong insurance, you may be comfortable with less.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Mini‑calculation: emergency fund target</h2>
      <p className="text-[#889988]">
        If your essential monthly expenses are $2,500, a 3‑month emergency fund target is $7,500; a 6‑month target is
        $15,000. Use the{" "}
        <Link to="/tools/savings-goal" className="text-[#A3FFD6] hover:underline">
          Savings Goal Calculator
        </Link>{" "}
        to plan contributions toward that amount.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Where to keep your emergency fund</h2>
      <p className="text-[#889988]">
        Emergency funds are typically kept in safe, liquid accounts — such as high‑interest savings — where you can
        access them quickly without market risk. The goal is reliability, not maximum return.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common emergency fund mistakes</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Not having any dedicated emergency savings.</li>
        <li>Investing emergency funds in volatile assets.</li>
        <li>Using emergency savings for non‑emergency wants.</li>
        <li>Not replenishing the fund after using it.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">
              Emergency fund
            </Link>{" "}
            — savings reserved for unexpected expenses.
          </li>
          <li>
            <Link to="/glossary#essential-expenses" className="text-[#A3FFD6] hover:underline">
              Essential expenses
            </Link>{" "}
            — costs you must cover to live and work.
          </li>
          <li>
            <Link to="/glossary#insurance" className="text-[#A3FFD6] hover:underline">
              Insurance
            </Link>{" "}
            — protection against specific financial risks.
          </li>
          <li>
            <Link to="/glossary#income-protection" className="text-[#A3FFD6] hover:underline">
              Income protection
            </Link>{" "}
            — coverage that replaces income if you can’t work.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> How much should I keep in an emergency fund?
          <br />
          <strong>A:</strong> Many guidelines suggest 3–6 months of essential expenses. The right number depends on your
          job stability, dependents, and risk tolerance.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Where should I keep my emergency fund?
          <br />
          <strong>A:</strong> Typically in a safe, liquid account — such as a high‑interest savings account — where you
          can access it quickly without market risk.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Emergency funds turn crises into manageable events.</li>
          <li>3–6 months of essential expenses is a common target.</li>
          <li>Safety and liquidity matter more than return.</li>
          <li>Replenishing the fund after use keeps your safety net intact.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Set your emergency fund target with the{" "}
          <Link to="/tools/savings-goal" className="text-[#A3FFD6] hover:underline">
            Savings Goal Calculator
          </Link>
          . Then adjust your budget using the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>{" "}
          to make room for regular contributions.
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
            <Link to="/education/investing-101" className="text-[#A3FFD6] hover:underline">
              Investing 101
            </Link>
          </li>
          <li>
            <Link to="/education/retirement-planning-basics" className="text-[#A3FFD6] hover:underline">
              Retirement Planning Basics
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
