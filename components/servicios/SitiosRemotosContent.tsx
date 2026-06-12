import { ServiceEditorialDetail } from "@/components/servicios/ServiceEditorialDetail";
import { getServiceBySlug } from "@/lib/services";

export function SitiosRemotosContent() {
  const service = getServiceBySlug("sitios-remotos-infraestructura");
  if (!service) return null;

  return (
    <ServiceEditorialDetail
      service={service}
      heroTitle="Gestión Integral de Sitios Remotos e Infraestructura"
      heroLead="Donde otros ven largas distancias o entornos hostiles, nosotros vemos soluciones integrales de alta complejidad."
      intro={[
        "Nos especializamos en el diseño y ejecución de operaciones de alta complejidad para los sectores más exigentes del país, garantizando la continuidad del negocio con presencia federal activa en minería, grandes obras de construcción, gas y petróleo.",
      ]}
      pillars={[
        {
          title: "Soluciones de campamento y soporte logístico",
          text: "Diseñamos estructuras operativas para cubrir de punta a punta todos los aspectos de la vida diaria en terreno. Coordinamos servicios de hotelería corporativa, soluciones gastronómicas de alto rendimiento, lavandería industrial a gran escala para textiles y uniformes técnicos, y la administración de campamentos industriales bajo estrictos estándares certificados.",
        },
        {
          title: "Confort y preservación de activos en terreno",
          text: "Transformamos campamentos aislados en entornos de descanso real, seguridad y contención humana. Nos encargamos del mantenimiento preventivo y correctivo de instalaciones para proteger el valor de tus activos físicos, integrando arquitectura y mobiliario de diseño, paisajismo, áreas de recreación y esparcimiento, control biológico de plagas y una proveeduría integral de materias primas de máxima calidad.",
        },
        {
          title: "Gestión de hotelería",
          text: "Contamos con administración especializada de complejos hoteleros, hosterías y cabañas en puntos turísticos del país, diseñados exclusivamente para el desarrollo de eventos corporativos.",
        },
        {
          title: 'Desarrollo de infraestructura "Llave en Mano"',
          text: (
            <>
              <p>
                Desarrollamos la ingeniería, el diseño y el montaje de módulos habitacionales y
                bases operativas avanzadas para que tu única preocupación sea la producción.
              </p>
              <p className="mt-4">
                <strong className="text-foreground">Preparación de sitio y soporte de obra.</strong>{" "}
                Ejecución técnica de movimiento de suelos, nivelación y acondicionamiento riguroso
                de locaciones complejas para pozos energéticos, plantas industriales y obradores de
                gran escala.
              </p>
            </>
          ),
        },
      ]}
      ctaLabel="+ Info"
    />
  );
}
