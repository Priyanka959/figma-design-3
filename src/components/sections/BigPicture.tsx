import SectionContainer from '@/components/ui/SectionContainer'
import Button from '@/components/ui/Button'

export default function BigPicture() {
  return (
    <section id="specifications" className="pt-2 pb-20 md:py-20 bg-white">
      <SectionContainer maxWidth="2xl">
        <div className="px-8 md:px-12 lg:px-16 relative">
          {/* Decorative horizontal line that spans the left column and aligns with the image base on lg+ */}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
            {/* Horizontal line at top of left content */}
            <div className="border-t border-gray-200 w-full mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              See the Big Picture
            </h2>
            
            <p className="text-light-gray leading-relaxed">
              Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
            </p>
            
            <div className="space-y-0">
              <div className="flex items-start gap-6 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 text-light-gray font-medium text-[13px]">
                  01
                </div>
                <div>
                  <p className="text-black text-[13px]">
                    Spot Trends in Seconds: No more digging through numbers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 text-light-gray font-medium text-[13px]">
                  02
                </div>
                <div>
                  <p className="text-black text-[13px]">
                    Get Everyone on the Same Page: Share easy-to-understand reports with your team. 
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 text-light-gray font-medium text-[13px]">
                  03
                </div>
                <div>
                  <p className="text-black text-[13px]">
                    Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 py-6">
                <div className="flex-shrink-0 text-light-gray font-medium text-[13px]">
                  04
                </div>
                <div>
                  <p className="text-black text-[13px]">
                    Your Global Snapshot: Get a quick, clear overview of your entire operation.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
                <Button variant="primaryLight" size="md" >
                  Discover More
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="min-h-[420px] md:aspect-square rounded-3xl overflow-hidden bg-sand-300">
              <div 
                className="w-full h-[420px] md:h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assests/cylinder.webp')",
                }}
              ></div>
            </div>
          </div>
        </div>
        </div>
      </SectionContainer>
    </section>
  )
}
