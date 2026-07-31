'use client'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces designed with a focus on user experience and accessibility.',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native for iOS and Android.',
  },
  {
    title: 'API Development',
    description: 'Scalable REST and GraphQL APIs designed and built with best practices.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white font-bold mb-12" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-white font-medium text-xl mb-3">{service.title}</h3>
              <p className="text-white/40 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
