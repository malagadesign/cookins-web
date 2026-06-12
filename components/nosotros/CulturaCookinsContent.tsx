import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/sections/Section";
import { serviceHref } from "@/lib/services";

const pillars = [
  {
    title: "Liderazgo y equidad",
    text: "Vivimos nuestros valores promoviendo una organización con propósito real, donde el 50% de nuestros roles líderes son ocupados por mujeres, impulsando un crecimiento profesional y personal medible en cada región.",
  },
  {
    title: "Vocación en terreno",
    text: "Allí donde los desafíos son constantes y el clima no da tregua, nuestro equipo trabaja con una misión clara: asegurar que cada detalle funcione a la perfección para cuidar y contener a quienes mueven el país.",
  },
  {
    title: "Sentido de hogar",
    text: "En contextos exigentes y sitios remotos, alimentar no es solo cocinar; es estar presentes, es acompañar y lograr que cada comensal se sienta como en casa gracias a la calidez de nuestro equipo.",
  },
] as const;

export function CulturaCookinsContent() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
          Nuestra gente es nuestra mayor fortaleza
        </h2>
        <p className="mt-8 text-base leading-relaxed text-muted sm:text-lg">
          La excelencia de nuestro servicio no es solo el resultado de un proceso técnico o
          logístico; es el reflejo del compromiso, la calidez y el orgullo de cada una de las
          personas que forman Cookins.
        </p>
      </div>

      <ul className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.title}
            className="flex flex-col rounded-md border border-border bg-surface p-7 shadow-sm sm:p-8"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-foreground">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
              {pillar.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <ButtonLink href={serviceHref("sitios-remotos-infraestructura")} size="lg">
          Conocé el servicio de sitios remotos
        </ButtonLink>
      </div>
    </Section>
  );
}
