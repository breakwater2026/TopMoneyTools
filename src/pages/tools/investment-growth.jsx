import { lazy, Suspense, useMemo, useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, RangeField, CalculateButton, usd } from "@/components/tools/FormControls";

const InvestmentGrowthChart = lazy(() => import("@/components/tools/InvestmentGrowthChart"));

export default function InvestmentGrowth() {
  const [initial, setInitial] = useState(5000);
  const [monthly, setMonthly] = useState(250);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(25);
  const [calculated, setCalculated] = useState(false);

  const { finalValue, totalContributed, totalGrowth, chartData } = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const series = [];
    let balance = initial;
    let contributed = initial;

    series.push({
      year: 0,
      value: Math.round(balance),
      contributions: Math.round(contributed),
    });

    for (let m = 1; m <= months; m++) {
      balance = balance * (1 + monthlyRate) + monthly;
      contributed += monthly;

      if (m % 12 === 0) {
        series.push({
          year: m / 12,
          value: Math.round(balance),
          contributions: Math.round(contributed),
        });
      }
    }

    return {
      finalValue: Math.round(balance),
      totalContributed: Math.round(contributed),
      totalGrowth: Math.round(balance - contributed),
      chartData: series,
    };
  }, [initial, monthly, rate, years]);

  return (
    <Layout>
      <ToolPageShell
        slug="investment-growth"
        name="Investment Growth Calculator"
        num="04"
        title="Watch Your Money Grow — and See Where the Growth Comes From."
        subtitle="Enter your starting amount, monthly contributions, expected return, and time horizon to see how compounding builds wealth, year by year."
        inputs={
          <>
            <NumberField
              label="Initial investment"
              helper="The lump sum you start with today."
              value={initial}
              onChange={setInitial}
              prefix="$"
              ariaLabel="Initial investment"
            />
            <NumberField
              label="Monthly contribution"
              helper="The amount you add each month, consistently."
              value={monthly}
              onChange={setMonthly}
              prefix="$"
              ariaLabel="Monthly contribution"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField
                label="Expected annual return (%)"
                helper="A diversified stock portfolio has averaged ~7% after inflation."
                value={rate}
                onChange={setRate}
                prefix=""
                suffix="%"
                step={0.1}
                ariaLabel="Annual return"
              />
              <RangeField
                label="Years invested"
                helper="Stay invested as long as you can — time is compounding's engine."
                value={years}
                onChange={setYears}
                min={1}
                max={45}
                unit=" yrs"
                ariaLabel="Years invested"
              />
            </div>
          </>
        }
        calculate={
          <CalculateButton
            onClick={() => {
              setCalculated(true);
            }}
          >
            Calculate Investment Growth
          </CalculateButton>
        }
        results={
          <>
            <ToolResultBlock
              visible={calculated}
              headline={{ label: `Projected value in ${years} years`, value: usd(finalValue) }}
              rows={[
                { label: "Total Contributed", value: usd(totalContributed) },
                { label: "Total Growth", value: usd(totalGrowth), emphasis: "mint" },
                {
                  label: "Growth as % of Total",
                  value: `${finalValue > 0 ? Math.round((totalGrowth / finalValue) * 100) : 0}%`,
                },
              ]}
            />

            {calculated && (
              <Suspense
                fallback={
                  <div className="mt-6 rounded-sm border border-[#A3FFD6]/25 bg-void/60 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">
                      // Trajectory
                    </p>
                    <div className="mt-3 flex h-64 items-center justify-center text-sm text-[#889988]">
                      Loading chart…
                    </div>
                  </div>
                }
              >
                <InvestmentGrowthChart chartData={chartData} usd={usd} />
              </Suspense>
            )}
          </>
        }
        intelBrief={[
          {
            title: "Compounding is the engine",
            body: "Each year's returns earn returns in the next year. The longer you stay invested, the more growth comes from growth rather than from your contributions.",
          },
          {
            title: "Time matters more than timing",
            body: "Starting earlier — even with less money — almost always beats investing more later, because compounding needs time to do its work.",
          },
          {
            title: "Returns aren't guaranteed",
            body: "7% is a long-run average for diversified stock portfolios, but real returns vary year to year. Use this as a planning estimate, not a promise.",
          },
        ]}
        learnMore={[
          { label: "Glossary: Compound Growth", to: "/glossary#compound-growth" },
          { label: "Glossary: Risk Tolerance", to: "/glossary#risk-tolerance" },
          { label: "Use: Retirement Calculator", to: "/tools/retirement" },
        ]}
        sidebarTerms={[
          { q: "What is compound growth?", slug: "compound-growth" },
          { q: "What is return?", slug: "return" },
          { q: "What is risk tolerance?", slug: "risk-tolerance" },
          { q: "What is diversification?", slug: "diversification" },
          { q: "What is volatility?", slug: "volatility" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1601598851547-4304edea1ce5?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of a vintage mechanical tally counter on dark wood"
        imageCaption="The earlier you plant, the more time compounding has to grow."
      />
    </Layout>
  );
}