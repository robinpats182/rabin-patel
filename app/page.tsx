import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marque";
import { Skills } from "@/components/skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto md:px-28 px-4">
        <Hero />
        <Marquee />
        <Skills />

        {/* Footer */}
        <footer className="py-6 text-gray-500">
          © {new Date().getFullYear()} Portfolio . All rights reserved.
        </footer>
      </div>
    </main>
  );
}
