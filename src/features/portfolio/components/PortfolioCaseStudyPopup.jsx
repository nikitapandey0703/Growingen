import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { portfolioCaseStudies } from '../data/portfolioCaseStudies'

const defaultInfoCards = [
  {
    title: 'Goal',
    body: 'Build a strong local brand presence in Jaipur during the initial launch stage.',
    icon: '/images/portfolio/pop-up/goal.webp',
    tone: 'bg-[#F1F9F5]',
  },
  {
    title: 'Challenge',
    body: 'Newly launched cloud kitchen with low brand recognition and no established visual identity in a competitive food market.',
    icon: '/images/portfolio/pop-up/challenges.webp',
    tone: 'bg-[#FEF7F0]',
  },
  {
    title: 'Solution',
    body: 'Created a complete brand identity system focused on consistent and memorable customer experience across online and offline touchpoints.',
    icon: '/images/portfolio/pop-up/solution.webp',
    tone: 'bg-[#F2F7FC]',
    hasBorder: true,
  },
  {
    title: 'Execution',
    body: [
      'Logo Design',
      'Menu Card Design',
      'Brochure Design',
      'Packaging Sticker Design',
      'Brand Visual Identity Setup',
    ],
    icon: '/images/portfolio/pop-up/execution.webp',
    tone: 'bg-[#F5F2FB]',
  },
]

const defaultMetrics = [
  {
    value: '2.5X',
    label: 'Higher Brand Recall',
    icon: '/images/portfolio/pop-up/lead-growth.webp',
    tone: 'bg-[#F1F4FD]',
    iconBg: 'bg-[#E2E7FC]',
    valueColor: '#06BA9D',
    labelColor: '#06BA9D',
  },
  {
    value: '100%',
    label: 'Consistent Brand Identity\nAcross Customer Touchpoints',
    icon: '/images/portfolio/pop-up/lower-cpl.webp',
    tone: 'bg-[#F2F9F5]',
    iconBg: 'bg-[#F2F9F5]',
    valueColor: '#1043C6',
    labelColor: '#1043C6',
  },
]

