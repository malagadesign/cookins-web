export type Service = {
  id: string;
  eyebrow: string;
  category: string;
  title: string;
  description: string;
  /** Texto extendido para índice de servicios y tarjetas */
  teaser?: string;
  definition: string;
  resolves: string;
  value: string;
  implementation: string;
  differentiator: string;
  qualityLink: string;
  image: string;
  imageAlt: string;
  contextLinks: { href: string; label: string }[];
};

export function serviceHref(id: string) {
  return `/servicios/${id}`;
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.id === slug);
}

export const services: Service[] = [
  {
    id: "alimentacion-institucional",
    eyebrow: "Servicio principal",
    category: "Alimentación",
    title: "Alimentación Institucional",
    description:
      "Propuesta superadora de alimentación con estándares de excelencia, opciones saludables y más de 395.000 servicios mensuales.",
    teaser:
      "Transformamos el concepto tradicional de alimentación hacia una propuesta superadora que prioriza los más altos estándares de excelencia, opciones saludables, equilibradas y responsables con el medioambiente.",
    definition:
      "Servicio integral de alimentación para dotaciones numerosas, con menú planificado, producción controlada y distribución en tiempos compatibles con la operación.",
    resolves:
      "Resuelve la tensión entre volumen, variedad, seguridad alimentaria y ventanas cortas de servicio en turnos críticos.",
    value:
      "Aporta continuidad productiva, experiencia consistente para las personas y menor desvío operativo por paradas o demoras en comedor.",
    implementation:
      "Diagnóstico de dotación, diseño de menú, esquema de producción en planta o in situ, control de servicio y revisión periódica con el cliente.",
    differentiator:
      "Combinamos criterio nutricional, logística y gobierno de servicio integrado a la operación del predio.",
    qualityLink:
      "Se sostiene con estándares de inocuidad, trazabilidad y controles auditables definidos en Calidad.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Producción y servicio de alimentación institucional",
    contextLinks: [
      { href: "/calidad#calidad-seguridad", label: "Ver seguridad alimentaria" },
      { href: "/contacto", label: "Consultar alcance" },
    ],
  },
  {
    id: "sitios-remotos-infraestructura",
    eyebrow: "Logística y continuidad",
    category: "Remotos",
    title: "Sitios Remotos e Infraestructura",
    description:
      "Gestión integral de operaciones de alta complejidad en minería, obras, gas y petróleo con continuidad de negocio garantizada.",
    teaser:
      "Donde otros ven largas distancias o entornos hostiles, nosotros vemos soluciones integrales de alta complejidad para los sectores más exigentes del país.",
    definition:
      "Modelo integral para faenas y campamentos con restricciones de acceso, cadena de suministro sensible e infraestructura variable.",
    resolves:
      "Resuelve quiebres de suministro, descoordinación logística y pérdida de continuidad en contextos de difícil acceso.",
    value:
      "Aporta robustez operativa, respuesta ante contingencias y servicios esenciales sostenidos en ubicaciones críticas.",
    implementation:
      "Planificación de abastecimiento, stock de seguridad, dimensionamiento de infraestructura, roles de comando y protocolos de contingencia.",
    differentiator:
      "Integramos servicio, logística e infraestructura en una sola ecuación de gestión, no como contratos aislados.",
    qualityLink:
      "Depende de logística, protocolos operativos y monitoreo de puntos críticos definidos en Calidad.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Operación e infraestructura en sitio remoto",
    contextLinks: [
      { href: "/calidad#logistica", label: "Ver logística e infraestructura" },
      { href: "/rse/sustentabilidad", label: "Ver sustentabilidad" },
    ],
  },
  {
    id: "facility-services",
    eyebrow: "Operación en predio",
    category: "Facility",
    title: "Facility Services",
    description:
      "Servicios de soporte en predio: orden, higiene, atención y coordinación con las áreas operativas del cliente.",
    definition:
      "Acompañamiento operativo de instalaciones con equipos, procesos y estándares alineados a la dinámica de cada turno.",
    resolves:
      "Resuelve fricciones de gestión diaria en predios de alta circulación con múltiples contratistas y reglas comunes.",
    value:
      "Aporta previsibilidad, mejor experiencia de usuarios internos y menor carga de coordinación para operaciones y compras.",
    implementation:
      "Matriz de responsabilidades, turnos definidos, supervisión de campo y seguimiento con indicadores acordados.",
    differentiator:
      "El soporte se integra a la operación real del cliente, no como tarea aislada del negocio.",
    qualityLink:
      "Se apoya en procesos documentados, protocolos de atención y auditorías de cumplimiento.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Servicios de facility en entorno industrial",
    contextLinks: [
      { href: "/calidad#procesos", label: "Ver procesos y estándares" },
      { href: "/contacto", label: "Coordinar evaluación" },
    ],
  },
  {
    id: "traslado-personal",
    eyebrow: "Movilidad operativa",
    category: "Traslados",
    title: "Traslado de Personal",
    description:
      "Logística de traslado de personal alineada a turnos, rutas y protocolos de seguridad en operaciones industriales y remotas.",
    definition:
      "Servicio de movilidad de dotaciones con planificación de rutas, ventanas horarias y coordinación con la operación del cliente.",
    resolves:
      "Resuelve desafíos de puntualidad, cobertura geográfica y continuidad de turnos en contextos con acceso complejo.",
    value:
      "Reduce riesgos operativos por demoras de personal y mejora la previsibilidad del arranque de cada jornada productiva.",
    implementation:
      "Diseño de recorridos, definición de SLA, protocolos de seguridad vial y coordinación con supervisión de faena o planta.",
    differentiator:
      "Tratamos el traslado como parte del sistema operativo, no como un servicio logístico desconectado del turno.",
    qualityLink:
      "Incluye protocolos de operación, roles de respuesta y controles de cumplimiento en terreno.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Traslado de personal en contexto operativo",
    contextLinks: [
      { href: "/calidad#protocolos", label: "Ver protocolos de operación" },
      { href: "/contacto", label: "Solicitar propuesta" },
    ],
  },
  {
    id: "partner-estrategico-inversion",
    eyebrow: "Inversión y desarrollo",
    category: "Partner",
    title: "Partner Estratégico de Inversión",
    description:
      "Acompañamiento en inversiones de infraestructura de servicio: campamentos, comedores y dotaciones con criterio operativo y financiero.",
    definition:
      "Rol de partner para diseñar, dimensionar y sostener inversiones en infraestructura vinculadas al servicio integral.",
    resolves:
      "Resuelve la brecha entre decisión de inversión y ejecución operativa sostenible en el tiempo.",
    value:
      "Permite decisiones más seguras, con foco en continuidad, escalabilidad y retorno operativo del proyecto.",
    implementation:
      "Diagnóstico, modelado de alcance, roadmap por fases y gobierno conjunto cliente-Cookins durante la implementación.",
    differentiator:
      "Aportamos criterio de operación real, no solo visión comercial: lo invertido debe funcionar en faena o planta.",
    qualityLink:
      "Las inversiones se validan con estándares de calidad, riesgo y continuidad operativa.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Planificación estratégica de inversión en infraestructura",
    contextLinks: [
      { href: "/nosotros/infraestructura", label: "Ver infraestructura Cookins" },
      { href: "/contacto", label: "Agendar reunión" },
    ],
  },
];
