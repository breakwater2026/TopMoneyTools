import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import Reveal from "@/components/Reveal";

export const ARTICLES = [
  { num: "101", slug: "how-inflation-affects-your-daily-budget", mark: "▮", t: "How Inflation Affects Your Daily Budget", d: "Understand why prices rise and how to stay ahead of them." },
  { num: "102", slug: "budgeting-for-beginners", mark: "▣", t: "Budgeting for Beginners (50/30/20 Rule)", d: "A simple method to bring balance and clarity to your spending." },
  { num: "103", slug: "how-to-compare-loans", mark: "◈", t: "How to Compare Loans", d: "Learn the three numbers that matter most when choosing a loan." },
  { num: "104", slug: "budgeting-101", mark: "▤", t: "Budgeting 101: Systems That Stick", d: "After the first budget: irregular bills, pay cycles, light tracking, and recovering when a month breaks." },
  { num: "105", slug: "investing-101", mark: "▦", t: "Investing 101", d: "How to start growing your money — compound growth, risk, and time explained." },
  { num: "106", slug: "retirement-planning-basics", mark: "▧", t: "Retirement Planning Basics", d: "How much you need, the 4% rule, and how to project your nest egg." },
  { num: "107", slug: "understanding-interest-rates", mark: "▨", t: "Understanding Interest Rates", d: "What APR means, how amortization works, and why 1% matters." },
  { num: "108", slug: "how-inflation-works", mark: "▩", t: "How Inflation Works", d: "What causes inflation, how it compounds, and how to stay ahead." },
  { num: "109", slug: "credit-scores-and-borrowing", mark: "◉", t: "Credit Scores & Borrowing", d: "What your credit score means and how to borrow smarter." },
  { num: "110", slug: "emergency-funds-and-safety-nets", mark: "◎", t: "Emergency Funds & Financial Safety Nets", d: "Build the financial cushion that protects everything else." },
  { num: "111", slug: "tax-brackets-explained", mark: "◊", t: "Tax Brackets Explained", d: "How progressive tax brackets actually work — marginal vs effective rates." },
  { num: "112", slug: "rent-vs-buy", mark: "◌", t: "Rent vs. Buy: The Full Math", d: "Hidden costs of ownership, opportunity cost, and when renting wins." },
  { num: "113", slug: "credit-card-interest", mark: "○", t: "Credit Card Interest Demystified", d: "APR, minimum payment traps, and smart payoff strategies." },
  { num: "114", slug: "compound-interest-guide", mark: "●", t: "Compound Interest: The Eighth Wonder", d: "Rule of 72, time value of money, and starting early vs late." },
  { num: "115", slug: "home-affordability", mark: "◐", t: "Home Affordability: How Much House?", d: "DTI ratios, down payments, PMI, and hidden costs of ownership." },
  { num: "116", slug: "car-buying-guide", mark: "◑", t: "Car Buying: New vs. Used", d: "Depreciation, total cost of ownership, and the 20/4/10 rule." },
  { num: "117", slug: "safe-withdrawal-rates", mark: "◒", t: "The 4% Rule & Safe Withdrawal Rates", d: "Sequence of returns risk, Trinity Study, and variable strategies." },
  { num: "118", slug: "student-loan-strategies", mark: "◓", t: "Student Loan Repayment Strategies", d: "Federal vs private, IDR plans, PSLF, and payoff approaches." },
  { num: "119", slug: "dollar-cost-averaging", mark: "◔", t: "Dollar-Cost Averaging Deep Dive", d: "DCA vs lump sum, behavioral benefits, and when each wins." },
  { num: "120", slug: "insurance-essentials", mark: "◕", t: "Insurance: What You Actually Need", d: "Term vs whole life, health, disability — what's mandatory vs optional." },
  { num: "121", slug: "side-hustle-economics", mark: "◖", t: "Side Hustle Economics", d: "Self-employment tax, real hourly rate, and quarterly tax math." },
  { num: "122", slug: "couples-and-money", mark: "◗", t: "Couples & Money", d: "Joint accounts, money conversations, and budgeting as a team." },
  { num: "123", slug: "inflation-proofing-savings", mark: "◘", t: "Inflation-Proofing Your Savings", d: "Real returns, TIPS, I-bonds, and stock market as inflation hedge." },
  { num: "124", slug: "net-worth-by-age", mark: "◙", t: "Net Worth Benchmarks by Age", d: "How to calculate, age benchmarks, and tracking progress." },
  { num: "125", slug: "fire-movement", mark: "◆", t: "Financial Independence Retire Early (FIRE)", d: "FIRE number, Lean vs Fat FIRE, and the savings rate math." },
    { num: "126", slug: "net-worth-habit", mark: "◇", t: "How to Build a Simple Net Worth Habit", d: "A 20-minute quarterly ritual that makes your balance sheet trend visible." },
    { num: "127", slug: "needs-wants-gray-zone", mark: "◆", t: "Needs, Wants, and the Gray Zone", d: "Classify spending honestly when 50/30/20 meets real life." },
    { num: "128", slug: "minimum-payments-cost", mark: "○", t: "The True Cost of Minimum Payments", d: "Why minimums prolong high-APR debt—and how fixed payoffs change the math." },
    { num: "129", slug: "fixed-vs-variable-rates", mark: "●", t: "Fixed vs Variable Rate Loans", d: "Payment certainty versus rate risk, with a simple stress test." },
    { num: "130", slug: "down-payment-tradeoffs", mark: "□", t: "Down Payments: 5%, 10%, or 20%?", d: "Cash today vs interest over time—and why reserves still matter." },
    { num: "131", slug: "renting-longer-myth", mark: "■", t: "Renting Longer Isn't Always Throwing Money Away", d: "When renting is the rational financial choice." },
    { num: "132", slug: "windfall-plan", mark: "△", t: "What to Do With a Windfall (Bonus, Tax Refund, Gift)", d: "Bonus and refund order of operations without lifestyle creep." },
    { num: "133", slug: "index-funds-plain-english", mark: "▲", t: "Index Funds in Plain English", d: "Diversification, fees, and realistic expectations—no product hype." },
    { num: "134", slug: "risk-tolerance-vs-capacity", mark: "☆", t: "Risk Tolerance vs Risk Capacity", d: "Feelings about risk vs ability to absorb losses." },
    { num: "135", slug: "sequence-of-returns", mark: "★", t: "Sequence of Returns Risk (Why Early Retirement Is Harder)", d: "Why average returns mislead in early retirement." },
    { num: "136", slug: "how-much-house-too-much", mark: "◎", t: "How Much House Is Too Much?", d: "Comfort ceilings below lender maximums." },
    { num: "137", slug: "car-buying-cash-loan-wait", mark: "◉", t: "Car Buying: Cash, Loan, or Wait", d: "Total cost of ownership and financing traps." },
    { num: "138", slug: "student-loans-first-90-days", mark: "◈", t: "Student Loans After Graduation: First 90 Days", d: "Inventory, cash flow, and strategy after graduation." },
    { num: "139", slug: "insurance-basics-gaps", mark: "▣", t: "Insurance Basics: What Gap Are You Actually Filling?", d: "Coverage as a goals inventory before you talk to an advisor." },
    { num: "140", slug: "monthly-money-review", mark: "▤", t: "A One-Hour Monthly Money Review", d: "A repeatable monthly agenda for households." },
  ];

