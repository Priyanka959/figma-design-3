import SectionContainer from '@/components/ui/SectionContainer'

interface ImageShowcaseProps {
  imageUrl: string
}

export default function ImageShowcase({ imageUrl }: ImageShowcaseProps) {
  return (
    <section className="py-8">
      <SectionContainer className="px-3 sm:px-6 lg:px-0">
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden rounded-3xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${imageUrl}')`,
            }}
          >
            {/* Overlay for better contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
