'use client'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory and seamless checkout experience.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'AI Dashboard',
    description: 'Analytics dashboard with real-time data visualization and AI-powered insights.',
    tags: ['React', 'D3.js', 'Python'],
  },
  {
    title: 'Social App',
    description: 'Social media application with real-time messaging and engagement features.',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'Portfolio v1',
    description: 'Personal portfolio with 3D animations and interactive elements.',
    tags: ['Three.js', 'GSAP', 'WebGL'],
  },
  {
    title: 'Task Management',
    description: 'Productivity app with kanban boards and team collaboration features.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Blog Platform',
    description: 'Content management system with SEO optimization and analytics.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white font-bold mb-12" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <span className="text-white/20 text-4xl font-bold">{index + 1}</span>
              </div>

              <div className="p-6">
                <h3 className="text-white font-medium text-lg mb-2 group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-white/40 text-xs"
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
