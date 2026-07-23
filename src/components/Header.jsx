import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import CompassLogo from "@/components/CompassLogo";
import { siteButtonClassName } from "@/components/ui/SiteButton";
import { TOOLS, NAV_LINKS } from "@/config/site.config";
import { cn } from "@/lib/utils";

// Global header — sticky, accessible mobile drawer (Esc, body scroll lock).
export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpen(false);
  }, [pathname]);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  // Esc closes menus
  useEffect(() => {
    if (!mobileMenuOpen && !open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen, open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#A3FFD6]/15 bg-obsidian/95 backdrop-blur supports-[backdrop-filter]:bg-obsidian/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-16">
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
              className={cn(
                "flex items-center gap-1 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:text-[#A3FFD6]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6]",
                (pathname.startsWith("/tools") || open) && "text-[#A3FFD6]"
              )}
            >
              Tools
              <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="absolute right-0 top-full max-h-[70vh] w-80 overflow-y-auto instrument-surface rounded-sm p-2 shadow-2xl instrument-glow">
                {TOOLS.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/tools/${t.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-sm px-3 py-2 hover:bg-[#A3FFD6]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6]"
                  >
                    <span className="font-mono text-xs text-[#889988]">{t.num}</span>
                    <span className="flex-1 text-sm text-[#E0E0E0]">{t.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => {
            const active = pathname === l.path || pathname.startsWith(`${l.path}/`);
            return (
              <Link
                key={l.path}
                to={l.path}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:text-[#A3FFD6]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6]",
                  active && "text-[#A3FFD6]"
                )}
              >
                {l.label}
                {active ? (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#A3FFD6]"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/tools"
            className={cn(siteButtonClassName({ variant: "primary", size: "sm" }), "hidden sm:inline-flex")}
          >
            Open tools
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#A3FFD6]/20 text-[#E0E0E0] transition hover:border-[#A3FFD6]/40 hover:text-[#A3FFD6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div id="mobile-nav-panel" className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="relative z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-[#A3FFD6]/10 bg-obsidian"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6">
              <Link
                to="/tools"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-sm px-3 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:bg-[#A3FFD6]/10 hover:text-[#A3FFD6]"
              >
                All tools
              </Link>
              <div className="rounded-sm border border-[#A3FFD6]/10 p-2">
                {TOOLS.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/tools/${t.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-11 items-center gap-3 rounded-sm px-2 py-2 text-sm text-[#E0E0E0] hover:bg-[#A3FFD6]/10 hover:text-[#A3FFD6]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#889988]">{t.num}</span>
                    <span>{t.name}</span>
                  </Link>
                ))}
              </div>
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-sm px-3 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#E0E0E0] hover:bg-[#A3FFD6]/10 hover:text-[#A3FFD6]"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/tools"
                onClick={() => setMobileMenuOpen(false)}
                className={siteButtonClassName({ variant: "primary", fullWidth: true })}
              >
                Open tools
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={siteButtonClassName({ variant: "ghost", fullWidth: true })}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
