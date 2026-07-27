// ============================================================================
//  DICCIONARIO DE TEXTOS / TEXT DICTIONARY
// ============================================================================
//  ACÁ ESTÁN TODOS LOS TEXTOS DE LA PÁGINA EN ESPAÑOL E INGLÉS.
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
    texto3: string
    texto4: string
    ver_cv: string
  }
  video: {
    titulo: string
    descripcion: string
  }
  proyectos_detalle: {
    [key: string]: {
      titulo: string
      descripcion: string
    }
  }
  herramientas: string
  tambien_te_puede_gustar: string
  volver_a: string
  cv: {
    descripcion: string
    experiencia: string
    educacion: string
    cursos: string
    herramientas: string
    diseno_creatividad: string
    productividad: string
    desarrollo: string
    idiomas: string
    espanol: string
    ingles: string
    italiano: string
    nativo: string
    avanzado: string
    basico: string
    habilidades: string
    descargar: string
    cv_pdf: string
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
      texto1: "Dicen que cuando no tenes experiencia, hay que mostrar los trabajos que tengas, aunque no te encanten. Y yo me lo tome literal.",
      texto2: "Estos son algunos de mis primeros proyectos: algo hecho en Microsoft Paint en 2011, lienzo y acrilico en 2013, y Procreate en 2024.",
      texto3: "Algunos sienten pasion por un artista, un famoso o un deporte. Hace poco me preguntaron cual era la mia, y no supe que responder. Me quede pensando, hasta que entendi que mi pasion es lo que hago.",
      texto4: "Desde chica siempre me gusto crear: armar piezas de todo tipo, editar fotos de amigos, mirar Art Attack todos los dias o sacar fotos cada vez que podia. Mi vida siempre estuvo atravesada por el diseno, de distintas formas. Cualquier excusa para disenar —aunque no lo sabia— era, para mi, el mejor favor que me podian pedir.",
      ver_cv: "Ver currículum completo",
    },
    video: {
      titulo: "Mini presentación",
      descripcion: "Video portfolio - Diseño IV",
    },
    proyectos_detalle: {
      "libro-tecnico-manual": {
        titulo: "Libro técnico editorial I Manual",
        descripcion: "Proyecto editorial centrado en el diseño y maquetación integral de un libro técnico. El trabajo abarca la organización y jerarquización de contenidos, el desarrollo de una grilla editorial y la construcción de un sistema tipográfico que facilita la lectura y navegación de la información. El proyecto se completa con el diseño de la sobrecubierta, manteniendo una identidad visual coherente entre el interior y el exterior de la publicación.",
      },
      "diario-oasis": {
        titulo: "Periódico de Oasis I Backstage Times",
        descripcion: "Proyecto editorial que combina investigación visual, narrativa y diseño gráfico. Desarrollado como un periódico musical inspirada en la banda británica Oasis, explora su historia, estética y legado cultural a través de recursos editoriales, tipográficos y fotográficos. El enfoque está puesto en la dirección de arte, la grilla editorial y la construcción de una identidad visual coherente con el universo de la banda.",
      },
      "revistas-editorial": {
        titulo: "Revistas I Colección de Arte Amalia Lacroze de Fortabat",
        descripcion: "Proyecto editorial que toma como punto de partida la identidad del Museo Colección Amalia Lacroze de Fortabat. Desarrollado como un sistema de revistas institucionales, aborda tres exposiciones diferentes a través de recursos editoriales, tipográficos y fotográficos. El foco está puesto en construir una narrativa visual coherente, organizada mediante una grilla editorial, y en desarrollar una identidad gráfica que dialogue con el carácter, el patrimonio y la estética contemporánea del museo.",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Infancia",
        descripcion: "Proyecto editorial y audiovisual desarrollado a partir de la creación de un fanzine narrativo sobre la infancia. La propuesta toma la forma del diario íntimo de una niña, donde recuerdos, dibujos y fotografías construyen un diálogo constante entre su mirada infantil y su voz adulta. El universo del fanzine se expande hacia una pieza audiovisual animada, concebida como un tráiler de la historia, y una serie de tres historias para Instagram que trasladan la narrativa a nuevos formatos.",
      },
      "postales-cortazar": {
        titulo: "Postales I Julio Cortázar",
        descripcion: "Serie de postales conceptuales inspiradas en Historia verídica, un cuento de Julio Cortázar. El proyecto explora la fragilidad, el azar y la poética de lo cotidiano a través de la composición visual y el uso simbólico del color y la forma. Cada postal funciona como un fragmento independiente, pero en conjunto conforman una narrativa abierta y sensible.",
      },
      "revista-clara-cava": {
        titulo: "Revista Clara Cava",
        descripcion: "Proyecto editorial inspirado en la artista argentina Clara Cava. La revista propone una lectura visual de su universo musical a través del color, la tipografía y la composición. Combina análisis gráfico y diseño de layout para construir una identidad que refleja la experimentación y sensibilidad presentes en su obra.",
      },
      "afiche-3d-cordoba": {
        titulo: "Afiche 3D I Córdoba",
        descripcion: "Composición tridimensional inspirada en la provincia de Córdoba, Argentina. El proyecto combina elementos gráficos y volumétricos para reinterpretar íconos característicos de su paisaje y cultura, como el Reloj Cucú y los colores serranos. Basado en la identidad visual y el lenguaje gráfico presentes en la página oficial de turismo de la provincia, busca transmitir su esencia desde un enfoque contemporáneo a través del modelado y la iluminación digital.",
      },
      "afiches-tipograficos": {
        titulo: "Afiches tipográficos",
        descripcion: "Serie de afiches experimentales que exploran la relación entre forma, estructura y lenguaje visual a partir de la tipografía. Cada pieza combina composición, ritmo y contraste para comunicar ideas a través del signo tipográfico como elemento principal. El proyecto investiga cómo la letra puede trascender su función textual para transformarse en imagen y expresión visual.",
      },
      "cuento-infantil-3d": {
        titulo: "Cuento infantil I Ilustración 3D",
        descripcion: "Proyecto editorial que combina narrativa, diseño y modelado tridimensional. Basado en El hombrecito del azulejo, cuento de Manuel Mujica Lainez, se desarrollaron los personajes y escenarios mediante ilustración 3D, integrando color, textura y volumen para construir un universo visual coherente con el relato. Además, se diseñó y maquetó el libro completo, trabajando la relación entre texto e imagen para potenciar la narrativa desde lo visual.",
      },
      "modelado-3d-objetos": {
        titulo: "Modelado 3D I Objetos cotidianos",
        descripcion: "Ejercicio de observación, modelado e iluminación digital a partir de tres objetos de uso cotidiano. El proyecto busca reproducir de forma precisa la materialidad, las proporciones y las condiciones lumínicas de cada elemento, explorando cómo el entorno y el punto de vista transforman su percepción. La propuesta combina técnica y composición para convertir objetos simples en escenas visualmente expresivas.",
      },
      "revista-balvanera": {
        titulo: "Revista Balvanera I Tapa y contratapa",
        descripcion: "Diseño de tapa y contratapa para una revista inspirada en el barrio porteño de Balvanera. El proyecto toma como punto de partida su identidad visual, su ritmo urbano y la diversidad cultural que lo caracteriza. A través del uso del color, la tipografía y la composición, busca reflejar el pulso cotidiano del barrio y su mezcla entre historia, tránsito y vida local.",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
        descripcion: "Durante mi pasantía en Bosch Mobility Aftermarket Argentina formé parte del equipo de Marketing y Comunicación, participando en el desarrollo e implementación de comunicación comercial y de marca para distintas unidades de negocio. Mi trabajo abarcó desde la promoción de productos y servicios hasta el acompañamiento estratégico, integrando diseño gráfico, coherencia de identidad visual y objetivos comerciales.",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
        descripcion: "Proyecto desarrollado para la empresa de logística Pick&Log, enfocado en el diseño de plantillas visuales y dashboards para Power BI dentro de su sistema de gestión logística. El trabajo integró diseño funcional y visualización de datos, con el objetivo de optimizar la lectura de información y facilitar el seguimiento de indicadores operativos.",
      },
      "coleccion-portuguese": {
        titulo: "Colección Portuguese",
        descripcion: "Mini colección inspirada en la estética 'Portuguese', centrada en el uso del color, las texturas y los detalles artesanales. El proyecto incluye el desarrollo de fichas técnicas, geometrales y figurines, junto con una propuesta conceptual que combina identidad cultural y diseño contemporáneo.",
      },
      "fotografia-moda": {
        titulo: "Fotografía de moda",
        descripcion: "Serie de fotografías realizadas para proyectos de indumentaria, enfocadas en representar el concepto central de cada diseño. A través de la composición, la luz y la dirección de arte, las imágenes buscan resaltar la identidad visual y el carácter expresivo de cada prenda.",
      },
      "jeaneria-fichas": {
        titulo: "Jeanería I Fichas técnicas y geometrales",
        descripcion: "Proyecto centrado en el desarrollo técnico de prendas de denim. Incluye fichas técnicas detalladas, geometrales y especificaciones de confección que abordan la estructura, los materiales y los procesos de armado de cada pieza.",
      },
      "prototipos-indumentaria": {
        titulo: "Prototipos de indumentaria",
        descripcion: "Desarrollo de prendas confeccionadas a mano durante la cursada de Diseño de Indumentaria. Cada prototipo explora la relación entre moldería, materiales y construcción, poniendo el foco en la experimentación con formas, terminaciones y el concepto particular que guía cada proyecto.",
      },
      "video-casamiento-1995": {
        titulo: "Video de Casamiento y Luna de Miel I 1995",
        descripcion: "Proyecto audiovisual realizado a partir del archivo familiar del casamiento y la luna de miel de mis padres en 1995. A través de la edición y el montaje del material original, el proyecto reinterpreta esas imágenes desde una mirada actual, explorando el paso del tiempo y cómo los registros personales pueden construir identidad.",
      },
      "fotografia-analogica": {
        titulo: "Fotografía analógica",
        descripcion: "Serie de fotografías analógicas tomadas durante un viaje por Europa, con la intención de experimentar con nuevas técnicas y rollos vencidos. El proyecto funciona como un registro espontáneo que explora la luz, el color y la composición desde una mirada más personal.",
      },
      "portfolio-video": {
        titulo: "Portfolio",
        descripcion: "Video portfolio que recopila una selección de trabajos audiovisuales desarrollados en la materia Diseño IV, mostrando habilidades en edición, animación y diseño sonoro.",
      },
      "mini-skirts-video": {
        titulo: "Mini Skirts - Mary Quant",
        descripcion: "Pieza audiovisual que explora la revolución de la minifalda a través de la figura de Mary Quant, combinando material de archivo, animación y diseño sonoro para construir una narrativa visual sobre la moda y la liberación femenina.",
      },
      "animated-teaser": {
        titulo: "Animated Teaser",
        descripcion: "Pieza audiovisual animada que presenta el universo de Clavis y conecta sus personajes, escenarios y plataformas a través de una narrativa visual dinámica. El video funciona como una introducción al proyecto y expande su historia hacia nuevos universos.",
      },
      "vlog-diario-video": {
        titulo: "Vlog Diario",
        descripcion: "Proyecto de edición y montaje a partir de material de archivo personal, con el objetivo de construir una narrativa cotidiana que combina registro documental y exploración estética.",
      },
      "motocross-video": {
        titulo: "Motocross",
        descripcion: "Edición de material audiovisual de motocross, trabajando el ritmo, la sincronización musical y la construcción de sentido a partir de la acción y el movimiento.",
      },
      "indumentaria-video": {
        titulo: "Indumentaria",
        descripcion: "Pieza audiovisual que documenta y pone en valor el proceso de diseño y confección de prendas, integrando imágenes de taller, pruebas de modelo y detalles de las piezas finales.",
      },
    },
    herramientas: "HERRAMIENTAS UTILIZADAS",
    tambien_te_puede_gustar: ":) También te puede gustar:",
    volver_a: "Volver a",
    cv: {
      descripcion: "Diseñadora gráfica y comunicadora visual con perfil híbrido que combina creatividad, pensamiento estratégico y herramientas tecnológicas. Con experiencia en entornos corporativos internacionales, manejo integral de identidad de marca y capacidad para automatizar procesos creativos y operativos. Orientada a resultados, con iniciativa propia, aprendizaje autónomo y habilidades para adaptarse a equipos multidisciplinarios en contextos dinámicos.",
      experiencia: "Experiencia Laboral",
      educacion: "Educación",
      cursos: "CURSOS",
      herramientas: "Herramientas",
      diseno_creatividad: "Diseño & Creatividad",
      productividad: "Productividad",
      desarrollo: "Desarrollo & Prototipado",
      idiomas: "Idiomas",
      espanol: "Español",
      ingles: "Inglés",
      italiano: "Italiano",
      nativo: "Nativo",
      avanzado: "Avanzado",
      basico: "Básico",
      habilidades: "Habilidades",
      descargar: "Descargar",
      cv_pdf: "CV en PDF",
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
      texto1: "They say that when you don't have experience, you should show whatever work you have, even if you're not proud of it. And I took it literally.",
      texto2: "These are some of my first projects: something made in Microsoft Paint in 2011, canvas and acrylic in 2013, and Procreate in 2024.",
      texto3: "Some people feel passion for an artist, a celebrity, or a sport. Recently I was asked what mine was, and I didn't know what to answer. I kept thinking, until I understood that my passion is what I do.",
      texto4: "Since I was a child, I've always loved creating: building all kinds of pieces, editing friends' photos, watching Art Attack every day, or taking photos whenever I could. My life has always been crossed by design, in different ways. Any excuse to design —even if I didn't know it— was, for me, the best favor anyone could ask of me.",
      ver_cv: "View full CV",
    },
    video: {
      titulo: "Mini presentation",
      descripcion: "Video portfolio - Design IV",
    },
    proyectos_detalle: {
      "libro-tecnico-manual": {
        titulo: "Technical editorial book I Manual",
        descripcion: "Editorial project focused on the comprehensive design and layout of a technical book. The work covers content organization and hierarchization, the development of an editorial grid, and the construction of a typographic system that facilitates reading and information navigation. The project is completed with the cover design, maintaining a consistent visual identity between the interior and exterior of the publication.",
      },
      "diario-oasis": {
        titulo: "Oasis Newspaper I Backstage Times",
        descripcion: "Editorial project that combines visual research, narrative, and graphic design. Developed as a music newspaper inspired by the British band Oasis, it explores their history, aesthetics, and cultural legacy through editorial, typographic, and photographic resources. The focus is on art direction, editorial grid, and building a visual identity consistent with the band's universe.",
      },
      "revistas-editorial": {
        titulo: "Magazines I Amalia Lacroze de Fortabat Art Collection",
        descripcion: "Editorial project based on the identity of the Amalia Lacroze de Fortabat Art Collection Museum. Developed as a system of institutional magazines, it addresses three different exhibitions through editorial, typographic, and photographic resources. The focus is on building a coherent visual narrative, organized through an editorial grid, and developing a graphic identity that dialogues with the museum's character, heritage, and contemporary aesthetics.",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Childhood",
        descripcion: "Editorial and audiovisual project developed from the creation of a narrative fanzine about childhood. The proposal takes the form of a girl's intimate diary, where memories, drawings, and photographs build a constant dialogue between her childhood gaze and her adult voice. The fanzine's universe expands into an animated audiovisual piece, conceived as a trailer for the story, and a series of three Instagram stories that translate the narrative into new formats.",
      },
      "postales-cortazar": {
        titulo: "Postcards I Julio Cortázar",
        descripcion: "Series of conceptual postcards inspired by Historia verídica, a short story by Julio Cortázar. The project explores fragility, chance, and the poetics of everyday life through visual composition and the symbolic use of color and form. Each postcard works as an independent fragment, but together they form an open and sensitive narrative.",
      },
      "revista-clara-cava": {
        titulo: "Clara Cava Magazine",
        descripcion: "Editorial project inspired by Argentine artist Clara Cava. The magazine proposes a visual reading of her musical universe through color, typography, and composition. It combines graphic analysis and layout design to build an identity that reflects the experimentation and sensitivity present in her work.",
      },
      "afiche-3d-cordoba": {
        titulo: "3D Poster I Córdoba",
        descripcion: "Three-dimensional composition inspired by the province of Córdoba, Argentina. The project combines graphic and volumetric elements to reinterpret characteristic icons of its landscape and culture, such as the Cuckoo Clock and mountain colors. Based on the visual identity and graphic language present on the province's official tourism page, it seeks to convey its essence from a contemporary approach through modeling and digital lighting.",
      },
      "afiches-tipograficos": {
        titulo: "Typographic posters",
        descripcion: "Series of experimental posters exploring the relationship between form, structure, and visual language through typography. Each piece combines composition, rhythm, and contrast to communicate ideas through the typographic sign as the main element. The project investigates how the letter can transcend its textual function to become image and visual expression.",
      },
      "cuento-infantil-3d": {
        titulo: "Children's story I 3D Illustration",
        descripcion: "Editorial project combining narrative, design, and three-dimensional modeling. Based on El hombrecito del azulejo, a short story by Manuel Mujica Lainez, characters and settings were developed through 3D illustration, integrating color, texture, and volume to build a visual universe consistent with the story. Additionally, the complete book was designed and laid out, working on the relationship between text and image to enhance the narrative from a visual perspective.",
      },
      "modelado-3d-objetos": {
        titulo: "3D Modeling I Everyday objects",
        descripcion: "Exercise in observation, modeling, and digital lighting based on three everyday objects. The project aims to accurately reproduce the materiality, proportions, and lighting conditions of each element, exploring how the environment and point of view transform their perception. The proposal combines technique and composition to turn simple objects into visually expressive scenes.",
      },
      "revista-balvanera": {
        titulo: "Balvanera Magazine I Cover and back cover",
        descripcion: "Cover and back cover design for a magazine inspired by the Buenos Aires neighborhood of Balvanera. The project takes as its starting point its visual identity, urban rhythm, and cultural diversity. Through the use of color, typography, and composition, it seeks to reflect the neighborhood's daily pulse and its mix of history, transit, and local life.",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
        descripcion: "During my internship at Bosch Mobility Aftermarket Argentina, I was part of the Marketing and Communication team, participating in the development and implementation of commercial and brand communication for different business units. My work ranged from product and service promotion to strategic support, integrating graphic design, visual identity coherence, and commercial objectives.",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
        descripcion: "Project developed for the logistics company Pick&Log, focused on designing visual templates and dashboards for Power BI within their logistics management system. The work integrated functional design and data visualization, aiming to optimize information reading and facilitate the monitoring of operational indicators.",
      },
      "coleccion-portuguese": {
        titulo: "Portuguese Collection",
        descripcion: "Mini collection inspired by the 'Portuguese' aesthetic, focusing on the use of color, textures, and artisanal details. The project includes the development of technical sheets, geometrals, and figurines, along with a conceptual proposal that combines cultural identity and contemporary design.",
      },
      "fotografia-moda": {
        titulo: "Fashion photography",
        descripcion: "Series of photographs taken for fashion design projects, focused on representing the central concept of each design. Through composition, light, and art direction, the images seek to highlight the visual identity and expressive character of each garment.",
      },
      "jeaneria-fichas": {
        titulo: "Jeanery I Technical sheets and geometry",
        descripcion: "Project focused on the technical development of denim garments. Includes detailed technical sheets, geometrals, and construction specifications addressing the structure, materials, and assembly processes of each piece.",
      },
      "prototipos-indumentaria": {
        titulo: "Garment prototypes",
        descripcion: "Development of handmade garments during the Fashion Design course. Each prototype explores the relationship between pattern making, materials, and construction, focusing on experimentation with forms, finishes, and the particular concept guiding each project.",
      },
      "video-casamiento-1995": {
        titulo: "Wedding and Honeymoon Video I 1995",
        descripcion: "Audiovisual project based on the family archive of my parents' wedding and honeymoon in 1995. Through editing and montage of the original material, the project reinterprets these images from a contemporary perspective, exploring the passage of time and how personal records can build identity.",
      },
      "fotografia-analogica": {
        titulo: "Analog photography",
        descripcion: "Series of analog photographs taken during a trip through Europe, with the intention of experimenting with new techniques and expired film rolls. The project works as a spontaneous record exploring light, color, and composition from a more personal perspective.",
      },
      "portfolio-video": {
        titulo: "Portfolio",
        descripcion: "Video portfolio compiling a selection of audiovisual works developed in Design IV, showcasing skills in editing, animation, and sound design.",
      },
      "mini-skirts-video": {
        titulo: "Mini Skirts - Mary Quant",
        descripcion: "Audiovisual piece exploring the miniskirt revolution through the figure of Mary Quant, combining archival material, animation, and sound design to build a visual narrative about fashion and women's liberation.",
      },
      "animated-teaser": {
        titulo: "Animated Teaser",
        descripcion: "Animated audiovisual piece presenting the universe of Clavis and connecting its characters, settings, and platforms through a dynamic visual narrative. The video serves as an introduction to the project and expands its story into new universes.",
      },
      "vlog-diario-video": {
        titulo: "Daily Vlog",
        descripcion: "Editing and montage project based on personal archival material, aiming to build a daily narrative that combines documentary recording and aesthetic exploration.",
      },
      "motocross-video": {
        titulo: "Motocross",
        descripcion: "Editing of motocross audiovisual material, working with rhythm, musical synchronization, and meaning construction based on action and movement.",
      },
      "indumentaria-video": {
        titulo: "Fashion Design",
        descripcion: "Audiovisual piece documenting and highlighting the garment design and creation process, integrating workshop images, model tests, and details of the final pieces.",
      },
    },
    herramientas: "TOOLS USED",
    tambien_te_puede_gustar: ":) You might also like:",
    volver_a: "Back to",
    cv: {
      descripcion: "Graphic designer and visual communicator with a hybrid profile combining creativity, strategic thinking, and technological tools. Experienced in international corporate environments, with comprehensive brand identity management and the ability to automate creative and operational processes. Results-oriented, with initiative, autonomous learning, and skills to adapt to multidisciplinary teams in dynamic contexts.",
      experiencia: "Work Experience",
      educacion: "Education",
      cursos: "COURSES",
      herramientas: "Tools",
      diseno_creatividad: "Design & Creativity",
      productividad: "Productivity",
      desarrollo: "Development & Prototyping",
      idiomas: "Languages",
      espanol: "Spanish",
      ingles: "English",
      italiano: "Italian",
      nativo: "Native",
      avanzado: "Advanced",
      basico: "Basic",
      habilidades: "Skills",
      descargar: "Download",
      cv_pdf: "CV PDF",
    },
  },
}

// ============================================================================
//  IDIOMA POR DEFECTO
// ============================================================================
export const DEFAULT_LANGUAGE: Language = "es"
