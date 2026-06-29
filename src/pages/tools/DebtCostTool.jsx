import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, RangeField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function DebtCostTool() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(5);
  const [calculated, setCalculated] = useState(false);

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  const monthlyPayment =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
  const totalPaid = monthlyPayment * months;
  const totalInterest = totalPaid - principal;

  return (
    <Layout>
      <ToolPageShell
        slug="debt-cost"
        name="Debt Cost Calculator"
        num="02"
        title="Find Out the True Cost of Any Loan."
        subtitle="The price tag on a loan isn't just what you borrow. Enter your loan details and see exactly how much you'll really pay — including the extra cost of interest, in plain numbers."
        inputs={
          <>
            <NumberField label="How much do you want to borrow?" helper="The total loan amount — e.g. car, personal loan, or credit card balance." value={principal} onChange={setPrincipal} prefix="$" ariaLabel="Loan amount" />
            <NumberField label="What is the annual interest rate?" helper="Check your loan agreement or credit card statement. A typical personal loan is 6-20%." value={rate} onChange={setRate} prefix="" suffix="%" step={0.1} ariaLabel="Annual interest rate" />
            <RangeField label="How many years will you be repaying?" helper="Most personal loans are 1-7 years. Mortgages are typically 15-30 years." value={years} onChange={setYears} min={1} max={30} unit=" yrs" ariaLabel="Loan term in years" />
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate My Debt Cost</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Estimated monthly payment", value: usd(monthlyPayment), sub: `${usd(principal)} borrowed at ${rate}% over ${years} years` }}
            rows={[
              { label: "Total Interest Paid", value: usd(totalInterest), emphasis: "amber" },
              { label: "Total Repaid", value: usd(totalPaid) },
              { label: "Interest as % of Loan", value: `${((totalInterest / principal) * 100).toFixed(1)}%` },
            ]}
          />
        }
        intelBrief={[
          { title: "Interest is the price of borrowing", body: "When you borrow money, the lender charges interest — a yearly percentage on what you owe. The longer you take to repay, the more interest you pay total." },
          { title: "Term length matters more than you think", body: "A longer-term loan feels cheaper month-to-month but costs far more in total interest. Doubling your repayment time can nearly double your total cost." },
          { title: "Small rate differences add up", body: "A 2% lower rate on a large loan can save thousands over the lifetime. That's why it pays to shop around and improve your credit score before applying." },
        ]}
        learnMore={[
          { label: "Read: How to Compare Loans", to: "/education/how-to-compare-loans-without-getting-confused" },
          { label: "Glossary: APR", to: "/glossary#apr" },
        ]}
        sidebarTerms={[
          { q: "What is interest?", slug: "interest" },
          { q: "What is APR?", slug: "apr" },
          { q: "What is principal?", slug: "principal" },
          { q: "What is amortization?", slug: "amortization" },
          { q: "What is a credit score?", slug: "credit-score" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1601597111158-2fceff292dc9?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of a fountain pen nib touching ledger paper"
        imageCaption="The price of a loan is rarely the number on the sticker — it's what you actually repay."
      />
    </Layout>
  );
}
