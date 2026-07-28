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
    leer_mas: string
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
    // EXPERIENCIAS
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
    // EDUCACIÓN
    edu1_title: string
    edu1_institution: string
    edu2_title: string
    edu2_institution: string
    edu3_title: string
    edu3_institution: string
    edu4_title: string
    edu4_institution: string
    // HABILIDADES
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
    // CURSOS
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
      leer_mas: "Leer más",
    },
    video: {
      titulo: "Mini presentación",
      descripcion: "Video portfolio - Diseño IV",
    },
    proyectos_detalle: {
      "libro-tecnico-manual": {
        titulo: "Libro técnico editorial I Manual",
        descripcion: "Proyecto editorial centrado en el diseño y maquetación integral de un libro técnico. El trabajo abarca la organización y jerarquización de contenidos, el desarrollo de una grilla editorial y la construcción de un sistema tipográfico que facilita la lectura y navegación de la información.",
      },
      "diario-oasis": {
        titulo: "Periódico de Oasis I Backstage Times",
        descripcion: "Proyecto editorial que combina investigación visual, narrativa y diseño gráfico. Desarrollado como un periódico musical inspirada en la banda británica Oasis, explora su historia, estética y legado cultural a través de recursos editoriales, tipográficos y fotográficos.",
      },
      "revistas-editorial": {
        titulo: "Revistas I Colección de Arte Amalia Lacroze de Fortabat",
        descripcion: "Proyecto editorial que toma como punto de partida la identidad del Museo Colección Amalia Lacroze de Fortabat. Desarrollado como un sistema de revistas institucionales, aborda tres exposiciones diferentes a través de recursos editoriales, tipográficos y fotográficos.",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Infancia",
        descripcion: "Proyecto editorial y audiovisual desarrollado a partir de la creación de un fanzine narrativo sobre la infancia. La propuesta toma la forma del diario íntimo de una niña, donde recuerdos, dibujos y fotografías construyen un diálogo constante entre su mirada infantil y su voz adulta.",
      },
      "postales-cortazar": {
        titulo: "Postales I Julio Cortázar",
        descripcion: "Serie de postales conceptuales inspiradas en Historia verídica, un cuento de Julio Cortázar. El proyecto explora la fragilidad, el azar y la poética de lo cotidiano a través de la composición visual y el uso simbólico del color y la forma.",
      },
      "revista-clara-cava": {
        titulo: "Revista Clara Cava",
        descripcion: "Proyecto editorial inspirado en la artista argentina Clara Cava. La revista propone una lectura visual de su universo musical a través del color, la tipografía y la composición.",
      },
      "afiche-3d-cordoba": {
        titulo: "Afiche 3D I Córdoba",
        descripcion: "Composición tridimensional inspirada en la provincia de Córdoba, Argentina. El proyecto combina elementos gráficos y volumétricos para reinterpretar íconos característicos de su paisaje y cultura.",
      },
      "afiches-tipograficos": {
        titulo: "Afiches tipográficos",
        descripcion: "Serie de afiches experimentales que exploran la relación entre forma, estructura y lenguaje visual a partir de la tipografía. Cada pieza combina composición, ritmo y contraste para comunicar ideas a través del signo tipográfico como elemento principal.",
      },
      "cuento-infantil-3d": {
        titulo: "Cuento infantil I Ilustración 3D",
        descripcion: "Proyecto editorial que combina narrativa, diseño y modelado tridimensional. Basado en El hombrecito del azulejo, cuento de Manuel Mujica Lainez, se desarrollaron los personajes y escenarios mediante ilustración 3D.",
      },
      "modelado-3d-objetos": {
        titulo: "Modelado 3D I Objetos cotidianos",
        descripcion: "Ejercicio de observación, modelado e iluminación digital a partir de tres objetos de uso cotidiano. El proyecto busca reproducir de forma precisa la materialidad, las proporciones y las condiciones lumínicas de cada elemento.",
      },
      "revista-balvanera": {
        titulo: "Revista Balvanera I Tapa y contratapa",
        descripcion: "Diseño de tapa y contratapa para una revista inspirada en el barrio porteño de Balvanera. El proyecto toma como punto de partida su identidad visual, su ritmo urbano y la diversidad cultural que lo caracteriza.",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
        descripcion: "Durante mi pasantía en Bosch Mobility Aftermarket Argentina formé parte del equipo de Marketing y Comunicación, participando en el desarrollo e implementación de comunicación comercial y de marca para distintas unidades de negocio.",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
        descripcion: "Proyecto desarrollado para la empresa de logística Pick&Log, enfocado en el diseño de plantillas visuales y dashboards para Power BI dentro de su sistema de gestión logística.",
      },
      "coleccion-portuguese": {
        titulo: "Colección Portuguese",
        descripcion: "Mini colección inspirada en la estética 'Portuguese', centrada en el uso del color, las texturas y los detalles artesanales. El proyecto incluye el desarrollo de fichas técnicas, geometrales y figurines.",
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
        descripcion: "Proyecto audiovisual realizado a partir del archivo familiar del casamiento y la luna de miel de mis padres en 1995. A través de la edición y el montaje del material original, el proyecto reinterpreta esas imágenes desde una mirada actual.",
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
        descripcion: "Pieza audiovisual animada que presenta el universo de Clavis y conecta sus personajes, escenarios y plataformas a través de una narrativa visual dinámica.",
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
      // EXPERIENCIAS
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
      // EDUCACIÓN
      edu1_title: "Lic. Diseño Gráfico y Comunicación",
      edu1_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu2_title: "Técnico Universitario en Diseño Multimedia",
      edu2_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu3_title: "Lic. Diseño de Indumentaria - 60% completo",
      edu3_institution: "UBA/FADU - Universidad de Buenos Aires",
      edu4_title: "Bachillerato en Economía y Administración",
      edu4_institution: "Colegio Niño Jesús de Praga",
      // HABILIDADES
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
      // CURSOS
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
      leer_mas: "Read more",
    },
    video: {
      titulo: "Mini presentation",
      descripcion: "Video portfolio - Design IV",
    },
    proyectos_detalle: {
      "libro-tecnico-manual": {
        titulo: "Technical editorial book I Manual",
        descripcion: "Editorial project focused on the comprehensive design and layout of a technical book. The work covers content organization and hierarchization, the development of an editorial grid, and the construction of a typographic system that facilitates reading and information navigation.",
      },
      "diario-oasis": {
        titulo: "Oasis Newspaper I Backstage Times",
        descripcion: "Editorial project that combines visual research, narrative, and graphic design. Developed as a music newspaper inspired by the British band Oasis, it explores their history, aesthetics, and cultural legacy through editorial, typographic, and photographic resources.",
      },
      "revistas-editorial": {
        titulo: "Magazines I Amalia Lacroze de Fortabat Art Collection",
        descripcion: "Editorial project based on the identity of the Amalia Lacroze de Fortabat Art Collection Museum. Developed as a system of institutional magazines, it addresses three different exhibitions through editorial, typographic, and photographic resources.",
      },
      "fanzine-infancia": {
        titulo: "Fanzine | Childhood",
        descripcion: "Editorial and audiovisual project developed from the creation of a narrative fanzine about childhood. The proposal takes the form of a girl's intimate diary, where memories, drawings, and photographs build a constant dialogue between her childhood gaze and her adult voice.",
      },
      "postales-cortazar": {
        titulo: "Postcards I Julio Cortázar",
        descripcion: "Series of conceptual postcards inspired by Historia verídica, a short story by Julio Cortázar. The project explores fragility, chance, and the poetics of everyday life through visual composition and the symbolic use of color and form.",
      },
      "revista-clara-cava": {
        titulo: "Clara Cava Magazine",
        descripcion: "Editorial project inspired by Argentine artist Clara Cava. The magazine proposes a visual reading of her musical universe through color, typography, and composition.",
      },
      "afiche-3d-cordoba": {
        titulo: "3D Poster I Córdoba",
        descripcion: "Three-dimensional composition inspired by the province of Córdoba, Argentina. The project combines graphic and volumetric elements to reinterpret characteristic icons of its landscape and culture.",
      },
      "afiches-tipograficos": {
        titulo: "Typographic posters",
        descripcion: "Series of experimental posters exploring the relationship between form, structure, and visual language through typography. Each piece combines composition, rhythm, and contrast to communicate ideas through the typographic sign as the main element.",
      },
      "cuento-infantil-3d": {
        titulo: "Children's story I 3D Illustration",
        descripcion: "Editorial project combining narrative, design, and three-dimensional modeling. Based on El hombrecito del azulejo, a short story by Manuel Mujica Lainez, characters and settings were developed through 3D illustration.",
      },
      "modelado-3d-objetos": {
        titulo: "3D Modeling I Everyday objects",
        descripcion: "Exercise in observation, modeling, and digital lighting based on three everyday objects. The project aims to accurately reproduce the materiality, proportions, and lighting conditions of each element.",
      },
      "revista-balvanera": {
        titulo: "Balvanera Magazine I Cover and back cover",
        descripcion: "Cover and back cover design for a magazine inspired by the Buenos Aires neighborhood of Balvanera. The project takes as its starting point its visual identity, urban rhythm, and cultural diversity.",
      },
      "carteles-bosch": {
        titulo: "Robert Bosch Argentina",
        descripcion: "During my internship at Bosch Mobility Aftermarket Argentina, I was part of the Marketing and Communication team, participating in the development and implementation of commercial and brand communication for different business units.",
      },
      "power-bi-picklog": {
        titulo: "Pick&Log",
        descripcion: "Project developed for the logistics company Pick&Log, focused on designing visual templates and dashboards for Power BI within their logistics management system.",
      },
      "coleccion-portuguese": {
        titulo: "Portuguese Collection",
        descripcion: "Mini collection inspired by the 'Portuguese' aesthetic, focusing on the use of color, textures, and artisanal details. The project includes the development of technical sheets, geometrals, and figurines.",
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
        descripcion: "Audiovisual project based on the family archive of my parents' wedding and honeymoon in 1995. Through editing and montage of the original material, the project reinterprets these images from a contemporary perspective.",
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
        descripcion: "Animated audiovisual piece presenting the universe of Clavis and connecting its characters, settings, and platforms through a dynamic visual narrative.",
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
      // EXPERIENCIAS
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
      // EDUCACIÓN
      edu1_title: "B.A. Graphic Design and Communication",
      edu1_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu2_title: "University Technician in Multimedia Design",
      edu2_institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
      edu3_title: "B.A. Fashion Design - 60% completed",
      edu3_institution: "UBA/FADU - Universidad de Buenos Aires",
      edu4_title: "High School Diploma in Economics and Administration",
      edu4_institution: "Colegio Niño Jesús de Praga",
      // HABILIDADES
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
      // CURSOS
      curso1: "Rebranding - Efficient Visual Identities",
      curso2: "Figurines in Adobe Illustrator",
      curso3: "Adobe Illustrator for Fashion Design",
      curso4: "Adobe Photoshop and Illustrator",
      curso5: "Photography",
    },
  },
}

export const DEFAULT_LANGUAGE: Language = "es"
