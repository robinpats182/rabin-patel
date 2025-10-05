"use client"

import ScrollFadeIn  from "@/hooks/use-fade-in"
import { Code2, Database, Brain, Rocket, Server, Braces, Cpu, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
  {
    icon: Code2,
    name: "JavaScript",
    description: "ES6+, TypeScript",
  },
  {
    icon: Rocket,
    name: "React & Next.js",
    description: "Modern frameworks",
  },
  {
    icon: Server,
    name: "Node.js",
    description: "Backend development",
  },
  {
    icon: Database,
    name: "Databases",
    description: "SQL, MongoDB, Redis",
  },
  {
    icon: Brain,
    name: "Machine Learning",
    description: "TensorFlow, PyTorch",
  },
  {
    icon: Cpu,
    name: "Artificial Intelligence",
    description: "NLP, Computer Vision",
  },
  {
    icon: Braces,
    name: "Python",
    description: "object oriented programming",
  },
  {
    icon: Zap,
    name: "Performance",
    description: "Optimization expert",
  },
]

export function Skills() {
  const fadeIn = ScrollFadeIn();

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div ref={fadeIn.ref} className={`space-y-4 text-center transition-all duration-2000 ${
                 fadeIn.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>
          <div 
          ref={fadeIn.ref} 
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-2000 ${
                  fadeIn.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {skills.map((skill, index) => (
              <Card
              
                key={skill.name}
                className={`p-6 space-y-4 hover:border-primary/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:rotate-1 cursor-pointer 
                `}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12">
                  <skill.icon className="h-6 w-6 text-primary transition-all duration-500 group-hover:scale-125" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold transition-colors duration-300 group-hover:text-primary">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
