export type Lang = "es" | "en"

/* ============================================================
   UI STRINGS (interfaz general)
============================================================ */
export const ui = {
  es: {
    // Navegación
    "nav.home": "Home",
    "nav.projects": "Proyectos",
    "nav.cv": "CV",
    "nav.bio": "Bio",
    "nav.contact": "Contacto",
    "nav.langLabel": "Cambiar idioma",
    "theme.toLight": "Activar modo claro",
    "theme.toDark": "Activar modo oscuro",
    // Hero / Home
    "hero.portfolio": "Portfolio",
    "hero.subtitle": "Diseño Gráfico y Comunicación",
    "hero.scroll": "Scroll",
    "home.miniPresentation": "Mini presentación",
    "home.videoCaption": "Video portfolio - Diseño IV",
    "home.videoUnsupported": "Tu navegador no soporta videos HTML5.",
    "home.aboutIntro": "Estudiante de Diseño Gráfico y Comunicación en UCES.",
    "home.aboutText":
      "Algunos sienten pasión por un artista, un famoso o un deporte. Hace poco me preguntaron cuál era la mía, y no supe qué responder. Me quedé pensando, hasta que entendí que mi pasión es lo que hago.",
    "home.readMore": "Leer más →",
    // Proyectos (listado)
    "projects.title": "Proyectos",
    "projects.description":
      "Una selección de trabajos en diseño gráfico, comunicación, indumentaria y proyectos personales.",
    "category.back": "Proyectos",
    // Detalle de proyecto
    "project.related": ":) También te puede gustar:",
    "project.toolsUsed": "Herramientas utilizadas",
    "project.skills": "Herramientas y tecnologías",
    // Contacto
    "contact.title": "Contacto",
    "contact.subtitle": "¿Conectamos?",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.locationValue": "Buenos Aires, Argentina",
    "contact.social": "Redes",
    // Bio
    "bio.title": "Bio",
    "bio.cta": "Ver currículum completo",
    "bio.p1":
      "Dicen que cuando no tenes experiencia, hay que mostrar los trabajos que tengas, aunque no te encanten. Y yo me lo tome literal.",
    "bio.p2":
      "Estos son algunos de mis primeros proyectos: algo hecho en Microsoft Paint en 2011, lienzo y acrilico en 2013, y Procreate en 2024.",
    "bio.p3":
      "Algunos sienten pasion por un artista, un famoso o un deporte. Hace poco me preguntaron cual era la mia, y no supe que responder. Me quede pensando, hasta que entendi que mi pasion es lo que hago.",
    "bio.p4":
      "Desde chica siempre me gusto crear: armar piezas de todo tipo, editar fotos de amigos, mirar Art Attack todos los dias o sacar fotos cada vez que podia. Mi vida siempre estuvo atravesada por el diseno, de distintas formas. Cualquier excusa para disenar —aunque no lo sabia— era, para mi, el mejor favor que me podian pedir.",
    "bio.captionPaint": "Microsoft Paint 2011",
    "bio.captionHand": "A mano 2013",
    "bio.captionProcreate": "Procreate 2024",
    // CV
    "cv.title": "CV · María Boronat",
    "cv.summary":
      "Diseñadora gráfica y comunicadora visual con perfil híbrido que combina creatividad, pensamiento estratégico y herramientas tecnológicas. Con experiencia en entornos corporativos internacionales, manejo integral de identidad de marca y capacidad para automatizar procesos creativos y operativos. Orientada a resultados, con iniciativa propia, aprendizaje autónomo y habilidades para adaptarse a equipos multidisciplinarios en contextos dinámicos.",
    "cv.experience": "Experiencia Laboral",
    "cv.education": "Educación",
    "cv.courses": "Cursos",
    "cv.tools": "Herramientas",
    "cv.toolsDesign": "Diseño & Creatividad",
    "cv.toolsProductivity": "Productividad",
    "cv.toolsDev": "Desarrollo & Prototipado",
    "cv.languages": "Idiomas",
    "cv.spanish": "Español",
    "cv.english": "Inglés",
    "cv.italian": "Italiano",
    "cv.native": "Nativo",
    "cv.advanced": "Avanzado",
    "cv.basic": "Básico",
    "cv.skills": "Habilidades",
    "cv.download": "Descargar",
    "cv.downloadPdf": "CV en PDF",
    "cv.present": "Presente",
    // Botón volver arriba
    "backToTop": "Volver arriba",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.bio": "Bio",
    "nav.contact": "Contact",
    "nav.langLabel": "Change language",
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",
    // Hero / Home
    "hero.portfolio": "Portfolio",
    "hero.subtitle": "Graphic Design & Communication",
    "hero.scroll": "Scroll",
    "home.miniPresentation": "Mini presentation",
    "home.videoCaption": "Video portfolio - Design IV",
    "home.videoUnsupported": "Your browser does not support HTML5 video.",
    "home.aboutIntro": "Graphic Design and Communication student at UCES.",
    "home.aboutText":
      "Some people are passionate about an artist, a celebrity or a sport. I was recently asked what mine was, and I didn't know how to answer. I kept thinking about it, until I understood that my passion is what I do.",
    "home.readMore": "Read more →",
    // Projects (listing)
    "projects.title": "Projects",
    "projects.description":
      "A selection of work in graphic design, communication, fashion and personal projects.",
    "category.back": "Projects",
    // Project detail
    "project.related": ":) You might also like:",
    "project.toolsUsed": "Tools used",
    "project.skills": "Tools & technologies",
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Shall we connect?",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Buenos Aires, Argentina",
    "contact.social": "Social",
    // Bio
    "bio.title": "Bio",
    "bio.cta": "View full résumé",
    "bio.p1":
      "They say that when you have no experience, you should show whatever work you have, even if you don't love it. And I took that literally.",
    "bio.p2":
      "These are some of my first projects: something made in Microsoft Paint in 2011, canvas and acrylic in 2013, and Procreate in 2024.",
    "bio.p3":
      "Some people are passionate about an artist, a celebrity or a sport. I was recently asked what mine was, and I didn't know how to answer. I kept thinking about it, until I understood that my passion is what I do.",
    "bio.p4":
      "Ever since I was little I always loved to create: putting together all kinds of pieces, editing photos of friends, watching Art Attack every day or taking photos whenever I could. My life was always shaped by design, in different ways. Any excuse to design —even though I didn't know it— was, for me, the best favor anyone could ask of me.",
    "bio.captionPaint": "Microsoft Paint 2011",
    "bio.captionHand": "By hand 2013",
    "bio.captionProcreate": "Procreate 2024",
    // CV
    "cv.title": "CV · María Boronat",
    "cv.summary":
      "Graphic designer and visual communicator with a hybrid profile that combines creativity, strategic thinking and technological tools. With experience in international corporate environments, comprehensive brand identity management and the ability to automate creative and operational processes. Results-oriented, with self-initiative, autonomous learning and the ability to adapt to multidisciplinary teams in dynamic contexts.",
    "cv.experience": "Work Experience",
    "cv.education": "Education",
    "cv.courses": "Courses",
    "cv.tools": "Tools",
    "cv.toolsDesign": "Design & Creativity",
    "cv.toolsProductivity": "Productivity",
    "cv.toolsDev": "Development & Prototyping",
    "cv.languages": "Languages",
    "cv.spanish": "Spanish",
    "cv.english": "English",
    "cv.italian": "Italian",
    "cv.native": "Native",
    "cv.advanced": "Advanced",
    "cv.basic": "Basic",
    "cv.skills": "Skills",
    "cv.download": "Download",
    "cv.downloadPdf": "CV as PDF",
    "cv.present": "Present",
    // Back to top button
    "backToTop": "Back to top",
  },
} as const

