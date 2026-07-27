// ============================================================================
//  DICCIONARIO DE TEXTOS / TEXT DICTIONARY
// ============================================================================
//  Aquí es donde editás manualmente los textos de la página.
//  - "es" = español
//  - "en" = inglés
//
//  Para agregar un texto nuevo:
//    1. Agregá la clave dentro de "es" y dentro de "en".
//    2. Usalo en tus componentes con:  const { t } = useLanguage()
//                                      t.nav.home  (por ejemplo)
//
//  IMPORTANTE: las dos versiones ("es" y "en") deben tener EXACTAMENTE
//  las mismas claves para que TypeScript no se queje.
// ============================================================================

export type Language = "es" | "en"

// Estructura (forma) de un diccionario. Cada idioma debe cumplir este tipo.
// Al agregar una sección nueva arriba, agregá su forma también acá.
export type ExperienceItem = {
  period: string
  role: string
  company: string
  // Cada string es un párrafo de la descripción.
  paragraphs: string[]
  // Texto destacado opcional (recuadro con borde de color).
  highlight?: string
}

export type EducationItem = {
  period: string
  title: string
  institution: string
}

export type AwardItem = {
  year: string
  title: string
  category: string
}

export type LanguageLevel = {
  name: string
  level: string
}

export type Dictionary = {
  nav: {
    home: string
    proyectos: string
    cv: string
    bio: string
    contacto: string
  }
  cv: {
    title: string
    intro: string
    sections: {
      experience: string
      education: string
      courses: string
      tools: string
      languages: string
      skills: string
      download: string
    }
    toolGroups: {
      design: string
      productivity: string
      development: string
    }
    downloadLabel: string
    experience: ExperienceItem[]
    education: EducationItem[]
    awards: AwardItem[]
    languages: LanguageLevel[]
    skills: string[]
  }
}

