import { useState } from 'react'

const plans = [
  {
    id: 'basic',
    name: 'Basic Small Package',
    theme: 'dark',
    price: '\u20B920000',
    originalPrice: '\u20B935000',
    description:
      'Digital Marketing Often Proves To Be More Cost-Effective Than Traditional Marketing Methods.',
    features: [
      'Social Media Management 12 Platforms',
      'Website Design and Development (Up To 10 pages)',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Package',
    theme: 'light',
    price: '\u20B920000',
    originalPrice: '\u20B935000',
    description:
      'Digital Marketing Often Proves To Be More Cost-Effective Than Traditional Marketing Methods.',
    features: [
      'Social Media Management 12 Platforms',
      'Website Design and Development (Up To 10 Pages)',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Plus Package',
    theme: 'light',
    price: '\u20B932000',
    originalPrice: '\u20B948000',
    description:
      'Digital Marketing Often Proves To Be More Cost-Effective Than Traditional Marketing Methods.',
    features: [
      'Social Media Management 20 Platforms',
      'Website Design and Development (Up To 20 Pages)',
    ],
  },
]

function PlanCard({ plan, onClick }) {
  const isDark = plan.theme === 'dark'

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'group relative h-[432px] w-full overflow-hidden rounded-[18px] border px-5 pb-6 pt-9 text-left transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isDark
          ? 'border-black bg-black text-white shadow-[0_22px_40px_rgba(15,23,42,0.16)] hover:bg-[#0c0c0c]'
          : 'border-[#cfd6df] bg-white/76 text-[#111827] shadow-[0_16px_34px_rgba(15,23,42,0.08)] hover:bg-[#fff8f4]',
      ].join(' ')}
    >
      <span
        aria-hidden="true"
        className={[
          'absolute right-[-1px] top-[-1px] h-[58px] w-[140px] rounded-bl-[16px] border-b border-l',
          isDark
            ? 'border-black bg-[var(--color-background)]'
            : 'border-[#cfd6df] bg-[var(--color-background)]',
        ].join(' ')}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div>
          <h3 className="max-w-[11ch] text-[22px] font-semibold leading-[1.12] tracking-[-0.03em]">
            {plan.name}
          </h3>

          <p
            className={[
              'mt-4 max-w-[26ch] text-[10px] leading-[1.45]',
              isDark ? 'text-white/72' : 'text-[#6d7481]',
            ].join(' ')}
          >
            {plan.description}
          </p>

          <ul className="mt-5 space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className={[
                  'flex items-start gap-2 text-[10px] leading-[1.4]',
                  isDark ? 'text-white/82' : 'text-[#2d3642]',
                ].join(' ')}
              >
                <span className="mt-[0.28rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5480]" />
                <span className="max-w-[22ch]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <p className={['text-[10px]', isDark ? 'text-white/68' : 'text-[#626b79]'].join(' ')}>
            Starting Price
          </p>
          <p className={['mt-2 text-[10px] line-through', isDark ? 'text-white/38' : 'text-[#9ca3af]'].join(' ')}>
            {plan.originalPrice}
          </p>
          <p className="mt-1 text-[44px] font-semibold leading-none tracking-[-0.04em]">
            {plan.price}
          </p>

          <span className="mt-7 inline-flex w-full items-center justify-center rounded-[4px] bg-[#ff5a2f] px-4 py-2.5 text-[11px] font-medium text-white transition-colors duration-300 group-hover:bg-[#ff6a43]">
            Get Started
          </span>
        </div>
      </div>
    </button>
  )
}

export default function CTASection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-transparent pb-18 pt-12 lg:pb-24">
      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="mx-auto mt-2 max-w-[1048px] overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(calc(-${activeIndex} * (50% + 12px)))` }}
          >
            {plans.map((plan, index) => (
              <div key={plan.id} className="shrink-0" style={{ width: 'calc(50% - 12px)' }}>
                <PlanCard plan={plan} onClick={() => setActiveIndex(index)} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-1.5">
          {plans.map((plan, index) => (
            <button
              key={plan.id}
              type="button"
              aria-label={`Show ${plan.name}`}
              onClick={() => setActiveIndex(index)}
              className={[
                'featured-indicator',
                activeIndex === index ? 'featured-indicator-active' : '',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
