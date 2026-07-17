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
            TopMoneyTools is built for peace of mind. Your inputs never leave your device. We do not store your calculator values,
            track your activity, or ask you to create an account.
          </p>
          <p>
            Every calculator runs entirely in your browser. When you reload a page, the numbers you entered are gone by design.
            We do not receive a copy of your financial inputs because the calculations stay on your own device.
          </p>
          <p>
            The only third-party service present is Google AdSense (when ads are enabled). Google may use cookies and other identifiers
            to serve ads and measure performance. AdSense operates under its own privacy policy.
          </p>
          <p>
            You can opt out of personalized advertising by visiting
            <a href="https://www.google.com/settings/ads" className="text-[#A3FFD6] hover:underline"> Google Ads Settings</a>
            or <a href="https://www.aboutads.info/choices" className="text-[#A3FFD6] hover:underline">AboutAds.info</a>.
          </p>
          <p>
            We aim to keep the experience simple, private, and useful — so you can focus on understanding the numbers instead of worrying about your data.
          </p>
        </div>
      </section>
    </Layout>
  );
}