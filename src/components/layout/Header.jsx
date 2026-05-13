import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact Us', href: '/contact' },
]

function LogoBlock({ logoSrc }) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] rounded-xl"
      aria-label="GrowGen Solutions"
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="GrowGen Solutions"
          className="h-10 w-auto object-contain sm:h-12 lg:h-14"
        />
      ) : (
        <div className="flex h-10 w-[140px] items-center justify-center rounded-xl border border-border bg-white px-3 sm:h-12 sm:w-[156px] lg:h-14 lg:w-[172px]">
          <span className="text-xs font-semibold tracking-[0.16em] text-text-muted uppercase sm:text-sm">
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
          : 'hidden items-center justify-center gap-1 xl:flex'
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
                ? 'w-full rounded-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 sm:text-[15px]'
                : 'nav-link px-3 py-2 text-sm font-medium transition-colors duration-300 xl:px-4 xl:text-[15px]',
              isActive
                ? mobile
                  ? 'bg-[#2B1CC1]/10 text-[#2B1CC1]'
                  : 'nav-link-active text-[#2B1CC1]'
                : 'text-text hover:text-[#2B1CC1]',
              mobile && !isActive ? 'w-full rounded-full text-left hover:bg-surface-alt' : '',
              // Added tab focus effect logic using the requested color
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1]'
            ].filter(Boolean).join(' ')
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const startProjectIconSrc = '/icons/start-project.svg'
  const lastScrollYRef = useRef(0)

  const closeMenu = () => setIsMenuOpen(false)

  // 2. Fixed Production Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // 1. Determine Glassy State
      setIsScrolled(currentScrollY > 20)

      // Always show header at the very top or if the menu is open
      if (currentScrollY <= 50 || isMenuOpen) {
        setIsHeaderVisible(true)
      } else {
        const scrollDelta = currentScrollY - lastScrollYRef.current
        
        // Hide when scrolling down past a threshold (to avoid micro-jitters)
        if (scrollDelta > 10) {
          setIsHeaderVisible(false)
        } 
        // Reveal when scrolling up past a threshold
        else if (scrollDelta < -10) {
          setIsHeaderVisible(true)
        }
      }

      lastScrollYRef.current = currentScrollY
    }

    // Set initial configuration on mount
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen]) // Added isMenuOpen dependency so it behaves perfectly on mobile

  useEffect(() => {
    if (isMenuOpen) {
      setIsHeaderVisible(true)
    }
  }, [isMenuOpen])

  return (
    <header
      className={[
        'sticky top-0 z-50 px-3 pt-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 sm:pt-4 lg:px-5',
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full',
        isScrolled ? 'bg-transparent' : 'bg-transparent'
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto w-full max-w-[1280px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isScrolled
            ? 'border border-white/30 bg-white/34 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-md'
            : 'border border-transparent bg-transparent',
        ].join(' ')}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
          <LogoBlock logoSrc={logoSrc} />

          {/* Promote the inline nav only when there is enough horizontal room for every link and CTA. */}
          <NavLinks />

          <div className="hidden xl:flex">
            {/* Keep the desktop CTA at a consistent visual width in the navbar. */}
            <Link
              to="/project-brief"
              className="header-cta w-[200px] justify-center text-sm font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] rounded-full"
            >
              <img
                src={startProjectIconSrc}
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px] shrink-0"
              />
              <span>Start Project Brief</span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 text-text transition-colors hover:border-[#2B1CC1] hover:text-[#2B1CC1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] sm:h-11 sm:w-11 xl:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="mx-auto mt-2 w-full max-w-[1280px] rounded-[28px] border border-white/30 bg-white/42 backdrop-blur-lg xl:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-4 sm:px-6">
            <NavLinks mobile onNavigate={closeMenu} />

            {/* Let the mobile CTA scale down on narrow screens while capping at 200px. */}
            <Link
              to="/project-brief"
              onClick={closeMenu}
              className="header-cta inline-flex w-full max-w-[200px] self-center items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-text shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] sm:w-[200px]"
            >
              <img
                src={startProjectIconSrc}
                alt=""
                aria-hidden="true"
                className="h-[15px] w-[15px] shrink-0"
              />
              <span>Start Project Brief</span>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
