import { Play, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Button from '../../../components/common/Button'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import ScrollStack, { ScrollStackItem } from '../../../components/common/ScrollStack'

const solutionCards = [
  {
    id: 1,
    title: 'The Power of Social SEO',
    subtitle: 'Stop Guessing, Start Answering',
    description:
      'Why traditional hashtags like #MarketingStrategy are becoming less effective. People are now searching for direct solutions to their specific problems rather than browsing broad categories. By using "Social SEO"—writing captions that match the exact questions people ask—you can ensure your content appears right when they need it most.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/hero/social-seo-thumbnail.png',
    videoSrc: '/videos/social-seo-video.webm',
  },
  {
    id: 2,
    title: 'Why Saves Matter More Than Likes',
    subtitle: 'Prioritising "Saves" Over "Likes"',
    description:
      'While a "like" is a brief nod of approval, a "save" represents a long-term commitment to a piece of content. To drive real impact, focus on creating a "reference library" of blueprints, checklists, and guides that offer lasting utility. Content reaches its highest value when it is useful enough to be revisited later. By prioritising practical resources over fleeting interactions, a feed becomes an essential tool for its audience.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/hero/saves-matter-thumbnail.png',
    videoSrc: '/videos/saves-matter-video.webm',
  },
  {
    id: 3,
    title: 'The Power of the Human Glitch',
    subtitle: 'Authenticity Over Perfection',
    description:
      'In an era of highly polished AI content, perfection can often feel robotic or untrustworthy. Real connection is built through "human glitches"—the raw, unedited moments like a simple stutter or a coffee stain that show personality. Keeping audio and visuals authentic makes a brand feel more relatable and grounded. The goal is to move away from cold logos and lean into the messy, genuine traits that make people want to connect.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/hero/human-glitch-thumbnail.png',
    videoSrc: '/videos/human-glitch-video.mp4',
  },
]

function MobileVideoButton({ label = 'View', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group inline-flex h-[44px] w-[44px] items-center justify-start overflow-hidden rounded-full border-none bg-[#F45328] shadow-[2px_2px_10px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:w-[124px] hover:rounded-[40px] focus-visible:w-[124px] focus-visible:rounded-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45328]/40 focus-visible:ring-offset-2"
    >
      <span className="flex w-full flex-none items-center justify-center transition-all duration-300 ease-out group-hover:w-[30%] group-hover:pl-5 group-focus-visible:w-[30%] group-focus-visible:pl-5">
        <Play size={16} fill="white" className="ml-[1px] text-white" />
      </span>
      <span className="w-0 flex-none overflow-hidden whitespace-nowrap pr-0 text-[14px] font-semibold text-white opacity-0 transition-all duration-300 ease-out group-hover:w-[70%] group-hover:pr-3 group-hover:opacity-100 group-focus-visible:w-[70%] group-focus-visible:pr-3 group-focus-visible:opacity-100">
        {label}
      </span>
    </button>
  )
}

function SolutionPreviewCard({ card, onOpenMobileVideo }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleStartJourney = () => {
    document.getElementById('home')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleToggleVideo = async () => {
    if (!videoRef.current) return

    if (isPlaying) {
      // Pause if currently playing
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      // Play if paused
      try {
        // If it ended previously, restart it
        if (videoRef.current.currentTime === videoRef.current.duration) {
          videoRef.current.currentTime = 0
        }
        await videoRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Preview video could not start:', error)
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <ScrollStackItem itemClassName="border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_100%)]">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-[minmax(0,1fr)_clamp(220px,28vw,270px)] md:items-center lg:gap-12 2xl:grid-cols-[minmax(0,1fr)_300px] 2xl:gap-14">
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col items-start justify-center gap-3 px-1 sm:gap-4 sm:px-3 md:px-2 lg:px-6 lg:py-4 2xl:gap-5 2xl:px-8 2xl:py-6">
          <h2 className="w-full text-left font-[var(--font-heading)] text-[22px] font-semibold capitalize leading-[1.1] tracking-[-0.03em] sm:max-w-[18ch] sm:text-[26px] md:max-w-none md:text-[30px] lg:whitespace-nowrap lg:text-[36px] 2xl:text-[40px]">
            {card.title}
          </h2>
          
          <p className="w-full text-left text-[16px] font-semibold leading-[1.3] text-[#111827] sm:text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[28px]">
            {card.subtitle}
          </p>
          
          <p className="w-full max-w-[58ch] text-left text-[14px] font-medium leading-[1.65] text-[#334155] sm:text-[14px] md:text-[15px] 2xl:max-w-[60ch] 2xl:text-[18px] 2xl:leading-[1.75]">
            {card.description}
          </p>
          
          <div className="mt-2 flex w-full flex-wrap items-center gap-3 justify-start 2xl:mt-3 2xl:gap-4">
            <Button
              className="m-0 w-[198px] self-start [&>button]:h-[42px] [&>button]:w-full [&>button]:min-h-[42px] [&>button]:justify-center [&>button]:pl-5 [&>button]:pr-[56px] [&>button]:text-[13px] [&>button_span:last-child]:h-[42px] [&>button_span:last-child]:w-[42px] sm:w-[214px] lg:w-[236px] lg:[&>button]:h-[46px] lg:[&>button]:min-h-[46px] lg:[&>button]:pl-6 lg:[&>button]:pr-[62px] lg:[&>button]:text-[14px] lg:[&>button_span:last-child]:h-[46px] lg:[&>button_span:last-child]:w-[46px] 2xl:w-[270px] 2xl:[&>button]:h-[54px] 2xl:[&>button]:min-h-[54px] 2xl:[&>button]:pl-7 2xl:[&>button]:pr-[72px] 2xl:[&>button]:text-[16px] 2xl:[&>button_span:last-child]:h-[54px] 2xl:[&>button_span:last-child]:w-[54px]"
              size="default"
              onClick={handleStartJourney}
            >
              {card.buttonLabel}
            </Button>

            <div className="md:hidden">
              <MobileVideoButton label="View" onClick={() => onOpenMobileVideo(card)} />
            </div>
          </div>
        </div>

        {/* REEL PREVIEW */}
        <div className="relative mx-auto hidden aspect-[0.64/1] w-full max-w-[250px] overflow-hidden rounded-[28px] bg-[#06131d] shadow-[0_16px_32px_rgba(4,8,15,0.24)] md:block 2xl:max-w-[300px] 2xl:rounded-[32px] 2xl:shadow-[0_20px_40px_rgba(4,8,15,0.26)]">
          {!isPlaying ? (
            <img
              src={card.previewImageSrc}
              alt={`${card.title} reel preview`}
              className="h-full w-full cursor-pointer object-cover"
              onClick={handleToggleVideo}
            />
          ) : null}

          <video
            ref={videoRef}
            src={card.videoSrc}
            poster={card.previewImageSrc}
            playsInline
            onEnded={handleVideoEnded}
            onClick={handleToggleVideo}
            preload="metadata"
            className={[
              'h-full w-full cursor-pointer object-cover transition-opacity duration-300',
              isPlaying ? 'opacity-100' : 'absolute inset-0 opacity-0',
            ].join(' ')}
          />

          {!isPlaying ? (
            <button
              type="button"
              onClick={handleToggleVideo}
              aria-label={`Play ${card.title} reel`}
              className="absolute left-1/2 top-1/2 z-20 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/75 shadow-[0_10px_24px_rgba(15,23,42,0.2)] backdrop-blur-md transition-transform duration-300 hover:scale-105 2xl:h-[66px] 2xl:w-[66px]"
            >
              <Play size={18} fill="#111827" className="ml-1 text-[#111827] 2xl:h-5 2xl:w-5" />
            </button>
          ) : null}
        </div>
      </div>
    </ScrollStackItem>
  )
}

export default function GrowthStoriesSection() {
  const [mobileVideoCard, setMobileVideoCard] = useState(null)

  useEffect(() => {
    if (!mobileVideoCard) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileVideoCard(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileVideoCard])

  return (
    <section className="section-spacing relative overflow-visible bg-transparent pb-28 sm:pb-32 lg:pb-40">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[16%] top-[18%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(102,145,255,0.18)_0%,transparent_70%)] blur-3xl" />

      <div className="site-container relative">
        <div className="section-content relative">
          {/* SECTION HEADING */}
          <div className="mx-auto mb-2 max-w-[620px] text-center sm:mb-3 2xl:max-w-[760px]">
            <h2
              className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827]"
              style={{ fontSize: 'var(--fs-section-title)' }}
            >
              Smart Solutions For
              <br />
              Growing{' '}
              <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
                Brands
              </CurvedUnderlineText>
            </h2>
          </div>

          {/* STACK */}
          <div className="relative mx-auto mt-5 max-w-[1030px] sm:mt-6 lg:mt-8 2xl:mt-10 2xl:max-w-[1180px]">
            <ScrollStack
              useWindowScroll
              itemDistance={90}
              itemScale={0.04}
              itemStackDistance={28}
              stackPosition="20%"
              scaleEndPosition="12%"
              baseScale={0.94}
              className="mx-auto max-w-[1030px] 2xl:max-w-[1180px]"
            >
              {solutionCards.map((card) => (
                <SolutionPreviewCard
                  key={card.id}
                  card={card}
                  onOpenMobileVideo={setMobileVideoCard}
                />
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>

      {mobileVideoCard ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#020617]/70 px-4 py-6 backdrop-blur-[3px] md:hidden">
          <div className="relative w-full max-w-[360px] rounded-[28px] bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.28)]">
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setMobileVideoCard(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white transition-colors duration-200 hover:bg-black/80"
            >
              <X size={18} />
            </button>

            <div className="overflow-hidden rounded-[22px] bg-[#06131d]">
              <video
                src={mobileVideoCard.videoSrc}
                poster={mobileVideoCard.previewImageSrc}
                controls
                playsInline
                autoPlay
                preload="metadata"
                className="aspect-[0.64/1] w-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
