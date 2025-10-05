"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import ScrollFadeIn from "@/hooks/use-fade-in"

const projects = [
  {
    title: "E-Commerce WebApps",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/website.jpg",
    technologies: ["WordPress", "PHP", "GIT", "React", "Next.js", "Node.js", "MySQL", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "spam_classifier_NB",
    description:
      "Built a spam classifier using Naive Bayes to accurately detect and filter spam messages from legitimate text data.",
    image: "/spam.jpg",
    technologies: ["Python", "Scikit-learn", "Naive Bayes", "Matplotlib"],
    github: "https://github.com/robinpats182/spam_classifier_NB.git",
    demo: "https://github.com/robinpats182/spam_classifier_NB.git",
  },
  {
    title: "YOLOv8_Object_Detection",
    description: "Developed an object detection system using YOLOv8 to identify and classify objects in images and videos with high accuracy and real-time performance.",
    image: "/AI.jpg",
    technologies: ["Python", "Ultralytics YOLOv8", "NumPy", "Google Colab", "PyTorch"],
    github: "https://github.com/robinpats182/YOLOv8_Object_Detection.git",
    demo: "https://github.com/robinpats182/YOLOv8_Object_Detection.git",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, visible } = ScrollFadeIn();


  return (
    <Card
      ref={ref}
      className={`overflow-hidden group pt-0 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      <div className="p-4 md:p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-xl transition-colors duration-300 group-hover:text-primary">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge
              key={tech}
              variant="secondary"
              className="transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-2">
          <Button
            variant="default"
            size="sm"
            className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40"
          >
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
            <Link href={project.github} target="_blank">
            Code
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

export function Projects() {
  const headerFadeIn = ScrollFadeIn();

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div
            ref={headerFadeIn.ref}
            className={`space-y-4 text-center transition-all duration-700 ${
              headerFadeIn.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
            <p className="text-lg text-muted-foreground text-pretty">Some of my recent work and side projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
