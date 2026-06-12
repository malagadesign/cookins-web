import { ButtonLink } from "@/components/ui/ButtonLink";
import { LinkCard } from "@/components/cards/LinkCard";
import { ServiceHero } from "@/components/servicios/ServiceHero";
import { Section } from "@/components/sections/Section";
import type { Service } from "@/lib/services";
import { serviceHref, services } from "@/lib/services";

export function ServiceDetail({ service }: { service: Service }) {
  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <ServiceHero
        image={service.image}
        breadcrumb={{ parent: { href: "/servicios", label: "Servicios" }, current: service.title }}
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.description}
      >
        <ButtonLink
          href="/contacto"
          size="lg"
          variant="secondary"
          className="border-transparent bg-hero-fg text-ink hover:bg-white hover:text-ink"
        >
          Consultar alcance
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
        <div className="prose-cookins max-w-3xl">
          <p>{service.definition}</p>
          <p>
            <strong className="text-foreground">Qué resuelve.</strong> {service.resolves}
          </p>
          <p>
            <strong className="text-foreground">Valor para la operación.</strong> {service.value}
          </p>
          <p>
            <strong className="text-foreground">Cómo se implementa.</strong> {service.implementation}
          </p>
          <p>
            <strong className="text-foreground">Diferencial.</strong> {service.differentiator}
          </p>
          <p>
            <strong className="text-foreground">Vínculo con calidad.</strong> {service.qualityLink}
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {service.contextLinks.map((link) => (
            <ButtonLink key={link.href + link.label} href={link.href} variant="secondary">
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </Section>

      <Section tone="wash">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
          Otros servicios
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((s) => (
            <LinkCard
              key={s.id}
              href={serviceHref(s.id)}
              title={s.title}
              description={s.description}
              footer="Ver servicio"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
