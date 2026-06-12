import type { ReactNode } from "react";
import Image from "next/image";
import { SectionBreadcrumb } from "@/components/sections/SectionBreadcrumb";

export function ServiceHero({
  image,
  breadcrumb,
  eyebrow,
  title,
  lead,
  children,
}: {
  image: string;
  breadcrumb?: { parent: { href: string; label: string }; current: string };
  eyebrow?: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.4] saturate-[0.8]"
        />
        <div className="hero-service-overlay absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="hero-service-copy max-w-3xl rounded-md border border-white/10 px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
          {breadcrumb ? (
            <SectionBreadcrumb
              parent={breadcrumb.parent}
              current={breadcrumb.current}
              variant="dark"
            />
          ) : null}
          {eyebrow ? (
            <p
              className={`text-xs font-semibold tracking-[0.14em] text-hero-fg/90 uppercase ${breadcrumb ? "mt-2" : ""}`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1 className="hero-text-shadow mt-3 font-serif text-4xl font-medium leading-tight tracking-tight text-hero-fg sm:text-5xl">
            {title}
          </h1>
          <p className="hero-text-shadow mt-6 text-lg leading-relaxed text-hero-fg sm:text-xl">
            {lead}
          </p>
          {children ? <div className="mt-10 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
