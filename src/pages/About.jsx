import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About TopMoneyTools"
        description="TopMoneyTools is built for people who want to understand their finances without complexity or pressure — ten private calculators plus plain-English education, all on your device."
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
            TopMoneyTools is built for people who want to understand their finances without complexity or pressure. Our
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

        <div className="mt-8 instrument-surface rounded-sm p-5">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// How the tools work</h2>
          <p className="mt-2 text-sm text-[#889988]">Every calculation runs in your browser. No inputs are sent to a server, stored, or tracked. Refresh the page and your numbers are gone — by design.</p>
        </div>

        <p className="mt-8">
          <Link to="/start-here" className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">Start Here →</Link>
        </p>
      </section>
    </Layout>
  );
}