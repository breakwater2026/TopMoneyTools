import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About TopMoneyTools"
        description="TopMoneyTools is built for people who want to understand their finances without complexity or pressure — private calculators plus plain-English education, all on your device."
        path="/about"
        seoMeta={{
          url: "https://topmoneytools.com/about",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Mission</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">About TopMoneyTools</h1>

        <div className="mt-6 space-y-4 text-[#889988] leading-relaxed">
          <p>
            TopMoneyTools is published from Montreal, Quebec, Canada, and edited by{" "}
            <Link to="/the-editor" className="text-[#A3FFD6] hover:underline">
              The Editor
            </Link>
            . The site is built for people who want to understand their finances without complexity or pressure. Our
            calculators and education center explain inflation, budgeting, loan terms, and credit scores in everyday
            language.
          </p>
          <p>
            Everything runs privately on your device — no accounts, no tracking, no data collection. Just calm, clear
            financial guidance you can trust. Whether you're planning a monthly budget or comparing loan options, we
            help you make decisions with clarity and comfort.
          </p>
          <p>
            Our tools are calibrated with standard formulas (compound interest, amortization, the 4% rule). They're
            planning instruments — not personalized financial advice. For major decisions, talk to a licensed
            advisor.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="instrument-surface rounded-sm p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Why TopMoneyTools</p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">Fast financial clarity</h2>
              <p className="mt-2 text-sm text-[#889988]">Turn complex numbers into simple outcomes so you can act with confidence.</p>
            </div>
            <div className="instrument-surface rounded-sm p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Why TopMoneyTools</p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">Private by design</h2>
              <p className="mt-2 text-sm text-[#889988]">No accounts, no tracking, and no storage of your calculator inputs — your results stay on your device.</p>
            </div>
            <div className="instrument-surface rounded-sm p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <Compass className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Why TopMoneyTools</p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">Built for everyday use</h2>
              <p className="mt-2 text-sm text-[#889988]">Designed for real people with real questions about budgets, loans, retirement, and inflation.</p>
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="instrument-surface rounded-sm p-5">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// How the tools work</h2>
              <p className="mt-2 text-sm text-[#889988]">Every calculation runs in your browser. No inputs are sent to a server, stored, or tracked. Refresh the page and your numbers are gone — by design.</p>
            </div>

            <div className="instrument-surface rounded-sm p-5">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Need help or feedback?</h2>
              <p className="mt-2 text-sm text-[#889988]">If you have questions, want to suggest a new calculator, or want help interpreting a result, we’re here for you.</p>
              <p className="mt-4 text-sm text-[#889988]">Email <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">contact@topmoneytools.com</a> or visit our <a href="/contact" className="text-[#A3FFD6] hover:underline">Contact page</a>.</p>
              <p className="mt-4 text-sm text-[#889988]">These tools are planning instruments only, not personalized financial advice. For major decisions, consult a licensed advisor.</p>
            </div>
          </div>
        </div>

        <p className="mt-8 flex flex-wrap gap-4">
          <Link to="/the-editor" className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">
            About the Editor →
          </Link>
          <Link to="/start-here" className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">
            Start Here →
          </Link>
        </p>
      </section>
    </Layout>
  );
}