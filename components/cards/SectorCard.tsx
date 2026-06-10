import Link from "next/link";

const shells: Record<"teal" | "slate" | "stone" | "deep", string> = {
  teal: "border-l-[3px] border-l-accent bg-gradient-to-br from-surface via-surface to-wash/35",
  slate:
    "border-l-[3px] border-l-foreground/20 bg-gradient-to-br from-sector-canvas/40 via-surface to-background",
  stone:
    "border-l-[3px] border-l-border bg-gradient-to-br from-wash/50 via-surface to-background",
  deep: "border-l-[3px] border-l-ink bg-gradient-to-br from-surface to-wash/30",
};

export function SectorCard({
  code,
  href,
  title,
  description,
  contextLine,
  accent = "teal",
}: {
  code: string;
  href: string;
  title: string;
  description: string;
  /** Línea corta de contexto operativo (expertise) */
  contextLine: string;
  accent?: keyof typeof shells;
}) {
  return (
    <Link
      href={href}
      className={`focus-ring group relative flex h-full flex-col overflow-hidden rounded-md border border-border/80 shadow-sm transition-all duration-300 hover:-translate-y-px hover:border-foreground/12 hover:shadow-[var(--shadow-card)] sm:p-0 ${shells[accent]}`}
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-mono text-[11px] font-medium tracking-[0.24em] text-muted-2 uppercase">
            {code}
          </span>
          <span className="hidden text-[10px] font-semibold tracking-[0.2em] text-accent/80 uppercase sm:inline">
            Sector
          </span>
        </div>
        <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">{description}</p>
        <p className="mt-5 border-t border-border/60 pt-4 text-[11px] font-semibold leading-relaxed tracking-[0.08em] text-foreground/75 uppercase">
          {contextLine}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Ver enfoque sectorial
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
