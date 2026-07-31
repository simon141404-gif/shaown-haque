'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    id: 2,
    title: 'AI Dashboard',
    description: 'Analytics dashboard with real-time data visualization and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['React', 'D3.js', 'Python'],
  },
  {
    id: 3,
    title: 'Social App',
    description: 'Social media application with real-time messaging and engagement features.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tags: ['React Native', 'Firebase'],
  },
  {
    id: 4,
    title: 'Portfolio v1',
    description: 'Personal portfolio with 3D animations and interactive elements.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    tags: ['Three.js', 'GSAP', 'WebGL'],
  },
]

const categories = ['All', 'Next.js', 'React', 'React Native', 'Three.js']

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const section = sectionRef.current
    const projectsContainer = projectsRef.current

    if (!section || !projectsContainer) return

    // Animate project cards
    gsap.fromTo(projectsContainer.children, 
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeCategory))

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 40% 40% at 20% 20%, rgba(236, 72, 153, 0.08), transparent),
          radial-gradient(ellipse 40% 40% at 80% 80%, rgba(59, 130, 246, 0.08), transparent)
        `
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-pink-400 font-medium tracking-[0.2em] mb-4 text-sm uppercase">
            Featured Work
          </p>
          <h2 className="text-white font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Projects
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for building exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-white/50 border border-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-white text-black rounded-full font-medium">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
