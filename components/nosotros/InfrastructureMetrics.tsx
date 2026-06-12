"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type Metric = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

const metrics: Metric[] = [
  { value: 8, label: "Plantas de elaboración propias" },
  { value: 40000, prefix: "+", suffix: " m²", label: "de depósitos propios" },
  { value: 3, label: "Centros de distribución propios" },
  { value: 75, label: "Vehículos — flota propia" },
];

export function InfrastructureMetrics() {
  return (
    <dl className="mt-14 grid gap-8 rounded-md border border-border bg-ink p-8 text-hero-fg shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-10 lg:grid-cols-4 lg:gap-6 lg:p-12">
      {metrics.map((metric) => (
        <div key={metric.label} className="border-t border-white/12 pt-6 lg:border-t-0 lg:pt-0 lg:first:border-t-0">
          <dt className="font-serif text-3xl font-medium tracking-tight text-hero-fg sm:text-4xl">
            <AnimatedCounter
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
            />
          </dt>
          <dd className="mt-2 text-sm leading-snug text-hero-fg-muted">{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}
