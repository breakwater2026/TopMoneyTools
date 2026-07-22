import { Link } from "react-router-dom";
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
        <p className="mt-2 mb-10 text-[#889988]">
          Every tool and article on TopMoneyTools — {TOOLS.length} calculators and {ARTICLES.length} guides in one place.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="All tools">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Tools</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
              {TOOLS.map((t) => (
                <li key={t.slug}>
                  <Link to={`/tools/${t.slug}`} className="hover:text-[#A3FFD6]">
                    <span className="font-mono text-[10px] text-[#889988]">{t.num}</span> {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="All articles">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Articles</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
              {ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link to={`/education/${a.slug}`} className="hover:text-[#A3FFD6]">
                    <span className="font-mono text-[10px] text-[#889988]">{a.num}</span> {a.t}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
}
