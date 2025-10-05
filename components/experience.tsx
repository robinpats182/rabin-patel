"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    company: "Self Employed",
    role: "Full Stack Developer",
    period: "2024 - Present",
    description:
      "development of scalable web applications using Next.js and Node.js. Learning and implementing best practices.",
    technologies: ["Next.js", "TypeScript", "SQL", "AWS", "Python"],
  },
  {
    company: "Web Experts Nepal.",
    role: "Frontend Developer",
    period: "2022 - 2024",
    description:
      "Built and maintained multiple client projects. collaborated with developers to create pixel-perfect implementations.",
    technologies: ["Wordpress", "SCSS", "PHP", "GSAP"],
  },
  {
    company: "Inithive Solutions",
    role: "Web Developer Internship",
    period: "2022 - 2022",
    description:
      "Developed responsive user interfaces and handled the backend development.",
    technologies: ["React", "JavaScript", "CSS", "REST APIs"],
  },
]

export function Experience() {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(experiences.length).fill(false))

  useEffect(() => {
    const observers = experienceRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer, index) => {
        if (observer && experienceRefs.current[index]) {
          observer.disconnect()
        }
      })
    }
  }, [])

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Work Experience</h2>
            <p className="text-lg text-muted-foreground text-pretty">My professional journey in software development</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  
                  ref={(el) => { experienceRefs.current[index] = el }}
                  className={`relative transition-all duration-700 ${
                    visibleItems[index]
                      ? index % 2 === 0
                        ? "animate-slide-in-left opacity-100"
                        : "animate-slide-in-right opacity-100"
                      : "opacity-0"
                  } ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"} md:w-1/2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute hidden md:block top-6 h-4 w-4 rounded-full bg-primary border-4 border-background transition-all duration-500 ${
                      visibleItems[index] ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    } ${index % 2 === 0 ? "left-0 md:left-auto md:right-[-9px]" : "left-0 md:left-[-9px]"}`}
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  />
                  <Card className="p-6 space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-lg">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
