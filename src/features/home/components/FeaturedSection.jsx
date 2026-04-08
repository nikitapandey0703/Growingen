import { useState } from 'react'

const cards = [
  {
    title: 'Optimizing Speed for your webpages',
    imageSrc: '/images/featured/card-1.png',
    badgeClassName: 'bg-[#eef1f9] text-[#97a1b7]',
  },
  {
    title: 'Integrated Digital Strategy',
    imageSrc: '/images/featured/card-2.png',
    badgeClassName: 'bg-[#eef1f9] text-[#97a1b7]',
  },
  {
    title: 'Custom Web Platform Engineering',
    imageSrc: '/images/featured/card-3.png',
    badgeClassName: 'bg-[#eef1f9] text-[#97a1b7]',
  },
]

const tickerItems = ['25+ BRANDS', '22+ HAPPY PARTNERS', '15+ YEARS EXPERIENCE']

function FeatureArt({ imageSrc }) {
  return (
    <div className="relative h-[156px] w-full overflow-hidden rounded-[12px] border border-[#dde7fb] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] sm:h-[170px] lg:h-[180px]">
      <img
        src={imageSrc}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

function FeatureCard({ title, imageSrc, badgeClassName, isActive, onSelect }) {
  return (
    <article
      className={[
        'relative flex h-[248px] cursor-pointer flex-col rounded-[18px] border bg-white/96 px-4 pb-7 pt-4 shadow-[0_18px_34px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-[box-shadow,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[270px] lg:h-[282px]',
        isActive
          ? 'border-[#ffd7cc] shadow-[0_22px_38px_rgba(15,23,42,0.14)]'
          : 'border-white/85',
      ].join(' ')}
      onClick={onSelect}
    >
      <FeatureArt imageSrc={imageSrc} />
      <div className="flex flex-1 items-start justify-center px-1 pb-2 pt-3 text-center">
        <h3 className="max-w-[12ch] text-[11.5px] font-medium leading-[1.22] tracking-[-0.01em] text-[#111827] sm:text-[12px]">
          {title}
        </h3>
      </div>
      <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
        <span
          className={[
            `inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/90 shadow-[0_8px_16px_rgba(15,23,42,0.1)] transition-[transform,background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${badgeClassName}`,
            isActive ? 'featured-card-badge-active bg-[#ff6a3d] text-white' : '',
          ].join(' ')}
        >
          <span className="h-3 w-3 rounded-full border border-current/80" />
        </span>
      </div>
    </article>
  )
}

export default function FeaturedSection() {
  const [activeCard, setActiveCard] = useState(1)

  return (
    <section className="relative overflow-hidden bg-transparent pb-16 pt-2 sm:pt-4 lg:pb-20">
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#111827] sm:text-[42px] lg:text-[58px]">
            We Provide The Best Service
            <br />
            With{' '}
            <span className="featured-highlight">
              Our Tools
              <span aria-hidden="true" className="featured-highlight__line" />
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[980px] items-start justify-center gap-4 lg:gap-4.5">
          {cards.map((card, index) => (
            <div key={card.title} className="w-[190px] sm:w-[206px] lg:w-[214px]">
              <FeatureCard
                {...card}
                isActive={activeCard === index}
                onSelect={() => setActiveCard(index)}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex items-center gap-1.5">
            {cards.map((card, index) => (
              <button
                key={card.title}
                type="button"
                aria-label={`Show ${card.title}`}
                onClick={() => setActiveCard(index)}
                className={[
                  'featured-indicator',
                  activeCard === index ? 'featured-indicator-active' : '',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="featured-ticker mt-12">
        <div className="featured-ticker__viewport">
          <div className="featured-ticker__track">
            <div className="featured-ticker__group">
              {tickerItems.map((item) => (
                <div key={item} className="featured-ticker__item">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
