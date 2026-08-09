'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Détecte quand un élément entre dans le viewport, pour déclencher une
 * animation d'apparition au scroll. Se déclenche une seule fois (l'élément
 * reste visible une fois révélé, il ne disparaît pas si on remonte).
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
