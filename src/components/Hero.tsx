'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const hero = heroRef.current
    const profile = profileRef.current
    const text = textRef.current
    const bg = backgroundRef.current

    if (!hero || !profile || !text || !bg) return

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animate background elements
    gsap.to(bg.querySelectorAll('.star'), {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    })

    // Animate profile on scroll
    gsap.to(profile, {
      y: 100,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'center top',
        scrub: 1,
      }
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 nebula-bg"
      >
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Nebula Gradients */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 2 === 0 
                ? 'rgba(139, 92, 246, 0.5)' 
                : 'rgba(59, 130, 246, 0.5)',
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left - Text Content */}
        <div 
          ref={textRef}
          className="text-center lg:text-left"
        >
          {/* Background Text */}
          <div className="relative">
            <h1 className="font-display text-[15vw] leading-none tracking-wider text-white/5 absolute -top-20 -left-10 lg:left-0 select-none">
              SHAWON
            </h1>
            <h1 className="font-display text-[15vw] leading-none tracking-wider text-white/5 absolute -top-40 lg:-top-60 -left-10 lg:left-0 select-none">
              HAQUE
            </h1>
          </div>

          {/* Main Text */}
          <div className="relative z-10">
            <p className="text-accent-purple font-medium tracking-[0.3em] mb-4 text-sm lg:text-base">
              FULL STACK DEVELOPER
            </p>
            
            <h2 className="font-display text-6xl lg:text-8xl xl:text-9xl tracking-wider mb-6">
              <span className="block">HEY,</span>
              <span className="block">I&apos;M SHAWON</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue">
                HAQUE
              </span>
            </h2>

            <p className="text-white/60 text-lg max-w-xl mb-8 leading-relaxed">
              Crafting exceptional digital experiences with precision, passion, and cutting-edge technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="btn-primary magnetic"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-secondary magnetic"
              >
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 justify-center lg:justify-start mt-12">
              <div className="text-center">
                <p className="font-display text-4xl lg:text-5xl text-accent-purple">5+</p>
                <p className="text-white/40 text-sm">Years Exp.</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl lg:text-5xl text-accent-blue">50+</p>
                <p className="text-white/40 text-sm">Projects</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl lg:text-5xl text-accent-pink">30+</p>
                <p className="text-white/40 text-sm">Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div 
          ref={profileRef}
          className="relative flex justify-center"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {/* Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue rounded-full blur-[60px] opacity-30 animate-pulse" />
          
          {/* Neon Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-accent-purple/50 animate-spin-slow" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-4 rounded-full border border-accent-blue/30 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

          {/* Profile Image Container */}
          <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450xl] rounded-full overflow-hidden glass-card">
            {/* Floating Animation */}
            <div className="absolute inset-0 animate-float">
              <Image
                src="https://i.postimg.cc/m2Ghq87r/Screenshot-2026-07-31-161703.png"
                alt="Shawon Haque"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 glass rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
            <span className="text-2xl">⚡</span>
          </div>
          <div className="absolute bottom-20 left-10 w-16 h-16 glass rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
            <span className="text-xl">🎯</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
