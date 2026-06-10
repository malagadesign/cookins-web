import { ButtonLink } from "@/components/ui/ButtonLink";
import { LinkCard } from "@/components/cards/LinkCard";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Soluciones",
  description:
    "Alimentación institucional, servicios de soporte, operación en sitios remotos, soluciones a medida y bienestar cotidiano. Cookins, Argentina.",
  path: "/soluciones",
});

const pillars = [
  {
    id: "alimentacion",
    eyebrow: "Eje principal",
    title: "Alimentación institucional",
    definition:
      "Servicio integral de alimentación para dotaciones numerosas, con menú planificado, producción controlada y distribución en tiempos compatibles con la operación.",
    resolves:
      "Resuelve la tensión entre volumen, variedad, seguridad alimentaria y ventanas cortas de servicio en turnos críticos.",
    value:
      "Aporta continuidad productiva, experiencia consistente para las personas y menor desvío operativo por paradas o demoras en comedor.",
    implementation:
      "Se implementa con diagnóstico de perfil de dotación, diseño de menú, esquema de producción (en planta o in situ), control de servicio y revisión periódica con el cliente.",
    differentiator:
      "Combinamos criterio nutricional, logística y gobierno de servicio; no aislamos la cocina de la operación del predio.",
    relevance: "Mayor relevancia en minería, industria y grandes sedes corporativas.",
    qualityLink:
      "Se sostiene con estándares de inocuidad, trazabilidad y checklists operativos coordinados desde Calidad y operación.",
    contextLinks: [
      { href: "/sectores#mineria", label: "Ver aplicación en Minería" },
      { href: "/calidad-operacion#calidad-seguridad", label: "Ver seguridad alimentaria" },
      { href: "/insights", label: "Ver criterios de pliegos en Insights" },
    ],
  },
  {
    id: "soporte",
    eyebrow: "Operación en predio",
    title: "Servicios de soporte",
    definition:
      "Servicios de soporte que acompañan la vida cotidiana en predio: orden, higiene, atención y coordinación con áreas operativas del cliente.",
    resolves:
      "Resuelve fricciones de gestión diaria en instalaciones de alta circulación donde múltiples contratistas deben funcionar con reglas comunes.",
    value:
      "Aporta previsibilidad, mejor experiencia de usuarios internos y menor carga de coordinación para operaciones, RR. HH. y compras.",
    implementation:
      "Se articula con matriz de responsabilidades, turnos definidos, supervisión de campo y reuniones de seguimiento orientadas a servicio.",
    differentiator:
      "No tratamos el soporte como tarea aislada: lo integramos a la dinámica real del predio y sus picos de demanda.",
    relevance: "Especialmente relevante en industria y empresas con múltiples turnos o edificios.",
    qualityLink:
      "Se apoya en procesos y estándares compartidos, protocolos de atención y auditorías periódicas de cumplimiento.",
    contextLinks: [
      { href: "/sectores#industria", label: "Ver aplicación en Industria" },
      { href: "/calidad-operacion#procesos", label: "Ver procesos y estándares" },
      { href: "/contacto", label: "Coordinar evaluación de alcance" },
    ],
  },
  {
    id: "remotos",
    eyebrow: "Logística y continuidad",
    title: "Operación en sitios remotos",
    definition:
      "Modelo de servicio para operaciones alejadas de centros urbanos, con restricciones de acceso, cadena de abastecimiento sensible y demanda variable.",
    resolves:
      "Resuelve riesgo de quiebre de suministro, descoordinación logística y pérdida de continuidad en contextos de difícil acceso.",
    value:
      "Aporta robustez operativa, respuesta ante contingencias y continuidad de servicios esenciales en ubicaciones críticas.",
    implementation:
      "Se implementa con planificación de abastecimiento, stock de seguridad, rutas alternativas, definición de roles de comando y protocolos de contingencia.",
    differentiator:
      "Nuestra ventaja está en combinar servicio y logística en una misma ecuación de gestión, no en tratarlo como dos contratos separados.",
    relevance: "Alta relevancia en minería, energía, obras y campamentos temporales.",
    qualityLink:
      "Depende de logística e infraestructura, protocolos claros y monitoreo periódico de puntos críticos de servicio.",
    contextLinks: [
      { href: "/sectores#sitios-remotos", label: "Ver contexto de Sitios remotos" },
      { href: "/calidad-operacion#logistica", label: "Ver logística e infraestructura" },
      { href: "/insights", label: "Leer guía sobre operación remota" },
    ],
  },
  {
    id: "a-medida",
    eyebrow: "Ingeniería de servicio",
    title: "Soluciones a medida",
    definition:
      "Diseño de esquemas ad hoc para contextos donde un servicio estándar no alcanza por complejidad operativa, tiempo o infraestructura.",
    resolves:
      "Resuelve escenarios con restricciones cruzadas de presupuesto, plazos, ubicación, normativa y variabilidad de dotación.",
    value:
      "Aporta flexibilidad con control: alcance viable por fases, menor riesgo de implementación y mejor alineación con objetivos de negocio.",
    implementation:
      "Trabajamos con diagnóstico inicial, definición de niveles de servicio, roadmap por etapas y gobierno conjunto cliente-Cookins.",
    differentiator:
      "Evitamos sobredimensionar la propuesta: priorizamos diseño realista, roles claros y escalamiento progresivo.",
    relevance: "Especialmente útil en proyectos nuevos, transiciones de proveedor y operaciones multisitio.",
    qualityLink:
      "Cada fase se valida con indicadores operativos y criterios de calidad para evitar desvíos de alcance o estándar.",
    contextLinks: [
      { href: "/sectores", label: "Ver adaptación por sector" },
      { href: "/calidad-operacion#protocolos", label: "Ver protocolos de operación" },
      { href: "/contacto", label: "Solicitar diagnóstico inicial" },
    ],
  },
  {
    id: "bienestar",
    eyebrow: "Personas",
    title: "Bienestar y experiencia cotidiana",
    definition:
      "Bienestar entendido como calidad cotidiana del servicio: orden, higiene, trato profesional, variedad razonable y ambientes cuidados.",
    resolves:
      "Resuelve desgaste operativo y percepción de desatención en dotaciones que sostienen ritmos exigentes durante largos períodos.",
    value:
      "Aporta mejor clima interno, mayor adhesión a rutinas de servicio y una señal concreta de cuidado por parte de la organización.",
    implementation:
      "Se articula con diseño de experiencia de comedor, lineamientos de atención, control de satisfacción y ajustes sobre feedback operativo.",
    differentiator:
      "No lo abordamos como narrativa emocional: lo tratamos como resultado medible de procesos bien ejecutados.",
    relevance: "Transversal a minería, industria, empresas y sitios remotos.",
    qualityLink:
      "Está directamente ligado a consistencia operativa, capacitación de equipos y control de desvíos en terreno.",
    contextLinks: [
      { href: "/sectores#empresas", label: "Ver aplicación en Empresas" },
      { href: "/calidad-operacion#capacitacion", label: "Ver capacitación y mejora continua" },
      { href: "/impacto#comunidad", label: "Ver dimensión humana e impacto" },
    ],
  },
] as const;

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta"
        title="Soluciones integrales"
        lead="Diseñamos y gestionamos servicios que sostienen la vida cotidiana y la continuidad operativa de grandes organizaciones. Integramos alimentación, soporte e infraestructura de servicio para que cada operación funcione con eficiencia, seguridad y altos estándares de calidad."
      >
        <ButtonLink href="/contacto">Hablar con comercial</ButtonLink>
        <ButtonLink href="/calidad-operacion" variant="secondary">
          Calidad y operación
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          title="Mapa de soluciones"
          subtitle="Cada eje está diseñado para resolver un problema operativo concreto y puede escalar luego a subpáginas técnicas. La estructura por anclas mantiene claridad hoy y prepara profundidad editorial futura."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <LinkCard
              key={p.id}
              href={`#${p.id}`}
              title={p.title}
              description={p.definition}
              footer="Ver detalle"
            />
          ))}
        </div>
      </Section>

      <Section tone="wash">
        {pillars.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="scroll-mt-28 border-b border-border py-16 last:border-b-0 last:pb-0"
          >
            <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {p.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-foreground">
              {p.title}
            </h2>
            <div className="prose-cookins mt-6 max-w-3xl">
              <p>{p.definition}</p>
              <p>
                <strong className="text-foreground">Qué resuelve.</strong> {p.resolves}
              </p>
              <p>
                <strong className="text-foreground">Valor para la operación.</strong> {p.value}
              </p>
              <p>
                <strong className="text-foreground">Cómo se implementa.</strong> {p.implementation}
              </p>
              <p>
                <strong className="text-foreground">Diferencial.</strong> {p.differentiator}
              </p>
              <p>
                <strong className="text-foreground">Dónde aplica más.</strong> {p.relevance}
              </p>
              <p>
                <strong className="text-foreground">Vínculo con calidad y operación.</strong>{" "}
                {p.qualityLink}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.contextLinks.map((link) => (
                <ButtonLink key={link.href + link.label} href={link.href} variant="secondary">
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </article>
        ))}
      </Section>

      <Section>
        <div className="rounded-sm border border-border bg-surface p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              ¿Necesita dimensionar un esquema para varias ubicaciones?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Podemos recorrer juntos volumetrías, perfiles de turno, estándares de calidad
              y restricciones logísticas para proponer un alcance por fases y un modelo de
              gobierno del servicio claro desde el inicio.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <ButtonLink href="/contacto">Solicitar propuesta</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
