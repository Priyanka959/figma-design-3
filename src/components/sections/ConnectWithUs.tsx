import SectionContainer from '@/components/ui/SectionContainer'
import Button from '@/components/ui/Button'

export default function ConnectWithUs() {
  return (
    <section id="resources" className="py-20 bg-white">
      <SectionContainer className="px-3 sm:px-6 lg:px-0">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Connect with us
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
           Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
          </p>
          <div className="pt-6 flex justify-center">
            <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer" className="w-full max-w-3xl">
              <Button variant="primary" size="md" className="w-full" arrow>
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
