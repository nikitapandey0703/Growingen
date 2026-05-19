import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

import PortfolioCaseStudyPopup from './PortfolioCaseStudyPopup'

const items = [
  {
    title: 'Financial Services',
    img: '/images/portfolio/Financal-Services-1.svg',
    popupTitle: 'EdTech Brand',
    popupSubtitle:
      'A focused case study on how strategy, interface design, and conversion storytelling were merged into one scalable brand system.',
    sectionHeading: 'Designed To Build Trust Fast',
    body: 'This case study shows how we translated a complex product into a cleaner experience, sharper proof hierarchy, and a more conversion-ready visual system. Every layer of the presentation was designed to reduce friction and make the offer easier to understand.',
  },
  {
    title: 'Cloud Kitchen',
    img: '/images/portfolio/Clou- Kitchen-1.svg',
    popupTitle: 'Product Dashboard UX',
    popupSubtitle:
      'A usability-first redesign that turned cluttered reporting into a guided dashboard flow built for clarity and action.',
    sectionHeading: 'Clarity Became The Conversion Lever',
    body: 'We simplified the information architecture, introduced cleaner visual grouping, and built interface moments that help users understand value faster. The result was a smoother product story across demos, landing pages, and onboarding touchpoints.',
  },
  {
    title: 'Investment Platform',
    img: '/images/portfolio/Financial-Investment-1.svg',
    popupTitle: 'Social Growth System',
    popupSubtitle:
      'A case study focused on building repeatable content hooks, stronger creative direction, and campaign-ready visuals.',
    sectionHeading: 'Content Started Carrying Strategy',
    body: 'Instead of isolated social posts, we created a more structured visual language that made campaigns easier to scale. Messaging, proof, and offers were shaped to support awareness and lead generation at the same time.',
  },
  {
    title: 'Finance SaaS',
    img: '/images/portfolio/Finance-SaaS-Platform-1.svg',
    popupTitle: 'Narrative-Led Campaign',
    popupSubtitle:
      'A storytelling framework built to make the brand more memorable, more persuasive, and easier to market across channels.',
    sectionHeading: 'The Story Finally Matched The Value',
    body: 'We reframed the offer around a stronger narrative arc, then supported it with visual hierarchy, proof blocks, and campaign execution. That made the brand feel more premium while also improving decision-making for users.',
  },
  {
    title: 'Engineering Services',
    img: '/images/portfolio/Electrical-Engineering-Services-1.svg',
    popupTitle: 'DTC E-Commerce Scale',
    popupSubtitle:
      'A massive overhaul of a direct-to-consumer storefront focusing on cart conversion and mobile checkout speed.',
    sectionHeading: 'Removing Friction from the Funnel',
    body: 'By redesigning the product pages to highlight user-generated content and streamlining the checkout process, we reduced cart abandonment by 35% within the first month of launch.',
  },
  {
    title: 'Automation',
    img: '/images/portfolio/Manufacturing-Automation-1.svg',
    popupTitle: 'Fintech Mobile Application',
    popupSubtitle:
      'Designing a trustworthy, secure, and intuitive mobile banking experience for a new generation of investors.',
    sectionHeading: 'Making Finance Accessible',
    body: 'We focused heavily on onboarding flows and micro-interactions to make complex financial data easy to digest on smaller screens, significantly boosting daily active usage.',
  },
  {
    title: 'Interior Solutions',
    img: '/images/portfolio/Interior-Solutions-1.svg',
    popupTitle: 'Organic Growth Engine',
    popupSubtitle:
      'How we scaled organic traffic for a B2B SaaS company through technical SEO and content clustering.',
    sectionHeading: 'Owning the Search Landscape',
    body: 'Through deep keyword research and restructuring the site architecture, we captured high-intent search queries that directly correlated with a surge in qualified inbound leads.',
  },
  {
    title: 'IT Services',
    img: '/images/portfolio/IT-Services-1.svg',
    popupTitle: 'Enterprise Web Platform',
    popupSubtitle:
      'Building a robust, headless CMS architecture that empowered the marketing team to move faster.',
    sectionHeading: 'Speed and Scalability combined',
    body: 'Transitioning to a modern tech stack not only improved site performance scores to near perfect but also allowed content editors to publish campaigns without developer bottlenecks.',
  },
  {
    title: 'FMCG',
    img: '/images/portfolio/FMCG-1.svg',
    popupTitle: 'Automated Retention Loops',
    popupSubtitle:
      'Designing behavioral email flows that turned one-time buyers into loyal brand advocates.',
    sectionHeading: 'Right Message, Right Time',
    body: 'We mapped the entire customer journey and implemented targeted triggers based on user activity. This personalized approach doubled the lifetime value of the average customer.',
  },
  {
    title: 'IT Solutions',
    img: '/images/portfolio/IT-Services-1.svg',
    popupTitle: 'Performance Marketing Scale',
    popupSubtitle:
      'A deep dive into how aggressive A/B testing and creative iteration drove down customer acquisition costs.',
    sectionHeading: 'Data-Driven Creative Decisions',
    body: 'By rapidly testing diverse ad angles and visual hooks across social channels, we identified the winning combinations that allowed the brand to scale ad spend profitably.',
  },
  {
    title: 'Doc Management',
    img: '/images/portfolio/Document-Management-SaaS-1.svg',
    popupTitle: 'Conversion Rate Optimization',
    popupSubtitle:
      'A methodical testing framework that squeezed maximum value out of existing landing page traffic.',
    sectionHeading: 'Small Tweaks, Massive Gains',
    body: 'Through heat mapping and user recordings, we identified drop-off points. Iterative adjustments to copy, button placement, and social proof yielded a 40% lift in total conversions.',
  },
  {
    title: 'Cloud Kitchen Pro',
    img: '/images/portfolio/Cloud-Kitchen-2.svg',
    popupTitle: 'Corporate Rebranding',
    popupSubtitle:
      'Breathing new life into a legacy brand to help them compete in a modern, digitally-native market.',
    sectionHeading: 'Respecting the Past, Designing for the Future',
    body: 'We carefully evolved the existing logo, updated the color palette, and created a comprehensive digital design system that energized the internal team and captivated new audiences.',
  },
  {
    title: 'Automation Scale',
    img: '/images/portfolio/Manufacturing-Automation-2.svg',
    popupTitle: 'Product Explainer Videos',
    popupSubtitle:
      'Using animation and kinetic typography to explain a complex software solution in under 60 seconds.',
    sectionHeading: 'Bringing Features to Life',
    body: 'Static screenshots weren’t doing the product justice. We developed a distinct motion style that made the software look dynamic, significantly increasing demo requests.',
  },
  {
    title: 'IT Growth',
    img: '/images/portfolio/IT-Services-3.svg',
    popupTitle: 'High-Ticket Lead Generation',
    popupSubtitle:
      'A full-funnel strategy designed to attract, nurture, and close enterprise-level contracts.',
    sectionHeading: 'Quality Over Quantity',
    body: 'We shifted the focus from broad reach to hyper-targeted account-based marketing (ABM). Personalized outreach paired with targeted content led to a record-breaking sales quarter.',
  },
  {
    title: 'SaaS Platform',
    img: '/images/portfolio/SaaS-1.svg',
    popupTitle: 'SaaS Web Application',
    popupSubtitle:
      'Designing a powerful cloud-based application that balancing extensive features with an intuitive interface.',
    sectionHeading: 'Complex Power, Simple Usage',
    body: 'By conducting extensive user interviews, we reorganized the platform’s toolset into logical workspaces, reducing onboarding time for new users by over 50%.',
  },
]

