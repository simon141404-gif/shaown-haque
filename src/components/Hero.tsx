'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const hero = heroRef.current
    const content = contentRef.current

    if (!hero || !content) return

    // Split text animation on load
    const splitText = content.querySelectorAll('.split-text')
    gsap.fromTo(splitText, 
      { y: 60, opacity: 0, filter: 'blur(10px)' },
      { 
        y: 0, 
        opacity: 1, 
        filter: 'blur(0px)',
        duration: 1, 
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3
      }
    )

    // Animate stats
    const stats = content.querySelectorAll('.stat-item')
    gsap.fromTo(stats,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 1, ease: 'power3.out' }
    )

    // Animate buttons
    const buttons = content.querySelectorAll('.hero-btn')
    gsap.fromTo(buttons,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 1.2, ease: 'power3.out' }
    )

    // Animate social icons
    const socials = content.querySelectorAll('.social-icon')
    gsap.fromTo(socials,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, delay: 1.4, ease: 'back.out(1.7)' }
    )

    // Mouse parallax effect on hero
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* ============================================
          BACKGROUND LAYERS (z-index: 0-3)
      ============================================ */}
      
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent),
          radial-gradient(ellipse 60% 40% at 80% 60%, rgba(59, 130, 246, 0.1), transparent),
          radial-gradient(ellipse 50% 30% at 20% 80%, rgba(236, 72, 153, 0.08), transparent)
        `
      }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-1 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full z-2 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: i % 3 === 0 ? 'rgba(139, 92, 246, 0.6)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(236, 72, 153, 0.6)',
            animation: `float-particle ${8 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* ============================================
          GIANT BACKGROUND TYPOGRAPHY (z-index: 3)
      ============================================ */}
      <div className="absolute inset-0 z-3 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 
          className="text-center leading-none tracking-wider text-white/[0.06] font-bold whitespace-nowrap"
          style={{
            fontSize: 'clamp(4rem, 18vw, 16rem)',
          }}
        >
          SHAWON
        </h1>
      </div>

      {/* ============================================
          HERO CONTENT (z-index: 20)
      ============================================ */}
      <div 
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-16"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="split-text mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-purple-400 text-sm font-medium tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            FULL STACK DEVELOPER
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="split-text text-center mb-6">
          <h2 className="font-bold text-white leading-tight" style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            letterSpacing: '-0.02em',
          }}>
            <span className="block">HEY, I&apos;M</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              SHAWON HAQUE
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="split-text text-white/[0.6] text-center text-lg max-w-2xl mb-8 leading-relaxed">
          Crafting exceptional digital experiences with precision, passion, and cutting-edge technology.
        </p>

        {/* Buttons */}
        <div className="split-text flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#projects"
            className="hero-btn group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="hero-btn group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 border border-white/20 hover:border-purple-500/50"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Social Icons */}
        <div className="split-text flex items-center gap-4 mb-12">
          {[
            { name: 'GitHub', href: 'https://github.com/simon141404-gif' },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/shawon-haque' },
            { name: 'Facebook', href: 'https://facebook.com/shawon.haque' },
            { name: 'WhatsApp', href: 'https://wa.me/8801752247494' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-white/60 hover:text-white hover:border-purple-500/50 hover:bg-white/[0.1] transition-all duration-300"
              aria-label={social.name}
            >
              {social.name === 'GitHub' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
              )}
              {social.name === 'LinkedIn' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              )}
              {social.name === 'Facebook' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )}
              {social.name === 'WhatsApp' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 md:gap-16">
          {[
            { value: '5+', label: 'Years Exp.' },
            { value: '50+', label: 'Projects' },
            { value: '30+', label: 'Clients' },
          ].map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <p className="font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                {stat.value}
              </p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================
          SCROLL INDICATOR (z-index: 10)
      ============================================ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-[0.3em]">SCROLL</span>
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
