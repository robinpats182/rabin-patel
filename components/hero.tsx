"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollFadeIn from "@/hooks/use-fade-in";

export function Hero() {
  const { ref, visible } = ScrollFadeIn();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-6">
          <div
            ref={ref}
                className={`transition-all duration-2000 ${
                 visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
          >
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm animate-pulse">
                Hi, my name is
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Rabin Patel
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground text-balance">
                Full Stack Developer
              </h2>
            </div>
            <h3 className="text-xl md:text-2xl font-light mb-2">
              Code, Creativity & a Bit Of Magic
            </h3>
            <p className="text-md text-muted-foreground leading-relaxed text-pretty mb-4 mt-8">
              I’m a{" "}
              <span className="font-normal text-primary italic text-xl transition-all ease-in-out">
                Full Stack developer
              </span>{" "}
              who loves blending clean code with creative flair. When I’m not
              perfecting,{" "}
              <span className="font-normal text-primary italic text-xl transition-all ease-in-out">
                I’m exploring
              </span>
            </p>
            <p className="text-md text-muted-foreground leading-relaxed text-pretty mb-8">
              curious about how smart tech can{" "}
              <span className="font-normal text-primary italic text-xl transition-all ease-in-out">
                shape tomorrow’s experiences.
              </span>{" "}
              I enjoy{" "}
              <span className="font-normal text-primary italic text-xl transition-all ease-in-out">
                turning ideas
              </span>{" "}
              into sleek , interactive solutions that feel as fun to use as they
              are functional.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Button
                variant="default"
                size="default"
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
                onClick={() => window.open("/Rabin_Patel_DE_CV.pdf", "_blank")}
              >
                <FileText className="h-4 w-4" />
                View Resume
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className=" duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:rotate-12 bg-transparent"
                >
                  <Link href="https://github.com/robinpats182" target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className=" duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:rotate-12 bg-transparent"
                >
                  <Link href="https://www.linkedin.com/in/rabin-patel-709814239" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className=" duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:rotate-12 bg-transparent"
                >
                  <Link href="mailto:robinpats182@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div
            ref={ref}
            className={`transition-all duration-2000 delay-250 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-square max-w-80 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl animate-pulse animate-float" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 bg-card transition-all duration-500 hover:border-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
