import Link from "next/link";
import type { ReactNode } from "react";

export function LinkCard({
  href,
  title,
  description,
  footer,
  category,
  className = "",
}: {
  href: string;
  title: string;
  description: string;
  footer?: ReactNode;
  /** Etiqueta superior (p. ej. eje de solución) */
  category?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`focus-ring group relative flex h-full flex-col overflow-hidden rounded-md border border-border/90 bg-surface p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/[0.12] hover:shadow-[var(--shadow-card-hover)] sm:p-8 ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      {category ? (
        <span className="text-[10px] font-semibold tracking-[0.2em] text-accent/90 uppercase">
          {category}
        </span>
      ) : null}
      <h3
        className={`font-serif text-[1.35rem] font-medium leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent sm:text-2xl ${category ? "mt-4" : ""}`}
      >
        {title}
      </h3>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted sm:text-base">
        {description}
      </p>
      <div className="mt-8 flex items-center justify-between gap-3 border-t border-border/70 pt-6">
        {footer ? (
          <span className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
            {footer}
          </span>
        ) : (
          <span className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
            Profundizar
          </span>
        )}
        <span
          className="text-lg text-foreground/35 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden
        >
          →
        </span>
      </div>
    </Link>
  );
}
