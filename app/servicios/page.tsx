import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { pageMetadata } from "@/lib/metadata";
import { services, serviceHref } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Servicios",
  description:
    "Soluciones integrales para operaciones de alta exigencia: alimentación institucional, sitios remotos, facility services, traslado de personal y partner estratégico de inversión.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones integrales para operaciones de alta exigencia"
        lead="Diseñamos y gestionamos servicios que garantizan bienestar, eficiencia y continuidad operativa en cada etapa del proyecto."
      >
        <ButtonLink href="/contacto">Hablar con comercial</ButtonLink>
        <ButtonLink href="/calidad" variant="secondary">
          Calidad
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="divide-y divide-border">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="grid gap-8 py-14 first:pt-0 last:pb-0 lg:grid-cols-12 lg:items-start lg:gap-12 lg:py-16"
            >
              <div className="lg:col-span-4">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                  {String(index + 1).padStart(2, "0")} · {service.category}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {service.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {service.teaser ?? service.description}
                </p>
                {service.id === "alimentacion-institucional" ? (
                  <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                    Con el respaldo de nuestro músculo logístico, brindamos más de 395.000
                    servicios mensuales, alimentando el cuerpo y el alma para sostener el alto
                    rendimiento de las organizaciones que confían en nosotros.
                  </p>
                ) : null}
                {service.id === "sitios-remotos-infraestructura" ? (
                  <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                    Nos especializamos en el diseño y ejecución de operaciones de alta complejidad
                    para los sectores más exigentes del país, garantizando la continuidad del
                    negocio con presencia federal activa en minería, grandes obras de
                    construcción, gas y petróleo.
                  </p>
                ) : null}
                <div className="mt-8">
                  <ButtonLink href={serviceHref(service.id)} variant="secondary">
                    + Info
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="wash">
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
