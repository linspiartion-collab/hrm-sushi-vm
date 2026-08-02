import Image from 'next/image'
import { brand } from '@/lib/brand'

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-14 text-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <Image
          src={brand.logoLight || '/placeholder.svg'}
          alt={brand.logoAlt}
          width={627}
          height={924}
          className="h-28 w-auto"
        />
        <p className="max-w-md text-pretty text-sm leading-relaxed text-cream/70">
          Corner HRM Sushi — au sein de votre magasin Auchan. Horaires alignés sur
          ceux du magasin.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-cream/40">
          寿司 · HRM Sushi
        </p>
      </div>
    </footer>
  )
}
