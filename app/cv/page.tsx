"use client"

import React from "react"
import { useLanguage } from "@/lib/i18n"

/* ============================================================
   DATOS BILINGÜES DEL CV
============================================================ */

const experience = {
  es: [
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
          <p className="text-muted-foreground italic border-l-2 border-brand pl-4 py-1 text-sm">
            Como parte del programa Young Talents 2025, diseñé e implementé un sistema con Power Apps, Excel y Power Automate para digitalizar el control de stock y pedidos de merchandising, reduciendo errores y automatizando el registro en tiempo real.
          </p>
        </>
      ),
    },
    {
      period: "2021 — 2024",
      role: "Empleado Administrativo",
      company: "Cantiere SA",
      description: (
        <p className="mb-3">
          Gestioné el registro y control de facturación mediante planillas en Excel, mantuve legajos de empleados y colaboré en tareas de logística interna.
        </p>
      ),
    },
    {
      period: "2022",
      role: "Runner",
      company: "AACI - Asociación Argentina de Cultura Inglesa",
      description: (
        <p className="mb-3">
          Asistí en la coordinación operativa de exámenes internacionales en colegios: supervisión de aulas, apoyo a alumnos y control de espacios durante las evaluaciones.
        </p>
      ),
    },
    {
      period: "2021 - 2024",
      role: "Asistente en desfiles de moda",
      company: "Perpetua",
      description: (
        <p className="mb-3">
          Participé en la producción de desfiles coordinando looks, asistiendo a las modelos y gestionando comunicaciones en redes sociales.
        </p>
      ),
    },
  ],
  en: [
    {
      period: "2026 — Present",
      role: "Jr. Digital Designer - Marketing",
      company: "Cencosud - Jumbo, Disco & Vea",
      description: (
        <>
          <p className="mb-3">
            Development of digital pieces for marketing campaigns, including emails, banners and mass audiovisual content. Layout and editing of email marketing pieces using HTML5 and CSS. Adaptation of content for different digital channels with a focus on usability and conversion. Implementation of artificial intelligence and automation tools to optimize creative and productive processes. Collaborative work with marketing teams in the execution of digital campaigns and omnichannel strategies.
          </p>
        </>
      ),
    },
    {
      period: "2024 — 2026",
      role: "Marketing & Communication Intern",
      company: "Bosch - Mobility Aftermarket",
      description: (
        <>
          <p className="mb-3">
            I worked in the communication area of Bosch, a global leader in automotive solutions, producing visual assets for print and digital media: flyers, outdoor signage, newsletters, corporate presentations and video editing. I kept the brand's visual identity consistent and advised workshops in the network with customized graphic proposals.
          </p>
          <p className="text-muted-foreground italic border-l-2 border-brand pl-4 py-1 text-sm">
            As part of the Young Talents 2025 program, I designed and implemented a system with Power Apps, Excel and Power Automate to digitalize stock control and merchandising orders, reducing errors and automating record-keeping in real time.
          </p>
        </>
      ),
    },
    {
      period: "2021 — 2024",
      role: "Administrative Assistant",
      company: "Cantiere SA",
      description: (
        <p className="mb-3">
          I managed the registration and control of invoicing through Excel spreadsheets, maintained employee files and collaborated on internal logistics tasks.
        </p>
      ),
    },
    {
      period: "2022",
      role: "Runner",
      company: "AACI - Argentine Association of English Culture",
      description: (
        <p className="mb-3">
          I assisted in the operational coordination of international exams in schools: classroom supervision, student support and space control during assessments.
        </p>
      ),
    },
    {
      period: "2021 - 2024",
      role: "Fashion Show Assistant",
      company: "Perpetua",
      description: (
        <p className="mb-3">
          I participated in the production of fashion shows coordinating looks, assisting models and managing social media communications.
        </p>
      ),
    },
  ],
}

