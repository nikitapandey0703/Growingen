import CounterStatsBanner from '../../../components/common/CounterStatsBanner'
import PortfolioCTASection from '../../portfolio/components/PortfolioCTASection'
import AboutHeroSection from '../components/AboutHeroSection'
import PhilosophySystemsAbout from '../components/PhilosophySystemsAbout'
import PreCompanyTimelineAbout from '../components/PreCompanyTimelineAbout'
import TeamSectionAbout from '../components/TeamSectionAbout'
import WhatWeDeliverAbout from '../components/WhatWeDeliverAbout'

const aboutStats = [
  { value: 12, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Clients Served' },
  { value: 5, suffix: '+', label: 'Fields We Cover' },
  { value: 100, suffix: 'X', label: 'Scaling Execution' },
]

export function AboutPage() {
  return (
    <main className="bg-transparent text-[#111827]">
      <AboutHeroSection />
      <CounterStatsBanner items={aboutStats} className="mt-2 w-full" />
      <WhatWeDeliverAbout/>
      <PreCompanyTimelineAbout />
      <PhilosophySystemsAbout />
      <TeamSectionAbout/>
      <PortfolioCTASection
        title={
          <span className="inline-flex flex-col items-center text-center">
            <span className="block whitespace-nowrap">LET&apos;S BUILD SOMETHING</span>
            <span className="block whitespace-nowrap">THAT WORKS</span>
          </span>
        }
        description="If you're looking for more than just execution and want a partner who understands the bigger picture."
        primaryButtonLabel="Let's connect"
        primaryButtonClassName="w-[240px]"
        showSecondaryButton={false}
      />
    </main>
  )
}
