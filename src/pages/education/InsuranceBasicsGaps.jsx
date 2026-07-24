import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Insurance Basics: What Gap Are You Actually Filling?",
  description: "Life insurance as a goals inventory, not a fear purchase. How to use a gap estimate before you talk to a licensed advisor.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/insurance-basics-gaps",
};

export default function InsuranceBasicsGaps() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Insurance Basics: What Gap Are You Actually Filling?", item: "https://topmoneytools.com/education/insurance-basics-gaps" },
    ],
  };

  return (
    <ArticleShell
      title="Insurance Basics: What Gap Are You Actually Filling?"
      description="Life insurance as a goals inventory, not a fear purchase. How to use a gap estimate before you talk to a licensed advisor."
      path="/education/insurance-basics-gaps"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is an insurance gap?", slug: "insurance-gap" },
        { q: "What is income protection?", slug: "income-protection" }
      ]}
      relatedTools={[
        { label: "Insurance Gap Analyzer", to: "/tools/insurance-gap" },
        { label: "Emergency Fund", to: "/tools/emergency-fund" },
        { label: "Net Worth", to: "/tools/net-worth" }
      ]}
      seoMeta={{
        title: "Insurance Basics: What Gap Are You Actually Filling? | TopMoneyTools",
        description: "Life insurance as a goals inventory, not a fear purchase. How to use a gap estimate before you talk to a licensed advisor.",
        url: "https://topmoneytools.com/education/insurance-basics-gaps",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        Insurance is for <strong className="text-[#E0E0E0]">financial holes</strong> you cannot comfortably fund yourself. The mistake is buying random coverage from fear—or buying none when others depend on your income.
      </p>
      <p className="mt-3 text-[#889988]">
        This is education. Only licensed advisors and insurers can recommend products for you.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Start with the job of the coverage
      </h2>
      <p className="mt-3 text-[#889988]">
        Common life-insurance jobs:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Replace income for dependents for a period of years</li>
        <li>Pay off a mortgage so survivors can stay housed</li>
        <li>Cover final expenses</li>
        <li>Support a special-needs plan (specialized advice required)</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        If nobody relies on your income and you have no debts you care to clear, the “gap” may be small. If you have a mortgage and young children, the gap may be large.
      </p>
      <p className="mt-3 text-[#889988]">
        Use the <Link to="/tools/insurance-gap" className="text-[#A3FFD6] hover:underline">Insurance Gap Analyzer</Link> as a <strong className="text-[#E0E0E0]">worksheet</strong>, not a quote.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        A simple gap inventory
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Annual amount dependents would need</li>
        <li>Years of runway</li>
        <li>Debts to clear</li>
        <li>Existing group + personal cover</li>
        <li>Liquid assets you would actually use</li>
        <li>Resulting gap → discussion with a licensed professional</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example
      </h2>
      <p className="mt-3 text-[#889988]">
        New mortgage <strong className="text-[#E0E0E0]">$300,000</strong>, one dependent, income <strong className="text-[#E0E0E0]">$80,000</strong>. Existing group life <strong className="text-[#E0E0E0]">$100,000</strong>.
      </p>
      <p className="mt-3 text-[#889988]">
        A simple income-plus-debt sketch can produce a large illustrative gap. That does not auto-select term length, product type, or rider set—that is advisor/underwriting territory.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Disability and the forgotten risk
      </h2>
      <p className="mt-3 text-[#889988]">
        For many working-age people, the odds of a period where you cannot work can be more relevant than the odds of dying young. Life insurance does not replace disability planning. Discuss both with qualified professionals.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Group cover is not a complete plan
      </h2>
      <p className="mt-3 text-[#889988]">
        Employer coverage often ends or shrinks when you leave. Beneficiaries need updating after marriage, divorce, or children.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What insurance is not
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>An investment performance product in disguise (be wary of sales frames)</li>
        <li>A substitute for an <Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">emergency fund</Link></li>
        <li>A reason to skip basic budgeting</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Buying a number from social media</li>
        <li>Over-insuring while underfunding liquidity</li>
        <li>No policy review after life events</li>
        <li>Assuming partners “just know” intentions without documents</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Related
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li><Link to="/tools/insurance-gap" className="text-[#A3FFD6] hover:underline">Insurance Gap Analyzer</Link></li>
        <li><Link to="/tools/net-worth" className="text-[#A3FFD6] hover:underline">Net Worth Calculator</Link></li>
        <li><Link to="/education/emergency-funds-and-safety-nets" className="text-[#A3FFD6] hover:underline">Emergency Funds guide</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
