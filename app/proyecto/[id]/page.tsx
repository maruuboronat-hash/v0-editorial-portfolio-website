import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image" // ← IMPORTANTE: agregar este import
import { ProjectSections, type SectionType } from "@/components/project-sections"
import { ContactSection } from "@/components/contact-section"

// Project data with real content - CORREGIDO: agregado image en el tipo
const projectsData: Record<string, {
  title: string
  category: string
  categorySlug: string
  description: string
  image?: string // ← AGREGADO: image opcional
  sections: SectionType[]
}> = {
  // DISEÑO GRÁFICO projects
  "diario-oasis": {
    title: "Diario de Oasis I Backstage Times",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Proyecto editorial que combina investigación visual, narrativa y diseño gráfico. Desarrollado como una revista musical inspirada en la banda británica Oasis, explora su historia, estética y legado cultural a través de recursos editoriales, tipográficos y fotográficos. El enfoque está puesto en la dirección de arte, la grilla editorial y la construcción de una identidad visual coherente con el universo de la banda.",
    image: "/images/diseno-grafico/oasis/oasis-02.jpg",
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
    image: "/images/diseno-grafico/postales/postales-portada.jpg",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/postales/postales-01.jpg", alt: "Postal Cortázar 1" },
        { src: "/images/diseno-grafico/postales/postales-02.jpg", alt: "Postal Cortázar 2" },
        { src: "/images/diseno-grafico/postales/postales-03.jpg", alt: "Postal Cortázar 3" },
      ]},
    ],
  },
  "revista-clara-cava": {
    title: "Revista Clara Cava",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Proyecto editorial inspirado en la artista argentina Clara Cava. La revista propone una lectura visual de su universo musical a través del color, la tipografía y la composición. Combina análisis gráfico y diseño de layout para construir una identidad que refleja la experimentación y sensibilidad presentes en su obra.",
    image: "/images/diseno-grafico/clara-cava/clara-01.jpg",
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
      ]},
    ],
  },
  "afiche-3d-cordoba": {
    title: "Afiche 3D I Córdoba",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Composición tridimensional inspirada en la provincia de Córdoba, Argentina. El proyecto combina elementos gráficos y volumétricos para reinterpretar íconos característicos de su paisaje y cultura, como el Reloj Cucú y los colores serranos. Basado en la identidad visual y el lenguaje gráfico presentes en la página oficial de turismo de la provincia, busca transmitir su esencia desde un enfoque contemporáneo a través del modelado y la iluminación digital.",
    image: "/images/diseno-grafico/afiche3d/cordoba-01.jpg",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/afiche3d/cordoba-01.jpg", alt: "Córdoba 01" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-02.jpg", alt: "Córdoba 02" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-03.jpg", alt: "Córdoba 03" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-04.jpg", alt: "Córdoba 04" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-05.jpg", alt: "Córdoba 05" },
        { src: "/images/diseno-grafico/afiche3d/cordoba-06.jpg", alt: "Córdoba 06" },
      ]},
    ],
  },
  "afiches-tipograficos": {
    title: "Afiches tipográficos",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Serie de afiches experimentales que exploran la relación entre forma, estructura y lenguaje visual a partir de la tipografía. Cada pieza combina composición, ritmo y contraste para comunicar ideas a través del signo tipográfico como elemento principal. El proyecto investiga cómo la letra puede trascender su función textual para transformarse en imagen y expresión visual.",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-01.jpg", alt: "Afiche 01" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-02.jpg", alt: "Afiche 02" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-03.jpg", alt: "Afiche 03" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-04.jpg", alt: "Afiche 04" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-05.jpg", alt: "Afiche 05" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-06.jpg", alt: "Afiche 06" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-07.jpg", alt: "Afiche 07" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-08.jpg", alt: "Afiche 08" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-09.jpg", alt: "Afiche 09" },
        { src: "/images/diseno-grafico/afiche-tipografico/tipografia-10.jpg", alt: "Afiche 10" },
      ]},
    ],
  },
  "cuento-infantil-3d": {
    title: "Cuento infantil I Ilustración 3D",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Proyecto editorial que combina narrativa, diseño y modelado tridimensional. Basado en El hombrecito del azulejo, cuento de Manuel Mujica Lainez, se desarrollaron los personajes y escenarios mediante ilustración 3D, integrando color, textura y volumen para construir un universo visual coherente con el relato. Además, se diseñó y maquetó el libro completo, trabajando la relación entre texto e imagen para potenciar la narrativa desde lo visual.",
    sections: [
      { 
        type: "two-column-grid", 
        images: [
          { src: "/images/diseno-grafico/infantil/infantil-01.jpg", alt: "Infantil 01" },
          { src: "/images/diseno-grafico/infantil/infantil-02.jpg", alt: "Infantil 02" }
        ]
      },
      { 
        type: "single-column-stack", 
        images: [
          { src: "/images/diseno-grafico/infantil/infantil-03.jpg", alt: "Infantil 03" },
          { src: "/images/diseno-grafico/infantil/infantil-04.jpg", alt: "Infantil 04" }
        ]
      },
      { 
        type: "two-column-grid", 
        images: [
          { src: "/images/diseno-grafico/infantil/infantil-05.jpg", alt: "Infantil 05" },
          { src: "/images/diseno-grafico/infantil/infantil-06.jpg", alt: "Infantil 06" }
        ]
      }
    ]
  },
  "modelado-3d-objetos": {
    title: "Modelado 3D I Objetos cotidianos",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Ejercicio de observación, modelado e iluminación digital a partir de tres objetos de uso cotidiano. El proyecto busca reproducir de forma precisa la materialidad, las proporciones y las condiciones lumínicas de cada elemento, explorando cómo el entorno y el punto de vista transforman su percepción. La propuesta combina técnica y composición para convertir objetos simples en escenas visualmente expresivas.",
    sections: [
      { type: "single-column-stack", images: [
        { src: "/images/diseno-grafico/modelado3d/modelado-01.jpg", alt: "Modelado 01" },
        { src: "/images/diseno-grafico/modelado3d/modelado-02.jpg", alt: "Modelado 02" },
        { src: "/images/diseno-grafico/modelado3d/modelado-03.jpg", alt: "Modelado 03" },
        { src: "/images/diseno-grafico/modelado3d/modelado-04.jpg", alt: "Modelado 04" },
        { src: "/images/diseno-grafico/modelado3d/modelado-05.jpg", alt: "Modelado 05" },
        { src: "/images/diseno-grafico/modelado3d/modelado-06.jpg", alt: "Modelado 06" },
        { src: "/images/diseno-grafico/modelado3d/modelado-07.jpg", alt: "Modelado 07" },
        { src: "/images/diseno-grafico/modelado3d/modelado-08.jpg", alt: "Modelado 08" },
      ]},
    ],
  },
  "revista-balvanera": {
    title: "Revista Balvanera I Tapa y contratapa",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Diseño de tapa y contratapa para una revista inspirada en el barrio porteño de Balvanera. El proyecto toma como punto de partida su identidad visual, su ritmo urbano y la diversidad cultural que lo caracteriza. A través del uso del color, la tipografía y la composición, busca reflejar el pulso cotidiano del barrio y su mezcla entre historia, tránsito y vida local.",
    sections: [
      { 
        type: "two-column-grid", 
        images: [
          { src: "/images/diseno-grafico/balvanera/balvanera-01.jpg", alt: "Balvanera 01" },
          { src: "/images/diseno-grafico/balvanera/balvanera-02.jpg", alt: "Balvanera 02" }
        ]
      }
    ]
  },
 
  // EDICION DE VIDEO projects
