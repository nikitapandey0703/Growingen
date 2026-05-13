
import ServiceHero from '../components/ServiceHero'
import BrandBanner from '../components/BrandBanner'
import ServiceCapabilitiesSection from '../components/ServiceCapabilitiesSection'
import PortfolioCTASection from '../../portfolio/components/PortfolioCTASection'
import PortfolioTestimonialSection from '../../portfolio/components/PortfolioTestimonialSection'
import HowWeWorkSection from '../components/HowWeWorkSection'
import ServiceBusinessFitSection from '../components/ServiceBusinessFitSection'
import WhatSetsUsApartSection from '../components/WhatSetsUsApartSection'

export function ServicesPage() {
  return (
    <main className="bg-transparent text-[#111827]">
      <ServiceHero />
      <BrandBanner />
      <ServiceCapabilitiesSection />
      <ServiceBusinessFitSection />
      <HowWeWorkSection/>
      <WhatSetsUsApartSection/>
      <PortfolioTestimonialSection />
      <PortfolioCTASection
        title={
          <span className="inline-flex flex-col items-center text-center">
            <span className="block whitespace-nowrap">Ready to Build Something</span>
            <span className="block whitespace-nowrap">That Actually Works?</span>
          </span>
        }
        description="Let's create strategy, systems, and experiences that help your business grow with clarity."
        primaryButtonLabel="Book a Free Consultation"
        showSecondaryButton={false}
      />
      
    </main>
  )
}
