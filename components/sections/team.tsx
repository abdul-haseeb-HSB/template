'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Twitter, Github, Mail, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  const team = [
    {
      name: 'Abdul Haseeb',
      role: 'Senior devops and backend engineer',
      avatar: 'AH',
      bio: 'Expert in DevOps practices and backend development with extensive experience in cloud infrastructure and automation.',
      portfolio: 'https://abdul-haseeb-hsb.github.io/portfolio/',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'abdul@devopsmultan.com'
      }
    },
    {
      name: 'Muhammad Ibrahim Kamal',
      role: 'Full Stack Developer',
      avatar: 'IK',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile development.',
      portfolio: 'https://ibrahim-s-portfolio-132e7.web.app/',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'ibrahim@devopsmultan.com'
      }
    },
    {
      name: 'Muhammad Talha',
      role: 'Team Lead',
      avatar: 'MT',
      bio: 'Experienced project manager with a focus on delivering projects on time and within budget while maintaining high quality standards.',
      portfolio: 'https://www.upwork.com/freelancers/talham151',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'talha@devopsmultan.com'
      }
    },
    {
      name: 'Abdullah Arif',
      role: 'Front end Developer',
      avatar: 'AA',
      bio: 'Frontend specialist with expertise in React, Vue.js, and modern UI/UX design principles.',
      portfolio: '',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'abdullah@devopsmultan.com'
      }
    }
  ]

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % team.length)
    }, 4000)
    return () => clearInterval(intervalId)
  }, [team.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % team.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + team.length) % team.length)
  }

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our talented team of experts brings together diverse skills and experiences 
            to deliver innovative solutions that drive your business forward.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {team.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group bg-white dark:bg-dark-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-2xl mx-auto"
                  >
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-3xl">
                          {member.avatar}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-700"></div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 text-lg">
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {member.bio}
                    </p>

                    {/* Portfolio Link */}
                    {member.portfolio && (
                      <div className="mb-6">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          View Portfolio
                        </motion.a>
                      </div>
                    )}

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.social.linkedin}
                        className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.social.twitter}
                        className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.social.github}
                        className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={`mailto:${member.social.email}`}
                        className="w-12 h-12 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-600 dark:bg-primary-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards of quality in every project we undertake.'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and close collaboration with our clients.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-dark-700 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 