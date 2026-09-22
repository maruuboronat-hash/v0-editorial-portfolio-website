import { notFound } from "next/navigation"
import { ContactSection } from "@/components/contact-section"
import { CategoryContent } from "./category-content"
import { categoriesData } from "@/lib/categories-data"

type PageParams = Promise<{ category: string }>

export default async function CategoryPage({ params }: { params: PageParams }) {
  const { category } = await params
  const categoryData = categoriesData[category]

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="pt-24 min-h-screen">
      <CategoryContent 
        categoryData={{
          projects: categoryData.projects,
          // No pasamos title ni description - CategoryContent los traduce solos
        }} 
      />
      <ContactSection />
    </div>
  )
}