export default function PortfolioCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedStudy, setSelectedStudy] = useState(null)

  const trackRef = useRef(null)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const dragDistance = useRef(0)
  const resumeTimerRef = useRef(null)

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = trackRef.current.scrollWidth / 3
    }
  }, [])

  useEffect(() => {
    let animationId
    let lastTime = performance.now()
    const speed = 0.07

    const scroll = (time) => {
      const delta = time - lastTime
      lastTime = time

      if (trackRef.current && !isPaused && !isDragging && !selectedStudy && delta < 100) {
        trackRef.current.scrollLeft += speed * delta

        const singleSetWidth = trackRef.current.scrollWidth / 3

        if (trackRef.current.scrollLeft >= singleSetWidth * 2) {
          trackRef.current.scrollLeft -= singleSetWidth
        } else if (trackRef.current.scrollLeft <= 0) {
          trackRef.current.scrollLeft += singleSetWidth
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isDragging, isPaused, selectedStudy])

  const handlePointerDown = (e) => {
    if (!trackRef.current) {
      return
    }

    setIsPaused(true)
    setIsDragging(true)
    dragDistance.current = 0

    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
    startX.current = pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
  }

  const handlePointerMove = (e) => {
    if (!isDragging || !trackRef.current) {
      return
    }

    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
    const x = pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.35

    dragDistance.current = Math.max(dragDistance.current, Math.abs(walk))

    let newScroll = scrollLeft.current - walk
    const singleSetWidth = trackRef.current.scrollWidth / 3

    if (newScroll >= singleSetWidth * 2) {
      newScroll -= singleSetWidth
      startX.current = pageX - trackRef.current.offsetLeft
      scrollLeft.current = newScroll
    } else if (newScroll <= 0) {
      newScroll += singleSetWidth
      startX.current = pageX - trackRef.current.offsetLeft
      scrollLeft.current = newScroll
    }

    trackRef.current.scrollLeft = newScroll
  }

  const handlePointerUpOrLeave = () => {
    setIsDragging(false)

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false)
    }, 1400)
  }

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current)
      }
    }
  }, [])

  const handleCardClick = (study) => {
    if (dragDistance.current > 14) {
      return
    }

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }

    setIsPaused(true)
    setSelectedStudy(study)
  }

  return (
    <>
      <SectionWrapper
        as="section"
        id="portfolio-carousel"
        className="section-spacing relative overflow-hidden bg-transparent"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 text-center">
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[40px] lg:text-[50px]">
              Build a Brand{' '}
              <CurvedUnderlineText className="hero-highlight pb-[0.16em]">
                People
              </CurvedUnderlineText>{' '}
              Recognize
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#fffdfb] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#fffdfb] to-transparent" />

            <div
              ref={trackRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {
                if (!selectedStudy) {
                  setIsPaused(false)
                }
                handlePointerUpOrLeave()
              }}
              onMouseDown={handlePointerDown}
              onMouseMove={handlePointerMove}
              onMouseUp={handlePointerUpOrLeave}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUpOrLeave}
              onTouchCancel={handlePointerUpOrLeave}
              className="flex w-full cursor-grab select-none overflow-hidden active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              {[1, 2, 3].map((setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-7 pr-7">
                  {items.map((item, index) => (
                    <button
                      key={`${setIndex}-${item.title}-${index}`}
                      type="button"
                      onClick={() => handleCardClick(item)}
                      className="
                        w-[220px] sm:w-[240px] lg:w-[250px] xl:w-[258px] 2xl:w-[268px]
                        flex-shrink-0
                        rounded-t-[18px] rounded-b-none sm:rounded-t-[20px] lg:rounded-t-[24px] xl:rounded-t-[28px] 2xl:rounded-t-[32px]
                        overflow-hidden
                        bg-transparent
                        text-left
                        shadow-[0_12px_34px_rgba(15,23,42,0.08)]
                        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:-translate-y-1 hover:scale-[1.03]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45328] focus-visible:ring-offset-2
                      "
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        draggable="false"
                        className="block h-auto w-full rounded-t-[18px] rounded-b-none sm:rounded-t-[20px] lg:rounded-t-[24px] xl:rounded-t-[28px] 2xl:rounded-t-[32px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <PortfolioCaseStudyPopup
        isOpen={Boolean(selectedStudy)}
        study={selectedStudy ?? items[0]}
        onClose={() => {
          setSelectedStudy(null)
          setIsPaused(false)
        }}
      />
    </>
  )
}
