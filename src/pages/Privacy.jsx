import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LegalDoc from "@/components/content/LegalDoc";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | TopMoneyTools"
        description="Calculator inputs stay on your device. How TopMoneyTools handles contact messages, technical logs, cookies, and Google AdSense when ads are enabled."
        path="/privacy"
        seoMeta={{
          url: "https://topmoneytools.com/privacy",
          type: "website",
        }}
      />

      <LegalDoc
        kicker="// Privacy"
        title="Privacy Policy"
        lastUpdated="22 July 2026"
        meta={
          <>
            <p>Operator: André Denis, operating TopMoneyTools · Montreal, Quebec, Canada</p>
            <p>
              Contact:{" "}
              <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
                contact@topmoneytools.com
              </a>
            </p>
          </>
        }
      >
          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">1. Summary</h2>
            <p className="mt-3">
              TopMoneyTools provides free financial calculators and educational articles.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[#E0E0E0]">Calculator inputs</strong> (amounts, rates, dates you type into tools)
                are processed <strong className="text-[#E0E0E0]">in your browser</strong>. We do not operate user accounts
                for the calculators, and we do not intentionally collect or store those inputs on our servers.
              </li>
              <li>
                <strong className="text-[#E0E0E0]">This website may still use limited technical data and third-party
                services</strong> (including <strong className="text-[#E0E0E0]">Google AdSense</strong> when ads are
                enabled) as described below. That is separate from your calculator inputs.
              </li>
            </ul>
            <p className="mt-3">
              If anything on the marketing pages seems absolute (“no tracking ever”), this Privacy Policy controls.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">2. Who we are</h2>
            <p className="mt-3">
              TopMoneyTools is a one-person project built and maintained by André Denis in Montreal, Quebec. For privacy
              questions:{" "}
              <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
                contact@topmoneytools.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">3. What we do not collect (calculators)</h2>
            <p className="mt-3">When you use a calculator:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Inputs are evaluated locally in your browser using client-side code.</li>
              <li>We do not require an account to use the tools.</li>
              <li>
                We do not intentionally transmit your calculator field values to our servers for storage, profiling, or
                sale.
              </li>
              <li>
                Reloading or leaving the page clears on-page inputs in the normal browser session (unless your browser
                itself restores form state).
              </li>
            </ul>
            <p className="mt-3">We cannot see the specific numbers you enter into a tool under this design.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">4. What we may collect or process</h2>

            <h3 className="mt-5 font-heading text-lg font-semibold text-[#E0E0E0]">4.1 Information you choose to send us</h3>
            <p className="mt-2">If you email us or use a contact form, we receive:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your email address and message content</li>
              <li>Any other details you include</li>
            </ul>
            <p className="mt-2">We use this only to respond and improve the site. We do not sell this information.</p>

            <h3 className="mt-5 font-heading text-lg font-semibold text-[#E0E0E0]">4.2 Technical and server data</h3>
            <p className="mt-2">Like most websites, our hosting provider may automatically process:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>IP address, date/time, requested URL, referrer, user agent</li>
              <li>Basic error and security logs</li>
            </ul>
            <p className="mt-2">
              This is used for security, debugging, and reliability—not to rebuild your calculator scenarios.
            </p>

            <h3 className="mt-5 font-heading text-lg font-semibold text-[#E0E0E0]">
              4.3 Cookies and similar technologies on the website
            </h3>
            <p className="mt-2">The site may use:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-[#E0E0E0]">Essential</strong> cookies or local storage needed for site function
                (e.g., UI preferences, consent choices)
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Advertising</strong> cookies/identifiers when Google AdSense is active
                (see §5)
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Analytics</strong> cookies only if we enable an analytics product (if
                enabled, we will name it here and update this date)
              </li>
            </ul>
            <p className="mt-2">
              You can control cookies through your browser settings. Blocking some cookies may affect ads or preferences.
            </p>

            <h3 className="mt-5 font-heading text-lg font-semibold text-[#E0E0E0]">4.4 Local storage / browser storage</h3>
            <p className="mt-2">
              Tools may use temporary browser memory or local storage solely on your device to power the interface. That
              data stays on your device unless you clear site data.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">5. Google AdSense and advertising</h2>
            <p className="mt-3">
              TopMoneyTools is supported by <strong className="text-[#E0E0E0]">Google AdSense</strong> display advertising
              when ads are enabled. We do not sell your calculator inputs. We do not run affiliate product placements as
              of the last updated date.
            </p>
            <p className="mt-3">
              When AdSense is enabled, <strong className="text-[#E0E0E0]">Google</strong> and its partners may use cookies
              or similar technologies to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Serve ads on this site</li>
              <li>Measure ad performance</li>
              <li>
                (Where allowed) personalize ads based on interests or prior visits to this or other sites
              </li>
            </ul>
            <p className="mt-3">Google’s use of information is governed by Google’s policies, including:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  className="text-[#A3FFD6] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  className="text-[#A3FFD6] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How Google uses information from sites that use our services
                </a>
              </li>
            </ul>
            <p className="mt-3">
              <strong className="text-[#E0E0E0]">Opt out of personalized ads:</strong>
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <a
                  href="https://adssettings.google.com/"
                  className="text-[#A3FFD6] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>
              </li>
              <li>
                <a
                  href="https://www.aboutads.info/choices/"
                  className="text-[#A3FFD6] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AboutAds / NAI opt-out
                </a>{" "}
                (where available)
              </li>
            </ul>
            <p className="mt-3">
              We may serve <strong className="text-[#E0E0E0]">non-personalized ads</strong> in some regions or
              configurations. Even non-personalized ads can use limited technical data (for example, rough location
              derived from IP, or anti-fraud signals).
            </p>
            <h3 className="mt-5 font-heading text-lg font-semibold text-[#E0E0E0]">
              Consent (EEA/UK and similar regimes)
            </h3>
            <p className="mt-2">
              If you visit from a region that requires consent for non-essential cookies, we will present a consent
              mechanism where required and honour your choice to the extent technically feasible.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">6. How we use information</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
                    <th className="py-2 pr-4 font-semibold">Source</th>
                    <th className="py-2 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#A3FFD6]/10">
                    <td className="py-2 pr-4">Contact messages</td>
                    <td className="py-2">Support, feedback, abuse reports</td>
                  </tr>
                  <tr className="border-b border-[#A3FFD6]/10">
                    <td className="py-2 pr-4">Server logs</td>
                    <td className="py-2">Security, uptime, diagnostics</td>
                  </tr>
                  <tr className="border-b border-[#A3FFD6]/10">
                    <td className="py-2 pr-4">AdSense / ad tech</td>
                    <td className="py-2">Fund free tools and education via ads</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Consent records</td>
                    <td className="py-2">Demonstrate compliance where required</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              We do <strong className="text-[#E0E0E0]">not</strong> sell personal information. We do{" "}
              <strong className="text-[#E0E0E0]">not</strong> use calculator inputs for advertising profiles because we
              do not receive those inputs as account data.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">7. Legal bases (where applicable)</h2>
            <p className="mt-3">Depending on your location, processing may rely on:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-[#E0E0E0]">Legitimate interests</strong> (site security, basic operations,
                answering email)
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Consent</strong> (non-essential cookies/ads where required)
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Contract / pre-contract steps</strong> (if you request a specific
                support action)
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Legal obligation</strong> (if we must retain or disclose information)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">8. Sharing</h2>
            <p className="mt-3">We share data only with:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-[#E0E0E0]">Hosting / infrastructure</strong> providers that process technical
                traffic
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Google</strong> (AdSense and related ad services) when ads are enabled
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Professional advisors</strong> or authorities if legally required
              </li>
              <li>
                A successor operator only if the project is transferred, under equivalent privacy commitments
              </li>
            </ul>
            <p className="mt-3">We do not sell mailing lists or financial profiles.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">9. Retention</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[#E0E0E0]">Emails:</strong> retained as long as needed to handle the conversation
                and legitimate records, then deleted or archived with limited access
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Server logs:</strong> retained for a limited operational period
                (typically weeks to months) unless needed for security investigations
              </li>
              <li>
                <strong className="text-[#E0E0E0]">Calculator inputs:</strong> not retained on our servers by design
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">10. Security</h2>
            <p className="mt-3">
              We use HTTPS and standard hosting security practices. No method of transmission or storage is 100% secure.
              Because calculator logic runs in your browser, protecting your device (updates, malware protection)
              matters.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">11. Children</h2>
            <p className="mt-3">
              TopMoneyTools is not directed at children under 13 (or the minimum age in your jurisdiction). We do not
              knowingly collect personal information from children. Contact us if you believe a child provided personal
              data via email.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">12. International visitors</h2>
            <p className="mt-3">
              The site is operated from Quebec, Canada. If you access it from another country, your information may be
              processed in Canada or in countries where our processors (including Google) operate. Those countries may
              have different data-protection rules.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">13. Your rights</h2>
            <p className="mt-3">
              Depending on Quebec’s Law 25, PIPEDA principles, and other laws that may apply to you, you may have rights
              to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Access personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Withdraw consent (where processing is consent-based)</li>
              <li>Request deletion of information you sent us, subject to legal limits</li>
              <li>
                Lodge a complaint with a supervisory authority (e.g., Commission d’accès à l’information du Quebec, or
                your local authority)
              </li>
            </ul>
            <p className="mt-3">
              To exercise rights regarding data <strong className="text-[#E0E0E0]">we</strong> hold (e.g., your emails),
              contact{" "}
              <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
                contact@topmoneytools.com
              </a>
              . For data held by <strong className="text-[#E0E0E0]">Google</strong> via ads, use Google’s tools and
              policies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">14. Third-party links</h2>
            <p className="mt-3">
              Articles and the Resources section may link to government or external sites. Their privacy practices are
              their own. Review their policies before providing information there.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">15. Do Not Track</h2>
            <p className="mt-3">
              There is no consistent industry standard for DNT browser signals. We describe our practices in this policy
              instead of responding to DNT in a uniform automated way.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">16. Changes</h2>
            <p className="mt-3">
              We may update this policy. The “Last updated” date will change. Material changes affecting ads or data
              practices will be reflected here before or when they take effect.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">17. Contact</h2>
            <p className="mt-3">
              <strong className="text-[#E0E0E0]">André Denis — TopMoneyTools</strong>
              <br />
              Montreal, Quebec, Canada
              <br />
              Email:{" "}
              <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">
                contact@topmoneytools.com
              </a>
              <br />
              Web:{" "}
              <Link to="/contact" className="text-[#A3FFD6] hover:underline">
                topmoneytools.com/contact
              </Link>
            </p>
          </section>
      </LegalDoc>
    </Layout>
  );
}
