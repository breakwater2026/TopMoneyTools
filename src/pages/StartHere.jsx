import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { TOOLS } from "@/config/site.config";
import { ARTICLES } from "@/pages/Education";

export default function StartHere() {
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
        "name": "Start Here",
        "item": "https://topmoneytools.com/start-here",
      },
    ],
  };

  // Create descriptions for articles that match the existing Start Here copy
  const articleDescriptions = {
    "how-inflation-affects-your-daily-budget": "See how rising prices change your everyday costs — groceries, fuel, utilities, rent.",
    "budgeting-for-beginners": "Build a simple, flexible budget you can actually stick to.",
    "how-to-compare-loans": "Learn how APR, interest rates, fees, and loan terms really affect total cost.",
    "budgeting-101": "Understand needs vs wants, fixed vs variable expenses, and how to plan ahead.",
    "investing-101": "A beginner-friendly introduction to risk, returns, diversification, and long-term growth.",
    "retirement-planning-basics": "How much to save, where to save, and how compounding works over decades.",
    "understanding-interest-rates": "Why rates rise and fall — and how they affect loans, savings, and inflation.",
    "how-inflation-works": "A clear explanation of CPI, purchasing power, and why prices change.",
    "credit-scores-and-borrowing": "What affects your score, how lenders evaluate you, and how to improve it.",
    "emergency-funds-and-safety-nets": "How much to save, where to keep it, and how to build resilience.",
  };

  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-10 text-[#E0E0E0]">
        <SEO
          title="Start Here — Your First Steps with TopMoneyTools"
          description="New here? This page gives you the exact steps to get started — no financial experience needed, no account, no tracking, and every calculation runs entirely in your browser."
          path="/start-here"
          seoMeta={{
            title: "Start Here — Your First Steps with TopMoneyTools",
            description:
              "Learn the basics, use simple tools, and build a financial plan you can stick to — all private, free, and beginner‑friendly.",
            url: "https://topmoneytools.com/start-here",
            image: "https://topmoneytools.com/og/start-here.png",
            type: "article",
          }}
          structuredData={[breadcrumbSchema]}
        />

        {/* Page Title */}
        <h1 className="mb-6 text-3xl font-bold text-[#E0E0E0]">
          Start Here
        </h1>

        <p className="mb-10 text-[#889988]">
          New here? This page gives you the exact steps to get started — no
          financial experience needed, no account, no tracking, and every
          calculation runs entirely in your browser.
        </p>

        {/* Step 01 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#E0E0E0]">
            Step 01 — Learn the basics
          </h2>
          <p className="mt-2 text-[#889988]">
            Start with the guide that matches where you are. Each article takes
            about 3–4 minutes to read.
          </p>

          <ul className="mt-6 space-y-4">
            {ARTICLES.map((article, index) => (
              <li key={article.slug}>
                <span className="mr-3 font-mono text-[#A3FFD6]">{String(index + 1).padStart(2, "0")}.</span>
                <Link
                  to={`/education/${article.slug}`}
                  className="text-[#A3FFD6] hover:underline"
                >
                  {article.t}
                </Link>
                <p className="text-sm text-[#889988]">
                  {articleDescriptions[article.slug] || article.d}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 02 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#E0E0E0]">
            Step 02 — Use a tool
          </h2>
          <p className="mt-2 text-[#889988]">
            Pick the calculator that fits your question. All tools run entirely in
            your browser — private, free, and no account needed.
          </p>

          <ul className="mt-6 space-y-4">
            {TOOLS.map((tool, index) => (
              <li key={tool.slug}>
                <span className="mr-3 font-mono text-[#A3FFD6]">{String(index + 1).padStart(2, "0")}.</span>
                <Link
                  to={`/tools/${tool.slug}`}
                  className="text-[#A3FFD6] hover:underline"
                >
                  {tool.name}
                </Link>
                <p className="text-sm text-[#889988]">
                  {tool.short}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-[#889988]">
            Your numbers never leave your device. Every calculation runs locally in
            your browser.
          </p>
        </section>

        {/* Step 03 */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-[#E0E0E0]">
            Step 03 — Build your plan
          </h2>
          <p className="mt-2 text-[#889988]">
            Connect the dots across your whole financial picture.
          </p>

          <ul className="mt-6 space-y-4">
            <li>
              <Link
                to="/glossary"
                className="text-[#A3FFD6] hover:underline"
              >
                Glossary — 35 key terms defined plainly
              </Link>
              <p className="text-sm text-[#889988]">
                Clear definitions for interest, APR, inflation, amortization, and
                more.
              </p>
            </li>

            <li>
              <Link
                to="/resources"
                className="text-[#A3FFD6] hover:underline"
              >
                Resources — government references and guides
              </Link>
              <p className="text-sm text-[#889988]">
                Trusted links for taxes, benefits, retirement, and financial
                literacy.
              </p>
            </li>

            <li>
              <Link
                to="/tools/budget-planner"
                className="text-[#A3FFD6] hover:underline"
              >
                Run the Budget Planner
              </Link>
              <p className="text-sm text-[#889988]">
                Build a simple plan you can adjust as life changes.
              </p>
            </li>

            <li>
              <Link
                to="/tools/net-worth"
                className="text-[#A3FFD6] hover:underline"
              >
                Track your baseline with the Net Worth Calculator
              </Link>
              <p className="text-sm text-[#889988]">
                See your progress month by month.
              </p>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <section className="mt-16 border-t border-[#A3FFD6]/20 pt-8">
          <p className="text-sm text-[#889988]">
            All calculations run in your browser. No data stored. No account
            required.
          </p>
          <p className="mt-2 text-sm text-[#889988]">
            © 2026 TopMoneyTools — Making money simple for everyone.
          </p>
          <p className="mt-2 text-sm text-[#889988]">
            Last updated: June 2026
          </p>
        </section>
      </div>
    </Layout>
  );
}
