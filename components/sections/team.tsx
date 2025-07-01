'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      avatar: 'AC',
      bio: 'Former Google engineer with 10+ years in software development. Passionate about building scalable solutions and leading teams to deliver exceptional results.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'alex@tbd.com'
      }
    },
    {
      name: 'Sarah Williams',
      role: 'CTO & Co-Founder',
      avatar: 'SW',
      bio: 'Expert in cloud architecture and DevOps with experience at AWS and Microsoft. Specializes in building robust, scalable infrastructure solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sarah@tbd.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Design',
      avatar: 'MR',
      bio: 'Award-winning UI/UX designer with 8+ years creating beautiful, intuitive user experiences. Former design lead at Apple and Airbnb.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'michael@tbd.com'
      }
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Frontend Engineer',
      avatar: 'EJ',
      bio: 'React and Next.js specialist with expertise in modern web development. Passionate about performance optimization and user experience.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@tbd.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Backend Engineer',
      avatar: 'DK',
      bio: 'Full-stack developer with deep expertise in Node.js, Python, and cloud services. Focuses on building scalable APIs and microservices.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'david@tbd.com'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'AI/ML Engineer',
      avatar: 'LT',
      bio: 'Machine learning specialist with PhD in Computer Science. Expert in implementing AI solutions for real-world business problems.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'lisa@tbd.com'
      }
    }
  ]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-dark-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">
                    {member.avatar}
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-700"></div>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.twitter}
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.github}
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
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