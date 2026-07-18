import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import { TOOLS, GLOSSARY } from "@/config/site.config";
import { ARTICLES } from "@/pages/Education";

const EXTERNAL = [
  { label: "Consumer Financial Protection Bureau (CFPB)", desc: "Consumer guidance on credit, debt, mortgages, and financial protections.", href: "https://www.consumerfinance.gov" },
  { label: "IRS — Tax Information for Individuals", desc: "Official tax forms, brackets, credits, and filing guidance.", href: "https://www.irs.gov/individuals" },
  { label: "USA.gov — Government Benefits & Services", desc: "Portal for federal benefits, grants, loans, and consumer services.", href: "https://www.usa.gov" },
  { label: "Investor.gov — SEC Investor Resources", desc: "Basics of investing, compounding, fraud awareness, and market guidance.", href: "https://www.investor.gov" },
  { label: "Social Security Administration — Retirement Planner", desc: "Official retirement benefit estimates, eligibility, and application info.", href: "https://www.ssa.gov/benefits/retirement" },
  { label: "Federal Reserve — Consumer Research", desc: "Public data on inflation, interest rates, and consumer economics.", href: "https://www.federalreserve.gov/consumerscommunities.htm" },
  { label: "CRA — Canada Revenue Agency", desc: "Canadian tax rules, credits, benefit payments, and filing information.", href: "https://www.canada.ca/en/revenue-agency.html" },
  { label: "Government of Canada — Retirement Planning", desc: "Canadian retirement benefits, CPP, OAS, and pension resources.", href: "https://www.canada.ca/en/services/benefits/retirement.html" },
  { label: "Bank of Canada — Inflation & Prices", desc: "Official inflation data, interest rate decisions, and price stability research.", href: "https://www.bankofcanada.ca/rates/indicators/capacity-and-inflation-pressures/inflation/" },
  { label: "FCAC — Financial Consumer Agency of Canada", desc: "Consumer protection, budgeting tools, and financial literacy resources.", href: "https://www.canada.ca/en/financial-consumer-agency.html" },
];

export default function Resources() {
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
        "name": "Resources",
        "item": "https://topmoneytools.com/resources",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Financial Resources | TopMoneyTools"
        description="A curated collection of all ten TopMoneyTools calculators, ten plain-English guides, and trusted government references for confident money decisions."
        path="/resources"
        seoMeta={{
          url: "https://topmoneytools.com/resources",
          type: "website",
        }}
        structuredData={[breadcrumbSchema]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Financial Resources</h1>
        <p className="mt-2 text-[#889988]">A curated collection of free calculators, plain-English guides, and trusted government references.</p>
        <div className="mt-6 rounded-sm border border-[#A3FFD6]/10 bg-[#081008]/60 p-5 text-sm leading-relaxed text-[#889988]">
          <p className="font-heading text-sm font-semibold text-[#E0E0E0]">How to use this page</p>
          <p className="mt-2">
            Start with a calculator if you already know your question. Start with an article
            if you need the concept explained first. Use the government references when you
            want official rules, consumer guidance, or public data behind an important decision.
          </p>
        </div>

        <div className="mt-6">
          <AdSlot slot="top" className="min-h-[100px]" />
        </div>

        {/* Tools */}
        <h2 className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Calculators — All Ten Instruments</h2>
        <p className="mt-1 text-sm text-[#889988]">Free, private — all calculations run in your browser.</p>
        <ul className="mt-4 space-y-2">
          {TOOLS.map((t) => (
            <li key={t.slug} className="flex items-start gap-3">
              <span className="mt-0.5 w-6 shrink-0 font-mono text-[10px] text-[#889988]">{t.num}</span>
              <div>
                <Link to={`/tools/${t.slug}`} className="inline-flex items-center gap-1 text-sm text-[#E0E0E0] hover:text-[#A3FFD6]">
                  {t.name} <ArrowRight className="h-3 w-3 shrink-0" />
                </Link>
                <p className="text-xs text-[#889988]">{t.short}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Education articles */}
        <h2 className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Education Articles</h2>
        <p className="mt-1 text-sm text-[#889988]">Ten plain-English guides on the financial topics that matter most.</p>
        <ul className="mt-4 space-y-2 text-sm">
          {ARTICLES.map((a) => (
            <li key={a.slug}>
              <Link to={`/education/${a.slug}`} className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]">
                {a.t} <ArrowRight className="h-3 w-3 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Government references */}
        <h2 className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Government & Authoritative References</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {EXTERNAL.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]"
              >
                {e.label} <ArrowRight className="h-3 w-3 shrink-0" />
              </a>
              {e.desc && <p className="mt-1 text-xs text-[#667766]">{e.desc}</p>}
            </li>
          ))}
        </ul>

        {/* Glossary & Start Here */}
        <h2 className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Glossary</h2>
        <p className="mt-1 text-sm text-[#889988]">{GLOSSARY.length} plain-English definitions of every term used across our tools and articles.</p>
        <Link to="/glossary" className="mt-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:gap-2">
          Browse the full glossary <ArrowRight className="h-3 w-3" />
        </Link>

        <h2 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// New Here?</h2>
        <p className="mt-1 text-sm text-[#889988]">Not sure where to begin? The Start Here guide walks you through everything step by step.</p>
        <Link to="/start-here" className="mt-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:gap-2">
          Go to Start Here <ArrowRight className="h-3 w-3" />
        </Link>
      </section>
    </Layout>
  );
}
