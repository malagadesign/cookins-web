import { Section } from "@/components/sections/Section";
import { serviceHref } from "@/lib/services";

export function SustentabilidadContent() {
  return (
    <Section>
      <div className="prose-cookins max-w-3xl">
        <p>
          <strong className="text-foreground">Definición.</strong> Sustentabilidad aplicada a
          operación diaria: eficiencia de recursos, reducción de mermas y decisiones de compra
          con criterio técnico y trazable.
        </p>
        <p>
          <strong className="text-foreground">Relevancia para Cookins.</strong> Mejora
          desempeño operativo y reduce exposición a costos y desvíos, especialmente en contratos
          de largo plazo.
        </p>
        <p>
          <strong className="text-foreground">Conexión con la operación.</strong> Se integra a
          planificación, producción y logística de{" "}
          <a
            className="underline-offset-4 hover:underline"
            href={serviceHref("alimentacion-institucional")}
          >
            alimentación institucional
          </a>{" "}
          y{" "}
          <a
            className="underline-offset-4 hover:underline"
            href={serviceHref("sitios-remotos-infraestructura")}
          >
            sitios remotos e infraestructura
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
