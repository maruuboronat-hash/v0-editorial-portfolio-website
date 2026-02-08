import Link from "next/link"
import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "./category-content"

const categoriesData: Record<string, {
  title: string
  description: string
  projects: Array<{ id: string; title: string; image?: string }> // ← AGREGADO: image?
}> = {
  "diseno-grafico": {
    title: "Diseno Gráfico",
    description: "Proyectos de diseno editorial, diseno 3D, comunicacion visual e investigacion tipografica desarrollados durante la carrera de Diseno Grafico y Comunicacion.",
    projects: [
      { 
        id: "diario-oasis", 
        title: "Diario de Oasis I Backstage Times",
        image: "/images/diseno-grafico/oasis/oasis-02.jpg"
      },
{ 
  id: "postales-cortazar", 
  title: "Postales I Julio Cortazar",
  image: "/images/diseno-grafico/postales/postales-portada.jpg" // ← Imagen de portada
},
      { 
  id: "revista-clara-cava", 
  title: "Revista Clara Cava",
  image: "/images/diseno-grafico/clara-cava/clara-01.jpg" // ← Imagen de portada
},
      { 
  id: "afiche-3d-cordoba", 
  title: "Afiche 3D I Córdoba",
  image: "/images/diseno-grafico/afiche3d/cordoba-01.jpg" // ← Imagen de portada
},
            { 
  id: "afiches-tipograficos", 
  title: "Afiches tipográficos",
  image: "/images/diseno-grafico/afiche-tipografico/tipografia-portada.jpg" // ← Imagen de portada
},
      { 
  id: "revista-balvanera", 
  title: "Revista Balvanera I Tapa y contratapa",
  image: "/images/diseno-grafico/afiche-tipografico/balvanera-portada.jpg" // ← Imagen de portada
},
      { 
  id: "modelado-3d-objetos", 
  title: "Modelado 3D I Objetos cotidianos",
  image: "/images/diseno-grafico/modelado3d/modelado-02.jpg" // ← Imagen de portada
},
      { 
  id: "cuento-infantil-3d", 
  title: "Cuento infantil I Ilustración 3D",
  image: "/images/diseno-grafico/infantil/infantil-portada.jpg" // ← Imagen de portada
},
      

    ],
  },
  "corporativo": {
    title: "Corporativo",
    description: "Trabajos realizados desde el área de Marketing y Comunicación. En empresas como Bosch Mobility Aftermarket y Pick&Log. Combino diseño, estrategia y automatización para mejorar procesos.",
    projects: [
            { 
  id: "carteles-bosch", 
  title: "Carteles en vía pública I Robert Bosch Argentina",
  image: "/images/corporativo/via-publica/viapublica-02.jpg" // ← Imagen de portada
},
                  { 
  id: "power-bi-picklog", 
  title: "Power BI I Plantillas de logística I Pick&Log",
  image: "/images/corporativo/powerbi/power-01.jpg" // ← Imagen de portada
},
    ],
  },
  "indumentaria-ilustracion": {
    title: "Indumentaria e Ilustración",
    description: "Serie de proyectos vinculados al diseno de indumentaria y la experimentacion visual desde el cuerpo, la forma y la textura.",
    projects: [
      { id: "indumentaria-placeholder", title: "Proyecto de Indumentaria" },
    ],
  },
  "personales": {  // ← CORREGIDO: estaba mal indentado
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
}  // ← ESTA LLAVE FALTABA

type PageParams = Promise<{ category: string }>

export default async function CategoryPage({ params }: { params: PageParams }) {
  const { category } = await params
  const categoryData = categoriesData[category]

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
