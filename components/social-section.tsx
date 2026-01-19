"use client"

import { Instagram, Facebook, Youtube } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/mainavenuesalonofficial?igsh=MW8xN2t4dDhkMnRxeA==",
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61581478814641",
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "Snapchat",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301a.99.99 0 0 1 .42-.09.78.78 0 0 1 .51.18c.21.18.315.45.315.72 0 .39-.21.72-.555.93-.045.03-.105.06-.165.09-.36.18-.855.42-1.155.63-.195.135-.24.33-.24.435 0 .12.03.27.06.405.03.105.06.21.09.36.225.72.63 1.365 1.17 1.845.39.36.81.63 1.26.855.18.09.36.165.54.225.42.135.63.405.63.735 0 .045-.015.165-.045.285-.135.54-.735.93-1.815 1.185-.09.03-.27.06-.45.105-.225.06-.54.12-.72.165-.09.03-.18.045-.27.075-.18.03-.315.15-.345.315l-.015.075c-.075.315-.15.615-.285.9-.165.3-.465.465-.81.465-.09 0-.21-.015-.33-.03-.24-.045-.495-.09-.87-.09-.18 0-.36.015-.555.03-.345.03-.75.06-1.245.165-.6.135-1.02.465-1.515.855-.885.72-1.89 1.545-4.095 1.545-2.205 0-3.21-.825-4.095-1.545-.495-.39-.915-.72-1.515-.855-.495-.105-.9-.135-1.245-.165a8.97 8.97 0 0 0-.555-.03c-.375 0-.63.045-.87.09-.12.015-.24.03-.33.03-.345 0-.645-.165-.81-.465-.135-.285-.21-.585-.285-.9l-.015-.075c-.03-.165-.165-.285-.345-.315-.09-.03-.18-.045-.27-.075-.18-.045-.495-.105-.72-.165-.18-.045-.36-.075-.45-.105-1.08-.255-1.68-.645-1.815-1.185a.585.585 0 0 1-.045-.285c0-.33.21-.6.63-.735.18-.06.36-.135.54-.225.45-.225.87-.495 1.26-.855.54-.48.945-1.125 1.17-1.845.03-.15.06-.255.09-.36.03-.135.06-.285.06-.405 0-.105-.045-.3-.24-.435-.3-.21-.795-.45-1.155-.63-.06-.03-.12-.06-.165-.09a.997.997 0 0 1-.555-.93c0-.27.105-.54.315-.72a.78.78 0 0 1 .51-.18c.135 0 .285.03.42.09.375.18.735.3 1.035.3.195 0 .33-.045.4-.09l-.03-.51-.003-.06c-.105-1.628-.23-3.654.3-4.846C7.86 1.069 11.216.793 12.207.793z"/>
      </svg>
    ),
    url: "https://www.snapchat.com/add/mainavenue2025?share_id=y4mKNQAbypI&locale=en-AE",
    color: "hover:bg-[#FFFC00] hover:text-black",
  },
  {
    name: "Threads",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.73 2.07-1.146 3.446-1.204.955-.04 1.887.046 2.774.26.014-.72-.07-1.371-.25-1.945-.267-.85-.7-1.452-1.288-1.79-.654-.375-1.498-.533-2.51-.47-.935.058-1.763.364-2.396.887-.652.54-1.024 1.247-1.105 2.1l-2.026-.194c.126-1.36.74-2.493 1.778-3.276 1.015-.766 2.283-1.193 3.666-1.279h.059c1.424 0 2.637.282 3.604.84.98.566 1.704 1.427 2.1 2.49.238.64.367 1.363.389 2.15.892.345 1.66.835 2.28 1.453 1.05 1.046 1.618 2.4 1.645 3.918.032 1.79-.532 3.4-1.676 4.786-1.417 1.717-3.612 2.747-6.526 3.064-.36.039-.724.058-1.09.058zm.167-9.885c-.263 0-.526.009-.79.027-.942.056-1.693.283-2.233.675-.517.375-.767.847-.745 1.402.022.438.245.8.683 1.083.505.328 1.2.487 2.012.461 1.113-.044 1.98-.434 2.58-1.16.458-.555.778-1.318.953-2.271-.81-.143-1.624-.217-2.46-.217z"/>
      </svg>
    ),
    url: "https://www.threads.com/@mainavenuesalonofficial",
    color: "hover:bg-foreground hover:text-background",
  },
  {
    name: "Google",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    url: "https://share.google/h57V1my2upL0XsJfC",
    color: "hover:bg-[#4285F4]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@mainavenueladiessalonofficial?si=hgJLQk-88cKe0Qop",
    color: "hover:bg-[#FF0000]",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    url: "https://www.tiktok.com/@main.avenue.ladie?_r=1&_t=ZS-93CwOAXUsYW",
    color: "hover:bg-foreground hover:text-background",
  },
]

export default function SocialSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-base tracking-[0.2em] uppercase text-primary font-bold">
              Follow Us
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Stay Connected
          </h2>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-5 py-3 rounded-full bg-background border border-border transition-all duration-300 hover:border-transparent hover:text-white ${social.color}`}
                aria-label={`Follow us on ${social.name}`}
              >
                {typeof social.icon === "function" ? (
                  <social.icon />
                ) : (
                  <social.icon className="w-5 h-5" />
                )}
                <span className="text-base font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