"portfolio-video": {
  title: "Portfolio",
  category: "Edición de Video",
  categorySlug: "edicion-video",
  image: "/images/edicion-video/portfolio-portada.jpg",
  description: "Video editado para la materia Diseño IV en UCES",
  sections: [
    {
      type: "video-embed",
      src: "/images/edicion-video/video-portfolio.mp4",
      caption: "Portfolio - Diseño IV"
    }
  ]
},
"mini-skirts-video": {
  title: "Mini Skirts - Mary Quant",
  category: "Edición de Video",
  categorySlug: "edicion-video",
  image: "/images/edicion-video/mini-skirts-portada.jpg",
  description: "Video editado para la materia Diseño IV en UCES",
  sections: [
    {
      type: "video-embed",
      src: "https://youtube.com/shorts/w0SAl3TPjGM", // Funciona
      caption: "Mini Skirts - Mary Quant"
    }
  ]
},
"vlog-diario-video": {
  title: "Vlog Diario",
  category: "Edición de Video",
  categorySlug: "edicion-video",
  image: "/images/edicion-video/vlog-portada.jpg",
  description: "Video editado para la materia Diseño IV en UCES",
  sections: [
    {
      type: "video-embed",
      src: "https://www.youtube.com/embed/FlTDpF_Dr6Y",
      caption: "Vlog Diario"
    }
  ]
},
"motocross-video": {
  title: "Motocross",
  category: "Edición de Video",
  categorySlug: "edicion-video",
  image: "/images/edicion-video/motocross-portada.jpg",
  description: "Video editado para la materia Diseño IV en UCES",
  sections: [
    {
      type: "video-embed",
      src: "https://www.youtube.com/embed/mm8RTJ4UoPE",
      caption: "Motocross"
    }
  ]
},
"indumentaria-video": {
  title: "Indumentaria",
  category: "Edición de Video",
  categorySlug: "edicion-video",
  image: "/images/edicion-video/indumentaria-portada.jpg",
  description: "Video editado para la materia Diseño IV en UCES",
  sections: [
    {
      type: "video-embed",
      src: "/images/edicion-video/video-modelos.mp4",
      caption: "Indumentaria - Diseño IV"
    }
  ]
},
  
  // CORPORATIVO projects
