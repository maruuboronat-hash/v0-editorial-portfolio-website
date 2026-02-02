import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <header className="px-6 md:px-12 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl tracking-tight">
            Contacto
          </h1>
        </div>
      </header>
      
      <ContactSection />
    </div>
  )
}
