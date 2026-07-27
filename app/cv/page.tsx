"use client"

import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/components/language-provider"

// ============================================================
//  EXPERIENCIA (con descripciones fijas en español)
//  NOTA: Como las descripciones tienen HTML complejo, 
//  las dejamos en español fijo. Si querés traducirlas,
//  hay que moverlas al diccionario.
// ============================================================
const experience = [
  {
    period: "2026 — Presente",
    role: "Diseñadora Digital Jr. - Marketing",
    company: "Cencosud - Jumbo, Disco y Vea",
    description: "Desarrollo de piezas digitales para campañas de marketing, incluyendo emails, banners, contenidos audiovisuales masivos. Maquetación y edición de piezas de email marketing utilizando HTML5 y CSS. Adaptación de contenidos para distintos canales digitales con foco en usabilidad y conversión. Implementación de herramientas de inteligencia artificial y automatización para optimizar procesos creativos y productivos. Trabajo colaborativo con equipos de marketing en la ejecución de campañas digitales y estrategias omnicanal.",
  },
  {
    period: "2024 — 2026",
    role: "Pasante de Marketing y Comunicación",
    company: "Bosch - Mobility Aftermarket",
    description: "Trabajé en el área de comunicación de Bosch, líder global en soluciones automotrices, produciendo assets visuales para medios impresos y digitales: flyers, cartelería en vía pública, newsletters, presentaciones corporativas y edición de video. Mantuve la identidad visual de marca de forma consistente y asesoré a talleres de la red con propuestas gráficas personalizadas. Como parte del programa Young Talents 2025, diseñé e implementé un sistema con Power Apps, Excel y Power Automate para digitalizar el control de stock y pedidos de merchandising, reduciendo errores y automatizando el registro en tiempo real.",
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

// ============================================================
//  EDUCACIÓN
// ============================================================
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

// ============================================================
//  HABILIDADES
// ============================================================
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

// ============================================================
//  HERRAMIENTAS
// ============================================================
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

// ============================================================
//  CURSOS
// ============================================================
const awards = [
  { year: "2024", title: "Rebranding - Identidades Visuales Eficientes", category: "Foresti Design" },
  { year: "2023", title: "Figurines en Adobe Illustrator", category: "Estudio MG" },
  { year: "2023", title: "Adobe Illustrator para Diseño de Moda", category: "Estudio MG" },
  { year: "2022", title: "Adobe Photoshop e Illustrator", category: "Coderhouse" },
  { year: "2019", title: "Fotografía", category: "Colegio Niño Jesús de Praga" },
]

// ============================================================
//  TRADUCCIONES DE LAS DESCRIPCIONES DE EXPERIENCIA (INGLÉS)
// ============================================================
const experienceEn = [
  {
    period: "2026 — Present",
    role: "Digital Designer Jr. - Marketing",
    company: "Cencosud - Jumbo, Disco y Vea",
    description: "Development of digital assets for marketing campaigns, including emails, banners, and mass audiovisual content. Layout and editing of email marketing pieces using HTML5 and CSS. Adaptation of content for different digital channels with a focus on usability and conversion. Implementation of artificial intelligence and automation tools to optimize creative and productive processes. Collaborative work with marketing teams in the execution of digital campaigns and omnichannel strategies.",
  },
  {
    period: "2024 — 2026",
    role: "Marketing and Communication Intern",
    company: "Bosch - Mobility Aftermarket",
    description: "Worked in Bosch's communication area, a global leader in automotive solutions, producing visual assets for print and digital media: flyers, public signage, newsletters, corporate presentations, and video editing. Maintained consistent brand visual identity and advised network workshops with personalized graphic proposals. As part of the Young Talents 2025 program, I designed and implemented a system with Power Apps, Excel, and Power Automate to digitize merchandising stock control and orders, reducing errors and automating real-time recording.",
  },
  {
    period: "2021 — 2024",
    role: "Administrative Employee",
    company: "Cantiere SA",
    description: "Managed invoicing registration and control using Excel spreadsheets, maintained employee files, and collaborated on internal logistics tasks.",
  },
  {
    period: "2022",
    role: "Runner",
    company: "AACI - Asociación Argentina de Cultura Inglesa",
    description: "Assisted in the operational coordination of international exams in schools: classroom supervision, student support, and space control during evaluations.",
  },
  {
    period: "2021 - 2024",
    role: "Fashion Show Assistant",
    company: "Perpetua",
    description: "Participated in fashion show production coordinating looks, assisting models, and managing social media communications.",
  },
]

// ============================================================
//  TRADUCCIONES DE EDUCACIÓN (INGLÉS)
// ============================================================
const educationEn = [
  {
    period: "2024 - Present",
    title: "B.A. Graphic Design and Communication",
    institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
  },
  {
    period: "2024 - Present",
    title: "University Technician in Multimedia Design",
    institution: "UCES - Universidad de Ciencias Empresariales y Sociales",
  },
  {
    period: "2021 - 2024",
    title: "B.A. Fashion Design - 60% completed",
    institution: "UBA/FADU - Universidad de Buenos Aires",
  },
  {
    period: "2014 - 2020",
    title: "High School Diploma in Economics and Administration",
    institution: "Colegio Niño Jesús de Praga",
  },
]

// ============================================================
//  TRADUCCIONES DE HABILIDADES (INGLÉS)
// ============================================================
const skillsEn = [
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
]

// ============================================================
//  TRADUCCIONES DE CURSOS (INGLÉS)
// ============================================================
const awardsEn = [
  { year: "2024", title: "Rebranding - Efficient Visual Identities", category: "Foresti Design" },
  { year: "2023", title: "Figurines in Adobe Illustrator", category: "Estudio MG" },
  { year: "2023", title: "Adobe Illustrator for Fashion Design", category: "Estudio MG" },
  { year: "2022", title: "Adobe Photoshop and Illustrator", category: "Coderhouse" },
  { year: "2019", title: "Photography", category: "Colegio Niño Jesús de Praga" },
]

// ============================================================
//  FUNCIÓN PARA OBTENER LOS TEXTOS SEGÚN EL IDIOMA
// ============================================================
function getExperience(language: string) {
  return language === "en" ? experienceEn : experience
}

function getEducation(language: string) {
  return language === "en" ? educationEn : education
}

function getSkills(language: string) {
  return language === "en" ? skillsEn : skills
}

function getAwards(language: string) {
  return language === "en" ? awardsEn : awards
}

// ============================================================
//  COMPONENTE PRINCIPAL
// ============================================================
export default function CVPage() {
  const { t, language } = useLanguage()
  
  const experienceData = getExperience(language)
  const educationData = getEducation(language)
  const skillsData = getSkills(language)
  const awardsData = getAwards(language)

  return (
    <div className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {t.nav.cv} · María Boronat 
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            {t.cv.descripcion}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Experience */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.experiencia}
              </h2>
              <div className="space-y-12">
                {experienceData.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{item.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <p className="text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.educacion}
              </h2>
              <div className="space-y-8">
                {educationData.map((item, index) => (
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
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.cursos}
              </h2>
              <div className="space-y-4">
                {awardsData.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className="text-sm font-medium text-brand w-12">
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
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2"><span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.herramientas}
              </h2>
              
              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{t.cv.diseno_creatividad}</h3>
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

              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{t.cv.productividad}</h3>
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

              <div>
                <h3 className="text-xs font-medium text-foreground mb-2">{t.cv.desarrollo}</h3>
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
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2"><span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.idiomas}
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t.cv.espanol}</span>
                  <span className="text-muted-foreground">{t.cv.nativo}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.cv.ingles}</span>
                  <span className="text-muted-foreground">{t.cv.avanzado}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.cv.italiano}</span>
                  <span className="text-muted-foreground">{t.cv.basico}</span>
                </div>
              </div>
            </section>

            {/* SECCIÓN 3: HABILIDADES */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2"><span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.habilidades}
              </h2>
              <div className="space-y-1">
                {skillsData.map((skill) => (
                  <p key={skill} className="text-sm">
                    {skill}
                  </p>
                ))}
              </div>
            </section>

            {/* SECCIÓN 4: DESCARGAR */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2"><span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.descargar}
              </h2>
              <a
                href="/images/CV/CV_MariaBoronat.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs uppercase tracking-widest text-brand-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t.cv.cv_pdf}
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">&darr;</span>
              </a>
            </section>
          </aside>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}
