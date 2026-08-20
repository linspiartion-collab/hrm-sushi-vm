import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import 'lenis/dist/lenis.css'
import '@fontsource-variable/inter'
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/800.css'
import '@fontsource/playfair-display/900.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/600.css'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'

export const metadata: Metadata = {
  title: 'HRM Sushi — Corner sushi dans votre magasin Auchan',
  description:
    'La carte complète de HRM Sushi : box et plateaux, sushis, california & maki, crunch, snacking, donburi et poké bowls, préparés chaque jour sur place par nos chefs sushimen.',
  formatDetection: {
    telephone: false,
  },
  keywords: [
    'HRM Sushi',
    'corner sushi',
    'Auchan',
    'sushi à emporter',
    'poké bowl',
    'maki',
    'california',
  ],
  openGraph: {
    title: 'HRM Sushi — Corner sushi dans votre magasin Auchan',
    description:
      'Box, plateaux, sushis, maki, crunch, donburi et poké bowls préparés chaque jour sur place.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c1b1c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="light bg-background">
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
