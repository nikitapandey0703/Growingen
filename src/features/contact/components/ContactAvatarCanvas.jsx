import { Suspense, useMemo } from 'react'

import { Canvas } from '@react-three/fiber'
import { Float, Html, OrbitControls, useGLTF } from '@react-three/drei'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js'

const avatarSources = {
  idle: '/images/contact/avatars/woman-holding-a-laptop-and-making-a-gesture-2026-02-08-19-50-44-utc/icons8_girl_holding_laptop_and_having_an_idea.glb',
  focus: '/images/contact/avatars/woman-with-a-thought-bubble-2026-02-08-19-32-32-utc/icons8_woman_with_speech_bubble.glb',
  success: '/images/contact/avatars/woman-in-a-dynamic-pose-2026-02-08-19-36-35-utc/icons8_joyful_young_woman_jumping.glb',
}

function AvatarModel({ status }) {
  const source = avatarSources[status] ?? avatarSources.idle
  const { scene } = useGLTF(source)
  const clonedScene = useMemo(() => clone(scene), [scene])

  const transformByStatus = {
    idle: { position: [0, -1.46, 0], rotation: [0, 0.38, 0], scale: 0.82 },
    focus: { position: [0, -1.46, 0], rotation: [0, 0.46, 0], scale: 0.8 },
    success: { position: [0, -1.56, 0], rotation: [0, 0.3, 0], scale: 0.78 },
  }

  const transform = transformByStatus[status] ?? transformByStatus.idle

  return (
    <Float
      speed={status === 'success' ? 2.2 : 1.5}
      rotationIntensity={status === 'success' ? 0.16 : 0.08}
      floatIntensity={status === 'success' ? 0.2 : 0.12}
    >
      <primitive
        object={clonedScene}
        scale={transform.scale}
        position={transform.position}
        rotation={transform.rotation}
      />
    </Float>
  )
}

function AvatarFallback() {
  return (
    <Html center>
      <div className="rounded-full bg-white/80 px-3 py-1 text-[12px] font-medium text-[#475467] shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
        Loading avatar...
      </div>
    </Html>
  )
}

export default function ContactAvatarCanvas({ status, className = '' }) {
  return (
    <div className={`relative h-[285px] w-full sm:h-[330px] lg:h-[382px] ${className}`}>
      <div className="pointer-events-none absolute inset-x-[22%] bottom-[10%] h-[12px] rounded-full bg-[radial-gradient(circle,rgba(17,24,39,0.14)_0%,rgba(17,24,39,0)_74%)] blur-[10px]" />

      <Canvas camera={{ position: [0, 0.14, 9.3], fov: 22 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 5, 5]} intensity={2.4} />
        <directionalLight position={[-4, 2, 1]} intensity={1.2} color="#ffd7cf" />
        <spotLight position={[0, 5, 4]} angle={0.28} penumbra={0.6} intensity={1.6} />

        <Suspense fallback={<AvatarFallback />}>
          <AvatarModel status={status} />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}

useGLTF.preload(avatarSources.idle)
useGLTF.preload(avatarSources.focus)
useGLTF.preload(avatarSources.success)