const education = {
  es: [
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
  en: [
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
}

const skills = {
  es: [
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
  en: [
    "- Editorial Design",
    "- Corporate visual identity",
    "- 3D Design",
    "- Brand communication",
    "- UX/UI Design",
    "- Motion Graphics",
    "- Photography",
    "- Digital retouching",
    "- Process automation",
    "- Client communication",
    "- Multidisciplinary teamwork",
    "- Autonomous learning",
    "- Technological adaptability",
    "- Creative thinking",
    "- Attention to detail",
    "- Vibe Coding",
    "- Mailing",
  ],
}

// HERRAMIENTAS (separadas individualmente, no se traducen los nombres)
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
    "Grok",
  ],
  productivity: ["Microsoft Office", "Power Apps", "Power Automate", "SAP", "MailJet"],
  development: ["GitHub", "v0 (Vercel)"],
}

const awards = {
  es: [
    { year: "2024", title: "Rebranding - Identidades Visuales Eficientes", category: "Foresti Design" },
    { year: "2023", title: "Figurines en Adobe Illustrator", category: "Estudio MG" },
    { year: "2023", title: "Adobe Illustrator para Diseño de Moda", category: "Estudio MG" },
    { year: "2022", title: "Adobe Photoshop e Illustrator", category: "Coderhouse" },
    { year: "2019", title: "Fotografía", category: "Colegio Niño Jesús de Praga" },
  ],
  en: [
    { year: "2024", title: "Rebranding - Efficient Visual Identities", category: "Foresti Design" },
    { year: "2023", title: "Fashion figures in Adobe Illustrator", category: "Estudio MG" },
    { year: "2023", title: "Adobe Illustrator for Fashion Design", category: "Estudio MG" },
    { year: "2022", title: "Adobe Photoshop & Illustrator", category: "Coderhouse" },
    { year: "2019", title: "Photography", category: "Colegio Niño Jesús de Praga" },
  ],
}

export default function CVPage() {
  const { t, lang } = useLanguage()
  const experienceItems = experience[lang]
  const educationItems = education[lang]
  const skillItems = skills[lang]
  const awardItems = awards[lang]

  return (
    <div className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-10">
          <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-6">
            {t("cv.title")}
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            {t("cv.summary")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 divide-y divide-border">
            {/* Experience */}
            <section className="pb-12">
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t("cv.experience")}
              </h2>
              <div className="space-y-12">
                {experienceItems.map((item, index) => (
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
            <section className="py-12">
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t("cv.education")}
              </h2>
              <div className="space-y-8">
                {educationItems.map((item, index) => (
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

            {/* Awards / Courses */}
            <section className="pt-12">
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t("cv.courses")}
              </h2>
              <div className="space-y-4">
                {awardItems.map((item, index) => (
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
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t("cv.tools")}
              </h2>

              {/* Diseño & Creatividad */}
              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{t("cv.toolsDesign")}</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.design.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Productividad */}
              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{t("cv.toolsProductivity")}</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.productivity.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desarrollo & Prototipado */}
              <div>
                <h3 className="text-xs font-medium text-foreground mb-2">{t("cv.toolsDev")}</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.development.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN 2: IDIOMAS */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t("cv.languages")}
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t("cv.spanish")}</span>
                  <span className="text-muted-foreground">{t("cv.native")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("cv.english")}</span>
                  <span className="text-muted-foreground">{t("cv.advanced")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("cv.italian")}</span>
                  <span className="text-muted-foreground">{t("cv.basic")}</span>
                </div>
              </div>
            </section>

            {/* SECCIÓN 3: HABILIDADES */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t("cv.skills")}
              </h2>
              <div className="space-y-1">
                {skillItems.map((skill) => (
                  <p key={skill} className="text-sm">
                    {skill}
                  </p>
                ))}
              </div>
            </section>

            {/* SECCIÓN 4: DESCARGAR */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t("cv.download")}
              </h2>
              <a
                href="/images/CV/CV_MariaBoronat.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs uppercase tracking-widest text-brand-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t("cv.downloadPdf")}
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">&darr;</span>
              </a>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
