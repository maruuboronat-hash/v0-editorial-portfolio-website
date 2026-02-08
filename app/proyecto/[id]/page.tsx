import Link from "next/link"
import { notFound } from "next/navigation"
import { ProjectSections, type SectionType } from "@/components/project-sections"
import { ContactSection } from "@/components/contact-section"

// Project data with real content
const projectsData: Record<string, {
  title: string
  category: string
  categorySlug: string
  description: string
  sections: SectionType[]
}> = {
  // DISEÑO GRÁFICO projects
  "diario-oasis": {
    title: "Diario de Oasis I Backstage Times",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Proyecto editorial que combina investigación visual, narrativa y diseño gráfico. Desarrollado como una revista musical inspirada en la banda británica Oasis, explora su historia, estética y legado cultural a través de recursos editoriales, tipográficos y fotográficos. El enfoque está puesto en la dirección de arte, la grilla editorial y la construcción de una identidad visual coherente con el universo de la banda.",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/oasis/oasis-01.jpg", alt: "Diario Oasis 1" },
        { src: "/images/diseno-grafico/oasis/oasis-02.jpg", alt: "Diario Oasis 2" },
        { src: "/images/diseno-grafico/oasis/oasis-03.jpg", alt: "Diario Oasis 3" },
        { src: "/images/diseno-grafico/oasis/oasis-04.jpg", alt: "Diario Oasis 4" },
        { src: "/images/diseno-grafico/oasis/oasis-05.jpg", alt: "Diario Oasis 5" },
        { src: "/images/diseno-grafico/oasis/oasis-06.jpg", alt: "Diario Oasis 6" },
        { src: "/images/diseno-grafico/oasis/oasis-07.jpg", alt: "Diario Oasis 7" },
      ]},
    ],
  },
  "postales-cortazar": {
    title: "Postales I Julio Cortázar",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Serie de postales conceptuales inspiradas en Historia verídica, un cuento de Julio Cortázar. El proyecto explora la fragilidad, el azar y la poética de lo cotidiano a través de la composición visual y el uso simbólico del color y la forma. Cada postal funciona como un fragmento independiente, pero en conjunto conforman una narrativa abierta y sensible.",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/postales/postales-01.jpg", alt: "Postal Cortázar 1" },
        { src: "/images/diseno-grafico/postales/postales-02.jpg", alt: "Postal Cortázar 2" },
        { src: "/images/diseno-grafico/postales/postales-03.jpg", alt: "Postal Cortázar 3" },
        // Agregá más si tenés más imágenes
      ]},
    ],
  },
  "revista-clara-cava": {
    title: "Revista Clara Cava",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Proyecto editorial inspirado en la artista argentina Clara Cava. La revista propone una lectura visual de su universo musical a través del color, la tipografía y la composición. Combina análisis gráfico y diseño de layout para construir una identidad que refleja la experimentación y sensibilidad presentes en su obra.",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/clara-cava/clara-01.jpg", alt: "Clara 01" },
        { src: "/images/diseno-grafico/clara-cava/clara-02.jpeg", alt: "Clara 02" },
        { src: "/images/diseno-grafico/clara-cava/clara-03.jpeg", alt: "Clara 03" },
        { src: "/images/diseno-grafico/clara-cava/clara-04.jpeg", alt: "Clara 04" },
        { src: "/images/diseno-grafico/clara-cava/clara-05.jpeg", alt: "Clara 05" },
        { src: "/images/diseno-grafico/clara-cava/clara-06.jpeg", alt: "Clara 06" },
        { src: "/images/diseno-grafico/clara-cava/clara-07.jpeg", alt: "Clara 07" },
        { src: "/images/diseno-grafico/clara-cava/clara-08.jpeg", alt: "Clara 08" },
        // Agregá más si tenés más imágenes
      ]},
    ],
  },
  "afiche-3d-cordoba": {
    title: "Afiche 3D I Córdoba",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Composición tridimensional inspirada en la provincia de Córdoba, Argentina. El proyecto combina elementos gráficos y volumétricos para reinterpretar íconos característicos de su paisaje y cultura, como el Reloj Cucú y los colores serranos. Basado en la identidad visual y el lenguaje gráfico presentes en la página oficial de turismo de la provincia, busca transmitir su esencia desde un enfoque contemporáneo a través del modelado y la iluminación digital.",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/afiche3d/cordoba-01.jpg", alt: "Córdoba 01" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-02.jpg", alt: "Córdoba 02" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-03.jpg", alt: "Córdoba 03" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-04.jpg", alt: "Córdoba 04" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-05.jpg", alt: "Córdoba 05" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-06.jpg", alt: "Córdoba 06" },
        // Agregá más si tenés más imágenes
      ]},
    ],
  },
  "afiches-tipograficos": {
    title: "Afiches tipográficos",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Serie de afiches experimentales que exploran la relación entre forma, estructura y lenguaje visual a partir de la tipografía. Cada pieza combina composición, ritmo y contraste para comunicar ideas a través del signo tipográfico como elemento principal. El proyecto investiga cómo la letra puede trascender su función textual para transformarse en imagen y expresión visual.",
    sections: [
      { type: "two-column-grid", images: [
        { alt: "Afiche tipográfico 1" },
        { alt: "Afiche tipográfico 2" },
        { alt: "Afiche tipográfico 3" },
        { alt: "Afiche tipográfico 4" },
      ]},
      { type: "single-column-stack", images: [
        { alt: "Afiche tipográfico 5" },
        { alt: "Afiche tipográfico 6" },
        { alt: "Afiche tipográfico 7" },
        { alt: "Afiche tipográfico 8" },
        { alt: "Afiche tipográfico 9" },
        { alt: "Afiche tipográfico 10" },
      ]},
    ],
  },
  "cuento-infantil-3d": {
    title: "Cuento infantil I Ilustración 3D",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Proyecto editorial que combina narrativa, diseño y modelado tridimensional. Basado en El hombrecito del azulejo, cuento de Manuel Mujica Lainez, se desarrollaron los personajes y escenarios mediante ilustración 3D, integrando color, textura y volumen para construir un universo visual coherente con el relato. Además, se diseñó y maquetó el libro completo, trabajando la relación entre texto e imagen para potenciar la narrativa desde lo visual.",
    sections: [
      { type: "single-column-stack", images: [
        { alt: "Cuento infantil 1" },
        { alt: "Cuento infantil 2" },
        { alt: "Cuento infantil 3" },
        { alt: "Cuento infantil 4" },
        { alt: "Cuento infantil 5" },
      ]},
    ],
  },
  "modelado-3d-objetos": {
    title: "Modelado 3D I Objetos cotidianos",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Ejercicio de observación, modelado e iluminación digital a partir de tres objetos de uso cotidiano. El proyecto busca reproducir de forma precisa la materialidad, las proporciones y las condiciones lumínicas de cada elemento, explorando cómo el entorno y el punto de vista transforman su percepción. La propuesta combina técnica y composición para convertir objetos simples en escenas visualmente expresivas.",
    sections: [
      { type: "single-column-stack", images: [
        { alt: "Objeto cotidiano principal" },
      ]},
      { type: "two-column-grid", images: [
        { alt: "Objeto 1" },
        { alt: "Objeto 2" },
        { alt: "Objeto 3" },
        { alt: "Objeto 4" },
        { alt: "Objeto 5" },
        { alt: "Objeto 6" },
      ]},
    ],
  },
  "revista-balvanera": {
    title: "Revista Balvanera I Tapa y contratapa",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Diseño de tapa y contratapa para una revista inspirada en el barrio porteño de Balvanera. El proyecto toma como punto de partida su identidad visual, su ritmo urbano y la diversidad cultural que lo caracteriza. A través del uso del color, la tipografía y la composición, busca reflejar el pulso cotidiano del barrio y su mezcla entre historia, tránsito y vida local.",
    sections: [
      { type: "two-column-grid", images: [
        { alt: "Tapa Balvanera" },
        { alt: "Contratapa Balvanera" },
      ]},
    ],
  },

  // CORPORATIVO projects
  "carteles-bosch": {
    title: "Carteles en vía pública I Robert Bosch Argentina",
    category: "Corporativo",
    categorySlug: "corporativo",
    description: "Gracias a mi pasantía en Robert Bosch Argentina, pude diseñar y producir carteles para vía pública destinados a promocionar el Centro de Capacitación Bosch. Las piezas respetan la identidad visual de la marca y se adaptan a distintos formatos y soportes exteriores.",
    sections: [
      { type: "two-column-grid", images: [
        { alt: "Cartel Bosch 1" },
        { alt: "Cartel Bosch 2" },
        { alt: "Cartel Bosch 3" },
        { alt: "Cartel Bosch 4" },
        { alt: "Cartel Bosch 5" },
        { alt: "Cartel Bosch 6" },
      ]},
    ],
  },
  "power-bi-picklog": {
    title: "Power BI I Plantillas de logística I Pick&Log",
    category: "Corporativo",
    categorySlug: "corporativo",
    description: "Proyecto realizado para la empresa Pick&Log. Diseño de plantillas visuales y dashboards en Power BI para un sistema de gestión logística. El trabajo combina diseño funcional y visualización de datos para mejorar la lectura y el seguimiento de indicadores operativos.",
    sections: [
      { type: "single-column-stack", images: [
        { alt: "Dashboard principal" },
      ]},
      { type: "two-column-grid", images: [
        { alt: "Plantilla 1" },
        { alt: "Plantilla 2" },
        { alt: "Plantilla 3" },
        { alt: "Plantilla 4" },
      ]},
    ],
  },

  // INDUMENTARIA E ILUSTRACIÓN projects
  // (placeholder for future content - will be added when provided)
  "indumentaria-placeholder": {
    title: "Proyecto de Indumentaria",
    category: "Indumentaria e Ilustración",
    categorySlug: "indumentaria-ilustracion",
    description: "Serie de proyectos vinculados al diseño de indumentaria y la experimentación visual desde el cuerpo, la forma y la textura.",
    sections: [
      { type: "two-column-grid", images: [
        { alt: "Indumentaria 1" },
        { alt: "Indumentaria 2" },
      ]},
    ],
  },

  // PROYECTOS PERSONALES
  "video-casamiento-1995": {
    title: "Video de Casamiento y Luna de Miel I 1995",
    category: "Proyectos Personales",
    categorySlug: "personales",
    description: "Proyecto audiovisual realizado a partir del archivo familiar del casamiento y la luna de miel de mis padres en 1995. A través de la edición y el montaje del material original, el proyecto reinterpreta esas imágenes desde una mirada actual, explorando el paso del tiempo y cómo los registros personales pueden construir identidad.",
    sections: [
      { 
        type: "video-embed", 
        src: "/images/proyectos-personales/video-casamiento/casamiento.mp4", // ← RUTA DEL VIDEO
        caption: "Video de casamiento y luna de miel, 1995" 
      },
    ],
  },
  "fotografia-analogica": {
    title: "Fotografía analógica",
    category: "Proyectos Personales",
    categorySlug: "personales",
    description: "Serie de fotografías analógicas tomadas durante un viaje por Europa, con la intención de experimentar con nuevas técnicas y rollos vencidos. El proyecto funciona como un registro espontáneo que explora la luz, el color y la composición desde una mirada más personal.",
    sections: [
      { type: "gallery-with-centered-last", columns: 2, images: [
        { alt: "Foto analógica 1" },
        { alt: "Foto analógica 2" },
        { alt: "Foto analógica 3" },
        { alt: "Foto analógica 4" },
        { alt: "Foto analógica 5" },
        { alt: "Foto analógica 6" },
        { alt: "Foto analógica 7" },
        { alt: "Foto analógica 8" },
        { alt: "Foto analógica 9" },
        { alt: "Foto analógica 10" },
        { alt: "Foto analógica 11" },
        { alt: "Foto analógica 12" },
        { alt: "Foto analógica 13" },
      ]},
    ],
  },
}

