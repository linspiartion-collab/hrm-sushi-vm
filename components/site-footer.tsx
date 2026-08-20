import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { brand } from '@/lib/brand'

const address = 'Auchan Luxeuil, Le Mont Valot, N57, 70300 Luxeuil-les-Bains'
const mapsQuery = encodeURIComponent(address)

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

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-cream/80 underline-offset-4 transition hover:text-brand hover:underline"
        >
          <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          {address}
        </a>

        <div className="w-full max-w-xl overflow-hidden rounded-md border border-cream/10">
          <iframe
            title="Localisation HRM Sushi — Auchan Luxeuil"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            width="100%"
            height="280"
            style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-cream/40">
          寿司 · HRM Sushi
        </p>
      </div>
    </footer>
  )
}
