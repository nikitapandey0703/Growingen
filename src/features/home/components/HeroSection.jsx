import { ArrowRight } from 'lucide-react'

function HeroVisual() {
  return (
    <div className="relative ml-auto flex w-full max-w-[640px] items-center justify-center lg:justify-end lg:pr-0">
      <div className="relative flex h-[320px] w-full max-w-[530px] items-center justify-center lg:h-[395px] lg:max-w-[575px]">
        <img
          src="/images/hero/hero-main.png"
          alt="Growingen digital services hero"
          className="relative z-10 h-[300px] w-auto max-w-[105%] object-contain drop-shadow-[0_22px_38px_rgba(15,23,42,0.12)] sm:h-[350px] lg:h-[382px] lg:max-w-none"
        />

        <div className="absolute left-[56.6%] top-[50.5%] z-20 w-[20%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[0.3rem] border border-[#1b1b1b] bg-black shadow-[0_8px_18px_rgba(15,23,42,0.24)] lg:w-[17.5%]">
          <img
            src="/images/hero/hero-secondary.png"
            alt="Laptop screen analytics visual"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute left-[22%] top-[56%] h-[240px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.24)_0%,rgba(255,171,144,0.1)_36%,rgba(255,171,144,0)_74%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1360px] px-4 pb-10 pt-10 sm:px-6 lg:px-10 xl:px-12 lg:pb-12">
        <div className="grid items-center gap-10 lg:min-h-[calc(100vh-185px)] lg:grid-cols-[470px_minmax(400px,1fr)] lg:gap-12 lg:pt-0">
          <div className="max-w-[470px] pt-2 lg:pt-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#2f2f2f] sm:text-[12px]">
              Welcome to Growingen Solutions
            </p>

            <h1 className="mt-3 w-full text-[2.55rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[#101010] sm:text-[3.15rem] lg:text-[60px]">
              <span className="block whitespace-nowrap">Elevate Your Digital</span>
              <span className="block whitespace-nowrap">
                Footprint with{' '}
                <span className="hero-highlight">
                  Growingen
                  <span aria-hidden="true" className="hero-highlight__line" />
                </span>
              </span>
            </h1>

            <p className="mt-4 max-w-[49ch] text-[13px] font-normal leading-[1.7] tracking-normal text-[#4f4f4f] sm:text-[14px]">
              Powering brands through strategic SEO-driven digital marketing,
              bespoke web development, and innovative application design.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#3b2fd3_0%,#2d5cf6_58%,#18c5ac_100%)] px-6 py-2.5 text-[13px] font-medium text-white shadow-[0_18px_35px_rgba(38,74,177,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span>Start the Journey</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/18">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>

          <HeroVisual />
        </div>

      </div>
    </section>
  )
}
