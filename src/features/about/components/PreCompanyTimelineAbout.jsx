import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

const timelineSteps = [
  {
    id: 1,
    title: 'Building Before The Company Even Existed',
    description:
      'Before Growingen had a name, the work had already started through experiments in strategy, design, and digital execution.',
    images: [
      '/images/about/about-ideacard-1.webp',
      '/images/about/about-ideacard-2.webp',
      '/images/about/about-ideacard-3.webp',
    ],
  },
  {
    id: 2,
    title: 'Learning Through Real Projects',
    description:
      'Small projects became a training ground for understanding what makes brands earn trust and stay memorable.',
    images: [
      '/images/about/about-ideacard-2.webp',
      '/images/about/about-ideacard-4.webp',
      '/images/about/about-ideacard-5.webp',
    ],
  },
  {
    id: 3,
    title: 'Seeing The Gap',
    description:
      'Most teams delivered disconnected services. The deeper need was a system where brand, product, and marketing could work together.',
    images: [
      '/images/about/about-ideacard-3.webp',
      '/images/about/about-ideacard-5.webp',
      '/images/about/about-ideacard-6.webp',
    ],
  },
  {
    id: 4,
    title: 'From Freelance Thinking To Systems Thinking',
    description:
      'The approach evolved from isolated execution into repeatable frameworks built around growth, usability, and clarity.',
    images: [
      '/images/about/about-ideacard-4.webp',
      '/images/about/about-ideacard-1.webp',
      '/images/about/about-ideacard-6.webp',
    ],
  },
  {
    id: 5,
    title: 'Design Became A Growth Tool',
    description:
      'Interfaces, websites, and campaign assets were shaped to do more than look good. They had to convert, guide, and scale.',
    images: [
      '/images/about/about-ideacard-5.webp',
      '/images/about/about-ideacard-2.webp',
      '/images/about/about-ideacard-4.webp',
    ],
  },
  {
    id: 6,
    title: 'Technology Closed The Loop',
    description:
      'Custom builds and better systems made it possible to connect strategy with execution instead of treating them as separate tracks.',
    images: [
      '/images/about/about-ideacard-6.webp',
      '/images/about/about-ideacard-3.webp',
      '/images/about/about-ideacard-1.webp',
    ],
  },
]

const closingOffers = [
  {
    title: 'Strategy First',
    description: 'Product And User Journey, Brand Architecture & Positioning, Brand Communication Strategy.',
    icon: '/images/about/strategy.png',
  },
  {
    title: 'Design With Purpose',
    description: 'UI/UX, Visual Identity System, Virtual Experiences, 3D, Webflow Production.',
    icon: '/images/about/design.png',
  },
  {
    title: 'Technology That Scales',
    description: 'Build Frameworks, WebGL & Interactive, Full-Stack Web App.',
    icon: '/images/about/technology.png',
  },
  {
    title: 'Marketing That Converts',
    description: 'Lead Generation Powered By Brand, Content And Strategic Marketing, SEO And CRO.',
    icon: '/images/about/marketing.png',
  },
]

