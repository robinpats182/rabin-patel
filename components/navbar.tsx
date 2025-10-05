"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current,
          )
          setActiveSection(mostVisible.target.id)
          console.log("[v0] Active section:", mostVisible.target.id)
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-20% 0px -35% 0px",
      },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
        console.log("[v0] Observing section:", id)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg shadow-lg shadow-primary/5">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <a href="/" className="font-mono text-sm font-semibold text-primary transition-all duration-300 hover:scale-110 hover:text-primary/80 cursor-pointer inline-block">
            {"<RabinPatel />"}
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:text-foreground hover:bg-primary/10 hover:scale-105 ${
                    activeSection === id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-in fade-in slide-in-from-bottom-1 zoom-in-50" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:rotate-180 transition-all duration-500 hover:bg-primary/10"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
