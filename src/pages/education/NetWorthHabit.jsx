import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Build a Simple Net Worth Habit",
  description: "Track net worth in 20 minutes a quarter. What to include, what to skip, and how the trend matters more than one number.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/net-worth-habit",
};

export default function NetWorthHabit() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "How to Build a Simple Net Worth Habit", item: "https://topmoneytools.com/education/net-worth-habit" },
    ],
  };

  return (
    <ArticleShell
      title="How to Build a Simple Net Worth Habit"
      description="Track net worth in 20 minutes a quarter. What to include, what to skip, and how the trend matters more than one number."
      path="/education/net-worth-habit"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is net worth?", slug: "net-worth" },
        { q: "What is an asset?", slug: "asset" },
        { q: "What is a liability?", slug: "liability" }
      ]}
      relatedTools={[
        { label: "Net Worth Calculator", to: "/tools/net-worth" },
        { label: "Net Worth Projection", to: "/tools/net-worth-projection" },
        { label: "Budget Planner", to: "/tools/budget-planner" }
      ]}
      seoMeta={{
        title: "How to Build a Simple Net Worth Habit | TopMoneyTools",
        description: "Track net worth in 20 minutes a quarter. What to include, what to skip, and how the trend matters more than one number.",
        url: "https://topmoneytools.com/education/net-worth-habit",
        type: "article",
      }}
      structuredData={[structuredData, breadcrumbSchema]}
    >
      <p className="mt-3 text-[#889988]">
        Net worth is not a personality score. It is a balance sheet: what you own minus what you owe. Checked once and forgotten, it is trivia. Checked on a simple schedule, it becomes one of the clearest habits in personal finance.
      </p>
      <p className="mt-3 text-[#889988]">
        This guide shows a lightweight system you can run in about twenty minutes, four times a year—without spreadsheets becoming a second job.
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Why one number beats twenty apps
      </h2>
      <p className="mt-3 text-[#889988]">
        Budgets answer “Where did this month’s money go?” Net worth answers “Is my overall position getting stronger?”
      </p>
      <p className="mt-3 text-[#889988]">
        You can have a decent income and a weak balance sheet if debt and lifestyle rise together. You can also have a flat salary and rising net worth if you pay down principal and invest steadily. The net-worth habit catches both stories.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What to include (and what to skip)
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Assets (own)</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Cash and high-interest savings used for goals or emergencies</li>
        <li>Investment and retirement accounts (current market value)</li>
        <li>Home or property at a <strong className="text-[#E0E0E0]">conservative</strong> estimate, if you choose to include it</li>
        <li>Other meaningful assets you could sell without fantasy pricing</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Liabilities (owe)</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Mortgage and HELOC balances</li>
        <li>Student loans, auto loans, personal loans</li>
        <li>Credit card balances</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Usually skip or treat carefully</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Human capital (future salary)—real, but not a liquid asset</li>
        <li>Furniture and clothes at replacement cost</li>
        <li>Unvested equity you cannot sell yet (or list separately)</li>
        <li>“Crypto moonbag” valuations you would not defend in daylight</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Consistency rule:</strong> Use the same categories every quarter so the trend is comparable.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        The 20-minute quarterly ritual
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Week of: 1 Jan · 1 Apr · 1 Jul · 1 Oct</strong> (pick any stable dates).
      </p>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li><strong className="text-[#E0E0E0]">Update balances</strong> (10 min) — log into banks, cards, brokerage, loan servicers.</li>
        <li><strong className="text-[#E0E0E0]">Refresh home value only if needed</strong> (2 min) — use a conservative estimate; do not chase listing fantasies monthly.</li>
        <li><strong className="text-[#E0E0E0]">Enter numbers</strong> in the <Link to="/tools/net-worth" className="text-[#A3FFD6] hover:underline">Net Worth Calculator</Link> (3 min).</li>
        <li><strong className="text-[#E0E0E0]">Note three lines in a personal file</strong> (5 min):</li>
      </ol>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Net worth this quarter</li>
        <li>Biggest driver of change (markets, mortgage principal, new debt, savings)</li>
        <li>One action for next quarter</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        You do not need daily tracking. Daily net worth is mostly market noise.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example: four quarters
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Quarter</th>
              <th className="py-2 pr-3 font-semibold">Assets</th>
              <th className="py-2 pr-3 font-semibold">Liabilities</th>
              <th className="py-2 pr-3 font-semibold">Net worth</th>
              <th className="py-2 pr-3 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Q1</td>
              <td className="py-2 pr-3">$210,000</td>
              <td className="py-2 pr-3">$165,000</td>
              <td className="py-2 pr-3">$45,000</td>
              <td className="py-2 pr-3">Baseline</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Q2</td>
              <td className="py-2 pr-3">$218,000</td>
              <td className="py-2 pr-3">$162,000</td>
              <td className="py-2 pr-3">$56,000</td>
              <td className="py-2 pr-3">Bonus saved + principal paid</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Q3</td>
              <td className="py-2 pr-3">$215,000</td>
              <td className="py-2 pr-3">$160,000</td>
              <td className="py-2 pr-3">$55,000</td>
              <td className="py-2 pr-3">Markets soft; debts still down</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Q4</td>
              <td className="py-2 pr-3">$230,000</td>
              <td className="py-2 pr-3">$157,000</td>
              <td className="py-2 pr-3">$73,000</td>
              <td className="py-2 pr-3">Recovery + steady saving</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        Q3 “looks worse” than Q2 even though debt fell. Without the note, you might panic. With the note, you see discipline continuing under volatile asset prices.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        How this pairs with other tools
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Snapshot: <Link to="/tools/net-worth" className="text-[#A3FFD6] hover:underline">Net Worth Calculator</Link></li>
        <li>Forward path: <Link to="/tools/net-worth-projection" className="text-[#A3FFD6] hover:underline">Net Worth Projection Tool</Link></li>
        <li>Habit fuel: <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">Savings Rate Calculator</Link></li>
        <li>If debt dominates the story: <Link to="/tools/debt-cost" className="text-[#A3FFD6] hover:underline">Debt Cost Calculator</Link></li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Comparing your number to strangers online</li>
        <li>Checking daily and making lifestyle decisions from market swings</li>
        <li>Inflating assets and forgetting cards</li>
        <li>No written action after the number</li>
        <li>Mixing business and personal without separation</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        A sustainable standard
      </h2>
      <p className="mt-3 text-[#889988]">
        You “win” the habit when you can answer, every quarter: <strong className="text-[#E0E0E0]">Did our balance sheet get healthier for reasons we control—saving, paying down costly debt, avoiding new bad debt?</strong> Markets will wobble. The habit should not.
      </p>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
