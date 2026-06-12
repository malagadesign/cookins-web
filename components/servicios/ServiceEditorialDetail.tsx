import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LinkCard } from "@/components/cards/LinkCard";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { Section } from "@/components/sections/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { Service } from "@/lib/services";
import { serviceHref, services } from "@/lib/services";

type Pillar = { title: string; text: ReactNode };

export function ServiceEditorialDetail({
  service,
  heroTitle,
  heroLead,
  intro,
  pillars,
  highlightStat,
  ctaLabel = "Consultar",
  ctaHref = "/contacto",
}: {
  service: Service;
  heroTitle?: string;
  heroLead?: string;
  intro: string[];
  pillars?: Pillar[];
  highlightStat?: { value: number; prefix?: string; suffix?: string; label: string };
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const related = services.filter((s) => s.id !== service.id).slice(0, 3);
  const title = heroTitle ?? service.title;
  const lead = heroLead ?? service.description;

  return (
    <>
      <ServiceHero
        image={service.image}
        breadcrumb={{ parent: { href: "/servicios", label: "Servicios" }, current: service.title }}
        eyebrow={service.eyebrow}
        title={title}
        lead={lead}
      >
        <ButtonLink
          href={ctaHref}
          size="lg"
          variant="secondary"
          className="border-transparent bg-hero-fg text-ink hover:bg-white hover:text-ink"
        >
          {ctaLabel}
        </ButtonLink>
        <ButtonLink
          href="/servicios"
          size="lg"
          variant="secondary"
          className="border-white/35 bg-white/10 text-hero-fg hover:border-white/50 hover:bg-white/15"
        >
          Todos los servicios
        </ButtonLink>
      </ServiceHero>

      <Section>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        {highlightStat ? (
          <div className="mt-12 rounded-md border border-border bg-ink px-8 py-10 text-hero-fg sm:px-10">
            <p className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              <AnimatedCounter
                value={highlightStat.value}
                prefix={highlightStat.prefix}
                suffix={highlightStat.suffix}
              />
            </p>
            <p className="mt-2 text-sm text-hero-fg-muted">{highlightStat.label}</p>
          </div>
        ) : null}
      </Section>

      {pillars?.length ? (
        <Section tone="wash">
          <ul
            className={`grid gap-5 lg:gap-6 ${
              pillars.length >= 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"
            }`}
          >
            {pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className="flex flex-col rounded-md border border-border bg-surface p-7 shadow-sm sm:p-8"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-serif text-xl font-medium tracking-tight text-foreground">
                  {pillar.title}
                </h2>
                <div className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {pillar.text}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href={ctaHref} size="lg">
              {ctaLabel}
            </ButtonLink>
          </div>
        </Section>
      ) : null}

      <Section tone={pillars?.length ? "default" : "wash"}>
        <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
          Otros servicios
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((s) => (
            <LinkCard
              key={s.id}
              href={serviceHref(s.id)}
              title={s.title}
              description={s.teaser ?? s.description}
              footer="+ Info"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
