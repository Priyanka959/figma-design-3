import SectionContainer from '@/components/ui/SectionContainer'

export default function Testimonial() {
  return (
    <section id="how-to" className="py-12 bg-white">
      <SectionContainer maxWidth="2xl" className="px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-3xl overflow-hidden bg-sand-300">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/assests/circle.webp')`,
                }}
              ></div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="w-full h-[1px] bg-gray-300 mb-8"></div>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-relaxed">
                "I was skeptical, but Area has completely transformed the way I manage my business. The platform is so easy to use, I can't imagine running my company without this immersive, and the platform is so easy to use."
              </p>
              
              <div className="pt-4">
                <p className="text-[15px] font-dm text-[#000000] font-normal">John Smith</p>
                <p className="text-[10.5px] text-[#485C11]" style={{ fontFamily: '"Roboto Mono", monospace' }}>Head of Data</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      {/* Bottom line */}
      <div className="w-full h-[1px] bg-gray-300 mt-12"></div>
    </section>
  )
}
