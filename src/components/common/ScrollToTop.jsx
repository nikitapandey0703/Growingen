import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()
  const previousPathRef = useRef(location.pathname)

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration

    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    if (previousPathRef.current === location.pathname) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior =
      location.state?.scrollMode === 'smooth-top' && !prefersReducedMotion
        ? 'smooth'
        : 'auto'

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior })
    })

    previousPathRef.current = location.pathname
  }, [location])

  return null
}
