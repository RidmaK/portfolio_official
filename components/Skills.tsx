'use client'

import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'PHP Laravel', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'Nest.js', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Database Design', level: 88 },
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Deployment', level: 85 },
        { name: 'CI/CD', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'Server Management', level: 80 },
      ]
    },
    other: {
      title: 'Specialized Skills',
      skills: [
        { name: 'Payment Gateways', level: 95 },
        { name: 'Stripe Integration', level: 90 },
        { name: 'PayPal Integration', level: 88 },
        { name: 'Strapi CMS', level: 85 },
        { name: 'Team Leadership', level: 90 },
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack with specialized 
            knowledge in payment systems and modern web technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-dark-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="space-y-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-dark-800">{skill.name}</span>
                    <span className="text-primary-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills