# Audit education articles for topical overlap
from pathlib import Path
import re
import json
from collections import defaultdict

edu = Path("src/pages/Education.jsx").read_text(encoding="utf-8")
arts = re.findall(
    r'num:\s*"(\d+)",\s*slug:\s*"([^"]+)",\s*mark:\s*"[^"]*",\s*t:\s*"([^"]+)",\s*d:\s*"([^"]*)"',
    edu,
)
print(f"ARTICLES registry: {len(arts)}\n")

app = Path("src/App.jsx").read_text(encoding="utf-8")
routes = re.findall(r'path="/education/([^"]+)"\s+element=\{<(\w+)', app)
slug_to_comp = {slug: comp for slug, comp in routes}
edu_dir = Path("src/pages/education")


def extract_content(path: Path):
    text = path.read_text(encoding="utf-8", errors="replace")
    h2s = re.findall(r"<h2[^>]*>\s*([^<]+)", text)
    paras = re.findall(r"<p[^>]*>\s*([\s\S]*?)</p>", text)
    plain = []
    for p in paras[:10]:
        p = re.sub(r"<[^>]+>", "", p)
        p = re.sub(r"\s+", " ", p).strip()
        if len(p) > 40:
            plain.append(p)
    return h2s, plain


clusters = {
    "budgeting": ["budget", "50/30", "needs", "wants", "spending", "gray zone"],
    "inflation": ["inflation", "cpi", "purchasing power", "prices rise"],
    "credit_debt": ["credit card", "minimum payment", "payoff", "revolving", "avalanche", "snowball"],
    "interest_loans": ["interest rate", "fixed", "variable", "amortization", "apr", "compare loans"],
    "investing": ["invest", "compound", "index fund", "dca", "diversif", "expense ratio"],
    "retirement_fire": ["retirement", "fire", "withdrawal", "4%", "nest egg", "sequence"],
    "housing": ["home", "house", "mortgage", "rent", "down payment", "afford", "pmi"],
    "auto": ["car", "auto loan", "vehicle", "depreciation"],
    "student": ["student loan", "graduation", "servicer"],
    "insurance": ["insurance", "coverage", "gap", "life insurance", "disability"],
    "net_worth": ["net worth", "balance sheet", "assets", "liabilities", "quarterly"],
    "emergency": ["emergency fund", "safety net", "runway"],
    "tax": ["tax bracket", "marginal", "effective"],
    "couples_side": ["couple", "joint", "side hustle"],
    "windfall_review": ["windfall", "bonus", "monthly review", "money review"],
    "risk": ["risk tolerance", "risk capacity", "volatility", "sequence"],
}


def tokens(s: str):
    stop = {
        "the", "a", "an", "and", "or", "of", "to", "for", "in", "on", "your", "you",
        "is", "vs", "with", "how", "what", "why", "too", "much", "simple", "basics",
    }
    return set(re.findall(r"[a-z0-9]+", s.lower())) - stop


results = []
for num, slug, t, d in arts:
    comp = slug_to_comp.get(slug)
    path = edu_dir / f"{comp}.jsx" if comp else None
    h2s, plain = ([], [])
    if path and path.exists():
        h2s, plain = extract_content(path)
    blob = " ".join([t, d] + h2s + plain).lower()
    scores = {}
    for cname, kws in clusters.items():
        s = sum(blob.count(k) for k in kws)
        if s:
            scores[cname] = s
    top = sorted(scores.items(), key=lambda x: -x[1])[:3]
    results.append(
        {
            "num": num,
            "slug": slug,
            "title": t,
            "desc": d,
            "h2s": h2s[:8],
            "top_clusters": top,
            "opening": plain[:2],
        }
    )

by_cluster = defaultdict(list)
for r in results:
    prim = r["top_clusters"][0][0] if r["top_clusters"] else "other"
    by_cluster[prim].append(r)

print("=== CLUSTER GROUPS ===")
for c, items in sorted(by_cluster.items(), key=lambda x: -len(x[1])):
    print(f"\n## {c} ({len(items)})")
    for r in items:
        print(f"  {r['num']} {r['slug']}: {r['title']}")
        if r["h2s"]:
            print(f"       H2: {' | '.join(r['h2s'][:4])}")

