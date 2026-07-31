'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current

    if (!section || !cards) return

    // Animate cards on scroll
    gsap.fromTo(cards.children, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    // Counter animation
    const counters = section.querySelectorAll('.counter')
    counters.forEach((counter) => {
      const target = counter.getAttribute('data-target')
      if (!target) return

      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const stats = [
    { value: '5+', label: 'Years Experience', dataTarget: '5' },
    { value: '50+', label: 'Projects Completed', dataTarget: '50' },
    { value: '30+', label: 'Happy Clients', dataTarget: '30' },
  ]

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 nebula-bg" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-accent-purple font-medium tracking-[0.3em] mb-4 text-sm">
            ABOUT ME
          </p>
          <h2 className="section-title">
            Building digital experiences that matter.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stylized Avatar */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl blur-[40px] opacity-20" />
            
            {/* Avatar Container */}
            <div className="relative glass-card rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-purple/20" />
              
              {/* Animated Circles */}
              <div className="absolute inset-10 border-2 border-accent-purple/30 rounded-full animate-pulse" />
              <div className="absolute inset-20 border border-accent-blue/20 rounded-full" />
              <div className="absolute inset-32 border border-accent-pink/10 rounded-full" />
              
              {/* Large Initial */}
              <span className="font-display text-[180px] text-white/10">S</span>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-6 max-w-[200px]">
              <p className="text-3xl mb-2">🎨</p>
              <p className="font-medium text-sm">Creative Solutions</p>
              <p className="text-white/40 text-xs mt-1">Building with purpose</p>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={cardsRef}>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              I&apos;m a Full Stack Developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 5+ years of experience, I&apos;ve worked with startups and enterprises to build products that solve real problems.
            </p>

            <p className="text-white/60 leading-relaxed mb-12">
              My approach combines technical expertise with creative thinking, ensuring every project not only works perfectly but also looks stunning and provides an exceptional user experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-6 text-center card-hover"
                >
                  <p className="counter font-display text-4xl text-accent-purple" data-target={stat.dataTarget}>
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
