#!/usr/bin/env python3
"""
Find the commit (July 19–20, 2026) where "Tactical" was removed from
Home.jsx's hero section. Uses the GitHub API — no Docker pull needed.

Usage:
  export GH_TOKEN=ghp_...
  python3 find-tactical-removal.py
"""

import base64
import os
import sys
import requests
from datetime import datetime, timezone

OWNER = "breakwater2026"
REPO = "TopMoneyTools"
FILE_PATH = "src/pages/Home.jsx"

TOKEN = os.environ.get("GH_TOKEN")
if not TOKEN:
    print("ERROR: GH_TOKEN not set. Export it and try again.")
    sys.exit(1)

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github.v3+json",
}


def get_commits_in_range(since: str, until: str) -> list[dict]:
    """Fetch all commits on main between two ISO 8601 dates."""
    url = f"https://api.github.com/repos/{OWNER}/{REPO}/commits"
    params = {"sha": "main", "since": since, "until": until, "per_page": 100}
    commits = []
    while url:
        resp = requests.get(url, headers=HEADERS, params=params if "?" in url else None)
        resp.raise_for_status()
        commits.extend(resp.json())
        url = resp.links.get("next", {}).get("url")
    return commits


def get_file_at_commit(sha: str) -> str | None:
    """Fetch Home.jsx content for a given commit SHA."""
    url = f"https://api.github.com/repos/{OWNER}/{REPO}/contents/{FILE_PATH}"
    params = {"ref": sha}
    resp = requests.get(url, headers=HEADERS, params=params)
    if resp.status_code == 404:
        return None
    resp.raise_for_status()
    data = resp.json()
    return base64.b64decode(data["content"]).decode("utf-8")


def main():
    since = "2026-07-19T00:00:00Z"
    until = "2026-07-21T00:00:00Z"

    print(f"Fetching commits on main from {since} to {until}...")
    commits = get_commits_in_range(since, until)
    print(f"Found {len(commits)} commits.\n")

    # Walk commits in chronological order (oldest first)
    for commit in reversed(commits):
        sha = commit["sha"]
        date_str = commit["commit"]["committer"]["date"]
        message = commit["commit"]["message"].split("\n")[0]
        dt = datetime.fromisoformat(date_str.replace("Z", "+00:00"))

        content = get_file_at_commit(sha)
        if content is None:
            print(f"[{dt.strftime('%Y-%m-%d %H:%M')}] {sha[:7]}  SKIP (file not found)")
            continue

        has_tactical = "Tactical" in content

        if has_tactical:
            print(f"[{dt.strftime('%Y-%m-%d %H:%M')}] {sha[:7]}  TACTICAL PRESENT  — {message}")
        else:
            print(f"[{dt.strftime('%Y-%m-%d %H:%M')}] {sha[:7]}  *** TACTICAL REMOVED *** — {message}")
            # Show the surrounding context
            for i, line in enumerate(content.split("\n"), 1):
                if "Navigator" in line or "Interface" in line or "Instrument" in line or "Tools" in line:
                    print(f"    L{i}: {line.strip()}")
            print()


if __name__ == "__main__":
    main()
