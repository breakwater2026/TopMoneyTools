import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";

// Soft-404 mitigation: SPA always returns HTTP 200; noindex stops indexation.
export default function PageNotFound() {
  const { pathname } = useLocation();
  const pageName = pathname === "/" ? "home" : pathname.replace(/^\//, "");

  return (
    <Layout>
      <Helmet>
        <title>Page not found | TopMoneyTools</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="This page does not exist on TopMoneyTools. Return home or browse our financial calculators and guides."
        />
      </Helmet>

      <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// 404</p>
        <h1 className="mt-2 font-heading text-5xl font-bold tracking-tight text-[#E0E0E0] sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#889988]">
          We couldn’t find{" "}
          <span className="font-mono text-[#E0E0E0]/80">“{pageName}”</span>. It may have moved or never existed.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-sm bg-[#A3FFD6] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#081008] transition hover:bg-[#88e4b9]"
          >
            Go home
          </Link>
          <Link
            to="/tools"
            className="rounded-sm border border-[#A3FFD6]/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10"
          >
            All tools
          </Link>
          <Link
            to="/education"
            className="rounded-sm border border-[#A3FFD6]/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#A3FFD6] transition hover:bg-[#A3FFD6]/10"
          >
            Education
          </Link>
        </div>
      </section>
    </Layout>
  );
}
