"use client";

import { Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function TestimonialCard({
  quote,
  name,
  role,
  company,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <Card className="mx-3 w-[340px] shrink-0 border-border/60 bg-card/60 p-7 md:w-[400px] md:p-8">
      <Quote className="size-5 text-primary/70" strokeWidth={1.5} />
      <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/90 md:text-[1.05rem]">
        “{quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
        <div className="grid size-9 place-items-center rounded-full bg-primary/15 font-mono text-xs font-semibold text-primary">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role} · {company}
          </p>
        </div>
      </div>
    </Card>
  );
}

export function Testimonials() {
  const firstRow = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const secondRow = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <section className="section-y relative isolate overflow-hidden border-t border-border/60">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade>
            <p className="eyebrow mb-5">Lo que dicen otros fundadores</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              No te tomes nuestra palabra.{" "}
              <span className="text-muted-foreground">Toma la de ellos.</span>
            </h2>
          </BlurFade>
        </div>
      </div>

      <div className="relative mt-14 flex flex-col gap-6">
        <Marquee pauseOnHover className="[--duration:55s] [--gap:0px]">
          {firstRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:65s] [--gap:0px]">
          {secondRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>

        {/* Edge fade masks */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent md:w-40"
          )}
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent md:w-40"
          )}
        />
      </div>
    </section>
  );
}
