import type { ReactNode } from "react";
import { SectionBreadcrumb } from "@/components/sections/SectionBreadcrumb";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  breadcrumb?: { parent: { href: string; label: string }; current: string };
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-wash/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {breadcrumb ? (
          <SectionBreadcrumb parent={breadcrumb.parent} current={breadcrumb.current} />
        ) : null}
        {eyebrow ? (
          <p className="font-serif text-sm font-medium tracking-[0.12em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {lead}
        </p>
        {children ? <div className="mt-10 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}
