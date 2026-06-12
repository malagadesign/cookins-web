import { ServiceEditorialDetail } from "@/components/servicios/ServiceEditorialDetail";
import { getServiceBySlug } from "@/lib/services";

export function AlimentacionInstitucionalContent() {
  const service = getServiceBySlug("alimentacion-institucional");
  if (!service) return null;

  return (
    <ServiceEditorialDetail
      service={service}
      intro={[
        "Transformamos el concepto tradicional de alimentación hacia una propuesta superadora que prioriza los más altos estándares de excelencia, opciones saludables, equilibradas y responsables con el medioambiente.",
        "Con el respaldo de nuestro músculo logístico, brindamos más de 395.000 servicios mensuales, alimentando el cuerpo y el alma para sostener el alto rendimiento de las organizaciones que confían en nosotros.",
      ]}
      highlightStat={{
        value: 395000,
        prefix: "+",
        label: "servicios mensuales con respaldo logístico propio",
      }}
      pillars={[
        {
          title: "Alimentación inteligente y saludable",
          text: "Menús equilibrados diseñados por especialistas, con alternativas específicas para vegetarianos, veganos y celíacos (Certificación Sin Gluten).",
        },
        {
          title: "Soluciones de alto rendimiento",
          text: "Desayunos y colaciones energéticas para estabilizar los niveles de vitalidad del personal; entradas y salad bar con aditamentos variables (toppings y dressings); viandas de gran volumen en empaques biodegradables.",
        },
        {
          title: "Programas integrales de productividad",
          text: (
            <>
              Implementación de programas como <em>Armonía</em> (pausas activas e hidratación),{" "}
              <em>Cookins Saludable</em> (islas de superalimentos) y dinámicas que mejoran el
              clima laboral como <em>Rompe Rutinas</em> y eventos corporativos customizados.
            </>
          ),
        },
      ]}
      ctaLabel="Consultar"
    />
  );
}
