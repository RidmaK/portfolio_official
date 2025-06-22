'use client'

import { Code, Users, Award, Briefcase } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '4+' },
    { icon: Briefcase, label: 'Companies', value: '4' },
    { icon: Users, label: 'Team Leadership', value: 'Head of Dept' },
    { icon: Award, label: 'Tech Stack', value: '10+' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Passionate full-stack developer with extensive experience in modern web technologies 
            and a proven track record of leading development teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-dark-700">
              <p>
                I'm a Senior Software Engineer currently serving as Head of Department at 
                <strong> Xess Global (Pvt) Ltd</strong>, where I lead development initiatives 
                and mentor junior developers. My journey in software development spans over 4 years, 
                during which I've worked with cutting-edge technologies and delivered robust solutions.
              </p>
              
              <p>
                My expertise lies in full-stack development with a strong focus on 
                <strong> PHP Laravel</strong>, <strong>JavaScript ecosystems</strong> including 
                React.js and Next.js, and <strong>cloud technologies</strong> like AWS. 
                I have extensive experience with payment gateway integrations, having worked 
                with Stripe, PayPal, and various local payment solutions.
              </p>
              
              <p>
                Throughout my career at companies like Sonic Labs, LAYOUTindex, and Ceylon Linux, 
                I've consistently delivered high-quality solutions and contributed to team growth 
                and project success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-purple-50 p-6 rounded-xl text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-dark-900 mb-1">{stat.value}</div>
                <div className="text-sm text-dark-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About