"carteles-bosch": {
  title: "Robert Bosch Argentina",
  category: "Corporativo",
  categorySlug: "corporativo",
  image: "/images/corporativo/logos/portadas-logos-05.jpg",
    description: "Trabajos realizados durante mi pasantía en Robert Bosch Argentina. Incluye diseño de cartelería para vía pública, materiales POP y merchandising corporativo para el Centro de Capacitación Bosch.",
    sections: [
      { 
        type: "text", 
        title: "Carteles en vía pública", 
        content: "Diseño y producción de cartelería para vía pública destinada a promocionar el Centro de Capacitación Bosch. Las piezas respetan la identidad visual de la marca y se adaptan a distintos formatos y soportes exteriores." 
      },
      { 
        type: "infinite-carousel", 
        images: [
          { src: "/images/corporativo/via-publica/viapublica-01.jpg", alt: "Cartel 01" },
          { src: "/images/corporativo/via-publica/viapublica-02.jpg", alt: "Cartel 02" },
          { src: "/images/corporativo/via-publica/viapublica-03.jpeg", alt: "Cartel 03" },
          { src: "/images/corporativo/via-publica/viapublica-04.jpeg", alt: "Cartel 04" },
          { src: "/images/corporativo/via-publica/viapublica-05.jpeg", alt: "Cartel 05" },
          { src: "/images/corporativo/via-publica/viapublica-06.jpeg", alt: "Cartel 06" },
          { src: "/images/corporativo/via-publica/viapublica-07.jpeg", alt: "Cartel 07" },
          { src: "/images/corporativo/via-publica/viapublica-08.jpeg", alt: "Cartel 08" },
        ]
      },
      
      { 
        type: "text", 
        title: "Materiales POP", 
        content: "Desarrollo de materiales promocionales para puntos de venta, incluyendo folletos, banners y displays interactivos para el lanzamiento de nuevos productos." 
      },
      { 
        type: "infinite-carousel", 
        images: [
          { src: "/images/corporativo/via-publica/viapublica-01.jpg", alt: "POP 01" },
          { src: "/images/corporativo/via-publica/viapublica-02.jpg", alt: "POP 02" },
          { src: "/images/corporativo/via-publica/viapublica-03.jpeg", alt: "POP 03" },
        ]
      },
      
      { 
        type: "text", 
        title: "Merchandising", 
        content: "Diseño de artículos promocionales y regalos corporativos para eventos internos y externos, reforzando la identidad de marca en cada pieza." 
      },
      { 
        type: "infinite-carousel", 
        images: [
          { src: "/images/corporativo/via-publica/viapublica-04.jpeg", alt: "Merch 01" },
          { src: "/images/corporativo/via-publica/viapublica-05.jpeg", alt: "Merch 02" },
          { src: "/images/corporativo/via-publica/viapublica-06.jpeg", alt: "Merch 03" },
        ]
      }
    ]
  },
  
"power-bi-picklog": {
  title: "Pick&Log",
  category: "Corporativo",
  categorySlug: "corporativo",
  image: "/images/corporativo/logos/portadas-logos-01.jpg",
    description: "Diseño de plantillas visuales y dashboards en Power BI para el sistema de gestión logística de Pick&Log. El trabajo combina diseño funcional y visualización de datos para mejorar la lectura y el seguimiento de indicadores operativos.",
    sections: [
      { 
        type: "text", 
        title: "Power BI - Plantillas de logística", 
        content: "Diseño y desarrollo de dashboards interactivos en Power BI para el seguimiento logístico. Se crearon plantillas visuales que permiten analizar métricas clave como tiempos de entrega, eficiencia operativa y volumen de pedidos, mejorando la toma de decisiones del equipo de logística." 
      },
      { 
        type: "infinite-carousel", 
        images: [
          { src: "/images/corporativo/powerbi/power-01.jpg", alt: "Dashboard 01" },
        ]
      }
    ]
  },
  
