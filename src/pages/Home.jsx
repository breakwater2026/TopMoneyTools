import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import Reveal from "@/components/Reveal";
import { LIVE_TOOLS } from "@/config/site.config";

const FAQS = [
  { q: "Are these calculators really free?", a: "Yes. All instruments are completely free — no account, paywall, or upsell." },
  { q: "Do you store any of my information?", a: "No. Every calculation runs in your browser. Inputs never leave your device and are never tracked." },
  { q: "How accurate are the results?", a: "Results use standard formulas (compound interest, amortization, the 4% rule). They are planning estimates, not personalized financial advice." },
  { q: "What is inflation, in simple terms?", a: "The rate at which prices rise over time — so the same money buys less in the future than today." },
  { q: "Why does my loan cost more than what I borrowed?", a: "Interest. Lenders charge a yearly percentage on what you owe, which adds up across the loan's life." },
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
        description="TopMoneyTools offers 25 free, private financial calculators for inflation, debt, mortgages, budgeting, taxes, and more — all running entirely in your browser with no accounts or tracking."
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
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#A3FFD6]">// The Navigator's Interface</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold leading-[1.05] tracking-tight text-[#E0E0E0] sm:text-6xl">
            A <span className="text-[#A3FFD6]">Tactical Financial Instrument</span> for Everyday Money Decisions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#889988] sm:text-lg">
            When prices rise, bills shift, or choices feel overwhelming, TopMoneyTools helps you navigate the journey. {" "}
            Powerful free calculators and clear guidance — all run entirely on your device. No accounts. No tracking.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/tools" className="rounded-sm bg-[#A3FFD6] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#081008] transition hover:bg-[#88E6B8] hover:instrument-glow">
              Open the Tool Hangar
            </Link>
            <Link to="/start-here" className="rounded-sm border-2 border-[#A3FFD6] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A3FFD6] transition hover:bg-[#A3FFD6] hover:text-[#081008]">
              Start Here
            </Link>
          </div>
        </div>
      </section>

      {/* Top banner */}
      <div className="border-y border-[#A3FFD6]/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <AdSlot slot="top" />
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
        <h2 id="tools-heading" className="mt-1 font-heading text-3xl font-bold tracking-tight text-[#E0E0E0]">The Power of Our Tools</h2>
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
        </div>
      </section>

      {/* Education preview */}
      <section aria-labelledby="edu-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
        <h2 id="edu-heading" className="mt-1 font-heading text-3xl font-bold tracking-tight text-[#E0E0E0]">Learn the Basics, One Clear Step at a Time</h2>
        <p className="mt-2 text-[#889988]">Plain-English guides on inflation, budgeting, loan terms, credit scores — pace yourself.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { e: "▮", t: "How Inflation Affects Your Daily Budget", d: "Why prices rise and how to stay ahead of them.", s: "how-inflation-affects-your-daily-budget" },
            { e: "▣", t: "Budgeting for Beginners (50/30/20)", d: "A simple method to bring balance and clarity to your spending.", s: "budgeting-for-beginners" },
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
            <p className="mt-2 font-heading text-xl font-semibold text-[#E0E0E0]">35 Plain-English Terms</p>
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
      {/* Footer ad lives in Layout <Footer /> — avoid double slot */}
    </Layout>
  );
}