import CounterStatsBanner from '../../../components/common/CounterStatsBanner'
import PortfolioCarousel from '../components/PortfolioCarousel'
import PortfolioCTASection from '../components/PortfolioCTASection'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioProblemsSection from '../components/PortfolioProblemsSection'
import PortfolioShowcase from '../components/PortfolioShowcase'
import PortfolioTestimonialSection from '../components/PortfolioTestimonialSection'

const portfolioStats = [
  { value: 320, suffix: '%', label: 'Increase in Website Traffic' },
  { value: 5, suffix: 'x', label: 'Return On Ad Spend' },
  { value: 68, suffix: '%', label: 'Lead Conversion Rate' },
  { value: 185, label: 'Revenue Generated' },
]

export function PortfolioPage() {
  return (
    <main className="bg-transparent text-[#111827]">
      <PortfolioHero />
      <CounterStatsBanner items={portfolioStats} className="mt-2 w-full" />
      <PortfolioProblemsSection/>
      <PortfolioCarousel/>
      <PortfolioShowcase/>
      <PortfolioTestimonialSection/>
      <PortfolioCTASection/>
    </main>
  )
}