function TimelineImageCard({ item, isActive }) {
  const [stack, setStack] = useState(item.images)

  useEffect(() => {
    setStack(item.images)
  }, [item.images])

  useEffect(() => {
    if (stack.length <= 1) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setStack((current) => {
        const next = [...current]
        const topCard = next.pop()

        if (!topCard) {
          return current
        }

        next.unshift(topCard)
        return next
      })
    }, 2200)

    return () => {
      window.clearInterval(timer)
    }
  }, [stack.length])

  return (
    <div
      className={[
        'relative flex w-[calc(50%_-_18px)] justify-center transition-all duration-500 sm:w-[calc(50%_-_24px)] lg:w-[calc(50%_-_34px)]',
        isActive ? 'scale-[1.02]' : 'scale-100',
      ].join(' ')}
    >
      <div
        className="relative h-[271px] w-[288px] max-w-full"
        style={{ perspective: 700 }}
      >
        {stack.map((image, index) => (
          <motion.div
            key={`${item.id}-${image}`}
            className="absolute inset-0"
            animate={{
              rotateZ: [-5, 4, -7][index] ?? -5,
              scale: [0.9, 0.95, 1][index] ?? 1,
              x: [18, 10, 0][index] ?? 0,
              y: [8, 3, -2][index] ?? 0,
              transformOrigin: '18% 84%',
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 22,
            }}
            style={{ zIndex: index + 1 }}
          >
            <div
              className={[
                'h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_36px_rgba(15,23,42,0.16)]',
                isActive ? 'shadow-[0_24px_44px_rgba(15,23,42,0.2)]' : '',
              ].join(' ')}
            >
              <img
                src={image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function TimelineTextCard({ item, align, isActive }) {
  const isLeft = align === 'left'
  const alignmentClass = isLeft
    ? 'items-center text-center sm:items-start sm:text-left'
    : 'items-center text-center sm:items-end sm:text-right'
  const numberPosClass = isLeft
    ? 'right-4 top-4 sm:right-6 sm:top-6'
    : 'left-4 top-4 sm:left-6 sm:top-6'

  let bgFlipClass = ''
  if (!isLeft) {
    bgFlipClass = 'sm:-scale-x-100'
  }

  return (
    <article className="group relative z-10 min-w-0 w-[calc(50%_-_14px)] sm:w-[calc(50%_-_18px)] lg:w-[calc(50%_-_26px)]">
      <div
        className={[
          'relative h-[166px] w-full drop-shadow-[0_12px_22px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out sm:h-[192px] lg:h-[212px] xl:h-[224px]',
          isActive ? 'scale-[1.02] drop-shadow-[0_20px_35px_rgba(244,83,40,0.15)]' : 'scale-100',
        ].join(' ')}
      >
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
          className={`absolute inset-0 z-10 flex flex-col justify-center overflow-hidden px-4 py-4 transition-colors duration-500 ease-out sm:px-7 sm:py-6 lg:px-8 lg:py-7 xl:px-9 ${alignmentClass}`}
        >
          <span
            className={`pointer-events-none absolute select-none text-[28px] font-bold leading-none transition-all duration-500 ease-out sm:text-[38px] lg:text-[46px] ${numberPosClass} ${
              isActive ? 'text-white opacity-20' : 'text-[#F45328] opacity-10'
            }`}
          >
            {String(item.id).padStart(2, '0')}
          </span>

          <div className={`relative z-10 flex w-full max-w-[95%] flex-col gap-2 sm:max-w-[260px] lg:max-w-[300px] ${alignmentClass}`}>
            <p
              className={[
                'text-[15px] font-medium leading-[1.5] transition-colors duration-500 ease-out',
                isActive ? '!text-white/90' : '!text-[#8a8a8e]',
              ].join(' ')}
            >
              {item.description}
            </p>
            <h3
              className={[
                'text-[20px] font-bold leading-[1.18] tracking-[-0.03em] transition-colors duration-500 ease-out sm:text-[22px] lg:text-[24px]',
                isActive ? '!text-white' : '!text-[#333333]',
              ].join(' ')}
            >
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </article>
  )
}

function TimelineBubble({ item, align, isActive }) {
  const isLeft = align === 'left'

  return (
    <div
      className={[
        'relative flex items-center justify-between gap-3 sm:gap-4',
        isLeft ? 'flex-row' : 'flex-row-reverse',
      ].join(' ')}
    >
      <TimelineTextCard item={item} align={align} isActive={isActive} />
      <TimelineImageCard item={item} isActive={isActive} />
    </div>
  )
}

export default function PreCompanyTimelineAbout() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const node = sectionRef.current

      if (!node) {
        return
      }

      const rect = node.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const start = viewportHeight * 0.18
      const end = rect.height - viewportHeight * 0.34
      const distance = start - rect.top
      const normalized = end <= 0 ? 0 : Math.max(0, Math.min(distance / end, 1))

      setProgress(normalized)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(244,83,40,0.16)_0%,rgba(244,83,40,0.08)_45%,rgba(244,83,40,0)_75%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(65,94,255,0.16)_0%,rgba(65,94,255,0.08)_45%,rgba(65,94,255,0)_75%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-[520px] text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            Before Growingen
          </p>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[40px] lg:text-[50px]">
            Building Before
            <br />
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
              The Company Existed
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-[940px] sm:mt-12 lg:mt-14 xl:max-w-[980px]">
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#d8dcef]" />
          
          <div className="absolute bottom-0 left-1/2 top-0 w-[3px] -translate-x-1/2">
            <motion.div
              className="w-full rounded-full bg-[linear-gradient(180deg,#f45328_0%,#5b4dff_100%)]"
              initial={{ height: 0 }}
              animate={{ height: `${progress * 100}%` }}
              transition={{ type: 'spring', stiffness: 250, damping: 30, bounce: 0 }}
            />
          </div>

          <div className="space-y-6 sm:space-y-7 lg:space-y-9">
            {timelineSteps.map((item, index) => {
              const itemProgress = timelineSteps.length <= 1 ? 1 : index / (timelineSteps.length - 1)
              const isActive = progress >= itemProgress - 0.06

              return (
                <div key={item.id} className="relative">
                  <div
                    className={[
                      'absolute left-1/2 top-1/2 z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 sm:h-4 sm:w-4',
                      isActive
                        ? 'border-white bg-[#f45328] shadow-[0_0_0_6px_rgba(244,83,40,0.14)]'
                        : 'border-[#cfd6e6] bg-white',
                    ].join(' ')}
                  />

                  <TimelineBubble
                    item={item}
                    align={index % 2 === 0 ? 'left' : 'right'}
                    isActive={isActive}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Target UI Div Match */}
      <div className="relative mx-auto mt-14 max-w-[1140px] px-4 sm:mt-20 lg:px-0">
        {/* This connector makes the timeline feel like it resolves into the final orange summary block. */}
        <div className="pointer-events-none absolute left-1/2 top-[-40px] h-[40px] w-[3px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#5b4dff_0%,#f45328_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-50px] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-[#f45328] shadow-[0_0_0_6px_rgba(244,83,40,0.14)]" />

        <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-[#f45328] shadow-[0_24px_50px_rgba(244,83,40,0.25)] lg:h-[492px] lg:flex-row lg:items-stretch lg:justify-between">
          
          {/* Left Text Box */}
          <div className="flex flex-col justify-center px-7 py-8 lg:w-[50%] lg:px-[56px] lg:py-0">
            <h3 className="!text-white text-[34px] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[42px] lg:text-[54px]">
              <span className="block whitespace-nowrap">Most Offer Services.</span>
              <span className="growth-stories-title__accent relative mt-1 inline-block !text-white whitespace-nowrap">
                We Build Systems.
                <span aria-hidden="true" className="growth-stories-title__accent-line" />
              </span>
            </h3>

            <p className="mt-7 !text-white text-[15px] leading-[1.6] lg:max-w-[430px]">
              Because from experience, we've seen the same problem repeat across every industry we've worked in.
            </p>

            <ul className="mt-5 space-y-3">
              {[
                "Great marketing fails without strong branding",
                "Good products struggle without the right experience",
                "Websites don't perform without strategy behind them",
                "So we changed the approach entirely."
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 !text-white text-[15px] leading-[1.45]">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[6px] bg-white text-[#f45328] shadow-[0_6px_14px_rgba(0,0,0,0.08)]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M8 2L2 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 !text-white text-[15px] leading-[1.6] lg:max-w-[430px]">
              We don't just execute. We understand structure, and then build - ensuring every part of your growth engine works together.
            </p>
          </div>

          {/* Right Cards Stack */}
          <div className="flex flex-col justify-center px-7 pb-8 lg:w-[45%] lg:px-[56px] lg:py-0 lg:pl-0">
            <div className="flex w-full flex-col gap-3.5">
              {closingOffers.map((offer) => (
                <div
                  key={offer.title}
                  className="flex min-h-[90px] w-full items-center gap-4 rounded-[16px] bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:scale-[1.01] lg:pr-5"
                >
                  <div className="flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#fff5ea]">
                    <img src={offer.icon} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold leading-[1.1] tracking-[-0.02em] text-[#111827]">
                      {offer.title}
                    </h4>
                    <p className="mt-1 text-[15px] leading-[1.45] text-[#6b7280]">
                      {offer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
