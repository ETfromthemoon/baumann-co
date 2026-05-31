"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { METRICS } from "@/lib/constants";

export function Results() {
  return (
    <section
      id="resultados"
      className="section-y relative isolate overflow-hidden border-t border-border/60"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[500px] copper-glow opacity-60"
      />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade>
            <p className="eyebrow mb-5">Resultados</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              No prometemos.{" "}
              <span className="text-muted-foreground">Mostramos.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Estas son las métricas agregadas de fundadores que completaron el
              programa ORCA® entre 2022 y 2025.
            </p>
          </BlurFade>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
          {METRICS.map((metric, i) => (
            <BlurFade key={metric.label} delay={0.3 + i * 0.1}>
              <div className="flex h-full flex-col items-center justify-center bg-background p-10 text-center md:p-12">
                <div className="flex items-baseline gap-1 font-display text-7xl font-extrabold leading-none tracking-tighter text-foreground md:text-8xl lg:text-9xl">
                  {metric.prefix && (
                    <span className="text-primary">{metric.prefix}</span>
                  )}
                  <NumberTicker
                    value={metric.value}
                    delay={0.5 + i * 0.2}
                    className="text-foreground"
                  />
                  <span className="text-primary">{metric.suffix}</span>
                </div>
                <p className="mt-6 max-w-[12rem] font-display text-base font-medium leading-snug text-foreground">
                  {metric.label}
                </p>
                <p className="mt-2 max-w-[14rem] text-sm text-muted-foreground">
                  {metric.context}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.7}>
          <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-sm text-muted-foreground">
            Muestra: 187 empresas con 15–80 empleados que completaron el
            programa ORCA® de 90 días. Datos auditados internamente.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
