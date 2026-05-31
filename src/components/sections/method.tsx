"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { METHOD_PILLARS, SITE } from "@/lib/constants";

export function Method() {
  return (
    <section
      id="metodo"
      className="section-y relative isolate overflow-hidden border-t border-border/60"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] copper-glow opacity-50"
      />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade>
            <p className="eyebrow mb-5">El método</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              ORCA<span className="text-primary">®</span>.
              <br />
              <span className="text-muted-foreground">
                Cuatro pilares, una transformación.
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              No es una metodología más. Es la operación quirúrgica de los
              cuatro sistemas que sostienen una empresa mediana: cómo se
              organiza, cuánto rinde, cómo crece, y cuánto te necesita.
            </p>
          </BlurFade>
        </div>

        {/* Big ORCA word as hero visual */}
        <BlurFade delay={0.3}>
          <div className="mt-16 select-none text-center">
            <div className="font-display text-[clamp(5rem,18vw,16rem)] font-extrabold leading-none tracking-tighter">
              {METHOD_PILLARS.map((pillar, i) => (
                <span
                  key={pillar.letter}
                  className="inline-block text-foreground/90 transition-all duration-700 hover:text-primary"
                  style={{
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  {pillar.letter}
                </span>
              ))}
            </div>
            <div className="mt-3 flex justify-center gap-[clamp(2.5rem,7vw,8rem)] font-mono text-xs uppercase tracking-widest text-muted-foreground md:gap-[clamp(4rem,10vw,12rem)]">
              {METHOD_PILLARS.map((p) => (
                <span key={p.letter}>{p.name}</span>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Detail cards for each pillar */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {METHOD_PILLARS.map((pillar, i) => (
            <BlurFade key={pillar.letter} delay={0.4 + i * 0.1}>
              <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 p-8 transition-all duration-500 hover:border-primary/40 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-6xl font-extrabold leading-none tracking-tighter text-primary md:text-7xl">
                    {pillar.letter}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {pillar.name}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight md:text-[1.65rem]">
                  {pillar.headline}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/15 bg-primary/[0.04] p-4">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-sm font-medium leading-snug text-foreground/90">
                    {pillar.outcome}
                  </p>
                </div>
              </Card>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.9}>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <Link href={SITE.primaryCTA.href}>
              <ShimmerButton
                background="oklch(0.555 0.163 48.998)"
                shimmerColor="oklch(0.985 0.027 92)"
                className="px-8 py-3.5 text-base font-medium"
              >
                {SITE.primaryCTA.label}
                <ArrowRight className="ml-2 size-4" />
              </ShimmerButton>
            </Link>
            <p className="text-xs text-muted-foreground">
              {SITE.primaryCTA.subtext}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
