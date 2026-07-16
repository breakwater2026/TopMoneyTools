import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import { TOOLS } from "@/config/site.config";

export default function ToolsIndex() {
  const disabled = [];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://topmoneytools.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://topmoneytools.com/tools",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="All Tools | TopMoneyTools"
        description="Browse every TopMoneyTools calculator — ten free, private financial instruments covering inflation, debt, mortgages, retirement, budgeting, net worth, savings goals and more."
        path="/tools"
        seoMeta={{
          url: "https://topmoneytools.com/tools",
          type: "website",
        }}
        structuredData={[breadcrumbSchema]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// The Tool Hangar</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">All Instruments</h1>
        <p className="mt-2 max-w-xl text-[#889988]">Ten free, private calculators that run entirely in your browser. No accounts, no data stored.</p>

        <div className="mt-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => {
            const scaffold = disabled.includes(t.slug);
            return (
              <Link
                key={t.slug}
                to={`/tools/${t.slug}`}
                className={`group flex flex-col rounded-sm p-5 transition ${scaffold ? "border border-dashed border-[#A3FFD6]/20 bg-obsidian/50 opacity-70" : "bg-obsidian hover:bg-void hover:instrument-glow hover:-translate-y-0.5"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{t.num}</span>
                  {scaffold ? (
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#889988]">soon</span>
                  ) : (
                    <span aria-hidden="true" className="h-3 w-3 rotate-45 border border-[#A3FFD6] transition group-hover:bg-[#A3FFD6]" />
                  )}
                </div>
                <h2 className="mt-4 font-heading text-lg font-semibold text-[#E0E0E0]">{t.name}</h2>
                <p className="mt-2 flex-1 text-sm text-[#889988]">{t.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]">
                  {scaffold ? "Coming soon" : "Open instrument"} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}