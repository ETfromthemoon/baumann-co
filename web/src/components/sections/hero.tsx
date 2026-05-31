"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { SITE, STATS_HERO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  const markerRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 copper-glow" />
      <DotPattern
        className={cn(
          "absolute inset-0 -z-10 opacity-30",
          "[mask-image:radial-gradient(60%_50%_at_50%_30%,white,transparent)]"
        )}
      />

      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <BlurFade delay={0.1}>
            <p className="eyebrow mb-6">
              Consultoría para fundadores · Método ORCA®
            </p>
          </BlurFade>

          <h1 className="font-display text-balance text-5xl font-bold leading-[1.02] tracking-tighter md:text-7xl lg:text-[5.5rem]">
            <TextAnimate
              animation="blurInUp"
              by="word"
              duration={0.6}
              delay={0.2}
              as="span"
              className="block"
            >
              Tu empresa depende de ti.
            </TextAnimate>
            <span className="block text-muted-foreground">
              <TextAnimate
                animation="blurInUp"
                by="word"
                duration={0.6}
                delay={0.8}
                as="span"
                className="inline"
              >
                Y eso te está
              </TextAnimate>{" "}
              <span
                ref={markerRef}
                className={cn(
                  "marker text-foreground",
                  inView && "in-view"
                )}
              >
                matando.
              </span>
            </span>
          </h1>

          <BlurFade delay={1.4}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              Recupera 23 horas a la semana en 90 días. Sin que tu empresa
              pierda velocidad. Sin que tengas que aprender otro framework
              empresarial. Sin promesas vacías.
            </p>
          </BlurFade>

          <BlurFade delay={1.7}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
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

        {/* Trust signal row */}
        <BlurFade delay={2.0}>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur md:p-10">
              <BorderBeam
                size={250}
                duration={12}
                colorFrom="oklch(0.555 0.163 48.998)"
                colorTo="oklch(0.828 0.189 84.429)"
              />
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
                {STATS_HERO.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
