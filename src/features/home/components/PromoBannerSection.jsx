import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { Megaphone } from 'lucide-react'

const stackedPromoCards =[
  {
    id: 'campaigns',
    stat: '200+',
    label: 'Campaigns Delivered',
    detailPrimary: 'Successful Digital',
    detailSecondary: 'Campaigns Delivered',
    theme: 'orange',
  },
  {
    id: 'campaigns-alt',
    stat: '200+',
    label: 'Campaigns Delivered',
    detailPrimary: 'Successful Digital',
    detailSecondary: 'Campaigns Delivered',
    theme: 'white',
  },
  {
    id: 'campaigns-alt-2',
    stat: '200+',
    label: 'Campaigns Delivered',
    detailPrimary: 'Successful Digital',
    detailSecondary: 'Campaigns Delivered',
    theme: 'orange',
  },
]

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y,[-100, 100], [16, -16])
  const rotateY = useTransform(x, [-100, 100], [-16, 16])

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.55}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  )
}

function PromoStack({
  sensitivity = 110,
  animationConfig = { stiffness: 260, damping: 22 },
  autoplay = true,
  autoplayDelay = 1800,
  pauseOnHover = true,
  mobileClickOnly = true,
  mobileBreakpoint = 768,
}) {
  const[isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [stack, setStack] = useState(stackedPromoCards)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [mobileBreakpoint])

  const shouldDisableDrag = mobileClickOnly && isMobile
  const shouldEnableClick = shouldDisableDrag

  const sendToBack = (id) => {
    setStack((prev) => {
      const next = [...prev]
      const index = next.findIndex((card) => card.id === id)

      if (index === -1) {
        return prev
      }

      const [card] = next.splice(index, 1)
      next.unshift(card)
      return next
    })
  }

  useEffect(() => {
    if (!autoplay || stack.length <= 1 || isPaused) {
      return undefined
    }

    const interval = window.setInterval(() => {
      const topCardId = stack[stack.length - 1].id
      sendToBack(topCardId)
    }, autoplayDelay)

    return () => window.clearInterval(interval)
  }, [autoplay, autoplayDelay, stack, isPaused])

  return (
    <div
      className="relative h-[272px] w-[246px] sm:h-[312px] sm:w-[286px]"
      style={{ perspective: 700 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => (
        <CardRotate
          key={card.id}
          onSendToBack={() => sendToBack(card.id)}
          sensitivity={sensitivity}
          disableDrag={shouldDisableDrag}
        >
          <motion.div
            className={[
              'flex h-full w-full flex-col rounded-[24px] p-7 shadow-[0_24px_44px_rgba(15,23,42,0.2)]',
              card.theme === 'white'
                ? 'border border-[#f3f3f3] bg-white text-[#111111] shadow-[0_22px_44px_rgba(255,255,255,0.2)]'
                : 'bg-[#ff5b2e] text-white shadow-[0_22px_40px_rgba(255,91,46,0.32)]',
            ].join(' ')}
            onClick={() => shouldEnableClick && sendToBack(card.id)}
            animate={{
              rotateZ:[-3.5, 4.75, -8][index] ?? -4,
              scale:[0.91, 0.96, 1][index] ?? 1,
              x: [20, 10, 0][index] ?? 0,
              y: [7, 2, -4][index] ?? 0,
              transformOrigin: '18% 84%',
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: animationConfig.stiffness,
              damping: animationConfig.damping,
            }}
          >
            <div>
              <p className="text-[52px] font-semibold leading-none tracking-[-0.06em] sm:text-[58px]">
                {card.stat}
              </p>
              <p
                className={[
                  'mt-3 max-w-[11ch] text-[13px] font-medium leading-[1.2] tracking-[-0.03em]',
                  card.theme === 'white' ? 'text-[#111111]' : 'text-white/95',
                ].join(' ')}
              >
                {card.label}
              </p>
            </div>

            <div
              className={[
                'mt-5 h-px w-[84%]',
                card.theme === 'white' ? 'bg-[#111111]/14' : 'bg-white/38',
              ].join(' ')}
            />

            <div className="mt-6">
              <p
                className={[
                  'text-[13px] leading-[1.3]',
                  card.theme === 'white' ? 'text-[#111111]/82' : 'text-white/88',
                ].join(' ')}
              >
                {card.detailPrimary}
              </p>
              <p
                className={[
                  'text-[13px] leading-[1.3]',
                  card.theme === 'white' ? 'text-[#111111]/82' : 'text-white/88',
                ].join(' ')}
              >
                {card.detailSecondary}
              </p>
            </div>

            <div className="mt-auto flex justify-center pt-7">
              <Megaphone
                size={36}
                strokeWidth={1.7}
                className={card.theme === 'white' ? 'text-[#111111]' : 'text-white'}
              />
            </div>
          </motion.div>
        </CardRotate>
      ))}
    </div>
  )
}

