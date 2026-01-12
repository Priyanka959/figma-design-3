import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Partners from '@/components/sections/Partners'
import Features from '@/components/sections/Features'
import ImageShowcase from '@/components/sections/ImageShowcase'
import BigPicture from '@/components/sections/BigPicture'
import WhyChoose from '@/components/sections/WhyChoose'
import Testimonial from '@/components/sections/Testimonial'
import MapSuccess from '@/components/sections/MapSuccess'
import ConnectWithUs from '@/components/sections/ConnectWithUs'

// Page-level metadata — inherits metadataBase from layout.tsx
// No hardcoded domains; Next.js resolves relative URLs using metadataBase
export const metadata: Metadata = {
  title: 'Home | Area',
  description:
    "Area turns complex regional data into clear, actionable dashboards and visuals—giving teams precise insights, faster decisions, and measurable efficiency gains across every market.",
  openGraph: {
    title: 'Area — Home',
    description:
      "Area turns complex regional data into clear, actionable dashboards and visuals—giving teams precise insights, faster decisions, and measurable efficiency gains across every market.",
    siteName: 'Area',
    url: '/',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Area — preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Area — Home',
    description:
      "Area turns complex regional data into clear, actionable dashboards and visuals—giving teams precise insights, faster decisions, and measurable efficiency gains across every market.",
    images: ['/og.jpg'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Features />
      <ImageShowcase imageUrl="/assests/sunset-snow-capped-mountains_23-2152014205.avif" />
      <BigPicture />
      <WhyChoose />
      <Testimonial />
      <MapSuccess />
      <ImageShowcase imageUrl="/assests/image2.webp" />
      <ConnectWithUs />
      <Footer />
    </main>
  )
}
