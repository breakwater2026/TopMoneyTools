import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/**
 * Accessible FAQ accordion (Pre-Flight Checks).
 * items: { id, q, a }[]
 */
export default function FaqAccordion({ items, className }) {
  if (!items?.length) return null;

  return (
    <Accordion type="single" collapsible className={cn("w-full space-y-3", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id || item.q}
          value={item.id || item.q}
          className="instrument-surface rounded-sm border-none px-5 data-[state=open]:instrument-glow"
        >
          <AccordionTrigger className="py-4 font-heading text-base font-semibold text-[#E0E0E0] hover:no-underline hover:text-[#A3FFD6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6] [&[data-state=open]]:text-[#A3FFD6]">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-[#889988]">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