export const ARTICLE_COUNT = ARTICLES.length;

export default function Education() {
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
        "name": "Education",
        "item": "https://topmoneytools.com/education",
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Education Center | TopMoneyTools"
        description="Plain-English guides from TopMoneyTools on inflation, budgeting, loan terms and credit scores — simple, friendly financial education for everyday life."
        path="/education"
        seoMeta={{
          url: "https://topmoneytools.com/education",
          type: "website",
        }}
        structuredData={[breadcrumbSchema]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3FFD6]/60">// Intel Brief</p>
        <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">Education Center</h1>
        <p className="mt-2 max-w-xl text-[#889988]">
          Learn the basics, one clear step at a time. {ARTICLES.length} plain-English articles on inflation, budgeting,
          taxes, investing, loans, insurance, and more.
        </p>

        <div className="mt-6">
          <AdSlot slot="top" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Reveal key={a.slug}>
              <Link to={`/education/${a.slug}`} className="group instrument-surface flex flex-col rounded-sm p-5 transition hover:instrument-glow">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">
                    Article-{a.num}
                  </span>
                  <span aria-hidden="true" className="font-mono text-xl text-[#A3FFD6]">{a.mark}</span>
                </div>
                <h2 className="mt-3 font-heading text-lg font-semibold text-[#E0E0E0]">{a.t}</h2>
                <p className="mt-1 flex-1 text-sm text-[#889988]">{a.d}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] group-hover:gap-2">
                  Read article <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/resources" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:gap-3">
            Explore All Resources <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}