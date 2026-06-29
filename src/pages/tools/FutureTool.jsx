import { Link } from "react-router-dom";
import { ArrowRight, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import { LIVE_TOOLS } from "@/config/site.config";

// Shared scaffold for the two "future" placeholders.
function FutureTool({ slug, name, num, blurb }) {
  return (
    <Layout>
      <SEO title={`${name} — Coming Soon`} description={`${name} is currently in development. In the meantime, explore the eight other ready-to-use TopMoneyTools calculators.`} path={`/tools/${slug}`} />
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-sm border-2 border-[#A3FFD6]/40">
          <Wrench className="h-7 w-7 text-[#A3FFD6]" aria-hidden="true" />
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">Tool-{num} // {name}</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-[#E0E0E0] sm:text-4xl">In Development</h1>
        <p className="mx-auto mt-4 max-w-md text-[#889988]">{blurb}</p>

        <div className="mx-auto mt-10">
          <AdSlot slot="top" className="h-[60px]" />
        </div>

        <h2 className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Available Now</h2>
        <p className="mt-2 text-sm text-[#889988]">Eight other instruments are ready for you.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {LIVE_TOOLS.map((t) => (
            <li key={t.slug}>
              <Link to={`/tools/${t.slug}`} className="group flex items-center justify-between instrument-surface rounded-sm p-3 text-left transition hover:instrument-glow">
                <span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]">{t.num}</span>
                  <span className="mt-1 block font-heading text-sm font-semibold text-[#E0E0E0]">{t.name}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-[#A3FFD6]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default function FutureToolWrapper(props) {
  return <FutureTool {...props} />;
}