function ServicePromoBanner() {
  return (
        <section className="relative flex w-full flex-col justify-center overflow-hidden bg-[linear-gradient(90deg,#2d2fd3_0%,#2576cf_48%,#13c6a7_100%)] py-12 lg:h-[360px] lg:py-0">
      
      {/* Inline styles for the SVG drawing animation */}
      <style>
        {`
          @keyframes drawEllipse {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-draw-ellipse {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: drawEllipse 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
          }
        `}
      </style>

      {/* Improved Watermark: Extreme right, strict white stroke, and white glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-1/2 hidden -translate-y-1/2 text-[160px] font-bold tracking-[0.05em] text-transparent [-webkit-text-stroke:2px_#ffffff] [text-shadow:0_0_35px_rgba(255,255,255,0.4)] lg:block xl:-right-[5%] xl:text-[240px]"
      >
        BRAND
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          
          {/* Left Text Content */}
          <div className="max-w-[650px]">
            <h1 className="text-[32px] font-bold leading-[1.18] tracking-tight text-white sm:text-[40px] lg:text-[50px]">
              Why Most{' '}
              <span className="relative inline-block whitespace-nowrap text-white">
                <span className="relative z-10 text-white">Brands Fail</span>
                
                {/* Hand-drawn yellow ellipse SVG with drawing animation */}
                <svg
                  className="absolute -bottom-2 -left-4 -right-4 -top-1 z-0 h-[130%] w-[120%] text-[#FBBF24]"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 12 25 C 5 15 18 4 50 4 C 82 4 95 15 95 22 C 95 30 75 36 50 36 C 25 36 10 30 15 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    pathLength="100"
                    className="animate-draw-ellipse"
                  />
                </svg>
              </span>{' '}
              —
              <br />
              And How We Fix It
            </h1>

            <p className="mt-5 max-w-[55ch] text-[14px] font-normal leading-[1.65] text-white/90 sm:text-[15px] lg:text-[16px]">
              Most businesses invest in marketing... but ignore branding. <br className="hidden sm:block" />
              They run ads, post content, build websites yet struggle to stand out.
            </p>
            
            <p className="mt-6 max-w-[50ch] text-[15px] font-semibold leading-[1.55] text-white sm:text-[16px] lg:text-[17px]">
              Branding isn&apos;t an expense. It&apos;s the foundation <br className="hidden sm:block" />
              of everything that follows.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:mx-0 lg:max-w-[520px] lg:justify-end lg:pr-6 xl:max-w-[580px] xl:pr-10">
            <img
              src="/images/service/service-banner.webp"
              alt="Ant standing on an elephant to represent brand pressure and positioning"
              className="relative z-10 max-h-[280px] w-full object-contain drop-shadow-[0_24px_35px_rgba(15,23,42,0.25)] lg:max-h-[340px]"
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default function PromoBannerSection({ variant = 'default' }) {
  if (variant === 'service') {
    return <ServicePromoBanner />
  }

  return (
    // 🔥 Standardized Wrapper: Uniform padding applied here
    <section className="relative overflow-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-[1060px]">
        <div className="mx-auto w-full max-w-[1020px]">
          <div className="relative flex flex-col gap-6 md:min-h-[326px] md:justify-center">
            <div className="relative z-20 mx-auto md:absolute md:left-[20px] md:top-1/2 md:mx-0 md:-translate-y-1/2">
              <PromoStack />
            </div>

            <div
              className="relative overflow-hidden rounded-[28px] bg-[#0b0b0b] px-6 py-8 text-white shadow-[0_24px_44px_rgba(15,23,42,0.18)] sm:px-8 sm:py-9 md:ml-[154px] md:pl-[280px] md:pr-12 md:py-10"
              style={{ fontFamily: 'Visby', color: '#ffffff' }}
            >
              <div className="pointer-events-none absolute right-[-30px] top-[-24px] h-[136px] w-[136px] rounded-full bg-[radial-gradient(circle,rgba(255,114,74,0.16)_0%,rgba(255,114,74,0.04)_48%,rgba(255,114,74,0)_76%)] blur-2xl" />

              <div className="relative max-w-[620px]">
                <h2
                  className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[40px] lg:text-[50px]"
                  style={{ color: '#ffffff' }}
                >
                  Ready to Elevate Your
                  <br />
                  Digital Presence?
                </h2>
                <p
                  className="mt-3 max-w-[44ch] text-[14px] leading-[1.55] sm:text-[15px]"
                  style={{ color: '#ffffff', marginTop: '0.5rem' }}
                >
                  Unlock The Power Of Cutting-Edge Digital Strategies With Boostip.
                  Whether You Need A Stunning Website, A Winning Social Media Campaign,
                  Or SEO That Drives Results, We&apos;ve Got You Covered.
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex h-[42px] items-center justify-center rounded-[8px] bg-[#ff5b2e] px-6 text-[15px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
                >
                  Book A Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
