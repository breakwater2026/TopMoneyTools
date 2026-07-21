import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import { TOOLS } from "@/config/site.config";

// Formula notes for each tool slug (math transparency page).
const FORMULAS = {
  "food-inflation": {
    formula: "Future Cost = Current Cost × (1 + Rate / 100)<sup>Years</sup>",
    example: "$400/mo groceries at 5.2% for 5 years ≈ $515.30",
    note: "Compound growth applied to prices — same structure as investment returns.",
  },
  "debt-cost": {
    formula: "Payment = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]",
    example: "$10,000 at 6% for 3 years ≈ $304.22/mo",
    note: "Standard amortization. Early payments are mostly interest.",
  },
  "mortgage-payment": {
    formula: "M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]",
    example: "$250,000 at 4.5% for 30 years ≈ $1,266.71/mo",
    note: "Same amortization math as other installment loans, larger scale.",
  },
  "investment-growth": {
    formula: "FV = PV(1+r)<sup>n</sup> + PMT × [((1+r)<sup>n</sup> − 1) / r]",
    example: "$10,000 + $500/mo at 7% for 20 yrs ≈ $300,852",
    note: "Lump sum plus regular contributions compounding together.",
  },
  retirement: {
    formula: "Nest egg via growth formula; guideline withdrawal ≈ Balance × 0.04",
    example: "$1,000,000 → ~$40,000/yr (4% rule planning start)",
    note: "4% is a planning heuristic, not a guarantee.",
  },
  "budget-planner": {
    formula: "Surplus = Income − Expenses; Savings Rate = Surplus / Income",
    example: "$4,500 − $3,500 = $1,000 surplus (~22%)",
    note: "Clarity comes from seeing the split, not complex algebra.",
  },
  "net-worth": {
    formula: "Net Worth = Assets − Liabilities",
    example: "$350,000 − $200,000 = $150,000",
    note: "One snapshot of position; track it over time.",
  },
  "savings-goal": {
    formula: "PMT = FV × r / [(1+r)<sup>n</sup> − 1]",
    example: "$50,000 in 5 years at 3% ≈ $774/mo",
    note: "Inverts growth math to find the contribution required.",
  },
  "emergency-fund": {
    formula: "Months Covered = Savings / Monthly Expenses",
    example: "$12,000 / $3,500 ≈ 3.4 months",
    note: "Cushion measured in months of burn rate.",
  },
  "savings-rate": {
    formula: "Savings Rate = Savings / Income × 100",
    example: "$21,000 / $75,000 = 28%",
    note: "Strong predictor of long-term wealth building.",
  },
  "tax-brackets": {
    formula: "Tax ≈ Σ (income in bracket × bracket rate)",
    example: "Progressive layers — only the top slice faces the top rate",
    note: "Illustrates marginal vs effective rates.",
  },
  "rent-vs-buy": {
    formula: "Compare cumulative rent vs ownership cost (payment, tax, equity, opportunity)",
    example: "Break-even horizon depends on rates, stay length, and appreciation",
    note: "Planning comparison — not a purchase recommendation.",
  },
  "credit-card-payoff": {
    formula: "Amortize revolving balance at monthly APR; interest accrues on unpaid principal",
    example: "Minimum payments stretch payoff and multiply interest",
    note: "Shows cost of carrying a balance.",
  },
  "compound-interest": {
    formula: "A = P(1+r/n)<sup>nt</sup> (+ contributions if any)",
    example: "Time dominates rate when contributions are steady",
    note: "Visualizes compounding paths.",
  },
  "home-affordability": {
    formula: "Payment capacity from income/DTI; back into sustainable price",
    example: "Higher rates shrink affordable price quickly",
    note: "Guideline only — lenders use full underwriting.",
  },
  "auto-loan": {
    formula: "Standard installment amortization on vehicle principal",
    example: "Term and rate drive total interest more than buyers expect",
    note: "Compare cash vs financed total cost.",
  },
  "retirement-withdrawal": {
    formula: "Balance<sub>t+1</sub> = (Balance<sub>t</sub> − Withdrawal) × (1+r)",
    example: "Sequence-of-returns risk can exhaust the same average return early",
    note: "Stress-tests sustainability of a withdrawal plan.",
  },
  "student-loan": {
    formula: "Installment amortization; optional prepayment shortens term",
    example: "Extra principal payments cut interest first",
    note: "Educational estimate of payoff path.",
  },
  "dca-vs-lump-sum": {
    formula: "Compare FV of all-in invest vs equal periodic buys",
    example: "Lump sum often wins mathematically; DCA can win behaviorally",
    note: "Illustration of two funding styles.",
  },
  "insurance-gap": {
    formula: "Need − existing coverage = gap (simplified)",
    example: "Life/disability needs scale with income and dependents",
    note: "Screening tool, not a policy quote.",
  },
  "net-worth-projection": {
    formula: "Project assets/liabilities with savings rate and growth assumptions",
    example: "Small rate differences compound into large gaps over decades",
    note: "Scenario sketch for trajectory.",
  },
  "fire-number": {
    formula: "FIRE number ≈ Annual spend / Safe withdrawal rate",
    example: "$40,000 / 0.04 = $1,000,000",
    note: "Classic independence math as a planning target.",
  },
};

