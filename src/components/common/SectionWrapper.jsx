import { forwardRef } from 'react'

const SectionWrapper = forwardRef(function SectionWrapper(
  {
    as: Component = 'div',
    className = '',
    children,
    ...props
  },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={[
        'w-full px-4 pb-12 sm:px-6 sm:pb-14 md:px-8 md:pb-16 lg:px-12 lg:pb-16',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
})

export default SectionWrapper
