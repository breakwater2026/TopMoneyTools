import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, Compass, User, Target, Scale } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function About() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://topmoneytools.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://topmoneytools.com/about" },
    ],
  };

  return (
    <Layout>
      <SEO
        title="About TopMoneyTools — Free, Private Financial Calculators"
        description="TopMoneyTools is built by Andre Denis in Montreal, QC — a collection of free, privacy-first financial calculators and plain-English education guides. No accounts, no tracking, no data stored."
        path="/about"
        seoMeta={{
          url: "https://topmoneytools.com/about",
          type: "website",
        }}
        structuredData={[breadcrumbSchema]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Mission</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">About TopMoneyTools</h1>

        <div className="mt-6 space-y-4 text-[#889988] leading-relaxed">
          <p>
            TopMoneyTools is a privacy-first collection of free financial calculators and plain-English education
            guides. It was created to help people understand everyday money decisions — inflation, debt, mortgages,
            budgeting, retirement — without complexity, pressure, or data collection.
          </p>
          <p>
            Everything runs privately on your device. No accounts, no tracking, no data collection. Just calm, clear
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
          {/* Who runs it */}
          <div className="instrument-surface rounded-sm p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
              <User className="h-5 w-5" />
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Who runs TopMoneyTools</p>
            <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">Built by Andre Denis, Montreal, QC</h2>
            <p className="mt-2 text-sm text-[#889988]">
              TopMoneyTools is a one-person project built and maintained by Andre Denis, an automation architect and
              financial tools builder based in Montreal, Quebec. The site reflects a commitment to clear,
              honest financial information — free of upsells, affiliate pressure, or data harvesting.
            </p>
          </div>

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
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Neutrality & accuracy</h2>
              <p className="mt-2 text-sm text-[#889988]">
                TopMoneyTools is committed to neutrality and accuracy. All calculators use standard financial formulas
                applied consistently. The site contains no affiliate links, no product endorsements, and no paid
                placement. Educational content is written to inform, not to persuade.
              </p>
            </div>

            <div className="instrument-surface rounded-sm p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// How the tools work</h2>
              <p className="mt-2 text-sm text-[#889988]">Every calculation runs in your browser. No inputs are sent to a server, stored, or tracked. Refresh the page and your numbers are gone — by design.</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-[#889988]">
            TopMoneyTools serves free educational content supported by ad revenue from Google AdSense. We do not
            accept sponsored content, paid reviews, or affiliate arrangements. If you have questions, feedback, or
            suggestions, <Link to="/contact" className="text-[#A3FFD6] hover:underline">contact us</Link>.
          </p>
        </div>

        <p className="mt-8">
          <Link to="/start-here" className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">Start Here →</Link>
        </p>
      </section>
    </Layout>
  );
}
