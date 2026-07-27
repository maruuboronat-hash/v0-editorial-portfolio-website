// ============================================================================
//  DICCIONARIO DE TEXTOS / TEXT DICTIONARY
// ============================================================================
//  ACÁ ESTÁN TODOS LOS TEXTOS DE LA PÁGINA EN ESPAÑOL E INGLÉS.
//  RESPETA EXACTAMENTE LOS TEXTOS ORIGINALES DE LA WEB.
// ============================================================================

export type Language = "es" | "en"

// ============================================================================
//  ESTRUCTURA DEL DICCIONARIO
// ============================================================================
export type Dictionary = {
  nav: {
    home: string
    proyectos: string
    cv: string
    bio: string
    contacto: string
  }
  home: {
    portfolio: string
    titulo: string
    subtitulo: string
    scroll: string
  }
  proyectos: {
    titulo: string
    descripcion: string
  }
  categorias: {
    diseno_grafico: {
      titulo: string
      descripcion: string
    }
    corporativo: {
      titulo: string
      descripcion: string
    }
    indumentaria: {
      titulo: string
      descripcion: string
    }
    personales: {
      titulo: string
      descripcion: string
    }
    edicion_video: {
      titulo: string
      descripcion: string
    }
  }
  contacto: {
    titulo: string
    descripcion: string
    email: string
    telefono: string
    ubicacion: string
    redes: string
  }
  bio: {
    texto1: string
    texto2: string
    leer_mas: string
  }
  video: {
    titulo: string
    descripcion: string
  }
  proyectos_detalle: {
    [key: string]: {
      titulo: string
    }
  }
}

