import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Placeholder site details — replace these values with your real site info
const SITE_TITLE = 'Area'
const SITE_DESCRIPTION =
  "Area turns complex regional data into clear, actionable dashboards and visuals—giving teams precise insights, faster decisions, and measurable efficiency gains across every market."
// Production domain for Open Graph / Twitter card URLs
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
        url: new URL('/og.png', metadataBase).href,
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
    images: [new URL('/og.png', metadataBase).href],
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
          "url": new URL('/og.png', metadataBase).href
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
        <meta property="og:type" content="website" />
        <meta property="og:title" content={String(metadata.title ?? '')} />
        <meta property="og:description" content={metadata.description ?? ''} />
        <meta property="og:url" content={metadataBase.href} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta name="image" property="og:image" content={new URL('/og.png', metadataBase).href} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.twitter?.title ?? metadata.title ?? '')} />
        <meta name="twitter:description" content={String(metadata.twitter?.description ?? metadata.description ?? '')} />
        <meta name="twitter:image" content={new URL('/og.png', metadataBase).href} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
