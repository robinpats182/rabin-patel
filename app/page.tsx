import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navbar"
import { Marquee } from "@/components/marque"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <main className="flex flex-col items-center justify-center">
          <Hero />
        <Marquee />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
