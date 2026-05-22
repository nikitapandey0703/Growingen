import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { portfolioCaseStudies } from '../data/portfolioCaseStudies'

const defaultInfoCards = [
  {
    title: 'Goal',
    body: 'Build a strong local brand presence in Jaipur during the initial launch stage.',
    icon: '/images/portfolio/pop-up/goal.webp',
    tone: 'bg-[#f8fbf8]',
  },
  {
    title: 'Challenge',
    body: 'Newly launched cloud kitchen with low brand recognition and no established visual identity in a competitive food market.',
    icon: '/images/portfolio/pop-up/challenges.webp',
    tone: 'bg-[#fdf7f2]',
  },
  {
    title: 'Solution',
    body: 'Created a complete brand identity system focused on consistent and memorable customer experience across online and offline touchpoints.',
    icon: '/images/portfolio/pop-up/solution.webp',
    tone: 'bg-[#ffffff]',
    hasBorder: true,
  },
  {
    title: 'Execution',
    body: [
      'Logo Design',
      'Menu Card Design',
      'Brochure Design',
      'Packaging Sticker Design',
      'Brand Visual Identity Setup'
    ],
    icon: '/images/portfolio/pop-up/execution.webp',
    tone: 'bg-[#f4f7fb]',
  },
]

const defaultMetrics = [
  {
    value: '2.5X',
    label: 'Higher Brand Recall',
    icon: '/images/portfolio/pop-up/lead-growth.webp', 
    tone: 'bg-[#f4f6fa]', 
    iconBg: 'bg-[#e8efff]', 
    valueColor: 'text-[#0bb38a]', 
    labelColor: 'text-[#0bb38a]',
  },
  {
    value: '100%',
    label: 'Consistent Brand Identity\nAcross Customer Touchpoints',
    icon: '/images/portfolio/pop-up/lower-cpl.webp', 
    tone: 'bg-[#f2fbf4]', 
    iconBg: 'bg-[#d9f6e3]', 
    valueColor: 'text-[#1b43d6]', 
    labelColor: 'text-[#1b43d6]',
  },
]

