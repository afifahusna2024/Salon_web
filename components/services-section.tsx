"use client"

import { Scissors, Sparkles, Hand, Droplets, Palette, Heart } from "lucide-react"

const serviceCategories = [
  {
    icon: Droplets,
    title: "Waxing",
    services: ["Hand Waxing (Full / Half)", "Leg Waxing (Full / Half)"],
  },
  {
    icon: Sparkles,
    title: "Facials",
    services: ["Hydra Facial", "De-Tan Facial", "Fresh Fruits Facial"],
  },
  {
    icon: Heart,
    title: "Spa",
    services: ["Hand Spa", "Leg Spa"],
  },
  {
    icon: Scissors,
    title: "Hair Treatments",
    services: ["Keratin Treatment", "Protein Treatment", "Deep Conditioning Treatment"],
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    services: ["Blow-Drying", "Hair Curling", "Hair Coloring"],
  },
  {
    icon: Palette,
    title: "Make-up",
    services: ["Party Make-up"],
  },
  {
    icon: Hand,
    title: "Nails",
    services: ["Nail Coloring", "Nail Art", "Nail Extensions"],
  },
  {
    icon: Sparkles,
    title: "Threading",
    services: ["Eyebrow Threading"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-base tracking-[0.2em] uppercase text-primary font-bold">
              Our Services
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Beauty Services
          </h2>
          <p className="text-foreground/90 leading-relaxed text-xl font-medium">
            Discover our comprehensive range of luxury beauty treatments designed to 
            pamper and enhance your natural beauty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group p-4 sm:p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <category.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="text-foreground/80 text-base font-medium flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* More Services Note */}
        <div className="mt-12 text-center">
          <p className="text-foreground/90 italic text-xl font-semibold">
            And many more beauty services available.
          </p>
        </div>
      </div>
    </section>
  )
}