// Get all projects in a category for "También te puede gustar" section
function getRelatedProjects(currentId: string, categorySlug: string) {
  return Object.entries(projectsData)
    .filter(([id, project]) => id !== currentId && project.categorySlug === categorySlug)
    .slice(0, 2)
    .map(([id, project]) => ({ id, ...project }))
}

function getProject(id: string) {
  return projectsData[id] || null
}

type PageParams = Promise<{ id: string }>

export default async function ProjectPage({ params }: { params: PageParams }) {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(id, project.categorySlug)

  return (
    <article className="pt-24 pb-24 min-h-screen">
      {/* Project Header */}
      <header className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto">  {/* CAMBIADO: 3xl → 5xl (más ancho) */}
          <Link
            href={`/proyectos/${project.categorySlug}`}
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            &larr; {project.category}
          </Link>
          
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight mb-8">
            {project.title}
          </h1>
          
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
      </header>

      {/* Project Sections - MISMO ANCHO QUE EL TEXTO */}
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">  {/* CAMBIADO: 3xl → 5xl (igual que arriba) */}
          <ProjectSections sections={project.sections} />
        </div>
      </div>

      {/* También te puede gustar section */}
      {relatedProjects.length > 0 && (
        <section className="px-6 md:px-12 mt-24 pt-16 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-lg mb-12">
              :) También te puede gustar:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/proyecto/${relatedProject.id}`}
                  className="group bg-background"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30">
                      {relatedProject.title}
                    </div>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                  </div>
                  <div className="p-6 border-t border-border">
                    <h3 className="font-heading text-xl group-hover:underline underline-offset-4">
                      {relatedProject.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <ContactSection />
    </article>
  )
}