"cantiere": {
  title: "Cantiere SA",
  category: "Corporativo",
  categorySlug: "corporativo",
  image: "/images/corporativo/logos/portadas-logos-02.jpg",
    description: "Diseño y desarrollo de la página web corporativa para Cantiere SA.",
    sections: [
      { 
        type: "text", 
        title: "Página Web Corporativa", 
        content: "Diseño y desarrollo de sitio web institucional para empresa constructora. Se priorizó una interfaz limpia y profesional que refleja la solidez de la marca, con secciones de proyectos, servicios y contacto. El diseño es completamente responsive y optimizado para dispositivos móviles." 
      },
      { 
        type: "infinite-carousel", 
        images: [
          { src: "/images/corporativo/via-publica/viapublica-01.jpg", alt: "Web 01" },
        ]
      }
    ]
  },

  // INDUMENTARIA E ILUSTRACIÓN projects
"coleccion-portuguese": {
  title: "Colección Portuguese",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  image: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-portada-blanco.jpg",
    description: "Mini colección inspirada en la estética 'Portuguese', centrada en el uso del color, las texturas y los detalles artesanales. El proyecto incluye el desarrollo de fichas técnicas, geometrales y figurines, junto con una propuesta conceptual que combina identidad cultural y diseño contemporáneo.",
    sections: [
      { 
        type: "single-column-stack", 
        images: [
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-01.PNG", alt: "Portuguese 01" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-02.jpg", alt: "Portuguese 02" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-03.jpg", alt: "Portuguese 03" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-04.jpg", alt: "Portuguese 04" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-05.jpg", alt: "Portuguese 05" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-06.jpg", alt: "Portuguese 06" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-07.jpg", alt: "Portuguese 07" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-08.jpg", alt: "Portuguese 08" },
          { src: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-09.jpg", alt: "Portuguese 09" },
        ]
      }
    ]
  },
