#!/usr/bin/env python3
"""
Convert a CSV of country data into the JSON format used by the
food-inflation and debt-cost calculators.

Usage:
  python3 scripts/csv-to-country-json.py path/to/inflation-data.csv   [--date 2026-07-01]
  python3 scripts/csv-to-country-json.py path/to/debt-rates.csv       --target debt-cost  --date 2026-07-01

The CSV is expected to have at least three columns in any order:
  - code : 2-letter ISO country code (e.g. US, FR)
  - name : full country name
  - value: numeric inflation / interest rate

Column names are matched case-insensitively.  Extraneous columns are
ignored, so you can literally copy-paste a table from a website and
save it as CSV.

Output is written back to public/tools/<target>/Countries-<Type>.json.
"""

import csv
import json
import os
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGETS = {
    "food-inflation": {
        "path": ROOT / "public" / "tools" / "food-inflation" / "Countries-Inflation.json",
    },
    "debt-cost": {
        "path": ROOT / "public" / "tools" / "debt-cost" / "Countries-Debt.json",
    },
}

def find_column(header: list[str], *names: str) -> int | None:
    """Return the index of the first header that fuzzy-matches any name."""
    lower = [h.strip().lower() for h in header]
    for name in names:
        for i, h in enumerate(lower):
            if h == name.lower():
                return i
            # fuzzy: e.g. "country code" ~ "code"
            if name.lower() in h and len(h) <= len(name) + 6:
                return i
    return None


def main():
    import argparse

    parser = argparse.ArgumentParser(description="Convert CSV → calculator country JSON")
    parser.add_argument("csv", help="Path to the CSV file")
    parser.add_argument("--target", choices=list(TARGETS), default="food-inflation",
                        help="Which calculator JSON to update (default: food-inflation)")
    parser.add_argument("--date", help="Date string for all rows (default: today)",
                        default=date.today().isoformat())
    args = parser.parse_args()

    target = TARGETS[args.target]
    csv_path = Path(args.csv).expanduser().resolve()

    if not csv_path.exists():
        print(f"ERROR: CSV not found: {csv_path}")
        sys.exit(1)

    # ── read CSV ──────────────────────────────────────────────────
    countries = []
    with open(csv_path, newline="", encoding="utf-8-sig") as f:
        reader = csv.reader(f)
        header = next(reader, None)
        if header is None:
            print("ERROR: CSV is empty — no header row")
            sys.exit(1)

        code_idx = find_column(header, "code", "country code", "iso")
        name_idx = find_column(header, "name", "country", "country name")
        value_idx = find_column(header, "value", "rate", "inflation", "inflation rate",
                                "interest", "interest rate", "percent", "%")

        missing = []
        if code_idx is None:
            missing.append("code")
        if name_idx is None:
            missing.append("name")
        if value_idx is None:
            missing.append("value")
        if missing:
            print(f"ERROR: could not find column(s) for: {', '.join(missing)}")
            print(f"CSV header row: {header}")
            print("Expected columns (any order): code, name, value")
            sys.exit(1)

        for row_num, row in enumerate(reader, start=2):
            row = [c.strip() for c in row]
            if not any(row):          # skip blank rows
                continue
            if row[0].startswith("#"):  # skip comment rows
                continue
            try:
                code = row[code_idx].strip().upper()
                name = row[name_idx].strip()
                value = float(row[value_idx].strip().replace("%", "").replace(",", "."))
            except (IndexError, ValueError) as e:
                print(f"WARNING: skipping row {row_num} — {e}: {row}")
                continue

            if len(code) != 2 or not code.isalpha():
                print(f"WARNING: row {row_num} — suspicious country code '{code}' (expected 2 letters), keeping anyway")

            countries.append({
                "code": code,
                "name": name,
                "value": round(value, 1),
                "date": args.date,
            })

    if not countries:
        print("ERROR: no valid rows found in CSV")
        sys.exit(1)

    # ── write JSON ────────────────────────────────────────────────
    target["path"].parent.mkdir(parents=True, exist_ok=True)
    with open(target["path"], "w") as f:
        json.dump({"countries": countries}, f, indent=2, ensure_ascii=False)
        f.write("\n")  # trailing newline

    print(f"Wrote {len(countries)} countries to {target['path']}")
    print("Next: commit, push, and redeploy to publish the update.")


if __name__ == "__main__":
    main()
