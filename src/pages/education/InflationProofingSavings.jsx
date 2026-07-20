import { Link } from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Inflation-Proofing Your Savings — Real Returns, TIPS, I-Bonds, and Hedging Strategies",
  description:
    "Protect your savings from inflation: understand real vs nominal returns, TIPS, I-Bonds, commodities, and why the stock market is one of the best long-term inflation hedges available.",
  author: { "@type": "Organization", name: "TopMoneyTools" },
  publisher: { "@type": "Organization", name: "TopMoneyTools" },
  mainEntityOfPage: "https://topmoneytools.com/education/inflation-proofing-savings",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between real and nominal returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nominal return is what your investment earns before adjusting for inflation. Real return is what you actually gain in purchasing power after subtracting inflation. If you earn 5% but inflation is 3%, your real return is only about 2%.",
      },
    },
    {
      "@type": "Question",
      name: "What are TIPS and I-Bonds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TIPS (Treasury Inflation-Protected Securities) and I-Bonds are government-backed investments that adjust their principal and interest payments based on inflation. They guarantee your purchasing power is preserved, though their base yields are typically lower than regular bonds.",
      },
    },
    {
      "@type": "Question",
      name: "Is the stock market a good inflation hedge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Over the long term, yes. Stocks represent ownership in real companies that can raise prices along with inflation. Historically, the stock market has returned about 6-7% annually after inflation over multi-decade periods, making it one of the best long-term hedges.",
      },
    },
  ],
};

const openGraphMeta = {
  title: "Inflation-Proofing Your Savings — TIPS, I-Bonds, Real Returns — TopMoneyTools",
  description:
    "Learn how to protect your savings from inflation: real vs nominal returns, TIPS, I-Bonds, commodities, and stock market hedging strategies.",
  url: "https://topmoneytools.com/education/inflation-proofing-savings",
  image: "https://topmoneytools.com/og/inflation-proofing-savings.png",
  type: "article",
};

