import { cn } from "@/lib/utils";

/** Page width container — hangar standard max-width. */
export default function Container({ className, as: Comp = "div", children, ...props }) {
  return (
    <Comp className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6", className)} {...props}>
      {children}
    </Comp>
  );
}
