// ============================================================================
//  DICCIONARIO DE TEXTOS / TEXT DICTIONARY
// ============================================================================

export type Language = "es" | "en"

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
    descripciones: {
      diseno_grafico: string
      corporativo: string
      indumentaria: string
      personales: string
      edicion_video: string
    }
  }
  proyectos: {
    titulo: string
    descripcion: string
  }
  categorias: {
    diseno_grafico: { titulo: string; descripcion: string }
    corporativo: { titulo: string; descripcion: string }
    indumentaria: { titulo: string; descripcion: string }
    personales: { titulo: string; descripcion: string }
    edicion_video: { titulo: string; descripcion: string }
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
    exp1_role: string
    exp1_company: string
    exp1_desc: string
    exp2_role: string
    exp2_company: string
    exp2_desc: string
    exp3_role: string
    exp3_company: string
    exp3_desc: string
    exp4_role: string
    exp4_company: string
    exp4_desc: string
    exp5_role: string
    exp5_company: string
    exp5_desc: string
    edu1_title: string
    edu1_institution: string
    edu2_title: string
    edu2_institution: string
    edu3_title: string
    edu3_institution: string
    edu4_title: string
    edu4_institution: string
    skill1: string
    skill2: string
    skill3: string
    skill4: string
    skill5: string
    skill6: string
    skill7: string
    skill8: string
    skill9: string
    skill10: string
    skill11: string
    skill12: string
    skill13: string
    skill14: string
    skill15: string
    skill16: string
    skill17: string
    curso1: string
    curso2: string
    curso3: string
    curso4: string
    curso5: string
  }
}

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
      descripciones: {
        diseno_grafico: "Proyectos de diseño editorial, diseño 3D, comunicación visual e investigación tipográfica.",
        corporativo: "Trabajos desde Marketing y Comunicación. Diseño, estrategia y automatización.",
        indumentaria: "Diseño de indumentaria y experimentación visual desde el cuerpo.",
        personales: "Exploraciones creativas y proyectos experimentales.",
        edicion_video: "Edición, post-producción y animación de piezas audiovisuales para redes, eventos y proyectos personales.",
      }
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
      texto3: "Dicen que cuando no tenes experiencia, hay que mostrar los trabajos que tengas, aunque no te encanten. Y yo me lo tome literal.",
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
        descripcion: "Proyecto editorial centrado en el diseño y maquetación integral de un libro técnico.",
      },
      "diario-oasis": {
        titulo: "Periódico de Oasis I Backstage Times",
        descripcion: "Proyecto editorial que combina investigación visual, narrativa y diseño gráfico.",
      },
      "revistas-editorial": {
        titulo: "Revistas I Colección de Arte Amalia Lacroze de Fortabat",
        descripcion: "Proyecto editorial que toma como punto de partida la identidad del Museo Colección Amalia Lacroze de Fortabat.",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Infancia",
        descripcion: "Proyecto editorial y audiovisual desarrollado a partir de la creación de un fanzine narrativo sobre la infancia.",
      },
      "postales-cortazar": {
        titulo: "Postales I Julio Cortázar",
        descripcion: "Serie de postales conceptuales inspiradas en Historia verídica, un cuento de Julio Cortázar.",
      },
      "revista-clara-cava": {
        titulo: "Revista Clara Cava",
        descripcion: "Proyecto editorial inspirado en la artista argentina Clara Cava.",
      },
      "afiche-3d-cordoba": {
        titulo: "Afiche 3D I Córdoba",
        descripcion: "Composición tridimensional inspirada en la provincia de Córdoba, Argentina.",
      },
      "afiches-tipograficos": {
        titulo: "Afiches tipográficos",
        descripcion: "Serie de afiches experimentales que exploran la relación entre forma, estructura y lenguaje visual a partir de la tipografía.",
      },
      "cuento-infantil-3d": {
        titulo: "Cuento infantil I Ilustración 3D",
        descripcion: "Proyecto editorial que combina narrativa, diseño y modelado tridimensional.",
      },
      "modelado-3d-objetos": {
        titulo: "Modelado 3D I Objetos cotidianos",
        descripcion: "Ejercicio de observación, modelado e iluminación digital a partir de tres objetos de uso cotidiano.",
      },
      "revista-balvanera": {
        titulo: "Revista Balvanera I Tapa y contratapa",
        descripcion: "Diseño de tapa y contratapa para una revista inspirada en el barrio porteño de Balvanera.",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
        descripcion: "Durante mi pasantía en Bosch Mobility Aftermarket Argentina formé parte del equipo de Marketing y Comunicación.",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
        descripcion: "Proyecto desarrollado para la empresa de logística Pick&Log, enfocado en el diseño de plantillas visuales y dashboards para Power BI.",
      },
      "coleccion-portuguese": {
        titulo: "Colección Portuguese",
        descripcion: "Mini colección inspirada en la estética 'Portuguese', centrada en el uso del color, las texturas y los detalles artesanales.",
      },
      "fotografia-moda": {
        titulo: "Fotografía de moda",
        descripcion: "Serie de fotografías realizadas para proyectos de indumentaria, enfocadas en representar el concepto central de cada diseño.",
      },
      "jeaneria-fichas": {
        titulo: "Jeanería I Fichas técnicas y geometrales",
        descripcion: "Proyecto centrado en el desarrollo técnico de prendas de denim.",
      },
      "prototipos-indumentaria": {
        titulo: "Prototipos de indumentaria",
        descripcion: "Desarrollo de prendas confeccionadas a mano durante la cursada de Diseño de Indumentaria.",
      },
      "video-casamiento-1995": {
        titulo: "Video de Casamiento y Luna de Miel I 1995",
        descripcion: "Proyecto audiovisual realizado a partir del archivo familiar del casamiento y la luna de miel de mis padres en 1995.",
      },
      "fotografia-analogica": {
        titulo: "Fotografía analógica",
        descripcion: "Serie de fotografías analógicas tomadas durante un viaje por Europa.",
      },
      "portfolio-video": {
        titulo: "Portfolio",
        descripcion: "Video portfolio que recopila una selección de trabajos audiovisuales.",
      },
      "mini-skirts-video": {
        titulo: "Mini Skirts - Mary Quant",
        descripcion: "Pieza audiovisual que explora la revolución de la minifalda a través de la figura de Mary Quant.",
      },
      "animated-teaser": {
        titulo: "Animated Teaser",
        descripcion: "Pieza audiovisual animada que presenta el universo de Clavis.",
      },
      "vlog-diario-video": {
        titulo: "Vlog Diario",
        descripcion: "Proyecto de edición y montaje a partir de material de archivo personal.",
      },
      "motocross-video": {
        titulo: "Motocross",
        descripcion: "Edición de material audiovisual de motocross.",
      },
      "indumentaria-video": {
        titulo: "Indumentaria",
        descripcion: "Pieza audiovisual que documenta y pone en valor el proceso de diseño y confección de prendas.",
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
      exp1_role: "Diseñadora Digital Jr. - Marketing",
      exp1_company: "Cencosud - Jumbo, Disco y Vea",
      exp1_desc: "Desarrollo de piezas digitales para campañas de marketing, incluyendo emails, banners, contenidos audiovisuales masivos. Maquetación y edición de piezas de email marketing utilizando HTML5 y CSS. Adaptación de contenidos para distintos canales digitales con foco en usabilidad y conversión. Implementación de herramientas de inteligencia artificial y automatización para optimizar procesos creativos y productivos. Trabajo colaborativo con equipos de marketing en la ejecución de campañas digitales y estrategias omnicanal.",
      exp2_role: "Pasante de Marketing y Comunicación",
      exp2_company: "Bosch - Mobility Aftermarket",
      exp2_desc: "Trabajé en el área de comunicación de Bosch, líder global en soluciones automotrices, produciendo assets visuales para medios impresos y digitales: flyers, cartelería en vía pública, newsletters, presentaciones corporativas y edición de video. Mantuve la identidad visual de marca de forma consistente y asesoré a talleres de la red con propuestas gráficas personalizadas. Como parte del programa Young Talents 2025, diseñé e implementé un sistema con Power Apps, Excel y Power Automate para digitalizar el control de stock y pedidos de merchandising, reduciendo errores y automatizando el registro en tiempo real.",
      exp3_role: "Empleado Administrativo",
      exp3_company: "Cantiere SA",
      exp3_desc: "Gestioné el registro y control de facturación mediante planillas en Excel, mantuve legajos de empleados y colaboré en tareas de logística interna.",
      exp4_role: "Runner",
      exp4_company: "AACI - Asociación Argentina de Cultura Inglesa",
      exp4_desc: "Asistí en la coordinación operativa de exámenes internacionales en colegios: supervisión de aulas, apoyo a alumnos y control de espacios durante las evaluaciones.",
      exp5_role: "Asistente en desfiles de moda",
      exp5_company: "Perpetua",
      exp5_desc: "Participé en la producción de desfiles coordinando looks, asistiendo a las modelos y gestionando comunicaciones en redes sociales.",
      edu1_title: "Lic. Diseño Gráfico y Comunicación",
      edu1_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu2_title: "Técnico Universitario en Diseño Multimedia",
      edu2_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu3_title: "Lic. Diseño de Indumentaria - 60% completo",
      edu3_institution: "UBA/FADU - Universidad de Buenos Aires",
      edu4_title: "Bachillerato en Economía y Administración",
      edu4_institution: "Colegio Niño Jesús de Praga",
      skill1: "- Diseño Editorial",
      skill2: "- Identidad visual corporativa",
      skill3: "- Diseño 3D",
      skill4: "- Comunicación de marca",
      skill5: "- UX/UI Design",
      skill6: "- Motion Graphics",
      skill7: "- Fotografía",
      skill8: "- Retoque digital",
      skill9: "- Automatización de procesos",
      skill10: "- Comunicación con clientes",
      skill11: "- Trabajo en equipo multidisciplinario",
      skill12: "- Aprendizaje autónomo",
      skill13: "- Adaptabilidad tecnológica",
      skill14: "- Pensamiento creativo",
      skill15: "- Atención al detalle",
      skill16: "- Vibe Coding",
      skill17: "- Mailing",
      curso1: "Rebranding - Identidades Visuales Eficientes",
      curso2: "Figurines en Adobe Illustrator",
      curso3: "Adobe Illustrator para Diseño de Moda",
      curso4: "Adobe Photoshop e Illustrator",
      curso5: "Fotografía",
    },
  },

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
      descripciones: {
        diseno_grafico: "Projects in editorial design, 3D design, visual communication and typographic research.",
        corporativo: "Work from Marketing and Communication. Design, strategy and automation.",
        indumentaria: "Fashion design and visual experimentation from the body.",
        personales: "Creative explorations and experimental projects.",
        edicion_video: "Editing, post-production and animation of audiovisual pieces for social media, events and personal projects.",
      }
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
      texto3: "They say that when you don't have experience, you should show whatever work you have, even if you're not proud of it. And I took it literally.",
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
        descripcion: "Editorial project focused on the comprehensive design and layout of a technical book.",
      },
      "diario-oasis": {
        titulo: "Oasis Newspaper I Backstage Times",
        descripcion: "Editorial project that combines visual research, narrative, and graphic design.",
      },
      "revistas-editorial": {
        titulo: "Magazines I Amalia Lacroze de Fortabat Art Collection",
        descripcion: "Editorial project based on the identity of the Amalia Lacroze de Fortabat Art Collection Museum.",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Childhood",
        descripcion: "Editorial and audiovisual project developed from the creation of a narrative fanzine about childhood.",
      },
      "postales-cortazar": {
        titulo: "Postcards I Julio Cortázar",
        descripcion: "Series of conceptual postcards inspired by Historia verídica, a short story by Julio Cortázar.",
      },
      "revista-clara-cava": {
        titulo: "Clara Cava Magazine",
        descripcion: "Editorial project inspired by Argentine artist Clara Cava.",
      },
      "afiche-3d-cordoba": {
        titulo: "3D Poster I Córdoba",
        descripcion: "Three-dimensional composition inspired by the province of Córdoba, Argentina.",
      },
      "afiches-tipograficos": {
        titulo: "Typographic posters",
        descripcion: "Series of experimental posters exploring the relationship between form, structure, and visual language through typography.",
      },
      "cuento-infantil-3d": {
        titulo: "Children's story I 3D Illustration",
        descripcion: "Editorial project combining narrative, design, and three-dimensional modeling.",
      },
      "modelado-3d-objetos": {
        titulo: "3D Modeling I Everyday objects",
        descripcion: "Exercise in observation, modeling, and digital lighting based on three everyday objects.",
      },
      "revista-balvanera": {
        titulo: "Balvanera Magazine I Cover and back cover",
        descripcion: "Cover and back cover design for a magazine inspired by the Buenos Aires neighborhood of Balvanera.",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
        descripcion: "During my internship at Bosch Mobility Aftermarket Argentina, I was part of the Marketing and Communication team.",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
        descripcion: "Project developed for the logistics company Pick&Log, focused on designing visual templates and dashboards for Power BI.",
      },
      "coleccion-portuguese": {
        titulo: "Portuguese Collection",
        descripcion: "Mini collection inspired by the 'Portuguese' aesthetic, focusing on the use of color, textures, and artisanal details.",
      },
      "fotografia-moda": {
        titulo: "Fashion photography",
        descripcion: "Series of photographs taken for fashion design projects, focused on representing the central concept of each design.",
      },
      "jeaneria-fichas": {
        titulo: "Jeanery I Technical sheets and geometry",
        descripcion: "Project focused on the technical development of denim garments.",
      },
      "prototipos-indumentaria": {
        titulo: "Garment prototypes",
        descripcion: "Development of handmade garments during the Fashion Design course.",
      },
      "video-casamiento-1995": {
        titulo: "Wedding and Honeymoon Video I 1995",
        descripcion: "Audiovisual project based on the family archive of my parents' wedding and honeymoon in 1995.",
      },
      "fotografia-analogica": {
        titulo: "Analog photography",
        descripcion: "Series of analog photographs taken during a trip through Europe.",
      },
      "portfolio-video": {
        titulo: "Portfolio",
        descripcion: "Video portfolio compiling a selection of audiovisual works.",
      },
      "mini-skirts-video": {
        titulo: "Mini Skirts - Mary Quant",
        descripcion: "Audiovisual piece exploring the miniskirt revolution through the figure of Mary Quant.",
      },
      "animated-teaser": {
        titulo: "Animated Teaser",
        descripcion: "Animated audiovisual piece presenting the universe of Clavis.",
      },
      "vlog-diario-video": {
        titulo: "Daily Vlog",
        descripcion: "Editing and montage project based on personal archival material.",
      },
      "motocross-video": {
        titulo: "Motocross",
        descripcion: "Editing of motocross audiovisual material.",
      },
      "indumentaria-video": {
        titulo: "Fashion Design",
        descripcion: "Audiovisual piece documenting and highlighting the garment design and creation process.",
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
      exp1_role: "Digital Designer Jr. - Marketing",
      exp1_company: "Cencosud - Jumbo, Disco y Vea",
      exp1_desc: "Development of digital assets for marketing campaigns, including emails, banners, and mass audiovisual content. Layout and editing of email marketing pieces using HTML5 and CSS. Adaptation of content for different digital channels with a focus on usability and conversion. Implementation of artificial intelligence and automation tools to optimize creative and productive processes. Collaborative work with marketing teams in the execution of digital campaigns and omnichannel strategies.",
      exp2_role: "Marketing and Communication Intern",
      exp2_company: "Bosch - Mobility Aftermarket",
      exp2_desc: "Worked in Bosch's communication area, a global leader in automotive solutions, producing visual assets for print and digital media: flyers, public signage, newsletters, corporate presentations, and video editing. Maintained consistent brand visual identity and advised network workshops with personalized graphic proposals. As part of the Young Talents 2025 program, I designed and implemented a system with Power Apps, Excel, and Power Automate to digitize merchandising stock control and orders, reducing errors and automating real-time recording.",
      exp3_role: "Administrative Employee",
      exp3_company: "Cantiere SA",
      exp3_desc: "Managed invoicing registration and control using Excel spreadsheets, maintained employee files, and collaborated on internal logistics tasks.",
      exp4_role: "Runner",
      exp4_company: "AACI - Asociación Argentina de Cultura Inglesa",
      exp4_desc: "Assisted in the operational coordination of international exams in schools: classroom supervision, student support, and space control during evaluations.",
      exp5_role: "Fashion Show Assistant",
      exp5_company: "Perpetua",
      exp5_desc: "Participated in fashion show production coordinating looks, assisting models, and managing social media communications.",
      edu1_title: "B.A. Graphic Design and Communication",
      edu1_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu2_title: "University Technician in Multimedia Design",
      edu2_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu3_title: "B.A. Fashion Design - 60% completed",
      edu3_institution: "UBA/FADU - Universidad de Buenos Aires",
      edu4_title: "High School Diploma in Economics and Administration",
      edu4_institution: "Colegio Niño Jesús de Praga",
      skill1: "- Editorial Design",
      skill2: "- Corporate Visual Identity",
      skill3: "- 3D Design",
      skill4: "- Brand Communication",
      skill5: "- UX/UI Design",
      skill6: "- Motion Graphics",
      skill7: "- Photography",
      skill8: "- Digital Retouching",
      skill9: "- Process Automation",
      skill10: "- Client Communication",
      skill11: "- Multidisciplinary Teamwork",
      skill12: "- Autonomous Learning",
      skill13: "- Technological Adaptability",
      skill14: "- Creative Thinking",
      skill15: "- Attention to Detail",
      skill16: "- Vibe Coding",
      skill17: "- Mailing",
      curso1: "Rebranding - Efficient Visual Identities",
      curso2: "Figurines in Adobe Illustrator",
      curso3: "Adobe Illustrator for Fashion Design",
      curso4: "Adobe Photoshop and Illustrator",
      curso5: "Photography",
    },
  },
}

export const DEFAULT_LANGUAGE: Language = "es"
