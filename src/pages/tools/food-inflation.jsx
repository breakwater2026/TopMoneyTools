import { useState, useEffect } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, RangeField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function FoodInflation() {
  const [spend, setSpend] = useState(400);
  const [region, setRegion] = useState("US");
  const [years, setYears] = useState(5);
  const [calculated, setCalculated] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tools/food-inflation-calculator/Countries-Inflation.json")
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
    const country = countries.find(c => c.code === code);
    return country ? country.value : 2.4;
  };

  const getLabel = (code) => {
    const country = countries.find(c => c.code === code);
    return country ? `${country.name} (${country.value}% avg)` : "United States (2.4% avg)";
  };

  const rate = getRate(region);
  const future = spend * Math.pow(1 + rate / 100, years);
  const totalIncrease = future - spend;
  const pctIncrease = (totalIncrease / spend) * 100;

  return (
    <Layout>
      <ToolPageShell
        slug="food-inflation"
        name="Food Inflation Calculator"
        num="01"
        title="What Will Your Groceries Cost in the Future?"
        subtitle="Enter your monthly grocery spend and see how inflation could quietly increase that cost over time — in plain, honest numbers."
        inputs={
          <>
            <NumberField label="What is your monthly grocery spend?" helper="Include all food shopping — supermarket, market, everything." value={spend} onChange={setSpend} prefix="$" ariaLabel="Monthly grocery spend" />
            <SelectField
              label="Which country do you live in?"
              helper="This sets the typical food inflation rate for your region."
              value={region}
              onChange={setRegion}
              ariaLabel="Country or region"
              options={countries.map(c => ({ value: c.code, label: `${c.name} (${c.value}% avg)` }))}
            />
            <RangeField label="How many years ahead do you want to see?" helper="Try 5 years to start — small changes add up fast." value={years} onChange={setYears} min={1} max={30} unit=" yrs" ariaLabel="Years ahead" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">Using {rate}% annual food inflation rate.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate My Grocery Impact</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Estimated monthly grocery spend in future", value: usd(future), sub: `${usd(spend)} today → ${usd(future)} in ${years} years` }}
            rows={[
              { label: "Monthly Increase", value: `+${usd(totalIncrease)}`, emphasis: "mint" },
              { label: "Percentage Increase", value: `+${pctIncrease.toFixed(1)}%` },
              { label: "Extra Cost / Year", value: `+${usd(totalIncrease * 12)}` },
            ]}
          />
        }
        intelBrief={[
          { title: "Inflation compounds — just like interest", body: "If food prices rise 4% this year, next year's 4% applies to the already-higher price. Each year builds on the last, which is why even modest inflation adds up dramatically over time." },
          { title: "Your salary has to keep up", body: "If food costs 20% more in 5 years but your pay doesn't rise, you've effectively taken a pay cut. Inflation is a hidden reduction in what your money can actually buy." },
          { title: "Food inflation ≠ general inflation", body: "The headline inflation figure covers everything from rent to electronics. Food prices often rise faster — especially for staples like bread, dairy, and vegetables — so your grocery bill can outpace the official number." },
        ]}
        learnMore={[
          { label: "Read: Why Inflation Compounds", to: "/education/how-inflation-affects-your-daily-budget" },
          { label: "Glossary: Purchasing Power", to: "/glossary#purchasing-power" },
        ]}
        sidebarTerms={[
          { q: "What is inflation?", slug: "inflation" },
          { q: "What is purchasing power?", slug: "purchasing-power" },
          { q: "What is compound growth?", slug: "compound-growth" },
          { q: "What is a budget?", slug: "budget" },
          { q: "What is surplus?", slug: "surplus" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1604908554049-3ec3b8b517f8?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of a brass compass needle on dark linen"
        imageCaption="Even the basics cost more each year — knowing the number gives you power to plan ahead."
      />
    </Layout>
  );
}