import { InsightTeaser } from "@/components/cards/InsightTeaser";
import { LinkCard } from "@/components/cards/LinkCard";
import { SectorCard } from "@/components/cards/SectorCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HomeHero } from "@/components/home/HomeHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

const diferenciales = [
  {
    t: "Capacidad operativa real",
    d: "Infraestructura, equipos y procesos probados en contextos exigentes. Lo que prometemos en mesa de trabajo se traduce en plan operativo y responsables claros.",
  },
  {
    t: "Integración con la operación del cliente",
    d: "Nos alineamos a turnos, normativas y flujos internos. El servicio convive con la producción, no la interrumpe.",
  },
  {
    t: "Calidad y trazabilidad",
    d: "Estándares de seguridad alimentaria, control de proveedores y mejora continua. La calidad es un sistema, no un discurso.",
  },
  {
    t: "Planificación y logística",
    d: "Anticipamos variaciones de demanda, contingencias y picos. La logística es parte del diseño del servicio desde el inicio.",
  },
  {
    t: "Cercanía institucional",
    d: "Interlocutores definidos, comunicación directa y respuesta comercial seria. Trabajamos en B2B con la sobriedad que eso implica.",
  },
  {
    t: "Trayectoria y cultura",
    d: "Más de cincuenta años en el mercado argentino. Una cultura de trabajo basada en orden, respeto por las personas y ejecución consistente.",
  },
] as const;

