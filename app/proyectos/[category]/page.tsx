import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "./category-content"

const categoriesData = {
  "diseno-grafico": {
    title: "Diseño Gráfico",
    description: "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica desarrollados durante la carrera de Diseño Gráfico y Comunicación.",
    projects: [
      { 
        id: "diario-oasis", 
        title: "Diario de Oasis I Backstage Times",
        image: "/images/diseno-grafico/oasis/oasis-02.jpg"
      },
      { 
        id: "postales-cortazar", 
        title: "Postales I Julio Cortazar",
        image: "/images/diseno-grafico/postales/postales-portada.jpg"
      },
      { 
        id: "revista-clara-cava", 
        title: "Revista Clara Cava",
        image: "/images/diseno-grafico/clara-cava/clara-01.jpg"
      },
      { 
        id: "afiche-3d-cordoba", 
        title: "Afiche 3D I Córdoba",
        image: "/images/diseno-grafico/afiche3d/cordoba-01.jpg"
      },
      { 
        id: "afiches-tipograficos", 
        title: "Afiches tipográficos",
        image: "/images/diseno-grafico/afiche-tipografico/tipografia-portada.jpg"
      },
      { 
        id: "revista-balvanera", 
        title: "Revista Balvanera I Tapa y contratapa",
        image: "/images/diseno-grafico/balvanera/balvanera-portada-01.jpg"
      },
      { 
        id: "modelado-3d-objetos", 
        title: "Modelado 3D I Objetos cotidianos",
        image: "/images/diseno-grafico/modelado3d/modelado-02.jpg"
      },
      { 
        id: "cuento-infantil-3d", 
        title: "Cuento infantil I Ilustración 3D",
        image: "/images/diseno-grafico/infantil/infantil-portada-01.jpg"
      },
    ],
  },

  "corporativo": {
    title: "Corporativo",
    description: "Trabajos realizados desde el área de Marketing y Comunicación. En empresas como Robert Bosch Argentina, Pick&Log y Cantiere SA. Combino diseño, estrategia y automatización para mejorar procesos y comunicación visual interna.",
    empresas: [
      { 
        id: "bosch", 
        nombre: "Robert Bosch Argentina",
        imagen: "/images/corporativo/via-publica/viapublica-02.jpg",
        descripcion: "Desarrollo de material gráfico corporativo, campañas de comunicación y herramientas de marketing visual.",
        categorias: [
          {
            subtitulo: "Cartelería Vía Pública",
            imagenes: [
              "/images/corporativo/bosch/via-publica-01.jpg",
              "/images/corporativo/bosch/via-publica-02.jpg",
              "/images/corporativo/bosch/via-publica-03.jpg",
            ]
          },
          {
            subtitulo: "Material POP",
            imagenes: [
              "/images/corporativo/bosch/pop-01.jpg",
              "/images/corporativo/bosch/pop-02.jpg",
              "/images/corporativo/bosch/pop-03.jpg",
            ]
          },
          {
            subtitulo: "Aplicación de Merchandising",
            imagenes: [
              "/images/corporativo/bosch/merchandising-01.jpg",
              "/images/corporativo/bosch/merchandising-02.jpg",
              "/images/corporativo/bosch/merchandising-03.jpg",
            ]
          }
        ]
      },
      { 
        id: "picklog", 
        nombre: "Pick&Log",
        imagen: "/images/corporativo/powerbi/power-01.jpg",
        descripcion: "Desarrollo de dashboards y herramientas de visualización de datos para análisis logístico.",
        categorias: [
          {
            subtitulo: "Plantillas para Power BI",
            imagenes: [
              "/images/corporativo/picklog/powerbi-01.jpg",
              "/images/corporativo/picklog/powerbi-02.jpg",
              "/images/corporativo/picklog/powerbi-03.jpg",
            ]
          }
        ]
      },
      { 
        id: "cantiere", 
        nombre: "Cantiere SA",
        imagen: "/images/corporativo/cantiere/portada.jpg",
        descripcion: "Diseño web y desarrollo de identidad visual para empresa de construcción.",
        categorias: [
          {
            subtitulo: "Diseño y estructura de Página Web",
            imagenes: [
              "/images/corporativo/cantiere/web-01.jpg",
              "/images/corporativo/cantiere/web-02.jpg",
              "/images/corporativo/cantiere/web-03.jpg",
            ]
          }
        ]
      },
    ],
  },

  "indumentaria-ilustracion": {
    title: "Indumentaria e Ilustración",
    description: "Serie de proyectos vinculados al diseño de indumentaria y la experimentación visual desde el cuerpo, la forma y la textura.",
    projects: [
      { id: "indumentaria-placeholder", title: "Proyecto de Indumentaria" },
    ],
  },

  "personales": {
    title: "Proyectos Personales",
    description: "Exploraciones creativas y proyectos experimentales. Trabajos que nacen de la curiosidad y la libertad creativa.",
    projects: [
      { 
        id: "video-casamiento-1995", 
        title: "Video de Casamiento y Luna de Miel I 1995",
        image: "/images/proyectos-personales/video-casamiento/casamiento-02.png"
      },
      { 
        id: "fotografia-analogica", 
        title: "Fotografía analógica",
        image: "/images/proyectos-personales/analogicas/analogicas-portada.JPG"
      },
    ],
  },
}

type PageParams = Promise<{ category: string }>

export default async function CategoryPage({ params }: { params: PageParams }) {
  const { category } = await params
  const categoryData = categoriesData[category as keyof typeof categoriesData]

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="pt-24 min-h-screen">
      <CategoryContent categoryData={categoryData} />
      <ContactSection />
    </div>
  )
}
