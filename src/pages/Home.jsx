import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import Reveal from "@/components/Reveal";
import { LIVE_TOOLS, FUTURE_TOOLS, GLOSSARY } from "@/config/site.config";

const FAQS = [
  { q: "Are these calculators really free?", a: "Yes. Every calculator is free to use and does not require an account, subscription, or payment to unlock the basic tools." },
  { q: "Do you store any of my information?", a: "No. Every calculation runs in your browser. Inputs remain on your device and are not stored or shared by TopMoneyTools." },
  { q: "Is this personalized financial advice?", a: "No. These tools are educational planning estimates. They are useful for understanding likely outcomes, but they do not replace professional advice for your specific situation." },
  { q: "How accurate are the results?", a: "Results use standard formulas such as compound growth and loan amortization. They are estimates, so it is wise to double-check assumptions and important decisions with a qualified professional." },
  { q: "What should I use if I do not know my exact numbers?", a: "Use reasonable estimates and compare a few scenarios. The goal is to understand the range of outcomes, not to pretend the math is more precise than it is." },
];

const VALUES = [
  {
    icon: ShieldCheck,
    t: "Private by Design",
    d: "Your inputs never leave your device. No accounts, no tracking, no data collection — ever.",
  },
  {
    icon: Sparkles,
    t: "Plain Language",
    d: "Every tool and article is written in everyday words with examples that map to your life.",
  },
  {
    icon: Compass,
    t: "Built for Real Life",
    d: "From inflation to loan terms, we focus on the financial questions people face every day.",
  },
];

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TopMoneyTools",
  "url": "https://topmoneytools.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://topmoneytools.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Privacy-First Financial Calculators & Plain-English Guides"
        description="TopMoneyTools offers 10 free, private financial calculators for inflation, debt, mortgages, budgeting, and more — all running entirely in your browser with no accounts or tracking."
        seoMeta={{
          url: "https://topmoneytools.com/",
          type: "website",
        }}
        structuredData={[websiteStructuredData]}
      />

      {/* Hero — full-bleed */}
      <section className="relative overflow-hidden bg-obsidian">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 50% 30%, hsl(158 100% 82% / 0.18) 0, transparent 55%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-28">
          <h1 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold leading-[1.05] tracking-tight text-[#E0E0E0] sm:text-6xl">
            Your <span className="text-[#A3FFD6]">personal financial</span> guide for everyday money decisions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#889988] sm:text-lg">
            When prices rise, bills shift, or choices feel overwhelming, TopMoneyTools helps you understand the numbers.
            Ten free calculators and plain-English guides run entirely in your browser — no accounts, no tracking, no hidden data collection.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/tools" className="rounded-sm bg-[#A3FFD6] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#081008] transition hover:bg-[#88E6B8] hover:instrument-glow">
              Explore the calculators
            </Link>
            <Link to="/start-here" className="rounded-sm border-2 border-[#A3FFD6] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A3FFD6] transition hover:bg-[#A3FFD6] hover:text-[#081008]">
              Start here
            </Link>
          </div>
        </div>
      </section>

      {/* Top banner */}
      <div className="border-y border-[#A3FFD6]/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#E0E0E0] sm:text-4xl">
            Money Feeling Complicated? We Map It.
          </h2>
          <p className="mt-4 text-[#889988]">
            Whether you're comparing loans, planning a budget, or trying to understand why groceries cost more,
            TopMoneyTools gives you calm, clear guidance — calibrated for real, everyday decisions.
          </p>
        </Reveal>
      </section>

      {/* Trust and guidance */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="rounded-sm border border-[#A3FFD6]/15 bg-[#0c1610]/80 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// How these tools work</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-[#E0E0E0]">Built for understanding, not hype</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#889988]">
                Each calculator runs locally in your browser using standard financial formulas. The purpose is simple: help you understand likely outcomes for everyday decisions such as debt, inflation, retirement, and budgeting.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#889988]">
                <li>• Clear, plain-English explanations alongside every result.</li>
                <li>• No accounts, no saved financial history, and no hidden tracking.</li>
                <li>• Best used as a planning guide, not a promise of what will happen in your life.</li>
              </ul>
            </div>
            <div className="rounded-sm border border-[#A3FFD6]/10 bg-void/70 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Start with what matters</p>
              <ul className="mt-4 space-y-2 text-sm text-[#889988]">
                <li><Link to="/tools/food-inflation" className="text-[#A3FFD6] hover:underline">Food Inflation Calculator</Link></li>
                <li><Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost Calculator</Link></li>
                <li><Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link></li>
                <li><Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">Emergency Fund Calculator</Link></li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link to="/education" className="rounded-sm border border-[#A3FFD6]/20 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:bg-[#A3FFD6]/10">Read articles</Link>
                <Link to="/glossary" className="rounded-sm border border-[#A3FFD6]/20 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:bg-[#A3FFD6]/10">Browse glossary</Link>
                <Link to="/resources" className="rounded-sm border border-[#A3FFD6]/20 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:bg-[#A3FFD6]/10">See resources</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-label="Why TopMoneyTools" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.t}>
                <div className="instrument-surface h-full rounded-sm p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#889988]">{v.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* The Tool Hangar — 2x4 tactical grid (PRD §3.I) */}
      <section aria-labelledby="tools-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// The Tool Hangar</p>
        <h2 id="tools-heading" className="mt-1 font-heading text-3xl font-bold tracking-tight text-[#E0E0E0]">The Power of Ten</h2>
        <p className="mt-2 text-[#889988]">Free, private instruments that run entirely in your browser. No accounts, no data stored.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LIVE_TOOLS.map((t) => (
            <Link
              key={t.slug}
              to={`/tools/${t.slug}`}
              className="group flex flex-col rounded-sm bg-obsidian p-5 transition hover:-translate-y-0.5 hover:bg-void hover:instrument-glow"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{t.num}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A3FFD6]/20 bg-[#A3FFD6]/10 text-[#A3FFD6]">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{t.name.split(" ")[0].slice(0, 1)}</span>
                </div>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#E0E0E0]">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm text-[#889988]">{t.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]">
                Open Instrument <ArrowRight className="h-3 w-3 transition group-hover:gap-2" />
              </span>
            </Link>
          ))}

          {/* Future / scaffolded tools */}
          {FUTURE_TOOLS.map((t) => (
            <Link
              key={t.slug}
              to="/tools"
              className="flex flex-col rounded-sm border border-dashed border-[#A3FFD6]/20 bg-obsidian/50 p-5 opacity-60"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{t.num}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#E0E0E0]">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm text-[#889988]">{t.short}</p>
              <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#889988]">// In Development</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Mid-content ad */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AdSlot slot="mid" className="h-[120px]" />
      </div>

      {/* Education preview */}
      <section aria-labelledby="edu-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
        <h2 id="edu-heading" className="mt-1 font-heading text-3xl font-bold tracking-tight text-[#E0E0E0]">Learn the Basics, One Clear Step at a Time</h2>
        <p className="mt-2 text-[#889988]">Plain-English guides on inflation, budgeting, loan terms, credit scores — pace yourself.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { e: "▮", t: "How Inflation Affects Your Daily Budget", d: "Why prices rise and how to stay ahead of them.", s: "how-inflation-affects-your-daily-budget" },
            { e: "▣", t: "Budgeting for Beginners (50/30/20)", d: "A simple method to bring balance and clarity to your spending.", s: "budgeting-for-beginners-50-30-20-rule-explained" },
            { e: "◈", t: "How to Compare Loans", d: "The three numbers that matter most when choosing a loan.", s: "how-to-compare-loans" },
          ].map((a) => (
            <Link key={a.s} to={`/education/${a.s}`} className="group instrument-surface rounded-sm p-5 transition hover:instrument-glow">
              <span aria-hidden="true" className="font-mono text-2xl text-[#A3FFD6]">{a.e}</span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-[#E0E0E0]">{a.t}</h3>
              <p className="mt-1 text-sm text-[#889988]">{a.d}</p>
              <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] group-hover:gap-2">Read article <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/education" className="rounded-sm bg-[#A3FFD6] px-5 py-2.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#081008]">Explore All Articles</Link>
          <Link to="/start-here" className="rounded-sm border-2 border-[#A3FFD6] px-5 py-2.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A3FFD6] hover:bg-[#A3FFD6] hover:text-[#081008]">New? Start Here →</Link>
        </div>
      </section>

      {/* Glossary + Resources previews */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Link to="/glossary" className="instrument-surface rounded-sm p-6 transition hover:instrument-glow">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Glossary</h3>
            <p className="mt-2 font-heading text-xl font-semibold text-[#E0E0E0]">{GLOSSARY.length} Plain-English Terms</p>
            <p className="mt-2 text-sm text-[#889988]">Every financial word used across our tools, defined simply.</p>
            <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]">View glossary <ArrowRight className="h-3 w-3" /></span>
          </Link>
          <Link to="/resources" className="instrument-surface rounded-sm p-6 transition hover:instrument-glow">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Resources</h3>
            <p className="mt-2 font-heading text-xl font-semibold text-[#E0E0E0]">Trusted External References</p>
            <p className="mt-2 text-sm text-[#889988]">Government references and curated guides for confident decisions.</p>
            <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]">Browse resources <ArrowRight className="h-3 w-3" /></span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Pre-Flight Checks</p>
          <h2 id="faq-heading" className="mt-1 text-center font-heading text-3xl font-bold text-[#E0E0E0]">Common Questions, Plain Answers</h2>
        </Reveal>
        <dl className="mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={i}>
              <div className="instrument-surface rounded-sm p-5">
                <dt className="font-heading font-semibold text-[#E0E0E0]">{f.q}</dt>
                <dd className="mt-1 text-sm text-[#889988]">{f.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Privacy block */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Privacy</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#E0E0E0]">Your Privacy Comes First</h2>
          <p className="mt-3 text-[#889988]">
            TopMoneyTools is built for peace of mind. Inputs never leave your device. We don't store your data, track
            your activity, or ask you to create an account. Just simple instruments that help you make better decisions,
            privately.
          </p>
        </Reveal>
      </section>

      {/* Support callout */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <div className="instrument-surface rounded-sm border border-[#A3FFD6]/10 p-6 text-[#889988]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Support</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#E0E0E0]">Need a hand with a calculator?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#889988]">
                Reach out if you want help understanding a result, want a new tool, or have feedback about how the site works.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#A3FFD6] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#081008] transition hover:bg-[#88E6B8]"
              >
                Contact us
              </Link>
              <Link
                to="/privacy"
                className="inline-flex items-center justify-center rounded-sm border border-[#A3FFD6]/30 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10"
              >
                View privacy policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer banner ad */}
      {/* Trust section */}
      <section className="border-t border-[#A3FFD6]/10 bg-obsidian py-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">Built with care</p>
          <p className="mt-4 text-sm leading-relaxed text-[#889988]">
            Updated regularly. Built for educational use. Inputs stay on your device.
            TopMoneyTools is a free, privacy-first resource for everyday financial decisions.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <AdSlot slot="footer" className="h-[60px]" />
      </div>
    </Layout>
  );
}