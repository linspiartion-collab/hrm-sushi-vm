import { ChefHat, Store, Timer } from 'lucide-react'

const items = [
  {
    icon: ChefHat,
    title: 'Préparé chaque jour',
    text: 'Nos recettes sont confectionnées sur place, chaque matin, par nos chefs sushimen.',
  },
  {
    icon: Store,
    title: 'Corner Auchan',
    text: "Retrouvez-nous directement dans votre magasin, aux horaires d'ouverture du rayon frais.",
  },
  {
    icon: Timer,
    title: 'Préparé minute',
    text: "Une envie qui n'est pas en vitrine ? Nos chefs vous la préparent en quelques minutes.",
  },
]

export function Highlights() {
  return (
    <section className="bg-cream px-6 py-14 sm:py-16" aria-label="Nos atouts">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-8">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center gap-3 text-center">
            <Icon
              className="h-6 w-6 text-brand"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h2 className="font-serif text-base font-bold uppercase tracking-wide text-ink">
              {title}
            </h2>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
