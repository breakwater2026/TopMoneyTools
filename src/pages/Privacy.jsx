import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | TopMoneyTools"
        description="TopMoneyTools does not store your inputs, track your activity, or require an account. All calculations run privately on your own device. Privacy policy covers cookies, analytics, and AdSense."
        path="/privacy"
        seoMeta={{
          url: "https://topmoneytools.com/privacy",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Privacy</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Your Privacy Comes First</h1>

        <div className="mt-6 space-y-6 leading-relaxed text-[#889988]">
          {/* Core privacy promise */}
          <div className="rounded-sm border border-[#A3FFD6]/10 bg-void/40 p-5">
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Our core promise</h2>
            <p className="mt-2 text-sm">
              TopMoneyTools is built for peace of mind. Your inputs never leave your device. We do not store your
              calculator values, track your activity, or ask you to create an account. Every calculator runs entirely
              in your browser. When you reload a page, the numbers you entered are gone by design.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Cookies</h2>
            <p className="mt-1">
              TopMoneyTools itself does not set cookies for tracking or analytics purposes. However, Google AdSense,
              our third-party advertising partner, may set cookies and use similar technologies to serve relevant ads,
              measure ad performance, and prevent fraud. These cookies are controlled by Google, not by us.
            </p>
            <p className="mt-2">
              You can manage your cookie preferences through your browser settings or opt out of personalized
              advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" className="text-[#A3FFD6] hover:underline">Google Ads Settings</a>{" "}
              or{" "}<a href="https://www.aboutads.info/choices" className="text-[#A3FFD6] hover:underline">AboutAds.info</a>.
            </p>
          </div>

          {/* Analytics */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Analytics</h2>
            <p className="mt-1">
              TopMoneyTools does not use Google Analytics or any third-party analytics service. We do not track
              pageviews, clicks, or user behavior. The only external service we use is Google AdSense for displaying
              advertisements that support the free operation of the site.
            </p>
          </div>

          {/* Future Ad Usage */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Future ad usage</h2>
            <p className="mt-1">
              If we add additional advertising partners in the future, we will update this policy to disclose their
              identity, data practices, and any new cookie or tracking mechanisms introduced. We will never sell your
              data or permit advertisers to access your calculator inputs.
            </p>
          </div>

          {/* Data retention */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Data retention</h2>
            <p className="mt-1">
              Because we do not collect any personal data, calculator inputs, or browsing activity on our servers,
              there is nothing to retain. Your cookie consent preference is stored locally in your browser using
              localStorage and can be cleared at any time.
            </p>
          </div>

          {/* Third-party vendors */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Third-party vendors</h2>
            <p className="mt-1">
              The following third-party services may be used on this website:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li><strong>Google AdSense</strong> — displays advertisements. Google may use cookies and device identifiers to serve personalized ads and measure performance. See Google's{" "}<a href="https://policies.google.com/privacy" className="text-[#A3FFD6] hover:underline">Privacy Policy</a>.</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Questions</h2>
            <p className="mt-1">
              If you have questions about this privacy policy, contact us at{" "}
              <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">contact@topmoneytools.com</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
