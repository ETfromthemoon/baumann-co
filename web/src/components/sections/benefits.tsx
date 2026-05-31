"use client";

import {
  Clock,
  TrendingUp,
  Gauge,
  Wallet,
  Users,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BENEFITS } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Clock,
  TrendingUp,
  Gauge,
  Wallet,
  Users,
  Rocket,
};

export function Benefits() {
  return (
    <section className="section-y relative isolate border-t border-border/60">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade>
            <p className="eyebrow mb-5">Qué cambia en tu día a día</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              No es teoría.{" "}
              <span className="text-muted-foreground">
                Es lo que vas a sentir en tu primera semana sin ser
                indispensable.
              </span>
            </h2>
          </BlurFade>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICONS[benefit.icon] ?? Clock;
            return (
              <BlurFade key={benefit.title} delay={0.15 + i * 0.06}>
                <div className="group relative h-full bg-background p-8 transition-colors duration-300 hover:bg-card/60 md:p-10">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.06] text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.10]">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                    {benefit.body}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
