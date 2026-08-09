'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { brand } from '@/lib/brand'
import { categories } from '@/lib/menu'

export function CategoryNav() {
  const [active, setActive] = useState(categories[0].id)
  const listRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef(new Map<string, HTMLAnchorElement>())
  const [pill, setPill] = useState<{ left: number; width: number } | null>(
    null,
  )

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-72px 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Mesure la position/largeur du lien actif pour faire glisser l'indicateur derrière lui
  useEffect(() => {
    const measure = () => {
      const item = itemRefs.current.get(active)
      const list = listRef.current
      if (!item || !list) return
      const itemRect = item.getBoundingClientRect()
      const listRect = list.getBoundingClientRect()
      setPill({
        left: itemRect.left - listRect.left + list.scrollLeft,
        width: itemRect.width,
      })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  // Garde la pilule active visible dans la barre scrollable sur mobile
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const item = itemRefs.current.get(active)
    if (!item) return

    const listBox = list.getBoundingClientRect()
    const itemBox = item.getBoundingClientRect()
    if (itemBox.left < listBox.left || itemBox.right > listBox.right) {
      list.scrollTo({
        left: item.offsetLeft - list.clientWidth / 2 + item.clientWidth / 2,
        behavior: 'smooth',
      })
    }
  }, [active])

  return (
    <nav
      aria-label="Catégories de la carte"
      className="sticky top-0 z-40 border-y border-ink/10 bg-cream/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4">
        <a
          href="#top"
          aria-label="Retour en haut — HRM Sushi"
          className="hidden shrink-0 py-2 sm:block"
        >
          <Image
            src={brand.logo || '/placeholder.svg'}
            alt={brand.logoAlt}
            width={627}
            height={924}
            className="h-9 w-auto"
          />
        </a>
        <ul
          ref={listRef}
          className="no-scrollbar relative flex flex-1 gap-2 overflow-x-auto py-3"
        >
          {/* Pilule qui glisse derrière le lien actif */}
          {pill ? (
            <div
              aria-hidden="true"
              className="nav-pill-indicator absolute left-0 top-1.5 bottom-1.5 rounded-full bg-brand"
              style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
            />
          ) : null}
          {categories.map((category) => {
            const isActive = active === category.id
            return (
              <li key={category.id} className="relative z-10 shrink-0">
                <a
                  ref={(node) => {
                    if (node) itemRefs.current.set(category.id, node)
                    else itemRefs.current.delete(category.id)
                  }}
                  href={`#${category.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block whitespace-nowrap rounded-full border border-transparent px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? 'text-cream'
                      : 'border-ink/15 text-ink hover:border-brand hover:text-brand'
                  }`}
                >
                  {category.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
