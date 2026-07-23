import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About TopMoneyTools"
        description="TopMoneyTools is built by André Denis in Montreal — free calculators and plain-English education. Calculator inputs stay on your device; the site may be supported by AdSense as described in Privacy."
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
            </Link>{" "}
            (André Denis). The site is built for people who want to understand their finances without complexity or
            pressure. Our calculators and education center explain inflation, budgeting, loan terms, and credit scores
            in everyday language.
          </p>
          <p>
            Our tools are calibrated with standard formulas (compound interest, amortization, the 4% rule). They’re
            planning instruments — not personalized financial advice. For major decisions, talk to a licensed advisor.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          <section className="instrument-surface rounded-sm p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">
              // Privacy, ads, and what stays on your device
            </p>
            <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">
              Calculator inputs vs this website
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#889988]">
              <strong className="text-[#E0E0E0]">Calculator inputs</strong> run in your browser. We do not create
              calculator accounts, and we do not store those inputs on our servers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#889988]">
              <strong className="text-[#E0E0E0]">This website</strong> is free to use and supported by{" "}
              <strong className="text-[#E0E0E0]">Google AdSense</strong> when ads are enabled. Advertising technology may
              use cookies or similar identifiers as described in our Privacy Policy. That is separate from your tool
              inputs.
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-[#A3FFD6] hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#A3FFD6] hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A3FFD6] hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            <div className="instrument-surface rounded-sm p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Why TopMoneyTools</p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">Fast financial clarity</h2>
              <p className="mt-2 text-sm text-[#889988]">
                Turn complex numbers into simple outcomes so you can act with confidence.
              </p>
            </div>
            <div className="instrument-surface rounded-sm p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Why TopMoneyTools</p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">Private by design</h2>
              <p className="mt-2 text-sm text-[#889988]">
                No accounts and no server-side storage of calculator inputs. Ads, if shown, are disclosed in Privacy.
              </p>
            </div>
            <div className="instrument-surface rounded-sm p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A3FFD6]/10 text-[#A3FFD6]">
                <Compass className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Why TopMoneyTools</p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-[#E0E0E0]">Built for everyday use</h2>
              <p className="mt-2 text-sm text-[#889988]">
                Designed for real people with real questions about budgets, loans, retirement, and inflation.
              </p>
            </div>
          </section>

          <section className="instrument-surface rounded-sm p-5">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Editorial standards</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#889988]">
              <li>Calculators use documented, standard formulas applied consistently.</li>
              <li>Articles explain concepts in plain language with practical examples.</li>
              <li>We do not accept sponsored articles, paid reviews, or affiliate commissions.</li>
              <li>For major life decisions, use licensed professionals in addition to these tools.</li>
            </ul>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="instrument-surface rounded-sm p-5">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// How the tools work</h2>
              <p className="mt-2 text-sm text-[#889988]">
                Every calculation runs in your browser. Calculator inputs are not sent to our servers for storage or
                profiling. Refresh the page and on-page numbers are gone — by design.
              </p>
            </div>

            <div className="instrument-surface rounded-sm p-5">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Need help or feedback?</h2>
              <p className="mt-2 text-sm text-[#889988]">
                If you have questions, want to suggest a new calculator, or want help interpreting a result, we’re here
                for you.
              </p>
              <p className="mt-4 text-sm text-[#889988]">
                Email{" "}
                <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
                  contact@topmoneytools.com
                </a>{" "}
                or visit our{" "}
                <Link to="/contact" className="text-[#A3FFD6] hover:underline">
                  Contact page
                </Link>
                .
              </p>
              <p className="mt-4 text-sm text-[#889988]">
                These tools are planning instruments only, not personalized financial advice. For major decisions,
                consult a licensed advisor.
              </p>
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
          <Link to="/disclaimer" className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">
            Disclaimer →
          </Link>
        </p>
      </section>
    </Layout>
  );
}
