import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, RangeField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function RentVsBuy() {
  const [monthlyRent, setMonthlyRent] = useState(2000);
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [yearsStaying, setYearsStaying] = useState(10);
  const [calculated, setCalculated] = useState(false);

  const months = yearsStaying * 12;

  // Rent side: increases 3% per year
  let totalRentCost = 0;
  let currentRent = monthlyRent;
  for (let y = 0; y < yearsStaying; y++) {
    totalRentCost += currentRent * 12;
    currentRent *= 1.03;
  }

  // Buy side
  const downPayment = homePrice * (downPct / 100);
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = 30 * 12;
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / numPayments
      : loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

  // Costs over staying period
  const closingCosts = homePrice * 0.03;
  const totalMortgagePaid = monthlyPayment * months;
  const totalPropertyTax = homePrice * (propertyTaxRate / 100) * yearsStaying;
  const totalMaintenance = homePrice * 0.01 * yearsStaying;
  const insuranceEstimate = 1500 * yearsStaying;

  // Home appreciation and equity
  const futureHomeValue = homePrice * Math.pow(1.03, yearsStaying);
  const remainingPrincipal = (() => {
    const n = months;
    const m = numPayments;
    const r = monthlyRate;
    if (r === 0) return loanAmount * (1 - n / m);
    return loanAmount * (Math.pow(1 + r, m) - Math.pow(1 + r, n)) / (Math.pow(1 + r, m) - 1);
  })();
  const equityAtSale = futureHomeValue - remainingPrincipal;

  // Opportunity cost of down payment (what it could have earned invested)
  const opCost = downPayment * Math.pow(1.07, yearsStaying) - downPayment;

  const totalBuyCost =
    downPayment +
    closingCosts +
    totalMortgagePaid +
    totalPropertyTax +
    totalMaintenance +
    insuranceEstimate +
    opCost -
    equityAtSale +
    remainingPrincipal;

  // Simplified: totalBuyCost vs totalRentCost
  const netDifference = totalRentCost - totalBuyCost; // positive = buying cheaper

  // Breakeven: find year where cumulative buy cost <= cumulative rent cost
  let breakevenYear = null;
  let cumRent = 0;
  let cr = monthlyRent;
  for (let y = 1; y <= yearsStaying; y++) {
    cumRent += cr * 12;
    cr *= 1.03;
    const cumBuy =
      downPayment +
      closingCosts +
      monthlyPayment * y * 12 +
      homePrice * (propertyTaxRate / 100) * y +
      homePrice * 0.01 * y +
      insuranceEstimate * (y / yearsStaying) +
      (downPayment * Math.pow(1.07, y) - downPayment) -
      (homePrice * Math.pow(1.03, y) -
        (() => {
          const n2 = y * 12;
          const m2 = numPayments;
          const r2 = monthlyRate;
          if (r2 === 0) return loanAmount * (1 - n2 / m2);
          return loanAmount * (Math.pow(1 + r2, m2) - Math.pow(1 + r2, n2)) / (Math.pow(1 + r2, m2) - 1);
        })()) +
      (() => {
        const n2 = y * 12;
        const m2 = numPayments;
        const r2 = monthlyRate;
        if (r2 === 0) return loanAmount * (1 - n2 / m2);
        return loanAmount * (Math.pow(1 + r2, m2) - Math.pow(1 + r2, n2)) / (Math.pow(1 + r2, m2) - 1);
      })();

    if (breakevenYear === null && cumBuy <= cumRent) {
      breakevenYear = y;
    }
  }

  return (
    <Layout>
      <ToolPageShell
        slug="rent-vs-buy"
        name="Rent vs. Buy Calculator"
        num="15"
        title="Should You Rent or Buy? Let the Numbers Decide."
        subtitle="Compare the true cost of renting versus buying over your planned stay — including appreciation, maintenance, taxes, and opportunity cost."
        inputs={
          <>
            <NumberField label="Current monthly rent" helper="What you pay in rent each month right now." value={monthlyRent} onChange={setMonthlyRent} prefix="$" ariaLabel="Monthly rent" />
            <NumberField label="Home purchase price" helper="The price of a home you're considering." value={homePrice} onChange={setHomePrice} prefix="$" ariaLabel="Home price" />
            <RangeField label="Down payment (%)" helper="Typical is 20% to avoid PMI." value={downPct} onChange={setDownPct} min={3} max={50} unit="%" ariaLabel="Down payment percentage" />
            <NumberField label="Mortgage interest rate (%)" helper="Current 30-year fixed rate." value={interestRate} onChange={setInterestRate} step={0.1} suffix="%" ariaLabel="Interest rate" />
            <NumberField label="Property tax rate (%)" helper="Annual property tax as a percentage of home value." value={propertyTaxRate} onChange={setPropertyTaxRate} step={0.1} suffix="%" ariaLabel="Property tax rate" />
            <RangeField label="How many years do you plan to stay?" helper="The longer you stay, the more buying tends to win." value={yearsStaying} onChange={setYearsStaying} min={1} max={30} unit=" yrs" ariaLabel="Years staying" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Comparing {yearsStaying} years of renting vs. buying at {interestRate}% interest.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Compare Rent vs. Buy</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{
              label: netDifference > 0 ? "Buying saves you money" : "Renting saves you money",
              value: usd(Math.abs(netDifference)),
              sub: `Over ${yearsStaying} years, the ${netDifference > 0 ? "buy" : "rent"} path is cheaper.`,
            }}
            rows={[
              { label: "Total Rent Cost", value: usd(totalRentCost) },
              { label: "Total Buy Cost", value: usd(totalBuyCost) },
              { label: breakevenYear ? `Breakeven Year` : "No Breakeven", value: breakevenYear ? `Year ${breakevenYear}` : "N/A", emphasis: "mint" },
            ]}
          />
        }
        intelBrief={[
          { title: "Renting isn't 'throwing money away'", body: "Rent buys flexibility and freedom from maintenance, property taxes, and transaction costs. For short stays, renting is often the smarter financial move." },
          { title: "Buying builds equity — but slowly at first", body: "In the early years of a mortgage, most of your payment goes toward interest. It can take 5-7 years before you're building meaningful equity, which is why short-term ownership rarely wins." },
          { title: "Don't forget the hidden costs of ownership", body: "Maintenance (~1% of home value per year), property taxes, insurance, and closing costs add up. These 'invisible' costs can make renting cheaper than you'd expect." },
        ]}
        learnMore={[
          { label: "Read: The True Cost of Homeownership", to: "/education/true-cost-of-buying-a-home" },
          { label: "Glossary: Mortgage", to: "/glossary#mortgage" },
          { label: "Use: Mortgage Calculator", to: "/tools/mortgage" },
        ]}
        sidebarTerms={[
          { q: "What is a mortgage?", slug: "mortgage" },
          { q: "What is a down payment?", slug: "down-payment" },
          { q: "What is home equity?", slug: "home-equity" },
          { q: "What is PMI?", slug: "pmi" },
          { q: "What is amortization?", slug: "amortization" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format&fit=crop"
        imageAlt="House with sold sign in front yard"
        imageCaption="The rent vs. buy decision comes down to time — and the numbers usually have a clear answer."
      />
    </Layout>
  );
}
