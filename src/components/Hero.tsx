'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text reveal
      gsap.fromTo('.hero-title', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
      
      gsap.fromTo('.hero-subtitle', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
      )
      
      gsap.fromTo('.hero-text', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      )
      
      gsap.fromTo('.hero-cta', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      )
      
      gsap.fromTo('.hero-social', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <p className="hero-subtitle text-sm text-gray-500 mb-4 tracking-widest uppercase font-medium">
          Full Stack Developer
        </p>

        {/* Name */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
          Hi, I&apos;m{' '}
          <span className="text-gray-400">Shawon</span>
          <br />
          Haque
        </h1>

        {/* Subtitle */}
        <p className="hero-text text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build beautiful, functional, and user-centered digital experiences. 
          Passionate about creating websites that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gray-200 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-social flex justify-center gap-8">
          <a 
            href="https://github.com/simon141404-gif" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/shawon-haque" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a 
            href="https://facebook.com/shawon.haque" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            Facebook
          </a>
          <a 
            href="https://wa.me/8801752247494" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
