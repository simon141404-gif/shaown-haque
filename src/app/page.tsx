'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Components
import LoadingScreen from '@/components/LoadingScreen'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Track scroll progress
    lenis.on('scroll', ({ progress }) => {
      setScrollProgress(progress)
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <main id="main-content" className="relative min-h-screen">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Custom Cursor */}
      <Cursor />

      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* Noise & Film Grain Overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div 
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}
        aria-hidden={isLoading}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
