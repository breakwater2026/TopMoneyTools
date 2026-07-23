// Tool explainer bodies for calculator pages (Phase 3).
// Sources: docs/Website-Grok Tools Outline + Commentary packs.
// Consumed by ToolExplainer via ToolPageShell.

export const TOOL_EXPLAINERS = {
  "food-inflation": {
    "name": "Food Inflation Calculator",
    "what": [
      "Shows how a grocery (or food) budget grows if prices rise at a chosen annual rate.",
      "This Food Inflation Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Meal planning, “why does food feel expensive,” multi-year household budgeting.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Enter current monthly food spend → inflation % → years → optional category split.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$600/month food, 3% inflation, 10 years → future monthly and cumulative extra cost vs 0% inflation.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Constant inflation rate",
      "no income growth unless modeled",
      "averages hide item-level volatility.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Future monthly need vs today’s; total “inflation tax” over the period.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Using headline CPI only",
      "ignoring that wages may rise too",
      "one-year panic from a bad month.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/tools/savings-rate",
        "label": "Savings Rate"
      },
      {
        "to": "/education/how-inflation-works",
        "label": "How Inflation Works"
      },
      {
        "to": "/education/how-inflation-affects-your-daily-budget",
        "label": "How Inflation Affects Daily Budget"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "debt-cost": {
    "name": "Debt Cost Calculator",
    "what": [
      "Total interest and payoff path for a loan with fixed payment or fixed term.",
      "This Debt Cost Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Personal loans, car loans, consolidating debt; comparing “minimum vs extra payment.”.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Balance → APR → payment or term → optional extra monthly.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$12,000 at 9% APR, \$250/month → months to clear + total interest; same with +\$50 extra.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Fixed rate",
      "monthly compounding convention you implement",
      "no fees/penalties unless entered.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Time to debt-free; interest vs principal; value of extra payments.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Confusing APR with monthly rate",
      "ignoring fees",
      "comparing loans with different terms only on payment.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/credit-card-payoff",
        "label": "Credit Card Payoff"
      },
      {
        "to": "/tools/student-loan",
        "label": "Student Loan"
      },
      {
        "to": "/education/how-to-compare-loans",
        "label": "How to Compare Loans"
      },
      {
        "to": "/education/understanding-interest-rates",
        "label": "Understanding Interest Rates"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "mortgage-payment": {
    "name": "Mortgage Payment Calculator",
    "what": [
      "A mortgage payment is often discussed as one number. This tool separates:",
      "- Principal & interest (P&I) — what amortizes the loan - Total interest across the full term if you pay as scheduled - Total of payments over the life of the loan",
      "If the UI includes taxes, insurance, or HOA, those are estimates layered on top of P&I (often called PITI when taxes and insurance are included)."
    ],
    "when": [
      "- Shopping a price range before you tour seriously - Comparing 15-year vs 30-year style terms - Stress-testing a rate 0.5%–1% higher - Seeing why a “slightly more house” is a lot more interest",
      "Pair with [Home Affordability](/tools/home-affordability) and [Rent vs Buy](/tools/rent-vs-buy) before treating a payment as comfortable."
    ],
    "steps": [
      "How to use it: Price → down payment → rate → term (15/30) → optional property tax/insurance/HOA if you support PITI.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "A standard fixed-rate fully amortizing payment on $360,000 at 6.5% for 30 years is on the order of about $2,275/month P&I (exact cents depend on day-count and rounding).",
      "Over 30 years, total interest can approach or exceed hundreds of thousands of dollars — often comparable to a large fraction of the amount borrowed. That is why rate and term deserve as much attention as the sticker price.",
      "Shorter term sketch: The same loan over 15 years raises the monthly P&I sharply but can cut total interest dramatically. Run both in the tool before deciding what “affordable” means."
    ],
    "assumptions": [
      "Fixed rate",
      "fully amortizing",
      "taxes/insurance estimates only if included",
      "no MI nuance unless modeled.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Affordability of *payment* vs total cost of credit.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Looking only at payment",
      "forgetting closing costs, maintenance, taxes.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/home-affordability",
        "label": "Home Affordability"
      },
      {
        "to": "/tools/rent-vs-buy",
        "label": "Rent vs Buy"
      },
      {
        "to": "/education/understanding-interest-rates",
        "label": "Understanding Interest Rates"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "investment-growth": {
    "name": "Investment Growth Calculator",
    "what": [
      "Future value of lump sum + ongoing contributions at an assumed return.",
      "This Investment Growth Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: RRSP/TFSA/401k-style planning, “what if I invest \$X/month.”.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Starting balance → monthly contribution → years → expected annual return → compound frequency.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$5,000 start + \$400/month, 7% , 20 years → ending value; contribution vs growth split.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Constant return (markets vary)",
      "no fees/taxes unless modeled",
      "deposits at period start/end as coded.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Power of time + contributions; sensitivity to return assumption.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Treating 10% as guaranteed",
      "ignoring fees and taxes",
      "no emergency fund first.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/compound-interest",
        "label": "Compound Interest"
      },
      {
        "to": "/tools/dca-vs-lump-sum",
        "label": "DCA vs Lump Sum"
      },
      {
        "to": "/education/investing-101",
        "label": "Investing 101"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "retirement": {
    "name": "Retirement Savings Calculator",
    "what": [
      "Projects nest egg at retirement from current savings, contributions, and return.",
      "This Retirement Savings Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: “Am I on pace?” before detailed advisor modeling.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Current age → retire age → balance → monthly save → return → optional employer match.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): Age 35, \$40k saved, \$500/month, retire 65, 6% → projected pot.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Constant return/inflation handling as implemented",
      "no sequence-of-returns risk in accumulation view.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Gap vs a simple target (link FIRE / withdrawal tools).",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Ignoring inflation",
      "counting home equity twice",
      "unrealistic returns.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/fire-number",
        "label": "FIRE Number"
      },
      {
        "to": "/tools/retirement-withdrawal",
        "label": "Retirement Withdrawal"
      },
      {
        "to": "/education/retirement-planning-basics",
        "label": "Retirement Planning Basics"
      },
      {
        "to": "/tools/net-worth-projection",
        "label": "Net Worth Projection"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "budget-planner": {
    "name": "Budget Planner",
    "what": [
      "Splits take-home pay into needs / wants / savings (or custom buckets).",
      "This Budget Planner runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: First budget, post-raise reset, cutting lifestyle creep.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Monthly net income → list needs → wants → savings/debt → see surplus/deficit.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$4,500 net; 50/30/20 targets vs actual rent/food/transport.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Net (after-tax) income",
      "monthly framing",
      "irregular expenses averaged.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Which bucket is overweight; room for emergency fund or debt.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Budgeting on gross pay",
      "forgetting annual expenses (/12).",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/education/budgeting-101",
        "label": "Budgeting 101"
      },
      {
        "to": "/education/budgeting-for-beginners",
        "label": "Budgeting for Beginners"
      },
      {
        "to": "/tools/emergency-fund",
        "label": "Emergency Fund"
      },
      {
        "to": "/tools/savings-rate",
        "label": "Savings Rate"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "net-worth": {
    "name": "Net Worth Calculator",
    "what": [
      "Assets − liabilities = net worth snapshot.",
      "This Net Worth Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Annual review, debt payoff milestones, before big purchases.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Cash, investments, property, other assets → mortgages, cards, loans → total.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$20k cash + \$80k investments + \$100k home equity − \$15k car loan = net worth.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Market values are estimates",
      "primary residence illiquid",
      "no human capital.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Trend over years matters more than one day.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Using list price not equity",
      "forgetting taxes on pre-tax accounts if comparing “spendable” wealth.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/tools/debt-cost",
        "label": "Debt Cost"
      },
      {
        "to": "/tools/net-worth-projection",
        "label": "Net Worth Projection"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "savings-goal": {
    "name": "Savings Goal Calculator",
    "what": [
      "Monthly amount (or time) needed to hit a target with optional interest.",
      "This Savings Goal Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Vacation, car down payment, wedding, house deposit.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Target → current saved → deadline or monthly capacity → APY if any.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$10,000 goal, \$1,500 saved, 18 months, 2% APY → required monthly.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Steady deposits",
      "constant rate",
      "no withdrawals.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Feasibility; tradeoff time vs monthly squeeze.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Goal without timeline",
      "mixing emergency fund with vacation fund.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/tools/emergency-fund",
        "label": "Emergency Fund"
      },
      {
        "to": "/tools/savings-rate",
        "label": "Savings Rate"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "emergency-fund": {
    "name": "Emergency Fund Calculator",
    "what": [
      "Months of essential expenses covered by liquid savings; gap to target.",
      "This Emergency Fund Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Job uncertainty, freelancing, after draining savings.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Monthly essentials → current emergency cash → target months (3/6/12).",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$3,000 essentials, \$6,000 cash → 2 months; gap to 6 months = \$12,000.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "“Essential” is user-defined",
      "excludes long-term investments.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Runway in months; priority vs extra investing.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Counting volatile stocks as emergency cash",
      "too small a base expense.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/education/emergency-funds-and-safety-nets",
        "label": "Emergency Funds"
      },
      {
        "to": "/tools/savings-goal",
        "label": "Savings Goal"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "savings-rate": {
    "name": "Savings Rate Calculator",
    "what": [
      "% of income kept (saved/invested) after spending.",
      "This Savings Rate Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: FIRE curiosity, raise allocation, lifestyle check.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Income (gross or net—label clearly) → amount saved/invested → rate.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$5,000 net, \$1,000 to savings/investments → 20% rate.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Define whether debt principal counts",
      "employer match treatment.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Habit metric tied to long-term wealth more than one stock pick.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Inflating income with one-time bonus",
      "forgetting workplace retirement.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/education/budgeting-101",
        "label": "Budgeting 101"
      },
      {
        "to": "/tools/fire-number",
        "label": "FIRE Number"
      },
      {
        "to": "/tools/net-worth-projection",
        "label": "Net Worth Projection"
      },
      {
        "to": "/tools/net-worth",
        "label": "Net Worth"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "tax-brackets": {
    "name": "Tax Bracket Visualizer",
    "what": [
      "Illustrates progressive brackets: marginal vs effective rate on ordinary income.",
      "This Tax Bracket Visualizer runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Side-hustle income, raise, “what bracket am I in?” education.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Taxable income → filing status / jurisdiction preset you support → show slice chart.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): Stylized brackets: show \$X only partly taxed at top marginal rate.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "**Critical:** simplified educational brackets",
      "not filing software",
      "credits/deductions limited",
      "jurisdiction labeled (e.g. illustrative US federal or generic).",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Marginal ≠ effective; only dollars in top band get top rate.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Thinking all income taxed at top rate",
      "using tool for filing.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/education/investing-101",
        "label": "Investing 101"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "rent-vs-buy": {
    "name": "Rent vs. Buy Calculator",
    "what": [
      "The popular line “renting is throwing money away” is incomplete. Buying can build equity, but it also brings:",
      "- Upfront cash (down payment, closing costs) - Ongoing ownership costs (maintenance, insurance, property taxes, HOA) - Transaction costs when you sell - Concentration of wealth in one property and one local market - Less flexibility if you need to move",
      "- Paying for housing service without building home equity - More mobility - Fewer surprise repair bills (depending on the lease and landlord) - The ability to invest money that would have been a down payment — if you actually invest it",
      "This calculator puts both paths on one timeline so you can see which assumptions drive the result — home price growth, rent growth, investment returns, how long you stay, and how costly ownership really is.",
      "It does not score lifestyle factors (yard, schools, stability, renovation freedom). Those matter; they are just not in the spreadsheet."
    ],
    "when": [
      "- Deciding whether to buy in the next 1–5 years - Comparing “buy now” vs “rent and invest the difference” - Stress-testing a higher mortgage rate or lower home appreciation - Checking whether a short stay (job move risk) makes buying expensive after selling costs",
      "- Have unstable income or no emergency reserves - Are stretching to the maximum a lender might approve - Face unusual local taxes, transfer fees, or condo special assessments - Need legal, tax, or mortgage advice for a specific contract"
    ],
    "steps": [
      "How to use it: Rent + growth → price, down, rate, term, tax/insurance/HOA/maintenance → years → investment return on down payment alternative.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Illustrative scenario only — not a real market quote.",
      "- Monthly principal & interest is only part of the housing cost; taxes, insurance, HOA, and maintenance often surprise first-time buyers. - Part of each mortgage payment builds equity (principal); part is interest. - After 7 years you may have meaningful principal paid down plus any price appreciation — minus selling costs if you leave. - The $90,000 down payment is locked in the house; in the rent path that money could have remained invested (with market risk).",
      "- Rent may rise each year at your assumed growth rate. - You do not capture home price gains. - You also do not pay for a new roof or a failed HVAC — if those costs sit with the landlord. - Your financial outcome depends heavily on whether the down-payment equivalent is actually invested or quietly spent.",
      "The calculator’s ending comparison is only as good as the assumptions. In many real-world cases:",
      "- Short stays (a few years) often favor renting after transaction costs — unless appreciation is very strong. - Long stays with moderate leverage and controlled ownership costs can favor buying — but not always. - High price-to-rent markets need more appreciation or longer horizons for buying to look better on paper. - If the renter spends the would-be down payment instead of investing it, the “rent and invest” story collapses."
    ],
    "assumptions": [
      "Home appreciation rate",
      "selling costs",
      "tax treatment simplified",
      "not location-specific land transfer taxes unless included.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Break-even horizon; cash-flow vs wealth.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Ignoring maintenance/HOA",
      "assuming endless 10% home gains.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/mortgage-payment",
        "label": "Mortgage Payment"
      },
      {
        "to": "/tools/home-affordability",
        "label": "Home Affordability"
      },
      {
        "to": "/education/how-to-compare-loans",
        "label": "How to Compare Loans"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "credit-card-payoff": {
    "name": "Credit Card Payoff Calculator",
    "what": [
      "Time and interest to clear revolving balance at a payment level.",
      "This Credit Card Payoff Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Minimum-payment trap; avalanche motivation.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Balance → APR → monthly payment → optional extra.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$4,000 at 22%, min vs \$200 fixed → months and interest difference.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Fixed APR",
      "no new charges",
      "simple monthly model.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Why minimums prolong debt; power of fixed payoff plan.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Paying while still spending on same card",
      "0% promo expiry ignored.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/tools/debt-cost",
        "label": "Debt Cost"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "compound-interest": {
    "name": "Compound Interest Visualizer",
    "what": [
      "Growth of principal + contributions with compounding visualized over time.",
      "This Compound Interest Visualizer runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Teaching compound growth; motivating early start.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Principal → rate → years → contribution → compound frequency.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$0 start, \$300/month, 7%, 30 years → stacked contributions vs interest.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Smooth constant return",
      "not a specific fund.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Later years dominate interest share.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Confusing nominal vs real (after inflation) growth.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/investment-growth",
        "label": "Investment Growth"
      },
      {
        "to": "/education/investing-101",
        "label": "Investing 101"
      },
      {
        "to": "/education/how-inflation-works",
        "label": "How Inflation Works"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "home-affordability": {
    "name": "Home Affordability Calculator",
    "what": [
      "Rough max home price from income, debts, down payment, rate, DTI-style rule.",
      "This Home Affordability Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Pre-approval education; shopping range setting.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Gross income → monthly debts → down payment → rate → term → rule (e.g. 28/36-style if you use it).",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$90k income, \$400 other debt, 10% down, 6.5% → suggested price band.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Lender rules vary",
      "taxes/insurance estimates",
      "not a commitment letter.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Comfort range vs bank maximum (use lower).",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Maxing lender limit",
      "ignoring cash reserves.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/tools/mortgage-payment",
        "label": "Mortgage Payment"
      },
      {
        "to": "/tools/rent-vs-buy",
        "label": "Rent vs Buy"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "auto-loan": {
    "name": "Auto Loan Calculator",
    "what": [
      "Payment and total interest for vehicle financing.",
      "This Auto Loan Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Dealer quote check; lease-vs-loan prep (loan side).",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Price → down/trade → rate → term months.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$32,000 car, \$4,000 down, 7%, 60 months → payment + total interest.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Fixed rate",
      "no extended warranty rolled in unless added to principal.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Longer term lowers payment, raises interest and negative-equity risk.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Focusing only on monthly payment.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/budget-planner",
        "label": "Budget Planner"
      },
      {
        "to": "/tools/debt-cost",
        "label": "Debt Cost"
      },
      {
        "to": "/education/how-to-compare-loans",
        "label": "How to Compare Loans"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "retirement-withdrawal": {
    "name": "Retirement Withdrawal Calculator",
    "what": [
      "Whether a portfolio may sustain a withdrawal rate over N years (simplified).",
      "This Retirement Withdrawal Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Near retirement; “can I spend \$X/year?”.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Portfolio → annual withdrawal or % → years → expected return → inflation optional.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$800k, 4% first year, 25–30 years, 5% return, 2% inflation → ending balance path.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "**Heavy caveats:** not Monte Carlo unless you built it",
      "no sequence risk detail",
      "not advice.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Sensitivity to return and spending; bridge to flexible spending ideas in article.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Treating 4% as law",
      "ignoring fees/taxes/longevity.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/fire-number",
        "label": "FIRE Number"
      },
      {
        "to": "/tools/retirement",
        "label": "Retirement Savings"
      },
      {
        "to": "/education/retirement-planning-basics",
        "label": "Retirement Planning Basics"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "student-loan": {
    "name": "Student Loan Repayment Calculator",
    "what": [
      "Payoff timeline and interest under fixed payment or term.",
      "This Student Loan Repayment Calculator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Graduation planning; refinance curiosity (educational).",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Balance → rate → payment or years → extra payment.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$35,000 at 5.5%, \$350/month → payoff date + interest.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Simplified single loan",
      "real plans (IBR, etc.) more complex—state that.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Extra payment impact; total cost of deferring.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Ignoring which loan is highest rate first.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/education/budgeting-101",
        "label": "Budgeting 101"
      },
      {
        "to": "/tools/debt-cost",
        "label": "Debt Cost"
      },
      {
        "to": "/education/how-to-compare-loans",
        "label": "How to Compare Loans"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "dca-vs-lump-sum": {
    "name": "DCA vs. Lump Sum Simulator",
    "what": [
      "Compares investing all at once vs spreading purchases over months under a path assumption.",
      "This DCA vs. Lump Sum Simulator runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Inheritance, bonus, “should I wait?”.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Amount → months of DCA → assumed monthly returns or simple drift/vol model you implement.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$24,000 lump vs \$2,000×12 under +0.5%/month smooth path vs mixed path.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "**Educational:** past/hypothetical paths ≠ future",
      "lump sum often wins in rising markets historically—say so carefully without guaranteeing.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Behavioral value of DCA vs mathematical base case.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Using one rosy path only",
      "delaying forever as “DCA.”",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/investment-growth",
        "label": "Investment Growth"
      },
      {
        "to": "/tools/compound-interest",
        "label": "Compound Interest"
      },
      {
        "to": "/education/investing-101",
        "label": "Investing 101"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "insurance-gap": {
    "name": "Insurance Gap Analyzer",
    "what": [
      "Rough life (or coverage) need vs existing coverage → gap.",
      "This Insurance Gap Analyzer runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: New parent, mortgage, income replacement thinking.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Annual income × years + debts + final expenses − existing cover − liquid assets (rule-of-thumb method—label it).",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$70k income × 10 + \$200k mortgage − \$100k policy → gap.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Rules of thumb only",
      "underwriting/health ignored",
      "not property/casualty detail unless scoped.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Conversation starter with licensed agent—not a policy quote.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Over-insuring without budget",
      "under-insuring dual-income households.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/emergency-fund",
        "label": "Emergency Fund"
      },
      {
        "to": "/education/emergency-funds-and-safety-nets",
        "label": "Emergency Funds"
      },
      {
        "to": "/tools/net-worth",
        "label": "Net Worth"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "net-worth-projection": {
    "name": "Net Worth Projection Tool",
    "what": [
      "Projects net worth N years ahead from savings rate, return, and starting NW.",
      "This Net Worth Projection Tool runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
      "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice."
    ],
    "when": [
      "Reach for this tool when: Long-range motivation; comparing save-more vs earn-more scenarios.",
      "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
      "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation."
    ],
    "steps": [
      "How to use it: Current NW → annual savings → return → years → optional income growth.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "Worked example (illustrative only): \$50k NW, save \$12k/year, 6%, 15 years → projected NW.",
      "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast."
    ],
    "assumptions": [
      "Smooth returns",
      "savings constant",
      "no major shocks.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: Trajectory bands if you offer low/base/high return.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Extrapolating bull markets forever.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/fire-number",
        "label": "FIRE Number"
      },
      {
        "to": "/tools/savings-rate",
        "label": "Savings Rate"
      },
      {
        "to": "/tools/net-worth",
        "label": "Net Worth"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  },
  "fire-number": {
    "name": "FIRE Number Calculator",
    "what": [
      "“FIRE” stands for Financial Independence, Retire Early. People use the idea in different ways:",
      "- Financial independence — investment assets that could support your spending without needing a full-time paycheck - Retire early — optional; many people want FI for flexibility, not a permanent exit from all work",
      "1. Your FIRE number — a rough portfolio target 2. A simple years-to-target estimate — if you keep saving and markets roughly match the return you assume",
      "FIRE number ≈ Annual spending ÷ Safe withdrawal rate",
      "Example: if you need $40,000 per year from the portfolio and you use a 4% withdrawal rate:"
    ],
    "when": [
      "- Translate a lifestyle budget into a ballpark invested-asset target - See how spending changes the target more than small return tweaks - Compare “save more” vs “spend less” on the timeline - Stress-test optimistic vs cautious withdrawal rates (for example 3.5% vs 4%)",
      "Use something more detailed (and often a professional) when you are:",
      "- Within a few years of leaving full-time work - Relying on pensions, rental income, equity comp, or complex taxes - Funding early retirement before public benefits or workplace coverage apply - Holding mostly a single stock, private business, or illiquid real estate"
    ],
    "steps": [
      "How to use it: Annual spend → SWR % (e.g. 3.5–4%) → current invested → annual save → return.",
      "Label units carefully (monthly vs annual income, APR vs monthly rate).",
      "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output."
    ],
    "example": [
      "$1,200,000 − $180,000 = $1,020,000 still to accumulate (before growth on new savings).",
      "Timeline intuition (simplified) Each year, the portfolio is modeled as growing at the assumed return, plus new savings. In a smooth 6% world with $30,000 added yearly, the gap closes over time — often on the order of the better part of two decades, depending on exact compounding conventions in the tool.",
      "That single change cuts $150,000 off the target — often more powerful than hunting for a slightly higher assumed return.",
      "Cautious variant Same $48,000 spending at 3.5% withdrawal:",
      "Same lifestyle, higher bar. That is the tradeoff the tool is meant to make visible."
    ],
    "assumptions": [
      "SWR historical heuristic not guarantee",
      "healthcare/taxes/geo matter",
      "early retirement sequence risk.",
      "Educational model only — markets, tax rules, inflation, and lender terms change.",
      "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted."
    ],
    "read": [
      "How to read results: FI number + timeline sensitivity to spend and return.",
      "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
      "Use related guides and tools below to cross-check the story from another angle."
    ],
    "mistakes": [
      "Cutting spend unrealistically",
      "ignoring healthcare pre-Medicare/public systems.",
      "Anchoring on a single optimistic assumption.",
      "Confusing educational estimates with personalized professional advice."
    ],
    "related": [
      {
        "to": "/tools/retirement-withdrawal",
        "label": "Retirement Withdrawal"
      },
      {
        "to": "/education/retirement-planning-basics",
        "label": "Retirement Planning Basics"
      },
      {
        "to": "/tools/savings-rate",
        "label": "Savings Rate"
      },
      {
        "to": "/disclaimer",
        "label": "Disclaimer"
      }
    ]
  }
};

export function getToolExplainer(slug) {
  return TOOL_EXPLAINERS[slug] || null;
}
