import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Placeholder hasta imagen institucional definitiva */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=80";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10"
      aria-labelledby="home-hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] saturate-[0.85]"
        />
        <div className="hero-backdrop absolute inset-0" />
        <div className="hero-orbit absolute inset-0 opacity-60" />
        <div className="hero-noise absolute inset-0 mix-blend-overlay" />
      </div>

      <div className="relative mx-auto flex min-h-[min(88vh,920px)] max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div className="hero-copy-scrim max-w-3xl rounded-md border border-white/10 px-6 py-12 backdrop-blur-[2px] sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <h1
            id="home-hero-heading"
            className="hero-text-shadow max-w-[20ch] font-serif text-[2.35rem] font-medium leading-[1.06] tracking-tight text-hero-fg sm:text-5xl lg:text-[3.35rem] xl:text-[3.55rem]"
          >
            Sostenemos el pulso productivo de la Argentina
          </h1>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-hero-fg sm:text-lg lg:text-[1.0625rem]">
            <p>
              Somos la empresa líder en servicios integrales de alimentación, facilities y
              soporte logístico para empresas y grandes industrias.
            </p>
            <p>
              Desde hace más de 50 años acompañamos a quienes sostienen las operaciones más
              exigentes del país, garantizando bienestar, continuidad operativa y soluciones
              integrales en cada proyecto.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink
              href="/servicios"
              size="lg"
              variant="secondary"
              className="border-transparent bg-hero-fg text-ink shadow-md hover:border-transparent hover:bg-white hover:text-ink"
            >
              Conocé nuestros servicios
            </ButtonLink>
            <ButtonLink
              href="/contacto"
              size="lg"
              className="border border-white/35 bg-white/10 text-hero-fg backdrop-blur-sm hover:border-white/50 hover:bg-white/15"
            >
              Contactanos
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
