import CounterStatsBanner from '../../../components/common/CounterStatsBanner'
import PortfolioCarousel from '../components/PortfolioCarousel'
import PortfolioCTASection from '../components/PortfolioCTASection'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioProblemsSection from '../components/PortfolioProblemsSection'
import PortfolioShowcase from '../components/PortfolioShowcase'
import PortfolioTestimonialSection from '../components/PortfolioTestimonialSection'

const portfolioStats = [
  { value: 92, suffix: '%', label: 'Improved User Experience Score' },
  { value: 45, suffix: '%', label: 'Faster Application Performance' },
  { value: 3, suffix: 'x', label: 'Increase In User Engagement' },
  { value: 99.9, suffix: '%', label: 'Backend Integration Stability' },
]

export function PortfolioPage() {
  return (
    <main className="bg-transparent text-[#111827]">
      <PortfolioHero />
      <CounterStatsBanner items={portfolioStats} className="mb-[45px] w-full" />
      <PortfolioCarousel/>
      <PortfolioProblemsSection/>
      
      <PortfolioShowcase/>
      <div className="section-spacing">
        <PortfolioTestimonialSection />
      </div>
      <div className="section-spacing">
        <PortfolioCTASection />
      </div>
    </main>
  )
}
