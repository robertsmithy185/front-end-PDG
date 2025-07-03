"use client"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  backgroundImage = "/images/hero-bg.png",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-500">{title}</h1>
            <p className="text-lg text-gray-700 max-w-lg">{subtitle}</p>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>
          <div className="text-right space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500">{description}</h2>
            <p className="text-lg text-gray-700">Dirancang untuk memudahkan warga, membangun kota bersama.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
