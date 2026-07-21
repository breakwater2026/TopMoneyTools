import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function TheEditor() {
  return (
    <Layout>
      <SEO
        title="About the Editor | TopMoneyTools"
        description="Meet The Editor of TopMoneyTools — decades in investment banking, private equity, and family office leadership, now focused on plain-language financial guidance."
        path="/the-editor"
        seoMeta={{
          url: "https://topmoneytools.com/the-editor",
          type: "profile",
        }}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Byline</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">About the Editor</h1>

        <div className="mt-8 space-y-5 text-[#889988] leading-relaxed">
          <p>
            After earning his MBA from Ivey Business School, our Editor spent decades in the highest circles of finance —
            as an investment banker, merchant banker, venture capitalist, and private equity investor. He went on to lead
            as CEO of a publicly traded early-stage private equity fund, and later as CEO of a private family office,
            overseeing capital and strategy at the highest level.
          </p>
          <p>
            Having achieved early retirement from public life, he now trades his own capital full-time across sovereign
            debt, equity indices, currencies, and options — both spot and futures markets.
          </p>
          <p>
            This site was born from a simple realization: the financial world he spent his career mastering remains a
            mystery to most people. His mission now is to translate decades of hard-won, high-stakes experience into
            plain, practical guidance — so that anyone, regardless of background, can build real financial confidence.
          </p>
        </div>

        <div className="mt-10 instrument-surface rounded-sm p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Note</p>
          <p className="mt-2 text-sm text-[#889988]">
            Content on TopMoneyTools is for education and planning only. It is not personalized financial advice. For
            major decisions, consult a licensed professional.
          </p>
        </div>

        <p className="mt-8 flex flex-wrap gap-4">
          <Link to="/about" className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">
            ← About the site
          </Link>
          <Link to="/contact" className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">
            Contact →
          </Link>
        </p>
      </section>
    </Layout>
  );
}
