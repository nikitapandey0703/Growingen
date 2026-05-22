import { useEffect, useId, useRef } from 'react'
import { DotLottie } from '@lottiefiles/dotlottie-web'

export default function BrandIdentityTabletAnimation({
  className = '',
  src = 'https://lottie.host/8d3d3b8e-4f1b-4a9f-9f1a-0e6329f2c0f8/5rUZxQ0n6R.lottie',
}) {
  const canvasId = useId().replace(/:/g, '')
  const canvasRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current ?? document.querySelector(`#${canvasId}`)

    if (!canvas) {
      return
    }

    playerRef.current?.destroy()

    playerRef.current = new DotLottie({
      canvas,
      src,
      autoplay: true,
      loop: true,
      renderConfig: {
        autoResize: true,
        devicePixelRatio: window.devicePixelRatio || 1,
      },
    })

    return () => {
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [canvasId, src])

  return (
    <div className={['relative h-full min-h-[140px] w-full overflow-hidden rounded-[inherit] bg-white', className].filter(Boolean).join(' ')}>
      <canvas
        id={canvasId}
        ref={canvasRef}
        width="600"
        height="420"
        className="block h-full w-full"
        aria-label="Brand identity animation"
      />
    </div>
  )
}
