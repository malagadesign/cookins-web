import { SolutionsCarousel } from "@/components/home/SolutionsCarousel";
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
                <ButtonLink href="/nosotros" variant="secondary">
                  Conocer nosotros
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

      {/* Servicios: corazón comercial */}
      <Section tone="wash" id="servicios" wide className="relative">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(18,56,54,0.08),transparent)]"
          aria-hidden
        />
        <div className="relative">
          <SectionHeading
            eyebrow="Propuesta central"
            title="Servicios"
            subtitle="Alimentación institucional, sitios remotos e infraestructura, facility services, traslado de personal y partner estratégico de inversión."
            size="xl"
            className="max-w-4xl"
          />
          <SolutionsCarousel />
        </div>
      </Section>

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
              Calidad
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
              <ButtonLink href="/calidad" variant="secondary" size="lg">
                Ver calidad
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

      {/* RSE: posicionamiento estratégico */}
      <Section tone="default" wide id="rse" className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-24 w-px bg-gradient-to-b from-accent to-transparent lg:block"
          aria-hidden
        />
        <div className="lg:pl-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                Responsabilidad social
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Sustentabilidad y formación
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Trabajamos sobre sustentabilidad, desarrollo de personas y relación
                responsable con proveedores y comunidades como parte de la forma en que
                operamos.
              </p>
              <div className="mt-8">
                <ButtonLink href="/rse" variant="secondary" size="lg">
                  Ver RSE
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
                  t: "Formación y desarrollo",
                  d: "Capacitación de equipos, iniciativas educativas y desarrollo de personas en la operación.",
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
                href="/servicios"
                variant="secondary"
                size="lg"
                className="w-full border-white/25 bg-transparent text-hero-fg hover:bg-white/10 sm:w-auto"
              >
                Explorar servicios
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
