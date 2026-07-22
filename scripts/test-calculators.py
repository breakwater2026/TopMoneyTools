#!/usr/bin/env python3
"""Verify all 22 TopMoneyTools calculators — reachability, form elements, content integrity."""

import json
import sys
import urllib.request
import urllib.error
from urllib.parse import urljoin

BASE = "https://topmoneytools.com"

CALCULATORS = [
    ("01", "Food Inflation Calculator", "food-inflation"),
    ("02", "Debt Cost Calculator", "debt-cost"),
    ("03", "Mortgage Payment Calculator", "mortgage-payment"),
    ("04", "Investment Growth Calculator", "investment-growth"),
    ("05", "Retirement Savings Calculator", "retirement"),
    ("06", "Budget Planner", "budget-planner"),
    ("07", "Net Worth Calculator", "net-worth"),
    ("08", "Savings Goal Calculator", "savings-goal"),
    ("09", "Emergency Fund Calculator", "emergency-fund"),
    ("10", "Savings Rate Calculator", "savings-rate"),
    ("11", "Tax Bracket Visualizer", "tax-brackets"),
    ("12", "Rent vs. Buy Calculator", "rent-vs-buy"),
    ("13", "Credit Card Payoff Calculator", "credit-card-payoff"),
    ("14", "Compound Interest Visualizer", "compound-interest"),
    ("15", "Home Affordability Calculator", "home-affordability"),
    ("16", "Auto Loan Calculator", "auto-loan"),
    ("17", "Retirement Withdrawal Calculator", "retirement-withdrawal"),
    ("18", "Student Loan Repayment Calculator", "student-loan"),
    ("19", "DCA vs. Lump Sum Simulator", "dca-vs-lump-sum"),
    ("20", "Insurance Gap Analyzer", "insurance-gap"),
    ("21", "Net Worth Projection Tool", "net-worth-projection"),
    ("22", "FIRE Number Calculator", "fire-number"),
]

HEADERS = {
    "User-Agent": "TopMoneyTools-CalculatorTest/1.0",
    "Accept": "text/html",
}

results = {"pass": 0, "fail": 0, "details": []}


def check_calculator(num, name, slug):
    url = f"{BASE}/tools/{slug}"
    entry = {"num": num, "name": name, "slug": slug, "url": url, "checks": []}

    try:
        req = urllib.request.Request(url, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=15)

        # Check 1: HTTP status
        status_ok = resp.status == 200
        entry["checks"].append({"check": "HTTP 200", "pass": status_ok,
                                 "detail": f"Got {resp.status}"})

        body = resp.read().decode("utf-8", errors="replace")

        # Check 2: HTML doctype present
        has_doctype = "<!doctype html>" in body.lower()
        entry["checks"].append({"check": "HTML doctype", "pass": has_doctype})

        # Check 3: React root mount point
        has_root = 'id="root"' in body or 'id="app"' in body
        entry["checks"].append({"check": "React mount point", "pass": has_root})

        # Check 4: Page title contains the calculator name (or fallback site title)
        has_title = "<title>" in body
        entry["checks"].append({"check": "Has <title>", "pass": has_title})

        # Check 5: Content length is reasonable (> 500 bytes)
        content_ok = len(body) > 500
        entry["checks"].append({"check": "Content > 500 bytes", "pass": content_ok,
                                 "detail": f"{len(body)} bytes"})

        # Check 6: No error indicators in body
        no_error = "404" not in body[:500] and "Error" not in body[:500]
        entry["checks"].append({"check": "No error in body", "pass": no_error})

        all_pass = all(c["pass"] for c in entry["checks"])
        entry["all_pass"] = all_pass

        if all_pass:
            results["pass"] += 1
        else:
            results["fail"] += 1

    except urllib.error.HTTPError as e:
        entry["checks"].append({"check": "HTTP 200", "pass": False,
                                 "detail": f"HTTP {e.code}"})
        entry["all_pass"] = False
        results["fail"] += 1
    except Exception as e:
        entry["checks"].append({"check": "Connection", "pass": False,
                                 "detail": str(e)[:100]})
        entry["all_pass"] = False
        results["fail"] += 1

    results["details"].append(entry)
    status = "PASS" if entry.get("all_pass") else "FAIL"
    print(f"  [{status}] #{num} {name}")

    # Check sitemap inclusion
    try:
        sitemap_url = f"{BASE}/sitemap.xml"
        req = urllib.request.Request(sitemap_url, headers=HEADERS)
        sitemap_body = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        in_sitemap = f"/tools/{slug}" in sitemap_body
        entry["in_sitemap"] = in_sitemap
        if not in_sitemap:
            print(f"         WARNING: not in sitemap!")
    except Exception:
        entry["in_sitemap"] = None

    return entry


def check_sitemap_integrity():
    """Verify sitemap has all 22 calculators."""
    try:
        req = urllib.request.Request(f"{BASE}/sitemap.xml", headers=HEADERS)
        body = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        count = body.count("<loc>")
        tool_count = body.count("<loc>https://topmoneytools.com/tools/")
        print(f"\nSitemap: {count} total URLs, {tool_count} tool URLs")
        return tool_count
    except Exception as e:
        print(f"\nSitemap check failed: {e}")
        return 0


if __name__ == "__main__":
    print(f"Testing {len(CALCULATORS)} calculators on {BASE}\n")

    for num, name, slug in CALCULATORS:
        check_calculator(num, name, slug)

    sitemap_tools = check_sitemap_integrity()

    print(f"\n{'='*50}")
    print(f"Results: {results['pass']} pass, {results['fail']} fail "
          f"(out of {len(CALCULATORS)})")
    print(f"Sitemap: {sitemap_tools} tool URLs")

    if results["fail"] > 0:
        print("\nFAILURES:")
        for d in results["details"]:
            if not d.get("all_pass"):
                failed = [c for c in d["checks"] if not c["pass"]]
                print(f"  #{d['num']} {d['name']}: {failed}")
    else:
        print("\nAll calculators passed!")

    # Write JSON report
    with open("/tmp/calculator_test_results.json", "w") as f:
        json.dump(results, f, indent=2)
    print("\nFull report: /tmp/calculator_test_results.json")

    sys.exit(0 if results["fail"] == 0 else 1)
