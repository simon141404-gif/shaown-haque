'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    category: 'Next.js',
  },
  {
    id: 2,
    title: 'AI Dashboard',
    description: 'Analytics dashboard with real-time data visualization and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['React', 'D3.js', 'Python'],
    category: 'React',
  },
  {
    id: 3,
    title: 'Social App',
    description: 'Social media application with real-time messaging and engagement features.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    tags: ['React Native', 'Firebase', 'Socket.io'],
    category: 'React Native',
  },
  {
    id: 4,
    title: 'Portfolio v1',
    description: 'Personal portfolio with 3D animations and interactive elements.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    category: 'Three.js',
  },
]

const categories = ['All', 'Next.js', 'React', 'React Native', 'Three.js']

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const projectsContainer = projectsRef.current

    if (!section || !projectsContainer) return

    // Animate project cards
    gsap.fromTo(projectsContainer.children, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
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

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 background-tertiary" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent-pink font-medium tracking-[0.3em] mb-4 text-sm">
            FEATURED WORK
          </p>
          <h2 className="section-title">
            Projects
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white'
                  : 'glass text-white/60 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative glass-card rounded-2xl overflow-hidden card-hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-6 py-3 bg-white text-background rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent-purple rounded-full" />
                <div className="absolute top-8 right-4 w-2 h-2 bg-accent-blue rounded-full" />
                <div className="absolute top-4 right-8 w-2 h-2 bg-accent-pink rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
