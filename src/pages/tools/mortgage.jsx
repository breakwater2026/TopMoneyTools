import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, RangeField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function Mortgage() {
  const [price, setPrice] = useState(400000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState("30");
  const [calculated, setCalculated] = useState(false);

  const downPayment = (price * downPct) / 100;
  const loanAmount = price - downPayment;
  const monthlyRate = rate / 100 / 12;
  const months = +term * 12;
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
  const totalPaid = monthlyPayment * months;
  const totalInterest = totalPaid - loanAmount;

  return (
    <Layout>
      <ToolPageShell
        slug="mortgage-payment"
        name="Mortgage Payment Calculator"
        num="03"
        title="See What Your Home Really Costs You — Every Month and Over Time."
        subtitle="Enter your home price, down payment, and loan details to see your true monthly payment and the full cost of interest across the life of the loan."
        inputs={
          <>
            <NumberField label="Home price" helper="Enter the total purchase price of the home." value={price} onChange={setPrice} prefix="$" ariaLabel="Home price" />
            <RangeField label="Down payment (%)" helper="A larger down payment lowers both your monthly payment and total interest." value={downPct} onChange={setDownPct} min={0} max={100} unit="%" ariaLabel="Down payment percentage" />
            <p className="font-data text-sm text-[#A3FFD6]">{usd(downPayment)} ({downPct}%)</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField label="Interest rate (%)" helper="Your lender's quoted annual percentage rate." value={rate} onChange={setRate} prefix="" suffix="%" step={0.05} ariaLabel="Interest rate" />
              <SelectField
                label="Loan term (years)"
                helper="Longer terms mean lower monthly payments but more total interest."
                value={term}
                onChange={setTerm}
                options={[{ value: "15", label: "15 years" }, { value: "20", label: "20 years" }, { value: "25", label: "25 years" }, { value: "30", label: "30 years" }]}
                ariaLabel="Loan term"
              />
            </div>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate My Mortgage</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Estimated monthly payment", value: usd(monthlyPayment), sub: `${usd(loanAmount)} borrowed at ${rate}% over ${term} years` }}
            rows={[
              { label: "Total Interest", value: usd(totalInterest), emphasis: "amber" },
              { label: "Total Paid", value: usd(totalPaid) },
              { label: "Loan Amount", value: usd(loanAmount) },
            ]}
          />
        }
        intelBrief={[
          { title: "Longer terms cost more interest", body: "Spreading the loan across more years lowers your monthly payment, but you pay interest for longer — often tens of thousands more over the life of the loan." },
          { title: "Down payment shrinks your loan", body: "A larger down payment reduces what you borrow, which lowers both your monthly payment and the total interest you'll pay." },
          { title: "Interest compounds against you", body: "Each month interest is charged on the remaining balance. A small rate difference adds up to a large difference over 30 years." },
        ]}
        learnMore={[
          { label: "Read: How to Compare Loans", to: "/education/how-to-compare-loans" },
          { label: "Glossary: Amortization", to: "/glossary#amortization" },
          { label: "Use: Debt Cost Calculator", to: "/tools/debt-cost" },
        ]}
        sidebarTerms={[
          { q: "What is amortization?", slug: "amortization" },
          { q: "What is a down payment?", slug: "down-payment" },
          { q: "What is equity?", slug: "equity" },
          { q: "What is principal & interest?", slug: "principal-interest" },
          { q: "What is APR?", slug: "apr" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1568605114967-8130f7a695a6?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of a small brass house model on dark wood"
        imageCaption="Your monthly payment is only part of the story — interest adds up over decades."
      />
    </Layout>
  );
}
