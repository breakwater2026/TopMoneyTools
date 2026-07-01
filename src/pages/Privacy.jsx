import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | TopMoneyTools"
        description="TopMoneyTools does not store your inputs, track your activity, or require an account. All calculations run privately on your own device."
        path="/privacy"
        seoMeta={{
          url: "https://topmoneytools.com/privacy",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Privacy</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Your Privacy Comes First</h1>

        <div className="mt-6 space-y-4 leading-relaxed text-[#889988]">
          <p>
            TopMoneyTools is built for peace of mind. Your inputs never leave your device. We don't store your data,
            track your activity, or ask you to create an account.
          </p>
          <p>
            Every calculator runs entirely in your browser. When you reload a page, the numbers you entered are gone —
            by design. We have no database of your financial information because we never receive one.
          </p>
          <p>
            The only third-party service present is Google AdSense (when ads are enabled), which operates under its own
            privacy policy. We use placeholder slots until ads are configured; they then load Google's standard ad
            units.
          </p>
          <p>
            Just simple instruments that help you make better decisions — privately.
          </p>
        </div>
      </section>
    </Layout>
  );
}