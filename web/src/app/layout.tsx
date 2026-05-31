import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baumann & Co. — Recupera el control de tu empresa en 90 días",
  description:
    "Consultoría para fundadores de empresas medianas. Método ORCA®: orden, rentabilidad, crecimiento y autonomía. Diagnóstico gratuito de 30 minutos.",
  keywords: [
    "consultoría empresarial",
    "consultoría B2B",
    "método ORCA",
    "fundador",
    "autonomía empresarial",
    "delegación",
    "rentabilidad",
    "Manuel Baumann",
  ],
  authors: [{ name: "Baumann & Co." }],
  openGraph: {
    title: "Baumann & Co. — Recupera el control de tu empresa",
    description:
      "Devolvemos al fundador 23 horas a la semana en 90 días. Sin que la empresa pierda velocidad.",
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
