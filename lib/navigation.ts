import { nosotrosHref, nosotrosPages } from "@/lib/nosotros-pages";
import { rseHref, rsePages } from "@/lib/rse-pages";
import { services, serviceHref } from "@/lib/services";

export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type MainNavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export const nosotrosNav: NavItem[] = nosotrosPages.map((p) => ({
  href: nosotrosHref(p.id),
  label: p.title,
  description: p.eyebrow,
}));

export const serviciosNav: NavItem[] = services.map((s) => ({
  href: serviceHref(s.id),
  label: s.title,
  description: s.category,
}));

export const rseNav: NavItem[] = rsePages.map((p) => ({
  href: rseHref(p.id),
  label: p.title,
}));

/** Navegación principal con submenús donde aplica */
export const mainNavItems: MainNavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros", children: nosotrosNav },
  { href: "/servicios", label: "Servicios", children: serviciosNav },
  { href: "/calidad", label: "Calidad" },
  { href: "/rse", label: "RSE", children: rseNav },
];

/** Ítems planos (sitemap, compat) */
export const mainNav: NavItem[] = mainNavItems.map(({ href, label }) => ({ href, label }));

export const contactNavItem: NavItem = { href: "/contacto", label: "Contacto" };

export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: "Nosotros",
    items: [{ href: "/nosotros", label: "Nosotros" }, ...nosotrosNav],
  },
  {
    title: "Servicios y calidad",
    items: [{ href: "/servicios", label: "Todos los servicios" }, ...serviciosNav, { href: "/calidad", label: "Calidad" }],
  },
  {
    title: "Compromiso",
    items: [{ href: "/rse", label: "RSE" }, ...rseNav, { href: "/contacto", label: "Contacto" }],
  },
];

export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return pathname === href.split("#")[0];
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isNavSectionActive(pathname: string, item: MainNavItem) {
  if (isNavActive(pathname, item.href)) return true;
  return item.children?.some((child) => isNavActive(pathname, child.href)) ?? false;
}
