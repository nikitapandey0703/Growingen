import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

const infoCards = [
  {
    title: 'Goal',
    body: 'Increase qualified leads',
    icon: '/images/portfolio/pop-up/goal.webp',
    tone: 'bg-[#eef7f4]',
  },
  {
    title: 'Challenge',
    body: 'High CPL & low-quality inquiries',
    icon: '/images/portfolio/pop-up/challenges.webp',
    tone: 'bg-[#fff4eb]',
  },
  {
    title: 'Solution',
    body: 'Performance-driven funnel with targeted ads + landing page optimization',
    icon: '/images/portfolio/pop-up/solution.webp',
    tone: 'bg-[#f7f4ff]',
  },
  {
    title: 'Execution',
    body: 'Meta + Google Ads | Creative testing | Retargeting funnel',
    icon: '/images/portfolio/pop-up/execution.webp',
    tone: 'bg-[#f4f0ff]',
  },
]

const metrics = [
  {
    value: '3.2X',
    label: 'Lead Growth',
    icon: '/images/portfolio/pop-up/lead-growth.webp',
    tone: 'bg-[linear-gradient(135deg,#eef0ff_0%,#f4f8ff_100%)]',
  },
  {
    value: '48%',
    label: 'Lower CPL',
    icon: '/images/portfolio/pop-up/lower-cpl.webp',
    tone: 'bg-[linear-gradient(135deg,#effcf6_0%,#eef7f4_100%)]',
  },
]

function DetailCard({ title, body, icon, tone }) {
  return (
    <article className={`${tone} rounded-[16px] border border-[#edf0f4] px-3.5 py-3 shadow-[0_10px_22px_rgba(15,23,42,0.04)]`}>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
          <img src={icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#101828] lg:text-[19px]">
            {title}
          </h3>
          <p className="mt-1 text-[11px] leading-[1.35] text-[#475467] lg:text-[12px]">{body}</p>
        </div>
      </div>
    </article>
  )
}

function MetricCard({ value, label, icon, tone }) {
  return (
    <article className={`${tone} rounded-[15px] border border-[#edf0f4] px-3.5 py-2.5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/80 shadow-[0_6px_14px_rgba(15,23,42,0.05)]">
          <img src={icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
        </div>
        <div>
          <p className="text-[16px] font-semibold leading-none tracking-[-0.03em] text-[#2f55d4] lg:text-[18px]">
            {value}
          </p>
          <p className="mt-1 text-[11px] leading-[1.25] text-[#5a67d8] lg:text-[12px]">{label}</p>
        </div>
      </div>
    </article>
  )
}

export default function PortfolioCaseStudyPopup({ isOpen, onClose, study }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/78 px-2 py-3 backdrop-blur-[3px] sm:px-4 lg:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-case-study-title"
            className="relative w-full max-w-[min(92vw,980px)] overflow-hidden rounded-[22px] bg-white p-3 shadow-[0_32px_80px_rgba(0,0,0,0.32)] sm:p-4 lg:p-5"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-[#0f172a] shadow-[0_8px_18px_rgba(15,23,42,0.12)] transition hover:scale-[1.04]"
              aria-label="Close case study popup"
            >
              <X className="h-4 w-4" strokeWidth={2.2} />
            </button>

            <div className="rounded-[16px] border border-[#dfe3ea] bg-white px-4 py-4 sm:px-5 lg:px-5 lg:py-4">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(270px,0.9fr)]">
                <div className="min-w-0">
                  <p className="inline-flex rounded-full bg-[#eef0ff] px-3 py-[7px] text-[10px] font-semibold leading-none text-[#5563dd]">
                    Case Study
                  </p>

                  <h2
                    id="portfolio-case-study-title"
                    className="mt-2.5 text-[24px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#101828] sm:text-[32px] lg:text-[42px]"
                  >
                    {study.popupTitle}
                  </h2>

                  <p className="mt-2 text-[12px] font-medium text-[#101828]">Pune</p>
                  <p className="mt-1.5 border-b border-[#e5e7eb] pb-2.5 text-[12px] font-semibold leading-[1.4] text-[#101828] sm:text-[13px]">
                    Client&apos;s Industry: <span className="text-[#f45328]">EdTech Brand | Pune</span>
                  </p>

                  <div className="relative mt-3 overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#fbfbff_0%,#f7f8fc_100%)] px-4 pb-3.5 pt-3.5">
                    <div className="pointer-events-none absolute left-[-10%] top-[5%] h-[135px] w-[135px] rounded-full bg-[radial-gradient(circle,rgba(219,228,255,0.95)_0%,rgba(219,228,255,0)_72%)]" />
                    <div className="pointer-events-none absolute bottom-[-12%] right-[8%] h-[145px] w-[145px] rounded-full bg-[radial-gradient(circle,rgba(235,227,255,0.95)_0%,rgba(235,227,255,0)_72%)]" />
                    <div className="relative mx-auto max-w-[225px] sm:max-w-[250px] lg:max-w-[275px]">
                      <img
                        src="/images/portfolio/pop-up/pop-up-brand.webp"
                        alt={`${study.popupTitle} case study preview`}
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-2.5">
                  {infoCards.map((card) => (
                    <DetailCard key={card.title} {...card} />
                  ))}
                </div>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div>
                  <div className="mb-1.5 flex items-center gap-3">
                    <span className="h-px flex-1 bg-[#d8dde6]" />
                    <p className="text-[15px] font-semibold text-[#101828]">Results</p>
                    <span className="h-px flex-1 bg-[#d8dde6]" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {metrics.map((metric) => (
                      <MetricCard key={metric.label} {...metric} />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 flex items-center gap-3">
                    <span className="h-px flex-1 bg-[#d8dde6]" />
                    <p className="text-[15px] font-semibold text-[#101828]">Impact</p>
                    <span className="h-px flex-1 bg-[#d8dde6]" />
                  </div>

                  <article className="rounded-[15px] border border-[#edf0f4] bg-[#fbfcfe] px-3.5 py-2.5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4f0ff_0%,#fff4eb_100%)]">
                        <img
                          src="/images/portfolio/pop-up/system.webp"
                          alt=""
                          aria-hidden="true"
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                      <p className="max-w-[28ch] text-[11px] leading-[1.35] text-[#475467] lg:text-[13px]">
                        Scalable, consistent lead generation system
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 rounded-[16px] border border-[#f2d4c8] bg-[#fffaf8] px-4 py-3 sm:px-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_6px_14px_rgba(15,23,42,0.06)]">
                    <img
                      src="/images/portfolio/pop-up/dashboard-portfolio.webp"
                      alt=""
                      aria-hidden="true"
                      className="h-4.5 w-4.5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold leading-[1.3] text-[#101828] lg:text-[16px]">
                      Want similar results for your business?
                    </p>
                    <p className="mt-1 text-[11px] leading-[1.35] text-[#667085] lg:text-[13px]">
                      Let&apos;s build a growth system that delivers.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#f45328] px-5 text-[12px] font-semibold text-white shadow-[0_12px_24px_rgba(244,83,40,0.25)] transition hover:scale-[1.02] hover:bg-[#e24a21] lg:min-w-[190px]"
                >
                  Book a Free Strategy Call
                </button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
