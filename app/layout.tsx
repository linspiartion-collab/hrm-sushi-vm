import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono-ticket',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HRM Sushi — Corner sushi dans votre magasin Auchan',
  description:
    'La carte complète de HRM Sushi : box et plateaux, sushis, california & maki, crunch, snacking, donburi et poké bowls, préparés chaque jour sur place par nos chefs sushimen.',
  generator: 'v0.app',
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
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
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
    <html
      lang="fr"
      className={`light bg-background ${inter.variable} ${playfair.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
