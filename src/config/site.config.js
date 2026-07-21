// Central site config + tool registry. Drives Header dropdown, Homepage grid,
// Tools index, footer links, and SEO canonical builder.
export const SITE = {
  name: "TopMoneyTools",
  tagline: "Navigating the private wealth landscape.",
  baseUrl: "https://topmoneytools.com",
  defaultDescription:
    "A privacy-first collection of free financial calculators covering inflation, debt, mortgages, retirement, budgeting, net worth, and more — all run privately on your device.",
};

// Live calculator registry (DSExpansion). Keep in sync with App.jsx routes.
export const TOOLS = [
  { slug: "food-inflation", num: "01", name: "Food Inflation Calculator", short: "See how rising grocery prices compound over time." },
  { slug: "debt-cost", num: "02", name: "Debt Cost Calculator", short: "Understand the true cost of any loan with amortization." },
  { slug: "mortgage-payment", num: "03", name: "Mortgage Payment Calculator", short: "Project monthly payment, total interest, and lifetime cost." },
  { slug: "investment-growth", num: "04", name: "Investment Growth Calculator", short: "Project compounding returns on regular contributions." },
  { slug: "retirement", num: "05", name: "Retirement Savings Calculator", short: "Map your runway and projected nest egg." },
  { slug: "budget-planner", num: "06", name: "Budget Planner", short: "Split income into needs, wants, and surplus." },
  { slug: "net-worth", num: "07", name: "Net Worth Calculator", short: "Assets minus liabilities — your net position." },
  { slug: "savings-goal", num: "08", name: "Savings Goal Calculator", short: "Find the timeline and monthly rate to reach any goal." },
  { slug: "emergency-fund", num: "09", name: "Emergency Fund Calculator", short: "See how many months of expenses your savings cover — and what's missing." },
  { slug: "savings-rate", num: "10", name: "Savings Rate Calculator", short: "Measure the share of income you keep — the habit behind every goal." },
  { slug: "tax-brackets", num: "14", name: "Tax Bracket Visualizer", short: "See exactly how progressive tax brackets apply to your income." },
  { slug: "rent-vs-buy", num: "15", name: "Rent vs. Buy Calculator", short: "Compare the full financial picture of renting versus buying a home." },
  { slug: "credit-card-payoff", num: "16", name: "Credit Card Payoff Calculator", short: "See how long it takes to clear your balance and the interest you'll pay." },
  { slug: "compound-interest", num: "17", name: "Compound Interest Visualizer", short: "Watch your money grow with contributions, earnings, and time." },
  { slug: "home-affordability", num: "18", name: "Home Affordability Calculator", short: "Find out how much house you can actually afford." },
  { slug: "auto-loan", num: "19", name: "Auto Loan Calculator", short: "Calculate monthly payments and total cost of your next car." },
  { slug: "retirement-withdrawal", num: "20", name: "Retirement Withdrawal Calculator", short: "Test if your savings will last through retirement." },
  { slug: "student-loan", num: "21", name: "Student Loan Repayment Calculator", short: "Map out your path to being debt-free from student loans." },
  { slug: "dca-vs-lump-sum", num: "22", name: "DCA vs. Lump Sum Simulator", short: "Compare dollar-cost averaging against investing all at once." },
  { slug: "insurance-gap", num: "23", name: "Insurance Gap Analyzer", short: "Find out if you have enough coverage to protect your family." },
  { slug: "net-worth-projection", num: "24", name: "Net Worth Projection Tool", short: "See your future net worth based on your current savings rate." },
  { slug: "fire-number", num: "25", name: "FIRE Number Calculator", short: "Calculate your Financial Independence number and timeline." },
];

export const LIVE_TOOLS = TOOLS;
export const TOOL_COUNT = TOOLS.length;

