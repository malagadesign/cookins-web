"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MainNavItem } from "@/lib/navigation";
import { isNavActive, isNavSectionActive } from "@/lib/navigation";

function Chevron() {
  return (
    <svg
      className="size-3.5 shrink-0 opacity-60 transition-transform group-open:rotate-180"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DesktopNavItem({ item }: { item: MainNavItem }) {
  const pathname = usePathname();
  const active = isNavSectionActive(pathname, item);

  if (!item.children?.length) {
    return (
      <Link
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
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={`focus-ring inline-flex items-center gap-1 rounded-sm border-b-2 px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
          active
            ? "border-accent text-foreground"
            : "border-transparent text-muted hover:border-foreground/12 hover:text-foreground"
        }`}
        aria-haspopup="true"
      >
        {item.label}
        <Chevron />
      </Link>

      <div className="pointer-events-none absolute top-full left-0 z-50 w-72 pt-2 opacity-0 transition-[opacity,transform] duration-200 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-hover:pointer-events-auto group-hover:opacity-100 translate-y-1">
        <div className="overflow-hidden rounded-md border border-border/90 bg-background/98 shadow-[var(--shadow-card)] backdrop-blur-lg">
          <Link
            href={item.href}
            className="block border-b border-border/80 px-4 py-3 text-[13px] font-semibold text-foreground transition-colors hover:bg-wash"
          >
            Ver {item.label.toLowerCase()}
          </Link>
          <ul className="py-1.5" role="menu">
            {item.children.map((child) => {
              const childActive = isNavActive(pathname, child.href);
              return (
                <li key={child.href} role="none">
                  <Link
                    href={child.href}
                    role="menuitem"
                    className={`focus-ring block px-4 py-2.5 transition-colors hover:bg-wash ${
                      childActive ? "bg-wash/80 text-foreground" : "text-muted"
                    }`}
                  >
                    <span className="block text-[13px] font-medium leading-snug">{child.label}</span>
                    {child.description ? (
                      <span className="mt-0.5 block text-[11px] text-muted-2">{child.description}</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MobileNavGroup({
  item,
  onNavigate,
}: {
  item: MainNavItem;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const active = isNavSectionActive(pathname, item);
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={`focus-ring rounded-sm border-b border-border/60 py-3.5 text-[15px] font-medium ${
          active ? "text-foreground" : "text-muted"
        }`}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <details className="group border-b border-border/60 py-1" open={active}>
      <summary
        className={`focus-ring flex cursor-pointer list-none items-center justify-between py-3 text-[15px] font-medium marker:content-none [&::-webkit-details-marker]:hidden ${
          active ? "text-foreground" : "text-muted"
        }`}
      >
        <span>{item.label}</span>
        <Chevron />
      </summary>
      <div className="pb-3 pl-3">
        <Link
          href={item.href}
          className="focus-ring block py-2 text-sm font-semibold text-foreground"
          onClick={onNavigate}
        >
          Ver {item.label.toLowerCase()}
        </Link>
        <ul className="mt-1 space-y-0.5 border-l border-border/80 pl-3">
          {item.children!.map((child) => {
            const childActive = isNavActive(pathname, child.href);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={`focus-ring block py-2 text-sm leading-snug ${
                    childActive ? "font-medium text-foreground" : "text-muted"
                  }`}
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}
