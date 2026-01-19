"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Luxury salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-base tracking-[0.3em] uppercase text-primary font-bold">
              Welcome to
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            <span className="block text-balance">Main Avenue</span>
            <span className="block text-primary">Ladies Beauty Salon</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-10 font-semibold leading-relaxed">
            Luxury Beauty & Hair Care for Modern Women
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base gap-2 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/971588630208?text=Hi%20I%20I%20want%20to%20book%20an%20appointment%20at%20Main%20Avenue%20Salon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Book Appointment on WhatsApp
            </a>
          </Button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
