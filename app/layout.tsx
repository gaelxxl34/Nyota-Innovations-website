
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nyota Innovations - AI, AR & Digital Transformation',
  description: 'Pioneering the future of technology through AI, AR, and digital transformation solutions.',
  keywords: ['AI', 'Augmented Reality', 'Digital Transformation', 'Technology', 'Innovation', 'Nyota Innovations'],
  openGraph: {
    title: 'Nyota Innovations - AI, AR & Digital Transformation',
    description: 'Pioneering the future of technology through AI, AR, and digital transformation solutions.',
    url: 'https://www.nyotainnovations.com',
    siteName: 'Nyota Innovations',
    images: [
      {
        url: 'https://www.nyotainnovations.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nyota Innovations Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyota Innovations - AI, AR & Digital Transformation',
    description: 'Pioneering the future of technology through AI, AR, and digital transformation solutions.',
    images: ['https://www.nyotainnovations.com/og-image.jpg'],
    creator: '@NyotaInnov',
  },
  metadataBase: new URL('https://www.nyotainnovations.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
