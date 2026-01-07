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
