import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Problem } from "@/components/sections/problem";
import { Method } from "@/components/sections/method";
import { Process } from "@/components/sections/process";
import { Benefits } from "@/components/sections/benefits";
import { Results } from "@/components/sections/results";
import { Founder } from "@/components/sections/founder";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Problem />
        <Method />
        <Process />
        <Benefits />
        <Results />
        <Founder />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
