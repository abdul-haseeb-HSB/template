'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Sparkles, Zap, Star } from 'lucide-react'

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:from-primary-900 dark:to-secondary-900 dark:mix-blend-overlay"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:from-secondary-800 dark:to-accent-800 dark:mix-blend-overlay"
        />
        
        {/* Secondary floating elements */}
        <motion.div
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 90, 180],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full mix-blend-multiply filter blur-lg opacity-50 dark:from-accent-800 dark:to-primary-800 dark:mix-blend-overlay"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            rotate: [180, 270, 360],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-lg opacity-60 dark:from-primary-700 dark:to-accent-700 dark:mix-blend-overlay"
        />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Company Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8 relative"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-3xl shadow-2xl glow-animation relative overflow-hidden">
              <span className="text-white font-bold text-3xl relative z-10">T</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
              />
            </div>
            {/* Floating sparkles around logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 text-accent-400"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-2 -left-2 text-secondary-400"
            >
              <Star className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
          >
            <span className="text-gray-900 dark:text-white">We Build Ideas Into</span>
            <br />
            <span className="text-gradient-animated">Scalable Digital Realities</span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Custom web & mobile apps, cloud infrastructure, and full-stack digital solutions 
            that transform startups and enterprises.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary group relative overflow-hidden"
            >
              <Play className="mr-2 w-5 h-5" />
              <span>See Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects Delivered', icon: Zap },
              { number: '25+', label: 'Happy Clients', icon: Star },
              { number: '5+', label: 'Years Experience', icon: Sparkles },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="stats-card text-center group"
              >
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary-500 dark:text-primary-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-gradient-animated">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <motion.div
            className="absolute inset-0 w-8 h-8 border-2 border-primary-400 rounded-full opacity-0 group-hover:opacity-100"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.button>

      {/* Floating action elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-gradient-animated">🚀</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Innovation</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-20 hidden lg:block"
      >
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-gradient-animated">⚡</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Speed</div>
        </div>
      </motion.div>
    </section>
  )
} 