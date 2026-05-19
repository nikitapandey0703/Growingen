import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import HeroYellowUnderlineText from '../../../components/common/HeroYellowUnderlineText'

const heroDashboards = [
  {
    src: '/images/hero/frame-1.webp',
    className:
      'absolute z-10 left-[6%] top-[15%] w-[clamp(96px,22vw,138px)] sm:left-[7%] sm:top-[13%] sm:w-[clamp(112px,21vw,156px)] md:left-[6%] md:top-[12%] md:w-[clamp(120px,19vw,166px)] lg:left-[10%] lg:top-[14%] lg:w-[clamp(128px,15vw,180px)] xl:left-[8%] xl:top-[13%] xl:w-[clamp(138px,14vw,195px)] 2xl:left-[6%] 2xl:top-[11%] 2xl:w-[220px]',
    floatClassName: 'hero-float',
  },
  {
    src: '/images/hero/frame-2.webp',
    className:
      'absolute z-30 bottom-[8%] left-[-2%] w-[clamp(128px,34vw,208px)] sm:bottom-[6%] sm:left-[-2%] sm:w-[clamp(148px,33vw,228px)] md:bottom-[4%] md:left-[-3%] md:w-[clamp(166px,31vw,248px)] lg:bottom-[4%] lg:left-[-4%] lg:w-[clamp(190px,25vw,290px)] xl:bottom-[-12%] xl:left-[-10%] xl:w-[clamp(205px,23vw,315px)] 2xl:bottom-[-2%] 2xl:left-[-5%] 2xl:w-[350px]',
    floatClassName: 'hero-float hero-float-delay-1',
  },
  {
    src: '/images/hero/frame-4.webp',
    className:
      'absolute z-15 right-[6%] top-[12%] w-[clamp(102px,23vw,142px)] sm:right-[7%] sm:top-[10%] sm:w-[clamp(118px,22vw,162px)] md:right-[6%] md:top-[10%] md:w-[clamp(126px,20vw,172px)] lg:right-[8%] lg:top-[12%] lg:w-[clamp(138px,15vw,188px)] xl:right-[0%] xl:top-[10%] xl:w-[clamp(148px,14vw,205px)] 2xl:right-[5%] 2xl:top-[8%] 2xl:w-[230px]',
    floatClassName: 'hero-float hero-float-delay-2',
  },
  {
    src: '/images/hero/Frame-5.webp',
    className:
      'absolute z-30 bottom-[9%] right-[-2%] w-[clamp(136px,35vw,214px)] sm:bottom-[7%] sm:right-[-1%] sm:w-[clamp(156px,34vw,236px)] md:bottom-[4%] md:right-[-2%] md:w-[clamp(174px,31vw,256px)] lg:bottom-[-1%] lg:right-[0%] lg:w-[clamp(195px,25vw,295px)] xl:bottom-[-12%]   xl:right-[-12%] xl:w-[clamp(212px,23vw,320px)] 2xl:bottom-[-8%] 2xl:right-[-2%] 2xl:w-[360px]',
    floatClassName: 'hero-float hero-float-delay-3',
  },
]

