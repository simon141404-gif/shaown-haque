'use client'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory and seamless checkout experience.',
    category: 'Web Development',
    date: 'January 2026',
  },
  {
    title: 'AI Dashboard',
    description: 'Analytics dashboard with real-time data visualization and AI-powered insights.',
    category: 'Web Development',
    date: 'December 2025',
  },
  {
    title: 'Social App',
    description: 'Social media application with real-time messaging and engagement features.',
    category: 'Mobile App',
    date: 'November 2025',
  },
  {
    title: 'Portfolio v1',
    description: 'Personal portfolio with 3D animations and interactive elements.',
    category: 'Web Development',
    date: 'October 2025',
  },
  {
    title: 'Task Management',
    description: 'Productivity app with kanban boards and team collaboration features.',
    category: 'Web App',
    date: 'September 2025',
  },
  {
    title: 'Blog Platform',
    description: 'Content management system with SEO optimization and analytics.',
    category: 'Web Development',
    date: 'August 2025',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black mb-8">Portfolio</h2>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-black">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-400">{project.date}</span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100">
                {project.category}
              </span>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-black transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
