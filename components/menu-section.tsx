'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Category } from '@/lib/menu'
import { ProductDialog } from '@/components/product-dialog'
import { useInView } from '@/lib/use-in-view'

export function MenuSection({
  category,
  index,
}: {
  category: Category
  index: number
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const { ref, inView } = useInView<HTMLDivElement>()

  const total = category.products.length
  const selected = selectedIndex !== null ? category.products[selectedIndex] : null
  const goToPrev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + total) % total))
  const goToNext = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % total))

  const isReversed = index % 2 === 1
  const sectionBg = index % 2 === 0 ? 'bg-paper' : 'bg-cream'

  const imageBlock = (
    <div
      className={`reveal ${inView ? 'is-visible' : ''} relative aspect-4/3 w-full overflow-hidden rounded-md border border-ink/10 shadow-sm`}
    >
      <Image
        src={category.image || '/placeholder.svg'}
        alt={category.imageAlt}
        fill
        sizes="(min-width: 768px) 380px, 100vw"
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
    </div>
  )

  const textBlock = (
    <div className={`reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {category.label}
      </p>
      <h2
        id={`${category.id}-title`}
        className="mt-2 font-serif text-2xl font-black uppercase tracking-tight text-ink sm:text-3xl"
      >
        {category.title}
      </h2>

      <ul className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
        {category.products.map((product, i) => (
          <li
            key={`${product.name}-${product.format ?? ''}`}
            className={`reveal ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: inView ? `${0.2 + i * 0.05}s` : '0s' }}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="flex w-full items-baseline justify-between gap-4 py-3.5 text-left transition hover:bg-ink/[0.03] hover:pl-1"
            >
              <div className="min-w-0">
                <p className="font-serif text-sm font-bold uppercase leading-snug tracking-wide text-ink sm:text-base">
                  {product.name}
                </p>
                {product.format ? (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {product.format}
                  </p>
                ) : null}
              </div>
              <p className="shrink-0 font-mono text-sm font-semibold tabular-nums text-brand sm:text-base">
                {product.price}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className={`relative overflow-hidden px-6 py-14 sm:py-20 ${sectionBg}`}
    >
      {/* Fine bande de rayures rouges — signature visuelle reprise du hero */}
      <div
        aria-hidden="true"
        className="hero-stripes pointer-events-none absolute inset-x-0 top-0 h-2 opacity-70"
      />

      <div
        ref={ref}
        className={`mx-auto grid max-w-5xl gap-8 md:gap-14 ${
          isReversed
            ? 'md:grid-cols-[1fr_minmax(0,380px)]'
            : 'md:grid-cols-[minmax(0,380px)_1fr]'
        }`}
      >
        {isReversed ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>

      <ProductDialog
        product={selected}
        fallbackImage={category.image}
        fallbackImageAlt={category.imageAlt}
        onClose={() => setSelectedIndex(null)}
        onPrev={total > 1 ? goToPrev : undefined}
        onNext={total > 1 ? goToNext : undefined}
      />
    </section>
  )
}
