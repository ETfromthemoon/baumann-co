"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SITE, STATS_HERO } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
 * Hero 2.0 — Premium animation suite
 *
 * Issues fixed from v1:
 *  · "matando" appeared instantly while rest of headline still revealing
 *  · Total reveal took ~2s (felt slow / broken)
 *  · TextAnimate from Magic UI broke inline layout on word wrap
 *
 * New effects:
 *  · Aurora (3 copper blobs orbiting slowly behind the hero)
 *  · Mouse-follow Spotlight (radial copper glow trails the cursor)
 *  · Letter-by-letter reveal with clip-path mask + spring easing
 *  · SVG path-draw marker on "matando" (real ink stroke)
 *  · Magnetic CTA (button drifts toward the cursor)
 * ────────────────────────────────────────────────────────── */

// Aurora — 3 layered blobs animated via CSS keyframes (see globals.css)
function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      <div className="absolute -left-[15%] top-[5%] size-[55vw] max-w-[700px] rounded-full bg-primary/20 blur-[100px] animate-aurora-1" />
      <div className="absolute -right-[10%] top-[20%] size-[45vw] max-w-[580px] rounded-full bg-amber-600/15 blur-[110px] animate-aurora-2" />
      <div className="absolute left-[30%] -top-[10%] size-[35vw] max-w-[460px] rounded-full bg-amber-400/10 blur-[120px] animate-aurora-3" />
    </div>
  );
}

// Spotlight — radial gradient following the cursor. Hidden until first cursor move.
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  // start far off-screen so any initial paint shows nothing
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const xSpring = useSpring(x, { stiffness: 80, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 80, damping: 30 });
  const background = useTransform(
    [xSpring, ySpring],
    ([cx, cy]) =>
      `radial-gradient(500px circle at ${cx}px ${cy}px, oklch(0.555 0.163 48.998 / 0.22), transparent 60%)`
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
      if (!active) setActive(true);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y, active]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
      style={{ background, opacity: active ? 1 : 0 }}
    />
  );
}

// SplitText — words start visible-but-blurred, then sharpen into focus.
// This keeps layout centered from frame 1 (no left-to-right cascade) and
// reads more "premium" than a sequential appearance.
function SplitText({
  text,
  delay = 0,
  stagger = 0.04,
  startIndex = 0,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  startIndex?: number;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wIdx) => {
        const i = startIndex + wIdx;
        return (
          <span key={wIdx} className="inline-block">
            <motion.span
              className="inline-block will-change-[filter,opacity,transform]"
              initial={{
                opacity: 0.12,
                filter: "blur(14px)",
                y: 12,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                delay: delay + i * stagger,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
            {wIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </>
  );
}

// MarkerHighlight — SVG path-draw under the word, like a real highlighter
function MarkerHighlight({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <motion.svg
        aria-hidden
        className="absolute inset-x-[-2%] bottom-[0.05em] h-[0.55em] w-[104%]"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.2 }}
      >
        <motion.path
          d="M1,7 Q20,3 40,6 T80,5 T99,6"
          stroke="oklch(0.828 0.189 84.429)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.85 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{
            delay: delay + 0.02,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.svg>
    </span>
  );
}

// Magnetic — wrapper that pulls gently toward the cursor
function Magnetic({
  children,
  strength = 0.25,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * strength);
        y.set((e.clientY - cy) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const HEADLINE_LINE_1 = "Tu empresa depende de ti.";
  const HEADLINE_LINE_2_PRE = "Y eso te está";
  const HEADLINE_LINE_2_WORD = "matando.";
  const WORD_STAGGER = 0.04;
  const STAGGER_OFFSET = 0.08;

  const line1Words = HEADLINE_LINE_1.split(" ").length; // 5
  const line2PreWords = HEADLINE_LINE_2_PRE.split(" ").length; // 3
  const matandoIndex = line1Words + line2PreWords; // word index for "matando"

  // marker fires once "matando" finishes its blur-to-focus
  const markerDelay =
    STAGGER_OFFSET + matandoIndex * WORD_STAGGER + 0.7 - 0.15;

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden pt-32 pb-24 md:pt-36 md:pb-32">
      <Aurora />
      <Spotlight />
      <DotPattern
        className={cn(
          "absolute inset-0 -z-10 opacity-20",
          "[mask-image:radial-gradient(60%_50%_at_50%_30%,white,transparent)]"
        )}
      />

      <div className="container-x relative w-full">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Consultoría para fundadores · Método ORCA®
          </motion.p>

          {/* Headline — word-by-word reveal with blur */}
          <h1 className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tighter md:text-7xl lg:text-[5.5rem]">
            <span className="block">
              <SplitText
                text={HEADLINE_LINE_1}
                delay={STAGGER_OFFSET}
                stagger={WORD_STAGGER}
                startIndex={0}
              />
            </span>
            <span className="block text-muted-foreground">
              <SplitText
                text={HEADLINE_LINE_2_PRE}
                delay={STAGGER_OFFSET}
                stagger={WORD_STAGGER}
                startIndex={line1Words}
              />
              <span>&nbsp;</span>
              <span className="text-foreground">
                <MarkerHighlight delay={markerDelay}>
                  <SplitText
                    text={HEADLINE_LINE_2_WORD}
                    delay={STAGGER_OFFSET}
                    stagger={WORD_STAGGER}
                    startIndex={matandoIndex}
                  />
                </MarkerHighlight>
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <motion.p
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: markerDelay + 0.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Recupera 23 horas a la semana en 90 días. Sin que tu empresa
            pierda velocidad. Sin que tengas que aprender otro framework
            empresarial. Sin promesas vacías.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: markerDelay + 0.25,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Magnetic>
              <Link href={SITE.primaryCTA.href} className="inline-block">
                <ShimmerButton
                  background="oklch(0.555 0.163 48.998)"
                  shimmerColor="oklch(0.985 0.027 92)"
                  className="px-8 py-3.5 text-base font-medium"
                >
                  {SITE.primaryCTA.label}
                  <ArrowRight className="ml-2 size-4" />
                </ShimmerButton>
              </Link>
            </Magnetic>
            <p className="text-xs text-muted-foreground">
              {SITE.primaryCTA.subtext}
            </p>
          </motion.div>
        </div>

        {/* Trust signal stats card */}
        <motion.div
          className="relative mx-auto mt-20 max-w-5xl"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: markerDelay + 0.4,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur md:p-10">
            <BorderBeam
              size={250}
              duration={12}
              colorFrom="oklch(0.555 0.163 48.998)"
              colorTo="oklch(0.828 0.189 84.429)"
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
              {STATS_HERO.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: markerDelay + 0.6 + i * 0.08,
                    duration: 0.5,
                  }}
                >
                  <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute left-1/2 bottom-4 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: markerDelay + 1, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
              Scroll
            </span>
            <span className="h-7 w-px bg-gradient-to-b from-muted-foreground/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
