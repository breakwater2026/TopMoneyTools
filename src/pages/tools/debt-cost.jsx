import { useState, useEffect } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, RangeField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function DebtCost() {
  const [principal, setPrincipal] = useState(10000);
  const [country, setCountry] = useState("US");
  const [years, setYears] = useState(5);
  const [calculated, setCalculated] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tools/debt-cost-calculator/Countries-Debt.json")
      .then(response => response.json())
      .then(data => {
        setCountries(data.countries);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading countries:", error);
        setLoading(false);
      });
  }, []);

  const getRate = (code) => {
    const countryData = countries.find(c => c.code === code);
    return countryData ? countryData.value : 5.2;
  };

  const rate = getRate(country);
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
            <SelectField
              label="Which country do you live in?"
              helper="This sets a typical annual interest rate for your region — you can always adjust it manually!"
              value={country}
              onChange={setCountry}
              ariaLabel="Country or region"
              options={countries.map(c => ({ value: c.code, label: `${c.name} (${c.value}% avg)` }))}
            />
            <RangeField label="How many years will you be repaying?" helper="Most personal loans are 1-7 years. Mortgages are typically 15-30 years." value={years} onChange={setYears} min={1} max={30} unit=" yrs" ariaLabel="Loan term in years" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Using {rate}% annual interest rate.</p>
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
          { label: "Read: How to Compare Loans", to: "/education/how-to-compare-loans" },
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
