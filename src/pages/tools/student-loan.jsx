import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function StudentLoan() {
  const [balance, setBalance] = useState(30000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [monthlyPayment, setMonthlyPayment] = useState(350);
  const [calculated, setCalculated] = useState(false);

  const monthlyRate = interestRate / 100 / 12;

  // Amortization loop
  let remaining = balance;
  let monthsToPayoff = 0;
  let totalInterest = 0;

  if (monthlyPayment <= remaining * monthlyRate) {
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

  const totalRepayment = isFinite(monthsToPayoff) ? balance + totalInterest : Infinity;
  const monthlyInterestFirst = balance * monthlyRate;
  const isInfinite = !isFinite(monthsToPayoff);

  const payoffDate = new Date();
  if (!isInfinite) {
    payoffDate.setMonth(payoffDate.getMonth() + monthsToPayoff);
  }

  return (
    <Layout>
      <ToolPageShell
        slug="student-loan"
        name="Student Loan Repayment Calculator"
        num="21"
        title="When Will You Be Free of Your Student Loans?"
        subtitle="See your payoff timeline, total interest cost, and how much faster you'd be done by paying a little extra each month."
        inputs={
          <>
            <NumberField label="Loan balance" helper="The total remaining principal on your student loans." value={balance} onChange={setBalance} prefix="$" ariaLabel="Loan balance" />
            <NumberField label="Interest rate (%)" helper="Your weighted average interest rate across all loans." value={interestRate} onChange={setInterestRate} step={0.1} suffix="%" ariaLabel="Interest rate" />
            <NumberField label="Monthly payment" helper="What you actually pay each month toward this loan." value={monthlyPayment} onChange={setMonthlyPayment} prefix="$" ariaLabel="Monthly payment" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">First month: ~{usd(monthlyInterestFirst)} goes to interest, ~{usd(Math.max(0, monthlyPayment - monthlyInterestFirst))} to principal.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Calculate Payoff</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{
              label: isInfinite ? "Payment too low — loan never paid off" : "Time to payoff",
              value: isInfinite ? "∞" : `${monthsToPayoff} months`,
              sub: isInfinite ? `Increase to at least ${usd(balance * monthlyRate + 1)}/mo.` : `Estimated payoff: ${payoffDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
            }}
            rows={[
              { label: "Total Interest", value: isInfinite ? "∞" : usd(totalInterest), emphasis: "mint" },
              { label: "Total Repayment", value: isInfinite ? "∞" : usd(totalRepayment) },
              { label: "1st Month Interest", value: usd(monthlyInterestFirst) },
            ]}
          />
        }
        intelBrief={[
          { title: "Interest accrues daily on most federal loans", body: "Unlike mortgages, federal student loan interest typically accrues daily. This means every day you wait to pay costs you money — even small extra payments can meaningfully reduce total interest over the life of the loan." },
          { title: "Income-driven repayment can stretch debt for decades", body: "IDR plans cap your payment at a percentage of income, but they can extend your repayment to 20-25 years. You'll pay far more in total interest, and the forgiven amount may be taxable — a surprise many borrowers don't anticipate." },
          { title: "Refinancing can save thousands — but has tradeoffs", body: "Refinancing federal loans to a private lender can lower your rate significantly, but you lose federal protections like income-driven repayment, deferment, and forgiveness programs. Make sure you won't need those before you refinance." },
        ]}
        learnMore={[
          { label: "Read: Student Loan Strategies", to: "/education/student-loan-strategies" },
          { label: "Glossary: Student Loan", to: "/glossary#student-loan" },
        ]}
        sidebarTerms={[
          { q: "What is a student loan?", slug: "student-loan" },
          { q: "What is compound interest?", slug: "compound-growth" },
          { q: "What is a 529 plan?", slug: "529-plan" },
          { q: "What is interest capitalization?", slug: "interest-capitalization" },
          { q: "What is debt-to-income?", slug: "debt-to-income" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1523050854058-8df90910fa6f?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Graduation cap on a stack of books"
        imageCaption="Student loans are an investment in yourself — but paying them off efficiently is the real graduation."
      />
    </Layout>
  );
}
