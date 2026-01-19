import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import ChatBot from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <SocialSection />
      <Footer />
      <ChatBot />
    </main>
  )
}
