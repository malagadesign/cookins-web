export type RsePageMeta = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export const rsePages: RsePageMeta[] = [
  {
    id: "sustentabilidad",
    eyebrow: "RSE",
    title: "Sustentabilidad",
    description:
      "Eficiencia de recursos, reducción de mermas y decisiones de compra con criterio técnico y trazable en la operación diaria.",
  },
  {
    id: "formacion-desarrollo",
    eyebrow: "RSE",
    title: "Formación y Desarrollo",
    description:
      "Capacitación de equipos, desarrollo de proveedores e iniciativas comunitarias con foco en resultados medibles.",
  },
];

export function rseHref(id: string) {
  return `/rse/${id}`;
}

export function getRsePage(slug: string) {
  return rsePages.find((p) => p.id === slug);
}
