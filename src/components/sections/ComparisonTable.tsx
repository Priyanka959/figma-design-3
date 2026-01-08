import SectionContainer from '@/components/ui/SectionContainer'
import React from 'react'

const Check = ({className = ''}:{className?:string}) => (
  <svg className={`w-5 h-5 text-green-600 ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Cross = ({className = ''}:{className?:string}) => (
  <svg className={`w-5 h-5 text-gray-400 ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ComparisonTable() {
  // data-driven rows: each row represents a feature and availability in column 2 & 3
  const rows = [
    { label: 'Ultra-fast browsing', webSurge: true, hyperView: true },
    { label: 'Advanced AI insights', webSurge: true, hyperView: false },
    { label: 'Seamless integration', webSurge: false, hyperView: false },
    { label: 'Full UTF-8 support', webSurge: true, hyperView: true },
    { label: 'Fast and IT support', webSurge: false, hyperView: true },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <SectionContainer>
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative">
            {/* main grid: 3 columns */}
            <div className="grid grid-cols-3 gap-0">
              {/* Floating Area card (single continuous card for column 1) */}
              <div className="col-span-1">
                <div className="relative">
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full shadow-sm relative z-20">
                    <h3 className="text-center text-lg font-semibold">Area</h3>

                    <div className="mt-6">
                      {rows.map((r, i) => (
                        <div key={i} className="flex items-center py-8">
                          <div className="flex items-center justify-center w-8 h-8">
                            <Check />
                          </div>
                          <div className="ml-4 text-sm text-gray-900">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Column headers for columns 2 and 3 - these are not inside a card */}
              <div className="col-span-2 grid grid-cols-2">
                <div className="py-8 text-center font-semibold">WebSurge</div>
                <div className="py-8 text-center font-semibold">HyperView</div>

                {/* Rows: each row spans all 3 columns visually; we render a full-width border on each row */}
                {rows.map((r, i) => (
                  <div key={i} className="col-span-2 grid grid-cols-2 border-b border-gray-100 -ml-6">
                    <div className="py-8 flex items-center justify-center">{r.webSurge ? <Check /> : <Cross />}</div>
                    <div className="py-8 flex items-center justify-center">{r.hyperView ? <Check /> : <Cross />}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlayed full-bleed dividers that line up with rows (optional extra visual) */}
            {/* The simple border-b on each right-side row starts from left edge and extends to right edge because the row is the full width of the grid; the Area card sits above it because of its white background */}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
