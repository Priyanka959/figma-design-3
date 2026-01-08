import SectionContainer from '@/components/ui/SectionContainer'
import Button from '@/components/ui/Button'

export default function WhyChoose() {
  const columns = [
    {
      title: 'Area',
      items: [
        'Ultra-fast browsing',
        'Advanced AI insights',
        'Seamless integration',
        'Advanced AI insights',
        'Ultra-fast browsing',
        'Full UTF-8 support',
 'Fast and IT support',
      ]
    },
    {
      title: 'Ideologies',
      items: [
        'Fast browsing',
        'Basic AI recommendations',
        'Basic AI recommendations',
        'Best IT in consectetue',
        'Exceptur ut occaecat',
        'Fast and IT support',
        'Fast and IT support',
      ]
    },
    {
      title: 'Report Care',
      items: [
        'Moderate speeds',
        'No AI assistance',
        'Steep learning curve',
        'Best IT in consectetue',
        'Fast and IT support',
        'Best IT in consectetue',
        'Best and IT support',
      ]
    },
  ]
  
  const maxItems = Math.max(...columns.map(c => c.items.length))

  return (
    <section className="py-20">
      <SectionContainer>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
            Why Choose Area?
          </h2>
          <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
            <Button variant="primaryLight" size="md">
              Discover More
            </Button>
          </a>
        </div>
        
        {/* Three Column List with row-based rendering so horizontal lines align */}
        <div className="mt-16">
          <div className="grid grid-cols-3 gap-0">
            {/* Area column - complete bordered card wrapper */}
            <div className="px-6 py-0 md:py-4">
              <div className="bg-white border border-gray-200 rounded-3xl">
                {/* Title */}
                <div className="px-6 py-6 text-center border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">{columns[0].title}</h3>
                </div>
                {/* Items */}
                {Array.from({ length: maxItems }).map((_, i) => (
                  <div key={i} className={`px-6 py-6 ${i !== maxItems - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex items-start">
                      <svg className="flex-shrink-0 w-4 h-4 text-gray-900 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                      <span className="ml-4 text-gray-900 font-roboto-mono text-[11px]">{columns[0].items[i] ?? ''}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle and Right columns with aligned rows */}
            <div className="col-span-2 grid grid-cols-2">
              {/* Middle column */}
              <div className="px-6">
                <div className="py-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-light-gray text-center">{columns[1].title}</h3>
                </div>
                {Array.from({ length: maxItems }).map((_, i) => (
                  <div key={i} className={`py-6 ${i !== maxItems - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-gray-900 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                      <span className="ml-4 text-gray-900 font-roboto-mono text-[11px]">{columns[1].items[i] ?? ''}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="px-6 border-l border-gray-200">
                <div className="py-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-light-gray text-center">{columns[2].title}</h3>
                </div>
                {Array.from({ length: maxItems }).map((_, i) => (
                  <div key={i} className={`py-6 ${i !== maxItems - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-gray-900 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                      <span className="ml-4 text-gray-900 font-roboto-mono text-[11px]">{columns[2].items[i] ?? ''}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* Full-width divider separating WhyChoose from next section */}
      <div className="w-full h-px bg-gray-200 my-12" />
    </section>
  )
}
