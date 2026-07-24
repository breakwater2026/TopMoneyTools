import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Student Loans After Graduation: First 90 Days",
  description: "A practical first-three-months checklist: inventory loans, build a budget, and choose a payment approach.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/student-loans-first-90-days",
};

export default function StudentLoansFirst90Days() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Student Loans After Graduation: First 90 Days", item: "https://topmoneytools.com/education/student-loans-first-90-days" },
    ],
  };

  return (
    <ArticleShell
      title="Student Loans After Graduation: First 90 Days"
      description="A practical first-three-months checklist: inventory loans, build a budget, and choose a payment approach."
      path="/education/student-loans-first-90-days"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is a student loan?", slug: "student-loan" },
        { q: "What is an emergency fund?", slug: "emergency-fund" }
      ]}
      relatedTools={[
        { label: "Student Loan Calculator", to: "/tools/student-loan" },
        { label: "Emergency Fund", to: "/tools/emergency-fund" },
        { label: "Budget Planner", to: "/tools/budget-planner" }
      ]}
      seoMeta={{
        title: "Student Loans After Graduation: First 90 Days | TopMoneyTools",
        description: "A practical first-three-months checklist: inventory loans, build a budget, and choose a payment approach.",
        url: "https://topmoneytools.com/education/student-loans-first-90-days",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        The first three months after school set the tone. You do not need a perfect forever plan—you need <strong className="text-[#E0E0E0]">inventory, cash flow, and no silent defaults</strong>.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Days 1–30: Inventory
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>List every loan: balance, rate, servicer, fixed vs other features</li>
        <li>Create logins; turn on statements</li>
        <li>Note first payment due dates and grace periods</li>
        <li>Put dates in a calendar with reminders</li>
      </ol>
      <p className="mt-3 text-[#889988]">
        Use <Link to="/tools/student-loan-repayment" className="text-[#A3FFD6] hover:underline">Student Loan Repayment</Link> on each balance or a weighted average if you simplify carefully.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Days 31–60: Cash flow
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Build a starter budget with real take-home pay (<Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link>)</li>
        <li>Separate needs vs wants (<Link to="/education/needs-wants-gray-zone" className="text-[#A3FFD6] hover:underline">Needs, Wants, and the Gray Zone</Link>)</li>
        <li>Start a micro emergency fund even at $500–$1,000 while payments begin (<Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">Emergency Fund</Link>)</li>
        <li>Automate minimums so you never miss</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Days 61–90: Strategy
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Choose avalanche (highest rate first) or snowball (smallest balance first)</li>
        <li>Decide extra payment amount that still leaves food and transit stable</li>
        <li>If exploring income-driven or assistance programs, use <strong className="text-[#E0E0E0]">official</strong> servicer/government sources—not random social posts</li>
        <li>If refinancing, list benefits you might lose; read terms slowly</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example: first job
      </h2>
      <p className="mt-3 text-[#889988]">
        Take-home: <strong className="text-[#E0E0E0]">$3,400/month</strong>. Loans: <strong className="text-[#E0E0E0]">$35,000</strong> at blended ~5.5%.
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Rent + basics: $2,200</li>
        <li>Minimum loan payments: $350</li>
        <li>Starter savings: $200</li>
        <li>Extra loan capacity: $150 when possible</li>
        <li>Remainder: food upgrade, transit, modest wants</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        The goal is sustainability—not hero payments that bounce and trigger fees.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Extra payment vs emergency fund tension
      </h2>
      <p className="mt-3 text-[#889988]">
        If cards would be the backup plan, prioritize a starter cash buffer alongside minimums. Then accelerate loans. Returning to 22% card APR to chase 5% student debt is a bad swap.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Ignoring mail/email from servicers</li>
        <li>Lifestyle jump in month two of the paycheck</li>
        <li>Consolidating/refinancing without understanding tradeoffs</li>
        <li>Shame delay—avoidance grows balances</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/education/how-to-compare-loans" className="text-[#A3FFD6] hover:underline">How to Compare Loans</Link></li>
        <li><Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">Budgeting 101</Link></li>
        <li><Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost Calculator</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
