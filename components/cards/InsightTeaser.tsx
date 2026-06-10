import Link from "next/link";

export function InsightTeaser({
  href,
  title,
  excerpt,
  category,
  dateLabel,
  variant = "default",
}: {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  dateLabel: string;
  variant?: "default" | "featured" | "compact";
}) {
  if (variant === "featured") {
    return (
      <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-border/90 bg-surface p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:p-10 lg:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(18,56,54,0.07) 0%, transparent 45%), linear-gradient(180deg, rgba(15,18,16,0.02) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative flex flex-1 flex-col">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
            Nota destacada · {category}
          </p>
          <p className="mt-2 text-xs text-muted">{dateLabel}</p>
          <h3 className="mt-6 font-serif text-2xl font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl lg:text-[2.125rem] lg:leading-tight">
            <Link href={href} className="focus-ring rounded-sm">
              {title}
            </Link>
          </h3>
          <p className="mt-5 max-w-prose flex-1 text-base leading-relaxed text-muted">
            {excerpt}
          </p>
          <Link
            href={href}
            className="focus-ring mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground"
          >
            Leer artículo
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="flex h-full flex-col border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-2 uppercase">
          {category} · {dateLabel}
        </p>
        <h3 className="mt-3 font-serif text-lg font-medium leading-snug tracking-tight text-foreground">
          <Link href={href} className="focus-ring rounded-sm hover:text-accent">
            {title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{excerpt}</p>
        <Link
          href={href}
          className="focus-ring mt-5 inline-flex w-fit text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Abrir nota
        </Link>
      </article>
    );
  }

  return (
    <article className="flex flex-col border-t border-border pt-8 first:border-t-0 first:pt-0 sm:first:pt-8">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
        {category} · {dateLabel}
      </p>
      <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-foreground">
        <Link href={href} className="focus-ring rounded-sm hover:text-accent">
          {title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{excerpt}</p>
      <Link
        href={href}
        className="focus-ring mt-4 inline-flex w-fit text-sm font-medium text-foreground underline-offset-4 hover:underline"
      >
        Leer nota
      </Link>
    </article>
  );
}
