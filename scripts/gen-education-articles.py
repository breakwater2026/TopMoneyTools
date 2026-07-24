# Generate 15 education articles (126-140) from Website-Grok pack.
from pathlib import Path
import re
import json

SRC = Path("docs/Website-Grok/Grok- Website Articles 26-40 Full.md")
OUT_DIR = Path("src/pages/education")
md = SRC.read_text(encoding="utf-8", errors="replace")

# Map pack section numbers to article nums 126-140
ARTICLES_META = [
    ("126", "net-worth-habit", "How to Build a Simple Net Worth Habit", "A 20-minute quarterly ritual that makes your balance sheet trend visible.",
     [{"label": "Net Worth Calculator", "to": "/tools/net-worth"}, {"label": "Net Worth Projection", "to": "/tools/net-worth-projection"}, {"label": "Budget Planner", "to": "/tools/budget-planner"}],
     [{"q": "What is net worth?", "slug": "net-worth"}, {"q": "What is an asset?", "slug": "asset"}, {"q": "What is a liability?", "slug": "liability"}]),
    ("127", "needs-wants-gray-zone", "Needs, Wants, and the Gray Zone", "Classify spending honestly when 50/30/20 meets real life.",
     [{"label": "Budget Planner", "to": "/tools/budget-planner"}, {"label": "Savings Rate Calculator", "to": "/tools/savings-rate"}],
     [{"q": "What is a budget?", "slug": "budget"}, {"q": "What is discretionary spending?", "slug": "discretionary-spending"}]),
    ("128", "minimum-payments-cost", "The True Cost of Minimum Payments", "Why minimums prolong high-APR debt—and how fixed payoffs change the math.",
     [{"label": "Credit Card Payoff", "to": "/tools/credit-card-payoff"}, {"label": "Debt Cost Calculator", "to": "/tools/debt-cost"}],
     [{"q": "What is a minimum payment?", "slug": "minimum-payment"}, {"q": "What is APR?", "slug": "apr"}]),
    ("129", "fixed-vs-variable-rates", "Fixed vs Variable Rate Loans", "Payment certainty versus rate risk, with a simple stress test.",
     [{"label": "Mortgage Payment", "to": "/tools/mortgage-payment"}, {"label": "Debt Cost Calculator", "to": "/tools/debt-cost"}],
     [{"q": "What is an interest rate?", "slug": "interest-rate"}, {"q": "What is APR?", "slug": "apr"}]),
    ("130", "down-payment-tradeoffs", "Down Payments: 5%, 10%, or 20%?", "Cash today vs interest over time—and why reserves still matter.",
     [{"label": "Home Affordability", "to": "/tools/home-affordability"}, {"label": "Mortgage Payment", "to": "/tools/mortgage-payment"}, {"label": "Emergency Fund", "to": "/tools/emergency-fund"}],
     [{"q": "What is a down payment?", "slug": "down-payment"}, {"q": "What is PMI?", "slug": "pmi"}]),
    ("131", "renting-longer-myth", "Renting Longer Isn't Always Throwing Money Away", "When renting is the rational financial choice.",
     [{"label": "Rent vs Buy Calculator", "to": "/tools/rent-vs-buy"}, {"label": "Budget Planner", "to": "/tools/budget-planner"}],
     [{"q": "What is opportunity cost?", "slug": "opportunity-cost"}, {"q": "What is equity?", "slug": "equity"}]),
    ("132", "windfall-plan", "What to Do With a Windfall", "Bonus and refund order of operations without lifestyle creep.",
     [{"label": "DCA vs Lump Sum", "to": "/tools/dca-vs-lump-sum"}, {"label": "Emergency Fund", "to": "/tools/emergency-fund"}, {"label": "Credit Card Payoff", "to": "/tools/credit-card-payoff"}],
     [{"q": "What is an emergency fund?", "slug": "emergency-fund"}, {"q": "What is dollar-cost averaging?", "slug": "dollar-cost-averaging"}]),
    ("133", "index-funds-plain-english", "Index Funds in Plain English", "Diversification, fees, and realistic expectations—no product hype.",
     [{"label": "Investment Growth", "to": "/tools/investment-growth"}, {"label": "Compound Interest", "to": "/tools/compound-interest"}],
     [{"q": "What is an index fund?", "slug": "index-fund"}, {"q": "What is an expense ratio?", "slug": "expense-ratio"}, {"q": "What is diversification?", "slug": "diversification"}]),
    ("134", "risk-tolerance-vs-capacity", "Risk Tolerance vs Risk Capacity", "Feelings about risk vs ability to absorb losses.",
     [{"label": "Retirement Savings", "to": "/tools/retirement"}, {"label": "Emergency Fund", "to": "/tools/emergency-fund"}],
     [{"q": "What is risk tolerance?", "slug": "risk-tolerance"}, {"q": "What is volatility?", "slug": "volatility"}]),
    ("135", "sequence-of-returns", "Sequence of Returns Risk", "Why average returns mislead in early retirement.",
     [{"label": "Retirement Withdrawal", "to": "/tools/retirement-withdrawal"}, {"label": "FIRE Number", "to": "/tools/fire-number"}],
     [{"q": "What is a safe withdrawal rate?", "slug": "safe-withdrawal-rate"}, {"q": "What is the 4% rule?", "slug": "4-percent-rule"}]),
    ("136", "how-much-house-too-much", "How Much House Is Too Much?", "Comfort ceilings below lender maximums.",
     [{"label": "Home Affordability", "to": "/tools/home-affordability"}, {"label": "Mortgage Payment", "to": "/tools/mortgage-payment"}, {"label": "Budget Planner", "to": "/tools/budget-planner"}],
     [{"q": "What is debt-to-income?", "slug": "debt-to-income"}, {"q": "What is a mortgage?", "slug": "mortgage"}]),
    ("137", "car-buying-cash-loan-wait", "Car Buying: Cash, Loan, or Wait", "Total cost of ownership and financing traps.",
     [{"label": "Auto Loan Calculator", "to": "/tools/auto-loan"}, {"label": "Savings Goal", "to": "/tools/savings-goal"}, {"label": "Budget Planner", "to": "/tools/budget-planner"}],
     [{"q": "What is an auto loan?", "slug": "auto-loan"}, {"q": "What is opportunity cost?", "slug": "opportunity-cost"}]),
    ("138", "student-loans-first-90-days", "Student Loans: First 90 Days After Graduation", "Inventory, cash flow, and strategy after graduation.",
     [{"label": "Student Loan Calculator", "to": "/tools/student-loan"}, {"label": "Emergency Fund", "to": "/tools/emergency-fund"}, {"label": "Budget Planner", "to": "/tools/budget-planner"}],
     [{"q": "What is a student loan?", "slug": "student-loan"}, {"q": "What is an emergency fund?", "slug": "emergency-fund"}]),
    ("139", "insurance-basics-gaps", "Insurance Basics: What Gap Are You Filling?", "Coverage as a goals inventory before you talk to an advisor.",
     [{"label": "Insurance Gap Analyzer", "to": "/tools/insurance-gap"}, {"label": "Emergency Fund", "to": "/tools/emergency-fund"}, {"label": "Net Worth", "to": "/tools/net-worth"}],
     [{"q": "What is an insurance gap?", "slug": "insurance-gap"}, {"q": "What is income protection?", "slug": "income-protection"}]),
    ("140", "monthly-money-review", "A One-Hour Monthly Money Review", "A repeatable monthly agenda for households.",
     [{"label": "Budget Planner", "to": "/tools/budget-planner"}, {"label": "Net Worth", "to": "/tools/net-worth"}, {"label": "Savings Rate", "to": "/tools/savings-rate"}, {"label": "Debt Cost", "to": "/tools/debt-cost"}],
     [{"q": "What is a budget?", "slug": "budget"}, {"q": "What is savings rate?", "slug": "savings-rate"}, {"q": "What is net worth?", "slug": "net-worth"}]),
]

