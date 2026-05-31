"use client";

import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";

const INDUSTRIES = [
  "SaaS",
  "Manufactura",
  "Servicios profesionales",
  "Retail",
  "Distribución",
  "Construcción",
  "Salud",
  "Tecnología",
  "Logística",
  "Educación",
  "Agroindustria",
  "Hospitalidad",
];

export function Stats() {
  return (
    <section className="relative border-y border-border/60 bg-card/30 py-16">
      <div className="container-x">
        <BlurFade>
          <p className="eyebrow mb-8 text-center">
            Empresas en 12 industrias confiaron en el método ORCA®
          </p>
        </BlurFade>
        <Marquee
          className="[--duration:60s] [--gap:3rem]"
          pauseOnHover
        >
          {INDUSTRIES.map((industry) => (
            <div
              key={industry}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary/60" />
              <span className="font-display text-xl font-medium tracking-tight md:text-2xl">
                {industry}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
