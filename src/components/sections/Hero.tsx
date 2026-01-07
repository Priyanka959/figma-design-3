import SectionContainer from '@/components/ui/SectionContainer'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <SectionContainer>
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in px-4">
          <h1 className="text-hero font-serif font-normal text-gray-900 mb-8">
            Browse everything.
          </h1>
        </div>
        
        {/* Hero Image with Background */}
        <div className="relative px-6 md:px-8 lg:px-0 overflow-hidden">
          {/* Sage green background blob - positioned with baseline aligned */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end justify-center pointer-events-none z-0 w-full animate-scale-in">
            {/* Blob should be wider than the device so it peeks from behind on both sides */}
            <div className="w-[90%] md:w-[140%] max-w-[1400px] h-[280px] md:h-[320px] lg:h-[350px] bg-sage-300 rounded-[2rem] md:rounded-[3rem]"></div>
          </div>
          
          {/* Device mockup - desktop (laptop) */}
          <div className="hidden md:block relative z-10 max-w-3xl mx-auto overflow-hidden pb-0 animate-slide-up">
            <div className="relative rounded-t-[2rem] overflow-hidden shadow-2xl bg-black border-t-[12px] border-l-[12px] border-r-[12px] border-black">
              <div className="aspect-[16/10] relative">
                {/* Background landscape image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assests/sunset-snow-capped-mountains_23-2152014205.avif')",
                    backgroundPosition: '50% 46%'
                  }}
                >
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 via-transparent to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Top section */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm text-gray-700">
                        Reports &gt; Overview
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <div className="text-7xl font-bold text-white mb-2">78%</div>
                        <div className="text-lg text-white/90">Efficiency Improvements</div>
                      </div>
                      <div>
                        <button className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm text-gray-700">
                          All Regions (33) ▼
                        </button>
                      </div>
                    </div>
                    
                    {/* Horizontal line */}
                    <div className="w-full h-px bg-white/30 mb-8"></div>
                    
                    {/* Timeline */}
                    <div className="flex items-end justify-between gap-4 mt-auto relative" style={{ height: '180px' }}>
                      {/* Data points with vertical lines and squares */}
                      <div className="absolute inset-0 flex items-end justify-between pointer-events-none">
                        {[
                          { height: 70, left: '5%' },
                          { height: 50, left: '8%' },
                          { height: 90, left: '11%' },
                          { height: 75, left: '14%' },
                          { height: 55, left: '17%' },
                          { height: 105, left: '22%' },
                          { height: 130, left: '26%' },
                          { height: 95, left: '30%' },
                          { height: 115, left: '34%' },
                          { height: 85, left: '38%' },
                          { height: 125, left: '42%' },
                          { height: 100, left: '46%' },
                          { height: 65, left: '50%' },
                          { height: 145, left: '54%' },
                          { height: 110, left: '58%' },
                          { height: 80, left: '62%' },
                          { height: 95, left: '66%' },
                          { height: 135, left: '70%' },
                          { height: 150, left: '74%' },
                          { height: 120, left: '78%' },
                          { height: 105, left: '82%' },
                          { height: 140, left: '86%' },
                          { height: 125, left: '90%' },
                          { height: 155, left: '94%' },
                        ].map((point, i) => (
                          <div
                            key={i}
                            className="absolute"
                            style={{
                              left: point.left,
                              bottom: '30px',
                              height: `${point.height}px`
                            }}
                          >
                            {/* Vertical line */}
                            <div className="w-[2px] h-full bg-white relative">
                              {/* Top square */}
                              <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-white"></div>
                              {/* Bottom square */}
                              <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-white"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Year labels */}
                      <div className="text-white text-sm z-10">2021</div>
                      <div className="text-white text-sm z-10">2022</div>
                      <div className="text-white text-sm z-10">2023</div>
                      <div className="text-white text-sm z-10">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device mockup - mobile */}
          <div className="md:hidden relative z-10 max-w-[260px] mx-auto overflow-hidden animate-slide-up">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-[16px] z-50"></div>
            
            <div className="relative rounded-t-[3rem] overflow-hidden shadow-lg bg-black border-t-[8px] border-l-[8px] border-r-[8px] border-black" style={{ width: '100%' }}>
              <div className="aspect-[9/16] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assests/sunset-snow-capped-mountains_23-2152014205.avif')",
                    backgroundPosition: '50% 46%'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 via-transparent to-transparent"></div>
                  <div className="relative h-full flex flex-col">
                    {/* Status bar - mobile - positioned at very top */}
                    <div className="flex items-center justify-between text-white text-xs px-4 pt-3 pb-2">
                      <div className="font-semibold">9:41</div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="white">
                          <rect x="0" y="3" width="4" height="6" rx="1"/>
                          <rect x="6" y="1" width="4" height="8" rx="1"/>
                          <rect x="12" y="0" width="4" height="10" rx="1"/>
                        </svg>
                        <svg className="w-6 h-3" viewBox="0 0 24 12" fill="white">
                          <rect x="0" y="0" width="20" height="10" rx="2" stroke="white" strokeWidth="1" fill="none"/>
                          <rect x="21" y="3" width="2" height="4" rx="0.5" fill="white"/>
                          <rect x="2" y="2" width="16" height="6" rx="1" fill="white"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Top section */}
                    <div className="text-xs text-white/70 px-4 pt-4 pb-2">
                      Reports &gt; Overview
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between px-4 mb-4">
                      <div>
                        <div className="text-4xl font-bold text-white mb-1">78%</div>
                        <div className="text-xs text-white/90">Efficiency Improvements</div>
                      </div>
                      <div>
                        <button className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg text-xs text-gray-700">
                          All Regions (33) ▼
                        </button>
                      </div>
                    </div>
                    
                    {/* Horizontal line */}
                    <div className="mx-4 h-px bg-white/30 mb-4"></div>
                    
                    {/* Timeline with data points */}
                    <div className="flex-1 relative px-4 pb-4">
                      {/* Data points */}
                      <div className="absolute inset-x-4 top-0 bottom-10 flex items-end justify-between pointer-events-none">
                        {[
                          { height: 35 },
                          { height: 55 },
                          { height: 45 },
                          { height: 30 },
                          { height: 65 },
                          { height: 50 },
                          { height: 70 },
                          { height: 60 },
                          { height: 40 },
                          { height: 75 },
                          { height: 55 },
                          { height: 80 },
                        ].map((point, i) => (
                          <div
                            key={i}
                            className="relative"
                            style={{
                              height: `${point.height}px`
                            }}
                          >
                            <div className="w-[2px] h-full bg-white relative">
                              <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white"></div>
                              <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Year labels */}
                      <div className="absolute bottom-0 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <div>2021</div>
                        <div>2022</div>
                        <div>2023</div>
                        <div>2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
