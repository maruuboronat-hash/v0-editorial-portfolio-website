import Image from "next/image"

const experience = [
  {
    period: "2026 — Presente",
    role: "Diseñadora Digital Jr. - Marketing",
    company: "Cencosud - Jumbo, Disco y Vea",
    description: (
      <>
        <p className="mb-3">
          Desarrollo de piezas digitales para campañas de marketing, incluyendo emails, banners, contenidos audiovisuales masivos. Maquetación y edición de piezas de email marketing utilizando HTML5 y CSS. Adaptación de contenidos para distintos canales digitales con foco en usabilidad y conversión. Implementación de herramientas de inteligencia artificial y automatización para optimizar procesos creativos y productivos. Trabajo colaborativo con equipos de marketing en la ejecución de campañas digitales y estrategias omnicanal.
        </p>
      </>
    ),
  },
  {
    period: "2024 — 2026",
    role: "Pasante de Marketing y Comunicación",
    company: "Bosch - Mobility Aftermarket",
    description: (
      <>
        <p className="mb-3">
          Trabajé en el área de comunicación de Bosch, líder global en soluciones automotrices, produciendo assets visuales para medios impresos y digitales: flyers, cartelería en vía pública, newsletters, presentaciones corporativas y edición de video. Mantuve la identidad visual de marca de forma consistente y asesoré a talleres de la red con propuestas gráficas personalizadas.
        </p>
        <p className="text-muted-foreground italic border-l-2 border-gray-300 pl-4 py-1 text-sm">
          Como parte del programa Young Talents 2025, diseñé e implementé un sistema con Power Apps, Excel y Power Automate para digitalizar el control de stock y pedidos de merchandising, reduciendo errores y automatizando el registro en tiempo real.
        </p>
      </>
    ),
  },
  {
    period: "2021 — 2024",
    role: "Empleado Administrativo",
    company: "Cantiere SA",
    description: "Gestioné el registro y control de facturación mediante planillas en Excel, mantuve legajos de empleados y colaboré en tareas de logística interna.",
  },
  {
    period: "2022",
    role: "Runner",
    company: "AACI - Asociación Argentina de Cultura Inglesa",
    description: "Asistí en la coordinación operativa de exámenes internacionales en colegios: supervisión de aulas, apoyo a alumnos y control de espacios durante las evaluaciones.",
  },
  {
    period: "2021 - 2024",
    role: "Asistente en desfiles de moda",
    company: "Perpetua",
    description: "Participé en la producción de desfiles coordinando looks, asistiendo a las modelos y gestionando comunicaciones en redes sociales.",
  },
]

const education = [
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
]

const skills = [
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
]

// HERRAMIENTAS (separadas individualmente)
const tools = {
  design: [
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Lightroom",
    "Premiere",
    "After Effects",
    "Figma",
    "Responsys",
    "Blender",
    "Canva",
    "ElevenLabs",
    "Grok"
  ],
  productivity: [
    "Microsoft Office",
    "Power Apps",
    "Power Automate",
    "SAP",
    "MailJet"
  ],
  development: [
    "GitHub",
    "v0 (Vercel)"
  ]
}

const awards = [
  { year: "2024", title: "Rebranding - Identidades Visuales Eficientes", category: "Foresti Design" },
  { year: "2023", title: "Figurines en Adobe Illustrator", category: "Estudio MG" },
  { year: "2023", title: "Adobe Illustrator para Diseño de Moda", category: "Estudio MG" },
  { year: "2022", title: "Adobe Photoshop e Illustrator", category: "Coderhouse" },
  { year: "2019", title: "Fotografía", category: "Colegio Niño Jesús de Praga" },
]

export default function CVPage() {
  return (
    <div className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-6">
            CV · María Boronat 
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            {"Diseñadora gráfica y comunicadora visual con perfil híbrido que combina creatividad, pensamiento estratégico y herramientas tecnológicas. Con experiencia en entornos corporativos internacionales, manejo integral de identidad de marca y capacidad para automatizar procesos creativos y operativos. Orientada a resultados, con iniciativa propia, aprendizaje autónomo y habilidades para adaptarse a equipos multidisciplinarios en contextos dinámicos."}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Experience */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Experiencia Laboral
              </h2>
              <div className="space-y-12">
                {experience.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{item.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <div className="text-sm leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Educación
              </h2>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8">
                CURSOS
              </h2>
              <div className="space-y-4">
                {awards.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className="text-sm text-muted-foreground w-12">
                      {item.year}
                    </span>
                    <span className="text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground">— {item.category}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 space-y-12">
            
            {/* SECCIÓN 1: HERRAMIENTAS */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Herramientas
              </h2>
              
              {/* Diseño & Creatividad */}
              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">Diseño & Creatividad</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.design.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Productividad */}
              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">Productividad</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.productivity.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desarrollo & Prototipado */}
              <div>
                <h3 className="text-xs font-medium text-foreground mb-2">Desarrollo & Prototipado</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.development.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN 2: IDIOMAS */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Idiomas
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Español</span>
                  <span className="text-muted-foreground">Nativo</span>
                </div>
                <div className="flex justify-between">
                  <span>Inglés</span>
                  <span className="text-muted-foreground">Avanzado</span>
                </div>
                <div className="flex justify-between">
                  <span>Italiano</span>
                  <span className="text-muted-foreground">Básico</span>
                </div>
              </div>
            </section>

            {/* SECCIÓN 3: HABILIDADES */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Habilidades
              </h2>
              <div className="space-y-1">
                {skills.map((skill) => (
                  <p key={skill} className="text-sm">
                    {skill}
                  </p>
                ))}
              </div>
            </section>

            {/* SECCIÓN 4: DESCARGAR */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Descargar
              </h2>
              <a
                href="/images/CV/CV_Maria_Boronat.pdf"
                download
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:underline underline-offset-4"
              >
                CV en PDF &darr;
              </a>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