MARKS = ["◇", "◆", "○", "●", "□", "■", "△", "▲", "☆", "★", "◎", "◉", "◈", "▣", "▤"]


def esc(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace("`", "\\`")
        .replace("${", "\\${")
    )


def md_inline_to_jsx(text: str) -> str:
    """Convert limited markdown inline to JSX string expressions content."""
    # links [text](/path)
    def link_repl(m):
        label, href = m.group(1), m.group(2)
        return f'<Link to="{href}" className="text-[#A3FFD6] hover:underline">{label}</Link>'

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", link_repl, text)
    # bold **text**
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong className=\"text-[#E0E0E0]\">\1</strong>", text)
    # italic *text* (simple)
    text = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", text)
    return text


def md_body_to_jsx(body: str) -> str:
    """Convert markdown article body (without leading H1) into JSX fragments."""
    # strip educational notice section at end - shell handles related
    body = re.sub(r"\n## Educational notice[\s\S]*$", "", body).strip()
    lines = body.split("\n")
    out = []
    i = 0
    first_h2 = True
    while i < len(lines):
        line = lines[i]
        # skip blank
        if not line.strip():
            i += 1
            continue
        # H2
        if line.startswith("## "):
            title = line[3:].strip()
            mt = "mt-0" if first_h2 else "mt-6"
            first_h2 = False
            out.append(f'      <h2 className="{mt} text-xl font-semibold text-[#E0E0E0]">')
            out.append(f"        {esc(title)}")
            out.append("      </h2>")
            i += 1
            continue
        # H3
        if line.startswith("### "):
            title = line[4:].strip()
            out.append(f'      <h3 className="mt-4 text-lg font-semibold text-[#E0E0E0]">')
            out.append(f"        {esc(title)}")
            out.append("      </h3>")
            i += 1
            continue
        # table
        if line.strip().startswith("|") and i + 1 < len(lines) and re.match(r"^\s*\|[\s\-:|]+\|\s*$", lines[i + 1]):
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(lines[i].strip())
                i += 1
            # skip separator row
            header = [c.strip() for c in rows[0].strip("|").split("|")]
            data_rows = []
            for r in rows[2:]:
                data_rows.append([c.strip() for c in r.strip("|").split("|")])
            out.append('      <div className="mt-3 overflow-x-auto">')
            out.append('        <table className="w-full min-w-[28rem] border-collapse text-sm text-[#889988]">')
            out.append("          <thead>")
            out.append('            <tr className="border-b border-[#A3FFD6]/20 text-left text-[#E0E0E0]">')
            for h in header:
                out.append(f'              <th className="py-2 pr-3 font-semibold">{esc(h)}</th>')
            out.append("            </tr>")
            out.append("          </thead>")
            out.append("          <tbody>")
            for row in data_rows:
                out.append('            <tr className="border-b border-[#A3FFD6]/10">')
                for cell in row:
                    out.append(f'              <td className="py-2 pr-3">{md_inline_to_jsx(esc(cell))}</td>')
                out.append("            </tr>")
            out.append("          </tbody>")
            out.append("        </table>")
            out.append("      </div>")
            continue
        # unordered list
        if line.strip().startswith(("- ", "* ")):
            items = []
            while i < len(lines) and lines[i].strip().startswith(("- ", "* ")):
                items.append(lines[i].strip()[2:].strip())
                i += 1
            out.append('      <ul className="mt-2 list-disc space-y-1 pl-6 text-[#889988]">')
            for it in items:
                out.append(f"        <li>{md_inline_to_jsx(esc(it))}</li>")
            out.append("      </ul>")
            continue
        # ordered list
        if re.match(r"^\d+\.\s+", line.strip()):
            items = []
            while i < len(lines) and re.match(r"^\d+\.\s+", lines[i].strip()):
                items.append(re.sub(r"^\d+\.\s+", "", lines[i].strip()))
                i += 1
            out.append('      <ol className="mt-2 list-decimal space-y-1 pl-6 text-[#889988]">')
            for it in items:
                out.append(f"        <li>{md_inline_to_jsx(esc(it))}</li>")
            out.append("      </ol>")
            continue
        # paragraph — gather until blank or block
        paras = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not lines[i].startswith("#") and not lines[i].strip().startswith(("- ", "* ", "|")) and not re.match(r"^\d+\.\s+", lines[i].strip()):
            # continuation of paragraph (markdown soft break)
            if lines[i].endswith("  "):
                paras.append(lines[i].rstrip() + " ")
            else:
                paras.append(lines[i])
            i += 1
        text = " ".join(p.strip() for p in paras)
        text = re.sub(r"\s+", " ", text).strip()
        if text.startswith("**Tools:**") or text.startswith("**Learn:**") or text.startswith("**Related:**"):
            continue
        if text:
            out.append(f'      <p className="mt-3 text-[#889988]">')
            out.append(f"        {md_inline_to_jsx(esc(text))}")
            out.append("      </p>")
    # disclaimer footer
    out.append('      <p className="mt-8 border-t border-[#A3FFD6]/15 pt-4 text-xs text-[#889988]/90">')
    out.append(
        '        Educational information only — not personalized financial, tax, or investment advice. See our{" "}'
    )
    out.append(
        '        <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">Disclaimer</Link>.'
    )
    out.append("      </p>")
    return "\n".join(out)


