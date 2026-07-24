# Phase 5 automated QA gates (sandbox). Exit 0 = all automated P0 checks pass.
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
fail = []
warn = []


def read(p):
    return (ROOT / p).read_text(encoding="utf-8", errors="replace")


# --- G3 Footer legal ---
footer = read("src/components/Footer.jsx")
for label, href in [
    ("About", "/about"),
    ("Contact", "/contact"),
    ("Privacy", "/privacy"),
    ("Terms", "/terms"),
    ("Disclaimer", "/disclaimer"),
]:
    if href not in footer:
        fail.append(f"G3 Footer missing link {href} ({label})")

# --- G4 no absolute tracking claims in marketing ---
bad_patterns = [
    r"no tracking ever",
    r"never track",
    r"zero tracking",
    r"no tracking,",
    r"no tracking\.",
    r"no tracking and",
]
for path in Path(ROOT / "src").rglob("*.jsx"):
    text = path.read_text(encoding="utf-8", errors="replace").lower()
    # allow Privacy policy discussing the phrase
    if path.name == "Privacy.jsx":
        continue
    for pat in bad_patterns:
        if re.search(pat, text):
            fail.append(f"G4 absolute tracking claim in {path.relative_to(ROOT)}: /{pat}/")

# --- G5 fake ad slots ---
adslot = read("src/components/AdSlot.jsx")
if "Financial Sponsorship" in adslot and "return null" not in adslot:
    fail.append("G5 AdSlot may still show sponsorship chrome")
ads_cfg = read("src/config/adsense.config.js")
if not re.search(r"ADS_ENABLED\s*=\s*false", ads_cfg):
    warn.append("G5 ADS_ENABLED is not false — confirm intentional before prod ads")

# --- G7/G8 routes ---
app = read("src/App.jsx")
for route in ["/disclaimer", "/terms", "/privacy", "/contact", "/about"]:
    if f'path="{route}"' not in app:
        fail.append(f"Route missing in App.jsx: {route}")

# --- G10 André spelling / Montreal no accent ---
about = read("src/pages/About.jsx")
if "André Denis" not in about and "Andr\u00e9 Denis" not in about:
    # file may use unicode
    if "André" not in about:
        fail.append("G10 About missing André Denis")
if "Montréal" in about or "Québec" in about:
    fail.append("G10 About still has accented Montreal/Quebec")
if "hello@" in about.lower():
    fail.append("G10 About still references hello@")

# contact email
contact = read("src/pages/Contact.jsx")
if "contact@topmoneytools.com" not in contact:
    fail.append("G6 Contact missing contact@topmoneytools.com")
if "hello@" in contact:
    fail.append("G6 Contact still has hello@")

# --- G11 Sitemap completeness ---
sm = read("public/sitemap.xml")
edu = read("src/pages/Education.jsx")
articles = re.findall(r'slug:\s*"([^"]+)"', edu)
for slug in articles:
    if f"/education/{slug}" not in sm:
        fail.append(f"G11 sitemap missing education/{slug}")
site = read("src/config/site.config.js")
tools = re.findall(r'\{\s*slug:\s*"([^"]+)",\s*num:', site)
for slug in tools:
    if f"/tools/{slug}" not in sm:
        fail.append(f"G11 sitemap missing tools/{slug}")
for must in ["/disclaimer", "/privacy", "/terms", "/glossary", "/education", "/tools"]:
    if must not in sm:
        fail.append(f"G11 sitemap missing {must}")

# --- G14 ads.txt ---
ads = ROOT / "public/ads.txt"
if not ads.exists() or not ads.read_text(encoding="utf-8").strip():
    fail.append("G14 ads.txt missing or empty")

# --- G15 Base44 ---
for path in Path(ROOT / "src").rglob("*.{jsx,js,html}".replace("{jsx,js,html}", "")):
    pass
for path in list(Path(ROOT / "src").rglob("*.jsx")) + list(Path(ROOT / "src").rglob("*.html")) + list(Path(ROOT / "index.html").parent.glob("index.html")):
    try:
        t = path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        continue
    if re.search(r"Base44", t, re.I):
        fail.append(f"G15 Base44 found in {path}")

# --- Education count 40 ---
if len(articles) != 40:
    fail.append(f"Education ARTICLES count {len(articles)} != 40")

# --- Tools 22 ---
if len(tools) != 22:
    fail.append(f"TOOLS count {len(tools)} != 22")

# --- Tool explainers coverage ---
te = read("src/data/toolExplainers.js")
for slug in tools:
    if f'"{slug}"' not in te and f"'{slug}'" not in te:
        # keys are "food-inflation":
        if f'"{slug}":' not in te:
            fail.append(f"Tool explainer missing for {slug}")

# --- TrustStrip / disclaimer on shell ---
shell = read("src/components/tools/ToolPageShell.jsx")
if "/disclaimer" not in shell:
    fail.append("ToolPageShell missing /disclaimer link")
if "TrustStrip" not in shell and "browser-local" not in shell.lower():
    warn.append("ToolPageShell may be missing trust strip")

# --- robots ---
robots = read("public/robots.txt")
if "Sitemap:" not in robots:
    fail.append("robots.txt missing Sitemap directive")
if "Disallow: /" in robots and "Allow: /" not in robots:
    fail.append("robots.txt may be blocking entire site")

print("=== Phase 5 automated QA ===")
if fail:
    print(f"FAIL ({len(fail)}):")
    for f in fail:
        print("  -", f)
else:
    print("FAIL: 0")
if warn:
    print(f"WARN ({len(warn)}):")
    for w in warn:
        print("  -", w)
else:
    print("WARN: 0")

sys.exit(1 if fail else 0)
