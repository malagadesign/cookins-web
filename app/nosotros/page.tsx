import { ButtonLink } from "@/components/ui/ButtonLink";
import { LinkCard } from "@/components/cards/LinkCard";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { nosotrosHref, nosotrosPages } from "@/lib/nosotros-pages";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Institucional, cultura Cookins e infraestructura operativa. Empresa argentina de servicios integrales de alimentación y soporte.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Compañía"
        title="Nosotros"
        lead="Más de medio siglo impulsando el desarrollo del país con servicios integrales para las operaciones más exigentes. Conocé nuestra trayectoria, cultura y capacidad operativa."
      >
        <ButtonLink href="/contacto">Contacto</ButtonLink>
        <ButtonLink href="/servicios" variant="secondary">
          Servicios
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          title="Áreas"
          subtitle="Cada eje tiene su página de detalle con contenido institucional, cultural y operativo."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {nosotrosPages.map((p) => (
            <LinkCard
              key={p.id}
              href={nosotrosHref(p.id)}
              title={p.title}
              description={p.description}
              footer="Ver detalle"
            />
          ))}
        </div>
      </Section>

      <Section tone="wash">
        <div className="flex flex-col justify-between gap-8 rounded-sm border border-border bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              {site.tagline}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              Si busca un interlocutor integral con foco en ejecución y continuidad,
              podemos avanzar en una conversación técnica y comercial acotada a su contexto.
            </p>
          </div>
          <ButtonLink href="/contacto">Solicitar reunión</ButtonLink>
        </div>
      </Section>
    </>
  );
}
