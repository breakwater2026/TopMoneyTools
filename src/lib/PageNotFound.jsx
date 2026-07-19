import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

// Themed 404. Emits noindex so bogus URLs (which the SPA necessarily serves as
// HTTP 200) are not flagged as soft 404s by Google.
export default function PageNotFound() {
  return (
    <Layout>
      <SEO
        title="Page Not Found | TopMoneyTools"
        description="The page you are looking for does not exist. Browse our free financial calculators and plain-English guides instead."
        seoMeta={{ robots: "noindex,follow" }}
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Error 404</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#889988]">
          This URL does not match any tool or guide. It may have moved, or the link may be outdated.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-[#A3FFD6] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#081008] transition hover:bg-[#88e4b9]"
          >
            Back to home
          </Link>
          <Link
            to="/tools"
            className="inline-flex items-center justify-center rounded-sm border border-[#A3FFD6]/30 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10"
          >
            Browse calculators
          </Link>
          <Link
            to="/education"
            className="inline-flex items-center justify-center rounded-sm border border-[#A3FFD6]/30 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10"
          >
            Read the guides
          </Link>
        </div>
      </div>
    </Layout>
  );
}
