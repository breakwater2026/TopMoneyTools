import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/**
 * Hangar CTA styles — single button language sitewide.
 * variant: primary | secondary | ghost
 * size: sm | md | lg
 */
const variants = {
  primary:
    "bg-[#A3FFD6] text-[#081008] hover:bg-[#88E6B8] hover:instrument-glow border border-transparent",
  secondary:
    "border-2 border-[#A3FFD6] bg-transparent text-[#A3FFD6] hover:bg-[#A3FFD6] hover:text-[#081008]",
  ghost:
    "border border-[#A3FFD6]/30 bg-transparent text-[#A3FFD6] hover:bg-[#A3FFD6]/10",
};

const sizes = {
  sm: "min-h-10 px-4 py-2 text-[11px]",
  md: "min-h-11 px-5 py-2.5 text-xs",
  lg: "min-h-12 px-6 py-3 text-xs",
};

export function siteButtonClassName({ variant = "primary", size = "md", fullWidth = false, className } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-mono font-semibold uppercase tracking-[0.2em] transition",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3FFD6]",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    fullWidth && "w-full",
    className
  );
}

export default function SiteButton({
  as: Comp,
  to,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  children,
  ...props
}) {
  const classes = siteButtonClassName({ variant, size, fullWidth, className });

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  if (Comp) {
    return (
      <Comp className={classes} {...props}>
        {children}
      </Comp>
    );
  }
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
