import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { InsightTeaser } from "@/components/cards/InsightTeaser";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Blog y novedades de Cookins: operación, calidad, compras y contexto regulatorio para servicios integrales de alimentación y soporte.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contenidos"
        title="Insights"
        lead="Centro editorial para compras, operaciones, HSE y management. Publicamos criterios aplicables a decisiones reales de servicio en contextos exigentes."
      >
        <ButtonLink href="/soluciones">Explorar soluciones</ButtonLink>
        <ButtonLink href="/calidad-operacion" variant="secondary">
          Ver calidad y operación
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          title="Artículos semilla"
          subtitle="Primera capa editorial para construir autoridad temática en servicios integrales de alimentación y soporte. Cada tema conecta con páginas madre del sitio."
        />
        <div className="grid gap-12 lg:grid-cols-3">
          <InsightTeaser
            href="/insights"
            category="Compras y contratos"
            dateLabel="Artículo semilla 01"
            title="Qué debería contemplar un pliego de servicios de alimentación institucional"
            excerpt="Guía para estructurar alcance, niveles de servicio, responsabilidades, indicadores y criterios de evaluación comparables. Relacionado con Soluciones y Calidad."
          />
          <InsightTeaser
            href="/insights"
            category="Gestión operativa"
            dateLabel="Artículo semilla 02"
            title="Indicadores clave para evaluar un servicio integral en operación"
            excerpt="KPIs de continuidad, inocuidad, tiempos de respuesta, cumplimiento por turno y percepción de servicio para decisiones de gestión."
          />
          <InsightTeaser
            href="/insights"
            category="Territorio y logística"
            dateLabel="Artículo semilla 03"
            title="Qué exige operar servicios integrales en sitios remotos"
            excerpt="Planificación logística, stock de seguridad, protocolos de contingencia y gobierno de servicio en contextos de acceso restringido."
          />
          <InsightTeaser
            href="/insights"
            category="Calidad aplicada"
            dateLabel="Artículo semilla 04"
            title="Cómo se articulan calidad, logística y bienestar en entornos exigentes"
            excerpt="Relación entre procesos, abastecimiento y experiencia cotidiana para sostener continuidad sin degradar estándares."
          />
          <InsightTeaser
            href="/insights"
            category="Impacto y cumplimiento"
            dateLabel="Artículo semilla 05"
            title="Sustentabilidad aplicada a servicios de alimentación y soporte"
            excerpt="Cómo traducir impacto en decisiones operativas: mermas, compras, proveedores y trazabilidad con foco B2B."
          />
        </div>
      </Section>

      <Section tone="wash">
        <SectionHeading
          title="Escalabilidad editorial y enlaces internos"
          subtitle="La sección está preparada para evolucionar a rutas dinámicas `/insights/[slug]` y conectar cada artículo con páginas madre para fortalecer SEO, GEO y conversión contextual."
        />
        <ul className="max-w-4xl space-y-3 text-sm text-muted">
          <li>
            Estructura prevista: `app/insights/[slug]/page.tsx` para artículos individuales y
            categorías temáticas estables.
          </li>
          <li>
            Cada artículo debería enlazar al menos a 2 páginas madre (p. ej. Soluciones +
            Calidad) y a Contacto cuando haya intención comercial.
          </li>
          <li>
            Desde páginas madre, usar enlaces contextuales a Insights para ampliar criterios
            técnicos sin sobrecargar páginas institucionales.
          </li>
          <li>
            Incorporar schema `Article`, autor técnico y fecha de actualización para mejorar
            legibilidad en buscadores y asistentes de IA.
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/soluciones" variant="secondary">
            Ir a Soluciones
          </ButtonLink>
          <ButtonLink href="/sectores" variant="secondary">
            Ir a Sectores
          </ButtonLink>
          <ButtonLink href="/impacto" variant="secondary">
            Ir a Impacto
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
