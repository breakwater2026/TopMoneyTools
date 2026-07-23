import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import MoneyBasicsSidebar from "@/components/MoneyBasicsSidebar";
import Reveal from "@/components/Reveal";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustStrip from "@/components/tools/TrustStrip";
import ToolExplainer from "@/components/tools/ToolExplainer";
import FaqAccordion from "@/components/content/FaqAccordion";
import { TOOLS } from "@/config/site.config";
import { getToolExplainer } from "@/data/toolExplainers";
import { ARTICLES } from "@/pages/Education";

// Shared shell for every calculator.
export default function ToolPageShell({
  slug,
  name,
  num,
  title,
  subtitle,
  inputs,
  calculate,
  results,
  explainer,
  intelBrief = [],
  learnMore = [],
  sidebarTerms,
  imageUrl,
  imageAlt,
  imageCaption,
  faqs = [],
}) {
  const registry = TOOLS.find((t) => t.slug === slug);
  const toolNum = registry?.num || num || "—";
  const toolName = registry?.name || name;
  const explainerData = explainer === null ? null : explainer || getToolExplainer(slug);

  const suggestedArticles =
    learnMore.length > 0
      ? learnMore
      : ARTICLES.filter((a) => {
          const hay = `${a.t} ${a.d} ${a.slug}`.toLowerCase();
          return toolName
            .toLowerCase()
            .split(/\s+/)
            .filter((w) => w.length > 4)
            .some((w) => hay.includes(w));
        })
          .slice(0, 2)
          .map((a) => ({ label: `Article-${a.num}: ${a.t}`, to: `/education/${a.slug}` }));

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolName,
    url: `https://topmoneytools.com/tools/${slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: subtitle,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://topmoneytools.com/tools" },
      {
        "@type": "ListItem",
        position: 3,
        name: toolName,
        item: `https://topmoneytools.com/tools/${slug}`,
      },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }
      : null;

  const structuredDataArray = [softwareApplicationSchema, breadcrumbSchema];
  if (faqSchema) structuredDataArray.push(faqSchema);

  const faqItems = faqs.map((f, i) => ({ id: f.id || `faq-${i}`, q: f.q, a: f.a }));

  return (
    <>
      <SEO
        title={`${toolName} | TopMoneyTools`}
        description={subtitle}
        path={`/tools/${slug}`}
        seoMeta={{ url: `https://topmoneytools.com/tools/${slug}`, type: "SoftwareApplication" }}
        structuredData={structuredDataArray}
      />

      <div className="border-b border-[#A3FFD6]/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <AdSlot slot="top" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-10">
        <BreadcrumbNav items={[{ label: "Tools", to: "/tools" }, { label: toolName }]} />
        <header className="mb-6 sm:mb-8">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988] hover:text-[#A3FFD6]"
          >
            ← Back to Tools
          </Link>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">
            Tool-{toolNum} // {toolName}
          </p>
          <h1 className="mt-1 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-[#E0E0E0] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-[#889988]">{subtitle}</p>
          <TrustStrip />
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-8">
          {/* Inputs column */}
          <article className="instrument-surface rounded-sm p-4 sm:p-8">
            <div className="space-y-6">{inputs}</div>
            {calculate && <div className="mt-8">{calculate}</div>}

            {/* Reserved results region reduces CLS when HUD appears */}
            <div className="results mt-6 min-h-[12rem]">{results}</div>

            <p className="mt-6 border-t border-[#A3FFD6]/10 pt-4 text-xs leading-relaxed text-[#889988]/90">
              Educational estimates only — not personalized financial advice. Calculator inputs stay on your device.{" "}
              <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
                Disclaimer
              </Link>
              {" · "}
              <Link to="/privacy" className="text-[#A3FFD6] hover:underline">
                Privacy
              </Link>
            </p>
          </article>

          {/* Sticky results/help column on desktop */}
          <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
            <MoneyBasicsSidebar terms={sidebarTerms} />
          </aside>
        </div>

        {/* Long-form explainer — body depth for AdSense/value */}
        {explainerData ? (
          <div className="mt-4 max-w-3xl">
            {typeof explainerData === "object" && explainerData.what ? (
              <ToolExplainer data={explainerData} />
            ) : (
              explainerData
            )}
          </div>
        ) : null}
      </div>

      {intelBrief.length > 0 && (
        <section aria-labelledby="intel-brief" className="border-t border-[#A3FFD6]/10 bg-obsidian">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <h2 id="intel-brief" className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">
              // Intel Brief
            </h2>
            <h3 className="mt-1 font-heading text-2xl font-bold text-[#E0E0E0]">Why does this happen?</h3>
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

      {faqItems.length > 0 && (
        <section aria-labelledby="tool-faq" className="border-t border-[#A3FFD6]/10 bg-obsidian">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
            <h2 id="tool-faq" className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">
              // Pre-Flight Checks
            </h2>
            <h3 className="mt-1 font-heading text-2xl font-bold text-[#E0E0E0]">Frequently Asked Questions</h3>
            <div className="mt-8">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </section>
      )}

      {suggestedArticles.length > 0 && (
        <section className="border-t border-[#A3FFD6]/10">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Learn More</h2>
            <p className="mt-1 text-sm text-[#889988]">Want to understand the concepts behind these numbers?</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {suggestedArticles.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-[#A3FFD6]/30 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-[#A3FFD6] hover:bg-[#A3FFD6]/10"
                  >
                    {l.label} <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
