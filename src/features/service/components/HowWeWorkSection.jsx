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
      className="group relative z-0 flex h-full w-full origin-center flex-col justify-between overflow-hidden rounded-[14px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.95)_100%)] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out hover:z-30 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_26px_54px_rgba(15,23,42,0.14)] sm:p-5"
      style={delayStyle}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-24 rounded-b-[28px] bg-[radial-gradient(circle_at_top,rgba(244,83,40,0.16),transparent_72%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Content Area */}
      <div className="relative z-10 mb-6 flex flex-col">
        {/* Animated Icon Wrapper */}
        <div className="mb-4 h-10 w-10 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3">
          <img
            src={step.icon}
            alt={`${step.title} Icon`}
            className="h-full w-full object-contain"
            style={{ borderRadius: '8px' }} 
          />
        </div>
        
        {/* Title & Description */}
        <h3 className="mb-2 text-[20px] font-bold leading-tight tracking-[-0.02em] text-[#111827] sm:text-[22px]">
          {step.title}
        </h3>
        <p className="text-[15px] font-medium leading-[1.5] text-[#5b6472]">
          {step.description}
        </p>
      </div>

      {/* Bottom Image Area */}
      {/* Wrapper with overflow-hidden ensures the zoomed image stays inside the rounded corners */}
      <div className="relative mt-auto overflow-hidden rounded-[10px] bg-[#f8fafc]">
        {/* Optional gradient overlay to match reference lighting */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
        
        <img
          src={step.image}
          alt={`${step.title} Visualization`}
          className="h-[120px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12] sm:h-[130px] lg:h-[140px]"
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
    <SectionWrapper as="section" className="relative overflow-hidden bg-transparent pt-16 sm:pt-20 lg:pt-0">
      
      {/* Soft Background Blurs (Peach on Left, Blue on Right to match your vibe) */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.15)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.15)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">
        
        {/* Section Heading Area */}
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            How We Work
          </p>
          <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[50px]">
            A Process Designed For
            <br />
            <span className="inline-block">
              Clarity{' '}
              <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
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
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
