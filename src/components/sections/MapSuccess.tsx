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
    <section className="py-20 bg-white">
      <SectionContainer className="px-3 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-[24px] md:text-5xl font-sans font-normal text-[#111827] mt-4 mb-0">
            Map Your Success
          </h2>
          <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
            <Button variant="primaryLight" size="md" arrow>
              Discover More
            </Button>
          </a>
        </div>
        
        {/* Steps Grid - maintain 3 columns on small screens (no stacking) */}
        <div className="grid grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="w-full h-[1px] bg-gray-300 mb-6"></div>
              <div className="text-5xl font-serif text-sage-500 opacity-50">
                {step.number}
              </div>
              <h3 className="text-lg font-medium text-gray-900 font-dm">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
