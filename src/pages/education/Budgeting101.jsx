import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Budgeting 101: Systems That Stick After Month One",
  description:
    "Turn a first budget into a habit: fixed vs variable costs, annual expenses, pay-cycle cash flow, and a simple weekly review—without re-teaching 50/30/20.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/budgeting-101",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I already know 50/30/20. Why read Budgeting 101?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "50/30/20 is a starting map. Budgeting 101 is about the operating system: irregular bills, pay cycles, tracking just enough, and recovering when a month breaks.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A light weekly glance (10–15 minutes) and a fuller monthly reset work for most households. Daily tracking is optional, not required.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Budgeting 101: Systems That Stick | TopMoneyTools",
  description:
    "After your first budget: handle irregular expenses, match the pay cycle, track lightly, and fix broken months without starting over.",
  url: "https://topmoneytools.com/education/budgeting-101",
  image: "https://topmoneytools.com/og/budgeting-101.png",
  type: "article",
};

export default function Budgeting101() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" },
      { "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Budgeting 101: Systems That Stick After Month One",
        item: "https://topmoneytools.com/education/budgeting-101",
      },
    ],
  };

  return (
    <ArticleShell
      title="Budgeting 101: Systems That Stick After Month One"
      description="Turn a first budget into a habit: fixed vs variable costs, annual expenses, pay-cycle cash flow, and a simple weekly review—without re-teaching 50/30/20."
      path="/education/budgeting-101"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What are fixed expenses?", slug: "fixed-expenses" },
        { q: "What are variable expenses?", slug: "variable-expenses" },
        { q: "What is savings rate?", slug: "savings-rate" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Emergency Fund Calculator", to: "/tools/emergency-fund" },
      ]}
      relatedArticles={[
        { label: "Budgeting for Beginners (50/30/20)", to: "/education/budgeting-for-beginners", num: "102" },
        { label: "Needs, Wants, and the Gray Zone", to: "/education/needs-wants-gray-zone", num: "127" },
        { label: "A One-Hour Monthly Money Review", to: "/education/monthly-money-review", num: "140" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <p className="mt-3 rounded-sm border border-[#A3FFD6]/20 bg-[#A3FFD6]/5 px-3 py-2 text-sm text-[#889988]">
        <strong className="text-[#E0E0E0]">How this differs:</strong>{" "}
        <Link to="/education/budgeting-for-beginners" className="text-[#A3FFD6] hover:underline">
          Budgeting for Beginners
        </Link>{" "}
        teaches the 50/30/20 starting map.{" "}
        <Link to="/education/needs-wants-gray-zone" className="text-[#A3FFD6] hover:underline">
          Needs, Wants, and the Gray Zone
        </Link>{" "}
        handles messy labels. <strong className="text-[#E0E0E0]">This article</strong> is the next layer: systems that
        survive real months — irregular bills, pay timing, light tracking, and recovery when you blow a category.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Why first budgets fail (and systems don’t)</h2>
      <p className="mt-3 text-[#889988]">
        Most people can draft a budget once. The hard part is month two: a car registration hits, two paychecks land in
        the same week then none the next, groceries overrun, and the plan feels “broken.” A system assumes friction and
        tells you what to do next — not how to feel guilty.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">1. Separate fixed, variable, and irregular</h2>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Fixed</strong> — same amount on a predictable date (rent, loan minimums,
        subscriptions you keep).
      </p>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Variable</strong> — you control the total but not every receipt (food, fuel,
        utilities in a range).
      </p>
      <p className="mt-3 text-[#889988]">
        <strong className="text-[#E0E0E0]">Irregular / annual</strong> — real costs that don’t show up every month:
        insurance premiums, gifts, school fees, travel, vehicle maintenance, memberships billed yearly.
      </p>
      <p className="mt-3 text-[#889988]">
        Take each annual bill, divide by 12, and park that amount monthly in a “sinking fund” line (even if it sits in
        the same savings account). That single habit prevents most “surprise” budget crashes.
      </p>
      <p className="mt-3 text-[#889988]">
        Map the buckets in the{" "}
        <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
          Budget Planner
        </Link>
        .
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">2. Budget on the pay cycle, not only the calendar</h2>
      <p className="mt-3 text-[#889988]">
        A monthly spreadsheet can look fine while your bank account is empty mid-cycle. Align assignments to{" "}
        <strong className="text-[#E0E0E0]">when money actually arrives</strong>:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>List payday dates for the next 4–6 weeks.</li>
        <li>Assign fixed bills to the paycheck that covers them (not “sometime this month”).</li>
        <li>Keep a small buffer so a late deposit doesn’t bounce rent.</li>
      </ul>
      <p className="mt-3 text-[#889988]">
        If you’re paid biweekly, some months have three paydays — decide in advance whether the “extra” paycheck goes to
        debt, emergency fund, or sinking funds so lifestyle doesn’t silently expand.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">3. Track just enough (not everything forever)</h2>
      <p className="mt-3 text-[#889988]">
        Pick one method and stick to it for 90 days:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>
          <strong className="text-[#E0E0E0]">Weekly glance</strong> — 10 minutes: balances, upcoming bills, one category
          that ran hot.
        </li>
        <li>
          <strong className="text-[#E0E0E0]">Envelope or cap</strong> — only the leaky categories (dining, shopping) get
          a hard cap.
        </li>
        <li>
          <strong className="text-[#E0E0E0]">Monthly reset</strong> — longer session on the same day each month (pair
          with the{" "}
          <Link to="/education/monthly-money-review" className="text-[#A3FFD6] hover:underline">
            monthly money review
          </Link>
          ).
        </li>
      </ul>
      <p className="mt-3 text-[#889988]">
        You do not need to categorize every coffee for life. You need early warning when the plan and reality diverge.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Worked example: the “invisible” $3,600 year</h2>
      <p className="mt-3 text-[#889988]">
        Annual costs that often skip the monthly budget:
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">
          <thead>
            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">
              <th className="py-2 pr-3 font-semibold">Item</th>
              <th className="py-2 pr-3 font-semibold">Yearly</th>
              <th className="py-2 font-semibold">Monthly set-aside</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Car insurance (if paid yearly)</td>
              <td className="py-2 pr-3">$1,200</td>
              <td className="py-2">$100</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Gifts and holidays</td>
              <td className="py-2 pr-3">$900</td>
              <td className="py-2">$75</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Vehicle maintenance / tires</td>
              <td className="py-2 pr-3">$600</td>
              <td className="py-2">$50</td>
            </tr>
            <tr className="border-b border-[#A3FFD6]/10">
              <td className="py-2 pr-3">Travel / visits home</td>
              <td className="py-2 pr-3">$900</td>
              <td className="py-2">$75</td>
            </tr>
            <tr>
              <td className="py-2 pr-3 font-semibold text-[#E0E0E0]">Total</td>
              <td className="py-2 pr-3 font-semibold text-[#E0E0E0]">$3,600</td>
              <td className="py-2 font-semibold text-[#E0E0E0]">$300 / month</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[#889988]">
        Without the $300 line, every December feels like a crisis. With it, the “surprise” was scheduled.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">4. When a month breaks — the recovery protocol</h2>
      <ol className="mt-2 list-decimal space-y-2 pl-6 text-[#889988]">
        <li>
          <strong className="text-[#E0E0E0]">Name the overrun</strong> — one category, one number (e.g. dining +$180).
        </li>
        <li>
          <strong className="text-[#E0E0E0]">Cover it without shame math</strong> — cut another want this month, use a
          small buffer, or temporarily pause a non-urgent sinking fund. Avoid high-APR cards if you can.
        </li>
        <li>
          <strong className="text-[#E0E0E0]">Change one lever next month</strong> — lower the cap, move the bill date, or
          pre-decide “no delivery apps on weekdays.”
        </li>
        <li>
          <strong className="text-[#E0E0E0]">Do not restart from zero</strong> unless income or housing truly changed.
          Continuity beats a perfect blank template every Monday.
        </li>
      </ol>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">5. One metric that keeps you honest</h2>
      <p className="mt-3 text-[#889988]">
        After the plan is set, watch{" "}
        <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">
          savings rate
        </Link>{" "}
        (or debt payoff rate) monthly. If the rate holds while life is noisy, the system is working — even if every line
        item isn’t perfect.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Common system mistakes</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">
        <li>Budgeting only on gross pay, then wondering why net runs out</li>
        <li>No sinking funds for annual costs</li>
        <li>Ignoring payday timing until the account is overdrawn</li>
        <li>Tracking everything for two weeks, then abandoning all structure</li>
        <li>Never linking the budget to an{" "}
          <Link to="/education/emergency-funds-and-safety-nets" className="text-[#A3FFD6] hover:underline">
            emergency fund
          </Link>{" "}
          target
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">A sustainable standard</h2>
      <p className="mt-3 text-[#889988]">
        You “win” budgeting when you can answer, most months:{" "}
        <strong className="text-[#E0E0E0]">
          Did money go where we decided — and did we notice early when it didn’t?
        </strong>{" "}
        That is a system. A pretty spreadsheet alone is not.
      </p>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next steps</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[#889988]">
          <li>
            If you still need the map:{" "}
            <Link to="/education/budgeting-for-beginners" className="text-[#A3FFD6] hover:underline">
              Budgeting for Beginners (50/30/20)
            </Link>
          </li>
          <li>
            If labels feel fuzzy:{" "}
            <Link to="/education/needs-wants-gray-zone" className="text-[#A3FFD6] hover:underline">
              Needs, Wants, and the Gray Zone
            </Link>
          </li>
          <li>
            Run numbers:{" "}
            <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
              Budget Planner
            </Link>{" "}
            +{" "}
            <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings Rate
            </Link>
          </li>
          <li>
            Monthly cadence:{" "}
            <Link to="/education/monthly-money-review" className="text-[#A3FFD6] hover:underline">
              One-Hour Monthly Money Review
            </Link>
          </li>
        </ol>
      </div>

      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">
        Educational information only — not personalized financial advice. See our{" "}
        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
          Disclaimer
        </Link>
        .
      </p>
    </ArticleShell>
  );
}
