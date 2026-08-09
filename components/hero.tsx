'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { brand } from '@/lib/brand'
import { categories } from '@/lib/menu'

export function Hero() {
  const firstCategory = categories[0]
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const stripesRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    // Si l'utilisateur préfère moins de mouvement, on laisse le hero statique
    // (tout le contenu reste visible immédiatement, sans mouvement).
    if (prefersReducedMotion) return

    // Animation d'entrée jouée une seule fois au chargement de la page — plus
    // de scroll requis pour voir apparaître le titre/CTA. Séquence : le fond
    // s'éclaircit, les rayures se déploient depuis la gauche (signature de
    // marque), le logo se pose, puis le texte et le bouton arrivent en cascade.
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Chaque élément part de l'état posé par sa classe `*-in` en CSS ;
      // GSAP l'anime vers son état final (opacity/transform à 0/none).
      timeline
        .to(bgRef.current, { opacity: 1, duration: 0.7, ease: 'power1.out' }, 0)
        .to(stripesRef.current, { scaleX: 1, duration: 0.9, ease: 'power3.out' }, 0.05)
        .to(logoRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.9 }, 0.15)
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.55)
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.68)
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.6)' },
          0.82,
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink px-6 py-16 text-cream"
    >
      <div ref={bgRef} className="hero-bg-in pointer-events-none absolute inset-0">
        {/* Vidéo de fond (desktop et mobile) — poster affiché tant que la vidéo
            n'a pas assez chargé, et automatiquement si la lecture échoue.
            playsInline+muted+autoPlay sont requis pour l'autoplay inline sur
            iOS Safari / Chrome Android. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={brand.heroImage}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        >
          <source src={brand.heroVideo} type="video/mp4" />
        </video>
      </div>
      {/* Motif de fines bandes verticales rouges — se déploie depuis la gauche à l'arrivée */}
      <div
        ref={stripesRef}
        aria-hidden="true"
        className="hero-stripes hero-stripes-in pointer-events-none absolute inset-0 opacity-60"
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
          className="hero-logo-in h-52 w-auto will-change-transform sm:h-72"
        />

        <h1
          ref={titleRef}
          className="hero-reveal-target font-serif text-3xl font-black uppercase leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl"
        >
          Vos sushis préférés,{' '}
          <span className="text-brand">préparés chaque jour</span> dans votre
          corner Auchan
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
          className="hero-cta-in rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          Voir la carte
        </a>
      </div>
    </header>
  )
}
