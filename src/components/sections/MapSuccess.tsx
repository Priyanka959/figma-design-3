import SectionContainer from '@/components/ui/SectionContainer'
import Button from '@/components/ui/Button'

export default function MapSuccess() {
  const steps = [
    {
      number: '01',
      title: 'Get Started',
      description: 'With our intuitive setup, you’re up and running in minutes.'
    },
    {
      number: '02',
      title: 'Customize and Configure',
      description: 'Adapt Area to your specific requirements and preferences.'
    },
    {
      number: '03',
      title: 'Grow Your Business',
      description: 'Make informed decisions to exceed your goals.'
    },
  ]
  
  return (
    <section className="py-8 bg-white">
      <SectionContainer className="px-3 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
            <h2 className="text-[48px] font-['Georgia',serif] text-[#111827] mt-0 mb-6">
              Map Your Success
            </h2>
          <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
            <Button variant="primaryLight" size="md">
              Discover More
            </Button>
          </a>
        </div>
        
        {/* Steps Grid - maintain 3 columns on small screens (no stacking) */}
        <div className="overflow-x-auto md:overflow-x-visible -mx-3 sm:-mx-6 lg:mx-0">
          <div className="min-w-[900px] md:min-w-0">
            <div className="grid grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-full h-[1px] bg-gray-300 mb-6"></div>
                  <div className="text-[55px] md:text-[70px] font-dm text-[#929292] leading-none">
                    {step.number}
                  </div>
                  <h3 className="text-[14px] md:text-[16px] font-medium text-gray-900 font-dm">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-dm text-[#6F6F6F] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
