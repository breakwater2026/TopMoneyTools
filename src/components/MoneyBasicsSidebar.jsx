import { Link } from "react-router-dom";
import AdSlot from "@/components/AdSlot";

// "Money Basics" sticky sidebar — 5 contextual glossary terms (passed by the
// tool page), a link to the Education center, and a sidebar ad. Falls back to
// a generic starter set when no terms are supplied.
const DEFAULT_TERMS = [
  { q: "What is interest?", slug: "interest" },
  { q: "What is compound growth?", slug: "compound-growth" },
  { q: "What is inflation?", slug: "inflation" },
  { q: "What is net worth?", slug: "net-worth" },
  { q: "What is amortization?", slug: "amortization" },
];

export default function MoneyBasicsSidebar({ terms }) {
  const list = (terms && terms.length ? terms : DEFAULT_TERMS).slice(0, 5);
  return (
    <div className="sticky top-24 space-y-4">
      <aside aria-label="Money Basics" className="instrument-surface rounded-sm p-5">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A3FFD6]">// Money Basics</h2>
        <ul className="mt-3 space-y-2.5">
          {list.map((b) => (
            <li key={b.slug}>
              <Link to={`/glossary#${b.slug}`} className="text-sm text-[#E0E0E0] hover:text-[#A3FFD6]">
                {b.q}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/glossary" className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">
          Full Glossary →
        </Link>
        <div className="mt-4 border-t border-[hsl(var(--primary)/0.18)] pt-4">
          <Link to="/education" className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6] hover:underline">
            Learn the Basics →
          </Link>
        </div>
      </aside>

      <AdSlot slot="sidebar" className="h-[320px]" />
    </div>
  );
}