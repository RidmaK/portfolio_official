'use client'

import { ExternalLink, Github, Code, Database, CreditCard } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform with Multi-Gateway Payments',
      description: 'Full-featured e-commerce platform built with Laravel and React, featuring multiple payment gateway integrations including Stripe, PayPal, and local payment methods.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'React.js', 'MySQL', 'Stripe API', 'PayPal API'],
      features: ['Multi-vendor support', 'Real-time inventory', 'Payment processing', 'Admin dashboard'],
      category: 'Full Stack'
    },
    {
      title: 'Enterprise CRM System',
      description: 'Comprehensive customer relationship management system with advanced analytics, built using Next.js and Node.js with AWS deployment.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS'],
      features: ['Customer analytics', 'Sales pipeline', 'Automated workflows', 'Team collaboration'],
      category: 'Enterprise'
    },
    {
      title: 'Payment Gateway Integration Suite',
      description: 'Comprehensive payment processing solution supporting multiple gateways with unified API, built for scalability and security.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PHP', 'Laravel', 'Redis', 'Docker', 'API Gateway'],
      features: ['Multi-gateway support', 'Webhook handling', 'Transaction logging', 'Fraud detection'],
      category: 'FinTech'
    },
    {
      title: 'Real-time Collaboration Platform',
      description: 'Modern collaboration platform with real-time messaging, file sharing, and project management features using React and WebSocket technology.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Socket.io', 'Express.js', 'MongoDB', 'AWS S3'],
      features: ['Real-time messaging', 'File sharing', 'Video calls', 'Project tracking'],
      category: 'SaaS'
    }
  ]

  const categories = ['All', 'Full Stack', 'Enterprise', 'FinTech', 'SaaS']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Showcase of complex applications and systems I've built, demonstrating 
            expertise in full-stack development and payment integrations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-dark-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-dark-800 mb-2 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-dark-600">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-800 mb-2 flex items-center">
                    <Database className="w-4 h-4 mr-2" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </button>
                  <button className="flex items-center px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects