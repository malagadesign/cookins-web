import { ButtonLink } from "@/components/ui/ButtonLink";
import { LinkCard } from "@/components/cards/LinkCard";
import { ContentBlock } from "@/components/modules/ContentBlock";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { nosotrosHref } from "@/lib/nosotros-pages";
import { rseHref, rsePages } from "@/lib/rse-pages";

export const metadata = pageMetadata({
  title: "RSE",
  description:
    "Responsabilidad social empresaria: sustentabilidad, formación y desarrollo. Cookins y su compromiso con el entorno.",
  path: "/rse",
});

export default function RsePage() {
  return (
    <>
      <PageHero
        eyebrow="Compromiso"
        title="RSE"
        lead="La responsabilidad social se integra a la forma en que operamos: eficiencia, riesgo reducido y relación responsable con proveedores, personas y comunidades."
      >
        <ButtonLink href="/contacto">Hablar con comercial</ButtonLink>
        <ButtonLink href={nosotrosHref("cultura-cookins")} variant="secondary">
          Cultura Cookins
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          title="Ejes de compromiso"
          subtitle="Sustentabilidad y formación como decisiones de gestión conectadas con la continuidad operativa."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {rsePages.map((p) => (
            <LinkCard
              key={p.id}
              href={rseHref(p.id)}
              title={p.title}
              description={p.description}
              footer="Ver detalle"
            />
          ))}
        </div>
      </Section>

      <Section tone="wash">
        <ContentBlock title="Valor compartido">
          <p>
            <strong className="text-foreground">Definición.</strong> Diseñar acciones que
            generen mejoras para cliente, personas usuarias y entorno sin perder foco en la
            operación central del servicio.
          </p>
          <p>
            <strong className="text-foreground">Mirada de largo plazo.</strong> El valor
            compartido se evalúa por continuidad y resultados, no por acciones aisladas.
          </p>
        </ContentBlock>

        <ContentBlock title="Compromisos institucionales">
          <p>
            <strong className="text-foreground">Marco institucional.</strong> Cookins avanza en
            alineamiento con buenas prácticas y criterios de reporte coherentes con marcos
            reconocidos internacionalmente, incluyendo avances en Pacto Global.
          </p>
          <p>
            <strong className="text-foreground">Qué expresa.</strong> Una mirada de largo plazo
            sobre transparencia, mejora de gestión y compromiso con estándares de cumplimiento.
          </p>
        </ContentBlock>
      </Section>
    </>
  );
}
