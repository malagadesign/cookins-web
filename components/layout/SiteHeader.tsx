"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/navigation";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg backdrop-saturate-150">
      <div className="mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring shrink-0 rounded-sm py-1"
          onClick={() => setOpen(false)}
        >
          <span className="block font-serif text-[1.35rem] font-semibold leading-none tracking-tight text-foreground sm:text-2xl">
            {site.name}
          </span>
          <span className="mt-1 block text-[10px] font-semibold tracking-[0.2em] text-muted-2 uppercase">
            Servicios integrales
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-sm border-b-2 px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  active
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted hover:border-foreground/12 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contacto"
            className="focus-ring hidden items-center gap-2 rounded-sm border border-foreground/10 bg-foreground px-5 py-2.5 text-[13px] font-semibold tracking-wide text-background shadow-sm transition-[background-color,box-shadow,color] hover:bg-ink-elevated hover:shadow-md sm:inline-flex"
          >
            Contacto
            <span className="text-background/70" aria-hidden>
              →
            </span>
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex min-h-10 min-w-[4.5rem] items-center justify-center rounded-sm border border-border px-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/15 hover:bg-wash lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border bg-background/98 lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6" aria-label="Móvil">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-sm border-b border-border/60 py-3.5 text-[15px] font-medium last:border-b-0 ${
                  active ? "text-foreground" : "text-muted"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="focus-ring mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-foreground py-3.5 text-center text-[15px] font-semibold tracking-wide text-background"
            onClick={() => setOpen(false)}
          >
            Contacto
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
