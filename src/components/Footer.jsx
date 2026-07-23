import { Link } from "react-router-dom";
import { GLOSSARY } from "@/config/site.config";

// Single global footer — Tools / Learn / Trust
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#A3FFD6]/15 bg-obsidian">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex items-baseline no-underline">
            <span className="text-base font-semibold text-[#E0E0E0]">TopMoney</span>
            <span className="text-base font-medium text-[#A3FFD6]">Tools</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#E0E0E0]/80">
            Free financial calculators and plain-English guides. Calculator inputs run in your browser.
          </p>
          <p className="mt-4 text-xs text-[#889988]/70">Montreal, Quebec · Operated by André Denis</p>
        </div>

        <nav aria-label="Tools (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Tools</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li>
              <Link to="/tools" className="hover:text-[#A3FFD6]">
                All Calculators
              </Link>
            </li>
            <li>
              <Link to="/tools/mortgage-payment" className="hover:text-[#A3FFD6]">
                Mortgage Payment
              </Link>
            </li>
            <li>
              <Link to="/tools/budget-planner" className="hover:text-[#A3FFD6]">
                Budget Planner
              </Link>
            </li>
            <li>
              <Link to="/tools/fire-number" className="hover:text-[#A3FFD6]">
                FIRE Number
              </Link>
            </li>
            <li>
              <Link to="/tools/how-our-calculators-work" className="hover:text-[#A3FFD6]">
                How They Work
              </Link>
            </li>
            <li>
              <Link to="/full-directory" className="hover:text-[#A3FFD6]">
                Full Directory
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Learn (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Learn</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li>
              <Link to="/education" className="hover:text-[#A3FFD6]">
                Education Center
              </Link>
            </li>
            <li>
              <Link to="/start-here" className="hover:text-[#A3FFD6]">
                Start Here
              </Link>
            </li>
            <li>
              <Link to="/glossary" className="hover:text-[#A3FFD6]">
                Glossary ({GLOSSARY.length} terms)
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-[#A3FFD6]">
                Resources
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Trust (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Trust</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li>
              <Link to="/about" className="hover:text-[#A3FFD6]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#A3FFD6]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#A3FFD6]">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#A3FFD6]">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-[#A3FFD6]">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/the-editor" className="hover:text-[#A3FFD6]">
                The Editor
              </Link>
            </li>
            <li>
              <a href="/sitemap.xml" className="hover:text-[#A3FFD6]">
                Sitemap
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]">Private by design</p>
            <p className="mt-1 text-xs text-[#889988]/70">No accounts required.</p>
            <p className="text-xs text-[#889988]/70">Calculator inputs are not stored on our servers.</p>
            <p className="text-xs text-[#889988]/70">Ads, when enabled, are disclosed in Privacy.</p>
            <p className="mt-4 font-mono text-[10px] text-[#889988]/50">Build 20260722</p>
          </div>
        </nav>
      </div>

      <div className="border-t border-[#A3FFD6]/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="max-w-3xl text-xs leading-relaxed text-[#889988]/80">
            Educational estimates only — not personalized financial advice. Results depend on your inputs.{" "}
            <Link to="/disclaimer" className="text-[#A3FFD6] hover:underline">
              Disclaimer
            </Link>
            {" · "}
            <Link to="/privacy" className="text-[#A3FFD6] hover:underline">
              Privacy
            </Link>
            {" · "}
            <Link to="/terms" className="text-[#A3FFD6] hover:underline">
              Terms
            </Link>
            . Site advertising, when enabled, is described in our Privacy Policy.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs tracking-[0.05em] text-[#E0E0E0]/50">
              © {year} TopMoneyTools. All rights reserved.
            </p>
            <a
              href="mailto:contact@topmoneytools.com"
              className="font-mono text-xs text-[#E0E0E0]/50 hover:text-[#A3FFD6]"
            >
              contact@topmoneytools.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
