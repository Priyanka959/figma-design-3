import SectionContainer from '@/components/ui/SectionContainer'
import Image from 'next/image'

export default function Partners() {
  const partners = [
    { name: 'Razer', logo: 'logo1.png' },
    { name: 'Cognizant', logo: 'logo2.png' },
    { name: 'LightHouse', logo: 'logo3.png' },
    { name: 'LOOMGLOW', logo: 'logo4.png' },
    { name: 'Starbucks', logo: 'logo5.png' },
{ name: 'labubu', logo: 'logo6.png' },
  ]
  
  return (
    <section className="py-4 bg-white">
      <SectionContainer maxWidth="2xl" className="px-8 md:px-12 lg:px-16">
        {/* inner wrapper holds the horizontal line with side spacing and custom color */}
          <div className="pt-8 border-b border-gray-300 pb-20">
          <div>
            <div className="text-[#6F6F6F] font-dm text-[15px] mb-6">
              Trusted by:
            </div>
            <div className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 flex-wrap opacity-40 grayscale">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center"
                  title={partner.name}
                >
                  <Image
                    src={`/assests/${partner.logo}`}
                    alt={partner.name}
                    width={140}
                    height={56}
                    className="object-contain h-10 md:h-10 lg:h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
