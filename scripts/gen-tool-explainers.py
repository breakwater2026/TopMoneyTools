# Generate src/data/toolExplainers.js from Website-Grok packs
from pathlib import Path
import re
import json

outline = Path("docs/Website-Grok/Grok- Website Tools Outline 072226.md").read_text(
    encoding="utf-8", errors="replace"
)
commentary = Path("docs/Website-Grok/Grok-Website Tools Commentary 072226.md").read_text(
    encoding="utf-8", errors="replace"
)

TOOLS = [
    ("food-inflation", "01", "Food Inflation Calculator"),
    ("debt-cost", "02", "Debt Cost Calculator"),
    ("mortgage-payment", "03", "Mortgage Payment Calculator"),
    ("investment-growth", "04", "Investment Growth Calculator"),
    ("retirement", "05", "Retirement Savings Calculator"),
    ("budget-planner", "06", "Budget Planner"),
    ("net-worth", "07", "Net Worth Calculator"),
    ("savings-goal", "08", "Savings Goal Calculator"),
    ("emergency-fund", "09", "Emergency Fund Calculator"),
    ("savings-rate", "10", "Savings Rate Calculator"),
    ("tax-brackets", "11", "Tax Bracket Visualizer"),
    ("rent-vs-buy", "12", "Rent vs. Buy Calculator"),
    ("credit-card-payoff", "13", "Credit Card Payoff Calculator"),
    ("compound-interest", "14", "Compound Interest Visualizer"),
    ("home-affordability", "15", "Home Affordability Calculator"),
    ("auto-loan", "16", "Auto Loan Calculator"),
    ("retirement-withdrawal", "17", "Retirement Withdrawal Calculator"),
    ("student-loan", "18", "Student Loan Repayment Calculator"),
    ("dca-vs-lump-sum", "19", "DCA vs. Lump Sum Simulator"),
    ("insurance-gap", "20", "Insurance Gap Analyzer"),
    ("net-worth-projection", "21", "Net Worth Projection Tool"),
    ("fire-number", "22", "FIRE Number Calculator"),
]

blocks = re.split(r"\n### (\d+) — ", outline)
by_num = {}
for i in range(1, len(blocks), 2):
    num = blocks[i].zfill(2)
    content = blocks[i + 1]

    def cell(label, content=content):
        m = re.search(rf"\|\s*\*\*{label}\*\*\s*\|\s*(.+?)\s*\|", content)
        if not m:
            m = re.search(rf"\|\s*{label}\s*\|\s*(.+?)\s*\|", content, re.I)
        return m.group(1).strip() if m else ""

    by_num[num] = {
        "what": cell("What"),
        "when": cell("When"),
        "steps": cell("Steps"),
        "example": cell("Example"),
        "assumptions": cell("Assumptions"),
        "read": cell("Read results"),
        "mistakes": cell("Mistakes"),
        "links": cell("Links"),
    }

