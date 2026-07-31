'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    id: 1,
    period: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    description: 'Leading development of enterprise SaaS products, mentoring junior developers, and implementing scalable solutions.',
    technologies: ['Next.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    id: 2,
    period: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    description: 'Built and maintained multiple client projects, from e-commerce platforms to AI-powered applications.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
  },
  {
    id: 3,
    period: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created responsive websites and web applications for various clients across different industries.',
    technologies: ['React', 'Tailwind CSS', 'GSAP', 'Figma'],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const timeline = timelineRef.current

    if (!section || !timeline) return

    // Animate timeline items
    gsap.fromTo(timeline.children, 
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
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

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#09090B' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(139, 92, 246, 0.1), transparent)'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium tracking-[0.2em] mb-4 text-sm uppercase">
            Experience
          </p>
          <h2 className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Work History
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent" />

          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-purple-500 -translate-x-1/2 z-10" 
                style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }} 
              />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div 
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <span className="text-purple-400 text-sm font-medium">{exp.period}</span>
                  <h3 className="text-white font-semibold text-lg mt-1">{exp.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{exp.company}</p>
                  <p className="text-white/50 text-sm mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
