"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo_salon.jpeg"
              alt="Main Avenue Ladies Beauty Salon Logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="font-serif text-base font-semibold leading-tight">
                Main Avenue
              </p>
              <p className="text-sm text-background/80 font-semibold tracking-wider uppercase">
                Ladies Salon
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-base text-background/90 font-semibold flex items-center gap-1">
            © 2026 Main Avenue Ladies Beauty Salon. All Rights Reserved.
          </p>

          {/* Made with love */}
          <p className="text-base text-background/90 font-semibold flex items-center gap-1">
            Made with <Heart className="w-5 h-5 text-primary fill-primary" /> in Abu Dhabi
          </p>
        </div>
      </div>
    </footer>
  )
}
