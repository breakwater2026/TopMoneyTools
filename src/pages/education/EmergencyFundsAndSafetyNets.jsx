import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

export default function EmergencyFundsAndSafetyNets() {
  return (
    <ArticleShell
      title="Emergency Funds & Financial Safety Nets — Your First Line of Defence"
      description="An emergency fund is the foundation of financial resilience. Learn how much to save, where to keep it, and how to build one from zero."
      path="/education/emergency-funds-and-safety-nets"
      sidebarTerms={[
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is liquidity?", slug: "liquidity" },
        { q: "What is a cash reserve?", slug: "cash-reserve" },
        { q: "What are fixed expenses?", slug: "fixed-expenses" },
        { q: "What is financial resilience?", slug: "financial-resilience" },
      ]}
      relatedTools={[
        { label: "Emergency Fund Calculator", to: "/tools/emergency-fund" },
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Goal Calculator", to: "/tools/savings-goal" },
      ]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is an emergency fund?</h2>
      <p className="text-[#889988]">An <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">emergency fund</Link> is cash set aside for unexpected events — job loss, medical bills, urgent home or car repairs. It's your financial shock absorber. Without one, any surprise expense forces you into debt. With one, you handle it without disrupting your financial plan.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How much do you need?</h2>
      <p className="text-[#889988]">The standard guidance: 3–6 months of essential expenses. Single income household or variable income? Aim for 6–12 months. The calculation isn't your total spending — it's your <Link to="/glossary#fixed-expenses" className="text-[#A3FFD6] hover:underline">fixed expenses</Link> (rent, utilities, loan minimums, food) that you absolutely cannot cut. Use the <Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">Emergency Fund Calculator</Link> to find your target and gap.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Liquidity over returns</h2>
      <p className="text-[#889988]">An emergency fund must be <Link to="/glossary#liquidity" className="text-[#A3FFD6] hover:underline">liquid</Link> — accessible within days, not weeks. That means a high-yield savings account or money market account, not stocks or locked-in term deposits. You sacrifice some return for instant access, and that trade-off is correct. <Link to="/glossary#financial-resilience" className="text-[#A3FFD6] hover:underline">Financial resilience</Link> matters more than return in this case.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Building from zero</h2>
      <p className="text-[#889988]">Start with a $1,000 starter fund before anything else — it handles most small emergencies. Then build to one month of expenses, then three, then six. Automate a fixed transfer to your emergency fund on payday. Treat it like a bill, not optional savings.</p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Your fund is not an investment</h2>
      <p className="text-[#889988]">Don't invest your emergency fund. If markets drop 30% exactly when you need the money — during a job loss, say — you'll be selling at the worst moment. Keep it in cash. Once the fund is fully built, everything beyond it can be invested for growth.</p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <p className="mt-2 text-sm text-[#889988]">Find your exact emergency fund target and gap with the <Link to="/tools/emergency-fund" className="text-[#A3FFD6] hover:underline">Emergency Fund Calculator</Link>. Then visit <Link to="/start-here" className="text-[#A3FFD6] hover:underline">Start Here</Link> to map your full financial plan.</p>
      </div>
    </ArticleShell>
  );
}