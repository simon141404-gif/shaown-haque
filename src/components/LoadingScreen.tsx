'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !starsRef.current) return

    // Create stars
    const starsContainer = starsRef.current
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.setProperty('--duration', `${2 + Math.random() * 3}s`)
      star.style.setProperty('--delay', `${Math.random() * 2}s`)
      starsContainer.appendChild(star)
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false)
        onComplete()
      }
    })

    // Initial fade in
    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
    })
    .fromTo(starsContainer.children, 
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.02, ease: 'power2.out' },
      0.3
    )
    // Split text animation - letter by letter
    .fromTo(textRef.current?.children || [],
      { 
        opacity: 0, 
        y: 100, 
        filter: 'blur(20px)',
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      },
      0.8
    )
    // Lens flare effect
    .to(containerRef.current, {
      boxShadow: 'inset 0 0 100px rgba(139, 92, 246, 0.3)',
      duration: 1,
      ease: 'power2.inOut',
    }, 1.5)
    .to(containerRef.current, {
      boxShadow: 'inset 0 0 50px rgba(139, 92, 246, 0.1)',
      duration: 0.5,
    }, 2.5)
    // Fade out
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    }, 3.2)

    return () => {
      tl.kill()
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-background flex items-center justify-center overflow-hidden"
    >
      {/* Stars Background */}
      <div 
        ref={starsRef}
        className="absolute inset-0"
      />
      
      {/* Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent" />
      
      {/* Center Text */}
      <div 
        ref={textRef}
        className="relative z-10 flex flex-col items-center"
      >
        {['S', 'H', 'A', 'W', 'O', 'N', ' ', 'H', 'A', 'Q', 'U', 'E'].map((letter, i) => (
          <span 
            key={i}
            className="inline-block text-white font-display text-[12vw] leading-none"
            style={{ 
              fontFamily: 'var(--font-bebas)',
              textShadow: i % 2 === 0 
                ? '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)' 
                : '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
      
      {/* Lens Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  )
}
