import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, SelectField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function DcaVsLumpSum() {
  const [totalAmount, setTotalAmount] = useState(12000);
  const [monthlyDca, setMonthlyDca] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [volatility, setVolatility] = useState("Medium");
  const [calculated, setCalculated] = useState(false);

  const monthlyRate = expectedReturn / 100 / 12;
  const dcaMonths = Math.ceil(totalAmount / monthlyDca);

  // Lump sum: invest everything at month 0, let it compound
  const lumpSumExpected = totalAmount * Math.pow(1 + expectedReturn / 100, 1);

  // DCA: invest monthlyDca each month
  let dcaBalance = 0;
  let remaining = totalAmount;
  for (let m = 0; m < dcaMonths; m++) {
    const invest = Math.min(monthlyDca, remaining);
    dcaBalance += invest;
    remaining -= invest;
    // Grow the balance for one month
    dcaBalance *= 1 + monthlyRate;
  }

  // Grow lump sum for the same total period
  const lumpSumFinal = totalAmount * Math.pow(1 + monthlyRate, dcaMonths);

  // Volatility adjustment factors
  const volFactors = { Low: 0.5, Medium: 1.0, High: 1.5 };
  const volFactor = volFactors[volatility];

  const lumpSumRiskAdjusted = lumpSumFinal * (1 - volFactor * 0.02);
  const dcaRiskAdjusted = dcaBalance * (1 - volFactor * 0.005);

  const difference = Math.abs(lumpSumRiskAdjusted - dcaRiskAdjusted);
  const recommendation = lumpSumRiskAdjusted > dcaRiskAdjusted
    ? "Lump sum historically wins ~2/3 of the time, but DCA reduces regret."
    : "DCA outperforms in this scenario — likely due to the long deployment period.";

  return (
    <Layout>
      <ToolPageShell
        slug="dca-vs-lump-sum"
        name="DCA vs Lump Sum Simulator"
        num="22"
        title="Should You Invest All at Once or Spread It Out?"
        subtitle="Compare dollar-cost averaging against a lump-sum investment and see how market volatility affects each strategy."
        inputs={
          <>
            <NumberField label="Total amount to invest" helper="The full amount you have ready to invest." value={totalAmount} onChange={setTotalAmount} prefix="$" ariaLabel="Total amount" />
            <NumberField label="Monthly DCA amount" helper="How much you'd invest each month if spreading it out." value={monthlyDca} onChange={setMonthlyDca} prefix="$" ariaLabel="Monthly DCA amount" />
            <NumberField label="Expected annual return (%)" helper="Long-term market average is ~7%." value={expectedReturn} onChange={setExpectedReturn} step={0.1} suffix="%" ariaLabel="Expected return" />
            <SelectField
              label="Market volatility"
              helper="Higher volatility increases the risk of a bad entry point."
              value={volatility}
              onChange={setVolatility}
              ariaLabel="Volatility"
              options={[
                { value: "Low", label: "Low (calm market)" },
                { value: "Medium", label: "Medium (normal conditions)" },
                { value: "High", label: "High (uncertain market)" },
              ]}
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">DCA over ~{dcaMonths} months vs. lump sum today at {expectedReturn}% expected return.</p>
          </>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true); }}>Compare Strategies</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{
              label: lumpSumRiskAdjusted > dcaRiskAdjusted ? "Lump sum projects higher" : "DCA projects higher",
              value: `+${usd(difference)}`,
              sub: `After ${dcaMonths} months — risk-adjusted for ${volatility.toLowerCase()} volatility.`,
            }}
            rows={[
              { label: "Lump Sum (Risk-Adj.)", value: usd(lumpSumRiskAdjusted), emphasis: "mint" },
              { label: "DCA (Risk-Adj.)", value: usd(dcaRiskAdjusted) },
              { label: "Recommendation", value: lumpSumRiskAdjusted > dcaRiskAdjusted ? "Lump Sum" : "DCA" },
            ]}
          />
        }
        intelBrief={[
          { title: "Lump sum wins about 2/3 of the time", body: "Historical data shows that investing everything at once outperforms DCA roughly two-thirds of the time — because markets go up more often than they go down. Time in the market beats timing the market." },
          { title: "DCA wins on peace of mind", body: "The biggest risk of lump-sum investing isn't mathematical — it's psychological. If the market drops 20% right after you invest $100,000, will you panic-sell? DCA protects you from the emotional cost of a bad entry point." },
          { title: "DCA works best in volatile or declining markets", body: "When markets are choppy, buying at regular intervals means you catch some shares at lower prices. This 'averaging down' can outperform lump sum during downturns, which is why the strategy is most valuable when you're nervous." },
        ]}
        learnMore={[
          { label: "Read: Lump Sum vs Dollar Cost Averaging", to: "/education/lump-sum-vs-dca" },
          { label: "Glossary: Dollar-Cost Averaging", to: "/glossary#dollar-cost-averaging" },
          { label: "Use: Compound Interest Calculator", to: "/tools/compound-interest" },
        ]}
        sidebarTerms={[
          { q: "What is dollar-cost averaging?", slug: "dollar-cost-averaging" },
          { q: "What is an index fund?", slug: "index-fund" },
          { q: "What is volatility?", slug: "volatility" },
          { q: "What is an ETF?", slug: "etf" },
          { q: "What is compound growth?", slug: "compound-growth" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Stock market chart on a screen"
        imageCaption="Mathematics favors lump sum — but psychology favors DCA. Both are better than not investing at all."
      />
    </Layout>
  );
}
