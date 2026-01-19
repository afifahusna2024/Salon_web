"use client"

import { Award, Users, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Decades of expertise in premium beauty services",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly experienced professionals at your service",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our top priority",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only the finest products and techniques",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-base tracking-[0.2em] uppercase text-primary font-bold">
              About Us
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where Beauty Meets Excellence
          </h2>
          <p className="text-foreground/90 leading-relaxed text-xl font-medium">
            At Main Avenue Ladies Beauty Salon, we believe every woman deserves to feel 
            beautiful. With over 20 years of experience, our team of highly skilled 
            beauticians specializes in premium ladies beauty and hair services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/80 text-base leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-foreground/90 leading-relaxed text-lg font-medium">
            Trusted by countless clients for our commitment to quality, hygiene, and 
            luxury care. We focus on delivering elegant results that enhance your 
            natural beauty and leave you feeling confident and radiant.
          </p>
        </div>
      </div>
    </section>
  )
}
