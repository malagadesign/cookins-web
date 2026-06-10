export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/compania", label: "Compañía" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/sectores", label: "Sectores" },
  { href: "/calidad-operacion", label: "Calidad y operación" },
  { href: "/impacto", label: "Impacto" },
  { href: "/insights", label: "Insights" },
];

export const contactNavItem: NavItem = { href: "/contacto", label: "Contacto" };

export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: "Institucional",
    items: [
      { href: "/compania", label: "Compañía" },
      { href: "/soluciones", label: "Soluciones" },
      { href: "/sectores", label: "Sectores" },
    ],
  },
  {
    title: "Operación y compromiso",
    items: [
      { href: "/calidad-operacion", label: "Calidad y operación" },
      { href: "/impacto", label: "Impacto" },
      { href: "/insights", label: "Insights" },
    ],
  },
  {
    title: "Comercial",
    items: [{ href: "/contacto", label: "Contacto" }],
  },
];
