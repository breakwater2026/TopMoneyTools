import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Use | TopMoneyTools"
        description="Read the TopMoneyTools terms of use for our privacy-first calculator tools, content, and site guidelines."
        path="/terms"
        seoMeta={{
          url: "https://topmoneytools.com/terms",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Terms</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Terms of Use</h1>

        <div className="mt-6 space-y-4 text-[#889988] leading-relaxed">
          <p>
            Welcome to TopMoneyTools. By using this website, you agree to these terms of use. If you do not agree,
            please do not use the site.
          </p>
          <p>
            The tools and content on TopMoneyTools are for general informational purposes only. They are not personalized
            financial advice, and they do not replace the guidance of a licensed professional.
          </p>
          <p>
            All calculators run in your browser on your device. We do not collect or store your calculator inputs,
            personal financial details, or browsing activity beyond what is required for normal website operation.
          </p>
          <p>
            TopMoneyTools does not guarantee the accuracy, completeness, or suitability of any tool or content.
            You should verify important financial decisions with qualified advisors before acting.
          </p>
          <p>
            We reserve the right to modify or discontinue the website, tools, or content at any time without notice.
            The site may also include third-party advertising that is outside our direct control.
          </p>
          <p>
            If you have questions about these terms, contact us at <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">contact@topmoneytools.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
