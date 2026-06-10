import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

const stats = [
  { value: "+50", label: "Años de trayectoria" },
  { value: "Integral", label: "Alimentación y soporte" },
  { value: "Argentina", label: "Operación y logística" },
] as const;

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10"
      aria-labelledby="home-hero-heading"
    >
      <div className="hero-backdrop absolute inset-0" aria-hidden />
      <div className="hero-orbit absolute inset-0" aria-hidden />
      <div className="hero-noise absolute inset-0 mix-blend-overlay" aria-hidden />

      <div className="relative mx-auto grid min-h-[min(88vh,920px)] max-w-7xl items-stretch px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="flex flex-col justify-center py-16 sm:py-20 lg:col-span-7 lg:py-24 xl:py-28">
          <p
            id="home-hero-eyebrow"
            className="max-w-prose text-[11px] font-semibold tracking-[0.22em] text-hero-fg/55 uppercase sm:text-xs"
          >
            {site.motherIdea}
          </p>
          <h1
            id="home-hero-heading"
            className="mt-5 max-w-[22ch] font-serif text-[2.35rem] font-medium leading-[1.06] tracking-tight text-hero-fg sm:text-5xl lg:text-[3.35rem] xl:text-[3.55rem]"
          >
            {site.tagline}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-hero-fg-muted sm:text-lg lg:text-[1.0625rem] lg:leading-relaxed">
            {site.valueProposition}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink
              href="/contacto"
              size="lg"
              className="border border-white/10 bg-hero-fg text-ink shadow-none hover:bg-white"
            >
              Contacto comercial
            </ButtonLink>
            <ButtonLink
              href="/soluciones"
              variant="secondary"
              size="lg"
              className="border-white/20 bg-transparent text-hero-fg hover:border-white/35 hover:bg-white/5"
            >
              Ver soluciones
            </ButtonLink>
          </div>
          <p className="mt-3 text-xs text-hero-fg/45">
            Atención comercial B2B · respuesta orientada a operación
          </p>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-10 sm:max-w-xl sm:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-2xl font-medium tracking-tight text-hero-fg sm:text-3xl">
                  {s.value}
                </dd>
                <p className="mt-1.5 text-[10px] font-medium leading-snug tracking-[0.12em] text-hero-fg/50 uppercase sm:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="absolute inset-y-10 right-0 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
          <div className="flex h-full flex-col justify-center pl-6 xl:pl-10">
            <div className="relative rounded-md border border-white/10 bg-white/[0.03] p-8 backdrop-blur-[2px]">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-hero-fg/45 uppercase">
                Capacidad y método
              </p>
              <p className="mt-5 font-serif text-xl font-medium leading-snug text-hero-fg">
                Operación precisa, cultura de calidad y una forma concreta de cuidar a las
                personas.
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-hero-fg-muted">
                <li className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-hero-fg/35" />
                  Planificación, logística e infraestructura alineadas al servicio.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-hero-fg/35" />
                  Procesos auditables y equipos con roles claros en predio.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-hero-fg/35" />
                  Continuidad en contextos exigentes: minería, industria y remotos.
                </li>
              </ul>
              <div
                className="pointer-events-none absolute -right-16 -bottom-12 h-48 w-48 rounded-full bg-accent/25 blur-3xl"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
