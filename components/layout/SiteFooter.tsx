import Link from "next/link";
import { footerColumns } from "@/lib/navigation";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-ink text-hero-fg">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,rgba(26,79,74,0.22),transparent)]"
          aria-hidden
        />
        <div className="hero-noise absolute inset-0 opacity-[0.06] mix-blend-overlay" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-serif text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
                {site.name}
              </p>
              <p className="mt-2 text-[11px] font-semibold tracking-[0.2em] text-hero-fg/45 uppercase">
                Argentina
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-hero-fg-muted">
                {site.motherIdea}
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <p className="border-b border-white/10 pb-3 text-[11px] font-semibold tracking-[0.18em] text-hero-fg/45 uppercase">
                    {col.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="focus-ring rounded-sm text-[15px] text-hero-fg/85 transition-colors hover:text-hero-fg"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 text-sm text-hero-fg/55 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px]">
              © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
            </p>
            <div className="flex flex-col gap-1 sm:items-end sm:text-right">
              <a
                href={`mailto:${site.contact.email}`}
                className="focus-ring rounded-sm text-[15px] text-hero-fg/90 hover:text-hero-fg"
              >
                {site.contact.email}
              </a>
              <span className="text-[13px]">{site.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
