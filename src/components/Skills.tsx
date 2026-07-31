'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'React', icon: '⚛️', level: 95, color: '#61DAFB' },
  { name: 'Next.js', icon: '🔷', level: 90, color: '#000000' },
  { name: 'TypeScript', icon: '📘', level: 88, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: '💨', level: 95, color: '#06B6D4' },
  { name: 'Node.js', icon: '🟢', level: 85, color: '#339933' },
  { name: 'UI/UX Design', icon: '🎨', level: 90, color: '#FF61F6' },
  { name: 'Three.js', icon: '🎲', level: 75, color: '#000000' },
  { name: 'GSAP', icon: '⚡', level: 85, color: '#88CE02' },
]

const otherSkills = [
  'JavaScript', 'Python', 'PostgreSQL', 'MongoDB', 
  'AWS', 'Docker', 'Figma', 'Git'
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current

    if (!section || !cards) return

    // Animate skill cards
    gsap.fromTo(cards.children, 
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    // Animate progress bars
    const progressBars = section.querySelectorAll('.progress-bar')
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('data-width')
      if (!width) return

      gsap.to(bar, {
        width: `${width}%`,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bar,
          start: 'top 85%',
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 background-secondary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-accent-blue font-medium tracking-[0.3em] mb-4 text-sm">
            EXPERTISE
          </p>
          <h2 className="section-title">
            Skills & Tools
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group glass-card rounded-2xl p-4 md:p-6 card-hover cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Glow Border on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon & Name */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  <span className="font-medium text-sm md:text-base">{skill.name}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="progress-bar h-full rounded-full"
                    data-width={skill.level}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      width: '0%',
                    }}
                  />
                </div>

                {/* Percentage */}
                <p className="text-right text-xs md:text-sm text-white/40 mt-1 md:mt-2">
                  {skill.level}%
                </p>
              </div>

              {/* Corner Accent */}
              <div 
                className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${skill.color}50%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {otherSkills.map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 glass rounded-full text-sm text-white/60 hover:text-white hover:border-accent-purple/50 transition-all cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
