import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import { GLOSSARY } from "@/config/site.config";

export default function Glossary() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return q ? GLOSSARY.filter((t) => t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q)) : GLOSSARY;
  }, [query]);

  const glossaryStructuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "TopMoneyTools Glossary",
    "url": "https://topmoneytools.com/glossary",
    "description":
      "Plain-English definitions for key personal finance terms like interest, APR, inflation, amortization, and more.",
    "hasDefinedTerm": GLOSSARY.map((term) => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.def,
      "url": `https://topmoneytools.com/glossary#${term.slug}`,
    })),
  };

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
        "name": "Glossary",
        "item": "https://topmoneytools.com/glossary",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title={`Financial Glossary — ${GLOSSARY.length} Plain-English Terms`}
        description="Plain-English definitions of every term used across TopMoneyTools — inflation, interest, compound growth, amortization, net worth, APR, credit score and more."
        path="/glossary"
        seoMeta={{
          url: "https://topmoneytools.com/glossary",
          type: "website",
        }}
        structuredData={[glossaryStructuredData, breadcrumbSchema]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Financial Glossary</h1>
        <p className="mt-2 text-[#889988]">Plain-English definitions of the {GLOSSARY.length} terms used across our tools and articles.</p>

        <div className="mt-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>

        {/* Search bar */}
        <div className="mt-8">
          <input
            type="search"
            placeholder="Search terms…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search glossary"
            className="w-full rounded-sm border border-[#A3FFD6]/25 bg-void/70 px-4 py-3 font-mono text-sm text-[#A3FFD6] placeholder-[#889988] outline-none focus:border-[#A3FFD6]/60"
          />
        </div>

        {/* Anchor link index — hide when searching */}
        {!query && (
          <nav aria-label="Glossary index" className="mt-6 flex flex-wrap gap-2">
            {GLOSSARY.map((t) => (
              <a key={t.slug} href={`#${t.slug}`} className="rounded-sm border border-[#A3FFD6]/25 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#889988] hover:text-[#A3FFD6]">
                {t.term}
              </a>
            ))}
          </nav>
        )}

        <dl className="mt-6 space-y-3">
          {filtered.length === 0 && (
            <p className="text-sm text-[#889988]">No terms match "{query}".</p>
          )}
          {filtered.map((t) => (
            <div key={t.slug} id={t.slug} className="instrument-surface scroll-mt-24 rounded-sm p-5">
              <dt className="font-heading text-lg font-semibold text-[#A3FFD6]">{t.term}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-[#E0E0E0]">{t.def}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Layout>
  );
}