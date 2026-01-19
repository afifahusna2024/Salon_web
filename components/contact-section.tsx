"use client"

import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: ["Al Khalidiya, Talal Market,", "Same Building, Mezzanine Floor"],
  },
  {
    icon: Phone,
    title: "Call Us",
    content: ["+971 588630208"],
    link: "tel:+971588630208",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: ["11:00 AM - 9:00 PM", "All Week, No Holiday!"],
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-base tracking-[0.2em] uppercase text-primary font-bold">
              Contact Us
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-foreground/90 leading-relaxed text-xl font-medium">
            {"We'd love to hear from you. Reach out to book your appointment or learn more about our services."}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-foreground/80 text-lg font-semibold hover:text-primary transition-colors"
                >
                  {item.content.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              ) : (
                item.content.map((line, i) => (
                  <p key={i} className="text-foreground/80 text-lg font-semibold">
                    {line}
                  </p>
                ))
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base gap-2 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/971588630208?text=Hi%20I%20I%20want%20to%20book%20an%20appointment%20at%20Main%20Avenue%20Salon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
