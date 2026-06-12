import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfrastructureMetrics } from "@/components/nosotros/InfrastructureMetrics";
import { Section } from "@/components/sections/Section";

const capabilities = [
  {
    title: "Plantas de producción centralizada",
    text: "Disponemos de 2 plantas frigoríficas independientes, planta elaboradora, planta de feteados, planta panificadora, planta de helados, planta de pastas y planta de pizzas.",
  },
  {
    title: "Almacenamiento de alta complejidad",
    text: "Más de 40.000 m² distribuidos en 3 centros de distribución, 5 depósitos de transferencia y 2 plantas avanzadas de congelados y refrigerados.",
  },
  {
    title: "Flota vehicular monitoreada",
    text: "Unidades equipadas con sistemas de posicionamiento GPS y control satelital de frío constante: 10 semirremolques térmicos Scania, 14 camiones de frío dedicados y 40 camionetas Toyota Hilux 4×4 con caja térmica de intervención en terrenos complejos.",
  },
] as const;

export function InfraestructuraContent() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            La estructura que respalda cada servicio
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted sm:text-lg">
            Contamos con una infraestructura diseñada para responder a las necesidades más
            complejas del país.
          </p>
        </div>

        <InfrastructureMetrics />

        <div className="prose-cookins mt-14 max-w-3xl">
          <p>
            Nos permiten garantizar eficiencia, trazabilidad y continuidad operativa en cada
            proyecto.
          </p>
          <p>
            Operamos con un blindaje logístico autónomo sin precedentes en el mercado
            argentino para garantizar calidad y abastecimiento continuo.
          </p>
        </div>
      </Section>

      <Section tone="wash">
        <ul className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {capabilities.map((item, index) => (
            <li
              key={item.title}
              className="flex flex-col rounded-md border border-border bg-surface p-7 shadow-sm sm:p-8"
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <ButtonLink href="/calidad" size="lg">
            Conocé la Calidad Cookins
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
