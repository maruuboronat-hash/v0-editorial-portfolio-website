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
    description: "Trabajos realizados desde el área de Marketing y Comunicación. Combino diseño, estrategia y automatización para mejorar procesos y comunicación visual interna.",
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
      },
      { 
        id: "cantiere", 
        title: "Cantiere SA",
        image: "/images/corporativo/logos/portadas-logos-02.jpg"
      },
    ],
  },

  "indumentaria-ilustracion": {
    title: "Indumentaria e Ilustración",
    description: "Serie de proyectos vinculados al diseño de indumentaria y la experimentación visual desde el cuerpo, la forma y la textura.",
    projects: [
// INDUMENTARIA E ILUSTRACIÓN projects
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
"coleccion-portuguese": {
  title: "Colección Portuguese",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  description: "Mini colección inspirada en la estética 'Portuguese', centrada en el uso del color, las texturas y los detalles artesanales. El proyecto incluye el desarrollo de fichas técnicas, geometrales y figurines, junto con una propuesta conceptual que combina identidad cultural y diseño contemporáneo.",
  sections: [
    { 
      type: "text", 
      title: "Colección Portuguese", 
      content: "Mini colección inspirada en la estética 'Portuguese', centrada en el uso del color, las texturas y los detalles artesanales. El proyecto incluye el desarrollo de fichas técnicas, geometrales y figurines, junto con una propuesta conceptual que combina identidad cultural y diseño contemporáneo." 
    },
    { 
      type: "infinite-carousel", 
      images: [
        // { src: "/images/indumentaria/portuguese/portuguese-01.jpg", alt: "Colección Portuguese 1" },
        // { src: "/images/indumentaria/portuguese/portuguese-02.jpg", alt: "Colección Portuguese 2" },
        // { src: "/images/indumentaria/portuguese/portuguese-03.jpg", alt: "Colección Portuguese 3" },
      ]
    }
  ]
},
"fotografia-moda": {
  title: "Fotografía de moda",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  description: "Serie de fotografías realizadas para proyectos de indumentaria, enfocadas en representar el concepto central de cada diseño. A través de la composición, la luz y la dirección de arte, las imágenes buscan resaltar la identidad visual y el carácter expresivo de cada prenda.",
  sections: [
    { 
      type: "text", 
      title: "Fotografía de moda", 
      content: "Serie de fotografías realizadas para proyectos de indumentaria, enfocadas en representar el concepto central de cada diseño. A través de la composición, la luz y la dirección de arte, las imágenes buscan resaltar la identidad visual y el carácter expresivo de cada prenda." 
    },
    { 
      type: "infinite-carousel", 
      images: [
        // { src: "/images/indumentaria/fotografia/fotografia-01.jpg", alt: "Fotografía 1" },
        // { src: "/images/indumentaria/fotografia/fotografia-02.jpg", alt: "Fotografía 2" },
        // { src: "/images/indumentaria/fotografia/fotografia-03.jpg", alt: "Fotografía 3" },
      ]
    }
  ]
},
"jeaneria-fichas": {
  title: "Jeanería I Fichas técnicas y geometrales",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  description: "Proyecto centrado en el desarrollo técnico de prendas de denim. Incluye fichas técnicas detalladas, geometrales y especificaciones de confección que abordan la estructura, los materiales y los procesos de armado de cada pieza.",
  sections: [
    { 
      type: "text", 
      title: "Jeanería - Fichas técnicas y geometrales", 
      content: "Proyecto centrado en el desarrollo técnico de prendas de denim. Incluye fichas técnicas detalladas, geometrales y especificaciones de confección que abordan la estructura, los materiales y los procesos de armado de cada pieza." 
    },
    { 
      type: "infinite-carousel", 
      images: [
        // { src: "/images/indumentaria/jeaneria/jeaneria-01.jpg", alt: "Ficha técnica 1" },
        // { src: "/images/indumentaria/jeaneria/jeaneria-02.jpg", alt: "Ficha técnica 2" },
        // { src: "/images/indumentaria/jeaneria/jeaneria-03.jpg", alt: "Geometral 1" },
      ]
    }
  ]
},
"prototipos-indumentaria": {
  title: "Prototipos de indumentaria",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  description: "Desarrollo de prendas confeccionadas a mano durante la cursada de Diseño de Indumentaria. Cada prototipo explora la relación entre moldería, materiales y construcción, poniendo el foco en la experimentación con formas, terminaciones y el concepto particular que guía cada proyecto.",
  sections: [
    { 
      type: "text", 
      title: "Prototipos de indumentaria", 
      content: "Desarrollo de prendas confeccionadas a mano durante la cursada de Diseño de Indumentaria. Cada prototipo explora la relación entre moldería, materiales y construcción, poniendo el foco en la experimentación con formas, terminaciones y el concepto particular que guía cada proyecto." 
    },
    { 
      type: "infinite-carousel", 
      images: [
        // { src: "/images/indumentaria/prototipos/prototipo-01.jpg", alt: "Prototipo 1" },
        // { src: "/images/indumentaria/prototipos/prototipo-02.jpg", alt: "Prototipo 2" },
        // { src: "/images/indumentaria/prototipos/prototipo-03.jpg", alt: "Prototipo 3" },
      ]
    }
  ]
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
