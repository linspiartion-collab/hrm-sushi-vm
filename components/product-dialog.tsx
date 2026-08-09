'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Product } from '@/lib/menu'

type ProductDialogProps = {
  product: Product | null
  /** Photo de secours si le produit n'a pas sa propre photo (photo de catégorie) */
  fallbackImage: string
  fallbackImageAlt: string
  onClose: () => void
  /** Passe au produit précédent / suivant de la catégorie. Absent si un seul produit. */
  onPrev?: () => void
  onNext?: () => void
}

export function ProductDialog({
  product,
  fallbackImage,
  fallbackImageAlt,
  onClose,
  onPrev,
  onNext,
}: ProductDialogProps) {
  // Ferme la fiche avec Échap, navigue avec les flèches du clavier
  useEffect(() => {
    if (!product) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [product, onClose, onPrev, onNext])

  if (!product) return null

  const image = product.image || fallbackImage
  const imageAlt = product.image ? product.name : fallbackImageAlt

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 backdrop-blur-sm animate-in fade-in duration-300 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-dialog-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-t-2xl bg-paper animate-in fade-in slide-in-from-bottom-8 duration-300 sm:rounded-sm sm:zoom-in-95 sm:slide-in-from-bottom-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink shadow-sm transition hover:bg-cream"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Photo en 4:3, cadrée pour remplir tout le cadre sans bandes latérales. */}
        <div className="relative aspect-4/3 w-full bg-cream">
          <Image
            src={image || '/placeholder.svg'}
            alt={imageAlt}
            fill
            sizes="(min-width: 640px) 700px, 100vw"
            quality={95}
            priority
            className="object-cover"
          />

          {onPrev ? (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Produit précédent"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-sm transition hover:bg-cream"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          ) : null}

          {onNext ? (
            <button
              type="button"
              onClick={onNext}
              aria-label="Produit suivant"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-sm transition hover:bg-cream"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : null}
        </div>

        <div className="max-h-[45vh] overflow-y-auto px-6 py-6 sm:max-h-none sm:px-8 sm:py-8">
          {product.format ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {product.format}
            </p>
          ) : null}

          <h3
            id="product-dialog-title"
            className="mt-1 font-serif text-2xl font-black uppercase tracking-tight text-ink sm:text-3xl"
          >
            {product.name}
          </h3>

          {product.composition ? (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {product.composition}
            </p>
          ) : null}

          <p className="mt-6 font-mono text-lg font-semibold tabular-nums text-brand sm:text-xl">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  )
}