export default function InflationProofingSavings() {
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
        "name": "Inflation-Proofing Your Savings — Real Returns, TIPS, I-Bonds, and Hedging Strategies",
        "item": "https://topmoneytools.com/education/inflation-proofing-savings",
      },
    ],
  };

  return (
    <ArticleShell
      title="Inflation-Proofing Your Savings — Real Returns, TIPS, I-Bonds, and Hedging Strategies"
      description="Protect your savings from inflation: understand real vs nominal returns, TIPS, I-Bonds, commodities, and why the stock market is one of the best long-term inflation hedges available."
      path="/education/inflation-proofing-savings"
      sidebarTerms={[
        { q: "What is inflation?", slug: "inflation" },
        { q: "What is purchasing power?", slug: "purchasing-power" },
        { q: "What is an interest rate?", slug: "interest-rate" },
        { q: "What is a bond?", slug: "bond" },
        { q: "What is a stock?", slug: "stock" },
      ]}
      relatedTools={[
        { label: "Food Inflation Calculator", to: "/tools/food-inflation" },
        { label: "Investment Growth Calculator", to: "/tools/investment-growth" },
        { label: "Savings Rate Calculator", to: "/tools/savings-rate" },
      ]}
      seoMeta={openGraphMeta}
      structuredData={[structuredData, faqStructuredData, breadcrumbSchema]}
    >
      <h2 className="mt-0 text-xl font-semibold text-[#E0E0E0]">Real returns vs nominal returns</h2>
      <p className="text-[#889988]">
        If your savings account pays 2% interest while inflation runs at 3%, you're losing 1% of your purchasing power
        every year — even though your account balance is growing. This is the difference between nominal returns (what
        you see on your statement) and real returns (what your money can actually buy). Inflation silently erodes the
        value of cash and low-yield savings.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">TIPS: Treasury Inflation-Protected Securities</h2>
      <p className="text-[#889988]">
        TIPS are U.S. government bonds whose principal adjusts with inflation as measured by the Consumer Price Index
        (CPI). If inflation rises, your bond's principal goes up; if deflation occurs, it goes down (but never below the
        original face value). The interest rate is fixed, but because it's applied to an inflation-adjusted principal,
        your payments rise with inflation.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">I-Bonds: inflation protection for everyday savers</h2>
      <p className="text-[#889988]">
        Series I Savings Bonds (I-Bonds) are designed to protect your cash from inflation. They earn a composite rate
        that combines a fixed rate (set at purchase) plus a variable inflation rate that adjusts every six months. You
        can buy up to $10,000 per person per year through TreasuryDirect. They're especially useful for emergency funds
        and near-term savings goals you want to protect from inflation.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">The stock market as an inflation hedge</h2>
      <p className="text-[#889988]">
        Over the long term, stocks are one of the most effective inflation hedges. Companies can raise prices, invest in
        productivity, and pass costs to consumers. Historically, the S&P 500 has returned about 6-7% per year after
        inflation over multi-decade periods. No other broadly accessible asset class has matched this real return over
        the long run.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Commodities and gold: limited protection</h2>
      <p className="text-[#889988]">
        Gold and commodities often spike during high-inflation periods, making them seem like good hedges. But over the
        long term, gold has returned roughly 0-1% after inflation, and commodities don't generate earnings the way
        companies do. They can provide short-term diversification, but don't bet your retirement on them outperforming
        productive assets.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#E0E0E0]">Building an inflation-resistant portfolio</h2>
      <ul className="mt-2 list-disc pl-6 text-[#889988]">
        <li>Keep 3-6 months of expenses in I-Bonds or high-yield savings for your emergency fund.</li>
        <li>Invest long-term money primarily in a diversified stock portfolio (index funds).</li>
        <li>Add TIPS for the bond portion of a retirement portfolio to protect against unexpected inflation.</li>
        <li>Consider real estate (including REITs) as an additional inflation-sensitive asset class.</li>
      </ul>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Glossary Highlights</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>
            <Link to="/glossary#inflation" className="text-[#A3FFD6] hover:underline">
              Inflation
            </Link>{" "}
            — the general increase in prices over time, reducing the purchasing power of money.
          </li>
          <li>
            <Link to="/glossary#purchasing-power" className="text-[#A3FFD6] hover:underline">
              Purchasing power
            </Link>{" "}
            — what a unit of currency can actually buy; it decreases as inflation rises.
          </li>
          <li>
            <Link to="/glossary#interest-rate" className="text-[#A3FFD6] hover:underline">
              Interest rate
            </Link>{" "}
            — the percentage return on savings or cost of borrowing.
          </li>
          <li>
            <Link to="/glossary#bond" className="text-[#A3FFD6] hover:underline">
              Bond
            </Link>{" "}
            — a loan to a government or corporation that pays interest over time.
          </li>
          <li>
            <Link to="/glossary#stock" className="text-[#A3FFD6] hover:underline">
              Stock
            </Link>{" "}
            — partial ownership in a company, representing a claim on its assets and earnings.
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// FAQ</p>
        <p className="mt-2 text-sm text-[#889988]">
          <strong>Q:</strong> What is the difference between real and nominal returns?
          <br />
          <strong>A:</strong> Nominal returns are what you earn before inflation; real returns are what you actually
          gain in purchasing power. If you earn 5% with 3% inflation, your real return is about 2%.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> What are TIPS and I-Bonds?
          <br />
          <strong>A:</strong> Government-backed investments whose principal and interest adjust with inflation. They
          protect your purchasing power but offer lower base yields than regular bonds.
        </p>
        <p className="mt-4 text-sm text-[#889988]">
          <strong>Q:</strong> Is the stock market a good inflation hedge?
          <br />
          <strong>A:</strong> Over decades, yes. Stocks returned about 6-7% real annually long-term because companies
          can raise prices with inflation. It's one of the best hedges available.
        </p>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Key Takeaways</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-[#889988]">
          <li>Inflation silently erodes cash; always think in real (after-inflation) returns.</li>
          <li>I-Bonds and TIPS directly protect purchasing power from inflation.</li>
          <li>Stocks have historically been the best long-term inflation hedge for growth investors.</li>
          <li>Don't let fear of inflation drive you into assets that underperform over the long run.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-sm border border-[#A3FFD6]/20 bg-void/40 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A3FFD6]">// Next Steps</p>
        <p className="mt-2 text-sm text-[#889988]">
          See how inflation affects your grocery bill with the{" "}
          <Link to="/tools/food-inflation" className="text-[#A3FFD6] hover:underline">
            Food Inflation Calculator
          </Link>
          . Then project your real returns with the{" "}
          <Link to="/tools/investment-growth" className="text-[#A3FFD6] hover:underline">
            Investment Growth Calculator
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
            <Link to="/education/how-inflation-works" className="text-[#A3FFD6] hover:underline">
              How Inflation Works
            </Link>
          </li>
        </ul>
      </div>
    </ArticleShell>
  );
}
