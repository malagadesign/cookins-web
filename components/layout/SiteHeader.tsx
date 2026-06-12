"use client";

import Link from "next/link";
import { useState } from "react";
import { CookinsLogo } from "@/components/brand/CookinsLogo";
import { DesktopNavItem, MobileNavGroup } from "@/components/layout/NavDropdown";
import { contactNavItem, mainNavItems } from "@/lib/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg backdrop-saturate-150">
      <div className="mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring shrink-0 rounded-sm py-1"
          onClick={closeMobile}
        >
          <CookinsLogo className="h-8 w-auto text-[#073320] sm:h-9" />
          <span className="sr-only">Cookins — Inicio</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {mainNavItems.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={contactNavItem.href}
            className="focus-ring hidden items-center gap-2 rounded-sm border border-foreground/10 bg-foreground px-5 py-2.5 text-[13px] font-semibold tracking-wide text-background shadow-sm transition-[background-color,box-shadow,color] hover:bg-ink-elevated hover:shadow-md sm:inline-flex"
          >
            {contactNavItem.label}
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
        <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6" aria-label="Móvil">
          {mainNavItems.map((item) => (
            <MobileNavGroup key={item.href} item={item} onNavigate={closeMobile} />
          ))}
          <Link
            href={contactNavItem.href}
            className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-foreground py-3.5 text-center text-[15px] font-semibold tracking-wide text-background"
            onClick={closeMobile}
          >
            {contactNavItem.label}
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
