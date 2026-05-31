"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-foreground"
        >
          Baumann<span className="text-primary">&</span>Co.
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SITE.english}
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            EN
          </Link>
        </nav>
        <Link
          href={SITE.primaryCTA.href}
          className={cn(
            buttonVariants({ size: "sm" }),
            "rounded-full px-4"
          )}
        >
          {SITE.primaryCTA.short}
          <ArrowUpRight className="ml-0.5 size-4" />
        </Link>
      </div>
    </header>
  );
}
