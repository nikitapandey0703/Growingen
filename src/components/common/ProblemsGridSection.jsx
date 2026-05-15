import { useState } from 'react'
import CurvedUnderlineText from './CurvedUnderlineText'
import SectionWrapper from './SectionWrapper'

function ProblemCard({ item, index, isActive, onEnter, onLeave }) {
  let bgFlipClass = ''
  if (index === 1) bgFlipClass = 'sm:-scale-x-100'
  else if (index === 2) bgFlipClass = 'sm:-scale-y-100'
  else if (index === 3) bgFlipClass = 'sm:-scale-x-100 sm:-scale-y-100'

  const isLeftAligned = index % 2 === 0
  const alignmentClass = isLeftAligned
    ? 'items-center text-center sm:items-start sm:text-left'
    : 'items-center text-center sm:items-end sm:text-right'
  let numberPosClass = ''
  if (index === 0) numberPosClass = 'right-8 top-8 sm:right-11 sm:top-11'
  if (index === 1) numberPosClass = 'left-8 top-8 sm:left-11 sm:top-11'
  if (index === 2) numberPosClass = 'right-8 bottom-8 sm:right-11 sm:bottom-11'
  if (index === 3) numberPosClass = 'left-8 bottom-8 sm:left-11 sm:bottom-11'

  return (
    <article
      // INCREASED CARD WIDTH: from 404/426/446 to 420/460/490 to ensure 2 lines fit perfectly
      className="group relative z-10 min-w-0 w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div
        className={[
          // INCREASED CARD HEIGHT proportionally: from 182/194/206 to 190/206/220
          'relative h-[190px] w-full drop-shadow-[0_12px_22px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out sm:h-[206px] lg:h-[220px]',
          isActive ? 'z-20 scale-[1.035] drop-shadow-[0_20px_35px_rgba(244,83,40,0.15)]' : 'z-10 scale-100',
        ].join(' ')}
      >
        {/* Background Images */}
        <img
          src="/images/portfolio/subtract-white.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] h-full w-[102%] max-w-none object-fill transition-opacity duration-500 ease-out ${bgFlipClass} ${
            isActive ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src="/images/portfolio/Subtract-colored.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] h-full w-[102%] max-w-none object-fill transition-opacity duration-500 ease-out ${bgFlipClass} ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute inset-0 z-10 flex flex-col justify-center overflow-hidden px-7 py-7 transition-colors duration-500 ease-out sm:justify-start sm:px-12 sm:py-10 lg:px-14 lg:py-11 ${alignmentClass}`}
        >
          
          {/* NUMBER */}
          <span
            className={`pointer-events-none absolute select-none text-[40px] font-bold leading-none transition-all duration-500 ease-out sm:text-[52px] lg:text-[64px] ${numberPosClass} ${
              isActive ? 'scale-100 text-white opacity-20' : 'scale-100 text-[#F45328] opacity-10'
            }`}
          >
            {index + 1}
          </span>

          {/* INCREASED INNER CONTAINER WIDTH (max-w-[95%]) so text has room to stretch */}
          <div className={`relative z-10 flex w-full max-w-[95%] flex-col gap-2 sm:max-w-[320px] lg:max-w-[340px] ${alignmentClass}`}>
            


             {/* 2. DESCRIPTION ON BOTTOM */}
            <p
              className={[
                'text-[14px] font-medium leading-[1.6] transition-colors duration-500 ease-out lg:text-[15px]',
                isActive ? '!text-white/90' : '!text-[#8a8a8e]',
              ].join(' ')}
            >
              {item.description}
            </p>
            {/* 1. HEADING ON TOP */}
            <h3
              className={[
                'text-[20px] font-bold leading-[1.25] tracking-[-0.03em] transition-colors duration-500 ease-out sm:text-[22px] lg:text-[24px]',
                'max-w-full text-balance whitespace-pre-line', // Removed pixel restriction, relies on new card width + text-balance
                item.titleClassName ?? '',
                isActive ? '!text-white' : '!text-[#333333]',
              ].join(' ')}
            >
              {item.title}
            </h3>

            {/* 2. DESCRIPTION ON BOTTOM */}
            {/* <p
              className={[
                'text-[12px] font-medium leading-[1.6] transition-colors duration-500 ease-out lg:text-[13px]',
                isActive ? '!text-white/90' : '!text-[#8a8a8e]',
              ].join(' ')}
            >
              {item.description}
            </p> */}

          </div>
        </div>
      </div>
    </article>
  )
}

export default function ProblemsGridSection({
  eyebrow,
  title,
  highlight,
  items,
  className = '',
  maxWidthClass = 'max-w-[640px]',
}) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <SectionWrapper as="section" className={`relative overflow-hidden bg-transparent pt-2 sm:pt-4 lg:pt-6 xl:px-12 ${className}`}>
      <div className="pointer-events-none absolute left-[10%] top-[22%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.22)_0%,rgba(255,151,113,0.08)_44%,rgba(255,151,113,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.2)_0%,rgba(104,141,255,0.08)_42%,rgba(104,141,255,0)_74%)] blur-3xl" />

      {/* Increased max-w container slightly to ensure larger cards fit perfectly side-by-side */}
      <div className="relative mx-auto max-w-[1200px]">
        <div className={`mx-auto text-center ${maxWidthClass}`}>
          {eyebrow ? (
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827] sm:text-[40px] lg:text-[50px]">
            {title}{' '}
            <CurvedUnderlineText className="hero-highlight pb-[0.16em]">
              {highlight}
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-10 xl:gap-y-12">
            {items.map((item, index) => (
              <ProblemCard
                key={item.id}
                item={item}
                index={index}
                isActive={activeIndex === index}
                onEnter={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex(null)}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:flex">
            <div
              className={`absolute inset-0 rounded-full bg-[#F45328] blur-2xl transition-all duration-700 ease-out ${
                activeIndex !== null ? 'scale-150 opacity-40' : 'scale-100 opacity-10 animate-pulse'
              }`}
            />

            <div
              className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border bg-white/30 shadow-xl backdrop-blur-md transition-all duration-500 ease-out lg:h-32 lg:w-32 ${
                activeIndex !== null
                  ? 'scale-110 border-white/80 bg-white/60 shadow-[0_0_50px_rgba(244,83,40,0.3)]'
                  : 'scale-100 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
              }`}
            >
              <div
                className={`absolute h-4 w-4 rounded-full bg-gradient-to-tr from-[#F45328] to-[#FF8A6A] shadow-[0_0_15px_#F45328] transition-all duration-500 ease-in-out ${
                  activeIndex === null ? 'scale-100 opacity-100 animate-pulse' : 'scale-50 opacity-0'
                }`}
              />

              {items.map((item, index) => (
                <img
                  key={item.id}
                  src={item.icon}
                  alt=""
                  className={`absolute h-10 w-10 object-contain transition-all duration-500 ease-out lg:h-12 lg:w-12 ${
                    activeIndex === index
                      ? 'scale-100 rotate-0 opacity-100 drop-shadow-[0_4px_10px_rgba(244,83,40,0.4)]'
                      : 'scale-50 -rotate-12 opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
