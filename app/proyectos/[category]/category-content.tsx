"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"

// Interfaces para los tipos de datos
interface Project {
  id: string
  title: string
  image?: string
}

interface Empresa {
  id: string
  nombre: string
  imagen: string
  descripcion?: string
  categorias?: Array<{
    subtitulo: string
    imagenes: string[]
  }>
}

interface CategoryContentProps {
  categoryData: {
    title: string
    description: string
    // Para categorías normales (diseño gráfico, personales, etc.)
    projects?: Array<Project>
    // Para corporativo (puede tener empresas con o sin categorías)
    empresas?: Array<Empresa>
  }
}

export function CategoryContent({ categoryData }: CategoryContentProps) {
  // ========== CASO 1: ES CORPORATIVO CON EMPRESAS ==========
  if (categoryData.empresas) {
    // Mostrar lista de empresas (nivel 1 de corporativo)
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

        {/* LISTA DE EMPRESAS */}
        <ScrollReveal as="section" className="px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {categoryData.empresas.map((empresa) => (
                <Link
                  key={empresa.id}
                  href={`/proyectos/corporativo/${empresa.id}`} // ← Enlaza a página específica
                  className="scroll-reveal-child group bg-background"
                >
                  {/* IMAGEN DE LA EMPRESA */}
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <Image
                      src={empresa.imagen}
                      alt={empresa.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>
                  
                  {/* INFO DE LA EMPRESA */}
                  <div className="py-6">
                    <h2 className="font-heading text-lg md:text-xl group-hover:opacity-70 transition-opacity mb-2">
                      {empresa.nombre}
                    </h2>
                    {empresa.descripcion && (
                      <p className="text-sm text-muted-foreground">
                        {empresa.descripcion}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </>
    )
  }

  // ========== CASO 2: CATEGORÍAS NORMALES (DISEÑO GRÁFICO, PERSONALES, ETC.) ==========
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
            {categoryData.projects?.map((project) => (
              <Link
                key={project.id}
                href={`/proyecto/${project.id}`}
                className="scroll-reveal-child group bg-background"
              >
                {/* PROJECT IMAGE */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30 px-4 text-center">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
                
                {/* PROJECT INFO */}
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
