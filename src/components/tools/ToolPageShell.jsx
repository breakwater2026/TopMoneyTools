import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import MoneyBasicsSidebar from "@/components/MoneyBasicsSidebar";
import Reveal from "@/components/Reveal";
import BreadcrumbNav from "@/components/BreadcrumbNav";

// The Instrument Stage — shared shell for every calculator.
// Layout per PRD §4.1 + design spec §3.II:
//   - Hero (title, subtitle, "Back to Tools")
//   - Top banner ad (status bar)
//   - Two-column asymmetric balance: LEFT 65% form+results, RIGHT 35% sticky sidebar
//   - Intel Brief (scroll-triggered reveal)
//   - Closing editorial image ("The Explorer's Artifacts")
export default function ToolPageShell({
  slug, name, num, title, subtitle, inputs, calculate, results, intelBrief = [], learnMore = [], sidebarTerms, imageUrl, imageAlt, imageCaption, faqs = [], explanation, assumptions = [], dataSources = [], updatedDate = "Updated July 2026", relatedTools = [], relatedArticles = [], relatedGlossary = [],
}) {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "url": `https://topmoneytools.com/tools/${slug}`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": subtitle,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
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
        "name": "Tools",
        "item": "https://topmoneytools.com/tools",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": name,
        "item": `https://topmoneytools.com/tools/${slug}`,
      },
    ],
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  } : null;

  const assumptionsList = Array.isArray(assumptions) ? assumptions : assumptions ? [assumptions] : [];
  const sourceList = Array.isArray(dataSources) ? dataSources : dataSources ? [dataSources] : [];
  const toolLinks = relatedTools.length > 0 ? relatedTools : [{ label: "Browse all calculators", to: "/tools" }, { label: "How our calculators work", to: "/tools/how-our-calculators-work" }];
  const articleLinks = relatedArticles.length > 0 ? relatedArticles : [{ label: "Start here", to: "/start-here" }, { label: "Education overview", to: "/education" }];
  const glossaryLinks = relatedGlossary.length > 0 ? relatedGlossary : [{ label: "Glossary overview", to: "/glossary" }];

  const structuredDataArray = [softwareApplicationSchema, breadcrumbSchema];
  if (faqSchema) structuredDataArray.push(faqSchema);

  return (
    <>
      <SEO 
        title={name} 
        description={subtitle} 
        path={`/tools/${slug}`} 
        seoMeta={{
          url: `https://topmoneytools.com/tools/${slug}`,
          type: "SoftwareApplication"
        }} 
        structuredData={structuredDataArray} 
      />

      {/* Top banner ad — integrated "status bar" */}
      <div className="border-b border-[#A3FFD6]/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-10">
        <BreadcrumbNav items={[
          { label: "Tools", to: "/tools" },
          { label: name },
        ]} />
        {/* Hero */}
        <header className="mb-6 sm:mb-8">
          <Link to="/tools" className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988] hover:text-[#A3FFD6]">
            ← Back to Tools
          </Link>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">Tool-{num} // {name}</p>
          <h1 className="mt-1 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-[#E0E0E0] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-[#889988]">{subtitle}</p>
        </header>

        <div className="mb-6 flex flex-wrap gap-3 rounded-sm border border-[#A3FFD6]/10 bg-[#081008]/80 p-4 text-sm text-[#889988]">
          <span className="rounded-full border border-[#A3FFD6]/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">Runs in your browser</span>
          <span className="rounded-full border border-[#A3FFD6]/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">Informational use only</span>
          <span className="rounded-full border border-[#A3FFD6]/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">{updatedDate}</span>
        </div>

        {/* 2:1 asymmetric balance */}
        <div className="grid gap-6 lg:grid-cols-[65%_32%] lg:gap-8">
          {/* Main Stage — engine + result HUD */}
          <article className="instrument-surface rounded-sm p-4 sm:p-8">
            <div className="space-y-6">{inputs}</div>
            {calculate && <div className="mt-8">{calculate}</div>}
            {results}
            {(explanation || assumptionsList.length > 0 || sourceList.length > 0) && (
              <section className="mt-8 rounded-sm border border-[#A3FFD6]/10 bg-void/40 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// What this result means</p>
                {explanation && <p className="mt-3 text-sm leading-relaxed text-[#889988]">{explanation}</p>}
                {sourceList.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-heading text-sm font-semibold text-[#E0E0E0]">Data sources</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#889988]">
                      {sourceList.map((source, index) => <li key={index}>{source}</li>)}
                    </ul>
                  </div>
                )}
                {assumptionsList.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-heading text-sm font-semibold text-[#E0E0E0]">Assumptions and limitations</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#889988]">
                      {assumptionsList.map((assumption, index) => <li key={index}>{assumption}</li>)}
                    </ul>
                  </div>
                )}
              </section>
            )}
            {/* Mid-content ad */}
            <AdSlot slot="mid" className="mt-8 h-[120px]" />
          </article>

          {/* Intel sidebar — sticky */}
          <MoneyBasicsSidebar terms={sidebarTerms} />
        </div>
      </div>

      {/* Intel Brief — scroll-triggered reveal */}
      {intelBrief.length > 0 && (
        <section aria-labelledby="intel-brief" className="border-t border-[#A3FFD6]/10 bg-obsidian">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <h2 id="intel-brief" className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">
              // How this works
            </h2>
            <h3 className="mt-1 font-heading text-2xl font-bold text-[#E0E0E0]">Behind the numbers</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#889988]">These estimates use standard financial formulas and your own inputs to show what could happen. They are meant to help you compare scenarios and think clearly, not to guarantee a particular result.</p>
            <ol className="mt-8 space-y-10">
              {intelBrief.map((b, i) => (
                <Reveal key={i}>
                  <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
                    <span className="font-mono text-2xl font-bold text-[#A3FFD6]/40" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-[#E0E0E0]">{b.title}</h4>
                      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#889988]">{b.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section aria-labelledby="tool-faq" className="border-t border-[#A3FFD6]/10 bg-obsidian">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <h2 id="tool-faq" className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">
              // Pre-Flight Checks
            </h2>
            <h3 className="mt-1 font-heading text-2xl font-bold text-[#E0E0E0]">Frequently Asked Questions</h3>
            <dl className="mt-8 space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={i}>
                  <div className="instrument-surface rounded-sm p-5">
                    <dt className="font-heading font-semibold text-[#E0E0E0]">{faq.q}</dt>
                    <dd className="mt-1 text-sm text-[#889988]">{faq.a}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Related tools and educational resources */}
      {(learnMore.length > 0 || toolLinks.length > 0 || glossaryLinks.length > 0) && (
        <section className="border-t border-[#A3FFD6]/10">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Related resources</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#E0E0E0]">Related calculators</h3>
                <ul className="mt-3 space-y-2">
                  {toolLinks.map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="inline-flex items-center gap-2 text-sm text-[#889988] hover:text-[#A3FFD6]">
                        {link.label} <ArrowRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#E0E0E0]">Related articles</h3>
                <ul className="mt-3 space-y-2">
                  {learnMore.map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="inline-flex items-center gap-2 text-sm text-[#889988] hover:text-[#A3FFD6]">
                        {link.label} <ArrowRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                  {articleLinks.map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="inline-flex items-center gap-2 text-sm text-[#889988] hover:text-[#A3FFD6]">
                        {link.label} <ArrowRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#E0E0E0]">Glossary terms</h3>
                <ul className="mt-3 space-y-2">
                  {glossaryLinks.map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="inline-flex items-center gap-2 text-sm text-[#889988] hover:text-[#A3FFD6]">
                        {link.label} <ArrowRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The Explorer's Artifacts — closing editorial image */}
      {imageUrl && (
        <figure className="border-t border-[#A3FFD6]/10">
          <img src={imageUrl} alt={imageAlt} className="h-80 w-full object-cover sm:h-[420px]" loading="lazy" />
          {imageCaption && (
            <figcaption className="border-t border-[#A3FFD6]/10 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#889988]">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}
    </>
  );
}