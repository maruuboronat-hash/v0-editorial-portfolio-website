// Listado de proyectos por categoría (compartido entre la home y las páginas de categoría)
export type CategoryProject = { id: string; title: string; image?: string }

// ============================================================
//  DATOS DE PROYECTOS (SIN TRADUCCIONES - SOLO DATOS DUROS)
// ============================================================
export const categoriesData: Record<string, { projects: CategoryProject[] }> = {
  "diseno-grafico": {
    projects: [
      { id: "festival-musica-electronica", title: "Festival de Música Electrónica | Diseño Editorial", image: "/images/diseno-grafico/folleto-electronica/mockup-02.jpg" },
      { id: "libro-tecnico-manual", title: "Libro técnico editorial I Manual", image: "/images/diseno-grafico/tecnico/tecnico-01.jpg" },
      { id: "diario-oasis", title: "Diario de Oasis I Backstage Times", image: "/images/diseno-grafico/oasis/oasis-02.jpg" },
      { id: "revistas-editorial", title: "Revistas I Colección de Arte Amalia Lacroze de Fortabat", image: "/images/diseno-grafico/revistas-editorial/portada-editorial2.jpg" },
      { id: "fanzine-infancia", title: "Fanzine | Infancia", image: "/images/diseno-grafico/fanzine/fanzine-01.jpg" },
      { id: "postales-cortazar", title: "Postales I Julio Cortázar", image: "/images/diseno-grafico/postales/postales-portada.jpg" },
      { id: "revista-clara-cava", title: "Revista Clara Cava", image: "/images/diseno-grafico/clara-cava/clara-01.jpg" },
      { id: "afiche-3d-cordoba", title: "Afiche 3D I Córdoba", image: "/images/diseno-grafico/afiche3d/cordoba-01.jpg" },
      { id: "afiches-tipograficos", title: "Afiches tipográficos", image: "/images/diseno-grafico/afiche-tipografico/tipografia-portada.jpg" },
      { id: "revista-balvanera", title: "Revista Balvanera I Tapa y contratapa", image: "/images/diseno-grafico/balvanera/balvanera-portada-01.jpg" },
      { id: "modelado-3d-objetos", title: "Modelado 3D I Objetos cotidianos", image: "/images/diseno-grafico/modelado3d/modelado-02.jpg" },
      { id: "cuento-infantil-3d", title: "Cuento infantil I Ilustración 3D", image: "/images/diseno-grafico/infantil/infantil-portada-01.jpg" },
    ],
  },
  "corporativo": {
    projects: [
      { id: "carteles-bosch", title: "Robert Bosch Argentina", image: "/images/corporativo/logos/portadas-logos-05.jpg" },
      { id: "cantiere-rebranding", title: "Rebranding y Página Web | Cantiere SA", image: "/images/corporativo/cantiere/portada-cantiere.jpg" },
      { id: "power-bi-picklog", title: "Pick&Log", image: "/images/corporativo/logos/portadas-logos-01.jpg" },
    ],
  },
  "indumentaria-ilustracion": {
    projects: [
      { id: "coleccion-portuguese", title: "Colección Portuguese", image: "/images/indumentaria-ilustracion/colección-portuguese/portuguese-portada-blanco.jpg" },
      { id: "fotografia-moda", title: "Fotografía de moda", image: "/images/indumentaria-ilustracion/fotografia-moda/fotografia-portada.jpg" },
      { id: "jeaneria-fichas", title: "Jeanería I Fichas técnicas y geometrales", image: "/images/indumentaria-ilustracion/jeaneria/fichas-portada.jpg" },
      { id: "prototipos-indumentaria", title: "Prototipos de indumentaria", image: "/images/indumentaria-ilustracion/prototipos/protos-portada.jpg" },
    ],
  },
  "personales": {
    projects: [
      { id: "video-casamiento-1995", title: "Video de Casamiento y Luna de Miel I 1995", image: "/images/proyectos-personales/video-casamiento/casamiento-02.png" },
      { id: "fotografia-analogica", title: "Fotografía analógica", image: "/images/proyectos-personales/analogicas/analogicas-portada.JPG" },
    ],
  },
  "edicion-video": {
    projects: [
      { id: "animaciones-video", title: "Animaciones", image: "/images/edicion-video/portada06.png" },
      { id: "portfolio-video", title: "Portfolio", image: "/images/edicion-video/portada05.png" },
      { id: "mini-skirts-video", title: "Mini Skirts - Mary Quant", image: "/images/edicion-video/portada03.png" },
      { id: "fanzine-infancia-video", title: "Fanzine | Infancia", image: "/images/diseno-grafico/fanzine/fanzine-01.jpg" },
      { id: "animated-teaser", title: "Animated Teaser", image: "/images/edicion-video/interfaces.png" },
      { id: "vlog-diario-video", title: "Vlog Diario", image: "/images/edicion-video/portada04.png" },
      { id: "motocross-video", title: "Motocross", image: "/images/edicion-video/portada02.jpeg" },
      { id: "indumentaria-video", title: "Indumentaria", image: "/images/edicion-video/portada01.png" },
    ],
  },
}

