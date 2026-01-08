import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import Button from '@/components/ui/Button';

// Helper components for the icons (typed props)
type IconProps = { className?: string };

const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 13l4 4L19 7"></path>
  </svg>
);

const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export default function WhyChoose(): JSX.Element {
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
      ]
    },
    {
      title: 'WebSurge',
      items: [
        'Fast browsing',
        'Basic AI recommendations',
        'Restricts customization',
        'Basic AI insights',
        'Fast browsing',
        'Potential display errors',
      ]
    },
    {
      title: 'HyperView',
      items: [
        'Moderate speeds',
        'No AI assistance',
        'Steep learning curve',
        'No AI assistance',
        'Moderate speeds',
        'Partial UTF-8 support',
      ]
    },
  ];

  const maxItems = Math.max(...columns.map(c => c.items.length));

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* fonts are loaded globally; avoid inline imports here to match other components */}

      <SectionContainer>
        {/* Horizontal line at top */}
        <div className="border-t border-gray-300 w-full mb-12"></div>
        
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <span className="text-[#86935b] text-[10.5px] font-medium mb-4 block uppercase tracking-wider">Specs</span>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">Why Choose Area?</h2>
          <p className="text-gray-500 mb-10 text-[15px] max-w-[62ch] mx-auto">
            You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business.
          </p>
          <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
            <Button variant="primaryLight" size="md" >
              Discover More
            </Button>
          </a>
        </div>

        {/* Grid Layout Section */}
          <div className="relative px-8 md:px-12 lg:px-16">
            <div className="overflow-x-auto md:overflow-x-visible -mx-8 md:-mx-12 lg:-mx-16 px-8 md:px-12 lg:px-16">
              <div className="min-w-[900px] md:min-w-0">
                <div className="grid grid-cols-12 items-stretch mx-auto">
          
          {/* COLUMN 1: MAIN AREA CARD (3 columns) */}
          <div className="col-span-4 lg:col-span-4 bg-white border border-gray-200 rounded-[2.5rem] relative z-10 shadow-sm">
            <div className="h-28 flex items-center justify-center">
              <h3 className="text-[28px] font-bold tracking-tighter text-black font-sans">
                {columns[0].title}
              </h3>
            </div>

            <div className="border-t border-black w-full" />

            {columns[0].items.map((item, i) => (
              <div
                key={i}
                className={`h-20 flex items-center px-6 md:px-10 ${
                  i !== maxItems - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <CheckIcon className="w-3 h-3 text-black mr-4 shrink-0" />
                <span
                  className="text-[10.5px] tracking-tighter text-gray-500 font-normal leading-none"
                  style={{ fontFamily: '"Roboto Mono", monospace' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* COLUMN 2 & 3: COMPARISON GRID (6 columns) */}
          {/* Total Table Width = 3 + 6 = 9 columns */}
          <div className="col-span-8 lg:col-span-7 grid grid-cols-2 relative">
            <div className="h-28 flex items-center justify-center">
              <h3 
                className="text-xl font-medium text-gray-400 tracking-tight" 
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {columns[1].title}
              </h3>
            </div>
            <div className="h-28 flex items-center justify-center">
              <h3 
                className="text-xl font-medium text-gray-400 tracking-tight"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {columns[2].title}
              </h3>
            </div>

            <div className="col-span-2 border-t border-black w-full" />

            {Array.from({ length: maxItems }).map((_, i) => (
              <React.Fragment key={i}>
                <div className="h-20 flex items-center px-6 md:px-10 border-b border-gray-100 border-r border-gray-200">
                  <CheckIcon className="w-3 h-3 text-gray-400 mr-4 shrink-0" />
                  <span className="text-[12px] font-mono tracking-tighter text-gray-500 leading-none">
                    {columns[1].items[i]}
                  </span>
                </div>

                <div className="h-20 flex items-center px-6 md:px-10 border-b border-gray-100">
                  <CloseIcon className="w-3 h-3 text-gray-300 mr-4 shrink-0" />
                  <span className="text-[12px] font-mono tracking-tighter text-gray-500 leading-none">
                    {columns[2].items[i]}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* EMPTY SPACE (3 columns) */}
          <div className="hidden lg:block lg:col-span-1"></div>
                </div>
              </div>
            </div>
        </div>
        </SectionContainer>
    </section>
  );
}