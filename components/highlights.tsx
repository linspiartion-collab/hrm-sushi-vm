'use client'

import { useRef, useLayoutEffect } from 'react'
import { ChefHat, Store, Timer } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const gridRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current
        ? Array.from(gridRef.current.children)
        : []
      ScrollTrigger.batch(cards, {
        start: 'top 80%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.12,
          }),
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-ink px-6 py-14 sm:py-16" aria-label="Nos atouts">
      <div
        ref={gridRef}
        className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-8"
      >
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="scroll-reveal flex flex-col items-center gap-3 text-center"
          >
            <Icon
              className="h-6 w-6 text-brand"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h2 className="font-serif text-base font-bold uppercase tracking-wide text-cream">
              {title}
            </h2>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-cream/60">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
