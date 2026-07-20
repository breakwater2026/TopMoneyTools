import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function CreditCardPayoff() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(22);
  const [monthlyPayment, setMonthlyPayment] = useState(250);
  const [calculated, setCalculated] = useState(false);

  const monthlyRate = apr / 100 / 12;

  // Calculate payoff with fixed monthly payment
  let monthsToPayoff = 0;
  let totalInterest = 0;
  let remaining = balance;

  if (monthlyPayment <= balance * monthlyRate) {
    monthsToPayoff = Infinity;
    totalInterest = Infinity;
  } else {
    while (remaining > 0 && monthsToPayoff < 1200) {
      const interest = remaining * monthlyRate;
      const principal = Math.min(monthlyPayment - interest, remaining);
      if (principal <= 0) break;
      totalInterest += interest;
      remaining -= principal;
      monthsToPayoff++;
    }
  }

  // Minimum payment comparison (2% of balance or $25)
  const minPmt = Math.max(balance * 0.02, 25);
  let minMonths = 0;
  let minInterest = 0;
  let minRemaining = balance;

  if (minPmt <= balance * monthlyRate) {
    minMonths = Infinity;
    minInterest = Infinity;
  } else {
    while (minRemaining > 0 && minMonths < 1200) {
      const interest = minRemaining * monthlyRate;
      const principal = Math.min(minPmt - interest, minRemaining);
      if (principal <= 0) break;
      minInterest += interest;
      minRemaining -= principal;
      minMonths++;
    }
  }

  const payoffDate = new Date();
  payoffDate.setMonth(payoffDate.getMonth() + monthsToPayoff);

  const isInfinite = !isFinite(monthsToPayoff);

  return (
    <Layout>
      <ToolPageShell
        slug="credit-card-payoff"
        name="Credit Card Payoff Calculator"
        num="16"
        title="How Long Until You're Free of Credit Card Debt?"
        subtitle="Enter your balance, APR, and what you can pay each month to see your payoff timeline — and just how much interest you'd save by paying more."
        inputs={
          <>
            <NumberField label="Current balance" helper="The total amount you owe on this card." value={balance} onChange={setBalance} prefix="$" ariaLabel="Credit card balance" />
            <NumberField label="Annual interest rate (APR)" helper="Your card's purchase APR. The average is around 22%." value={apr} onChange={setApr} step={0.1} suffix="%" ariaLabel="APR" />
            <NumberField label="Planned monthly payment" helper="How much you can commit to paying each month." value={monthlyPayment} onChange={setMonthlyPayment} prefix="$" ariaLabel="Monthly payment" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Minimum payment would be ~{usd(minPmt)}/month ({isFinite(minMonths) ? `${minMonths} months` : "never pays off"} at that rate).</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Calculate Payoff Plan</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{
              label: isInfinite ? "Payment too low — balance never paid off" : "Time to payoff",
              value: isInfinite ? "∞" : `${monthsToPayoff} months`,
              sub: isInfinite ? "Increase your payment to at least " + usd(balance * monthlyRate + 1) + "/mo." : `Payoff by ${payoffDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
            }}
            rows={[
              { label: "Total Interest Paid", value: isInfinite ? "∞" : usd(totalInterest), emphasis: "mint" },
              { label: "Total Repaid", value: isInfinite ? "∞" : usd(balance + totalInterest) },
              { label: "Min. Payment Interest", value: isFinite(minInterest) ? usd(minInterest) : "∞" },
            ]}
          />
        }
        intelBrief={[
          { title: "Minimum payments are a trap", body: "Making only minimum payments on a $5,000 balance at 22% APR can take over 20 years to pay off and cost you thousands in interest. Every extra dollar toward principal shortens that timeline dramatically." },
          { title: "APR is the silent wealth destroyer", body: "Credit card interest compounds daily. A 22% APR means your balance roughly doubles every 3-4 years if you only make minimum payments — erasing years of hard work." },
          { title: "Snowball vs. avalanche method", body: "The avalanche method (paying highest APR first) saves the most money mathematically. The snowball method (smallest balance first) builds momentum psychologically. Both work — pick the one you'll stick with." },
        ]}
        learnMore={[
          { label: "Read: Credit Card Debt Payoff Strategies", to: "/education/credit-card-debt-payoff-strategies" },
          { label: "Glossary: Credit Score", to: "/glossary#credit-score" },
          { label: "Glossary: Debt-to-Income", to: "/glossary#debt-to-income" },
        ]}
        sidebarTerms={[
          { q: "What is APR?", slug: "apr" },
          { q: "What is a credit score?", slug: "credit-score" },
          { q: "What is debt-to-income?", slug: "debt-to-income" },
          { q: "What is compound interest?", slug: "compound-growth" },
          { q: "What is a minimum payment?", slug: "minimum-payment" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1559526324-4b87b5e743b2?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Credit cards spread on a table"
        imageCaption="Credit card debt compounds against you — but paying just a bit more each month changes everything."
      />
    </Layout>
  );
}
