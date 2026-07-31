'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress
    gsap.to({ value: 0 }, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: function() {
        setProgress(Math.round(this.targets()[0].value))
      },
      onComplete: () => {
        // Fade out
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            onComplete()
          }
        })
      }
    })

    // Animate text
    gsap.fromTo('.loading-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.2 }
    )
  }, [onComplete])

  return (
    <div 
      className="loading-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#050505' }}
    >
      {/* Background Effect */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139, 92, 246, 0.15), transparent),
          radial-gradient(ellipse 40% 30% at 30% 70%, rgba(59, 130, 246, 0.1), transparent)
        `
      }} />

      <div className="relative z-10 text-center">
        {/* Logo/Name */}
        <h1 
          className="loading-text text-white font-bold mb-8"
          style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}
        >
          SHAWON
        </h1>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)',
            }}
          />
        </div>

        {/* Progress Text */}
        <p className="loading-text text-white/40 text-sm">
          {progress}%
        </p>
      </div>
    </div>
  )
}