print("\n=== HIGH TITLE/DESC OVERLAP (Jaccard >= 0.28) ===")
pairs = []
for i in range(len(results)):
    for j in range(i + 1, len(results)):
        a, b = results[i], results[j]
        ta = tokens(a["title"] + " " + a["desc"])
        tb = tokens(b["title"] + " " + b["desc"])
        if not ta or not tb:
            continue
        jacc = len(ta & tb) / len(ta | tb)
        if jacc >= 0.28:
            pairs.append((jacc, a, b, ta & tb))
pairs.sort(reverse=True)
for jacc, a, b, inter in pairs[:30]:
    print(f"{jacc:.2f} | {a['num']} {a['slug']}  <->  {b['num']} {b['slug']}")
    print(f"     shared: {sorted(inter)}")
    print(f"     A: {a['title']}")
    print(f"     B: {b['title']}")

print("\n=== NEW (126+) vs OLD (101-125) SAME PRIMARY CLUSTER ===")
old = [r for r in results if int(r["num"]) <= 125]
new = [r for r in results if int(r["num"]) >= 126]
concerns = []
for n in new:
    nc = n["top_clusters"][0][0] if n["top_clusters"] else None
    matches = [o for o in old if o["top_clusters"] and o["top_clusters"][0][0] == nc]
    if matches:
        print(f"\n{n['num']} {n['slug']} [{nc}]")
        print(f"  NEW: {n['title']}")
        for o in matches:
            print(f"  OLD: {o['num']} {o['slug']} — {o['title']}")
        concerns.append({"new": n, "old": matches, "cluster": nc})

# Manual known near-duplicates to score more carefully via shared H2 tokens
print("\n=== MANUAL NEAR-DUPE CANDIDATES (content angle) ===")
manual = [
    ("budgeting-101", "budgeting-for-beginners", "needs-wants-gray-zone"),
    ("how-inflation-works", "how-inflation-affects-your-daily-budget", "inflation-proofing-savings"),
    ("credit-card-interest", "minimum-payments-cost", "credit-scores-and-borrowing"),
    ("understanding-interest-rates", "how-to-compare-loans", "fixed-vs-variable-rates"),
    ("investing-101", "index-funds-plain-english", "compound-interest-guide", "dollar-cost-averaging", "risk-tolerance-vs-capacity"),
    ("retirement-planning-basics", "safe-withdrawal-rates", "fire-movement", "sequence-of-returns"),
    ("home-affordability", "how-much-house-too-much", "down-payment-tradeoffs", "rent-vs-buy", "renting-longer-myth"),
    ("car-buying-guide", "car-buying-cash-loan-wait"),
    ("student-loan-strategies", "student-loans-first-90-days"),
    ("insurance-essentials", "insurance-basics-gaps"),
    ("net-worth-by-age", "net-worth-habit"),
]

slug_map = {r["slug"]: r for r in results}
for group in manual:
    print("\nGroup:", " + ".join(group))
    for s in group:
        r = slug_map.get(s)
        if not r:
            print(f"  MISSING {s}")
            continue
        print(f"  {r['num']} {s}: {r['title']}")
        if r["h2s"]:
            print(f"      angle: {' / '.join(r['h2s'][:5])}")
        if r["opening"]:
            print(f"      open: {r['opening'][0][:140]}...")

Path("docs/article-overlap-audit.json").write_text(
    json.dumps(
        {
            "count": len(results),
            "by_cluster": {
                k: [{"num": r["num"], "slug": r["slug"], "title": r["title"]} for r in v]
                for k, v in by_cluster.items()
            },
            "high_jaccard_pairs": [
                {
                    "score": round(j, 3),
                    "a": a["slug"],
                    "b": b["slug"],
                    "shared": sorted(inter),
                }
                for j, a, b, inter in pairs[:40]
            ],
            "new_vs_old_same_cluster": [
                {
                    "new": c["new"]["slug"],
                    "cluster": c["cluster"],
                    "old": [o["slug"] for o in c["old"]],
                }
                for c in concerns
            ],
        },
        indent=2,
    ),
    encoding="utf-8",
)
print("\nWrote docs/article-overlap-audit.json")
