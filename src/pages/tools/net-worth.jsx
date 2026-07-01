import { useState } from "react";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ToolResultBlock from "@/components/tools/ToolResultBlock";
import Layout from "@/components/Layout";
import { NumberField, CalculateButton, usd } from "@/components/tools/FormControls";

export default function NetWorth() {
  const [assets, setAssets] = useState({ home: 300000, savings: 15000, investments: 25000, vehicle: 12000, other: 0 });
  const [liabilities, setLiabilities] = useState({ mortgage: 200000, loans: 8000, cards: 4000, other: 0 });
  const [calculated, setCalculated] = useState(false);

  const setAsset = (k, v) => setAssets((s) => ({ ...s, [k]: Math.max(0, v) }));
  const setLiab = (k, v) => setLiabilities((s) => ({ ...s, [k]: Math.max(0, v) }));

  const totalAssets = Object.values(assets).reduce((a, b) => a + b, 0);
  const totalLiabilities = Object.values(liabilities).reduce((a, b) => a + b, 0);
  const netWorth = totalAssets - totalLiabilities;

  const assetFields = [
    { k: "home", label: "Home value" },
    { k: "savings", label: "Savings & cash" },
    { k: "investments", label: "Investments & retirement" },
    { k: "vehicle", label: "Vehicles" },
    { k: "other", label: "Other assets" },
  ];
  const liabFields = [
    { k: "mortgage", label: "Mortgage balance" },
    { k: "loans", label: "Student / personal loans" },
    { k: "cards", label: "Credit card debt" },
    { k: "other", label: "Other liabilities" },
  ];

  return (
    <Layout>
      <ToolPageShell
        slug="net-worth"
        name="Net Worth Calculator"
        num="07"
        title="Add Up Everything You Own and Owe — See the Real Number That Matters."
        subtitle="Your net worth is your assets minus your liabilities — the clearest single picture of your financial health. Enter the numbers below."
        inputs={
          <div className="grid gap-6 sm:grid-cols-2">
            <fieldset className="rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
              <legend className="px-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Assets</legend>
              <div className="mt-3 space-y-3">
                {assetFields.map((f) => (
                  <NumberField key={f.k} label={f.label} value={assets[f.k]} onChange={(v) => setAsset(f.k, v)} prefix="$" ariaLabel={f.label} />
                ))}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#889988]">Total assets: <span className="text-[#A3FFD6]">{usd(totalAssets)}</span></p>
              </div>
            </fieldset>
            <fieldset className="rounded-sm border border-[#FFD6A3]/20 bg-void/40 p-4">
              <legend className="px-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#FFD6A3]">Liabilities</legend>
              <div className="mt-3 space-y-3">
                {liabFields.map((f) => (
                  <NumberField key={f.k} label={f.label} value={liabilities[f.k]} onChange={(v) => setLiab(f.k, v)} prefix="$" ariaLabel={f.label} />
                ))}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#889988]">Total liabilities: <span className="text-[#FFD6A3]">{usd(totalLiabilities)}</span></p>
              </div>
            </fieldset>
          </div>
        }
        calculate={<CalculateButton onClick={() => { setCalculated(true);  }}>Calculate My Net Worth</CalculateButton>}
        results={
          <ToolResultBlock
            visible={calculated}
            headline={{ label: "Your net worth", value: `${netWorth < 0 ? "-" : ""}${usd(Math.abs(netWorth))}`, sub: netWorth < 0 ? "Negative — common with mortgages and student loans." : "Positive — keep growing it." }}
            rows={[
              { label: "Total Assets", value: usd(totalAssets), emphasis: "mint" },
              { label: "Total Liabilities", value: usd(totalLiabilities), emphasis: "amber" },
              { label: "Asset : Liability Ratio", value: totalLiabilities > 0 ? `${(totalAssets / totalLiabilities).toFixed(2)}x` : "—" },
            ]}
          />
        }
        intelBrief={[
          { title: "Net worth tracks progress", body: "The number itself matters less than its direction. Growing net worth — paying down debt or building assets — is the true measure of financial progress." },
          { title: "Assets aren't only cash", body: "Home equity, retirement accounts, vehicles, and valuables all count. Many people undercount their assets by forgetting retirement savings." },
          { title: "Paying debt raises net worth", body: "Paying down a loan increases net worth just as surely as saving the same amount — because net worth is the gap between the two." },
        ]}
        learnMore={[
          { label: "Glossary: Net Worth", to: "/glossary#net-worth" },
          { label: "Use: Debt Cost Calculator", to: "/tools/debt-cost" },
          { label: "Read: Budgeting for Beginners", to: "/education/budgeting-for-beginners-50-30-20-rule-explained" },
        ]}
        sidebarTerms={[
          { q: "What is net worth?", slug: "net-worth" },
          { q: "What is an asset?", slug: "asset" },
          { q: "What is a liability?", slug: "liability" },
          { q: "What is equity?", slug: "equity" },
          { q: "What is liquidity?", slug: "liquidity" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1604908176287-2c4ef2a3e3eb?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Macro shot of a polished brass balance scale on dark stone"
        imageCaption="Net worth is the gap between what you own and what you owe."
      />
    </Layout>
  );
}
