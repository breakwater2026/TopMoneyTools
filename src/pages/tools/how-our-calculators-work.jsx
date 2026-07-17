import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";

const CALCULATORS = [
  {
    num: "01", slug: "food-inflation", name: "Food Inflation Calculator",
    formula: "Future Cost = Current Cost × (1 + Rate / 100)<sup>Years</sup>",
    example: "$400/mo groceries at 5.2% for 5 years = $515.30",
    note: "Uses the compound growth formula — the same math that drives investment returns, applied to rising prices."
  },
  {
    num: "02", slug: "debt-cost", name: "Debt Cost Calculator",
    formula: "Monthly Payment = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]",
    example: "$10,000 at 6% for 3 years = $304.22/mo",
    note: "Standard amortization formula. Early payments are mostly interest; later payments shift to principal."
  },
  {
    num: "03", slug: "mortgage-payment", name: "Mortgage Payment Calculator",
    formula: "M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]",
    example: "$250,000 at 4.5% for 30 years = $1,266.71/mo",
    note: "Identical amortization structure as debt — the scale and term make the difference."
  },
  {
    num: "04", slug: "investment-growth", name: "Investment Growth Calculator",
    formula: "FV = PV(1+r)<sup>n</sup> + PMT × [((1+r)<sup>n</sup> − 1) / r]",
    example: "$10,000 + $500/mo at 7% for 20 yrs = $300,852",
    note: "Combines lump-sum compounding with regular contribution growth — the two-engine wealth formula."
  },
  {
    num: "05", slug: "retirement", name: "Retirement Savings Calculator",
    formula: "Projected nest egg via investment growth formula, then Safe Withdrawal = Balance × 0.04",
    example: "$1,000,000 nest egg → $40,000/yr (4% Rule)",
    note: "Uses the 4% Rule as a planning guideline — not a guarantee, but a widely accepted starting point."
  },
  {
    num: "06", slug: "budget-planner", name: "Budget Planner",
    formula: "Surplus = Income − (Fixed + Variable); Savings Rate = Surplus / Income × 100",
    example: "$4,500 income − $3,500 expenses = $1,000 surplus (22.2%)",
    note: "Simple subtraction and percentage — the power isn't in the math, it's in seeing the numbers clearly."
  },
  {
    num: "07", slug: "net-worth", name: "Net Worth Calculator",
    formula: "Net Worth = Total Assets − Total Liabilities",
    example: "$350,000 assets − $200,000 liabilities = $150,000",
    note: "One number captures your complete financial position. Track it over time to see real progress."
  },
  {
    num: "08", slug: "savings-goal", name: "Savings Goal Calculator",
    formula: "PMT = FV × r / [(1+r)<sup>n</sup> − 1]",
    example: "$50,000 in 5 years at 3% = $773.51/mo",
    note: "Reverses the investment growth formula — instead of projecting returns, it finds the contribution needed."
  },
  {
    num: "09", slug: "emergency-fund", name: "Emergency Fund Calculator",
    formula: "Months Covered = Total Savings / Monthly Expenses",
    example: "$12,000 / $3,500 = 3.4 months",
    note: "Simple division with a powerful result — the months-of-coverage number is your financial cushion."
  },
  {
    num: "10", slug: "savings-rate", name: "Savings Rate Calculator",
    formula: "Savings Rate = (Savings / Income) × 100",
    example: "$21,000 / $75,000 = 28%",
    note: "The single most predictive metric for long-term financial health — higher rates build wealth faster."
  },
];

function CalculatorCard({ calc }) {
  return (
    <div className="rounded-sm border border-[#A3FFD6]/10 bg-obsidian p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">
          {calc.num}
        </span>
        <Link
          to={`/tools/${calc.slug}`}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:text-[#A3FFD6]/80"
        >
          Open tool
        </Link>
      </div>
      <h3 className="mt-3 font-heading text-base font-semibold text-[#E0E0E0]">
        {calc.name}
      </h3>
      <div className="mt-3 space-y-2">
        <p className="font-mono text-xs text-[#889988]">
          <span className="text-[#A3FFD6]/70">Formula:</span>{" "}
          <span dangerouslySetInnerHTML={{ __html: calc.formula }} />
        </p>
        <p className="text-sm text-[#889988]">
          <span className="text-[#E0E0E0]/60">Example:</span> {calc.example}
        </p>
        <p className="text-xs italic text-[#889988]/70">{calc.note}</p>
      </div>
    </div>
  );
}

export default function HowOurCalculatorsWork() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://topmoneytools.com" },
      { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://topmoneytools.com/tools" },
      { "@type": "ListItem", "position": 3, "name": "How Our Calculators Work", "item": "https://topmoneytools.com/tools/how-our-calculators-work" },
    ],
  };

  return (
    <Layout>
      <SEO
        title="How Our Calculators Work | TopMoneyTools"
        description="Transparent mathematics behind every TopMoneyTools calculator — industry-standard formulas explained in plain English."
        path="/tools/how-our-calculators-work"
        seoMeta={{ url: "https://topmoneytools.com/tools/how-our-calculators-work", type: "website" }}
        structuredData={[breadcrumbSchema]}
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">
          // Behind the Math
        </p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">
          How Our Calculators Work
        </h1>
        <p className="mt-2 text-[#889988]">
          Every formula is an industry-standard calculation used by financial professionals.
          We present them plainly so you can see exactly what happens under the hood.
        </p>

        <div className="mt-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {CALCULATORS.map((c) => (
            <CalculatorCard key={c.slug} calc={c} />
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-[#A3FFD6]/10 bg-obsidian p-6">
          <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">
            Important Note
          </h2>
          <p className="mt-2 text-sm text-[#889988]">
            All calculators provide estimates for educational and planning purposes only.
            They use standard financial formulas but do not account for every variable that
            affects real-world outcomes — taxes, fees, market volatility, and personal circumstances
            all matter. Always consult a licensed financial professional for personalized advice.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:text-[#A3FFD6]/80"
          >
            ← Back to all tools
          </Link>
        </div>
      </section>
    </Layout>
  );
}
