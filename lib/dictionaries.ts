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

// ============================================================================
//  ESTRUCTURA DEL DICCIONARIO
// ============================================================================
//  ACÁ DEFINÍS LA "FORMA" QUE TIENE QUE TENER EL DICCIONARIO.
//  Si agregás una clave nueva más abajo, TENÉS QUE AGREGARLA ACÁ TAMBIÉN.
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
    titulo: string
    subtitulo: string
    descripcion: string
    ver_proyectos: string
  }
  proyectos: {
    titulo: string
    descripcion: string
    ver_todos: string
    categorias: {
      diseno_grafico: string
      corporativo: string
      indumentaria: string
      personales: string
    }
  }
  contacto: {
    titulo: string
    descripcion: string
    nombre: string
    email: string
    mensaje: string
    enviar: string
  }
}

// ============================================================================
//  TEXTO EN ESPAÑOL
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
      titulo: "María Boronat",
      subtitulo: "Diseñadora gráfica y comunicadora visual",
      descripcion:
        "Exploro el diseño editorial, la ilustración y la comunicación corporativa.",
      ver_proyectos: "Ver proyectos",
    },
    proyectos: {
      titulo: "Proyectos",
      descripcion: "Selección de trabajos destacados",
      ver_todos: "Ver todos →",
      categorias: {
        diseno_grafico: "Diseño Gráfico",
        corporativo: "Corporativo",
        indumentaria: "Indumentaria e Ilustración",
        personales: "Proyectos Personales",
      },
    },
    contacto: {
      titulo: "Contacto",
      descripcion: "¿Tenés un proyecto en mente? ¡Hablemos!",
      nombre: "Nombre",
      email: "Email",
      mensaje: "Mensaje",
      enviar: "Enviar",
    },
  },

  // ============================================================================
  //  TEXTO EN INGLÉS
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
      titulo: "María Boronat",
      subtitulo: "Graphic designer and visual communicator",
      descripcion:
        "I explore editorial design, illustration, and corporate communication.",
      ver_proyectos: "View projects",
    },
    proyectos: {
      titulo: "Projects",
      descripcion: "Selection of featured work",
      ver_todos: "View all →",
      categorias: {
        diseno_grafico: "Graphic Design",
        corporativo: "Corporate",
        indumentaria: "Fashion Design & Illustration",
        personales: "Personal Projects",
      },
    },
    contacto: {
      titulo: "Contact",
      descripcion: "Have a project in mind? Let's talk!",
      nombre: "Name",
      email: "Email",
      mensaje: "Message",
      enviar: "Send",
    },
  },
}

// ============================================================================
//  IDIOMA POR DEFECTO
// ============================================================================
export const DEFAULT_LANGUAGE: Language = "es"
