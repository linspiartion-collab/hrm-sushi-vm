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
  const videoRef = useRef<HTMLVideoElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play()?.catch(() => {})
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to(
          bgRef.current,
          { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
          0,
        )
        .to(stripesRef.current, { scaleX: 1, duration: 0.7, ease: 'power3.out' }, 0.1)
        .to(
          logoRef.current,
          {
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 1,
            ease: 'back.out(1.4)',
          },
          0.8,
        )
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.8)
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.95)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, 2.1)
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
        <video
          ref={videoRef}
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
          className="hero-reveal-target rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          Voir la carte
        </a>
      </div>
    </header>
  )
}
