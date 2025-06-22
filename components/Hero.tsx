'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full Stack Developer'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Ridma Kanchana Atgukorala"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-primary-100"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-dark-900 mb-4">
            Ridma Kanchana
            <span className="block gradient-text">Atgukorala</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-dark-600 mb-2 h-8">
            <span className="border-r-2 border-primary-600 pr-1 animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg text-dark-500 mb-8 max-w-2xl mx-auto">
            Senior Software Engineer & Head of Department at Xess Global. 
            Specializing in modern web technologies and payment gateway integrations.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-6 h-6 text-dark-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:ridma@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-6 h-6 text-dark-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero