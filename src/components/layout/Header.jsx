import { useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Video', href: '/video' },
  { label: 'Contact Us', href: '/contact' },
]

function LogoBlock({ logoSrc }) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center"
      aria-label="GrowGen Solutions"
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="GrowGen Solutions"
          className="h-12 w-auto object-contain sm:h-14"
        />
      ) : (
        <div className="flex h-12 w-[156px] items-center justify-center rounded-xl border border-border bg-white px-3 sm:h-14 sm:w-[172px]">
          <span className="text-sm font-semibold tracking-[0.16em] text-text-muted uppercase">
            Logo Placeholder
          </span>
        </div>
      )}
    </Link>
  )
}

function NavLinks({ onNavigate, mobile = false }) {
  return (
    <nav
      className={
        mobile
          ? 'flex flex-col gap-2'
          : 'hidden items-center gap-1 lg:flex'
      }
      aria-label="Primary"
    >
      {navigationItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          onClick={() => {
            onNavigate?.()
          }}
          className={({ isActive }) =>
            [
              mobile
                ? 'w-full rounded-full px-4 py-2 text-left text-sm font-normal transition-colors duration-200'
                : 'nav-link px-4 py-2 text-sm font-normal transition-colors duration-300',
              isActive
                ? mobile
                  ? 'bg-surface-alt text-[var(--color-nav-highlight)]'
                  : 'nav-link-active'
                : 'text-text hover:text-[var(--color-nav-highlight)]',
              mobile ? 'w-full rounded-full text-left hover:bg-surface-alt' : '',
            ].join(' ')
          }
        >
          <span className="nav-link__label relative z-10">{item.label}</span>
          {mobile ? null : (
            <>
              <span aria-hidden="true" className="nav-link__hover-line" />
              <span aria-hidden="true" className="nav-link__active-line" />
              <span aria-hidden="true" className="nav-link__glow" />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default function Header({ logoSrc }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/45 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <LogoBlock logoSrc={logoSrc} />

        <NavLinks />

        <div className="hidden lg:flex">
          <Link
            to="/project-brief"
            className="header-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-normal text-text shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,184,166,0.12)]"
          >
            <FileText size={15} className="text-text-muted" />
            <span>Start Project Brief</span>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-text transition-colors hover:border-primary hover:text-primary lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/50 bg-white/60 backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-4 sm:px-6">
            <NavLinks mobile onNavigate={closeMenu} />

            <Link
              to="/project-brief"
              onClick={closeMenu}
              className="header-cta inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-normal text-text shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-200"
            >
              <FileText size={15} className="text-text-muted" />
              <span>Start Project Brief</span>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
