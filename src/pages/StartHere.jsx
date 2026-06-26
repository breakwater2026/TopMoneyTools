import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { TOOLS } from "@/config/site.config";
import { ARTICLES } from "@/pages/Education";

export default function StartHere() {
  return (
    <Layout>
      <SEO title="Start Here — Your First Steps with TopMoneyTools" description="New to TopMoneyTools? This simple, step-by-step guide walks you through the tools and resources — no financial experience needed." path="/start-here" />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Onboarding</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Start Here</h1>
        <p className="mt-2 text-[#889988]">New here? Three steps to get the most out of TopMoneyTools — no financial experience needed.</p>

        <ol className="mt-10 space-y-8">
          {/* Step 1 */}
          <li className="instrument-surface rounded-sm p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Step 01 — Learn the basics</p>
            <h2 className="mt-2 font-heading text-lg font-semibold text-[#E0E0E0]">Start with a guide that matches where you are</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#889988]">Our ten plain-English articles cover everything from inflation to retirement. Pick the one that's most relevant right now.</p>
            <ul className="mt-4 grid gap-1.5 text-sm">
              {ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link to={`/education/${a.slug}`} className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]">
                    <ArrowRight className="h-3 w-3 shrink-0 text-[#A3FFD6]" /> {a.t}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Step 2 */}
          <li className="instrument-surface rounded-sm p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Step 02 — Use a tool</p>
            <h2 className="mt-2 font-heading text-lg font-semibold text-[#E0E0E0]">Pick the calculator that fits your question</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#889988]">All ten instruments run in your browser — private, free, no account needed.</p>
            <ul className="mt-4 grid gap-1.5 text-sm">
              {TOOLS.map((t) => (
                <li key={t.slug}>
                  <Link to={`/tools/${t.slug}`} className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]">
                    <span className="font-mono text-[10px] text-[#889988] w-6 shrink-0">{t.num}</span> {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Step 3 */}
          <li className="instrument-surface rounded-sm p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Step 03 — Build your plan</p>
            <h2 className="mt-2 font-heading text-lg font-semibold text-[#E0E0E0]">Connect the dots across your whole financial picture</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#889988]">Once you've run a few tools and read a few articles, use these to tie it together.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/glossary" className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]"><ArrowRight className="h-3 w-3 text-[#A3FFD6]" /> <Link to="/glossary" className="text-[#A3FFD6] hover:underline">Glossary</Link> — 35 key terms defined plainly</Link></li>
              <li><Link to="/resources" className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]"><ArrowRight className="h-3 w-3 text-[#A3FFD6]" /> <Link to="/resources" className="text-[#A3FFD6] hover:underline">Resources</Link> — government references and guides</Link></li>
              <li><Link to="/tools/budget-planner" className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]"><ArrowRight className="h-3 w-3 text-[#A3FFD6]" /> Run the <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link> as your foundation</Link></li>
              <li><Link to="/tools/net-worth" className="inline-flex items-center gap-1 text-[#E0E0E0] hover:text-[#A3FFD6]"><ArrowRight className="h-3 w-3 text-[#A3FFD6]" /> Track your baseline with the <Link to="/tools/net-worth" className="text-[#A3FFD6] hover:underline">Net Worth Calculator</Link></Link></li>
            </ul>
          </li>
        </ol>
      </section>
    </Layout>
  );
}