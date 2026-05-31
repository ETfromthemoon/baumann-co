"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const GUARANTEES = ["30 minutos", "Sin costo", "Sin compromiso"];

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 py-28 md:py-40">
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 copper-glow"
      />
      <DotPattern
        className={cn(
          "absolute inset-0 -z-10 opacity-30",
          "[mask-image:radial-gradient(60%_50%_at_50%_50%,white,transparent)]"
        )}
      />

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade>
            <h2 className="font-display text-balance text-5xl font-bold leading-[1.02] tracking-tighter md:text-7xl lg:text-[5rem]">
              Recupera el control de tu empresa.
              <br />
              <span className="text-muted-foreground">En 90 días.</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              Empieza con un diagnóstico de 30 minutos. Sin costo. Sin
              compromiso. Sin PowerPoint.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mt-12 flex flex-col items-center gap-6">
              <Link href={SITE.primaryCTA.href}>
                <ShimmerButton
                  background="oklch(0.555 0.163 48.998)"
                  shimmerColor="oklch(0.985 0.027 92)"
                  className="px-10 py-4 text-base font-medium md:text-lg"
                >
                  {SITE.primaryCTA.label}
                  <ArrowRight className="ml-2 size-5" />
                </ShimmerButton>
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {GUARANTEES.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="size-4 text-primary" strokeWidth={2} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
