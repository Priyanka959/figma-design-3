import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Placeholder site details — replace these values with your real site info
const SITE_TITLE = 'Area'
const SITE_DESCRIPTION = "We've cracked the code. Discover the big picture with Area."
const metadataBase = new URL('https://figma-design-3-01.onrender.com')

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Browse everything`,
  description: SITE_DESCRIPTION,
  applicationName: SITE_TITLE,
  metadataBase,
  // viewport moved to dedicated export below per Next.js 14 requirements
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: metadataBase.href,
    siteName: SITE_TITLE,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} — preview`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = 'width=device-width, initial-scale=1'

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://figma-design-3-01.onrender.com/#organization",
      "name": SITE_TITLE,
      "url": metadataBase.href,
      "logo": {
        "@type": "ImageObject",
          "url": "/og-image.svg"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://figma-design-3-01.onrender.com/#website",
      "url": metadataBase.href,
      "name": SITE_TITLE,
      "publisher": {
        "@id": "https://figma-design-3-01.onrender.com/#organization"
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
