import Navigation from '@/components/navigation'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import ServicesSection from '@/components/sections/services'
import WorkSection from '@/components/sections/work'
import ClientsSection from '@/components/sections/clients'
import TeamSection from '@/components/sections/team'
import CareersSection from '@/components/sections/careers'
import ContactSection from '@/components/sections/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <TeamSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 