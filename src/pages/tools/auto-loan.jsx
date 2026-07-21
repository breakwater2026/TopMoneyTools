import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function AutoLoan() {
  const [carPrice, setCarPrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(3000);
  const [interestRate, setInterestRate] = useState(7);
  const [loanTerm, setLoanTerm] = useState("60");
  const [calculated, setCalculated] = useState(false);

  const loanAmount = Math.max(0, carPrice - downPayment - tradeIn);
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = parseInt(loanTerm);

  // Standard amortization: M = P * [r(1+r)^n] / [(1+r)^n - 1]
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / numPayments
      : loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

  const totalCost = monthlyPayment * numPayments;
  const totalInterest = totalCost - loanAmount;

  // First month principal vs interest
  const firstMonthInterest = loanAmount * monthlyRate;
  const firstMonthPrincipal = monthlyPayment - firstMonthInterest;

  return (
    <Layout>
      <ToolPageShell
        slug="auto-loan"
        name="Auto Loan Calculator"
        num="19"
        title="What Will That Car Actually Cost You?"
        subtitle="See your real monthly payment — and how much interest you'll pay over the life of the loan."
        inputs={
          <>
            <NumberField label="Car purchase price" helper="The negotiated price before any down payment or trade-in." value={carPrice} onChange={setCarPrice} prefix="$" ariaLabel="Car price" />
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Down payment" helper="Cash you're putting down upfront." value={downPayment} onChange={setDownPayment} prefix="$" ariaLabel="Down payment" />
              <NumberField label="Trade-in value" helper="Value of your current vehicle." value={tradeIn} onChange={setTradeIn} prefix="$" ariaLabel="Trade-in value" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Interest rate (%)" helper="Your auto loan APR." value={interestRate} onChange={setInterestRate} step={0.1} suffix="%" ariaLabel="Interest rate" />
              <SelectField
                label="Loan term"
                helper="Longer terms mean lower payments but more total interest."
                value={loanTerm}
                onChange={setLoanTerm}
                ariaLabel="Loan term"
                options={[
                  { value: "36", label: "36 months (3 years)" },
                  { value: "48", label: "48 months (4 years)" },
                  { value: "60", label: "60 months (5 years)" },
                  { value: "72", label: "72 months (6 years)" },
                ]}
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Loan amount: {usd(loanAmount)} over {loanTerm} months at {interestRate}% APR.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Calculate Auto Loan</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Monthly payment", value: usd(monthlyPayment), sub: `Total cost: ${usd(totalCost)} over ${loanTerm} months` }}
            rows={[
              { label: "Total Interest", value: usd(totalInterest), emphasis: "mint" },
              { label: "1st Month: Principal", value: usd(firstMonthPrincipal) },
              { label: "1st Month: Interest", value: usd(firstMonthInterest) },
            ]}
          />
        }
        intelBrief={[
          { title: "Interest front-loads your payments", body: "In the first month of a 7% auto loan, a huge chunk of your payment goes to interest — not principal. This shifts slowly over time, which is why paying extra early saves you the most." },
          { title: "Longer terms cost thousands more", body: "Stretching a $30,000 loan from 48 to 72 months at 7% can add over $2,000 in extra interest. The lower monthly payment is tempting, but the total cost is much higher." },
          { title: "The 20/4/10 rule for car buying", body: "A healthy guideline: put 20% down, finance for no more than 4 years (48 months), and keep total monthly car expenses under 10% of gross income. This protects you from being underwater on your loan." },
        ]}
        learnMore={[
          { label: "Read: Car Buying Guide", to: "/education/car-buying-guide" },
          { label: "Glossary: Interest Rate", to: "/glossary#interest-rate" },
        ]}
        sidebarTerms={[
          { q: "What is an interest rate?", slug: "interest-rate" },
          { q: "What is amortization?", slug: "amortization" },
          { q: "What is a credit score?", slug: "credit-score" },
          { q: "What is a down payment?", slug: "down-payment" },
          { q: "What is APR?", slug: "apr" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Car keys on dashboard"
        imageCaption="A car is a depreciating asset — don't let the loan make it an expensive one."
      />
    </Layout>
  );
}
