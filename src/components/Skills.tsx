'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'Next.js', level: 90, color: '#000000' },
  { name: 'TypeScript', level: 88, color: '#3178C6' },
  { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'UI/UX Design', level: 90, color: '#FF61F6' },
]

const otherSkills = [
  'JavaScript', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Figma', 'Git'
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
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
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
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#09090B' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(139, 92, 246, 0.1), transparent)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium tracking-[0.2em] mb-4 text-sm uppercase">
            Expertise
          </p>
          <h2 className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 md:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-white/40 text-sm">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="progress-bar h-full rounded-full"
                  data-width={skill.level}
                  style={{
                    background: skill.color,
                    width: '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {otherSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full text-sm text-white/50 border border-white/10 hover:border-purple-500/30 hover:text-white/80 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