export const NAV_LINKS = [
  { label: "Education", path: "/education" },
  { label: "Glossary", path: "/glossary" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

// 29 glossary terms (PRD §6.4)
export const GLOSSARY = [
  ["inflation", "Inflation", "The rate at which prices rise over time — so the same money buys less in the future than today."],
  ["interest", "Interest", "What lenders charge (or pay) for using money, expressed as a yearly percentage — the interest rate."],
  ["compound-growth", "Compound Growth", "When earnings earn their own earnings. Each year's growth builds on the previous total."],
  ["net-worth", "Net Worth", "Everything you own (assets) minus everything you owe (liabilities). One number for financial health."],
  ["amortization", "Amortization", "How a loan is paid down over time. Early payments are mostly interest; later payments are mostly principal."],
  ["risk-tolerance", "Risk Tolerance", "How much investment volatility you can stomach emotionally and financially."],
  ["purchasing-power", "Purchasing Power", "How much your money actually buys. Inflation erodes purchasing power over time."],
  ["apr", "APR", "Annual Percentage Rate — the yearly cost of borrowing, including fees, used to compare loans."],
  ["credit-score", "Credit Score", "A number estimating how reliably you repay borrowed money. Higher scores unlock better rates."],
  ["principal", "Principal", "The original amount borrowed or invested, before interest."],
  ["balance", "Balance", "The remaining amount owed or held at any point in time."],
  ["term", "Term", "The length of a loan or investment, usually in years or months."],
  ["down-payment", "Down Payment", "The upfront cash you pay toward a purchase — reducing what you need to borrow."],
  ["equity", "Equity", "The portion of an asset you actually own: market value minus any loan against it."],
  ["liquidity", "Liquidity", "How quickly an asset can be turned into cash without losing value."],
  ["asset", "Asset", "Anything you own that has monetary value — cash, investments, property, vehicles."],
  ["liability", "Liability", "Anything you owe — mortgage, loans, credit card balances, unpaid bills."],
  ["budget", "Budget", "A plan for how income gets split across needs, wants, and savings."],
  ["surplus", "Surplus", "Income left over after all needs and wants are met — money available to save or invest."],
  ["deficit", "Deficit", "When spending exceeds income over a period."],
  ["savings-rate", "Savings Rate", "The % of your income you keep rather than spend."],
  ["emergency-fund", "Emergency Fund", "Cash set aside for unexpected expenses — typically 3-6 months of expenses."],
  ["return", "Return", "The gain or loss on an investment, usually expressed as a percentage."],
  ["diversification", "Diversification", "Spreading investments across assets to reduce risk."],
  ["volatility", "Volatility", "How much an investment's value swings up and down over time."],
  ["annuity", "Annuity", "A series of equal payments made at regular intervals — e.g., a fixed monthly pension."],
  ["yield", "Yield", "The income an investment generates, such as interest or dividends, usually as a percentage."],
  ["principal-interest", "Principal & Interest", "The two parts of a loan payment — principal reduces debt, interest is the lender's fee."],
  ["4-percent-rule", "4% Rule", "A guideline: you can safely withdraw ~4% of retirement savings yearly for ~30 years."],
  ["cash-reserve", "Cash Reserve", "Liquid money set aside for immediate use — the accessible savings that form the heart of an emergency fund."],
  ["fixed-expenses", "Fixed Expenses", "Costs that stay the same each month — rent, loan payments, insurance — the baseline an emergency fund must cover."],
  ["variable-expenses", "Variable Expenses", "Costs that fluctuate month to month — groceries, utilities, dining — easier to trim than fixed costs."],
  ["financial-resilience", "Financial Resilience", "Your ability to weather shocks — job loss, medical bills, emergencies — without falling into debt."],
  ["discretionary-income", "Discretionary Income", "Income left after taxes and essential expenses — money available for wants, saving, or investing."],
  ["budgeting", "Budgeting", "The ongoing practice of splitting income across needs, wants, and savings — turning a budget into a habit."],
].map(([slug, term, def]) => ({ slug, term, def }));