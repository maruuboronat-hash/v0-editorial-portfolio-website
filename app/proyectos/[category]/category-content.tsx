"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

interface CategoryContentProps {
  categoryData: {
    title: string
    description: string
    projects?: Array<{ id: string; title: string; image?: string }>
  }
}

export function CategoryContent({ categoryData }: CategoryContentProps) {
  return (
    <>
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/proyectos"
            className="group scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-8 inline-flex items-center gap-1.5"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span> Proyectos
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categoryData.projects?.map((project) => (
              <Link
                key={project.id}
                href={`/proyecto/${project.id}`}
                className="scroll-reveal-child group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
              >
                {/* PROJECT IMAGE */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30 px-4 text-center">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
                
                {/* PROJECT INFO */}
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <h2 className="font-heading text-lg md:text-xl transition-colors group-hover:text-brand">
                    {project.title}
                  </h2>
                  <span className="text-brand opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
