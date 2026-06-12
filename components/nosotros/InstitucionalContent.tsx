import { ButtonLink } from "@/components/ui/ButtonLink";
import { TrustMetrics } from "@/components/nosotros/TrustMetrics";
import { Section } from "@/components/sections/Section";
import { nosotrosHref } from "@/lib/nosotros-pages";

export function InstitucionalContent() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
          Somos una empresa 100% argentina, respaldada por una sólida trayectoria de más de
          medio siglo impulsando el desarrollo de nuestro país.
        </h2>
        <div className="prose-cookins mt-8">
          <p>
            Nuestra historia es sinónimo de permanencia, evolución y un conocimiento profundo
            del territorio y la industria nacional.
          </p>
          <p>
            Apostamos al crecimiento federal, generando empleo genuino y cadena de valor en
            cada provincia donde operamos.
          </p>
        </div>
      </div>

      <TrustMetrics />

      <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-8">
        <article className="rounded-md border border-border bg-surface p-7 shadow-sm sm:p-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Misión
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Nuestra misión es promover el bienestar general de las personas mediante servicios
            seguros, sustentables y de máxima calidad que aporten valor real a las empresas.
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-7 shadow-sm sm:p-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Visión
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Somos líderes en cada una de las áreas de servicios que brindamos, con el
            compromiso constante de superar las expectativas de nuestros clientes. Asumimos la
            responsabilidad de consolidarnos como el referente absoluto para la industria, las
            empresas y nuestro propio equipo.
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-7 shadow-sm sm:p-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Valores en acción
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Compromiso, respeto, confiabilidad y trabajo en equipo: la base humana sobre la que
            construimos la continuidad operativa de las grandes industrias.
          </p>
        </article>
      </div>

      <div className="mt-12">
        <ButtonLink href={nosotrosHref("cultura-cookins")} variant="secondary" size="lg">
          Conocé la cultura Cookins
        </ButtonLink>
      </div>
    </Section>
  );
}
