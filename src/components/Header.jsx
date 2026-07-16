import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import CompassLogo from "@/components/CompassLogo";
import { TOOLS, NAV_LINKS } from "@/config/site.config";

// Global header — sticky, fully accessible (role=navigation, aria-label="Main",
// keyboard-navigable), with a mobile-first menu that preserves the desktop experience.
export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpen(false);
  }, [pathname]);

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

        <div className="flex items-center gap-2">
          <Link
            to="/start-here"
            className="hidden rounded-sm border-2 border-[#A3FFD6] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] transition hover:bg-[#A3FFD6] hover:text-[#081008] sm:inline-flex"
          >
            Start Here
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#A3FFD6]/20 text-[#E0E0E0] transition hover:border-[#A3FFD6]/40 hover:text-[#A3FFD6] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={`overflow-hidden border-t border-[#A3FFD6]/10 bg-obsidian/95 transition-all duration-200 md:hidden ${mobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6">
          <Link to="/tools" onClick={() => setMobileMenuOpen(false)} className="rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:bg-[#A3FFD6]/10 hover:text-[#A3FFD6]">
            Tools
          </Link>
          <div className="rounded-sm border border-[#A3FFD6]/10 p-2">
            {TOOLS.map((t) => (
              <Link key={t.slug} to={`/tools/${t.slug}`} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 rounded-sm px-2 py-2 text-sm text-[#E0E0E0] hover:bg-[#A3FFD6]/10 hover:text-[#A3FFD6]">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]">{t.num}</span>
                <span>{t.name}</span>
              </Link>
            ))}
          </div>
          {NAV_LINKS.map((l) => (
            <Link key={l.path} to={l.path} onClick={() => setMobileMenuOpen(false)} className="rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:bg-[#A3FFD6]/10 hover:text-[#A3FFD6]">
              {l.label}
            </Link>
          ))}
          <Link to="/start-here" onClick={() => setMobileMenuOpen(false)} className="rounded-sm border border-[#A3FFD6]/30 px-3 py-2 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#A3FFD6] hover:bg-[#A3FFD6] hover:text-[#081008]">
            Start Here
          </Link>
        </div>
      </div>
    </header>
  );
}