export const dictionaries: Record<Language, Dictionary> = {
  es: {
    nav: {
      home: "Home",
      proyectos: "Proyectos",
      cv: "CV",
      bio: "Bio",
      contacto: "Contacto",
    },
    cv: {
      title: "CV · María Boronat",
      intro:
        "Diseñadora gráfica y comunicadora visual con perfil híbrido que combina creatividad, pensamiento estratégico y herramientas tecnológicas. Con experiencia en entornos corporativos internacionales, manejo integral de identidad de marca y capacidad para automatizar procesos creativos y operativos. Orientada a resultados, con iniciativa propia, aprendizaje autónomo y habilidades para adaptarse a equipos multidisciplinarios en contextos dinámicos.",
      sections: {
        experience: "Experiencia Laboral",
        education: "Educación",
        courses: "Cursos",
        tools: "Herramientas",
        languages: "Idiomas",
        skills: "Habilidades",
        download: "Descargar",
      },
      toolGroups: {
        design: "Diseño & Creatividad",
        productivity: "Productividad",
        development: "Desarrollo & Prototipado",
      },
      downloadLabel: "CV en PDF",
      experience: [
        {
          period: "2026 — Presente",
          role: "Diseñadora Digital Jr. - Marketing",
          company: "Cencosud - Jumbo, Disco y Vea",
          paragraphs: [
            "Desarrollo de piezas digitales para campañas de marketing, incluyendo emails, banners, contenidos audiovisuales masivos. Maquetación y edición de piezas de email marketing utilizando HTML5 y CSS. Adaptación de contenidos para distintos canales digitales con foco en usabilidad y conversión. Implementación de herramientas de inteligencia artificial y automatización para optimizar procesos creativos y productivos. Trabajo colaborativo con equipos de marketing en la ejecución de campañas digitales y estrategias omnicanal.",
          ],
        },
        {
          period: "2024 — 2026",
          role: "Pasante de Marketing y Comunicación",
          company: "Bosch - Mobility Aftermarket",
          paragraphs: [
            "Trabajé en el área de comunicación de Bosch, líder global en soluciones automotrices, produciendo assets visuales para medios impresos y digitales: flyers, cartelería en vía pública, newsletters, presentaciones corporativas y edición de video. Mantuve la identidad visual de marca de forma consistente y asesoré a talleres de la red con propuestas gráficas personalizadas.",
          ],
          highlight:
            "Como parte del programa Young Talents 2025, diseñé e implementé un sistema con Power Apps, Excel y Power Automate para digitalizar el control de stock y pedidos de merchandising, reduciendo errores y automatizando el registro en tiempo real.",
        },
        {
          period: "2021 — 2024",
          role: "Empleado Administrativo",
          company: "Cantiere SA",
          paragraphs: [
            "Gestioné el registro y control de facturación mediante planillas en Excel, mantuve legajos de empleados y colaboré en tareas de logística interna.",
          ],
        },
        {
          period: "2022",
          role: "Runner",
          company: "AACI - Asociación Argentina de Cultura Inglesa",
          paragraphs: [
            "Asistí en la coordinación operativa de exámenes internacionales en colegios: supervisión de aulas, apoyo a alumnos y control de espacios durante las evaluaciones.",
          ],
        },
        {
          period: "2021 - 2024",
          role: "Asistente en desfiles de moda",
          company: "Perpetua",
          paragraphs: [
            "Participé en la producción de desfiles coordinando looks, asistiendo a las modelos y gestionando comunicaciones en redes sociales.",
          ],
        },
      ],
      education: [
        {
          period: "2024 - Presente",
          title: "Lic. Diseño Gráfico y Comunicación",
          institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
        },
        {
          period: "2024 - Presente",
          title: "Técnico Universitario en Diseño Multimedia",
          institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
        },
        {
          period: "2021 - 2024",
          title: "Lic. Diseño de Indumentaria - 60% completo",
          institution: "UBA/FADU - Universidad de Buenos Aires",
        },
        {
          period: "2014 - 2020",
          title: "Bachillerato en Economía y Administración",
          institution: "Colegio Niño Jesús de Praga",
        },
      ],
      awards: [
        { year: "2024", title: "Rebranding - Identidades Visuales Eficientes", category: "Foresti Design" },
        { year: "2023", title: "Figurines en Adobe Illustrator", category: "Estudio MG" },
        { year: "2023", title: "Adobe Illustrator para Diseño de Moda", category: "Estudio MG" },
        { year: "2022", title: "Adobe Photoshop e Illustrator", category: "Coderhouse" },
        { year: "2019", title: "Fotografía", category: "Colegio Niño Jesús de Praga" },
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Avanzado" },
        { name: "Italiano", level: "Básico" },
      ],
      skills: [
        "- Diseño Editorial",
        "- Identidad visual corporativa",
        "- Diseño 3D",
        "- Comunicación de marca",
        "- UX/UI Design",
        "- Motion Graphics",
        "- Fotografía",
        "- Retoque digital",
        "- Automatización de procesos",
        "- Comunicación con clientes",
        "- Trabajo en equipo multidisciplinario",
        "- Aprendizaje autónomo",
        "- Adaptabilidad tecnológica",
        "- Pensamiento creativo",
        "- Atención al detalle",
        "- Vibe Coding",
        "- Mailing",
      ],
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
    cv: {
      title: "CV · María Boronat",
      intro:
        "Graphic designer and visual communicator with a hybrid profile that combines creativity, strategic thinking and technology tools. With experience in international corporate environments, full management of brand identity and the ability to automate creative and operational processes. Results-oriented, self-driven, an autonomous learner, and skilled at adapting to multidisciplinary teams in dynamic contexts.",
      sections: {
        experience: "Work Experience",
        education: "Education",
        courses: "Courses",
        tools: "Tools",
        languages: "Languages",
        skills: "Skills",
        download: "Download",
      },
      toolGroups: {
        design: "Design & Creativity",
        productivity: "Productivity",
        development: "Development & Prototyping",
      },
      downloadLabel: "CV as PDF",
      experience: [
        {
          period: "2026 — Present",
          role: "Jr. Digital Designer - Marketing",
          company: "Cencosud - Jumbo, Disco & Vea",
          paragraphs: [
            "Development of digital assets for marketing campaigns, including emails, banners and large-scale audiovisual content. Layout and editing of email marketing pieces using HTML5 and CSS. Adaptation of content for different digital channels with a focus on usability and conversion. Implementation of artificial intelligence and automation tools to optimize creative and production processes. Collaborative work with marketing teams executing digital campaigns and omnichannel strategies.",
          ],
        },
        {
          period: "2024 — 2026",
          role: "Marketing & Communications Intern",
          company: "Bosch - Mobility Aftermarket",
          paragraphs: [
            "I worked in the communications area of Bosch, a global leader in automotive solutions, producing visual assets for print and digital media: flyers, out-of-home signage, newsletters, corporate presentations and video editing. I kept the brand's visual identity consistent and advised network workshops with customized graphic proposals.",
          ],
          highlight:
            "As part of the Young Talents 2025 program, I designed and implemented a system using Power Apps, Excel and Power Automate to digitize stock control and merchandising orders, reducing errors and automating real-time record keeping.",
        },
        {
          period: "2021 — 2024",
          role: "Administrative Clerk",
          company: "Cantiere SA",
          paragraphs: [
            "I managed billing records and control through Excel spreadsheets, maintained employee files and collaborated on internal logistics tasks.",
          ],
        },
        {
          period: "2022",
          role: "Runner",
          company: "AACI - Argentine Association of English Culture",
          paragraphs: [
            "I assisted in the operational coordination of international exams at schools: room supervision, student support and space control during assessments.",
          ],
        },
        {
          period: "2021 - 2024",
          role: "Fashion Show Assistant",
          company: "Perpetua",
          paragraphs: [
            "I took part in fashion show production, coordinating looks, assisting models and managing social media communications.",
          ],
        },
      ],
      education: [
        {
          period: "2024 - Present",
          title: "BA in Graphic Design & Communication",
          institution: "UCES - University of Business and Social Sciences",
        },
        {
          period: "2024 - Present",
          title: "University Technician in Multimedia Design",
          institution: "UCES - University of Business and Social Sciences",
        },
        {
          period: "2021 - 2024",
          title: "BA in Fashion Design - 60% completed",
          institution: "UBA/FADU - University of Buenos Aires",
        },
        {
          period: "2014 - 2020",
          title: "High School Diploma in Economics & Administration",
          institution: "Colegio Niño Jesús de Praga",
        },
      ],
      awards: [
        { year: "2024", title: "Rebranding - Efficient Visual Identities", category: "Foresti Design" },
        { year: "2023", title: "Fashion Figures in Adobe Illustrator", category: "Estudio MG" },
        { year: "2023", title: "Adobe Illustrator for Fashion Design", category: "Estudio MG" },
        { year: "2022", title: "Adobe Photoshop & Illustrator", category: "Coderhouse" },
        { year: "2019", title: "Photography", category: "Colegio Niño Jesús de Praga" },
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Italian", level: "Basic" },
      ],
      skills: [
        "- Editorial Design",
        "- Corporate Visual Identity",
        "- 3D Design",
        "- Brand Communication",
        "- UX/UI Design",
        "- Motion Graphics",
        "- Photography",
        "- Digital Retouching",
        "- Process Automation",
        "- Client Communication",
        "- Multidisciplinary Teamwork",
        "- Autonomous Learning",
        "- Technological Adaptability",
        "- Creative Thinking",
        "- Attention to Detail",
        "- Vibe Coding",
        "- Mailing",
      ],
    },
  },
}

export const DEFAULT_LANGUAGE: Language = "es"
