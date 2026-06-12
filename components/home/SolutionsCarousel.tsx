"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SolutionCarouselCard } from "@/components/home/SolutionCarouselCard";
import { homeSolutions } from "@/lib/home-solutions";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SolutionsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const ratio = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setProgress(clamp(ratio, 0, 1));
    setCanScrollBack(el.scrollLeft > 8);
    setCanScrollForward(el.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByPage = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("article");
    const cardWidth = card?.getBoundingClientRect().width ?? el.clientWidth * 0.85;
    const gap = 24;
    const delta = direction === "next" ? cardWidth + gap : -(cardWidth + gap);

    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="relative">
        <div
          ref={trackRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 pr-4 [-webkit-overflow-scrolling:touch]"
          aria-label="Carrusel de soluciones integrales"
        >
          {homeSolutions.map((solution) => (
            <SolutionCarouselCard key={solution.id} solution={solution} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByPage("prev")}
          disabled={!canScrollBack}
          className="focus-ring absolute top-[calc(50%-2.5rem)] left-0 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm border border-border bg-surface text-lg text-foreground shadow-md transition-all hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-0 lg:flex"
          aria-label="Ver soluciones anteriores"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByPage("next")}
          disabled={!canScrollForward}
          className="focus-ring absolute top-[calc(50%-2.5rem)] right-0 z-10 hidden size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm border border-border bg-accent text-lg text-white shadow-md transition-all hover:bg-accent-muted disabled:pointer-events-none disabled:opacity-0 lg:flex"
          aria-label="Ver más soluciones"
        >
          →
        </button>
      </div>

      <div className="mt-8 max-w-md">
        <div
          className="h-0.5 w-full overflow-hidden rounded-full bg-border"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-label="Progreso del carrusel"
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${Math.max(12, progress * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
