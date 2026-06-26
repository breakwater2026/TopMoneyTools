import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

export default function UnderstandingInterestRates() {
  return (
    <ArticleShell
      title="Understanding Interest Rates — What They Mean for Your Money"
      description="Interest rates affect every loan, mortgage, and savings account you hold. Learn how they work, what APR means, and how to use them to your advantage."
      path="/education/understanding-interest-rates"
      sidebarTerms={[
        { q: "What is interest?", slug: "interest" },
        { q: "What is APR?", slug: "apr" },
        { q: "What is amortization?", slug: "amortization" },
        { q: "What is principal?", slug: "principal" },
        { q: "What is compound growth?", slug: "compound-growth" },
      ]}
      relatedTools={[
        { label: "Debt Cost Calculator", to: "/tools/debt-cost" },
        { label: "Mortgage Payment Calculator", to: "/tools/mortgage-payment" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
      ]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Interest: the price of money</h2>
      <p className="text-[#889988]"><Link to="/glossary#interest" className="text-[#A3FFD6] hover:underline">Interest</Link> is what lenders charge for letting you use their money — or what banks pay you for lending them yours. It's expressed as a yearly percentage of the amount borrowed or deposited. Understanding interest is fundamental to every financial decision involving a loan or a savings account.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">APR vs. interest rate</h2>
      <p className="text-[#889988]">The interest rate is what you pay on the <Link to="/glossary#principal" className="text-[#A3FFD6] hover:underline">principal</Link>. <Link to="/glossary#apr" className="text-[#A3FFD6] hover:underline">APR</Link> (Annual Percentage Rate) includes fees on top of interest — it's the true annual cost of borrowing. Always compare APR, not just interest rates, when shopping for loans.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How amortization works</h2>
      <p className="text-[#889988]">When you take a loan, payments are structured through <Link to="/glossary#amortization" className="text-[#A3FFD6] hover:underline">amortization</Link>. Early payments are mostly interest; later ones are mostly principal. On a 25-year mortgage, you may pay more in interest than principal in the first 10 years. Use the <Link to="/tools/mortgage-payment" className="text-[#A3FFD6] hover:underline">Mortgage Calculator</Link> to see the breakdown.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Interest works for you too</h2>
      <p className="text-[#889988]">When you save or invest, interest and returns work in your favour through <Link to="/glossary#compound-growth" className="text-[#A3FFD6] hover:underline">compound growth</Link>. Each year's growth earns its own growth in the next. This is why paying off high-interest debt first and then investing — rather than both at once — is often the fastest path to wealth.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">A 1% difference matters more than you think</h2>
      <p className="text-[#889988]">On a $300,000 mortgage, a 1% rate difference can mean $50,000+ in extra interest over 25 years. On an investment portfolio, that same 1% compounded for 30 years can represent hundreds of thousands of dollars. Small rate differences have enormous long-run consequences. Always shop around.</p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <p className="mt-2 text-sm text-[#889988]">See the true cost of any loan with the <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost Calculator</Link>. Browse the <Link to="/glossary" className="text-[#A3FFD6] hover:underline">full Glossary</Link> for more term definitions.</p>
      </div>
    </ArticleShell>
  );
}