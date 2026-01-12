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

// Inferred from project: SITE_TITLE = 'Area', SITE_DESCRIPTION from layout
export const metadata: Metadata = {
  title: 'Home | Area',
  description: "We've cracked the code. Discover the big picture with Area.",
  openGraph: {
    title: 'Area',
    description: "We've cracked the code. Discover the big picture with Area.",
    url: 'https://figma-design-3-01.onrender.com/',
    images: ['/assests/green-globe.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Area',
    description: "We've cracked the code. Discover the big picture with Area.",
    images: ['/assests/green-globe.jpg'],
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
