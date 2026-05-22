import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

/**
 * Testimonial data array.
 */
const testimonials = [
  {
    id: 1,
    name: 'Rahul Mehta',
    role: 'Founder & CEO, LuxeLite Solutions',
    text:
      "Growingen didn't just deliver a website and some ads – they completely transformed how our brand is perceived in the market. Within 3 months, we were getting inquiries from clients we could only dream about before. The ROI on this investment has been extraordinary.",
  },
  {
    id: 2,
    name: 'Anita Sharma',
    role: 'CMO, Urban Nest',
    text:
      "Their strategic approach to building our brand identity was flawless. We saw a 40% increase in user engagement and our customer acquisition cost dropped significantly. Highly recommend their dedicated team!",
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Director, Zenith Corp',
    text:
      "From strategy to execution, Growingen was exceptional. The new digital presence they built for us truly reflects our brand's authority. We have seen tremendous scale and performance improvements across the board.",
  },
]

/**
 * Individual Testimonial Card Component.
 */
function TestimonialCard({ item, onAdvance }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onAdvance}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onAdvance()
        }
      }}
      className={[
        'group relative flex flex-col flex-none snap-start',
        // Mobile/Tablet: 1 card full width. Desktop (lg): 2 cards per view (accounting for gap-9 = 36px => calc(50% - 18px))
        'w-full lg:w-[calc(50%-18px)]',
        'cursor-pointer outline-none transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1',
      ].join(' ')}
    >
      {/* 
        Scalable Container: 
        Uses `h-full` and `min-h` so it grows with the content, 
        while keeping all cards the same height in the flex row.
      */}
      <div className="relative flex h-full min-h-[260px] w-full flex-col sm:min-h-[280px]">
        
        {/* Custom SVG Background Shape - Automatically stretches */}
        <svg
          viewBox="0 0 520 260"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full transition-all duration-300"
          aria-hidden="true"
        >
          <path
            d="M20,0 H150 Q170,0 178,18 Q186,34 220,34 H300 Q334,34 342,18 Q350,0 370,0 H500 Q520,0 520,20 V240 Q520,260 500,260 H20 Q0,260 0,240 V20 Q0,0 20,0 Z"
            className="fill-transparent stroke-[rgba(0,0,0,0.5)] stroke-[0.8] transition-all duration-300 group-hover:fill-[#0a0a0a] group-hover:stroke-[#0a0a0a]"
          />
        </svg>

        {/* Inner Content Container */}
        <div
          className={[
            'relative z-10 flex h-full flex-col items-center justify-between text-center',
            'px-6 pb-6 pt-10 sm:px-8 sm:pb-7 sm:pt-12 lg:px-10 lg:pb-8 lg:pt-[3.5rem]',
            'transition-colors duration-300 group-hover:text-white',
          ].join(' ')}
        >
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            {/* Rating Stars */}
            <div className="flex justify-center gap-1.5 text-[18px] text-[#FFC107] sm:text-[20px] lg:text-[24px]">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Review Text - Responsive Typography Variable */}
            <p className="mx-auto max-w-[46ch] font-sans font-medium leading-[1.65]  transition-colors duration-300 group-hover:!text-white text-[length:var(--fs-card-body)]">
              "{item.text}"
            </p>
          </div>

          {/* Profile Section */}
          <div className="mt-6 flex items-center justify-center gap-3.5 sm:mt-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#A21C5C] to-[#F30799] text-[length:var(--fs-button)] font-semibold text-white shadow-sm sm:h-11 sm:w-11 lg:h-12 lg:w-12">
              {item.name[0]}
            </div>

            <div className="text-left">
              <p className="font-sans font-semibold leading-tight  transition-colors duration-300 group-hover:!text-white text-[length:var(--fs-nav-cta)]">
                {item.name}
              </p>
              <p className="mt-0.5 font-sans font-medium leading-tight  transition-colors duration-300 group-hover:!text-white text-[length:var(--fs-nav-link)] opacity-90">
                {item.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PortfolioTestimonialSection() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  // Calculate dynamic dots (3 on mobile, 2 on desktop)
  const numDots = Math.max(1, testimonials.length - cardsPerView + 1)

  useEffect(() => {
    const handleResize = () => {
      // lg breakpoint in Tailwind is 1024px
      if (window.innerWidth >= 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(1)
      }
    }

    // Set initial layout
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const node = scrollRef.current
    if (!node) return undefined

    const handleScroll = () => {
      const cards = Array.from(node.children)
      if (!cards.length) return

      const containerLeft = node.getBoundingClientRect().left
      let closestIndex = 0
      let closestOffset = Number.POSITIVE_INFINITY

      cards.forEach((card, index) => {
        const offset = Math.abs(card.getBoundingClientRect().left - containerLeft)

        if (offset < closestOffset) {
          closestOffset = offset
          closestIndex = index
        }
      })

      // Clamp the active index so it doesn't exceed the number of available dots
      setActiveIndex(Math.min(closestIndex, numDots - 1))
    }

    // Delay scroll listener attachment slightly to allow initial render
    const timeoutId = setTimeout(() => {
      handleScroll()
      node.addEventListener('scroll', handleScroll, { passive: true })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      node.removeEventListener('scroll', handleScroll)
    }
  }, [numDots])

  const scrollToCard = (index) => {
    const node = scrollRef.current
    const target = node?.children?.[index]

    if (!node || !target) return

    node.scrollTo({
      // Account for scroll container's offset to align perfectly
      left: target.offsetLeft - node.offsetLeft,
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  const goToNextCard = () => {
    const nextIndex = (activeIndex + 1) % numDots
    scrollToCard(nextIndex)
  }

  return (
    <SectionWrapper as="section" className="relative overflow-hidden bg-transparent section-spacing ">
      
      {/* Decorative Background Glows */}
      <div className="pointer-events-none absolute left-[10%] top-[24%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.22)_0%,rgba(255,151,113,0.08)_44%,rgba(255,151,113,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.2)_0%,rgba(104,141,255,0.08)_42%,rgba(104,141,255,0)_74%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1120px]">
        
        {/* Section Heading - Responsive Typography Variable */}
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="font-semibold leading-[1.08] tracking-[-0.05em]  text-[length:var(--fs-section-title)]">
            What Our{' '}
            <CurvedUnderlineText className="hero-highlight pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              Client Said
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            // items-stretch ensures all cards map to the highest content height
            className="flex items-stretch snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-9"
          >
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                item={item}
                onAdvance={goToNextCard}
              />
            ))}
          </div>

          {/* Indicator Dots - Reverted back to original classes but tied to numDots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: numDots }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Scroll to testimonial page ${index + 1}`}
                onClick={() => scrollToCard(index)}
                className={[
                  'featured-indicator',
                  activeIndex === index ? 'featured-indicator-active' : '',
                ].join(' ')}
              />
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}