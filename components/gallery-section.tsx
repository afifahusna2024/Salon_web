"use client"

const galleryImages = [
  {
    src: "/images/salon-1.jpeg",
    alt: "Elegant salon chairs and styling stations",
  },
  {
    src: "/images/salon-2.jpeg",
    alt: "Professional treatment area with mirrors",
  },
  {
    src: "/images/salon-3.jpeg",
    alt: "Luxurious spa treatment room",
  },
]

export default function GallerySection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-base tracking-[0.2em] uppercase text-primary font-bold">
              Gallery
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Elegant Space
          </h2>
          <p className="text-foreground/90 leading-relaxed text-xl font-medium">
            Step into our luxurious salon and experience the perfect blend of comfort, 
            style, and sophistication.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-base font-bold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
