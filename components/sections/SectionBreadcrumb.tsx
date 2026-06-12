import Link from "next/link";

const variants = {
  light: {
    nav: "text-muted-2",
    parent: "text-muted-2 hover:text-foreground",
    separator: "text-border",
    current: "text-accent",
  },
  dark: {
    nav: "text-hero-fg/80",
    parent: "text-hero-fg/80 hover:text-hero-fg",
    separator: "text-hero-fg/45",
    current: "text-hero-fg",
  },
} as const;

export function SectionBreadcrumb({
  parent,
  current,
  variant = "light",
}: {
  parent: { href: string; label: string };
  current: string;
  variant?: keyof typeof variants;
}) {
  const styles = variants[variant];

  return (
    <nav
      aria-label="Miga de pan"
      className={`mb-4 text-[11px] font-semibold tracking-[0.16em] uppercase ${styles.nav}`}
    >
      <Link href={parent.href} className={`transition-colors ${styles.parent}`}>
        {parent.label}
      </Link>
      <span className={`mx-2 ${styles.separator}`} aria-hidden>
        /
      </span>
      <span className={styles.current}>{current}</span>
    </nav>
  );
}