function HeroVisual() {
  return (
    <div className="hero-visual-reveal relative mx-auto mt-6 flex w-full max-w-[360px] items-center justify-center sm:mt-8 sm:max-w-[460px] md:mt-10 md:max-w-[540px] lg:-mt-6 lg:ml-auto lg:max-w-[560px] lg:justify-end xl:-mt-8 xl:max-w-[620px] 2xl:-mt-6 2xl:max-w-[780px]">
      <div className="hero-stage relative flex aspect-[1/1.04] w-full max-w-[340px] items-center justify-center sm:aspect-[1.02/1] sm:max-w-[440px] md:aspect-[1.04/1] md:max-w-[500px] lg:aspect-[4/3.22] lg:max-w-[530px] xl:aspect-[4/3.1] xl:max-w-[590px] 2xl:max-w-[760px]">
        <div className="hero-stage__glow" aria-hidden="true" />
        <div className="hero-stage__sheen" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--primary" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--secondary" aria-hidden="true" />

        <img
          src="/images/hero/girl-main.webp"
          alt="Growingen hero illustration"
          className="pointer-events-none absolute z-20 h-[94%] w-auto max-w-none object-contain scale-[0.93] sm:h-[96%] sm:scale-[0.97] md:h-[98%] md:scale-100 lg:h-full lg:scale-[1.05] xl:scale-[1.08] 2xl:scale-[1.12]"
        />

        {heroDashboards.map((dashboard) => (
          <div key={dashboard.src} className={dashboard.className}>
            <img
              src={dashboard.src}
              alt=""
              aria-hidden="true"
              className={`${dashboard.floatClassName} dashboard-hover block w-full`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="hero-section relative overflow-hidden bg-transparent section-spacing pt-4 pb-10 sm:pt-6 sm:pb-12 md:pt-8 md:pb-14 lg:pt-3 lg:pb-10 xl:pt-2 xl:pb-10 2xl:pt-6 2xl:pb-14">
      <div className="hero-section__ambient hero-section__ambient--left" aria-hidden="true" />
      <div className="hero-section__ambient hero-section__ambient--right" aria-hidden="true" />

      <div className="site-container relative">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:min-h-[calc(100vh-220px)] lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:gap-6 xl:min-h-[calc(100vh-210px)] xl:grid-cols-[minmax(0,620px)_minmax(360px,1fr)] xl:gap-8 2xl:min-h-[calc(100vh-190px)] 2xl:grid-cols-[minmax(0,740px)_minmax(470px,1fr)] 2xl:gap-12">
          <div className="relative z-40 mx-auto flex w-full max-w-[580px] flex-col items-center pt-0 text-center font-sans sm:max-w-[620px] md:max-w-[680px] md:pt-1 lg:mx-0 lg:max-w-[610px] lg:items-start lg:justify-start lg:text-left xl:max-w-[660px] 2xl:max-w-[760px]">
            <p
              className="hero-copy-reveal hero-copy-reveal--1 font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] md:tracking-[0.18em] 2xl:tracking-[0.2em]"
              style={{ fontSize: 'var(--fs-hero-subtitle)' }}
            >
              Welcome to Growingen Solutions
            </p>

            <h1
              className="hero-copy-reveal hero-copy-reveal--2 mt-4 w-full max-w-[15ch] font-bold leading-[1.04] tracking-[-0.05em] sm:mt-5 sm:max-w-[15.5ch] md:max-w-[16ch] md:leading-[1.02] lg:max-w-[22ch] xl:max-w-[23ch] 2xl:mt-6 2xl:max-w-[24ch]"
              style={{ fontSize: 'var(--fs-hero-title)' }}
            >
              <span className="block whitespace-nowrap md:whitespace-normal lg:whitespace-nowrap">Elevate Your Digital</span>
              <span className="mt-2 block  sm:mt-1 md:mt-2 lg:mt-1">
                Footprint with{' '}
<HeroYellowUnderlineText
  className="hero-highlight inline-block pb-[0.22em]"
  lineClassName="-bottom-[0.06em] left-0 h-[0.22em] w-full"
>                <span className="moving-gradient">Growingen</span>
                </HeroYellowUnderlineText>
              </span>
            </h1>

            <p
              className="hero-copy-reveal hero-copy-reveal--3 mx-auto mt-5 max-w-[34ch] font-medium leading-[1.68] tracking-normal sm:mt-6 sm:max-w-[42ch] md:max-w-[48ch] lg:mx-0 lg:max-w-[52ch] xl:max-w-[56ch] 2xl:mt-7 2xl:max-w-[58ch]"
              style={{ fontSize: 'var(--fs-hero-subtitle)' }}
            >
              <span className="block sm:inline">
              At Growingen Solutions, we help brands grow through SEO-driven marketing, paid ads, lead generation, custom websites, and innovative app solutions.
              </span>
            </p>

            <div className="hero-copy-reveal hero-copy-reveal--4 mt-5 flex w-full flex-wrap items-center justify-center gap-2 sm:mt-6 md:mt-7 lg:mt-7 lg:justify-start xl:mt-4 2xl:mt-9">
              <Link to="/contact" className="inline-flex">
                <Button size="hero">Start the Journey</Button>
              </Link>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