function CalculatorCard({ tool }) {
  const meta = FORMULAS[tool.slug] || {
    formula: "See tool page for methodology",
    example: "Open the instrument for interactive inputs",
    note: "Standard personal-finance relationships applied transparently.",
  };
  return (
    <div className="rounded-sm border border-[#A3FFD6]/10 bg-obsidian p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Tool-{tool.num}</span>
        <Link
          to={`/tools/${tool.slug}`}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:text-[#A3FFD6]/80"
        >
          Open tool
        </Link>
      </div>
      <h3 className="mt-3 font-heading text-base font-semibold text-[#E0E0E0]">{tool.name}</h3>
      <div className="mt-3 space-y-2">
        <p className="font-mono text-xs text-[#889988]">
          <span className="text-[#A3FFD6]/70">Formula:</span>{" "}
          <span dangerouslySetInnerHTML={{ __html: meta.formula }} />
        </p>
        <p className="text-sm text-[#889988]">
          <span className="text-[#E0E0E0]/60">Example:</span> {meta.example}
        </p>
        <p className="text-xs italic text-[#889988]/70">{meta.note}</p>
      </div>
    </div>
  );
}

export default function HowOurCalculatorsWork() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://topmoneytools.com/tools" },
      {
        "@type": "ListItem",
        position: 3,
        name: "How Our Calculators Work",
        item: "https://topmoneytools.com/tools/how-our-calculators-work",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="How Our Calculators Work | TopMoneyTools"
        description={`Transparent mathematics behind all ${TOOLS.length} TopMoneyTools calculators — industry-standard formulas in plain English.`}
        path="/tools/how-our-calculators-work"
        seoMeta={{ url: "https://topmoneytools.com/tools/how-our-calculators-work", type: "website" }}
        structuredData={[breadcrumbSchema]}
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Behind the Math</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">How Our Calculators Work</h1>
        <p className="mt-2 text-[#889988]">
          Every instrument uses standard personal-finance relationships. Below is the math for all {TOOLS.length} tools —
          open any instrument to run it privately in your browser.
        </p>

        <div className="mt-6">
          <AdSlot slot="top" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <CalculatorCard key={t.slug} tool={t} />
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-[#A3FFD6]/10 bg-obsidian p-6">
          <h2 className="font-heading text-lg font-semibold text-[#E0E0E0]">Important note</h2>
          <p className="mt-2 text-sm text-[#889988]">
            Calculators provide estimates for education and planning only. They do not include every real-world variable
            (taxes, fees, volatility, underwriting). Not personalized financial advice — consult a licensed professional
            for major decisions.
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
