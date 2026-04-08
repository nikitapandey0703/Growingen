import { Link } from 'react-router-dom'

const serviceLinks = [
  'MERN Development',
  'UI/UX Design',
  'Growth Marketing',
  'Custom Web Experiences',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
]

function FooterLogo({ logoSrc }) {
  return logoSrc ? (
    <img
      src={logoSrc}
      alt="GrowGen Solutions"
      className="h-[82px] w-auto object-contain sm:h-[92px] lg:h-[98px]"
    />
  ) : (
    <div className="flex h-[82px] w-[220px] items-center justify-center rounded-xl border border-border bg-white px-3 sm:h-[92px] sm:w-[244px] lg:h-[98px] lg:w-[256px]">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
        Logo Placeholder
      </span>
    </div>
  )
}

function FooterIllustration({ imageSrc }) {
  return imageSrc ? (
    <img
      src={imageSrc}
      alt="Footer illustration"
      className="h-[200px] w-auto object-contain sm:h-[230px] lg:h-[250px]"
    />
  ) : (
    <div className="flex h-[200px] w-[165px] items-center justify-center rounded-[28px] border border-dashed border-border bg-surface text-center sm:h-[230px] sm:w-[188px] lg:h-[250px] lg:w-[205px]">
      <span className="px-4 text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
        Character Image
      </span>
    </div>
  )
}

export default function Footer({
  logoSrc = '/images/hero/logo.png',
  illustrationSrc = '/images/banners/footer-character.png',
}) {
  return (
    <footer className="mt-20 w-full lg:mt-24">
      <div className="w-full overflow-hidden rounded-[2rem] border border-white/50 bg-white/28 backdrop-blur-sm">
        <div className="grid gap-8 px-5 py-8 sm:px-8 md:gap-10 md:px-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:px-10 lg:py-10 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-10 xl:pr-14">
          <div className="grid grid-cols-2 items-center gap-5 sm:gap-6 lg:flex lg:flex-col lg:items-start lg:border-r lg:border-[#7f706b] lg:pr-9">
            <div className="flex justify-start sm:justify-center lg:justify-start">
              <FooterLogo logoSrc={logoSrc} />
            </div>
            <div className="flex w-full justify-end sm:justify-center lg:justify-start">
              <FooterIllustration imageSrc={illustrationSrc} />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pb-4">
            <div className="pb-6 lg:border-b lg:border-[#7f706b]">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text">
                We are Global Digital Brand.
              </h2>

              <div className="mt-5 flex flex-col gap-4 text-sm text-text-muted">
                <div className="flex items-start gap-3">
                  <img
                    src="/icons/gmail.png"
                    alt=""
                    className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-medium leading-none text-[#4b4b4b]">
                      Send Us Mail
                    </span>
                    <span className="text-[13px] leading-none text-text">
                      connect@growingen.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="/icons/whatsapp.png"
                    alt=""
                    className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                  />
                  <span className="text-[13px] leading-none text-text">
                    +91 86 2591 2593
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_210px] lg:gap-10 lg:pr-6 lg:pb-2">
              <div>
                <h3 className="text-[18px] font-semibold text-text">Services</h3>
                <ul className="mt-4 space-y-2 text-sm text-text-muted">
                  {serviceLinks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-text">Quick Links</h3>
                <ul className="mt-4 space-y-2 text-sm text-text-muted">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="footer-link inline-flex items-center"
                      >
                        <span className="footer-link__text">{item.label}</span>
                        <span aria-hidden="true" className="footer-link__line" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-[18px] font-semibold text-text">Let&apos;s Connect</h3>
                <div className="mt-4 flex items-center gap-2.5 lg:justify-start">
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src="/icons/linkedin.png"
                      alt=""
                      className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
                    />
                  </a>
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src="/icons/facebook.png"
                      alt=""
                      className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src="/icons/social.png"
                      alt=""
                      className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
