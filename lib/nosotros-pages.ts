export type NosotrosPageMeta = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export const nosotrosPages: NosotrosPageMeta[] = [
  {
    id: "institucional",
    eyebrow: "Nosotros",
    title: "Institucional",
    description:
      "Empresa 100% argentina con más de medio siglo impulsando el desarrollo del país. Trayectoria, misión, visión y valores.",
  },
  {
    id: "cultura-cookins",
    eyebrow: "Nosotros",
    title: "Cultura Cookins",
    description:
      "Nuestra gente es nuestra mayor fortaleza. Compromiso, equidad y vocación en terreno en cada región donde operamos.",
  },
  {
    id: "infraestructura",
    eyebrow: "Nosotros",
    title: "Infraestructura",
    description:
      "La estructura que respalda cada servicio: plantas, depósitos, centros de distribución y flota propia para garantizar continuidad operativa.",
  },
];

export function nosotrosHref(id: string) {
  return `/nosotros/${id}`;
}

export function getNosotrosPage(slug: string) {
  return nosotrosPages.find((p) => p.id === slug);
}
