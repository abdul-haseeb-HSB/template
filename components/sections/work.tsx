'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

export default function WorkSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'Web Development',
      link: '#',
      github: '#'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics platform with machine learning insights and predictive modeling capabilities.',
      image: '/api/placeholder/600/400',
      tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      category: 'AI/ML',
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: '/api/placeholder/600/400',
      tech: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'JWT'],
      category: 'Mobile Development',
      link: '#',
      github: '#'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Multi-cloud infrastructure management platform with automated scaling and monitoring.',
      image: '/api/placeholder/600/400',
      tech: ['AWS', 'Kubernetes', 'Terraform', 'Python', 'Grafana'],
      category: 'DevOps',
      link: '#',
      github: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and billing.',
      image: '/api/placeholder/600/400',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
      category: 'Enterprise',
      link: '#',
      github: '#'
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'Collaborative workspace platform with real-time editing, video conferencing, and project management.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'WebRTC', 'Redis'],
      category: 'SaaS',
      link: '#',
      github: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML', 'DevOps', 'Enterprise', 'SaaS']

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise 
            in delivering innovative digital solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-200 border border-gray-200 dark:border-dark-600"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-xl">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors group">
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 