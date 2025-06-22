'use client'

import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Xess Global (Pvt) Ltd',
      position: 'Senior Software Engineer (Head of the Department)',
      duration: 'September 2024 – Present',
      location: '73/3 Kandy Rd, Kelaniya',
      description: [
        'Leading the development department and mentoring junior developers',
        'Architecting scalable web applications using modern technologies',
        'Implementing complex payment gateway integrations',
        'Driving technical decisions and best practices across projects'
      ],
      current: true
    },
    {
      company: 'Sonic Labs (Pvt) Ltd',
      position: 'Software Engineer',
      duration: 'April 2023 – July 2024',
      location: '56 Polhengoda Rd, Colombo 005',
      description: [
        'Developed full-stack applications using PHP Laravel and React.js',
        'Integrated multiple payment gateways including Stripe and PayPal',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Optimized application performance and implemented security best practices'
      ],
      current: false
    },
    {
      company: 'LAYOUTindex (Pvt) Ltd',
      position: 'Associate Software Engineer',
      duration: 'May 2022 - April 2023',
      location: 'Colombo, Sri Lanka',
      description: [
        'Built responsive web applications using modern JavaScript frameworks',
        'Worked on e-commerce platforms with payment system integrations',
        'Participated in code reviews and maintained coding standards',
        'Contributed to database design and API development'
      ],
      current: false
    },
    {
      company: 'Ceylon Linux (Pvt) Ltd',
      position: 'Full Stack Developer',
      duration: 'October 2021 - May 2022',
      location: 'Colombo, Sri Lanka',
      description: [
        'Started career as a full-stack developer working with PHP and JavaScript',
        'Developed custom web solutions for various client requirements',
        'Gained experience in server management and deployment processes',
        'Built foundation in modern web development practices'
      ],
      current: false
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            A progressive career journey through leading technology companies, 
            building expertise and taking on increasing responsibilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  exp.current 
                    ? 'bg-primary-600 border-primary-200 shadow-lg' 
                    : 'bg-white border-primary-300'
                }`}></div>
                
                {/* Content */}
                <div className="ml-16 bg-white rounded-xl shadow-lg p-8 card-hover w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    {exp.current && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Current Position
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-dark-600 mb-4 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-dark-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience