import Button from '../../../components/common/Button'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import ScrollStack, { ScrollStackItem } from '../../../components/common/ScrollStack'

const capabilityCards = [
  {
    id: 1,
    title: 'Website Development',
    subtitle: 'High-Performance Websites Designed To Convert.',
    description:
      'We craft digital experiences that balance aesthetics with performance, ensuring your website becomes a growth engine for your business.',
    imageSrc: '/images/service/service-set-1.webp',
    deliverables: [
      'Conversion-Focused UI/UX',
      'SEO-Ready Architecture',
      'Lightning-Fast Performance',
      'Built To Scale With Your Business',
    ],
  },
  {
    id: 2,
    title: 'Brand Strategy',
    subtitle: 'Sharper Messaging For Stronger Market Positioning.',
    description:
      'We align voice, positioning, and visual direction so your brand becomes instantly clearer, stronger, and more memorable.',
    imageSrc: '/images/service/service-set-2.webp',
    deliverables: [
      'Positioning Framework',
      'Messaging Direction',
      'Visual Identity Alignment',
      'Audience Clarity',
    ],
  },
  {
    id: 3,
    title: 'Growth Marketing',
    subtitle: 'Systems That Turn Attention Into Momentum.',
    description:
      'From campaign planning to optimization, we help you build a repeatable engine for visibility, leads, and sustained digital growth.',
    imageSrc: '/images/service/service-set-2.webp',
    deliverables: [
      'Campaign Planning',
      'Content Distribution',
      'Performance Tracking',
      'Lead-Generation Support',
    ],
  },
]

function FeatureBullet() {
  return (
    <span className="mt-[6px] inline-flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-[linear-gradient(180deg,#e63e83_0%,#d4376b_100%)] shadow-[0_4px_10px_rgba(212,55,107,0.2)] sm:h-4 sm:w-4">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[8px] w-[8px] text-[#FFB45E] sm:h-[9px] sm:w-[9px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5L9.2 16.7L18.5 7.5" />
      </svg>
    </span>
  )
}

function CapabilityCard({ card }) {
  return (
    <ScrollStackItem itemClassName="border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.95)_100%)]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px_minmax(0,0.95fr)] lg:items-center">
        <div className="flex flex-col gap-3 px-1 sm:px-2">
          <h3 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[42px]">
            {card.title.split(' ').slice(0, -1).join(' ')}
            <br />
            {card.title.split(' ').slice(-1)}
          </h3>
          <p className="max-w-[28ch] text-[18px] font-semibold leading-[1.28] text-black sm:text-[20px]">
            {card.subtitle}
          </p>
          <p className="max-w-[38ch] text-[13px] font-medium leading-[1.55] text-[#5b6472]">
            {card.description}
          </p>
        </div>

        <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[4px] rounded-tl-[34px] bg-[#e9eef8] shadow-[0_16px_32px_rgba(15,23,42,0.1)]">
          <img
            src={card.imageSrc}
            alt={card.title}
            className="h-[236px] w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-4 lg:pl-3">
          <p className="text-[11px] font-medium tracking-[0.28em] text-[#8b90a0] uppercase">
            Deliverables
          </p>
          <ul className="flex flex-col gap-3">
            {card.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] font-medium text-[#5b6472]">
                <FeatureBullet />
                <span className="pt-[3px]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Button
              size="sm"
              className="min-h-[38px] pl-4 pr-[48px] text-[11px] font-semibold"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </ScrollStackItem>
  )
}

export default function ServiceCapabilitiesSection() {
  return (
    <section className="relative overflow-visible bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute left-[16%] top-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.16)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(102,145,255,0.16)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="mx-auto mb-4 max-w-[760px] text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            Our Core Capabilities
          </p>
          <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[50px]">
            Everything Under{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
              One Roof
            </CurvedUnderlineText>
          </h2>
        </div>
      </div>

      <div className="relative mx-auto mt-5 max-w-[1080px] sm:mt-6 lg:mt-8">
        <ScrollStack
          useWindowScroll
          itemDistance={90}
          itemScale={0.04}
          itemStackDistance={28}
          stackPosition="20%"
          scaleEndPosition="12%"
          baseScale={0.94}
          className="mx-auto max-w-[1080px]"
        >
          {capabilityCards.map((card) => (
            <CapabilityCard key={card.id} card={card} />
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}