SLUG_HINTS = [
    ("budget planner", "/tools/budget-planner", "Budget Planner"),
    ("budgeting 101", "/education/budgeting-101", "Budgeting 101"),
    ("budgeting for beginners", "/education/budgeting-for-beginners", "Budgeting for Beginners"),
    ("mortgage", "/tools/mortgage-payment", "Mortgage Payment"),
    ("home affordability", "/tools/home-affordability", "Home Affordability"),
    ("rent vs buy", "/tools/rent-vs-buy", "Rent vs Buy"),
    ("rent vs. buy", "/tools/rent-vs-buy", "Rent vs Buy"),
    ("fire", "/tools/fire-number", "FIRE Number"),
    ("retirement withdrawal", "/tools/retirement-withdrawal", "Retirement Withdrawal"),
    ("retirement savings", "/tools/retirement", "Retirement Savings"),
    ("retirement planning", "/education/retirement-planning-basics", "Retirement Planning Basics"),
    ("debt cost", "/tools/debt-cost", "Debt Cost"),
    ("credit card", "/tools/credit-card-payoff", "Credit Card Payoff"),
    ("emergency fund", "/tools/emergency-fund", "Emergency Fund"),
    ("emergency funds", "/education/emergency-funds-and-safety-nets", "Emergency Funds"),
    ("savings rate", "/tools/savings-rate", "Savings Rate"),
    ("savings goal", "/tools/savings-goal", "Savings Goal"),
    ("net worth projection", "/tools/net-worth-projection", "Net Worth Projection"),
    ("net worth", "/tools/net-worth", "Net Worth"),
    ("investment growth", "/tools/investment-growth", "Investment Growth"),
    ("compound", "/tools/compound-interest", "Compound Interest"),
    ("auto loan", "/tools/auto-loan", "Auto Loan"),
    ("student loan", "/tools/student-loan", "Student Loan"),
    ("dca", "/tools/dca-vs-lump-sum", "DCA vs Lump Sum"),
    ("insurance", "/tools/insurance-gap", "Insurance Gap"),
    ("tax", "/tools/tax-brackets", "Tax Brackets"),
    ("how to compare loans", "/education/how-to-compare-loans", "How to Compare Loans"),
    ("understanding interest", "/education/understanding-interest-rates", "Understanding Interest Rates"),
    ("investing 101", "/education/investing-101", "Investing 101"),
    ("inflation works", "/education/how-inflation-works", "How Inflation Works"),
    ("inflation affects", "/education/how-inflation-affects-your-daily-budget", "How Inflation Affects Daily Budget"),
    ("disclaimer", "/disclaimer", "Disclaimer"),
]


def split_list(s):
    parts = [p.strip() for p in re.split(r";", s) if p.strip()]
    if len(parts) <= 1:
        parts = [p.strip() for p in re.split(r"(?<=[a-z])\.(?=\s+[A-Z])", s) if p.strip()]
    return parts or ([s] if s else [])


out = {}
for slug, num, name in TOOLS:
    b = by_num.get(num, {})
    what = b.get("what") or f"Educational calculator for {name}."
    when = b.get("when") or "when you want a clear planning estimate"
    steps = b.get("steps") or "Enter your numbers and review the results"
    example = b.get("example") or "Try a few scenarios with realistic inputs"
    assumptions = b.get("assumptions") or "Results depend on your inputs and simplifying assumptions"
    read = b.get("read") or "Compare the headline number to secondary metrics and re-run with different assumptions"
    mistakes = b.get("mistakes") or "Treating one scenario as a guarantee"
    links = (b.get("links") or "").lower()

    related = []
    seen = set()
    for key, path, label in SLUG_HINTS:
        if key in links and path not in seen and path != f"/tools/{slug}":
            related.append({"to": path, "label": label})
            seen.add(path)
        if len(related) >= 4:
            break
    if not any(r["to"] == "/disclaimer" for r in related):
        related.append({"to": "/disclaimer", "label": "Disclaimer"})

    out[slug] = {
        "name": name,
        "what": [
            what,
            f"This {name} runs entirely in your browser. Calculator inputs stay on your device and are not stored on TopMoneyTools servers as account data.",
            "Outputs are educational planning estimates. They do not replace lender quotes, tax software, insurance underwriting, or licensed advice.",
        ],
        "when": [
            f"Reach for this tool when: {when}.",
            "Use more than one scenario. Changing rate, timeline, or spending often moves the answer more than people expect.",
            "If you are close to a major decision (home purchase, retirement date, large debt payoff), treat this as a pre-conversation tool — then verify with primary documents and a professional who knows your full situation.",
        ],
        "steps": [
            f"How to use it: {steps}.",
            "Label units carefully (monthly vs annual income, APR vs monthly rate).",
            "After the first run, stress-test: higher rate, lower return, shorter timeline, or higher expenses. The range matters more than one precise output.",
        ],
        "example": [
            f"Worked example (illustrative only): {example}.",
            "Swap in your own numbers. The value is seeing how inputs drive outcomes — not treating the sample as a forecast.",
        ],
        "assumptions": (split_list(assumptions) + [
            "Educational model only — markets, tax rules, inflation, and lender terms change.",
            "Fees, taxes, insurance underwriting, and product-specific rules may be simplified or omitted.",
        ])[:8],
        "read": [
            f"How to read results: {read}.",
            "If a result looks surprising, re-check units, whether taxes/fees are included, and whether you modeled best-case assumptions only.",
            "Use related guides and tools below to cross-check the story from another angle.",
        ],
        "mistakes": (split_list(mistakes) + [
            "Anchoring on a single optimistic assumption.",
            "Confusing educational estimates with personalized professional advice.",
        ])[:6],
        "related": related,
    }


