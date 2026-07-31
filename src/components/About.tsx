'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    // Animate content on scroll
    const elements = content.querySelectorAll('.about-animate')
    gsap.fromTo(elements, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
  ]

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 60% 40% at 30% 20%, rgba(139, 92, 246, 0.1), transparent),
          radial-gradient(ellipse 50% 30% at 70% 80%, rgba(59, 130, 246, 0.08), transparent)
        `
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="about-animate text-purple-400 font-medium tracking-[0.2em] mb-4 text-sm uppercase">
            About Me
          </p>
          <h2 className="about-animate text-white font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Building digital experiences
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              that matter
            </span>
          </h2>
          <p className="about-animate text-white/50 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a Full Stack Developer with a passion for creating beautiful, functional, 
            and user-centered digital experiences. With 5+ years of experience, I&apos;ve worked 
            with startups and enterprises to build products that solve real problems.
          </p>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar */}
          <div className="about-animate flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />
              
              {/* Animated Circles */}
              <div className="absolute inset-8 border border-white/10 rounded-full animate-pulse" />
              <div className="absolute inset-16 border border-white/5 rounded-full" />
              
              {/* Large Initial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 font-bold" style={{ fontSize: '10rem' }}>S</span>
              </div>
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="about-animate text-white/70 leading-relaxed mb-6">
              My approach combines technical expertise with creative thinking, ensuring every 
              project not only works perfectly but also looks stunning and provides an 
              exceptional user experience.
            </p>
            <p className="about-animate text-white/70 leading-relaxed mb-8">
              I specialize in modern web technologies including React, Next.js, TypeScript, 
              and Node.js. Whether it&apos;s building scalable backend systems or crafting 
              beautiful frontend interfaces, I bring dedication and attention to detail 
              to every project.
            </p>

            {/* Stats */}
            <div className="about-animate grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <p className="font-bold text-white mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
