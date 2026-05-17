import { createElement, forwardRef } from 'react'

const SectionWrapper = forwardRef(function SectionWrapper(
  {
    as = 'div',
    className = '',
    children,
    ...props
  },
  ref,
) {
  return createElement(
    as,
    {
      ref,
      className: [
        'site-container w-full',
        className,
      ]
        .filter(Boolean)
        .join(' '),
      ...props,
    },
    children,
  )
})

export default SectionWrapper
