import { useEffect, useRef, useState } from 'react'

export default function TickerBanner({
  items = [],
  className = '',
  duration = '12s',
  ariaLabel = 'Highlights',
}) {
  if (!items.length) {
    return null
  }

  const rootClassName = ['ticker-banner', className].filter(Boolean).join(' ')
  const viewportRef = useRef(null)
  const groupRef = useRef(null)
  const [groupWidth, setGroupWidth] = useState(0)
  const [repeatCount, setRepeatCount] = useState(2)

  useEffect(() => {
    const viewport = viewportRef.current
    const group = groupRef.current

    if (!viewport || !group) {
      return undefined
    }

    const updateTickerMetrics = () => {
      const nextGroupWidth = group.scrollWidth
      const viewportWidth = viewport.clientWidth

      if (!nextGroupWidth) {
        return
      }

      setGroupWidth(nextGroupWidth)

      // Keep enough copies mounted so the loop stays seamless on wide screens too.
      const copiesNeeded = Math.max(2, Math.ceil(viewportWidth / nextGroupWidth) + 2)
      setRepeatCount(copiesNeeded)
    }

    updateTickerMetrics()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateTickerMetrics)

      return () => {
        window.removeEventListener('resize', updateTickerMetrics)
      }
    }

    const observer = new ResizeObserver(updateTickerMetrics)
    observer.observe(viewport)
    observer.observe(group)

    return () => {
      observer.disconnect()
    }
  }, [items])

  return (
    <div
      className={rootClassName}
      style={{
        '--ticker-duration': duration,
        '--ticker-shift': groupWidth ? `-${groupWidth}px` : undefined,
      }}
      aria-label={ariaLabel}
    >
      <div ref={viewportRef} className="ticker-banner__viewport">
        <div className="ticker-banner__track">
          {Array.from({ length: repeatCount }).map((_, groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 0 ? groupRef : undefined}
              className="ticker-banner__group"
              aria-hidden={groupIndex > 0 ? 'true' : undefined}
            >
              {items.map((item, itemIndex) => (
                <div
                  key={`${groupIndex}-${itemIndex}-${item}`}
                  className="ticker-banner__item"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
