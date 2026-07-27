"use client"

import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/components/language-provider"

export default function CVPage() {
  const { t } = useLanguage()

  // Arrays con las claves del diccionario
  const experienceKeys = [
    { period: "2026 — Presente", roleKey: "exp1_role", companyKey: "exp1_company", descKey: "exp1_desc" },
    { period: "2024 — 2026", roleKey: "exp2_role", companyKey: "exp2_company", descKey: "exp2_desc" },
    { period: "2021 — 2024", roleKey: "exp3_role", companyKey: "exp3_company", descKey: "exp3_desc" },
    { period: "2022", roleKey: "exp4_role", companyKey: "exp4_company", descKey: "exp4_desc" },
    { period: "2021 - 2024", roleKey: "exp5_role", companyKey: "exp5_company", descKey: "exp5_desc" },
  ]

  const educationKeys = [
    { period: "2024 - Presente", titleKey: "edu1_title", institutionKey: "edu1_institution" },
    { period: "2024 - Presente", titleKey: "edu2_title", institutionKey: "edu2_institution" },
    { period: "2021 - 2024", titleKey: "edu3_title", institutionKey: "edu3_institution" },
    { period: "2014 - 2020", titleKey: "edu4_title", institutionKey: "edu4_institution" },
  ]

  const skillKeys = [
    "skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7",
    "skill8", "skill9", "skill10", "skill11", "skill12", "skill13",
    "skill14", "skill15", "skill16", "skill17"
  ]

  const cursoKeys = [
    "curso1", "curso2", "curso3", "curso4", "curso5"
  ]

  const tools = {
    design: ["Photoshop", "Illustrator", "InDesign", "Lightroom", "Premiere", "After Effects", "Figma", "Responsys", "Blender", "Canva", "ElevenLabs", "Grok"],
    productivity: ["Microsoft Office", "Power Apps", "Power Automate", "SAP", "MailJet"],
    development: ["GitHub", "v0 (Vercel)"]
  }

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
          <div className="lg:col-span-8 space-y-16">
            {/* Experiencia */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.experiencia}
              </h2>
              <div className="space-y-12">
                {experienceKeys.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{t.cv[item.roleKey as keyof typeof t.cv]}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{t.cv[item.companyKey as keyof typeof t.cv]}</p>
                      <p className="text-sm leading-relaxed">{t.cv[item.descKey as keyof typeof t.cv]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Educación */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.educacion}
              </h2>
              <div className="space-y-8">
                {educationKeys.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{t.cv[item.titleKey as keyof typeof t.cv]}</h3>
                      <p className="text-sm text-muted-foreground">{t.cv[item.institutionKey as keyof typeof t.cv]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cursos */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.cursos}
              </h2>
              <div className="space-y-4">
                {cursoKeys.map((key, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className="text-sm font-medium text-brand w-12">{2024 - index}</span>
                    <span className="text-sm">{t.cv[key as keyof typeof t.cv]}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 space-y-12">
            {/* Herramientas */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.herramientas}
              </h2>
              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{t.cv.diseno_creatividad}</h3>
                <div className="flex flex-wrap gap-2">{tools.design.map(tool => <span key={tool} className="text-xs px-3 py-1.5 border border-border">{tool}</span>)}</div>
              </div>
              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{t.cv.productividad}</h3>
                <div className="flex flex-wrap gap-2">{tools.productivity.map(tool => <span key={tool} className="text-xs px-3 py-1.5 border border-border">{tool}</span>)}</div>
              </div>
              <div>
                <h3 className="text-xs font-medium text-foreground mb-2">{t.cv.desarrollo}</h3>
                <div className="flex flex-wrap gap-2">{tools.development.map(tool => <span key={tool} className="text-xs px-3 py-1.5 border border-border">{tool}</span>)}</div>
              </div>
            </section>

            {/* Idiomas */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.idiomas}
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>{t.cv.espanol}</span><span className="text-muted-foreground">{t.cv.nativo}</span></div>
                <div className="flex justify-between"><span>{t.cv.ingles}</span><span className="text-muted-foreground">{t.cv.avanzado}</span></div>
                <div className="flex justify-between"><span>{t.cv.italiano}</span><span className="text-muted-foreground">{t.cv.basico}</span></div>
              </div>
            </section>

            {/* Habilidades */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.habilidades}
              </h2>
              <div className="space-y-1">
                {skillKeys.map(key => <p key={key} className="text-sm">{t.cv[key as keyof typeof t.cv]}</p>)}
              </div>
            </section>

            {/* Descargar */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {t.cv.descargar}
              </h2>
              <a href="/images/CV/CV_MariaBoronat.pdf" download className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs uppercase tracking-widest text-brand-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                {t.cv.cv_pdf} <span className="transition-transform duration-300 group-hover:translate-y-0.5">&darr;</span>
              </a>
            </section>
          </aside>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
