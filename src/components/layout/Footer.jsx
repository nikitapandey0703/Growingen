import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
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
      className="h-[72px] w-auto object-contain sm:h-[82px]"
    />
  ) : (
    <div className="flex h-[72px] w-[204px] items-center justify-center rounded-xl border border-border bg-white px-3 sm:h-[82px] sm:w-[224px]">
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
      className="h-[180px] w-auto object-contain sm:h-[210px]"
    />
  ) : (
    <div className="flex h-[180px] w-[150px] items-center justify-center rounded-[28px] border border-dashed border-border bg-surface text-center sm:h-[210px] sm:w-[176px]">
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
    <footer className="mt-16 w-full">
      <div className="w-full overflow-hidden border border-[#f5d9d2] bg-[#fff8f6]">
        <div className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-9 lg:px-10 lg:py-10 xl:grid-cols-[290px_minmax(0,1fr)] xl:pr-14">
          <div className="flex flex-col items-start justify-between gap-6 lg:border-r lg:border-[#7f706b] lg:pr-9">
            <FooterLogo logoSrc={logoSrc} />
            <div className="w-full">
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

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_190px] lg:gap-10 lg:pr-6 lg:pb-2">
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
                        className="transition-colors duration-200 hover:text-[var(--color-nav-highlight)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-text">Let&apos;s Connect</h3>
                <div className="mt-4 flex items-center gap-2.5 lg:justify-start">
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center text-[#0a66c2] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <FaLinkedinIn size={15} />
                  </a>
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center text-[#1877f2] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <FaFacebookF size={15} />
                  </a>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center text-[#e4405f] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <FaInstagram size={15} />
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
