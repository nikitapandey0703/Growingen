import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import ScrollStack, { ScrollStackItem } from '../../../components/common/ScrollStack'
import SectionWrapper from '../../../components/common/SectionWrapper'

const capabilityCards = [
  {
    id: 1,
    title: 'Website Development',
    subtitle: 'High-performance websites designed to convert.',
    description:
      'We craft digital experiences that balance aesthetics with performance, ensuring your website becomes a growth engine.',
    imageSrc: '/images/service/website.webp',
    deliverables: [
      'Conversion-focused UI/UX',
      'SEO-ready architecture',
      'Lightning-fast performance',
      'Built to scale with your business',
    ],
  },
  {
    id: 2,
    title: 'AI-Integrated Applications',
    subtitle: 'Intelligence built into your operations.',
    description:
      'We integrate AI where it creates real business value, automating processes, improving decisions, and enhancing user experiences.',
    imageSrc: '/images/service/ai-development.webp',
    deliverables: [
      'Process automation systems',
      'AI-powered dashboards & insights',
      'Smart chat & support systems',
      'Custom AI workflows',
    ],
  },
  {
    id: 3,
    title: 'Application Development',
    subtitle: 'Tailored applications for real-world use.',
    description:
      'From internal tools to customer-facing platforms, we build reliable, scalable applications aligned with your goals.',
    imageSrc: '/images/service/application.webp',
    deliverables: [
      'Web & mobile app development',
      'Clean, intuitive user interfaces',
      'Secure & scalable backend systems',
      'Seamless third-party integrations',
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
          <h3 className="text-[46px] font-semibold leading-[1.06] tracking-[-0.04em] text-black">
            {card.title.split(' ').slice(0, -1).join(' ')}
            <br />
            {card.title.split(' ').slice(-1)}
          </h3>
          <p className="max-w-[30ch] text-[21px] font-semibold leading-[1.3] text-black">
            {card.subtitle}
          </p>
          <p className="max-w-[42ch] text-[14px] font-medium leading-[1.7] text-[#4b5563]">
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
          <p className="text-[20px] font-light leading-[1.2] tracking-[-0.02em] text-[#111827]">
            Deliverables
          </p>
          <ul className="flex flex-col gap-3">
            {card.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] font-medium leading-[1.5] text-[#4b5563]">
                <FeatureBullet />
                <span className="pt-[3px]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex"
            >
              <Button
                size="sm"
                className="h-[40px] w-[208px] min-h-[40px] pl-5 pr-[52px] text-[14px]"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ScrollStackItem>
  )
}

export default function ServiceCapabilitiesSection() {
  return (
    <SectionWrapper as="section" className="relative overflow-visible bg-transparent pt-12 sm:pt-16 lg:pt-20">
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
    </SectionWrapper>
  )
}