// ============================================================================
//  TEXTOS EN ESPAÑOL
// ============================================================================
export const dictionaries: Record<Language, Dictionary> = {
  es: {
    nav: {
      home: "Inicio",
      proyectos: "Proyectos",
      cv: "CV",
      bio: "Bio",
      contacto: "Contacto",
    },
    home: {
      portfolio: "Portfolio",
      titulo: "MARÍA BORONAT",
      subtitulo: "Diseño Gráfico y Comunicación",
      scroll: "Scroll",
    },
    proyectos: {
      titulo: "Proyectos",
      descripcion: "Una selección de trabajos en diseño gráfico, comunicación, indumentaria y proyectos personales.",
    },
    categorias: {
      diseno_grafico: {
        titulo: "Diseño Gráfico",
        descripcion: "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica desarrollados durante la carrera de Diseño Gráfico y Comunicación.",
      },
      corporativo: {
        titulo: "Corporativo",
        descripcion: "Proyectos realizados en empresas donde el diseño funciona como herramienta estratégica para comunicar, organizar información y mejorar procesos internos y comerciales.",
      },
      indumentaria: {
        titulo: "Indumentaria e Ilustración",
        descripcion: "Serie de proyectos vinculados al diseño de indumentaria y la experimentación visual desde el cuerpo, la forma y la textura.",
      },
      personales: {
        titulo: "Proyectos Personales",
        descripcion: "Exploraciones creativas y proyectos experimentales. Trabajos que nacen de la curiosidad y la libertad creativa.",
      },
      edicion_video: {
        titulo: "Edición de Video",
        descripcion: "Serie de piezas audiovisuales desarrolladas en el marco de la materia Diseño IV, a partir de material propio y preexistente. Las propuestas integran edición, animación y diseño sonoro, con foco en el ritmo, la construcción de sentido y la coherencia estética en cada proyecto.",
      },
    },
    contacto: {
      titulo: "Contacto",
      descripcion: "¿Conectamos?",
      email: "Email",
      telefono: "Teléfono",
      ubicacion: "Ubicación",
      redes: "Redes",
    },
    bio: {
      texto1: "Estudiante de Diseño Gráfico y Comunicación en UCES.",
      texto2: "Algunos sienten pasión por un artista, un famoso o un deporte. Hace poco me preguntaron cuál era la mía, y no supe qué responder. Me quedé pensando, hasta que entendí que mi pasión es lo que hago.",
      leer_mas: "Leer más →",
    },
    video: {
      titulo: "Mini presentación",
      descripcion: "Video portfolio - Diseño IV",
    },
    proyectos_detalle: {
      "libro-tecnico-manual": {
        titulo: "Libro técnico editorial I Manual",
      },
      "diario-oasis": {
        titulo: "Periódico de Oasis I Backstage Times",
      },
      "revistas-editorial": {
        titulo: "Revistas I Colección de Arte Amalia Lacroze de Fortabat",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Infancia",
      },
      "postales-cortazar": {
        titulo: "Postales I Julio Cortázar",
      },
      "revista-clara-cava": {
        titulo: "Revista Clara Cava",
      },
      "afiche-3d-cordoba": {
        titulo: "Afiche 3D I Córdoba",
      },
      "afiches-tipograficos": {
        titulo: "Afiches tipográficos",
      },
      "cuento-infantil-3d": {
        titulo: "Cuento infantil I Ilustración 3D",
      },
      "modelado-3d-objetos": {
        titulo: "Modelado 3D I Objetos cotidianos",
      },
      "revista-balvanera": {
        titulo: "Revista Balvanera I Tapa y contratapa",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
      },
      "coleccion-portuguese": {
        titulo: "Colección Portuguese",
      },
      "fotografia-moda": {
        titulo: "Fotografía de moda",
      },
      "jeaneria-fichas": {
        titulo: "Jeanería I Fichas técnicas y geometrales",
      },
      "prototipos-indumentaria": {
        titulo: "Prototipos de indumentaria",
      },
      "video-casamiento-1995": {
        titulo: "Video de Casamiento y Luna de Miel I 1995",
      },
      "fotografia-analogica": {
        titulo: "Fotografía analógica",
      },
      "portfolio-video": {
        titulo: "Portfolio",
      },
      "mini-skirts-video": {
        titulo: "Mini Skirts - Mary Quant",
      },
      "fanzine-infancia-video": {
        titulo: "Fanzine | Infancia",
      },
      "animated-teaser": {
        titulo: "Animated Teaser",
      },
      "vlog-diario-video": {
        titulo: "Vlog Diario",
      },
      "motocross-video": {
        titulo: "Motocross",
      },
      "indumentaria-video": {
        titulo: "Indumentaria",
      },
    },
  },

  // ============================================================================
  //  TEXTOS EN INGLÉS
  // ============================================================================
  en: {
    nav: {
      home: "Home",
      proyectos: "Projects",
      cv: "CV",
      bio: "Bio",
      contacto: "Contact",
    },
    home: {
      portfolio: "Portfolio",
      titulo: "MARÍA BORONAT",
      subtitulo: "Graphic Design and Communication",
      scroll: "Scroll",
    },
    proyectos: {
      titulo: "Projects",
      descripcion: "A selection of work in graphic design, communication, fashion design, and personal projects.",
    },
    categorias: {
      diseno_grafico: {
        titulo: "Graphic Design",
        descripcion: "Projects in editorial design, 3D design, visual communication, and typographic research developed during my Graphic Design and Communication degree.",
      },
      corporativo: {
        titulo: "Corporate",
        descripcion: "Projects developed in companies where design works as a strategic tool to communicate, organize information, and improve internal and commercial processes.",
      },
      indumentaria: {
        titulo: "Fashion Design & Illustration",
        descripcion: "Series of projects related to fashion design and visual experimentation from the body, form, and texture.",
      },
      personales: {
        titulo: "Personal Projects",
        descripcion: "Creative explorations and experimental projects. Works born from curiosity and creative freedom.",
      },
      edicion_video: {
        titulo: "Video Editing",
        descripcion: "Series of audiovisual pieces developed within the framework of the subject Design IV, based on own and pre-existing material. The proposals integrate editing, animation, and sound design, focusing on rhythm, meaning construction, and aesthetic coherence in each project.",
      },
    },
    contacto: {
      titulo: "Contact",
      descripcion: "Let's connect?",
      email: "Email",
      telefono: "Phone",
      ubicacion: "Location",
      redes: "Social",
    },
    bio: {
      texto1: "Graphic Design and Communication student at UCES.",
      texto2: "Some people feel passion for an artist, a celebrity, or a sport. Recently I was asked what mine was, and I didn't know what to answer. I kept thinking, until I understood that my passion is what I do.",
      leer_mas: "Read more →",
    },
    video: {
      titulo: "Mini presentation",
      descripcion: "Video portfolio - Design IV",
    },
    proyectos_detalle: {
      "libro-tecnico-manual": {
        titulo: "Technical editorial book I Manual",
      },
      "diario-oasis": {
        titulo: "Oasis Newspaper I Backstage Times",
      },
      "revistas-editorial": {
        titulo: "Magazines I Amalia Lacroze de Fortabat Art Collection",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Childhood",
      },
      "postales-cortazar": {
        titulo: "Postcards I Julio Cortázar",
      },
      "revista-clara-cava": {
        titulo: "Clara Cava Magazine",
      },
      "afiche-3d-cordoba": {
        titulo: "3D Poster I Córdoba",
      },
      "afiches-tipograficos": {
        titulo: "Typographic posters",
      },
      "cuento-infantil-3d": {
        titulo: "Children's story I 3D Illustration",
      },
      "modelado-3d-objetos": {
        titulo: "3D Modeling I Everyday objects",
      },
      "revista-balvanera": {
        titulo: "Balvanera Magazine I Cover and back cover",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
      },
      "coleccion-portuguese": {
        titulo: "Portuguese Collection",
      },
      "fotografia-moda": {
        titulo: "Fashion photography",
      },
      "jeaneria-fichas": {
        titulo: "Jeanery I Technical sheets and geometry",
      },
      "prototipos-indumentaria": {
        titulo: "Garment prototypes",
      },
      "video-casamiento-1995": {
        titulo: "Wedding and Honeymoon Video I 1995",
      },
      "fotografia-analogica": {
        titulo: "Analog photography",
      },
      "portfolio-video": {
        titulo: "Portfolio",
      },
      "mini-skirts-video": {
        titulo: "Mini Skirts - Mary Quant",
      },
      "fanzine-infancia-video": {
        titulo: "Fanzine | Childhood",
      },
      "animated-teaser": {
        titulo: "Animated Teaser",
      },
      "vlog-diario-video": {
        titulo: "Daily Vlog",
      },
      "motocross-video": {
        titulo: "Motocross",
      },
      "indumentaria-video": {
        titulo: "Fashion Design",
      },
    },
  },
}

// ============================================================================
//  IDIOMA POR DEFECTO
// ============================================================================
export const DEFAULT_LANGUAGE: Language = "es"
