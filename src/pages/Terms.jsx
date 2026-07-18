import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Use | TopMoneyTools"
        description="Read the TopMoneyTools terms of use for our privacy-first calculator tools, content, and site guidelines. Includes liability disclaimer, calculator accuracy, and no financial advice."
        path="/terms"
        seoMeta={{
          url: "https://topmoneytools.com/terms",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Terms</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Terms of Use</h1>

        <div className="mt-6 space-y-6 text-[#889988] leading-relaxed">
          <p>
            Welcome to TopMoneyTools. By using this website, you agree to these terms of use. If you do not agree,
            please do not use the site.
          </p>

          {/* Purpose of the site */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Purpose of this site</h2>
            <p className="mt-1">
              TopMoneyTools provides free, educational financial calculators and articles to help you
              understand everyday money decisions. Everything on this site is for informational and
              educational purposes only. It is not personalized financial advice, and it does not
              replace consultation with a qualified financial professional.
            </p>
          </div>

          {/* Liability disclaimer */}
          <div className="rounded-sm border border-[#FFD6A3]/20 bg-[#1a1008]/60 p-5">
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Liability disclaimer</h2>
            <p className="mt-2 text-sm">
              TopMoneyTools provides its tools and content on an "as is" and "as available" basis without any warranty
              of accuracy, completeness, or fitness for a particular purpose. In no event shall TopMoneyTools or its
              operator be liable for any direct, indirect, incidental, or consequential damages arising from your use
              of the site or reliance on any information provided.
            </p>
          </div>

          {/* Calculator accuracy */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Calculator accuracy disclaimer</h2>
            <p className="mt-1">
              All calculators use standard financial formulas (compound interest, amortization, the 4% rule, etc.) to
              produce estimates based on the numbers you provide. They do not account for every variable that affects
              real-world outcomes — including taxes, fees, market volatility, inflation changes, and your personal
              circumstances. Results should be treated as planning estimates for comparison, not as precise predictions
              or binding calculations.
            </p>
          </div>

          {/* No financial advice */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">No financial advice disclaimer</h2>
            <p className="mt-1">
              The content, tools, and information on TopMoneyTools are for general informational and educational
              purposes only. They do not constitute personalized financial, legal, tax, or investment advice.
              You should consult a qualified, licensed professional for advice tailored to your specific situation.
              Nothing on this website creates a fiduciary relationship between you and TopMoneyTools.
            </p>
          </div>

          {/* Site operation */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Site operation</h2>
            <p className="mt-1">
              All calculators run in your browser on your device. We do not collect or store your calculator inputs,
              personal financial details, or browsing activity beyond what is required for normal website operation.
              We reserve the right to modify or discontinue the website, tools, or content at any time without notice.
              The site may include third-party advertising that is outside our direct control.
            </p>
          </div>

          <p>
            If you have questions about these terms, contact us at <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">contact@topmoneytools.com</a>.
          </p>

          {/* Governing law */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Governing law</h2>
            <p className="mt-1">
              These terms are governed by the laws of the Province of Quebec and the applicable laws
              of Canada. Any disputes arising from the use of this site shall be resolved in the
              courts of Montreal, Quebec, Canada.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