function DetailCard({ title, body, icon, tone, hasBorder }) {
  return (
    <article className={`${tone} rounded-[12px] p-3 flex flex-col gap-2 ${hasBorder ? 'border border-[#edf0f4]' : ''}`}>
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)]">
        <img src={icon} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
      </div>
      <div>
        <h3 className="text-[14px] font-bold leading-none text-[#111827]">
          {title}
        </h3>
        {Array.isArray(body) ? (
          <ul className="mt-1.5 text-[11px] leading-[1.35] text-[#4b5563] space-y-0.5">
            {body.map((item, i) => (
              <li key={i} className="flex gap-1.5">
                <span className="text-[#9ca3af]">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1.5 text-[11px] leading-[1.35] text-[#4b5563]">{body}</p>
        )}
      </div>
    </article>
  )
}

function MetricCard({ value, label, icon, tone, iconBg, valueColor, labelColor }) {
  return (
    <article className={`${tone} rounded-[10px] px-3.5 py-2.5 flex items-center gap-3.5`}>
      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${iconBg}`}>
        <img src={icon} alt="" aria-hidden="true" className="h-4.5 w-4.5 object-contain" />
      </div>
      <div className="min-w-0">
        <p className={`text-[22px] font-bold leading-none tracking-tight ${valueColor}`}>
          {value}
        </p>
        <p className={`mt-1 text-[11px] font-medium leading-[1.2] whitespace-pre-line ${labelColor}`}>
          {label}
        </p>
      </div>
    </article>
  )
}

function SectionLabel({ children }) {
  return <h3 className="mb-2 text-[15px] font-bold text-[#111827]">{children}</h3>
}

export default function PortfolioCaseStudyPopup({ isOpen, onClose, study }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const fallbackStudy = portfolioCaseStudies[0]
  const activeStudy = study ?? fallbackStudy
  const details = activeStudy.details ?? defaultInfoCards
  const metrics = activeStudy.metrics ?? defaultMetrics
  const industry = activeStudy.industry ?? fallbackStudy.industry
  const title = activeStudy.title ?? fallbackStudy.title
  const previewSrc = activeStudy.previewImg ?? activeStudy.img ?? fallbackStudy.previewImg
  const impactText = activeStudy.impact ?? fallbackStudy.impact
  const activeCta = activeStudy.cta ?? fallbackStudy.cta

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-3 py-3 backdrop-blur-sm sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Main Container - Highly compacted vertical spacing to prevent clipping */}
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-case-study-title"
            className="relative flex w-full max-w-[1080px] max-h-[92vh] flex-col overflow-y-auto lg:overflow-hidden rounded-[20px] bg-white p-4 sm:p-5 lg:p-6 shadow-[0_32px_80px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3.5 top-3.5 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-black"
              aria-label="Close case study popup"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            {/* Top Split Area */}
            <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr] lg:gap-6">
              
              {/* Left Column (Header & Image) */}
              <div className="flex flex-col h-full min-w-0">
                <div className="shrink-0">
                  <span className="inline-flex rounded-full bg-[#eef2ff] px-2.5 py-1 text-[10px] font-bold text-[#4f46e5]">
                    Case Study
                  </span>
                  <h2
                    id="portfolio-case-study-title"
                    className="mt-2 text-[26px] font-bold leading-[1] tracking-[-0.04em] text-[#111827] sm:text-[30px] lg:text-[32px]"
                  >
                    {title}
                  </h2>
                  <p className="mt-1.5 text-[12px] font-bold text-[#111827]">
                    Client&apos;s Industry: <span className="text-[#f45328]">{industry}</span>
                  </p>
                </div>

                {/* Restricted Image Height */}
                <div className="relative mt-3 flex-1 w-full overflow-hidden rounded-[14px] bg-[#d1e6ff] flex items-center justify-center p-3 min-h-[140px] max-h-[180px]">
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: 'radial-gradient(#90bbed 2.5px, transparent 2.5px)',
                      backgroundSize: '16px 16px'
                    }}
                  />
                  <img
                    src={previewSrc}
                    alt={`${title} case study preview`}
                    className="relative z-10 mx-auto h-full max-h-[160px] w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </div>

              {/* Right Column (Results & Impact) */}
              <div className="flex flex-col min-w-0 pt-0.5">
                <SectionLabel>Results</SectionLabel>
                <div className="flex flex-col gap-2">
                  {metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                  ))}
                </div>

                <div className="mt-4">
                  <SectionLabel>Impact</SectionLabel>
                  <article className="rounded-[12px] bg-[#faeefe] px-3.5 py-2.5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#f3d9ff]">
                        <img
                          src="/images/portfolio/pop-up/system.webp"
                          alt=""
                          aria-hidden="true"
                          className="h-4.5 w-4.5 object-contain"
                        />
                      </div>
                      <p className="text-[11.5px] leading-[1.4] text-[#111827] pt-0.5">
                        {impactText}
                      </p>
                    </div>
                  </article>
                </div>
              </div>

            </div>

            {/* Bottom 4-Grid Layout */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 shrink-0">
              {details.map((card) => (
                <DetailCard key={card.title} {...card} />
              ))}
            </div>

            {/* CTA Footer */}
            <div className="mt-4 flex flex-col gap-3 rounded-[12px] bg-[#feeae0] px-4 py-2.5 sm:px-4 lg:flex-row lg:items-center lg:justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
                  <img
                    src="/images/portfolio/pop-up/dashboard-portfolio.webp"
                    alt=""
                    aria-hidden="true"
                    className="h-4.5 w-4.5 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold leading-[1.2] text-[#111827]">
                    {activeCta.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-medium text-[#4b5563]">
                    {activeCta.subtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#f45328] px-5 text-[12.5px] font-bold text-white transition hover:bg-[#e24a21] lg:min-w-[190px]"
              >
                {activeCta.buttonLabel}
              </button>
            </div>

          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
