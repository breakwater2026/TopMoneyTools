import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Shared hangar instrument card — Home + Tools index.
 * Expects tool: { slug, num, name, short }
 */
export default function ToolCard({ tool, className, letterBadge = false }) {
  const letter = tool.name?.split(" ")[0]?.slice(0, 1) || "?";

  return (
    <Link
      to={`/tools/${tool.slug}`}
      aria-label={`Open instrument: ${tool.name}`}
      className={cn(
        "group flex h-full flex-col rounded-sm bg-obsidian p-5 transition",
        "hover:-translate-y-0.5 hover:bg-void hover:instrument-glow",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">{tool.num}</span>
        {letterBadge ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A3FFD6]/20 bg-[#A3FFD6]/10 text-[#A3FFD6]">
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">{letter}</span>
          </div>
        ) : (
          <span
            aria-hidden="true"
            className="h-3 w-3 rotate-45 border border-[#A3FFD6] transition group-hover:bg-[#A3FFD6]"
          />
        )}
      </div>
      <h3 className="mt-4 line-clamp-2 font-heading text-lg font-semibold text-[#E0E0E0]">{tool.name}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-[#889988]">{tool.short}</p>
      <span className="mt-4 inline-flex min-h-11 items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3FFD6]">
        Open Instrument <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
