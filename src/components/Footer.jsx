import { Link } from "react-router-dom";
import { TOOLS, GLOSSARY } from "@/config/site.config";
import { ARTICLES } from "@/pages/Education";
import AdSlot from "@/components/AdSlot";

// Single global footer — 4-column layout.
// Sections: Tools / Articles / Resources / Legal
export default function Footer() {
  return (
    <footer className="border-t border-[#A3FFD6]/15 bg-obsidian">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">

        <nav aria-label="Tools (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Tools</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            {TOOLS.map((t) => (
              <li key={t.slug}>
                <Link to={`/tools/${t.slug}`} className="hover:text-[#A3FFD6]">{t.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Articles (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Articles</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            {ARTICLES.map((a) => (
              <li key={a.slug}>
                <Link to={`/education/${a.slug}`} className="hover:text-[#A3FFD6]">{a.t}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Resources</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li><Link to="/tools" className="hover:text-[#A3FFD6]">All Tools</Link></li>
            <li><Link to="/education" className="hover:text-[#A3FFD6]">Education Center</Link></li>
            <li><Link to="/glossary" className="hover:text-[#A3FFD6]">Glossary ({GLOSSARY.length} terms)</Link></li>
            <li><Link to="/resources" className="hover:text-[#A3FFD6]">Resources</Link></li>
            <li><Link to="/start-here" className="hover:text-[#A3FFD6]">Start Here</Link></li>
            <li><Link to="/about" className="hover:text-[#A3FFD6]">About</Link></li>
          </ul>
        </nav>

        <nav aria-label="Legal (footer)">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#E0E0E0]/80">
            <li><Link to="/privacy" className="hover:text-[#A3FFD6]">Privacy Policy</Link></li>
          </ul>
          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]">Private by design</p>
            <p className="mt-1 text-xs text-[#889988]/70">All calculations run in your browser. No data stored. No account required.</p>
          </div>
        </nav>

      </div>

      {/* Footer ad */}
      <div className="border-t border-[#A3FFD6]/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AdSlot slot="footer" className="h-[90px]" />
        </div>
      </div>

      {/* Razor-thin copyright line */}
      <div className="border-t border-[#A3FFD6]/10 py-4 text-center">
        <p className="font-mono text-xs tracking-[0.05em] text-[#E0E0E0]/50">
          © {new Date().getFullYear()} TopMoneyTools — Making money simple for everyone.
        </p>
      </div>
    </footer>
  );
}