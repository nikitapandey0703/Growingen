import ProblemsGridSection from '../../../components/common/ProblemsGridSection'

const businessFitItems = [
  {
    id: 1,
    title: 'Startups Looking To Launch Fast & Scale',
    description:
      'From idea validation to launch-ready systems, we help startups move with speed, clarity, and room to scale.',
    icon: '/images/service/business-icon-1.webp',
  },
  {
    id: 2,
    title: 'Businesses Ready To Automate & Optimize Operations',
    description:
      'We streamline growth bottlenecks through automation, smarter workflows, dashboards, and connected technology.',
    icon: '/images/service/business-icon-2.webp',
  },
  {
    id: 3,
    title: 'Brands Aiming For Stronger Digital Presence',
    description:
      'We build sharper positioning, better visibility, and a stronger online identity that earns attention and trust.',
    icon: '/images/service/business-icon-3.webp',
  },
  {
    id: 4,
    title: 'Founders Building Tech-Driven Products',
    description:
      'From founder-led ideas to scalable digital products, we support the strategy, design, and systems behind growth.',
    icon: '/images/service/business-icon-4.webp',
  },
]

export default function ServiceBusinessFitSection() {
  return (
    <ProblemsGridSection
      eyebrow="Who We Work With"
      title="Built For Growth-Focused"
      highlight="Businesses."
      items={businessFitItems}
      maxWidthClass="max-w-[760px]"
    />
  )
}
