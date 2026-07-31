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
    <section id="services" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black mb-8">Services</h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
