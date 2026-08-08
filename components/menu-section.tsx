'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Category, Product } from '@/lib/menu'
import { ProductDialog } from '@/components/product-dialog'

export function MenuSection({ category }: { category: Category }) {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="border-b border-ink/10 px-6 py-12 last:border-b-0 sm:py-16"
    >
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-12">
        {/* Vignette photo — remplaçable via lib/menu.ts */}
        <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-ink/10 bg-cream md:aspect-4/5">
          <Image
            src={category.image || '/placeholder.svg'}
            alt={category.imageAlt}
            fill
            sizes="(min-width: 768px) 260px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
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
            {category.products.map((product) => (
              <li key={`${product.name}-${product.format ?? ''}`}>
                <button
                  type="button"
                  onClick={() => setSelected(product)}
                  className="flex w-full items-baseline justify-between gap-4 py-3.5 text-left transition hover:bg-ink/[0.03]"
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
      </div>

      <ProductDialog
        product={selected}
        fallbackImage={category.image}
        fallbackImageAlt={category.imageAlt}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
