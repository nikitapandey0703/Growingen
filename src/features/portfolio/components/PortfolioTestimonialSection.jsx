import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

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
    name: 'Rahul Mehta',
    role: 'Founder & CEO, LuxeLite Solutions',
    text:
      "Growingen didn't just deliver a website and some ads – they completely transformed how our brand is perceived in the market. Within 3 months, we were getting inquiries from clients we could only dream about before. The ROI on this investment has been extraordinary.",
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    role: 'Founder & CEO, LuxeLite Solutions',
    text:
      "Growingen didn't just deliver a website and some ads – they completely transformed how our brand is perceived in the market. Within 3 months, we were getting inquiries from clients we could only dream about before. The ROI on this investment has been extraordinary.",
  },
]

/**
 * Individual Testimonial Card Component.
 * - By default, the background is transparent (showing only the stroke outline).
 * - On hover, it fills with a solid black background, and all text elements transition to white.
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
        'group relative min-w-0 flex-none snap-start',
        'w-[min(82vw,292px)] sm:w-[min(66vw,360px)] lg:w-[calc(50%-34px)]',
        'cursor-pointer outline-none transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1',
      ].join(' ')}
    >
      {/* 
        Reduced Height Container: 
        Lowered the height to balance the reduced width (max 280px on desktop).
      */}
      <div className="relative h-[270px] w-full sm:h-[286px] lg:h-[308px]">
        
        {/* Custom SVG Background Shape */}
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
            'absolute inset-0 z-10 flex flex-col items-center justify-between text-center',
            'px-6 pb-6 pt-10 sm:px-8 sm:pb-7 sm:pt-12 lg:px-9 lg:pb-8 lg:pt-[3.5rem]',
            'transition-colors duration-300 group-hover:text-white',
          ].join(' ')}
        >
          
          {/* Rating Stars */}
          <div className="flex justify-center gap-1.5 text-[18px] text-[#FFC107] sm:text-[20px] lg:text-[24px]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          {/* Review Text - Strictly turns white on hover */}
          <p className="mx-auto max-w-[46ch] font-sans text-[11.5px] font-medium leading-[1.65] text-[#4b5563] transition-colors duration-300 group-hover:!text-white sm:text-[12.5px] lg:text-[13px]">
            "{item.text}"
          </p>

          {/* Profile Section */}
          <div className="flex items-center justify-center gap-3.5">
            
            {/* Avatar Pill with Vertical Gradient */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#A21C5C] to-[#F30799] text-[14px] font-semibold text-white shadow-sm sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:text-[15px]">
              {item.name[0]}
            </div>

            <div className="text-left">
              {/* Name - Strictly turns white on hover */}
              <p className="font-sans text-[13px] font-semibold leading-tight text-[#111827] transition-colors duration-300 group-hover:!text-white sm:text-[14px] lg:text-[15px]">
                {item.name}
              </p>
              {/* Role - Turns an off-white/light gray on hover for subtle hierarchy */}
              <p className="mt-0.5 font-sans text-[10.5px] font-medium leading-tight text-[#6b7280] transition-colors duration-300 group-hover:!text-white sm:text-[11.5px]">
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

  /**
   * Intersection logic to determine which card is currently centered
   * to highlight the corresponding navigation dot.
   */
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

      setActiveIndex(closestIndex)
    }

    handleScroll()
    node.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      node.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToCard = (index) => {
    const node = scrollRef.current
    const target = node?.children?.[index]

    if (!node || !target) return

    node.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  const goToNextCard = (index) => {
    const nextIndex = (index + 1) % testimonials.length
    scrollToCard(nextIndex)
  }

  return (
    <section className="relative overflow-hidden bg-transparent px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-18 lg:pt-14">
      
      {/* Decorative Background Glows */}
      <div className="pointer-events-none absolute left-[10%] top-[24%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.22)_0%,rgba(255,151,113,0.08)_44%,rgba(255,151,113,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.2)_0%,rgba(104,141,255,0.08)_42%,rgba(104,141,255,0)_74%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1120px]">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827] sm:text-[40px] lg:text-[50px]">
            What the{' '}
            <CurvedUnderlineText className="hero-highlight pb-[0.16em]">
              Client Said
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-0.5 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-7 lg:gap-9"
          >
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={item.id}
                item={item}
                onAdvance={() => goToNextCard(index)}
              />
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Scroll to testimonial from ${item.name}`}
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
    </section>
  )
}
