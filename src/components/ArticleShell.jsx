import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import MoneyBasicsSidebar from "@/components/MoneyBasicsSidebar";
import Layout from "@/components/Layout";

// Shared shell for all Education articles.
// props: title, description, path, sidebarTerms, children (article body)
export default function ArticleShell({ title, description, path, sidebarTerms, relatedTools = [], children }) {
  return (
    <Layout>
      <SEO title={title} description={description} path={path} />

      <div className="border-b border-[#A3FFD6]/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <header className="mb-8">
          <Link to="/education" className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988] hover:text-[#A3FFD6]">
            ← Back to Education
          </Link>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
          <h1 className="mt-1 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-[#E0E0E0] sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-xl text-sm text-[#889988]">{description}</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[65%_32%]">
          <article className="instrument-surface rounded-sm p-6 sm:p-8 prose-headings:font-heading prose-headings:text-[#E0E0E0] prose-p:text-[#889988] prose-p:leading-relaxed">
            {children}

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

            <AdSlot slot="mid" className="mt-8 h-[120px]" />
          </article>

          <MoneyBasicsSidebar terms={sidebarTerms} />
        </div>
      </div>
    </Layout>
  );
}