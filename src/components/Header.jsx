import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import CompassLogo from "@/components/CompassLogo";
import { TOOLS, NAV_LINKS } from "@/config/site.config";

// Global header — sticky, fully accessible (role=navigation, aria-label="Main",
// keyboard-navigable), with Tools dropdown listing all 10 tools.
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-[#A3FFD6]/15 bg-obsidian/95 backdrop-blur supports-[backdrop-filter]:bg-obsidian/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="TopMoneyTools home" className="py-2">
          <CompassLogo interactive />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:text-[#A3FFD6]"
            >
              Tools
              <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="absolute right-0 top-full w-80 instrument-surface rounded-sm p-2 shadow-2xl instrument-glow">
                {TOOLS.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/tools/${t.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-[#A3FFD6]/10"
                  >
                    <span className="font-mono text-xs text-[#889988]">{t.num}</span>
                    <span className="flex-1 text-sm text-[#E0E0E0]">{t.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              aria-current={pathname === l.path ? "page" : undefined}
              className="px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:text-[#A3FFD6]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/start-here"
          className="rounded-sm border-2 border-[#A3FFD6] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] transition hover:bg-[#A3FFD6] hover:text-[#081008]"
        >
          Start Here
        </Link>
      </div>

      <nav aria-label="Mobile" className="flex gap-1 overflow-x-auto border-t border-[#A3FFD6]/10 px-3 py-2 md:hidden">
        <Link to="/tools" className="whitespace-nowrap px-2 py-1 font-mono text-xs uppercase tracking-[0.15em] text-[#E0E0E0]">Tools</Link>
        {NAV_LINKS.map((l) => (
          <Link key={l.path} to={l.path} className="whitespace-nowrap px-2 py-1 font-mono text-xs uppercase tracking-[0.15em] text-[#E0E0E0]">{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}