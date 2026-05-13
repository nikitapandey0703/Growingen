import React, { useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

const philosophyData = [
  {
    id: 1,
    title: 'Great Marketing Fails Without Strong Branding',
    description:
      "Without trust, clarity, and visual identity, even strong marketing loses impact before it can build momentum.",
    icon: '/images/portfolio/identity-icon.png',
    shape: 'tl-br',
    isHighlighted: true,
  },
  {
    id: 2,
    title: 'Good Products Struggle Without The Right Experience',
    description:
      'How you present your product matters as much as what you offer. Experience shapes trust, clarity, and conversion.',
    icon: '/images/portfolio/search-icon.png',
    shape: 'tr-bl',
  },
  {
    id: 3,
    title: "Websites Don't Perform Without Strategy",
    description:
      'A beautiful website without positioning or journey design can still look polished while doing very little for growth.',
    icon: '/images/portfolio/waste-icon.png',
    shape: 'tl-br',
  },
  {
    id: 4,
    title: 'So We Changed The Approach',
    description:
      'We connect brand, product, strategy, and execution into one growth system instead of treating them separately.',
    icon: '/images/portfolio/social-icon.png',
    shape: 'tr-bl',
  },
]

function PhilosophyCard({ item, isActive, onEnter, onLeave }) {
  const shapeClass =
    item.shape === 'tl-br'
      ? 'rounded-tl-[34px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[34px]'
      : 'rounded-tl-[16px] rounded-tr-[34px] rounded-bl-[34px] rounded-br-[16px]'

  const cardStateClass = isActive
    ? 'border-transparent bg-[#F45328] text-white shadow-[0_24px_55px_rgba(244,83,40,0.26)]'
    : 'border border-[#eef0f4] bg-white text-[#111827] shadow-[0_16px_40px_rgba(15,23,42,0.06)]'

  const iconWrapClass = isActive
    ? 'border-white/60 bg-white text-[#111827]'
    : 'border-[#dfe4ec] bg-white text-[#111827]'

  const descriptionClass = isActive ? 'text-white/80' : 'text-[#6b7280]'

  return (
    <article
      className={`group relative flex min-h-[180px] w-full flex-col justify-start overflow-hidden p-5 transition-all duration-500 ease-out sm:h-[237px] sm:max-w-[449px] sm:p-7 ${shapeClass} ${cardStateClass} ${
        isActive ? 'scale-[1.03]' : 'scale-100'
      }`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div
        className={`mb-6 flex h-11 w-11 items-center justify-center rounded-[10px] border transition-transform duration-500 ease-out ${isActive ? 'scale-105' : 'scale-100'} ${iconWrapClass}`}
      >
        <img src={item.icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
      </div>

      <h3 className={`max-w-[27ch] text-[24px] font-bold leading-[1.18] tracking-[-0.03em] transition-colors duration-500 ease-out ${isActive ? '!text-white' : '!text-[#202124]'}`}>
        {item.title}
      </h3>

      <p className={`mt-3 max-w-[35ch] text-[14px] font-medium leading-[1.6] transition-colors duration-500 ease-out ${descriptionClass}`}>
        {item.description}
      </p>
    </article>
  )
}

export default function PhilosophySystemsAbout() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-[1040px] px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[760px] text-center sm:mb-12">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            OUR PHILOSOPHY
          </p>
          <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[40px] lg:text-[50px]">
            Most Companies Offer Services.
            <br />
            We Build{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
              Systems.
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
          {philosophyData.map((item, index) => (
            <PhilosophyCard
              key={item.id}
              item={item}
              isActive={activeIndex === index}
              onEnter={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(0)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
