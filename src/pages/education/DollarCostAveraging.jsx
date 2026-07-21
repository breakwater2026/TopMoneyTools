import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dollar Cost Averaging — DCA vs Lump Sum Investing, When Each Wins",
  description:
    "Explore dollar cost averaging: how it works, the data on DCA vs lump sum investing, behavioral benefits, and when each strategy makes the most financial sense.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/dollar-cost-averaging",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is dollar cost averaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dollar cost averaging (DCA) is investing a fixed dollar amount at regular intervals, regardless of market price. This buys more shares when prices are low and fewer when prices are high, averaging out the purchase price over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is lump sum investing better than DCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Historically, lump sum investing outperforms DCA about two-thirds of the time because markets tend to go up over time. However, DCA reduces the emotional risk of investing a large sum right before a market drop.",
      },
    },
    {
      "@type": "Question",
      name: "Does DCA work for paycheck investing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When you invest a portion of each paycheck, you're effectively dollar cost averaging. This is the most common form of DCA and is a powerful way to build wealth over time without market timing stress.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Dollar Cost Averaging — DCA vs Lump Sum Investing — TopMoneyTools",
  description:
    "Learn how dollar cost averaging works, what the data says about DCA vs lump sum, and when each strategy makes the most sense for your money.",
  url: "https://topmoneytools.com/education/dollar-cost-averaging",
  image: "https://topmoneytools.com/og/dollar-cost-averaging.png",
  type: "article",
};

