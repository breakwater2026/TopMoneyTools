import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Couples and Money — Joint vs Separate Accounts, Budgeting Together, and Financial Alignment",
  description:
    "A practical guide to managing money as a couple: joint vs separate accounts, how to have productive money conversations, budgeting as a team, and aligning financial goals.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/couples-and-money",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should couples have joint or separate bank accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single right answer. Many couples use a hybrid approach: a joint account for shared expenses (housing, groceries, utilities) and separate accounts for personal spending. This combines transparency on shared goals with autonomy for individual purchases.",
      },
    },
    {
      "@type": "Question",
      name: "How do we start talking about money without fighting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schedule a regular 'money date' — a low-pressure time to review finances together, not during a crisis. Focus on shared goals (a house, travel, retirement) rather than blaming past spending. Use 'we' language and frame everything around the future you want together.",
      },
    },
    {
      "@type": "Question",
      name: "What if one partner earns significantly more?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some couples split shared expenses proportionally to income (e.g., the higher earner pays 60% of shared bills). Others pool all income and treat it as 'our money.' The key is to discuss this openly and find an arrangement that both partners feel is fair, not resentful.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Couples and Money — Joint Accounts, Budgeting Together — TopMoneyTools",
  description:
    "Learn how to manage money as a couple without conflict: joint vs separate accounts, money conversations, proportional splitting, and aligning financial goals.",
  url: "https://topmoneytools.com/education/couples-and-money",
  image: "https://topmoneytools.com/og/couples-and-money.png",
  type: "article",
};

export default function CouplesAndMoney() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://topmoneytools.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Education",
        "item": "https://topmoneytools.com/education",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Couples and Money — Joint vs Separate Accounts, Budgeting Together, and Financial Alignment",
        "item": "https://topmoneytools.com/education/couples-and-money",
      },
    ],
  };

  return (
    <ArticleShell
      title="Couples and Money — Joint vs Separate Accounts, Budgeting Together, and Financial Alignment"
      description="A practical guide to managing money as a couple: joint vs separate accounts, how to have productive money conversations, budgeting as a team, and aligning financial goals."
      path="/education/couples-and-money"
      sidebarTerms={[
        { q: "What is a budget?", slug: "budget" },
        { q: "What is net worth?", slug: "net-worth" },
        { q: "What is a savings rate?", slug: "savings-rate" },
        { q: "What is an emergency fund?", slug: "emergency-fund" },
        { q: "What is a credit score?", slug: "credit-score" },
      ]}
      relatedTools={[
        { label: "Budget Planner", to: "/tools/budget-planner" },
        { label: "Net Worth Tool", to: "/tools/net-worth" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Why money conversations matter in relationships</h2>
      <p className="text-[#889988]">
        Money is one of the top sources of conflict in relationships. But couples who talk openly about finances report
        higher relationship satisfaction. The goal isn't to agree on every spending decision — it's to build trust,
        transparency, and a shared vision for the future that both partners feel invested in.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Joint vs separate accounts: the three models</h2>
      <p className="text-[#889988]">
        There are three common approaches. Fully joint: all income goes into shared accounts and all expenses come out of
        them. Fully separate: each person maintains their own accounts and splits bills. Hybrid (most popular): a joint
        account for shared expenses like rent, groceries, and utilities, plus separate accounts for personal spending.
        The hybrid model balances transparency with autonomy.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to split expenses when incomes are unequal</h2>
      <p className="text-[#889988]">
        Splitting everything 50/50 when one partner earns twice as much can breed resentment. A proportional approach
        splits shared expenses based on income share. If Partner A earns 60% of the household income, they cover 60% of
        shared bills. This ensures both partners contribute equitably relative to their means, not equally by dollar
        amount.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">How to have the first money conversation</h2>
      <p className="text-[#889988]">
        Schedule a dedicated time — not when bills are due or after an argument. Start by sharing your money story: how
        your family handled money growing up, what financial values you hold, and what you'd like your future to look
        like. Then share your current numbers: income, debts, savings, and credit scores. Full disclosure builds trust;
        surprises discovered later damage it.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Budgeting as a team</h2>
      <p className="text-[#889988]">
        Create a shared budget that covers joint expenses, joint savings goals, and individual discretionary spending.
        Give each partner some "no-questions-asked" money each month — a guilt-free allowance that doesn't require
        permission. This prevents micromanagement and preserves autonomy within a shared framework. Review the budget
        together monthly.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Aligning on big financial goals</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Define your shared goals: homeownership, travel, kids, early retirement.</li>
        <li>Agree on a target savings rate and automate contributions to joint goals.</li>
        <li>Discuss risk tolerance for investments — one partner may be more conservative than the other.</li>
        <li>Review net worth progress quarterly to stay motivated as a team.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#budget" className="text-[#A3FFD6] hover:underline">
              Budget
            </Link>{" "}
            — a plan for how to use your money together each month.
          </li>
          <li>
            <Link to="/glossary#net-worth" className="text-[#A3FFD6] hover:underline">
              Net worth
            </Link>{" "}
            — the combined value of everything you both own minus everything you both owe.
          </li>
          <li>
            <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings rate
            </Link>{" "}
            — the percentage of your household income you save and invest together.
          </li>
          <li>
            <Link to="/glossary#emergency-fund" className="text-[#A3FFD6] hover:underline">
              Emergency fund
            </Link>{" "}
            — joint cash reserves for unexpected expenses, ideally 3-6 months of shared living costs.
          </li>
          <li>
            <Link to="/glossary#credit-score" className="text-[#A3FFD6] hover:underline">
              Credit score
            </Link>{" "}
            — each partner's creditworthiness number, important when applying for joint loans.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> Should couples have joint or separate accounts?
          <br />
          <strong>A:</strong> Many couples use a hybrid model — a joint account for shared expenses and separate accounts
          for personal spending. This balances transparency with autonomy.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> How do we start talking about money without fighting?
          <br />
          <strong>A:</strong> Schedule a regular 'money date' focused on shared goals, not blame. Share your money
          stories and current numbers in a low-pressure, forward-looking conversation.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What if one partner earns significantly more?
          <br />
          <strong>A:</strong> Try proportional splitting based on income share, or pool everything as 'our money.' The
          key is open discussion so both partners feel the arrangement is fair.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Money conversations build trust — schedule them regularly, not during crises.</li>
          <li>A hybrid account structure gives you both transparency and autonomy.</li>
          <li>Split shared expenses proportionally when incomes are unequal to avoid resentment.</li>
          <li>Give each partner guilt-free discretionary money within the shared budget.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Build your first joint budget with the{" "}
          <Link to="/tools/budget-planner" className="text-[#A3FFD6] hover:underline">
            Budget Planner
          </Link>
          . Then track your combined progress with the{" "}
          <Link to="/tools/net-worth" className="text-[#A3FFD6] hover:underline">
            Net Worth Tool
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/budgeting-for-beginners" className="text-[#A3FFD6] hover:underline">
              Budgeting for Beginners
            </Link>
          </li>
          <li>
            <Link to="/education/net-worth-by-age" className="text-[#A3FFD6] hover:underline">
              Net Worth by Age Benchmarks
            </Link>
          </li>
          <li>
            <Link to="/education/home-affordability" className="text-[#A3FFD6] hover:underline">
              Home Affordability Guide
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
