import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Insurance Essentials — Term vs Whole Life, Health, Disability, and What You Actually Need",
  description:
    "A practical guide to insurance: term vs whole life, health insurance basics, disability coverage, renters and homeowners insurance, and how to protect yourself without overpaying.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/insurance-essentials",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between term and whole life insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Term life insurance covers you for a specific period (usually 10-30 years) and is much cheaper. Whole life insurance lasts your entire life and includes a cash value component, but it costs 5-15 times more. For most people, term life is the better choice.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need disability insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you rely on your income to live, yes. Your ability to earn is likely your largest financial asset. About 25% of today's 20-year-olds will experience a disability before retirement. Employer-provided coverage is often limited, so supplemental policies are worth considering.",
      },
    },
    {
      "@type": "Question",
      name: "How much life insurance do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A common rule of thumb is 10-12 times your annual income. A more precise method is the DIME formula: Debt (pay off all debts), Income (replace 5-10 years of income), Mortgage (pay off the house), and Education (fund children's college).",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Insurance Essentials — Term vs Whole Life, Disability — TopMoneyTools",
  description:
    "Understand what insurance you actually need: term vs whole life, health, disability, renters, and homeowners. Protect yourself without overpaying.",
  url: "https://topmoneytools.com/education/insurance-essentials",
  image: "https://topmoneytools.com/og/insurance-essentials.png",
  type: "article",
};

export default function InsuranceEssentials() {
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
        "name": "Insurance Essentials — Term vs Whole Life, Health, Disability, and What You Actually Need",
        "item": "https://topmoneytools.com/education/insurance-essentials",
      },
    ],
  };

  return (
    <ArticleShell
      title="Insurance Essentials — Term vs Whole Life, Health, Disability, and What You Actually Need"
      description="A practical guide to insurance: term vs whole life, health insurance basics, disability coverage, renters and homeowners insurance, and how to protect yourself without overpaying."
      path="/education/insurance-essentials"
      sidebarTerms={[
        { q: "What is an insurance premium?", slug: "insurance-premium" },
        { q: "What is a deductible?", slug: "deductible" },
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is net worth?", slug: "net-worth" },
        { q: "What is a savings rate?", slug: "savings-rate" },
      ]}
      relatedTools={[
        { label: "Emergency Fund Calculator", to: "/tools/emergency-fund" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Insurance is protection, not an investment</h2>
      <p className="text-[#889988]">
        The purpose of insurance is to protect against financial catastrophes you can't afford to pay out of pocket. It's
        not meant to be an investment or a way to build wealth. The best insurance policy is the one that protects you
        adequately at the lowest cost — and for most people, that means term insurance, not permanent.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Term vs whole life insurance</h2>
      <p className="text-[#889988]">
        Term life covers you for a set period — 10, 20, or 30 years — and pays a death benefit if you die during that
        term. It's inexpensive. Whole life insurance covers you for life and builds cash value, but costs 5-15 times
        more than term for the same death benefit. For the vast majority of people, buying term and investing the
        difference in an index fund is the better financial move.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Disability insurance: protecting your income</h2>
      <p className="text-[#889988]">
        Your ability to earn is likely your biggest asset. About one in four of today's 20-year-olds will experience a
        disability lasting at least 90 days before retirement. Employer-provided disability coverage is often limited —
        typically 60% of income with a cap. Supplemental individual policies that cover the gap and follow you between
        jobs are worth considering, especially for high earners.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Health insurance: what to look for</h2>
      <p className="text-[#889988]">
        Beyond the monthly premium, focus on the deductible, out-of-pocket maximum, and network. A high-deductible health
        plan paired with a Health Savings Account (HSA) can be tax-efficient — HSA contributions are tax-deductible, grow
        tax-free, and can be withdrawn tax-free for medical expenses. An HSA is one of the most powerful tax-advantaged
        accounts available.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Renters and homeowners insurance</h2>
      <p className="text-[#889988]">
        Renters insurance is inexpensive — often $15-25 per month — and covers your personal property, liability, and
        additional living expenses if your rental becomes uninhabitable. Homeowners insurance is required by mortgage
        lenders and covers the structure, your belongings, and liability. Both are essential. Don't skip renters insurance
        just because your landlord doesn't require it.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">What insurance you can skip</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Extended warranties on electronics and appliances — self-insure with your emergency fund.</li>
        <li>Credit card payment protection insurance — overpriced and full of exclusions.</li>
        <li>Cancer or specific-disease insurance — a comprehensive health plan covers major illnesses.</li>
        <li>Whole life insurance for most people — term life plus investing wins mathematically.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#insurance-premium" className="text-[#A3FFD6] hover:underline">
              Insurance premium
            </Link>{" "}
            — the amount you pay regularly to keep an insurance policy active.
          </li>
          <li>
            <Link to="/glossary#deductible" className="text-[#A3FFD6] hover:underline">
              Deductible
            </Link>{" "}
            — the amount you pay out of pocket before your insurance coverage kicks in.
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
          <li>
            <Link to="/glossary#hsa" className="text-[#A3FFD6] hover:underline">
              HSA
            </Link>{" "}
            — a health savings account with triple tax advantages for medical expenses.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is the difference between term and whole life insurance?
          <br />
          <strong>A:</strong> Term life covers you for a set period and is cheap. Whole life lasts forever and builds
          cash value but costs 5-15x more. For most people, term life plus investing the difference wins.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Do I need disability insurance?
          <br />
          <strong>A:</strong> If you rely on your income, yes. About 25% of 20-year-olds will face a disability before
          retirement. Consider supplemental coverage beyond what your employer provides.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How much life insurance do I need?
          <br />
          <strong>A:</strong> The DIME formula: Debt, Income replacement (5-10 years), Mortgage payoff, and Education
          funding for dependents. A rough rule is 10-12x your annual income.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Insurance is protection against catastrophe, not an investment vehicle.</li>
          <li>Term life insurance provides the best value for nearly everyone.</li>
          <li>Disability insurance protects your most valuable asset — your ability to earn.</li>
          <li>Renters insurance is cheap and covers far more than most people realize.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Make sure your safety net is in place with the{" "}
          <Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">
            Emergency Fund Calculator
          </Link>
          . Then see your full financial picture with the{" "}
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
            <Link to="/education/emergency-funds-and-safety-nets" className="text-[#A3FFD6] hover:underline">
              Emergency Funds & Financial Safety Nets
            </Link>
          </li>
          <li>
            <Link to="/education/home-affordability" className="text-[#A3FFD6] hover:underline">
              Home Affordability Guide
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
