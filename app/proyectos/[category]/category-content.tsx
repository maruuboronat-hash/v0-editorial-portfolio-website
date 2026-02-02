"use client"

import Link from "next/link"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

interface CategoryContentProps {
  categoryData: {
    title: string
    description: string
    projects: Array<{ id: string; title: string }>
  }
}

export function CategoryContent({ categoryData }: CategoryContentProps) {
  return (
    <>
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/proyectos"
            className="scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            Proyectos
          </Link>
          <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {categoryData.title}
          </h1>
          <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {categoryData.description}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {categoryData.projects.map((project) => (
              <Link
                key={project.id}
                href={`/proyecto/${project.id}`}
                className="scroll-reveal-child group bg-background"
              >
                {/* Project image placeholder */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30 px-4 text-center">
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
                
                {/* Project info */}
                <div className="py-6">
                  <h2 className="font-heading text-lg md:text-xl group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
