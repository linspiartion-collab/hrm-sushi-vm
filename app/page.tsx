import { Hero } from '@/components/hero'
import { Highlights } from '@/components/highlights'
import { CategoryNav } from '@/components/category-nav'
import { MenuSection } from '@/components/menu-section'
import { SiteFooter } from '@/components/site-footer'
import { categories } from '@/lib/menu'

export default function Page() {
  return (
    <>
      <Hero />
      <Highlights />
      <CategoryNav />
      <main className="bg-paper">
        <h2 className="sr-only">Notre carte</h2>
        {categories.map((category, index) => (
          <MenuSection key={category.id} category={category} index={index} />
        ))}
      </main>
      <SiteFooter />
    </>
  )
}
