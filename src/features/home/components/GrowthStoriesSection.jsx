import { Play } from 'lucide-react'
import { useRef, useState } from 'react'
import Button from '../../../components/common/Button'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import ScrollStack, { ScrollStackItem } from '../../../components/common/ScrollStack'

const solutionCards = [
  {
    id: 1,
    title: 'Growingen Solutions',
    subtitle: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/featured/card-1.png',
    videoSrc: '/icons/growingen.mp4',
  },
  {
    id: 2,
    title: 'Growingen Solutions',
    subtitle: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/featured/card-2.png',
    videoSrc: '/icons/growingen.mp4',
  },
  {
    id: 3,
    title: 'Growingen Solutions',
    subtitle: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/featured/card-3.png',
    videoSrc: '/icons/growingen.mp4',
  },
]

function SolutionPreviewCard({ card }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleStartJourney = () => {
    document.getElementById('home')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handlePlayVideo = async () => {
    setIsPlaying(true)

    if (!videoRef.current) {
      return
    }

    try {
      await videoRef.current.play()
    } catch (error) {
      console.error('Preview video could not start:', error)
    }
  }

  return (
    <ScrollStackItem itemClassName="border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_100%)]">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_clamp(220px,28vw,270px)] md:items-center lg:gap-10">
        {/* LEFT CONTENT */}
        <div className="growth-stories-card-copy flex w-full flex-col items-start gap-3 px-1 pt-[2px] sm:px-3">
          <h2 className="w-full font-[var(--font-heading)] text-[36px] font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-[50px] capitalize">
            {card.title.split(' ').slice(0, -1).join(' ')} <br />
            {card.title.split(' ').slice(-1)}
          </h2>
          <p className="max-w-[26ch] text-[18px] font-semibold leading-[1.28] text-black sm:text-[20px]">
            {card.subtitle}
          </p>
          <p className="max-w-[40ch] text-[14px] font-medium leading-[1.55] text-black">
            {card.description}
          </p>
          <Button
            size="sm"
            className="mt-4 min-h-[40px] pl-5 pr-[52px] text-[12px] font-semibold"
            onClick={handleStartJourney}
          >
            {card.buttonLabel}
          </Button>
        </div>

        {/* REEL PREVIEW */}
        <div className="relative mx-auto aspect-[0.64/1] w-full max-w-[250px] overflow-hidden rounded-[28px] bg-[#06131d] shadow-[0_16px_32px_rgba(4,8,15,0.24)]">
          {!isPlaying ? (
            <img
              src={card.previewImageSrc}
              alt={`${card.title} reel preview`}
              className="h-full w-full object-cover"
            />
          ) : null}

          <video
            ref={videoRef}
            src={card.videoSrc}
            poster={card.previewImageSrc}
            playsInline
            muted
            loop
            preload="metadata"
            className={[
              'h-full w-full object-cover transition-opacity duration-300',
              isPlaying ? 'opacity-100' : 'absolute inset-0 opacity-0',
            ].join(' ')}
          />

          {!isPlaying ? (
            <button
              type="button"
              onClick={handlePlayVideo}
              aria-label={`Play ${card.title} reel`}
              className="absolute left-1/2 top-1/2 z-20 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/75 shadow-[0_10px_24px_rgba(15,23,42,0.2)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
            >
              <Play size={18} fill="#111827" className="ml-1 text-[#111827]" />
            </button>
          ) : null}
        </div>
      </div>
    </ScrollStackItem>
  )
}

export default function GrowthStoriesSection() {
  return (
    // 🔥 Standardized Wrapper: Uniform padding applied here
    <section className="relative overflow-visible bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[16%] top-[18%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(102,145,255,0.18)_0%,transparent_70%)] blur-3xl" />

      {/* 🔥 Removed extra horizontal paddings (px) from here so it relies on the section wrapper */}
      <div className="relative mx-auto max-w-[1120px]">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-2 max-w-[620px] text-center sm:mb-3">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827]">
            Smart Solutions For
            <br />
            Growing{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
              Brands
            </CurvedUnderlineText>
          </h2>
        </div>
      </div>

      {/* STACK */}
      <div className="relative mx-auto mt-5 max-w-[1030px] sm:mt-6 lg:mt-8">
        <ScrollStack
          useWindowScroll
          itemDistance={90}
          itemScale={0.04}
          itemStackDistance={28}
          stackPosition="20%"
          scaleEndPosition="12%"
          baseScale={0.94}
          className="mx-auto max-w-[1030px]"
        >
          {solutionCards.map((card) => (
            <SolutionPreviewCard key={card.id} card={card} />
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}
