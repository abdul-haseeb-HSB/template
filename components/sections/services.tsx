'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe, 
  Cloud, 
  Brain, 
  Palette, 
  Database, 
  Smartphone,
  Code,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
  Star
} from 'lucide-react'

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Globe,
      title: 'Web & Mobile Development',
      description: 'Custom web applications and mobile apps built with modern frameworks and best practices.',
      features: ['React/Next.js', 'React Native', 'Progressive Web Apps', 'API Development'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-primary-500 to-secondary-500',
      accent: 'bg-primary-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions and automated deployment pipelines for reliable operations.',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Logging'],
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-secondary-500 to-accent-500',
      accent: 'bg-secondary-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Intelligent applications leveraging machine learning and artificial intelligence.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-accent-500 to-success-500',
      accent: 'bg-accent-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces designed for exceptional user experiences.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
      color: 'from-orange-500 to-red-500',
      gradient: 'from-warning-500 to-error-500',
      accent: 'bg-warning-500'
    },
    {
      icon: Database,
      title: 'Data Integration & System Design',
      description: 'Robust data architectures and seamless system integrations for complex business needs.',
      features: ['Database Design', 'API Integration', 'Data Migration', 'System Architecture'],
      color: 'from-indigo-500 to-purple-500',
      gradient: 'from-primary-600 to-secondary-600',
      accent: 'bg-primary-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      features: ['Process Automation', 'Legacy System Migration', 'Digital Strategy', 'Change Management'],
      color: 'from-yellow-500 to-orange-500',
      gradient: 'from-accent-400 to-warning-500',
      accent: 'bg-accent-400'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 dark:from-primary-950/30 dark:via-transparent dark:to-secondary-950/30" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-primary-300 dark:text-primary-600 opacity-30"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 text-secondary-300 dark:text-secondary-600 opacity-30"
      >
        <Star className="w-6 h-6" />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6 shadow-lg"
          >
            <Code className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What We <span className="text-gradient-animated">Do</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions that help businesses innovate, scale, and succeed 
            in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group"
            >
              {/* Enhanced Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
                  <service.icon className="w-8 h-8 text-white relative z-10" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                  />
                </div>
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 ${service.accent} rounded-full flex items-center justify-center`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gradient-animated transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Enhanced Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05, duration: 0.3 }}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
                  >
                    <div className={`w-2 h-2 ${service.accent} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full -translate-y-16 translate-x-16"
            />
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why Choose Our Services?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level security standards and compliance',
                  gradient: 'from-success-500 to-primary-500'
                },
                {
                  icon: Zap,
                  title: 'Fast Delivery',
                  description: 'Agile development with rapid deployment',
                  gradient: 'from-accent-500 to-warning-500'
                },
                {
                  icon: BarChart3,
                  title: 'Proven Results',
                  description: 'Track record of successful project delivery',
                  gradient: 'from-secondary-500 to-accent-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gradient-animated transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 