import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact | TopMoneyTools"
        description="Contact TopMoneyTools for calculator questions, content errors, feedback, or privacy questions. We cannot provide personalized financial advice by email."
        path="/contact"
        seoMeta={{
          url: "https://topmoneytools.com/contact",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Contact</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Contact</h1>

        <div className="mt-6 space-y-6 text-[#889988] leading-relaxed">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]/70">Operator</p>
            <p className="mt-1 text-[#E0E0E0]">André Denis</p>
            <p>Montreal, Quebec, Canada</p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]/70">Email</p>
            <a href="mailto:contact@topmoneytools.com" className="mt-1 inline-block text-[#A3FFD6] hover:underline">
              contact@topmoneytools.com
            </a>
            <p className="mt-2 text-sm">This is a one-person project. We aim to reply within a few business days.</p>
          </div>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">What we can help with</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Questions about how a calculator works</li>
              <li>Reporting a possible calculation or content error</li>
              <li>Feedback and tool ideas</li>
              <li>Privacy or policy questions</li>
              <li>Press or educational use inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">What we cannot provide</h2>
            <p className="mt-3">
              We cannot give personalized financial, tax, or investment advice by email. For decisions about your
              situation, please speak with a licensed professional.
            </p>
            <p className="mt-3 text-sm">
              Please don’t send sensitive financial or personal data by email. Calculator inputs are designed to stay on
              your device.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[#E0E0E0]">Before writing</h2>
            <p className="mt-3">You may find answers in:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Link to="/education" className="text-[#A3FFD6] hover:underline">
                  Education Center
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-[#A3FFD6] hover:underline">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#A3FFD6] hover:underline">
                  Homepage FAQ
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
                  Disclaimer
                </Link>{" "}
                (what the tools are — and are not)
              </li>
              <li>
                <Link to="/the-editor" className="text-[#A3FFD6] hover:underline">
                  The Editor
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </Layout>
  );
}
