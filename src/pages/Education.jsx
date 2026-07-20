import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AdSlot from "@/components/AdSlot";
import Reveal from "@/components/Reveal";

export const ARTICLES = [
  { slug: "how-inflation-affects-your-daily-budget", mark: "▮", t: "How Inflation Affects Your Daily Budget", d: "Understand why prices rise and how to stay ahead of them." },
  { slug: "budgeting-for-beginners", mark: "▣", t: "Budgeting for Beginners (50/30/20 Rule)", d: "A simple method to bring balance and clarity to your spending." },
  { slug: "how-to-compare-loans", mark: "◈", t: "How to Compare Loans", d: "Learn the three numbers that matter most when choosing a loan." },
  { slug: "budgeting-101", mark: "▤", t: "Budgeting 101", d: "The beginner's complete guide to building a budget that actually works." },
  { slug: "investing-101", mark: "▦", t: "Investing 101", d: "How to start growing your money — compound growth, risk, and time explained." },
  { slug: "retirement-planning-basics", mark: "▧", t: "Retirement Planning Basics", d: "How much you need, the 4% rule, and how to project your nest egg." },
  { slug: "understanding-interest-rates", mark: "▨", t: "Understanding Interest Rates", d: "What APR means, how amortization works, and why 1% matters." },
  { slug: "how-inflation-works", mark: "▩", t: "How Inflation Works", d: "What causes inflation, how it compounds, and how to stay ahead." },
  { slug: "credit-scores-and-borrowing", mark: "◉", t: "Credit Scores & Borrowing", d: "What your credit score means and how to borrow smarter." },
  { slug: "emergency-funds-and-safety-nets", mark: "◎", t: "Emergency Funds & Financial Safety Nets", d: "Build the financial cushion that protects everything else." },
  { slug: "tax-brackets-explained", mark: "◊", t: "Tax Brackets Explained", d: "How progressive tax brackets actually work — marginal vs effective rates." },
  { slug: "rent-vs-buy", mark: "◌", t: "Rent vs. Buy: The Full Math", d: "Hidden costs of ownership, opportunity cost, and when renting wins." },
  { slug: "credit-card-interest", mark: "○", t: "Credit Card Interest Demystified", d: "APR, minimum payment traps, and smart payoff strategies." },
  { slug: "compound-interest-guide", mark: "●", t: "Compound Interest: The Eighth Wonder", d: "Rule of 72, time value of money, and starting early vs late." },
  { slug: "home-affordability", mark: "◐", t: "Home Affordability: How Much House?", d: "DTI ratios, down payments, PMI, and hidden costs of ownership." },
  { slug: "car-buying-guide", mark: "◑", t: "Car Buying: New vs. Used", d: "Depreciation, total cost of ownership, and the 20/4/10 rule." },
  { slug: "safe-withdrawal-rates", mark: "◒", t: "The 4% Rule & Safe Withdrawal Rates", d: "Sequence of returns risk, Trinity Study, and variable strategies." },
  { slug: "student-loan-strategies", mark: "◓", t: "Student Loan Repayment Strategies", d: "Federal vs private, IDR plans, PSLF, and payoff approaches." },
  { slug: "dollar-cost-averaging", mark: "◔", t: "Dollar-Cost Averaging Deep Dive", d: "DCA vs lump sum, behavioral benefits, and when each wins." },
  { slug: "insurance-essentials", mark: "◕", t: "Insurance: What You Actually Need", d: "Term vs whole life, health, disability — what's mandatory vs optional." },
  { slug: "side-hustle-economics", mark: "◖", t: "Side Hustle Economics", d: "Self-employment tax, real hourly rate, and quarterly tax math." },
  { slug: "couples-and-money", mark: "◗", t: "Couples & Money", d: "Joint accounts, money conversations, and budgeting as a team." },
  { slug: "inflation-proofing-savings", mark: "◘", t: "Inflation-Proofing Your Savings", d: "Real returns, TIPS, I-bonds, and stock market as inflation hedge." },
  { slug: "net-worth-by-age", mark: "◙", t: "Net Worth Benchmarks by Age", d: "How to calculate, age benchmarks, and tracking progress." },
  { slug: "fire-movement", mark: "◆", t: "Financial Independence Retire Early (FIRE)", d: "FIRE number, Lean vs Fat FIRE, and the savings rate math." },
];

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
        <p className="mt-2 max-w-xl text-[#889988]">Learn the basics, one clear step at a time. Twenty-five plain-English articles on inflation, budgeting, taxes, investing, loans, insurance, and more.</p>

        <div className="mt-6">
          <AdSlot slot="top" className="h-[60px]" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Reveal key={a.slug}>
              <Link to={`/education/${a.slug}`} className="group instrument-surface flex flex-col rounded-sm p-5 transition hover:instrument-glow">
                <span aria-hidden="true" className="font-mono text-2xl text-[#A3FFD6]">{a.mark}</span>
                <h2 className="mt-3 font-heading text-lg font-semibold text-[#E0E0E0]">{a.t}</h2>
                <p className="mt-1 flex-1 text-sm text-[#889988]">{a.d}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] group-hover:gap-2">Read article <ArrowRight className="h-3 w-3" /></span>
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