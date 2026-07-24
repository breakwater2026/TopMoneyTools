import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Needs, Wants, and the Gray Zone",
  description: "Make 50/30/20 work in real life. How to classify spending when categories blur\u2014and how to fix a needs-heavy budget.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/needs-wants-gray-zone",
};

export default function NeedsWantsGrayZone() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      { "@type": "ListItem", position: 3, name: "Needs, Wants, and the Gray Zone", item: "https://topmoneytools.com/education/needs-wants-gray-zone" },
    ],
  };

  return (
    <ArticleShell
      title="Needs, Wants, and the Gray Zone"
      description="Make 50/30/20 work in real life. How to classify spending when categories blur\u2014and how to fix a needs-heavy budget."
      path="/education/needs-wants-gray-zone"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What is discretionary spending?", slug: "discretionary-spending" }
      ]}
      relatedTools={[
              { label: "Budget Planner", to: "/tools/budget-planner" },
              { label: "Savings Rate Calculator", to: "/tools/savings-rate" }
            ]}
            relatedArticles={[
              { label: "Budgeting for Beginners (50/30/20)", to: "/education/budgeting-for-beginners", num: "102" },
              { label: "Budgeting 101", to: "/education/budgeting-101", num: "104" },
            ]}
            seoMeta={{
              title: "Needs, Wants, and the Gray Zone | TopMoneyTools",
              description: "Make 50/30/20 work in real life. How to classify spending when categories blur—and how to fix a needs-heavy budget.",
              url: "https://topmoneytools.com/education/needs-wants-gray-zone",
              type: "article",
            }}
            structuredData={[structuredData, breadcrumbSchema]}
          >
            <p className="mt-3 rounded-sm border border-[#A3FFD6]/20 bg-[#A3FFD6]/5 px-3 py-2 text-sm text-[#889988]">
              <strong className="text-[#E0E0E0]">How this differs:</strong>{" "}
              <Link to="/education/budgeting-for-beginners" className="text-[#A3FFD6] hover:underline">Budgeting for Beginners</Link>
              {" "}and{" "}
              <Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">Budgeting 101</Link>
              {" "}teach the 50/30/20 framework. This article assumes you know the rule and focuses on the messy middle — subscriptions, commuting, and values-based wants that break neat buckets.
            </p>
            <p className="mt-3 text-[#889988]">
              The 50/30/20 rule is a teaching tool: roughly half of take-home pay for needs, 30% for wants, 20% for saving and debt payoff. Real life is messier. Commuting can be a need; a luxury car payment is partly a want. Groceries are a need; daily delivery markups are mostly a want.
            </p>
      <p className="mt-3 text-[#889988]">
        This article helps you classify spending honestly and fix budgets that collapse because everything got labeled “essential.”
      </p>
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">
        Why the simple rule still helps
      </h2>
      <p className="mt-3 text-[#889988]">
        Rules of thumb are maps, not laws. 50/30/20 forces a question: <strong className="text-[#E0E0E0]">Is money going to survival, enjoyment, or future-you?</strong> Without buckets, every expense feels equally justified in the moment.
      </p>
      <p className="mt-3 text-[#889988]">
        Use the <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link> to put numbers beside labels.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Definitions that hold up under pressure
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Needs</strong> — expenses required to live and work in your actual context: housing basics, utilities, minimum debt payments, basic food, essential transport, required insurance, childcare you need in order to earn income.
      </p>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Wants</strong> — lifestyle choices that could be reduced without immediate catastrophe: dining out, streaming stacks, hobbies, upgrades, travel, most shopping.
      </p>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Savings / debt progress</strong> — money that improves the balance sheet: emergency fund, investments, extra principal payments.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        The gray zone (where budgets go to die)
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Expense</th>
              <th className="py-2 pr-3 font-semibold">More “need” when…</th>
              <th className="py-2 pr-3 font-semibold">More “want” when…</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Housing</td>
              <td className="py-2 pr-3">Safe, adequate, near work</td>
              <td className="py-2 pr-3">Far more space/status than required</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Transport</td>
              <td className="py-2 pr-3">Gets you to work reliably</td>
              <td className="py-2 pr-3">Payment for image over utility</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Phone</td>
              <td className="py-2 pr-3">Basic connectivity for work/life</td>
              <td className="py-2 pr-3">Flagship + max data for convenience only</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Food</td>
              <td className="py-2 pr-3">Home staples</td>
              <td className="py-2 pr-3">Constant takeout</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Clothing</td>
              <td className="py-2 pr-3">Work-appropriate basics</td>
              <td className="py-2 pr-3">Trend cycles</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Subscriptions</td>
              <td className="py-2 pr-3">One tool you truly use for income</td>
              <td className="py-2 pr-3">Five apps you forgot</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Gray-zone test:</strong> “If income dropped 30% for six months, would we keep this unchanged?” If no, part of it is a want.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Worked example: $4,800 net per month
      </h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">First draft (everything feels necessary)</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Housing + utilities: $2,100</li>
        <li>Car payment + insurance + gas: $750</li>
        <li>Food (including delivery): $900</li>
        <li>Minimum debts: $250</li>
        <li>Phones + subscriptions: $180</li>
        <li>Childcare: $0</li>
        <li>“Misc”: $400</li>
        <li>Saving: $220</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Needs-looking total is huge; saving is weak.
      </p>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Rewrite</strong>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Needs: housing/utilities $2,100; basic food $550; transport $550; minimum debts $250; basic phone $70 → <strong className="text-[#E0E0E0]">$3,520 (73%)</strong></li>
        <li>Wants: dining/delivery $350; subscriptions $110; shopping/misc $300 → <strong className="text-[#E0E0E0]">$760 (16%)</strong></li>
        <li>Savings / extra debt: <strong className="text-[#E0E0E0]">$520 (11%)</strong></li>
      </ul>
      <p className="mt-3 text-[#889988]">
        Still needs-heavy versus classic 50%, which is common in high-rent cities. The honest fix is not fake labels—it is <strong className="text-[#E0E0E0]">housing, transport, or income</strong>, plus reclaiming wants.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        What to do if needs exceed 60%
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li><strong className="text-[#E0E0E0]">Attack the big three:</strong> housing, transport, food patterns.</li>
        <li><strong className="text-[#E0E0E0]">Pause lifestyle creep</strong> for 90 days.</li>
        <li><strong className="text-[#E0E0E0]">Raise income</strong> with a concrete plan for where extra money goes.</li>
        <li><strong className="text-[#E0E0E0]">Refinance high-interest debt</strong> only when math and behavior support it.</li>
        <li>Accept that in expensive regions, <strong className="text-[#E0E0E0]">20% savings may be a medium-term goal</strong>, not week one—while still protecting a starter emergency fund.</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Values-based wants (not the enemy)
      </h2>
      <p className="mt-3 text-[#889988]">
        Wants are allowed. A budget that deletes all joy often fails. The goal is <strong className="text-[#E0E0E0]">chosen</strong> wants, not accidental ones. Fund a hobby on purpose after automatic savings, rather than discovering $200 vanished in tap-to-pay.
      </p>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Common mistakes
      </h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">
        <li>Calling every payment a need because it is on autopay</li>
        <li>Using 50/30/20 shame instead of diagnosis</li>
        <li>Cutting retirement contributions before cutting low-value wants</li>
        <li>Joint finances without shared definitions</li>
      </ol>
      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">
        Next steps
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Run the <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">Budget Planner</Link></li>
        <li>Measure the outcome with <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">Savings Rate</Link></li>
        <li>Read <Link to="/education/budgeting-for-beginners-50-30-20-rule-explained" className="text-[#A3FFD6] hover:underline">Budgeting for Beginners (50/30/20)</Link> and <Link to="/education/budgeting-101" className="text-[#A3FFD6] hover:underline">Budgeting 101</Link></li>
      </ul>
      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial, tax, or investment advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.
      </p>
    </ArticleShell>
  );
}
