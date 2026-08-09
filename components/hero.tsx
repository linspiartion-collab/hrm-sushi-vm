'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { brand } from '@/lib/brand'
import { categories } from '@/lib/menu'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  // Évite que ScrollTrigger recalcule tout quand la barre d'adresse du
  // navigateur mobile apparaît/disparaît en scrollant (cause principale
  // de saccades sur iOS Safari et Chrome Android).
  ScrollTrigger.config({ ignoreMobileResize: true })
}

export function Hero() {
  const firstCategory = categories[0]
  const sectionRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    // Si l'utilisateur préfère moins de mouvement, on laisse le hero statique
    // (le logo garde sa taille normale, le reste du contenu reste visible).
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 0.6,
        },
      })

      // Le logo rétrécit et remonte pendant que le reste du contenu apparaît,
      // le tout parfaitement synchronisé avec la position de scroll.
      timeline
        .to(logoRef.current, { scale: 0.55, y: -160, ease: 'none' }, 0)
        .fromTo(
          [titleRef.current, subtitleRef.current, ctaRef.current],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.15, ease: 'none' },
          0.2,
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      id="top"
      ref={sectionRef}
      className="hero-scroll-wrap relative bg-ink text-cream"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-16">
        {/* Image de fond sur mobile (économise batterie/données, plus fiable que la vidéo sur téléphone) */}
        <Image
          src={brand.heroImage || '/placeholder.svg'}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover opacity-25 md:hidden"
        />
        {/* Vidéo de fond sur desktop/tablette uniquement (remplaçable via lib/brand.ts) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={brand.heroImage}
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-25 md:block"
        >
          <source src={brand.heroVideo} type="video/mp4" />
        </video>
        {/* Motif de fines bandes verticales rouges */}
        <div
          aria-hidden="true"
          className="hero-stripes pointer-events-none absolute inset-0 opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink"
        />

        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 text-center">
          <Image
            ref={logoRef}
            src={brand.logoLight || '/placeholder.svg'}
            alt={brand.logoAlt}
            width={627}
            height={924}
            priority
            className="h-40 w-auto will-change-transform sm:h-52"
          />

          <h1
            ref={titleRef}
            className="hero-reveal-target font-serif text-3xl font-black uppercase leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Vos sushis préférés,{' '}
            <span className="text-brand">préparés chaque jour</span> dans
            votre corner Auchan
          </h1>

          <p
            ref={subtitleRef}
            className="hero-reveal-target max-w-xl text-pretty text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            Recettes fraîches, préparées sur place par nos chefs sushimen — à
            emporter en un instant.
          </p>

          <a
            ref={ctaRef}
            href={`#${firstCategory.id}`}
            className="hero-reveal-target rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            Voir la carte
          </a>
        </div>
      </div>
    </header>
  )
}
