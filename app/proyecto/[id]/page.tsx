import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ProjectSections, type SectionType } from "@/components/project-sections"
import { ContactSection } from "@/components/contact-section"

// Project data with real content
const projectsData: Record<string, {
  title: string
  category: string
  categorySlug: string
  description: string
  image?: string
  sections: SectionType[]
}> = {
  // DISEÑO GRÁFICO projects
"diario-oasis": {
  title: "Periódico de Oasis I Backstage Times",
  category: "Diseño Gráfico",
  categorySlug: "diseno-grafico",
  description: "Proyecto editorial que combina investigación visual, narrativa y diseño gráfico. Desarrollado como un periódico musical inspirada en la banda británica Oasis, explora su historia, estética y legado cultural a través de recursos editoriales, tipográficos y fotográficos. El enfoque está puesto en la dirección de arte, la grilla editorial y la construcción de una identidad visual coherente con el universo de la banda.",
  image: "/images/diseno-grafico/oasis/oasis-02.jpg",
  sections: [
    // ===== HERRAMIENTAS UTILIZADAS =====
    { 
      type: "tools", 
      tools: [
        "InDesign",
        "Photoshop",
        "Illustrator"
      ] 
    },
    // ===== IMÁGENES DEL PROYECTO =====
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
"revistas-editorial": {
  title: "Revistas I Colección de Arte Amalia Lacroze de Fortabat",
  category: "Diseño Gráfico",
  categorySlug: "diseno-grafico",
  description: "Proyecto editorial que toma como punto de partida la identidad del Museo Colección Amalia Lacroze de Fortabat. Desarrollado como un sistema de revistas institucionales, aborda tres exposiciones diferentes a través de recursos editoriales, tipográficos y fotográficos. El foco está puesto en construir una narrativa visual coherente, organizada mediante una grilla editorial, y en desarrollar una identidad gráfica que dialogue con el carácter, el patrimonio y la estética contemporánea del museo.",
  image: "/images/diseno-grafico/revistas-fortabat/portada.jpg",
  sections: [
    // ===== HERRAMIENTAS UTILIZADAS =====
    { 
      type: "tools", 
      tools: [
        "InDesign",
        "Photoshop",
        "Illustrator"
      ] 
    },
    
    // ===== REVISTA 1: EDUARDO ESTUPÍA =====
    { 
      type: "text", 
      title: "Revista - Eduardo Estupía", 
      content: ""
    },
    { 
      type: "single-column-stack", 
      images: [
        { src: "/images/diseno-grafico/revistas-editorial/stupia/2_Mockup_Stupia.jpg", alt: "Eduardo Estupía 2" },
        { src: "/images/diseno-grafico/revistas-editorial/stupia/3_Mockup_Stupia.jpg", alt: "Eduardo Estupía 3" },
        { src: "/images/diseno-grafico/revistas-editorial/stupia/4_Mockup_Stupia.jpg", alt: "Eduardo Estupía 4" },
        { src: "/images/diseno-grafico/revistas-editorial/stupia/5_Mockup_Stupia.jpg", alt: "Eduardo Estupía 5" },
        { src: "/images/diseno-grafico/revistas-editorial/stupia/6_Mockup_Stupia.jpg", alt: "Eduardo Estupía 6" },
        { src: "/images/diseno-grafico/revistas-editorial/stupia/7_Mockup_Stupia.jpg", alt: "Eduardo Estupía 7" },
      ]
    },
    
    // ===== REVISTA 2: JULIO LE PARC =====
    { 
      type: "text", 
      title: "Revista - Julio Le Parc", 
      content: ""
    },
    { 
      type: "single-column-stack", 
      images: [
        { src: "/images/diseno-grafico/revistas-editorial/leparc/2_Mockup_LeParc.jpg", alt: "Julio Le Parc 2" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/3_Mockup_LeParc.jpg", alt: "Julio Le Parc 3" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/4_Mockup_LeParc.jpg", alt: "Julio Le Parc 4" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/5_Mockup_LeParc.jpg", alt: "Julio Le Parc 5" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/6_Mockup_LeParc.jpg", alt: "Julio Le Parc 6" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/7_Mockup_LeParc.jpg", alt: "Julio Le Parc 7" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/8_Mockup_LeParc.jpg", alt: "Julio Le Parc 8" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/9_Mockup_LeParc.jpg", alt: "Julio Le Parc 9" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/10_Mockup_LeParc.jpg", alt: "Julio Le Parc 10" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/11_Mockup_LeParc.jpg", alt: "Julio Le Parc 11" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/12_Mockup_LeParc.jpg", alt: "Julio Le Parc 12" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/13_Mockup_LeParc.jpg", alt: "Julio Le Parc 13" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/14_Mockup_LeParc.jpg", alt: "Julio Le Parc 14" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/15_Mockup_LeParc.jpg", alt: "Julio Le Parc 15" },
        { src: "/images/diseno-grafico/revistas-editorial/leparc/16_Mockup_LeParc.jpg", alt: "Julio Le Parc 16" },
      ]
    },
    
    // ===== REVISTA 3: ARIADNA PASTORINI =====
    { 
      type: "text", 
      title: "Revista - Ariadna Pastorini", 
      content: ""
    },
    { 
      type: "single-column-stack", 
      images: [
        { src: "/images/diseno-grafico/revistas-editorial/ariadna/2_Mockup_Ariadna.jpg", alt: "Ariadna Pastorini 2" },
        { src: "/images/diseno-grafico/revistas-editorial/ariadna/3_Mockup_Ariadna.jpg", alt: "Ariadna Pastorini 3" },
        { src: "/images/diseno-grafico/revistas-editorial/ariadna/4_Mockup_Ariadna.jpg", alt: "Ariadna Pastorini 4" },
        { src: "/images/diseno-grafico/revistas-editorial/ariadna/5_Mockup_Ariadna.jpg", alt: "Ariadna Pastorini 5" },
        { src: "/images/diseno-grafico/revistas-editorial/ariadna/6_Mockup_Ariadna.jpg", alt: "Ariadna Pastorini 6" },
        { src: "/images/diseno-grafico/revistas-editorial/ariadna/7_Mockup_Ariadna.jpg", alt: "Ariadna Pastorini 7" },
      ]
    },
  ],
},
  "postales-cortazar": {
    title: "Postales I Julio Cortázar",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    description: "Serie de postales conceptuales inspiradas en Historia verídica, un cuento de Julio Cortázar. El proyecto explora la fragilidad, el azar y la poética de lo cotidiano a través de la composición visual y el uso simbólico del color y la forma. Cada postal funciona como un fragmento independiente, pero en conjunto conforman una narrativa abierta y sensible.",
    image: "/images/diseno-grafico/postales/postales-portada.jpg",
    sections: [
          { 
      type: "tools", 
      tools: [
        "Photoshop",
        "Illustrator"
      ] 
    },
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
          { 
      type: "tools", 
      tools: [
        "InDesign",
        "Photoshop",
        "Illustrator"
      ] 
    },
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
          { 
      type: "tools", 
      tools: [
        "Blender",
        "Photoshop",
        "Illustrator"
      ] 
    },
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
                { 
      type: "tools", 
      tools: [
        "Illustrator"
      ] 
    },
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
      type: "tools", 
      tools: [
        "Blender",
        "InDesign",
        "Illustrator",
        "Photoshop"
      ] 
    },
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
                      { 
      type: "tools", 
      tools: [
        "Blender",
        "Photoshop"
      ] 
    },
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
      type: "tools", 
      tools: [
        "Illustrator"
      ] 
    },
      { 
        type: "two-column-grid", 
        images: [
          { src: "/images/diseno-grafico/balvanera/balvanera-01.jpg", alt: "Balvanera 01" },
          { src: "/images/diseno-grafico/balvanera/balvanera-02.jpg", alt: "Balvanera 02" }
        ]
      }
    ]
  },
 
  // EDICION DE VIDEO projects - DESCRIPCIÓN GENERAL (se repite en cada proyecto)
  "portfolio-video": {
    title: "Portfolio",
    category: "Edición de Video",
    categorySlug: "edicion-video",
    image: "/images/edicion-video/portada05.png",
    sections: [
                      { 
      type: "tools", 
      tools: [
        "AfterEffects",
        "Premiere",
        "Blender",
        "Illustrator"
      ] 
    },
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
    image: "/images/edicion-video/portada03.png",
    sections: [
                      { 
      type: "tools", 
      tools: [
        "Premiere"
      ] 
    },
      {
        type: "video-embed",
        src: "https://www.youtube.com/embed/w0SAl3TPjGM",
        caption: "Mini Skirts - Mary Quant"
      }
    ]
  },
  "vlog-diario-video": {
    title: "Vlog Diario",
    category: "Edición de Video",
    categorySlug: "edicion-video",
    image: "/images/edicion-video/portada04.png",
    sections: [
                      { 
      type: "tools", 
      tools: [
        "Premiere"
      ] 
    },
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
    image: "/images/edicion-video/portada02.jpeg",
    sections: [
                      { 
      type: "tools", 
      tools: [
        "Premiere"
      ] 
    },
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
    image: "/images/edicion-video/portada01.png",
    sections: [
                      { 
      type: "tools", 
      tools: [
        "Premiere"
      ] 
    },
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
  description: "Durante mi pasantía en Bosch Mobility Aftermarket Argentina formé parte del equipo de Marketing y Comunicación, participando en el desarrollo e implementación de comunicación comercial y de marca para distintas unidades de negocio.\n\nMi trabajo abarcó desde la promoción de productos y servicios hasta el acompañamiento estratégico, integrando diseño gráfico, coherencia de identidad visual y objetivos comerciales. Intervine en múltiples soportes y formatos, adaptando lineamientos globales a necesidades locales y colaborando con distintas áreas para asegurar una comunicación clara, consistente y orientada a resultados.\n\nAdemás del desarrollo creativo, asumí responsabilidades vinculadas a la coordinación con proveedores y equipos regionales, así como soporte en procesos administrativos y organización de eventos internos y externos.",
  sections: [
    // ===== HABILIDADES GENERALES =====
    { 
      type: "skills", 
      skills: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Figma",
        "MailJet",
        "Canva",
        "Adobe Premiere",
        "SAP",
        "Power Apps",
        "Power Automate",
        "Microsoft Office"
      ] 
    },

    // ===== 1. YOUNG TALENTS =====
    { 
      type: "text", 
      title: "Young Talents – Automatización de pedidos y control de stock", 
      content: "Proyecto desarrollado en el marco del programa interno Young Talents 2025, enfocado en la digitalización y automatización del proceso de pedidos y control de stock de merchandising.\n\nA partir de la detección de problemas operativos —carga manual, falta de registro y desactualización de datos— diseñé e implementé un sistema integrado con Power Apps, Excel y Power Automate que permitió formalizar pedidos, actualizar stock en tiempo real y generar un historial automático para análisis posteriores.\n\nLa solución redujo errores, optimizó tiempos operativos y dejó una base replicable para otras áreas. El proyecto fue presentado ante gerencia dentro del programa.\n\n<a href='/images/corporativo/ytalents/presentacion-portfolio.pdf' download class='inline-block mt-4 text-sm font-medium text-white hover:underline underline-offset-4'>Saber más →</a>"
    },
    { 
      type: "infinite-carousel", 
      images: [
        { src: "/images/corporativo/ytalents/yt-01.jpg", alt: "Young Talents 1" },
        { src: "/images/corporativo/ytalents/yt-02.jpg", alt: "Young Talents 2" },
        { src: "/images/corporativo/ytalents/yt-03.jpg", alt: "Young Talents 3" },
        { src: "/images/corporativo/ytalents/yt-04.jpg", alt: "Young Talents 4" },
        { src: "/images/corporativo/ytalents/yt-05.jpg", alt: "Young Talents 5" },
      ]
    },

    // ===== 2. DISEÑO DE CARTELERÍA EN VÍA PÚBLICA =====
    { 
      type: "text", 
      title: "Diseño de cartelería en vía pública", 
      content: "Tuve la oportunidad de diseñar y producir mis primeros carteles para vía pública. Las piezas fueron creadas para promocionar el Centro de Capacitación de Bosch, manteniendo la identidad visual de la marca y adaptándola a diferentes formatos y soportes exteriores."
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

    // ===== 3. MERCHANDISING & MATERIALES PROMOCIONALES =====
    { 
      type: "text", 
      title: "Merchandising & Materiales Promocionales", 
      content: "Diseño y desarrollo de materiales aplicados a distintas acciones comerciales y de marca: stickers, ploteos, bolsas, anotadores, cuadernos, llaveros, catálogos, newsletters y piezas para redes sociales. Trabajo enfocado en coherencia visual, funcionalidad y alineación a objetivos comerciales."
    },
    { 
      type: "infinite-carousel", 
      images: [
        { src: "/images/corporativo/merch/merch-01.jpg", alt: "Merch 01" },
        { src: "/images/corporativo/merch/merch-02.jpg", alt: "Merch 02" },
        { src: "/images/corporativo/merch/merch-03.jpg", alt: "Merch 03" },
        { src: "/images/corporativo/merch/merch-04.jpg", alt: "Merch 04" },
        { src: "/images/corporativo/merch/merch-05.jpg", alt: "Merch 05" },
        { src: "/images/corporativo/merch/merch-06.jpg", alt: "Merch 06" },
        { src: "/images/corporativo/merch/merch-07.jpg", alt: "Merch 07" },
        { src: "/images/corporativo/merch/merch-08.jpg", alt: "Merch 08" },
        { src: "/images/corporativo/merch/merch-09.jpg", alt: "Merch 09" },
        { src: "/images/corporativo/merch/merch-10.jpg", alt: "Merch 10" },
        { src: "/images/corporativo/merch/merch-11.jpg", alt: "Merch 11" },
        { src: "/images/corporativo/merch/merch-12.jpg", alt: "Merch 12" },
        { src: "/images/corporativo/merch/merch-13.jpg", alt: "Merch 13" },
        { src: "/images/corporativo/merch/merch-14.jpg", alt: "Merch 14" },
        { src: "/images/corporativo/merch/merch-15.jpg", alt: "Merch 15" },
        { src: "/images/corporativo/merch/merch-16.jpg", alt: "Merch 16" },
        { src: "/images/corporativo/merch/merch-17.jpg", alt: "Merch 17" },
      ]
    },

    // ===== 4. ASESORAMIENTO Y DISEÑO PARA TALLERES MECÁNICOS =====
    { 
      type: "text", 
      title: "Asesoramiento y diseño para talleres mecánicos", 
      content: "Desarrollo de propuestas visuales para talleres, integrando sus necesidades comerciales con los lineamientos globales de marca.\n\nEl trabajo incluyó diseño de ploteos y aplicaciones gráficas en fachada, adaptaciones visuales personalizadas y realización de fotomontajes previos a la adhesión a la red. Estas visualizaciones permitían imaginar el resultado del taller fusionado con la identidad Bosch, funcionando como herramienta estratégica en el proceso de decisión.\n\nLa experiencia implicó contacto directo con clientes, análisis del entorno comercial e interpretación espacial, asegurando una implementación coherente y efectiva de la identidad corporativa en contextos reales."
    },
    { 
      type: "infinite-carousel", 
      images: [
        { src: "/images/corporativo/ploteos/talleres-01.jpg", alt: "Taller 01" },
        { src: "/images/corporativo/ploteos/talleres-02.jpg", alt: "Taller 02" },
        { 
          src: "/images/corporativo/ploteos/parador.mp4", 
          alt: "Video del proceso",
          type: "video" 
        },
        { src: "/images/corporativo/ploteos/talleres-03.jpg", alt: "Taller 03" },
        { src: "/images/corporativo/ploteos/talleres-04.jpg", alt: "Taller 04" },
        { src: "/images/corporativo/ploteos/talleres-05.jpg", alt: "Taller 05" },
        { src: "/images/corporativo/ploteos/talleres-06.jpg", alt: "Taller 06" },
        { src: "/images/corporativo/ploteos/talleres-07.jpg", alt: "Taller 07" },
      ]
    },

    // ===== 5. COMUNICACIÓN COMERCIAL & MARCA =====
    { 
      type: "text", 
      title: "Comunicación Comercial & Marca", 
      content: "Flyers de producto: Desarrollo de piezas gráficas para fichas técnicas, lanzamientos y ofertas comerciales destinadas a distribuidores y red comercial. Definición y consolidación de una estética alineada a la identidad global de marca, aplicada de forma consistente en el tiempo.\n\nPresentaciones corporativas y comerciales: Diseño y optimización de presentaciones internas y externas, asegurando coherencia visual, claridad de información y adecuación al contexto de uso.\n\nWrapped – Resumen anual: Conceptualización y diseño del resumen anual de resultados de comunicación (redes sociales, newsletters y métricas digitales), enfocado a los distintos equipos dentro de la división."
    },
    { 
      type: "infinite-carousel", 
      images: [
        { src: "/images/corporativo/flyers/flyers-01.jpg", alt: "Flyer 01" },
        { src: "/images/corporativo/flyers/flyers-02.jpg", alt: "Flyer 02" },
        { src: "/images/corporativo/flyers/flyers-03.jpg", alt: "Flyer 03" },
        { src: "/images/corporativo/flyers/flyers-04.jpg", alt: "Flyer 04" },
        { src: "/images/corporativo/flyers/flyers-05.jpg", alt: "Flyer 05" },
        { src: "/images/corporativo/flyers/flyers-06.jpg", alt: "Flyer 06" },
        { src: "/images/corporativo/flyers/flyers-07.jpg", alt: "Flyer 07" },
        { src: "/images/corporativo/flyers/flyers-08.jpg", alt: "Flyer 08" },
      ]
    },

    // ===== 6. GESTIÓN Y SOPORTE OPERATIVO =====
    { 
      type: "text", 
      title: "Gestión y Soporte Operativo", 
      content: "Además del desarrollo creativo, participé en:\n• Coordinación con proveedores y agencias\n• Gestión y control de stock de merchandising\n• Soporte en procesos administrativos (órdenes de compra, entregas y pagos)\n• Organización y asistencia en eventos corporativos y promocionales\n• Articulación con equipos regionales"
    }
  ]
},
  
  "power-bi-picklog": {
    title: "Pick&Log",
    category: "Corporativo",
    categorySlug: "corporativo",
    image: "/images/corporativo/logos/portadas-logos-01.jpg",
    description: "Proyecto desarrollado para la empresa de logística Pick&Log, enfocado en el diseño de plantillas visuales y dashboards para Power BI dentro de su sistema de gestión logística.\n\nEl trabajo integró diseño funcional y visualización de datos, con el objetivo de optimizar la lectura de información y facilitar el seguimiento de indicadores operativos. Se priorizó claridad, jerarquía visual y coherencia gráfica, asegurando una experiencia intuitiva para la toma de decisiones.",
    sections: [
          { 
      type: "tools", 
      tools: [
        "Illustrator",
        "PowerBi"
      ] 
    },
      { 
        type: "infinite-carousel", 
        images: [
          { src: "/images/corporativo/powerbi/power-01.jpg", alt: "Dashboard 01" },
        ]
      }
    ]
  },
  
  // "cantiere": {
  //   title: "Cantiere SA",
  //   category: "Corporativo",
  //   categorySlug: "corporativo",
  //   image: "/images/corporativo/logos/portadas-logos-02.jpg",
  //   description: "Diseño y desarrollo de la página web corporativa para Cantiere SA.",
  //   sections: [
  //     // PROYECTO DESACTIVADO - se mostrará en el futuro
  //   ]
  // },

  // INDUMENTARIA E ILUSTRACIÓN projects
 "coleccion-portuguese": {
    title: "Colección Portuguese",
    category: "Indumentaria e Ilustración",
    categorySlug: "indumentaria-ilustracion",
    image: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-portada-blanco.jpg",
    description: "Mini colección inspirada en la estética 'Portuguese', centrada en el uso del color, las texturas y los detalles artesanales. El proyecto incluye el desarrollo de fichas técnicas, geometrales y figurines, junto con una propuesta conceptual que combina identidad cultural y diseño contemporáneo.",
    sections: [
          { 
      type: "tools", 
      tools: [
        "Photoshop",
        "Illustrator",
        "Procreate"
      ] 
    },
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
      type: "tools", 
      tools: [
        "Illustrator"
      ] 
    },
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
        type: "tools", 
        tools: [
          "Premiere"
        ] 
      },
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
} // ← CIERRE DEL OBJETO projectsData

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
      {/* HEADER - título y descripción principal */}
      <header className="px-6 md:px-12 mb-2 md:mb-24">
        <div className="max-w-7xl mx-auto">
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

      {/* SECCIONES - subtítulos, descripciones y carruseles */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
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
