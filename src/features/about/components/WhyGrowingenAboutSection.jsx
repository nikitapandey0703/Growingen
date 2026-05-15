import { useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const benefitCards = [
  {
    id: 1,
    title: 'Battle-Tested Knowledge',
    description:
      "We've already seen what works and what doesn't across industries. You benefit from that experience without paying the tuition.",
    icon: '/images/about/knowledge.webp',
  },
  {
    id: 2,
    title: 'Business-First Thinking',
    description:
      'We understand business beyond just design or marketing. Every recommendation connects back to your actual goals.',
    icon: '/images/about/thinking.webp',
  },
  {
    id: 3,
    title: 'Long-Term Value Focus',
    description:
      "We're not optimizing for the invoice. We're building things that deliver compounding returns over time.",
    icon: '/images/about/focus.webp',
  },
]

function BenefitCard({ card, index, isActive, onEnter, onLeave }) {
  return (
    <article
      className={[
        'group relative flex min-h-[248px] flex-col justify-between overflow-hidden border border-black/12 px-8 py-8 transition-colors duration-300 ease-out lg:min-h-[260px]',
        isActive ? 'bg-black text-white shadow-[0_18px_38px_rgba(15,23,42,0.18)]' : 'bg-transparent text-[#111827]',
      ].join(' ')}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <span
        className={[
          'pointer-events-none absolute right-6 top-4 text-[56px] font-bold leading-none transition-colors duration-300 sm:text-[64px] lg:text-[72px]',
          isActive ? 'text-white/10' : 'text-black/7',
        ].join(' ')}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex h-[62px] w-[62px] items-center justify-center">
          <img src={card.icon} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>

        <div className="max-w-[26ch] ">
          <h3
            className={[
              'text-[24px] font-bold leading-[1.15] tracking-[-0.03em] transition-colors duration-300',
              isActive ? '!text-white' : 'text-[#111827]',
            ].join(' ')}
          >
            {card.title}
          </h3>
          <p
            className={[
              'mt-4 text-[15px] font-medium leading-[1.55] transition-colors duration-300 space-y-4',
              isActive ? 'text-white/72' : 'text-[#7a7f8e]',
            ].join(' ')}
          >
            {card.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function WhyGrowingenAboutSection() {
  const [activeId, setActiveId] = useState(null)

  return (
    <SectionWrapper as="section" className="relative bg-transparent pt-12 sm:pt-14 lg:pt-16">
      <div className="relative mx-auto max-w-[1360px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            Why Growingen
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[50px]">
            When You Work With
          <br />
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
             {' '} Growingen
            </CurvedUnderlineText>
           
            You Get More.
          </h2>
        </div>

        <div className="mt-12 grid overflow-hidden border border-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {benefitCards.map((card, index) => (
            <BenefitCard
              key={card.id}
              card={card}
              index={index}
              isActive={activeId === card.id}
              onEnter={() => setActiveId(card.id)}
              onLeave={() => setActiveId(null)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
