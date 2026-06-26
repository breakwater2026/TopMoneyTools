import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

export default function CreditScoresAndBorrowing() {
  return (
    <ArticleShell
      title="Credit Scores & Borrowing — What Every Number Means"
      description="Your credit score affects every loan rate you'll ever get. Learn how it's calculated, what raises or lowers it, and how to borrow smarter."
      path="/education/credit-scores-and-borrowing"
      sidebarTerms={[
        { q: "What is a credit score?", slug: "credit-score" },
        { q: "What is APR?", slug: "apr" },
        { q: "What is interest?", slug: "interest" },
        { q: "What is principal?", slug: "principal" },
        { q: "What is amortization?", slug: "amortization" },
      ]}
      relatedTools={[
        { label: "Debt Cost Calculator", to: "/tools/debt-cost" },
        { label: "Mortgage Payment Calculator", to: "/tools/mortgage-payment" },
        { label: "Net Worth Calculator", to: "/tools/net-worth" },
      ]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is a credit score?</h2>
      <p className="text-[#889988]">A <Link to="/glossary#credit-score" className="text-[#A3FFD6] hover:underline">credit score</Link> is a number — typically 300–850 — that summarises how reliably you've repaid borrowed money. Lenders use it to decide whether to approve you and at what rate. A higher score means lower risk to the lender, which means better rates for you.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">What goes into your score</h2>
      <p className="text-[#889988]">The five main factors: payment history (35% — have you paid on time?), amounts owed (30% — how much of your available credit are you using?), length of credit history (15%), types of credit (10%), and new credit inquiries (10%). Payment history and utilisation are the two levers you control most directly.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Why it matters in dollars</h2>
      <p className="text-[#889988]">A higher credit score translates directly into a lower <Link to="/glossary#apr" className="text-[#A3FFD6] hover:underline">APR</Link>. On a $300,000 mortgage, the difference between a "fair" and "excellent" score could mean 1–2% lower interest — that's $30,000–$60,000 over 25 years. Use the <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost Calculator</Link> to see how rate changes affect your total cost.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Building credit deliberately</h2>
      <p className="text-[#889988]">Pay every bill on time — this is the single most impactful action. Keep credit card balances below 30% of your limit. Don't close old accounts. Avoid applying for multiple new credit lines in a short period. Credit is built slowly and damaged quickly.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Borrowing smarter</h2>
      <p className="text-[#889988]">Not all debt is equal. A low-rate mortgage builds equity. High-rate credit card debt compounds against you. Before borrowing, ask: what is the APR, what is the total cost over the term, and could I achieve the same goal by saving instead? Your <Link to="/glossary#principal" className="text-[#A3FFD6] hover:underline">principal</Link> and your rate together determine everything.</p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <p className="mt-2 text-sm text-[#889988]">Calculate the real cost of a loan with the <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost Calculator</Link>. Browse <Link to="/resources" className="text-[#A3FFD6] hover:underline">Resources</Link> for government credit references.</p>
      </div>
    </ArticleShell>
  );
}