export default function DollarCostAveraging() {
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
        "name": "Dollar Cost Averaging — DCA vs Lump Sum Investing, When Each Wins",
        "item": "https://topmoneytools.com/education/dollar-cost-averaging",
      },
    ],
  };

  return (
    <ArticleShell
      title="Dollar Cost Averaging — DCA vs Lump Sum Investing, When Each Wins"
      description="Explore dollar cost averaging: how it works, the data on DCA vs lump sum investing, behavioral benefits, and when each strategy makes the most financial sense."
      path="/education/dollar-cost-averaging"
      sidebarTerms={[
        { q: "What is dollar cost averaging?", slug: "dollar-cost-averaging" },
        { q: "What is an index fund?", slug: "index-fund" },
        { q: "What is an ETF?", slug: "etf" },
        { q: "What is a savings rate?", slug: "savings-rate" },
        { q: "What is an expense ratio?", slug: "expense-ratio" },
      ]}
      relatedTools={[
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
        { label: "Retirement Calculator", to: "/tools/retirement" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">What is dollar cost averaging?</h2>
      <p className="text-[#889988]">
        Dollar cost averaging (DCA) means investing a fixed dollar amount on a regular schedule — like $500 into an index
        fund every month. When prices drop, your $500 buys more shares. When prices rise, it buys fewer. Over time, the
        average price you pay smooths out the market's ups and downs automatically.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">What the data says: DCA vs lump sum</h2>
      <p className="text-[#889988]">
        Research from Vanguard and others shows that lump sum investing — putting all your money in at once — outperforms
        DCA about two-thirds of the time over one-year periods. This makes sense: markets go up more often than they go
        down, so getting invested sooner usually wins. But the one-third of the time DCA wins, it wins by a lot — because
        it protects you from investing everything right before a crash.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The behavioral case for DCA</h2>
      <p className="text-[#889988]">
        The biggest risk with lump sum investing isn't mathematical — it's emotional. If you invest $100,000 all at once
        and the market drops 20% the next month, you might panic-sell and lock in the loss. DCA reduces that emotional
        risk. For many people, knowing they're spreading the investment over time is the difference between staying
        invested and bailing out.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">DCA through your paycheck: the stealth strategy</h2>
      <p className="text-[#889988]">
        If you contribute to a 401(k) or IRA from each paycheck, you're already dollar cost averaging. You're buying
        investments at whatever the current price is, every pay period, without thinking about it. This automated DCA
        is one of the most reliable wealth-building systems available — it removes timing decisions entirely.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">When lump sum makes more sense</h2>
      <p className="text-[#889988]">
        If you receive a windfall — an inheritance, bonus, or the sale of a business — the math says investing it all
        immediately maximizes expected returns. This is especially true when you have a long time horizon (10+ years)
        and can emotionally handle short-term volatility. Historically, time in the market beats timing the market.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Practical DCA strategies for different situations</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Windfall received: invest half immediately as a lump sum, DCA the rest over 6-12 months.</li>
        <li>Regular paycheck: automate contributions to your 401(k) and IRA each pay period.</li>
        <li>Market at all-time highs: a 6-12 month DCA plan can reduce regret if a correction hits.</li>
        <li>Bear market: accelerate your DCA schedule — stocks are on sale.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#dollar-cost-averaging" className="text-[#A3FFD6] hover:underline">
              Dollar cost averaging
            </Link>{" "}
            — investing a fixed amount at regular intervals, regardless of price.
          </li>
          <li>
            <Link to="/glossary#index-fund" className="text-[#A3FFD6] hover:underline">
              Index fund
            </Link>{" "}
            — a mutual fund that tracks a market index, offering broad diversification at low cost.
          </li>
          <li>
            <Link to="/glossary#etf" className="text-[#A3FFD6] hover:underline">
              ETF
            </Link>{" "}
            — an exchange-traded fund, similar to an index fund but traded like a stock.
          </li>
          <li>
            <Link to="/glossary#savings-rate" className="text-[#A3FFD6] hover:underline">
              Savings rate
            </Link>{" "}
            — the percentage of your income you save and invest.
          </li>
          <li>
            <Link to="/glossary#expense-ratio" className="text-[#A3FFD6] hover:underline">
              Expense ratio
            </Link>{" "}
            — the annual fee a fund charges, expressed as a percentage of assets.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is dollar cost averaging?
          <br />
          <strong>A:</strong> DCA is investing a fixed amount at regular intervals, regardless of market price. This buys
          more shares when prices are low and fewer when high, averaging your purchase price over time.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Is lump sum investing better than DCA?
          <br />
          <strong>A:</strong> Historically, lump sum outperforms about two-thirds of the time because markets trend up.
          But DCA reduces the emotional risk of investing a large sum right before a market drop.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Does DCA work for paycheck investing?
          <br />
          <strong>A:</strong> Yes. Investing a portion of each paycheck is effectively DCA. It's a powerful, automated
          way to build wealth without market-timing stress.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Lump sum outperforms DCA about two-thirds of the time historically.</li>
          <li>DCA's real value is psychological — it keeps you from panicking and selling.</li>
          <li>Paycheck investing into a 401(k) or IRA is a form of automated DCA.</li>
          <li>A hybrid approach — half lump sum, half DCA — balances math and emotion.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          Model different contribution strategies with the{" "}
          <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">
            Investment Growth Calculator
          </Link>
          . Then check if you're saving enough with the{" "}
          <Link to="/tools/savings-rate" className="text-[#A3FFD6] hover:underline">
            Savings Rate Calculator
          </Link>
          .
        </p>
      </div>

      <div className="mt-10">
        <h3 className="font-heading text-lg text-[#E0E0E0]">Read Next</h3>
        <ul className="mt-2 list-disc pl-6 text-[#889988]">
          <li>
            <Link to="/education/compound-interest-guide" className="text-[#A3FFD6] hover:underline">
              Compound Interest Guide
            </Link>
          </li>
          <li>
            <Link to="/education/safe-withdrawal-rates" className="text-[#A3FFD6] hover:underline">
              Safe Withdrawal Rates Explained
            </Link>
          </li>
          <li>
            <Link to="/education/fire-movement" className="text-[#A3FFD6] hover:underline">
              The FIRE Movement Explained
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
