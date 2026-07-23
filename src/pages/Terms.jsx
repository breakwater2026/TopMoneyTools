import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Use | TopMoneyTools"
        description="Terms of use for TopMoneyTools free financial calculators and educational content. Educational only — not personalized advice."
        path="/terms"
        seoMeta={{
          url: "https://topmoneytools.com/terms",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Terms</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Terms of Use</h1>
        <div className="mt-3 space-y-1 font-mono text-[11px] text-[#889988]/80">
          <p>Last updated: 22 July 2026</p>
          <p>Operator: Andre Denis, Montréal, Québec, Canada</p>
          <p>
            Contact:{" "}
            <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
              contact@topmoneytools.com
            </a>
          </p>
        </div>

        <div className="mt-8 space-y-8 text-[#889988] leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">1. Acceptance</h2>
            <p className="mt-3">
              By accessing or using TopMoneyTools, you agree to these Terms and our{" "}
              <Link to="/privacy" className="text-[#A3FFD6] hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
                Disclaimer
              </Link>
              . If you do not agree, do not use the site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">2. What the service is</h2>
            <p className="mt-3">TopMoneyTools provides:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Browser-based financial calculators for education and personal planning estimates</li>
              <li>Plain-English articles, glossary entries, and curated resource links</li>
            </ul>
            <p className="mt-3">
              The service is provided <strong className="text-[#E0E0E0]">free of charge</strong>, supported by
              advertising (Google AdSense when enabled). Features may change or be discontinued at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">3. Not professional advice</h2>
            <p className="mt-3">
              Content and tool outputs are <strong className="text-[#E0E0E0]">educational and informational only</strong>.
              They are <strong className="text-[#E0E0E0]">not</strong>:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Personalized financial, investment, tax, accounting, legal, or insurance advice</li>
              <li>An offer to sell securities or financial products</li>
              <li>A substitute for a licensed professional who knows your full situation</li>
            </ul>
            <p className="mt-3">
              See the full{" "}
              <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
                Disclaimer
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">4. Eligibility</h2>
            <p className="mt-3">
              You must be able to form a binding contract in your jurisdiction. The site is not directed at children
              under 13.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">5. Acceptable use</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Misuse the site (scraping that harms service, attacking infrastructure, injecting malware)</li>
              <li>Attempt to reverse-engineer in order to harm the service or bypass security</li>
              <li>Use the site to violate law or third-party rights</li>
              <li>Misrepresent tool outputs as certified, audited, or personalized professional advice</li>
              <li>
                Interfere with advertising in ways that violate Google AdSense / publisher rules (including invalid
                clicks)
              </li>
              <li>Use automated means to generate artificial traffic or ad interactions</li>
            </ul>
            <p className="mt-3">We may suspend access for abuse.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">6. Intellectual property</h2>
            <p className="mt-3">
              Unless otherwise noted, site design, branding, text, graphics, and code are owned by Andre Denis /
              TopMoneyTools or used under license. You may:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use tools and read content for personal, non-commercial education</li>
              <li>Link to public pages fairly and accurately</li>
            </ul>
            <p className="mt-3">
              You may not copy the site wholesale, resell the tools as your product, or remove attribution without
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">7. Third-party services and links</h2>
            <p className="mt-3">
              Ads are provided by Google when enabled. External resource links are for convenience. We do not control
              third-party sites and are not responsible for their content or practices.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">8. No warranties</h2>
            <p className="mt-3 uppercase tracking-wide text-[#E0E0E0]">
              The site and tools are provided “as is” and “as available.”
            </p>
            <p className="mt-3">
              To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a
              particular purpose, accuracy, and non-infringement. Calculations depend on your inputs and simplifying
              assumptions. Results may contain errors.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">9. Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by applicable law, Andre Denis and TopMoneyTools will not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or
              opportunities, arising from your use of the site or reliance on any calculation or article.
            </p>
            <p className="mt-3">
              If liability cannot be excluded, it is limited to the greater of (a) CAD $0 (the price you paid us for the
              free service) or (b) the minimum amount required by mandatory law.
            </p>
            <p className="mt-3">
              <strong className="text-[#E0E0E0]">Consumer rights:</strong> Nothing in these Terms limits rights that
              cannot be waived under Québec consumer protection law or other mandatory rules.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">10. Indemnity</h2>
            <p className="mt-3">
              You agree to indemnify and hold harmless Andre Denis / TopMoneyTools from claims arising out of your misuse
              of the site or violation of these Terms, to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">11. Privacy</h2>
            <p className="mt-3">
              Personal information is handled as described in the{" "}
              <Link to="/privacy" className="text-[#A3FFD6] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">12. Changes</h2>
            <p className="mt-3">
              We may update these Terms by posting a new version with a revised date. Continued use after changes
              constitutes acceptance, except where mandatory law requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">13. Governing law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of the Province of Québec and the federal laws of Canada applicable
              therein, without regard to conflict-of-law rules that would apply another jurisdiction’s laws. Courts of
              Québec (district of Montréal) shall have jurisdiction, subject to mandatory consumer protections that
              require otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">14. Contact</h2>
            <p className="mt-3">
              <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
                contact@topmoneytools.com
              </a>
              <br />
              <Link to="/contact" className="text-[#A3FFD6] hover:underline">
                topmoneytools.com/contact
              </Link>
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
