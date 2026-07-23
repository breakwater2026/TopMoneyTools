import Kicker from "@/components/ui/Kicker";
import { cn } from "@/lib/utils";

/**
 * Quiet document layout for Privacy / Terms / Disclaimer.
 * max measure for reading comfort; last-updated chip under H1.
 */
export default function LegalDoc({
  kicker = "// Legal",
  title,
  lastUpdated,
  meta,
  children,
  className,
}) {
  return (
    <article className={cn("mx-auto max-w-3xl px-4 py-12 sm:px-6", className)}>
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight text-[#E0E0E0]">{title}</h1>
      {(lastUpdated || meta) && (
        <div className="mt-3 space-y-1 font-mono text-[11px] text-[#889988]/80">
          {lastUpdated ? <p>Last updated: {lastUpdated}</p> : null}
          {meta}
        </div>
      )}
      <div className="prose-legal mt-8 space-y-8 text-[#889988] leading-relaxed">{children}</div>
    </article>
  );
}
