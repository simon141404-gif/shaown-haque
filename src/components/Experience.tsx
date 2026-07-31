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
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
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
      className="section relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 background-secondary" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-accent-cyan font-medium tracking-[0.3em] mb-4 text-sm">
            CAREER PATH
          </p>
          <h2 className="section-title">
            Experience
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            My professional journey through different roles and companies.
          </p>
        </div>

        {/* Timeline */}
        <div 
          ref={timelineRef}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink hidden lg:block">
            {/* Glowing dots on the line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-purple rounded-full shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-blue rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-pink rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
          </div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className="glass-card rounded-2xl p-8 card-hover">
                  {/* Period */}
                  <p className="text-accent-purple text-sm font-medium mb-2">
                    {exp.period}
                  </p>
                  
                  {/* Title & Company */}
                  <h3 className="text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white/60 mb-4">
                    {exp.company}
                  </p>
                  
                  {/* Description */}
                  <p className="text-white/40 text-sm mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Dot (Desktop) */}
              <div className="hidden lg:flex w-16 justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
              </div>

              {/* Empty Space for alternating layout */}
              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
