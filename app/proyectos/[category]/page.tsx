import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "./category-content"

const categoriesData = {
  "diseno-grafico": {
    title: "Diseño Gráfico",
    description: "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica desarrollados durante la carrera de Diseño Gráfico y Comunicación.",
    projects: [
          { 
      id: "libro-tecnico-manual", 
      title: "Libro técnico editorial I Manual",
      image: "/images/diseno-grafico/tecnico/tecnico-01.jpg"
    },
      
      { 
        id: "diario-oasis", 
        title: "Diario de Oasis I Backstage Times",
        image: "/images/diseno-grafico/oasis/oasis-02.jpg"
      },
      { 
 id: "revistas-editorial", 
  title: "Revistas I Colección de Arte Amalia Lacroze de Fortabat",
  image: "/images/diseno-grafico/revistas-editorial/portada-editorial2.jpg"
      },
{ 
  id: "fanzine-infancia", 
  title: "Fanzine | Infancia",
  image: "/images/diseno-grafico/fanzine/fanzine-01.jpg"
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
  description: "Proyectos realizados en empresas donde el diseño funciona como herramienta estratégica para comunicar, organizar información y mejorar procesos internos y comerciales.",
  projects: [
    { 
      id: "carteles-bosch", 
      title: "Robert Bosch Argentina",
      image: "/images/corporativo/logos/portadas-logos-05.jpg"
    },
    { 
      id: "power-bi-picklog", 
      title: "Pick&Log",
      image: "/images/corporativo/logos/portadas-logos-01.jpg"
    }
    // { 
    //   id: "cantiere", 
    //   title: "Cantiere SA",
    //   image: "/images/corporativo/logos/portadas-logos-02.jpg"
    // }
  ],
},

  "indumentaria-ilustracion": {
    title: "Indumentaria e Ilustración",
    description: "Serie de proyectos vinculados al diseño de indumentaria y la experimentación visual desde el cuerpo, la forma y la textura.",
    projects: [
      { 
        id: "coleccion-portuguese", 
        title: "Colección Portuguese",
        image: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-portada-blanco.jpg"
      },
      { 
        id: "fotografia-moda", 
        title: "Fotografía de moda",
        image: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-portada.jpg"
      },
      { 
        id: "jeaneria-fichas", 
        title: "Jeanería I Fichas técnicas y geometrales",
        image: "/images/indumentaria-ilustracion/jeaneria/fichas-portada.jpg"
      },
      { 
        id: "prototipos-indumentaria", 
        title: "Prototipos de indumentaria",
        image: "/images/indumentaria-ilustracion/prototipos/protos-portada.jpg"
      },
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

  // NUEVA CATEGORÍA: EDICIÓN DE VIDEO
"edicion-video": {
  title: "Edición de Video",
  description: "Serie de piezas audiovisuales desarrolladas en el marco de la materia Diseño IV, a partir de material propio y preexistente. Las propuestas integran edición, animación y diseño sonoro, con foco en el ritmo, la construcción de sentido y la coherencia estética en cada proyecto.",
  projects: [
      { 
        id: "portfolio-video", 
        title: "Portfolio",
        image: "/images/edicion-video/portada05.png"
      },
      { 
        id: "mini-skirts-video", 
        title: "Mini Skirts - Mary Quant",
        image: "/images/edicion-video/portada03.png"
      },
      { 
        id: "vlog-diario-video", 
        title: "Vlog Diario",
        image: "/images/edicion-video/portada04.png"
      },
      { 
      id: "animated-teaser", 
      title: "Animated Teaser",
      image: "/images/edicion-video/interfaces.png"
    }, 
    
    { 
        id: "motocross-video", 
        title: "Motocross",
        image: "/images/edicion-video/portada02.jpeg"
      },
      { 
        id: "indumentaria-video", 
        title: "Indumentaria",
        image: "/images/edicion-video/portada01.png"
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
