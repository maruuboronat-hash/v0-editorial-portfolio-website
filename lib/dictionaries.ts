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
export type Dictionary = {
  nav: {
    home: string
    proyectos: string
    cv: string
    bio: string
    contacto: string
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
    // Agregá más secciones acá abajo, por ejemplo:
    // home: {
    //   titulo: "Diseño gráfico y comunicación",
    //   subtitulo: "Portfolio de María Boronat",
    // },
  },

  en: {
    nav: {
      home: "Home",
      proyectos: "Projects",
      cv: "CV",
      bio: "Bio",
      contacto: "Contact",
    },
    // Add more sections here, for example:
    // home: {
    //   titulo: "Graphic design and communication",
    //   subtitulo: "María Boronat's portfolio",
    // },
  },
}

export const DEFAULT_LANGUAGE: Language = "es"