def extract_paras(md, heading, limit=5):
    m = re.search(rf"## {re.escape(heading)}\n+(.*?)(?=\n## |\Z)", md, re.S)
    if not m:
        return None
    raw = m.group(1)
    paras = []
    for p in re.split(r"\n\n+", raw):
        p = re.sub(r"[*_`#>]", "", p)
        p = re.sub(r"\|.*\|", " ", p)
        p = re.sub(r"\s+", " ", p).strip()
        if len(p) > 50 and not p.startswith("<!--") and "CALCULATOR UI" not in p:
            paras.append(p)
        if len(paras) >= limit:
            break
    return paras or None


# Enrich from full commentary where available
fire_chunk = commentary.split("## 1. FIRE Number Calculator")[-1].split("## 2. Rent vs. Buy")[0]
for key, heading in [
    ("what", "What this tool shows you"),
    ("when", "When to use it"),
    ("example", "Worked example"),
]:
    paras = extract_paras(fire_chunk, heading)
    if paras:
        out["fire-number"][key] = paras

rent_chunk = commentary.split("## 2. Rent vs. Buy Calculator")[-1].split("# Full publication copy")[0]
for key, heading in [
    ("what", "What this tool shows you"),
    ("when", "When to use it"),
    ("example", "Worked example"),
]:
    paras = extract_paras(rent_chunk, heading)
    if paras:
        out["rent-vs-buy"][key] = paras

# Mortgage full body from remaining 20 section
mort = re.search(
    r"# 03 — Mortgage Payment Calculator\n(.*?)(?=\n# 04 — |\Z)",
    commentary,
    re.S,
)
if mort:
    chunk = mort.group(1)
    for key, heading in [
        ("what", "What this tool shows you"),
        ("when", "When to use it"),
        ("example", "Worked example"),
    ]:
        paras = extract_paras(chunk, heading)
        if paras:
            out["mortgage-payment"][key] = paras

Path("src/data").mkdir(exist_ok=True)
body = (
    "// Tool explainer bodies for calculator pages (Phase 3).\n"
    "// Sources: docs/Website-Grok Tools Outline + Commentary packs.\n"
    "// Consumed by ToolExplainer via ToolPageShell.\n\n"
    f"export const TOOL_EXPLAINERS = {json.dumps(out, indent=2, ensure_ascii=False)};\n\n"
    "export function getToolExplainer(slug) {\n"
    "  return TOOL_EXPLAINERS[slug] || null;\n"
    "}\n"
)
Path("src/data/toolExplainers.js").write_text(body, encoding="utf-8")
print("wrote", len(out), "explainers")
for s in ["fire-number", "mortgage-payment", "tax-brackets", "insurance-gap", "rent-vs-buy"]:
    d = out[s]
    words = 0
    for k in ["what", "when", "steps", "example", "read"]:
        words += sum(len(p.split()) for p in d[k])
    words += sum(len(x.split()) for x in d["assumptions"] + d["mistakes"])
    print(s, "words~", words)
