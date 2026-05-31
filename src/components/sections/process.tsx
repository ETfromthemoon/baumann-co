"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section
      id="proceso"
      className="section-y relative isolate border-t border-border/60 bg-card/20"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade>
            <p className="eyebrow mb-5">Cómo trabajamos</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              90 días.{" "}
              <span className="text-muted-foreground">
                Cuatro pasos. Cero improvisación.
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              No vendemos retainer indefinido. Vendemos una intervención con
              principio, medio y fin. Si en 90 días tu empresa no opera sin ti,
              no cumplimos.
            </p>
          </BlurFade>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-20 max-w-4xl">
          <ol className="relative">
            {/* Vertical connecting line */}
            <span
              aria-hidden
              className="absolute left-[19px] top-3 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-[23px]"
            />

            {PROCESS_STEPS.map((step, i) => (
              <BlurFade key={step.title} delay={0.3 + i * 0.12}>
                <li className="relative grid grid-cols-[auto,1fr] gap-6 pb-12 last:pb-0 md:gap-10">
                  {/* Step dot + line connector */}
                  <div className="relative">
                    <div className="relative grid size-10 place-items-center rounded-full border border-primary/30 bg-background md:size-12">
                      <span className="size-3 rounded-full bg-primary shadow-[0_0_18px_2px_oklch(0.555_0.163_48.998_/_0.6)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1.5 md:pt-2.5">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        {step.when}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              </BlurFade>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
