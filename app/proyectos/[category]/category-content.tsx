"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/hooks/use-scroll-reveal"
import { useLanguage } from "@/components/language-provider"

// ============================================================
//  MAPEO DE URLs A CLAVES DEL DICCIONARIO
// ============================================================
const categoryMap: Record<string, string> = {
  "diseno-grafico": "diseno_grafico",
  "corporativo": "corporativo",
  "indumentaria-ilustracion": "indumentaria",
  "personales": "personales",
  "edicion-video": "edicion_video",
}

// ============================================================
//  COMPONENTE
// ============================================================
interface CategoryContentProps {
  categoryData: {
    projects: Array<{ id: string; title: string; image?: string }>
  }
}

export function CategoryContent({ categoryData }: CategoryContentProps) {
  const { t } = useLanguage()

  // ============================================================
  //  DETECTAR QUÉ CATEGORÍA ES (usando la URL o el primer proyecto)
  // ============================================================
  // No tenemos acceso a la URL directamente, así que usamos
  // el ID del primer proyecto para inferir la categoría
  let categoryKey = "diseno_grafico" // fallback

  if (categoryData.projects && categoryData.projects.length > 0) {
    const firstProjectId = categoryData.projects[0].id
    
    // Mapeo de IDs de proyecto a categorías
    const projectToCategory: Record<string, string> = {
      // Diseño Gráfico
      "libro-tecnico-manual": "diseno_grafico",
      "diario-oasis": "diseno_grafico",
      "revistas-editorial": "diseno_grafico",
      "fanzine-infancia": "diseno_grafico",
      "postales-cortazar": "diseno_grafico",
      "revista-clara-cava": "diseno_grafico",
      "afiche-3d-cordoba": "diseno_grafico",
      "afiches-tipograficos": "diseno_grafico",
      "revista-balvanera": "diseno_grafico",
      "modelado-3d-objetos": "diseno_grafico",
      "cuento-infantil-3d": "diseno_grafico",
      // Corporativo
      "carteles-bosch": "corporativo",
      "power-bi-picklog": "corporativo",
      // Indumentaria
      "coleccion-portuguese": "indumentaria-ilustracion",
      "fotografia-moda": "indumentaria-ilustracion",
      "jeaneria-fichas": "indumentaria-ilustracion",
      "prototipos-indumentaria": "indumentaria-ilustracion",
      // Personales
      "video-casamiento-1995": "personales",
      "fotografia-analogica": "personales",
      // Edición de Video
      "portfolio-video": "edicion-video",
      "mini-skirts-video": "edicion-video",
      "vlog-diario-video": "edicion-video",
      "animated-teaser": "edicion-video",
      "motocross-video": "edicion-video",
      "indumentaria-video": "edicion-video",
      "animaciones-video": "edicion-video",
    }

    const categoriaUrl = projectToCategory[firstProjectId] || "diseno-grafico"
    categoryKey = categoryMap[categoriaUrl] || "diseno_grafico"
  }

  // ============================================================
  //  OBTENER TÍTULO Y DESCRIPCIÓN TRADUCIDOS
  // ============================================================
  const tituloTraducido = t.categorias[categoryKey as keyof typeof t.categorias]?.titulo || ""
  const descripcionTraducida = t.categorias[categoryKey as keyof typeof t.categorias]?.descripcion || ""

  return (
    <>
      <ScrollReveal as="header" className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/proyectos"
            className="group scroll-reveal-child text-xs uppercase tracking-widest text-muted-foreground hover:text-brand transition-colors mb-8 inline-flex items-center gap-1.5"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span> {t.nav.proyectos}
          </Link>
          <h1 className="scroll-reveal-child font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {tituloTraducido}
          </h1>
          <p className="scroll-reveal-child text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {descripcionTraducida}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categoryData.projects.map((project) => {
              const tituloProyecto = t.proyectos_detalle?.[project.id]?.titulo || project.title

              return (
                <Link
                  key={project.id}
                  href={`/proyecto/${project.id}`}
                  className="scroll-reveal-child group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={tituloProyecto}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30 px-4 text-center">
                        {tituloProyecto}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>
                  
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <h2 className="font-heading text-lg md:text-xl transition-colors group-hover:text-brand">
                      {tituloProyecto}
                    </h2>
                    <span className="text-brand opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