export type UIKey = keyof (typeof ui)["es"]

/* ============================================================
   CATEGORÍAS (título + descripción)
============================================================ */
export const categoryEn: Record<string, { title: string; description: string }> = {
  "diseno-grafico": {
    title: "Graphic Design",
    description:
      "Editorial design, 3D design, visual communication and typographic research projects developed during the Graphic Design and Communication degree.",
  },
  corporativo: {
    title: "Corporate",
    description:
      "Projects created within companies where design works as a strategic tool to communicate, organize information and improve internal and commercial processes.",
  },
  "indumentaria-ilustracion": {
    title: "Fashion & Illustration",
    description:
      "A series of projects linked to fashion design and visual experimentation through the body, form and texture.",
  },
  personales: {
    title: "Personal Projects",
    description:
      "Creative explorations and experimental projects. Work born from curiosity and creative freedom.",
  },
  "edicion-video": {
    title: "Video Editing",
    description:
      "A series of audiovisual pieces developed within the Design IV course, based on original and pre-existing material. The proposals combine editing, animation and sound design, focusing on rhythm, meaning-making and aesthetic coherence in each project.",
  },
}

/* Nombres de categoría (breadcrumb / etiqueta) */
export const categoryNameEn: Record<string, string> = {
  "Diseño Gráfico": "Graphic Design",
  Corporativo: "Corporate",
  "Indumentaria e Ilustración": "Fashion & Illustration",
  "Proyectos Personales": "Personal Projects",
  "Edición de Video": "Video Editing",
}

