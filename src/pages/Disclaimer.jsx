import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Disclaimer() {
  return (
    <Layout>
      <SEO
        title="Disclaimer | TopMoneyTools"
        description="Educational estimates only — not personalized financial, investment, tax, or insurance advice. Read the TopMoneyTools disclaimer."
        path="/disclaimer"
        seoMeta={{
          url: "https://topmoneytools.com/disclaimer",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Disclaimer</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Disclaimer</h1>
        <p className="mt-3 font-mono text-[11px] text-[#889988]/80">Last updated: 22 July 2026</p>

        <div className="mt-8 space-y-8 text-[#889988] leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Educational purpose only</h2>
            <p className="mt-3">
              TopMoneyTools provides <strong className="text-[#E0E0E0]">general educational information</strong> and{" "}
              <strong className="text-[#E0E0E0]">illustrative calculators</strong>. Nothing on this site is personalized
              financial, investment, tax, legal, accounting, or insurance advice.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">No professional relationship</h2>
            <p className="mt-3">
              Using a calculator or reading an article does <strong className="text-[#E0E0E0]">not</strong> create a
              client, advisory, or fiduciary relationship with Andre Denis or TopMoneyTools.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Estimates, not guarantees</h2>
            <p className="mt-3">
              Results use standard formulas (for example, compound growth, loan amortization, simplified tax-bracket
              illustrations, or common planning rules of thumb such as variants of a withdrawal-rate framework).
            </p>
            <p className="mt-3">
              Results depend entirely on <strong className="text-[#E0E0E0]">your inputs and assumptions</strong>. Markets,
              tax rules, inflation, lender terms, insurance underwriting, and personal circumstances change. Actual
              outcomes will differ.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Not a substitute for licensed advice</h2>
            <p className="mt-3">
              Before making material decisions (buying property, refinancing, investing, retirement withdrawals,
              insurance coverage, tax filings), consult a <strong className="text-[#E0E0E0]">qualified professional</strong>{" "}
              licensed in your jurisdiction who can review your full situation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Jurisdictional differences</h2>
            <p className="mt-3">
              Examples and explanations may reference common North American concepts. Tax brackets, mortgage rules,
              student lending, and consumer protections vary by country, province, and state. Verify local rules.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">No endorsements</h2>
            <p className="mt-3">
              As of the last updated date, TopMoneyTools does not accept paid product endorsements or affiliate
              placements. Advertisements shown via Google AdSense (when enabled) are served by Google and are not
              recommendations by TopMoneyTools.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Accuracy and availability</h2>
            <p className="mt-3">
              We aim for clarity and reasonable accuracy but do not warrant that content or tools are complete, current,
              or error-free. The site may be unavailable or change without notice.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Limitation</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, TopMoneyTools and its operator are not responsible for decisions
              you make based on site content or tool outputs. See also our{" "}
              <Link to="/terms" className="text-[#A3FFD6] hover:underline">
                Terms of Use
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Questions</h2>
            <p className="mt-3">
              <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
                contact@topmoneytools.com
              </a>
              <br />
              <Link to="/contact" className="text-[#A3FFD6] hover:underline">
                https://www.topmoneytools.com/contact
              </Link>
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
