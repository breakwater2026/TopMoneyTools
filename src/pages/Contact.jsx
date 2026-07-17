import { MapPin, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact | TopMoneyTools"
        description="Contact TopMoneyTools with questions, feedback, or support requests about our private calculators, education pages, and plain-English financial guidance. Based in Montreal, QC."
        path="/contact"
        seoMeta={{
          url: "https://topmoneytools.com/contact",
          type: "website",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Contact</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Contact TopMoneyTools</h1>

        <div className="mt-6 space-y-4 text-[#889988] leading-relaxed">
          <p>
            Have a question, suggestion, or feedback? We’d love to hear from you. Our tools are built to be helpful,
            private, and easy to use — and your input helps us improve.
          </p>

          <div className="instrument-surface rounded-sm p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-[#A3FFD6]" />
              <div>
                <p className="font-heading text-sm font-semibold text-[#E0E0E0]">Email</p>
                <p className="mt-1 text-sm text-[#889988]">
                  <a href="mailto:contact@topmoneytools.com" className="text-[#A3FFD6] hover:underline">contact@topmoneytools.com</a>
                  <br />We typically respond within 48 hours.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[#A3FFD6]" />
              <div>
                <p className="font-heading text-sm font-semibold text-[#E0E0E0]">Location</p>
                <p className="mt-1 text-sm text-[#889988]">Montreal, Quebec, Canada</p>
              </div>
            </div>
          </div>

          <p>
            Please don’t send sensitive financial or personal data by email. Our calculators are designed to run locally
            in your browser, and we do not collect or store your inputs.
          </p>
        </div>
      </section>
    </Layout>
  );
}
