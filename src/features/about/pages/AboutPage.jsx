import CounterStatsBanner from '../../../components/common/CounterStatsBanner'
import PortfolioCTASection from '../../portfolio/components/PortfolioCTASection'
import PortfolioLeaderSection from '../../portfolio/components/PortfolioLeaderSection'
import AboutHeroSection from '../components/AboutHeroSection'
import PhilosophySystemsAbout from '../components/PhilosophySystemsAbout'
import PreCompanyTimelineAbout from '../components/PreCompanyTimelineAbout'
import TeamSectionAbout from '../components/TeamSectionAbout'
import WhatWeDeliverAbout from '../components/WhatWeDeliverAbout'
import WhyGrowingenAboutSection from '../components/WhyGrowingenAboutSection'

const aboutStats = [
  { value: 12, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Clients Served' },
  { value: 5, suffix: '+', label: 'Fields We Cover' },
  { value: 100, suffix: 'X', label: 'Scaling Execution' },
]

export function AboutPage() {
  return (
    <main className="bg-transparent ">
      <AboutHeroSection />
      <CounterStatsBanner items={aboutStats} className="mt-2 w-full" />
      <PhilosophySystemsAbout />
      <PreCompanyTimelineAbout />
      {/* <WhatWeDeliverAbout/> */}
      <PortfolioLeaderSection />
      <WhyGrowingenAboutSection />
      <PortfolioCTASection
        title={
          <span className="inline-flex flex-col items-center text-center">
            <span className="block whitespace-nowrap">LET&apos;S BUILD SOMETHING</span>
            <span className="block whitespace-nowrap pb-4">THAT WORKS</span>
          </span>
        }
        description="If you’re looking for more than just execution 
 and want a partner who understands the bigger picture 
"
        primaryButtonLabel="Let's connect"
        primaryButtonClassName="w-[240px] text-[15px]"
        primaryButtonTo="/contact"
        showSecondaryButton={false}
      />
    </main>
  )
}