function DetailCard({ title, body, icon, tone, hasBorder }) {
  return (
    <article
      className={`${tone} flex flex-col gap-2 rounded-[12px] p-3 sm:p-3.5 md:p-3.5 lg:p-4 2xl:rounded-[14px] 2xl:p-4 ${hasBorder ? 'border border-[#edf0f4]' : ''}`}
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)] sm:h-[34px] sm:w-[34px] md:h-9 md:w-9 2xl:h-10 2xl:w-10">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 object-contain sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px] xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
        />
      </div>
      <div>
        <h3 className="text-[14px] font-bold leading-none sm:text-[14px] md:text-[14.5px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
          {title}
        </h3>
        {Array.isArray(body) ? (
          <ul className="mt-1.5 space-y-0.5 text-[11px] leading-[1.35] sm:text-[11px] md:text-[11.5px] lg:text-[11.5px] xl:text-[12px] 2xl:text-[14px]">
            {body.map((item, i) => (
              <li key={i} className="flex gap-1.5">
                <span className="text-[#9ca3af]">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1.5 text-[11px] leading-[1.35] sm:text-[11px] md:text-[11.5px] lg:text-[11.5px] xl:text-[12px] 2xl:text-[14px]">
            {body}
          </p>
        )}
      </div>
    </article>
  )
}

function MetricCard({ value, label, icon, tone, iconBg, valueColor, labelColor }) {
  return (
    <article
      className={`${tone} flex items-center gap-3 rounded-[10px] px-3.5 py-2.5 sm:gap-3.5 sm:px-4 sm:py-3 md:px-4 md:py-3 lg:px-[1.05rem] lg:py-[0.9rem] xl:px-[1.1rem] xl:py-3 2xl:rounded-[12px] 2xl:px-5 2xl:py-4`}
    >
      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${iconBg} sm:h-10 sm:w-10 md:h-10 md:w-10 2xl:h-11 2xl:w-11`}>
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 object-contain sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px] xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
        />
      </div>
      <div className="min-w-0">
        <p
          className="text-[22px] font-bold leading-none tracking-tight sm:text-[23px] md:text-[24px] lg:text-[25px] xl:text-[26px] 2xl:text-[32px]"
          style={{ color: valueColor }}
        >
          {value}
        </p>
        <p
          className="mt-1 whitespace-pre-line text-[11px] font-medium leading-[1.2] sm:text-[11px] md:text-[11.5px] lg:text-[11.5px] xl:text-[12px] 2xl:text-[14px]"
          style={{ color: labelColor }}
        >
          {label}
        </p>
      </div>
    </article>
  )
}

function SectionLabel({ children }) {
  return <h3 className="mb-2 text-[15px] font-bold sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[21px]">{children}</h3>
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
          className="scrollbar-hidden fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-black/60 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6 md:px-6 lg:items-center xl:px-8 2xl:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-case-study-title"
            className="relative my-auto flex w-full max-w-[1080px] max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-[20px] bg-white p-4 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:max-h-[calc(100dvh-3rem)] sm:p-5 md:max-w-[1120px] md:p-5 lg:max-w-[1180px] lg:p-6 xl:max-w-[1260px] xl:rounded-[24px] xl:p-7 2xl:max-w-[1440px] 2xl:max-h-[calc(100dvh-4rem)] 2xl:rounded-[28px] 2xl:p-8"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3.5 top-3.5 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-black sm:right-4 sm:top-4 md:right-4 md:top-4 lg:right-[1.1rem] lg:top-[1.1rem] xl:right-5 xl:top-5 2xl:h-9 2xl:w-9"
              aria-label="Close case study popup"
            >
              <X className="h-4 w-4 2xl:h-5 2xl:w-5" strokeWidth={2.5} />
            </button>

            <div className="scrollbar-hidden min-h-0 overflow-y-auto pr-1 md:pr-1.5 xl:pr-2 2xl:pr-3">
              
              {/* 1. Moved Top Header up here */}
              <div className="mb-4 shrink-0 xl:mb-5">
                <span className="inline-flex rounded-full bg-[#eef2ff] px-2.5 py-1 text-[10px] font-bold text-[#4f46e5] sm:text-[10px] md:text-[10.5px] lg:text-[10.5px] xl:text-[11px] 2xl:px-3 2xl:py-1.5 2xl:text-[12px]">
                  Case Study
                </span>
                <h2
                  id="portfolio-case-study-title"
                  className="mt-2 text-[26px] font-bold leading-[1] tracking-[-0.04em] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[38px] 2xl:text-[46px]"
                >
                  {title}
                </h2>
                <p className="mt-1.5 text-[12px] font-bold text-[#111827] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13.5px] 2xl:text-[16px]">
                  Client&apos;s Industry: <span className="text-[#f45328]">{industry}</span>
                </p>
              </div>

              {/* 2. Moved Detail Cards Right below Header */}
              <div className="mb-5 grid gap-3 sm:grid-cols-2 md:gap-3.5 lg:grid-cols-4 lg:gap-4 xl:mb-6 xl:gap-4 2xl:gap-5">
                {details.map((card) => (
                  <DetailCard key={card.title} {...card} />
                ))}
              </div>

              {/* 3. Image and Metrics Grid Section */}
              <div className="grid gap-4 sm:gap-4 md:gap-5 lg:grid-cols-[1fr_0.85fr] lg:gap-6 xl:gap-7 2xl:gap-8">
                
                {/* Left Side: Preview Image Only */}
                <div className="flex h-full min-w-0 flex-col">
                  <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-[14px] bg-[#d1e6ff] p-3 min-h-[140px] max-h-[180px] sm:max-h-[220px] md:min-h-[180px] md:max-h-[250px] lg:min-h-[200px] lg:max-h-[280px] xl:min-h-[220px] xl:max-h-[320px] 2xl:min-h-[260px] 2xl:max-h-[380px]">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage: 'radial-gradient(#90bbed 2.5px, transparent 2.5px)',
                        backgroundSize: '16px 16px',
                      }}
                    />
                    <img
                      src={previewSrc}
                      alt={`${title} case study preview`}
                      className="relative z-10 mx-auto h-full max-h-[160px] w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] sm:max-h-[200px] md:max-h-[230px] lg:max-h-[250px] xl:max-h-[290px] 2xl:max-h-[340px]"
                    />
                  </div>
                </div>

                {/* Right Side: Impact (Top) and Results (Bottom) */}
                <div className="flex min-w-0 flex-col pt-0.5">
                  
                  {/* Impact switched to top */}
                  <div className="mb-4 flex flex-col xl:mb-[1.1rem] 2xl:mb-5">
                    <SectionLabel>Impact</SectionLabel>
                    <article className="flex flex-1 rounded-[12px] bg-[#faeefe] px-3.5 py-2.5 sm:px-4 sm:py-3 md:px-4 md:py-3 xl:px-[1.15rem] xl:py-[0.95rem] 2xl:rounded-[14px] 2xl:px-5 2xl:py-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#f3d9ff] sm:h-10 sm:w-10 md:h-10 md:w-10 2xl:h-11 2xl:w-11">
                          <img
                            src="/images/portfolio/pop-up/system.webp"
                            alt=""
                            aria-hidden="true"
                            className="h-6 w-6 object-contain sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px] xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
                          />
                        </div>
                        <p className="pt-0.5 text-[11.5px] leading-[1.4] text-black sm:text-[11.5px] md:text-[12px] lg:text-[12px] xl:text-[12.5px] 2xl:text-[15px]">
                          {impactText}
                        </p>
                      </div>
                    </article>
                  </div>

                  {/* Results switched to bottom */}
                  <div className="flex flex-col">
                    <SectionLabel>Results</SectionLabel>
                    <div className="flex flex-col gap-2">
                      {metrics.map((metric) => (
                        <MetricCard key={metric.label} {...metric} />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* 4. CTA untouched at the bottom */}
              <div className="mt-4 flex flex-col gap-3 rounded-[12px] bg-[#FFDCCE] px-4 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:flex-row lg:items-center lg:justify-between xl:px-6 xl:py-4 2xl:mt-5 2xl:rounded-[14px] 2xl:px-7 2xl:py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)] sm:h-10 sm:w-10 md:h-10 md:w-10 2xl:h-11 2xl:w-11">
                    <img
                      src="/images/portfolio/pop-up/dashboard-portfolio.webp"
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6 object-contain sm:h-[16px] sm:w-[16px] md:h-[17px] md:w-[17px] xl:h-6 xl:w-6 2xl:h-7 2xl:w-7"
                    />
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold leading-[1.2] text-black sm:text-[13.5px] md:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]">
                      {activeCta.title}
                    </h4>
                    <p className="mt-0.5 text-[11px] font-medium text-black sm:text-[11px] md:text-[11.5px] lg:text-[11.5px] xl:text-[12px] 2xl:text-[14px]">
                      {activeCta.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#F45328] px-5 text-[12.5px] font-bold text-white transition hover:bg-[#e24a21] sm:min-h-10 sm:text-[12.5px] md:min-h-[42px] md:text-[13px] lg:min-w-[190px] lg:text-[13px] xl:min-w-[210px] xl:text-[13.5px] 2xl:min-h-[48px] 2xl:min-w-[240px] 2xl:px-6 2xl:text-[15px]"
                >
                  {activeCta.buttonLabel}
                </button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}