import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { TOOLS } from "@/config/site.config";
import { ARTICLES } from "@/pages/Education";

export default function FullDirectory() {
  return (
    <Layout>
      <SEO
        title="Full Directory | TopMoneyTools"
        description="Browse the complete TopMoneyTools library — all financial calculators and educational articles in one place."
        path="/full-directory"
        seoMeta={{ url: "https://topmoneytools.com/full-directory", type: "website" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Full Directory</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Full Directory</h1>
        <p className="mt-2 max-w-xl text-[#889988]">
          Every tool and article on TopMoneyTools — {TOOLS.length} calculators and {ARTICLES.length} guides in one place.
        </p>

        {/* Tools */}
        <h2 className="mt-12 font-heading text-2xl font-semibold text-[#E0E0E0]">All Calculators</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              to={`/tools/${t.slug}`}
              className="group flex flex-col rounded-sm bg-obsidian p-5 transition hover:-translate-y-0.5 hover:bg-void hover:instrument-glow"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{t.num}</span>
                <span aria-hidden="true" className="h-3 w-3 rotate-45 border border-[#A3FFD6] transition group-hover:bg-[#A3FFD6]" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#E0E0E0]">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm text-[#889988]">{t.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]">
                Open <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* Articles */}
        <h2 className="mt-14 font-heading text-2xl font-semibold text-[#E0E0E0]">All Articles</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              to={`/education/${a.slug}`}
              className="group flex flex-col rounded-sm bg-obsidian p-5 transition hover:-translate-y-0.5 hover:bg-void hover:instrument-glow"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{a.num}</span>
                <span aria-hidden="true" className="h-3 w-3 rotate-45 border border-[#A3FFD6] transition group-hover:bg-[#A3FFD6]" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#E0E0E0]">{a.t}</h3>
              <p className="mt-2 flex-1 text-sm text-[#889988]">{a.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