/* ============================================================
   DESCRIPCIONES DE LAS TARJETAS DEL HOME
============================================================ */
export const homeServiceEn: Record<string, string> = {
  "diseno-grafico":
    "Editorial design, 3D design, visual communication and typographic research projects.",
  corporativo: "Work from Marketing and Communication. Design, strategy and automation.",
  indumentaria: "Fashion design and visual experimentation through the body.",
  personales: "Creative explorations and experimental projects.",
  "edicion-video":
    "Editing, post-production and animation of audiovisual pieces for social media, events and personal projects.",
}

/* ============================================================
   PROYECTOS (título + descripción en inglés)
   Se usan como override cuando el idioma es EN.
============================================================ */
export const projectEn: Record<
  string,
  {
    title?: string
    description?: string
    /* Traducción de secciones de texto, indexadas por el título original en ES */
    texts?: Record<string, { title?: string; content?: string }>
  }
> = {
  "diario-oasis": {
    title: "Oasis Newspaper I Backstage Times",
    description:
      "Editorial project combining visual research, narrative and graphic design. Developed as a music newspaper inspired by the British band Oasis, it explores their history, aesthetics and cultural legacy through editorial, typographic and photographic resources. The focus is on art direction, the editorial grid and building a visual identity consistent with the band's universe.",
  },
  "revistas-editorial": {
    title: "Magazines I Amalia Lacroze de Fortabat Art Collection",
    description:
      "Editorial project taking the identity of the Amalia Lacroze de Fortabat Collection Museum as its starting point. Developed as a system of institutional magazines, it addresses three different exhibitions through editorial, typographic and photographic resources. The focus is on building a coherent visual narrative, organized through an editorial grid, and developing a graphic identity that dialogues with the museum's character, heritage and contemporary aesthetic.",
    texts: {
      "Revista - Eduardo Estupía": { title: "Magazine - Eduardo Estupía" },
      "Revista - Julio Le Parc": { title: "Magazine - Julio Le Parc" },
      "Revista - Ariadna Pastorini": { title: "Magazine - Ariadna Pastorini" },
    },
  },
  "postales-cortazar": {
    title: "Postcards I Julio Cortázar",
    description:
      "A series of conceptual postcards inspired by Historia verídica, a short story by Julio Cortázar. The project explores fragility, chance and the poetics of the everyday through visual composition and the symbolic use of color and form. Each postcard works as an independent fragment, but together they form an open and sensitive narrative.",
  },
  "revista-clara-cava": {
    title: "Clara Cava Magazine",
    description:
      "Editorial project inspired by Argentine artist Clara Cava. The magazine proposes a visual reading of her musical universe through color, typography and composition. It combines graphic analysis and layout design to build an identity that reflects the experimentation and sensitivity present in her work.",
  },
  "afiche-3d-cordoba": {
    title: "3D Poster I Córdoba",
    description:
      "Three-dimensional composition inspired by the province of Córdoba, Argentina. The project combines graphic and volumetric elements to reinterpret icons characteristic of its landscape and culture, such as the Cuckoo Clock and the mountain colors. Based on the visual identity and graphic language of the province's official tourism website, it seeks to convey its essence from a contemporary approach through digital modeling and lighting.",
  },
  "afiches-tipograficos": {
    title: "Typographic Posters",
    description:
      "A series of experimental posters exploring the relationship between form, structure and visual language through typography. Each piece combines composition, rhythm and contrast to communicate ideas using the typographic sign as the main element. The project investigates how the letter can transcend its textual function to become image and visual expression.",
  },
  "cuento-infantil-3d": {
    title: "Children's Story I 3D Illustration",
    description:
      "Editorial project combining narrative, design and three-dimensional modeling. Based on El hombrecito del azulejo, a story by Manuel Mujica Lainez, the characters and settings were developed through 3D illustration, integrating color, texture and volume to build a visual universe coherent with the story. The complete book was also designed and laid out, working on the relationship between text and image to enhance the narrative visually.",
  },
  "modelado-3d-objetos": {
    title: "3D Modeling I Everyday Objects",
    description:
      "An exercise in observation, digital modeling and lighting based on three everyday objects. The project seeks to accurately reproduce the materiality, proportions and lighting conditions of each element, exploring how the environment and point of view transform its perception. The proposal combines technique and composition to turn simple objects into visually expressive scenes.",
  },
  "revista-balvanera": {
    title: "Balvanera Magazine I Cover and back cover",
    description:
      "Cover and back cover design for a magazine inspired by the Buenos Aires neighborhood of Balvanera. The project takes its visual identity, urban rhythm and cultural diversity as a starting point. Through the use of color, typography and composition, it seeks to reflect the neighborhood's daily pulse and its mix of history, transit and local life.",
  },
  "portfolio-video": { title: "Portfolio" },
  "mini-skirts-video": { title: "Mini Skirts - Mary Quant" },
  "vlog-diario-video": { title: "Daily Vlog" },
  "motocross-video": { title: "Motocross" },
  "indumentaria-video": { title: "Fashion" },
  "carteles-bosch": {
    title: "Robert Bosch Argentina",
    description:
      "During my internship at Bosch Mobility Aftermarket Argentina, I was part of the Marketing and Communication team, participating in the development and implementation of commercial and brand communication for different business units.\n\nMy work ranged from product and service promotion to strategic support, integrating graphic design, visual identity consistency and commercial objectives. I worked on multiple media and formats, adapting global guidelines to local needs and collaborating with different areas to ensure clear, consistent and results-oriented communication.\n\nBeyond creative development, I took on responsibilities related to coordination with suppliers and regional teams, as well as support in administrative processes and the organization of internal and external events.",
    texts: {
      "Young Talents – Automatización de pedidos y control de stock": {
        title: "Young Talents – Order automation and stock control",
        content:
          "Project developed within the internal Young Talents 2025 program, focused on the digitalization and automation of the merchandising order and stock control process.\n\nBased on the detection of operational problems —manual data entry, lack of records and outdated data— I designed and implemented an integrated system with Power Apps, Excel and Power Automate that made it possible to formalize orders, update stock in real time and automatically generate a history for later analysis.\n\nThe solution reduced errors, optimized operational times and left a replicable base for other areas. The project was presented to management within the program.\n\n<a href='/images/corporativo/ytalents/presentacion-portfolio.pdf' download class='inline-block mt-4 text-sm font-medium text-white hover:underline underline-offset-4'>Learn more →</a>",
      },
      "Diseño de cartelería en vía pública": {
        title: "Outdoor signage design",
        content:
          "I had the opportunity to design and produce my first outdoor billboards. The pieces were created to promote the Bosch Training Center, maintaining the brand's visual identity and adapting it to different formats and outdoor media.",
      },
      "Merchandising & Materiales Promocionales": {
        title: "Merchandising & Promotional Materials",
        content:
          "Design and development of materials applied to different commercial and brand actions: stickers, wraps, bags, notepads, notebooks, keychains, catalogs, newsletters and social media pieces. Work focused on visual coherence, functionality and alignment with commercial objectives.",
      },
      "Asesoramiento y diseño para talleres mecánicos": {
        title: "Consulting and design for mechanical workshops",
        content:
          "Development of visual proposals for workshops, integrating their commercial needs with global brand guidelines.\n\nThe work included the design of wraps and graphic applications on façades, customized visual adaptations and the creation of photomontages prior to joining the network. These visualizations allowed clients to imagine the result of their workshop merged with the Bosch identity, working as a strategic tool in the decision-making process.\n\nThe experience involved direct contact with clients, analysis of the commercial environment and spatial interpretation, ensuring a coherent and effective implementation of the corporate identity in real contexts.",
      },
      "Comunicación Comercial & Marca": {
        title: "Commercial Communication & Brand",
        content:
          "Product flyers: Development of graphic pieces for technical sheets, launches and commercial offers aimed at distributors and the commercial network. Definition and consolidation of an aesthetic aligned with the global brand identity, applied consistently over time.\n\nCorporate and commercial presentations: Design and optimization of internal and external presentations, ensuring visual coherence, clarity of information and suitability to the context of use.\n\nWrapped – Annual summary: Conceptualization and design of the annual communication results summary (social media, newsletters and digital metrics), aimed at the different teams within the division.",
      },
      "Gestión y Soporte Operativo": {
        title: "Operational Management & Support",
        content:
          "Beyond creative development, I participated in:\n• Coordination with suppliers and agencies\n• Management and control of merchandising stock\n• Support in administrative processes (purchase orders, deliveries and payments)\n• Organization and assistance at corporate and promotional events\n• Coordination with regional teams",
      },
    },
  },
  "power-bi-picklog": {
    title: "Pick&Log",
    description:
      "Project developed for the logistics company Pick&Log, focused on the design of visual templates and dashboards for Power BI within their logistics management system.\n\nThe work integrated functional design and data visualization, aiming to optimize the reading of information and facilitate the tracking of operational indicators. Clarity, visual hierarchy and graphic coherence were prioritized, ensuring an intuitive experience for decision-making.",
  },
  "coleccion-portuguese": {
    title: "Portuguese Collection",
    description:
      "A mini collection inspired by the 'Portuguese' aesthetic, centered on the use of color, textures and handcrafted details. The project includes the development of technical sheets, flats and fashion figures, along with a conceptual proposal that combines cultural identity and contemporary design.",
  },
  "fotografia-moda": {
    title: "Fashion Photography",
    description:
      "A series of photographs created for fashion projects, focused on representing the central concept of each design. Through composition, light and art direction, the images seek to highlight the visual identity and expressive character of each garment.",
  },
  "jeaneria-fichas": {
    title: "Denim I Technical sheets and flats",
    description:
      "Project focused on the technical development of denim garments. It includes detailed technical sheets, flats and construction specifications addressing the structure, materials and assembly processes of each piece.",
  },
  "prototipos-indumentaria": {
    title: "Fashion Prototypes",
    description:
      "Development of hand-sewn garments during the Fashion Design course. Each prototype explores the relationship between pattern-making, materials and construction, focusing on experimentation with shapes, finishes and the particular concept guiding each project.",
  },
  "video-casamiento-1995": {
    title: "Wedding and Honeymoon Video I 1995",
    description:
      "Audiovisual project created from the family archive of my parents' wedding and honeymoon in 1995. Through the editing and montage of the original material, the project reinterprets those images from a current perspective, exploring the passage of time and how personal records can build identity.",
  },
  "fotografia-analogica": {
    title: "Analog Photography",
    description:
      "A series of analog photographs taken during a trip through Europe, with the intention of experimenting with new techniques and expired film. The project works as a spontaneous record that explores light, color and composition from a more personal perspective.",
  },
}