export function HomePage() {
  const [first, second, third, ...rest] = diferenciales;

  return (
    <>
      <HomeHero />

      {/* Institucional: statement + expansión */}
      <Section id="presentacion" wide className="border-b border-border/80">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
              Identidad
            </p>
            <h2 className="mt-4 max-w-[16ch] font-serif text-[2.125rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
              Una compañía que sostiene operaciones
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted sm:text-xl">
              Cookins integra alimentación, servicios de soporte y capacidad operativa para
              organizaciones que trabajan con ritmo sostenido, estándares altos y contextos
              que no admiten improvisación.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-10">
              <div>
                <p className="font-serif text-2xl font-medium text-foreground">+50</p>
                <p className="mt-1 text-[10px] font-semibold leading-snug tracking-[0.12em] text-muted-2 uppercase">
                  Años en el país
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-foreground">B2B</p>
                <p className="mt-1 text-[10px] font-semibold leading-snug tracking-[0.12em] text-muted-2 uppercase">
                  Operaciones complejas
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-foreground">360°</p>
                <p className="mt-1 text-[10px] font-semibold leading-snug tracking-[0.12em] text-muted-2 uppercase">
                  Alimentación + soporte
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="lg:pl-8 xl:pl-14">
              <div className="h-px w-12 bg-accent/80 lg:hidden" aria-hidden />
              <div className="space-y-6 border-l border-transparent text-base leading-relaxed text-muted lg:border-l lg:border-border lg:pl-10 lg:text-[1.0625rem] lg:leading-relaxed">
                <p>
                  Somos una compañía argentina con más de cinco décadas de trayectoria
                  acompañando empresas, industrias y operaciones en sitios remotos. Nuestro
                  foco está en la continuidad del servicio, la calidad percibida por las
                  personas y la coordinación precisa de equipos, procesos e infraestructura.
                </p>
                <p>
                  No reducimos el desafío a una vianda: trabajamos sobre la lógica del
                  funcionamiento diario de cada operación, con protocolos claros,
                  trazabilidad y una cultura de mejora continua orientada a resultados.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-10 lg:ml-10">
                <ButtonLink href="/compania" variant="secondary">
                  Conocer la compañía
                </ButtonLink>
                <p className="max-w-xs text-xs leading-relaxed text-muted-2">
                  Propósito, misión, cultura y capacidad operativa en un solo eje
                  institucional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Soluciones: corazón comercial */}
      <Section tone="wash" id="soluciones-integrales" wide className="relative">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(18,56,54,0.08),transparent)]"
          aria-hidden
        />
        <div className="relative">
          <SectionHeading
            eyebrow="Propuesta central"
            title="Soluciones integrales"
            subtitle="Diseñamos y gestionamos servicios que conviven con la operación: alimentación institucional, soporte en predio y esquemas a medida para entornos con exigencia logística y regulatoria."
            size="xl"
            className="max-w-4xl"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <LinkCard
              href="/soluciones#alimentacion"
              category="Eje · Operación diaria"
              title="Alimentación institucional"
              description="Menús planificados, producción y distribución con foco en seguridad alimentaria, consistencia y experiencia cotidiana en grandes dotaciones."
              footer="Ver alcance"
            />
            <LinkCard
              href="/soluciones#soporte"
              category="Eje · Predio"
              title="Servicios de soporte"
              description="Acompañamiento operativo en predio: equipos, procesos y estándares alineados con la dinámica de cada cliente y cada turno."
              footer="Ver alcance"
            />
            <LinkCard
              href="/soluciones#remotos"
              category="Eje · Continuidad"
              title="Operación en sitios remotos"
              description="Esquemas pensados para lejanía, cadena de suministro y continuidad: lo crítico no es solo llegar, es mantener el servicio en el tiempo."
              footer="Ver alcance"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/soluciones" variant="secondary">
              Ver las 5 soluciones
            </ButtonLink>
            <ButtonLink href="/soluciones#a-medida" variant="ghost">
              Soluciones a medida
            </ButtonLink>
            <ButtonLink href="/soluciones#bienestar" variant="ghost">
              Bienestar y experiencia cotidiana
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Sectores: canvas distinto, lectura contextual */}
      <section
        id="sectores"
        className="border-y border-border/70 bg-gradient-to-b from-sector-canvas/45 via-background to-background py-[var(--spacing-section)]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-sector-ink/70 uppercase">
              Contextos de trabajo
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
              Sectores y entornos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Trabajamos donde la operación es intensa y el margen de error es bajo: minería,
              industria, grandes empresas y asentamientos alejados de centros urbanos. Cada
              sector exige matices distintos en logística, seguridad y coordinación.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            <SectorCard
              code="01"
              href="/sectores#mineria"
              title="Minería"
              description="Servicios alineados a turnos, campamentos y estándares de seguridad e higiene propios del sector extractivo."
              contextLine="Faena · campamentos · HSE"
              accent="teal"
            />
            <SectorCard
              code="02"
              href="/sectores#industria"
              title="Industria"
              description="Integración con plantas y operaciones productivas: puntualidad, volumen, protocolos y coordinación con HSE y RR. HH."
              contextLine="Plantas · picos de demanda"
              accent="slate"
            />
            <SectorCard
              code="03"
              href="/sectores#empresas"
              title="Empresas"
              description="Soluciones para sedes corporativas y dotaciones numerosas, con foco en orden, calidad y experiencia del día a día."
              contextLine="Sedes · dotaciones urbanas"
              accent="stone"
            />
            <SectorCard
              code="04"
              href="/sectores#sitios-remotos"
              title="Sitios remotos"
              description="Logística y ejecución para contextos con restricciones de acceso, infraestructura variable y necesidad de autonomía operativa."
              contextLine="Lejanía · cadena crítica"
              accent="deep"
            />
          </div>
        </div>
      </section>

      {/* Diferenciales: bento / respaldo comercial */}
      <Section id="diferenciales" wide>
        <SectionHeading
          eyebrow="Respaldo"
          title="Por qué trabajar con Cookins"
          subtitle="Criterios concretos que guían cómo evaluamos un proyecto y cómo lo ejecutamos día a día. No es marketing: es forma de operar."
          className="mb-12 max-w-3xl"
        />
        <div className="grid gap-5 lg:grid-cols-12">
          <article className="flex flex-col justify-between rounded-md border border-white/10 bg-ink p-8 text-hero-fg shadow-[var(--shadow-card)] sm:p-10 lg:col-span-7 lg:min-h-[380px] xl:p-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-hero-fg/45 uppercase">
                Capacidad demostrable
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                {first.t}
              </h3>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-hero-fg-muted">
                {first.d}
              </p>
            </div>
            <p className="mt-10 border-t border-white/10 pt-8 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              +50 <span className="text-lg font-sans font-medium text-hero-fg/50">años</span>
            </p>
          </article>
          <div className="flex flex-col gap-5 lg:col-span-5">
            {[second, third].map((item) => (
              <article
                key={item.t}
                className="flex flex-1 flex-col rounded-md border border-border/90 bg-surface p-7 shadow-sm transition-shadow duration-300 hover:shadow-[var(--shadow-card)] sm:p-8"
              >
                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {item.d}
                </p>
              </article>
            ))}
          </div>
          <div className="grid gap-5 lg:col-span-12 lg:grid-cols-3">
            {rest.map((item) => (
              <article
                key={item.t}
                className="rounded-md border border-border/90 bg-surface/80 p-7 backdrop-blur-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
              >
                <h3 className="font-serif text-lg font-medium tracking-tight text-foreground">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Calidad: territorio de confianza */}
      <Section id="calidad" wide className="border-t border-border/80 bg-wash/50">
        <div className="grid gap-0 overflow-hidden rounded-md border border-border bg-surface shadow-[var(--shadow-card)] lg:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-12 xl:p-14">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
              Método y estándares
            </p>
            <h2 className="mt-3 max-w-md font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Calidad y operación
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Detrás de cada servicio hay procesos auditables, capacitación y estándares
              que sostienen la ejecución en el tiempo. Es el territorio donde se construye la
              confianza B2B.
            </p>
            <ul className="mt-10 space-y-4 text-[15px] leading-relaxed text-muted">
              {[
                "Seguridad alimentaria y controles en cadena.",
                "Protocolos de operación y respuesta ante contingencias.",
                "Logística, infraestructura y proveedores bajo criterios definidos.",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink href="/calidad-operacion" variant="secondary" size="lg">
                Ver calidad y operación
              </ButtonLink>
            </div>
          </div>
          <div className="relative flex flex-col justify-center border-t border-border bg-ink p-8 text-hero-fg sm:p-10 lg:border-t-0 lg:border-l lg:border-border lg:p-12 xl:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay hero-noise"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-hero-fg/45 uppercase">
                Principio operativo
              </p>
              <p className="mt-6 font-serif text-xl font-medium leading-snug sm:text-2xl">
                “Lo hacemos a través de experiencia, planificación, logística, infraestructura,
                procesos y equipos comprometidos.”
              </p>
              <p className="mt-8 text-sm leading-relaxed text-hero-fg-muted sm:text-base">
                Esa combinación es lo que permite sostener el bienestar cotidiano de las
                personas sin resignar exigencia operativa: cultura de calidad, orden en la
                ejecución y foco en la continuidad del servicio.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Impacto: posicionamiento estratégico */}
      <Section tone="default" wide id="impacto" className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-24 w-px bg-gradient-to-b from-accent to-transparent lg:block"
          aria-hidden
        />
        <div className="lg:pl-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                Sustentabilidad e impacto
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Valor compartido como decisión de gestión
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Trabajamos sobre proveedores, comunidad, educación y prácticas responsables
                como parte de la forma en que operamos. El impacto no es un anexo: se
                conecta con eficiencia, reducción de riesgos y reputación institucional.
              </p>
              <div className="mt-8">
                <ButtonLink href="/impacto" variant="secondary" size="lg">
                  Ver impacto
                </ButtonLink>
              </div>
            </div>
            <ul className="grid gap-4 lg:col-span-7">
              {[
                {
                  t: "Sustentabilidad",
                  d: "Eficiencia en el uso de recursos y criterios de compra responsable alineados a la operación.",
                },
                {
                  t: "Proveedores y cadena de valor",
                  d: "Desarrollo de proveedores locales cuando el proyecto lo permite, sin bajar el estándar de calidad.",
                },
                {
                  t: "Comunidad y educación",
                  d: "Iniciativas acotadas y medibles, con gobierno claro y foco en resultados verificables.",
                },
                {
                  t: "Compromisos institucionales",
                  d: "Marco de buenas prácticas y Pacto Global (contenidos en preparación editorial).",
                },
              ].map((row) => (
                <li
                  key={row.t}
                  className="rounded-md border border-border/90 bg-surface px-6 py-5 shadow-sm sm:flex sm:items-start sm:justify-between sm:gap-8 sm:px-7 sm:py-6"
                >
                  <p className="text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
                    {row.t}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:mt-0 sm:text-[15px]">
                    {row.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Insights: editorial */}
      <Section id="insights" wide className="border-t border-border/80">
        <div className="flex flex-col justify-between gap-8 pb-12 lg:flex-row lg:items-end lg:pb-14">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
              Centro de contenidos
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Insights
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Documentos de interés para compras, operaciones, HSE y management: criterios,
              tendencias y buenas prácticas en servicios integrales. Pensado para lectura
              ejecutiva.
            </p>
          </div>
          <ButtonLink href="/insights" variant="secondary">
            Ver archivo completo
          </ButtonLink>
        </div>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <InsightTeaser
              href="/insights"
              category="Operación"
              dateLabel="Próxima publicación"
              title="Cómo leer un pliego de servicios de alimentación sin perder el foco operativo"
              excerpt="Checklist para evaluar propuestas en función de logística, continuidad, seguridad alimentaria y gobierno del servicio. Una guía para compras que necesitan comparar “manzanas con manzanas”."
              variant="featured"
            />
          </div>
          <div className="flex flex-col gap-10 lg:col-span-5 lg:gap-0">
            <InsightTeaser
              href="/insights"
              category="Calidad"
              dateLabel="Próxima publicación"
              title="Indicadores que importan más allá del costo por cubierto"
              excerpt="Qué mirar cuando el servicio convive con turnos críticos y entornos regulados."
              variant="compact"
            />
            <InsightTeaser
              href="/insights"
              category="Logística"
              dateLabel="Próxima publicación"
              title="Sitios remotos: planificación frente a la imprevisibilidad"
              excerpt="Cadena de suministro, stock de seguridad y roles claros entre cliente y proveedor."
              variant="compact"
            />
          </div>
        </div>
      </Section>

      {/* Cierre comercial */}
      <Section
        tone="dark"
        id="cierre"
        wide
        className="relative overflow-hidden border-t border-white/10"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(26,79,74,0.35),transparent)]"
          aria-hidden
        />
        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-hero-fg/45 uppercase">
              Próximo paso
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-hero-fg sm:text-4xl lg:text-[2.65rem]">
              ¿Necesita evaluar un esquema integral para su operación?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-hero-fg-muted sm:text-lg">
              Podemos analizar su contexto, volumen, ubicaciones y estándares para proponer
              un alcance realista, etapas de implementación e interlocución comercial clara
              desde el primer contacto.
            </p>
          </div>
          <aside className="rounded-md border border-white/12 bg-white/[0.04] p-8 backdrop-blur-sm lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-hero-fg/50 uppercase">
              Contacto directo
            </p>
            <p className="mt-4 font-serif text-lg text-hero-fg">{site.contact.email}</p>
            <p className="mt-1 text-sm text-hero-fg-muted">{site.contact.phone}</p>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink
                href="/contacto"
                size="lg"
                className="w-full border border-white/15 bg-hero-fg text-ink shadow-none hover:bg-white sm:w-auto"
              >
                Ir al formulario de contacto
              </ButtonLink>
              <ButtonLink
                href="/soluciones"
                variant="secondary"
                size="lg"
                className="w-full border-white/25 bg-transparent text-hero-fg hover:bg-white/10 sm:w-auto"
              >
                Explorar soluciones
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