def extract_article_body(slug: str) -> tuple[str, str, str]:
    """Return title, meta, markdown body for slug."""
    # Find **Slug:** `slug`
    pat = rf"\*\*Slug:\*\*\s*`{re.escape(slug)}`\s*\n\*\*Title[^\n]*\n\*\*Meta:\*\*\s*(.+?)\n\n```markdown\n([\s\S]*?)```"
    m = re.search(pat, md)
    if not m:
        # alternate Title tag line
        pat2 = rf"\*\*Slug:\*\*\s*`{re.escape(slug)}`\s*\n\*\*[^\n]+\n\*\*Meta:\*\*\s*(.+?)\n\n```markdown\n([\s\S]*?)```"
        m = re.search(pat2, md)
    if not m:
        raise SystemExit(f"Could not find article body for {slug}")
    meta = m.group(1).strip()
    body = m.group(2).strip()
    # title from first H1
    hm = re.match(r"#\s+(.+)\n", body)
    title = hm.group(1).strip() if hm else slug
    # remove H1 from body
    if hm:
        body = body[hm.end() :].strip()
    return title, meta, body


def component_name(slug: str) -> str:
    return "".join(p.capitalize() for p in slug.replace("-", " ").split())


def write_page(num, slug, title_fallback, blurb, tools, terms, mark):
    title, meta, body = extract_article_body(slug)
    if not title:
        title = title_fallback
    path = f"/education/{slug}"
    jsx_body = md_body_to_jsx(body)
    comp = component_name(slug)
    tools_js = ",\n        ".join(
        [f'{{ label: "{t["label"]}", to: "{t["to"]}" }}' for t in tools]
    )
    terms_js = ",\n        ".join(
        [f'{{ q: "{t["q"]}", slug: "{t["slug"]}" }}' for t in terms]
    )
    content = f'''import {{ Link }} from "react-router-dom";
import ArticleShell from "@/components/ArticleShell";

const structuredData = {{
  "@context": "https://schema.org",
  "@type": "Article",
  headline: {json.dumps(title)},
  description: {json.dumps(meta)},
  author: {{ "@type": "Organization", name: "TopMoneyTools" }},
  publisher: {{ "@type": "Organization", name: "TopMoneyTools" }},
  mainEntityOfPage: "https://topmoneytools.com{path}",
}};

export default function {comp}() {{
  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {{ "@type": "ListItem", position: 1, name: "Home", item: "https://topmoneytools.com" }},
      {{ "@type": "ListItem", position: 2, name: "Education", item: "https://topmoneytools.com/education" }},
      {{ "@type": "ListItem", position: 3, name: {json.dumps(title)}, item: "https://topmoneytools.com{path}" }},
    ],
  }};

  return (
    <ArticleShell
      title={json.dumps(title)}
      description={json.dumps(meta)}
      path="{path}"
      author="André Denis"
      lastUpdated="July 2026"
      sidebarTerms={{[
        {terms_js}
      ]}}
      relatedTools={{[
        {tools_js}
      ]}}
      seoMeta={{{{
        title: {json.dumps(title + " | TopMoneyTools")},
        description: {json.dumps(meta)},
        url: "https://topmoneytools.com{path}",
        type: "article",
      }}}}
      structuredData={{[structuredData, breadcrumbSchema]}}
    >
{jsx_body}
    </ArticleShell>
  );
}}
'''
    # Fix double braces from f-string - I used {{ which is correct for f-string single {
    # Wait - relatedTools={{[ will become relatedTools={[ which is correct
    out_path = OUT_DIR / f"{comp}.jsx"
    out_path.write_text(content, encoding="utf-8")
    return comp, title, meta, mark


generated = []
for idx, (num, slug, title_fb, blurb, tools, terms) in enumerate(ARTICLES_META):
    mark = MARKS[idx % len(MARKS)]
    comp, title, meta, mark = write_page(num, slug, title_fb, blurb, tools, terms, mark)
    generated.append(
        {
            "num": num,
            "slug": slug,
            "comp": comp,
            "title": title,
            "blurb": blurb,
            "meta": meta,
            "mark": mark,
        }
    )
    print("OK", num, slug, "->", comp + ".jsx")

# Write a small manifest for wiring
Path("scripts/new-articles-manifest.json").write_text(
    json.dumps(generated, indent=2), encoding="utf-8"
)
print("manifest:", len(generated))
