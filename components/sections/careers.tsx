'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Mail, Users, Zap } from 'lucide-react'

export default function CareersSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const openRoles = [
    {
      title: 'Senior Full-Stack Developer',
      type: 'Full-time',
      location: 'Remote / San Francisco',
      salary: '$120k - $180k',
      description: 'Join our core development team to build scalable web applications and APIs.',
      requirements: ['React/Next.js', 'Node.js', 'PostgreSQL', 'AWS', '5+ years experience']
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote / New York',
      salary: '$90k - $140k',
      description: 'Create beautiful, intuitive user experiences for web and mobile applications.',
      requirements: ['Figma', 'User Research', 'Prototyping', 'Design Systems', '3+ years experience']
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote / Austin',
      salary: '$110k - $160k',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: ['AWS/Azure', 'Kubernetes', 'Docker', 'Terraform', '4+ years experience']
    },
    {
      title: 'AI/ML Engineer',
      type: 'Full-time',
      location: 'Remote / Seattle',
      salary: '$130k - $200k',
      description: 'Develop machine learning models and AI-powered features for our products.',
      requirements: ['Python', 'TensorFlow/PyTorch', 'MLOps', 'Data Science', '3+ years experience']
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and a supportive team environment.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest technologies and tools in a fast-paced, innovative environment.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Benefits',
      description: 'Health insurance, 401k matching, unlimited PTO, and professional development budget.'
    }
  ]

  return (
    <section id="careers" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about technology 
            and innovation. Join us in building the future of digital solutions.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Open Positions
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {role.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {role.description}
                    </p>
                  </div>
                  <Briefcase className="w-6 h-6 text-primary-500 flex-shrink-0" />
                </div>

                {/* Role Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {role.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {role.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {role.salary}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Requirements:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {role.requirements.map((req, reqIndex) => (
                      <span
                        key={reqIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact HR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Don't See the Right Role?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always interested in hearing from talented individuals. Send us your resume 
            and let us know how you can contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:careers@tbd.com"
              className="btn-primary group"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact HR
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary group"
            >
              Submit Application
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 