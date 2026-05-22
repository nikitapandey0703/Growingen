import React from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

/**
 * Data array for the How We Work process steps.
 */
const processSteps = [
  {
    id: 1,
    title: 'Understand',
    description: 'We deep dive into your business, goals, & challenges.',
    icon: '/images/service/service-icon-1.webp',
    image: '/images/service/service-card-1.webp',
  },
  {
    id: 2,
    title: 'Strategize',
    description: 'We define the right approach, not a generic solution.',
    icon: '/images/service/service-icon-2.webp',
    image: '/images/service/service-card-2.webp',
  },
  {
    id: 3,
    title: 'Build',
    description: 'Design, develop, & implement with precision.',
    icon: '/images/service/service-icon-3.webp',
    image: '/images/service/service-card-3.webp',
  },
  {
    id: 4,
    title: 'Optimize',
    description: 'Continuously improve based on data & performance.',
    icon: '/images/service/service-icon-4.webp',
    image: '/images/service/service-card-4.webp',
  },
]

/**
 * ProcessCard Component
 * Displays individual process steps with trendy hover animations.
 */
function ProcessCard({ step, index }) {
  // Staggered delay for initial load-in (if you choose to add mount animations later)
  const delayStyle = { transitionDelay: `${index * 75}ms` }

  return (
    <div
      className="group relative z-0 flex h-full min-h-[318px] w-full origin-center flex-col justify-between overflow-hidden rounded-[14px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.95)_100%)] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out hover:z-30 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_26px_54px_rgba(15,23,42,0.14)] sm:min-h-[336px] sm:p-5 lg:min-h-[348px] 2xl:min-h-[400px] 2xl:rounded-[18px] 2xl:p-6"
      style={delayStyle}
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 h-20 rounded-b-[28px] bg-[radial-gradient(circle_at_top,rgba(244,83,40,0.16),transparent_72%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:inset-x-6 sm:h-24 2xl:h-28" />

      {/* Top Content Area */}
      <div className="relative z-10 mb-5 flex flex-1 flex-col sm:mb-6">
        {/* Animated Icon Wrapper */}
        <div className="mb-4 h-10 w-10 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 sm:h-11 sm:w-11 2xl:mb-5 2xl:h-12 2xl:w-12">
          <img
            src={step.icon}
            alt={`${step.title} Icon`}
            className="h-full w-full object-contain"
            style={{ borderRadius: '8px' }} 
          />
        </div>
        
        {/* Title & Description */}
        <h3
          className="mb-2 text-[20px] font-bold leading-tight tracking-[-0.02em] sm:text-[22px] 2xl:text-[28px]"
          style={{ fontSize: 'clamp(20px, 1.05rem + 0.45vw, var(--fs-card-title))' }}
        >
          {step.title}
        </h3>
        <p
          className="max-w-[32ch] text-[15px] font-medium leading-[1.5] 2xl:max-w-[34ch] 2xl:leading-[1.6]"
          style={{ fontSize: 'clamp(14px, 0.9rem + 0.16vw, var(--fs-card-body))' }}
        >
          {step.description}
        </p>
      </div>

      {/* Bottom Image Area */}
      {/* Wrapper with overflow-hidden ensures the zoomed image stays inside the rounded corners */}
      <div className="relative mt-auto overflow-hidden rounded-[10px] bg-[#f8fafc] 2xl:rounded-[12px]">
        {/* Optional gradient overlay to match reference lighting */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
        
        <img
          src={step.image}
          alt={`${step.title} Visualization`}
          className="aspect-[16/9] h-auto min-h-[120px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12] sm:min-h-[130px] lg:min-h-[140px] 2xl:min-h-[172px]"
        />
      </div>
    </div>
  )
}

/**
 * Main Section Component
 */
export default function HowWeWorkSection() {
  return (
    <SectionWrapper as="section" className="relative overflow-hidden bg-transparent section-spacing">
      
      {/* Soft Background Blurs (Peach on Left, Blue on Right to match your vibe) */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.15)_0%,transparent_70%)] blur-3xl sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] 2xl:h-[380px] 2xl:w-[380px]" />
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.15)_0%,transparent_70%)] blur-3xl sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] 2xl:h-[380px] 2xl:w-[380px]" />

      <div className="relative mx-auto max-w-[1200px] 2xl:max-w-[1400px]">
        
        {/* Section Heading Area */}
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16 2xl:mb-20 2xl:max-w-[920px]">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium uppercase tracking-[0.28em]">
            How We Work
          </p>
          <h2
            className="text-balance text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[50px]"
            style={{ fontSize: 'clamp(32px, 1.55rem + 1.65vw, var(--fs-section-title))' }}
          >
            A Process Designed For Clarity
            <br />
            <span className="inline-block">
              {' '}
              <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
                & Results
              </CurvedUnderlineText>
            </span>
          </h2>
        </div>

        {/* 
          Cards Grid Layout
          - 1 col on mobile
          - 2 cols on tablet
          - 4 cols on desktop to exactly match your reference image 
        */}
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6 2xl:gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
