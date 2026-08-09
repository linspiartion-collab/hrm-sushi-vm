import Image from 'next/image'
import { brand } from '@/lib/brand'
import { categories } from '@/lib/menu'

export function Hero() {
  const firstCategory = categories[0]

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink px-6 py-16 text-cream"
    >
      {/* Photo de fond (remplaçable via lib/brand.ts) — léger zoom ambiant continu */}
      <Image
        src={brand.heroImage || '/placeholder.svg'}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg-zoom pointer-events-none object-cover opacity-25"
      />
      {/* Motif de fines bandes verticales rouges */}
      <div
        aria-hidden="true"
        className="hero-stripes hero-stripes-in pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <Image
          src={brand.logoLight || '/placeholder.svg'}
          alt={brand.logoAlt}
          width={627}
          height={924}
          priority
          className="hero-logo-in h-40 w-auto sm:h-52"
        />

        <h1 className="hero-title-in font-serif text-3xl font-black uppercase leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
          Vos sushis préférés,{' '}
          <span className="text-brand">préparés chaque jour</span> dans votre
          corner Auchan
        </h1>

        <p className="hero-in hero-in-delay-2 max-w-xl text-pretty text-base leading-relaxed text-cream/75 sm:text-lg">
          Recettes fraîches, préparées sur place par nos chefs sushimen — à
          emporter en un instant.
        </p>

        <a
          href={`#${firstCategory.id}`}
          className="hero-cta-in rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          Voir la carte
        </a>
      </div>
    </header>
  )
}
