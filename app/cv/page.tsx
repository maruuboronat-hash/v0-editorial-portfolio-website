"use client"

import { useLanguage } from "@/components/language-provider"

// Nombres de software: no se traducen, quedan igual en ambos idiomas.
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

export default function CVPage() {
  const { t } = useLanguage()
  const cv = t.cv

  return (
    <div className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-6">{cv.title}</h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{cv.intro}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Experience */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {cv.sections.experience}
              </h2>
              <div className="space-y-12">
                {cv.experience.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{item.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <div className="text-sm leading-relaxed">
                        {item.paragraphs.map((paragraph, i) => (
                          <p key={i} className="mb-3">
                            {paragraph}
                          </p>
                        ))}
                        {item.highlight && (
                          <p className="text-muted-foreground italic border-l-2 border-brand pl-4 py-1 text-sm">
                            {item.highlight}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {cv.sections.education}
              </h2>
              <div className="space-y-8">
                {cv.education.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Courses */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {cv.sections.courses}
              </h2>
              <div className="space-y-4">
                {cv.awards.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className="text-sm font-medium text-brand w-12">{item.year}</span>
                    <span className="text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground">— {item.category}</span>
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
                {cv.sections.tools}
              </h2>

              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{cv.toolGroups.design}</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.design.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-medium text-foreground mb-2">{cv.toolGroups.productivity}</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.productivity.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-medium text-foreground mb-2">{cv.toolGroups.development}</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.development.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Idiomas */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {cv.sections.languages}
              </h2>
              <div className="space-y-2 text-sm">
                {cv.languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Habilidades */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {cv.sections.skills}
              </h2>
              <div className="space-y-1">
                {cv.skills.map((skill) => (
                  <p key={skill} className="text-sm">
                    {skill}
                  </p>
                ))}
              </div>
            </section>

            {/* Descargar */}
            <section>
              <h2 className="font-heading text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-brand" />
                {cv.sections.download}
              </h2>
              <a
                href="/images/CV/CV_MariaBoronat.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs uppercase tracking-widest text-brand-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {cv.downloadLabel}
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">&darr;</span>
              </a>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
