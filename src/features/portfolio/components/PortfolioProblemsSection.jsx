import ProblemsGridSection from '../../../components/common/ProblemsGridSection'

const problems = [
  {
    id: 1,
    title: 'Zero Search Visibility',
    description:
      "The brand didn't rank on any relevant keywords. Despite having high-quality products, competitors dominated every valuable search term in the lighting niche.",
    icon: '/images/portfolio/search-visibility.svg',
  },
  {
    id: 2,
    title: 'Weak Brand Identity',
    description:
      'Inconsistent visuals, outdated logo, and lack of a cohesive color language made the brand look untrustworthy compared to premium competitors.',
    icon: '/images/portfolio/weak-brand.svg',
  },
  {
    id: 3,
    title: 'No Social Presence',
    description:
      'With under 400 followers across platforms and near-zero engagement, the brand had no community and no channel to nurture potential customers.',
    icon: '/images/portfolio/social-presence.svg',
  },
  {
    id: 4,
    title: 'Wasted Ad Spend',
    description:
      'Previous paid campaigns had no audience segmentation or retargeting, resulting in high CPCs and near-zero conversions on a limited budget.',
    icon: '/images/portfolio/waste-icon.png',
  },
]

export default function PortfolioProblemsSection() {
  return (
    <ProblemsGridSection
      title="Problems We"
      highlight="Solved"
      items={problems}
      className='section-spacing'
    />
  )
}
