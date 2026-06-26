import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

export default function Investing101() {
  return (
    <ArticleShell
      title="Investing 101 — How to Start Growing Your Money"
      description="A plain-English primer on investing: what it is, how compounding works, and the most important principles for beginners."
      path="/education/investing-101"
      sidebarTerms={[
        { q: "What is compound growth?", slug: "compound-growth" },
        { q: "What is return?", slug: "return" },
        { q: "What is risk tolerance?", slug: "risk-tolerance" },
        { q: "What is diversification?", slug: "diversification" },
        { q: "What is volatility?", slug: "volatility" },
      ]}
      relatedTools={[
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Retirement Calculator", to: "/tools/retirement" },
        { label: "Net Worth Calculator", to: "/tools/net-worth" },
      ]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is investing?</h2>
      <p className="text-[#889988]">Investing means putting money to work so it can grow over time. Unlike saving — where money sits in a bank account — investing accepts some risk in exchange for higher potential <Link to="/glossary#return" className="text-[#A3FFD6] hover:underline">returns</Link>. The goal is to grow wealth faster than inflation erodes it.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The power of compound growth</h2>
      <p className="text-[#889988]"><Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">Compound growth</Link> means your returns earn their own returns. A 7% annual return doesn't just add 7% once — it grows the growing total, year after year. Over 30 years, $10,000 becomes roughly $76,000 without adding another penny. Use our <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">Investment Growth Calculator</Link> to see this in action.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Risk tolerance — know yourself first</h2>
      <p className="text-[#889988]">Your <Link to="/glossary#risk-tolerance" className="text-[#A3FFD6] hover:underline">risk tolerance</Link> determines how you should invest. If you'd panic and sell when markets drop 30%, you're a conservative investor. If you can hold steady through turbulence, you can take on more risk for potentially higher returns. Neither is wrong — self-knowledge prevents costly mistakes.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Diversification reduces risk</h2>
      <p className="text-[#889988]"><Link to="/glossary#diversification" className="text-[#A3FFD6] hover:underline">Diversification</Link> spreads your money across different investments so one bad outcome doesn't sink everything. Low-cost index funds give you instant diversification across hundreds of companies with a single purchase — and beat most actively managed funds over time.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The most important variable: time</h2>
      <p className="text-[#889988]">Starting a decade earlier almost always matters more than picking the "right" investment. <Link to="/glossary#volatility" className="text-[#A3FFD6] hover:underline">Volatility</Link> — markets going up and down — is temporary. Time in the market consistently beats timing the market. Start with what you have, and let compounding do the rest.</p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <p className="mt-2 text-sm text-[#889988]">Project your long-term wealth with the <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">Investment Growth Calculator</Link>. See all our tools at <Link to="/tools" className="text-[#A3FFD6] hover:underline">the Tool Hangar</Link> or browse <Link to="/resources" className="text-[#A3FFD6] hover:underline">Resources</Link> for authoritative external references.</p>
      </div>
    </ArticleShell>
  );
}