/* Títulos de proyectos para el listado de categoría (en inglés) */
export const projectTitleEn: Record<string, string> = {
  "diario-oasis": "Oasis Newspaper I Backstage Times",
  "revistas-editorial": "Magazines I Amalia Lacroze de Fortabat Art Collection",
  "postales-cortazar": "Postcards I Julio Cortázar",
  "revista-clara-cava": "Clara Cava Magazine",
  "afiche-3d-cordoba": "3D Poster I Córdoba",
  "afiches-tipograficos": "Typographic Posters",
  "revista-balvanera": "Balvanera Magazine I Cover and back cover",
  "modelado-3d-objetos": "3D Modeling I Everyday Objects",
  "cuento-infantil-3d": "Children's Story I 3D Illustration",
  "carteles-bosch": "Robert Bosch Argentina",
  "power-bi-picklog": "Pick&Log",
  "coleccion-portuguese": "Portuguese Collection",
  "fotografia-moda": "Fashion Photography",
  "jeaneria-fichas": "Denim I Technical sheets and flats",
  "prototipos-indumentaria": "Fashion Prototypes",
  "video-casamiento-1995": "Wedding and Honeymoon Video I 1995",
  "fotografia-analogica": "Analog Photography",
  "portfolio-video": "Portfolio",
  "mini-skirts-video": "Mini Skirts - Mary Quant",
  "vlog-diario-video": "Daily Vlog",
  "motocross-video": "Motocross",
  "indumentaria-video": "Fashion",
}
