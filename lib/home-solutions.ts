import { services, serviceHref } from "@/lib/services";

/** Datos del carrusel de Servicios en Home (derivados del catálogo principal). */
export const homeSolutions = services.map((s) => ({
  id: s.id,
  href: serviceHref(s.id),
  category: s.category,
  title: s.title,
  description: s.description,
  image: s.image,
  imageAlt: s.imageAlt,
}));

export type HomeSolution = (typeof homeSolutions)[number];