"fotografia-moda": {
  title: "Fotografía de moda",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  image: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-portada.jpg",
    description: "Serie de fotografías realizadas para proyectos de indumentaria, enfocadas en representar el concepto central de cada diseño. A través de la composición, la luz y la dirección de arte, las imágenes buscan resaltar la identidad visual y el carácter expresivo de cada prenda.",
    sections: [
      { 
        type: "three-column-grid", 
        images: [
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-01.jpg", alt: "Fotografía 01" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-02.jpg", alt: "Fotografía 02" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-03.jpg", alt: "Fotografía 03" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-04.jpg", alt: "Fotografía 04" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-05.jpg", alt: "Fotografía 05" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-06.jpg", alt: "Fotografía 06" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-07.jpg", alt: "Fotografía 07" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-08.jpg", alt: "Fotografía 08" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-09.jpg", alt: "Fotografía 09" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-10.jpg", alt: "Fotografía 10" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-11.jpg", alt: "Fotografía 11" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-12.jpg", alt: "Fotografía 12" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-13.jpg", alt: "Fotografía 13" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-14.jpg", alt: "Fotografía 14" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-15.jpg", alt: "Fotografía 15" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-16.jpg", alt: "Fotografía 16" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-17.jpg", alt: "Fotografía 17" },
          { src: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-18.jpg", alt: "Fotografía 18" },
        ]
      }
    ]
  },
"jeaneria-fichas": {
  title: "Jeanería I Fichas técnicas y geometrales",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  image: "/images/indumentaria-ilustracion/jeaneria/fichas-portada.jpg",
    description: "Proyecto centrado en el desarrollo técnico de prendas de denim. Incluye fichas técnicas detalladas, geometrales y especificaciones de confección que abordan la estructura, los materiales y los procesos de armado de cada pieza.",
    sections: [
      { 
        type: "single-column-stack", 
        images: [
          { src: "/images/indumentaria-ilustracion/jeaneria/fichas-01.jpg", alt: "Ficha 01" },
          { src: "/images/indumentaria-ilustracion/jeaneria/fichas-02.jpg", alt: "Ficha 02" },
          { src: "/images/indumentaria-ilustracion/jeaneria/fichas-03.jpg", alt: "Ficha 03" },
          { src: "/images/indumentaria-ilustracion/jeaneria/fichas-04.jpg", alt: "Ficha 04" },
        ]
      }
    ]
  },
"prototipos-indumentaria": {
  title: "Prototipos de indumentaria",
  category: "Indumentaria e Ilustración",
  categorySlug: "indumentaria-ilustracion",
  image: "/images/indumentaria-ilustracion/prototipos/protos-portada.jpg",
    description: "Desarrollo de prendas confeccionadas a mano durante la cursada de Diseño de Indumentaria. Cada prototipo explora la relación entre moldería, materiales y construcción, poniendo el foco en la experimentación con formas, terminaciones y el concepto particular que guía cada proyecto.",
    sections: [
      { 
        type: "single-column-stack", 
        images: [
          { src: "/images/indumentaria-ilustracion/prototipos/protos-01.jpg", alt: "Prototipo 01" },
          { src: "/images/indumentaria-ilustracion/prototipos/protos-02.jpg", alt: "Prototipo 02" },
          { src: "/images/indumentaria-ilustracion/prototipos/protos-03.jpg", alt: "Prototipo 03" },
          { src: "/images/indumentaria-ilustracion/prototipos/protos-04.jpg", alt: "Prototipo 04" },
          { src: "/images/indumentaria-ilustracion/prototipos/protos-05.jpg", alt: "Prototipo 05" },
        ]
      }
    ]
  },

  // PROYECTOS PERSONALES
"video-casamiento-1995": {
  title: "Video de Casamiento y Luna de Miel I 1995",
  category: "Proyectos Personales",
  categorySlug: "personales",
  image: "/images/proyectos-personales/video-casamiento/casamiento-02.png",
    description: "Proyecto audiovisual realizado a partir del archivo familiar del casamiento y la luna de miel de mis padres en 1995. A través de la edición y el montaje del material original, el proyecto reinterpreta esas imágenes desde una mirada actual, explorando el paso del tiempo y cómo los registros personales pueden construir identidad.",
    sections: [
      { 
        type: "video-embed", 
        src: "/images/proyectos-personales/video-casamiento/casamiento.mp4",
        caption: "Video de casamiento y luna de miel, 1995" 
      },
    ],
  },
"fotografia-analogica": {
  title: "Fotografía analógica",
  category: "Proyectos Personales",
  categorySlug: "personales",
  image: "/images/proyectos-personales/analogicas/analogicas-portada.JPG",
    description: "Serie de fotografías analógicas tomadas durante un viaje por Europa, con la intención de experimentar con nuevas técnicas y rollos vencidos. El proyecto funciona como un registro espontáneo que explora la luz, el color y la composición desde una mirada más personal.",
    sections: [
      { 
        type: "two-column-grid", 
        images: [
          { src: "/images/proyectos-personales/analogicas/analogicas-01.jpg", alt: "Analógica 01" },
          { src: "/images/proyectos-personales/analogicas/analogicas-02.jpg", alt: "Analógica 02" },
          { src: "/images/proyectos-personales/analogicas/analogicas-03.jpg", alt: "Analógica 03" },
          { src: "/images/proyectos-personales/analogicas/analogicas-04.jpg", alt: "Analógica 04" },
          { src: "/images/proyectos-personales/analogicas/analogicas-05.jpg", alt: "Analógica 05" },
          { src: "/images/proyectos-personales/analogicas/analogicas-06.jpg", alt: "Analógica 06" },
          { src: "/images/proyectos-personales/analogicas/analogicas-07.jpg", alt: "Analógica 07" },
          { src: "/images/proyectos-personales/analogicas/analogicas-08.jpg", alt: "Analógica 08" },
          { src: "/images/proyectos-personales/analogicas/analogicas-09.jpg", alt: "Analógica 09" },
          { src: "/images/proyectos-personales/analogicas/analogicas-10.jpg", alt: "Analógica 10" },
          { src: "/images/proyectos-personales/analogicas/analogicas-11.jpg", alt: "Analógica 11" }
        ]
      }
    ]
  },
}

// Get all projects in a category for "También te puede gustar" section
function getRelatedProjects(currentId: string, categorySlug: string) {
  return Object.entries(projectsData)
    .filter(([id, project]) => id !== currentId && project.categorySlug === categorySlug)
    .slice(0, 2)
    .map(([id, project]) => ({ 
      id, 
      title: project.title,
      image: project.image
    }))
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
      <header className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto">
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

      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ProjectSections sections={project.sections} />
        </div>
      </div>

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
                    {relatedProject.image ? (
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest opacity-30">
                        {relatedProject.title}
                      </div>
                    )}
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

      <ContactSection />
    </article>
  )
}
