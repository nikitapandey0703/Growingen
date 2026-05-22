import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    const previousScrollRestoration = window.history.scrollRestoration

    // Prevent the browser from restoring the prior page position on route changes.
    window.history.scrollRestoration = 'manual'
    root.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [pathname])

  return null
}
