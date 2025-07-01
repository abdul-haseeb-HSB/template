'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

export default function ClientsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'GlobalSoft', logo: 'GS' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudTech', logo: 'CT' },
    { name: 'SmartSolutions', logo: 'SS' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      avatar: 'SJ',
      quote: 'TBD transformed our entire digital infrastructure. Their expertise in cloud solutions and attention to detail exceeded our expectations. The team delivered on time and within budget.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateLab',
      avatar: 'MC',
      quote: 'Working with TBD was a game-changer for our startup. They built a scalable platform that grew with our business. Their technical expertise and business acumen are unmatched.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, GlobalSoft',
      avatar: 'ER',
      quote: 'The mobile app TBD developed for us has received incredible user feedback. Their UI/UX design skills and development expertise created an exceptional user experience.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'CEO, DataFlow',
      avatar: 'DT',
      quote: 'TBD\'s AI-powered analytics solution revolutionized our data processing capabilities. Their innovative approach and technical excellence delivered results beyond our expectations.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'VP Engineering, CloudTech',
      avatar: 'LW',
      quote: 'The DevOps infrastructure TBD implemented reduced our deployment time by 80%. Their expertise in cloud architecture and automation transformed our development workflow.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Director, SmartSolutions',
      avatar: 'JW',
      quote: 'TBD delivered a comprehensive healthcare management system that streamlined our operations. Their understanding of complex business requirements and technical execution was outstanding.',
      rating: 5
    }
  ]

  return (
    <section id="clients" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by <span className="gradient-text">Leading Companies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've partnered with innovative companies across industries to deliver 
            exceptional digital solutions that drive growth and success.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex items-center justify-center p-6 bg-gray-50 dark:bg-dark-800 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">{client.logo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from the companies we've helped succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 relative group hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-800">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200 dark:border-dark-700"
        >
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Projects Completed' },
            { number: '25+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Partnership' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 