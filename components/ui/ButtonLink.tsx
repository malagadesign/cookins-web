import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-muted border border-transparent shadow-sm hover:shadow-md",
  secondary:
    "bg-surface text-foreground border border-border/90 hover:border-foreground/18 hover:bg-background/80",
  ghost: "text-foreground hover:bg-wash border border-transparent",
};

const sizes = {
  default: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px] min-h-[48px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "default" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
