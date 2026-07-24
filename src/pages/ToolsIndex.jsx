import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ToolCard from "@/components/ToolCard";
import Kicker from "@/components/ui/Kicker";
import SiteButton from "@/components/ui/SiteButton";
import { TOOLS, TOOL_COUNT } from "@/config/site.config";

export default function ToolsIndex() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://topmoneytools.com/tools" },
    ],
  };

  return (
    <Layout>
      <SEO
        title="All Tools | TopMoneyTools"
        description={`Browse every TopMoneyTools calculator — ${TOOL_COUNT} free financial instruments. Calculator inputs stay on your device.`}
        path="/tools"
        seoMeta={{ url: "https://topmoneytools.com/tools", type: "website" }}
        structuredData={[breadcrumbSchema]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Kicker>// The Tool Hangar</Kicker>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">All Instruments</h1>
        <p className="mt-2 max-w-xl text-[#889988]">
          {TOOL_COUNT} free calculators that run entirely in your browser. No accounts. Calculator inputs are not stored
          on our servers. Educational estimates only — not personalized financial advice.
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]/70">
          {TOOL_COUNT} instruments · 01–{String(TOOL_COUNT).padStart(2, "0")}
        </p>

        <div className="mt-6">
          <SiteButton to="/start-here" variant="ghost" size="sm">
            New here? Start here
          </SiteButton>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
