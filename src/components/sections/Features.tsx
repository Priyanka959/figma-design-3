import SectionContainer from '@/components/ui/SectionContainer'

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: 'Amplify Insights',
      description: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: 'Control Your Global Presence',
      description: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: 'Remove Language Barriers',
      description: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: 'Visualize Growth',
      description: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.'
    },
  ]
  
  return (
    <section id="benefits" className="py-12 bg-white">
      <SectionContainer className="px-3 sm:px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-[11px] font-roboto-mono text-[#485C11] mb-3">
            Benefits
          </p>
          <h2 className="text-[54px] font-crimson text-[#000000] mb-4 font-normal"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            We've cracked the code.
          </h2>
          <p className="text-light-gray max-w-2xl">
           Area provides real insights, without the data overload.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="w-full h-[1px] bg-gray-300 mt-8 mb-8"></div>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 font-dm">
                {feature.title}
              </h3>
              <p className="text-light-gray leading-relaxed text-[13px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
