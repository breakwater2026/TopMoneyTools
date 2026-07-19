import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";

import MoneyBasicsSidebar from "@/components/MoneyBasicsSidebar";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { ARTICLES } from "@/pages/Education";

// Shared shell for all Education articles.
// props: title, description, path, sidebarTerms, children (article body), lastUpdated, author
export default function ArticleShell({ title, description, path, sidebarTerms, relatedTools = [], seoMeta, structuredData, children, lastUpdated = "July 2026", author = "Andre Denis" }) {
  // Find current article index to get next/prev
  const currentIndex = ARTICLES.findIndex(a => `/education/${a.slug}` === path);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  return (
    <Layout>
      <SEO title={title} description={description} path={path} seoMeta={seoMeta} structuredData={structuredData} />

      <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-10">
        <BreadcrumbNav items={[
          { label: "Education", to: "/education" },
          { label: title },
        ]} />

        <header className="mb-6 sm:mb-8">
          <Link to="/education" className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988] hover:text-[#A3FFD6]">
            ← Back to Education
          </Link>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
          <h1 className="mt-1 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-[#E0E0E0] sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-xl text-sm text-[#889988]">{description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#889988]/80">
            <span className="font-mono uppercase tracking-[0.15em]">By {author}</span>
            <span className="font-mono uppercase tracking-[0.15em]">Last Updated {lastUpdated}</span>
            <Link to="/tools" className="font-mono uppercase tracking-[0.15em] text-[#A3FFD6] hover:underline">Browse calculators</Link>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[65%_32%] lg:gap-8">
          <article className="instrument-surface rounded-sm p-4 sm:p-8 prose-headings:font-heading prose-headings:text-[#E0E0E0] prose-p:text-[#889988] prose-p:leading-relaxed">
            {children}

            {/* In-article native ad — fluid format blends with content, earns higher CTR */}
            <AdSlot slot="mid" format="fluid" layout="in-article" className="my-8 min-h-[250px]" />

            {relatedTools.length > 0 && (
              <div className="mt-8 border-t border-[#A3FFD6]/15 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]/60">// Related Tools</p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {relatedTools.map((t) => (
                    <li key={t.to}>
                      <Link to={t.to} className="inline-flex items-center gap-2 rounded-sm border border-[#A3FFD6]/30 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-[#A3FFD6] hover:bg-[#A3FFD6]/10">
                        {t.label} <ArrowRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next/Previous Article Links */}
            {(prevArticle || nextArticle) && (
              <div className="mt-8 grid gap-4 border-t border-[#A3FFD6]/15 pt-6 md:grid-cols-2">
                {prevArticle && (
                  <Link to={`/education/${prevArticle.slug}`} className="group flex flex-col gap-2 rounded-sm border border-[#A3FFD6]/20 p-4 hover:border-[#A3FFD6]/50 hover:bg-void/30">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">← Previous Article</span>
                    <span className="text-sm font-semibold text-[#E0E0E0] group-hover:text-[#A3FFD6]">{prevArticle.t}</span>
                  </Link>
                )}
                {nextArticle && (
                  <Link to={`/education/${nextArticle.slug}`} className="group flex flex-col gap-2 rounded-sm border border-[#A3FFD6]/20 p-4 hover:border-[#A3FFD6]/50 hover:bg-void/30 md:text-right">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Next Article →</span>
                    <span className="text-sm font-semibold text-[#E0E0E0] group-hover:text-[#A3FFD6]">{nextArticle.t}</span>
                  </Link>
                )}
              </div>
            )}

          </article>

          <MoneyBasicsSidebar terms={sidebarTerms} />
        </div>
      </div>
    </Layout>
  );
}