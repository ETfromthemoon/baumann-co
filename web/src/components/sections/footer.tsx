import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight text-foreground"
            >
              Baumann<span className="text-primary">&</span>Co.
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Consultoría para fundadores de empresas medianas. Método ORCA®.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow mb-4">Navegación</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={SITE.secondaryCTA.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Test ORCA®
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-4">Contacto</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link
                  href={SITE.primaryCTA.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Agendar diagnóstico
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.english}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  English version →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 Baumann&Co. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Términos
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
