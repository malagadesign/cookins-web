"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { HomeSolution } from "@/lib/home-solutions";

export function SolutionCarouselCard({ solution }: { solution: HomeSolution }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group/card flex h-full w-[min(88vw,22rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:w-[min(44vw,20rem)] lg:w-[31%] lg:max-w-[22rem] lg:min-w-[17.5rem]">
      <Link href={solution.href} className="focus-ring flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-wash">
          {imageError ? (
            <div
              className="absolute inset-0 bg-gradient-to-br from-wash via-background to-accent/15"
              aria-hidden
            />
          ) : (
            <Image
              src={solution.image}
              alt={solution.imageAlt}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
              onError={() => setImageError(true)}
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            aria-hidden
          />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
            {solution.category}
          </p>
          <h3 className="mt-3 font-serif text-xl font-medium leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover/card:text-accent sm:text-[1.35rem]">
            {solution.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[15px]">
            {solution.description}
          </p>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/70 pt-5">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              Leer más
            </span>
            <span
              className="inline-flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover/card:bg-accent group-hover/card:text-white"
              aria-hidden
            >
              <span className="transition-transform duration-300 group-hover/card:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
