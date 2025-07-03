"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CarouselItem {
  id: string
  title: string
  image: string
  description: string
  date?: string
}

interface CarouselProps {
  title: string
  subtitle?: string
  items: CarouselItem[]
  itemsPerView?: number
  showButton?: boolean
  buttonText?: string
  onButtonClick?: () => void
  onItemClick?: (item: CarouselItem) => void
  variant?: "tourism" | "news"
}

export default function Carousel({
  title,
  subtitle,
  items,
  itemsPerView = 3,
  showButton = false,
  buttonText = "Lihat Semua",
  onButtonClick,
  onItemClick,
  variant = "tourism",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= items.length - itemsPerView ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? Math.max(0, items.length - itemsPerView) : prev - 1))
  }

  const sectionBg = variant === "tourism" ? "bg-orange-50" : "bg-white"

  return (
    <section className={`py-16 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">{title}</h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
          {showButton && (
            <Button
              variant="outline"
              className="text-green-500 border-green-500 hover:bg-green-50 bg-transparent"
              onClick={onButtonClick}
            >
              {buttonText} →
            </Button>
          )}
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(items.length * 100) / itemsPerView}%`,
              }}
            >
              {items.map((item) => (
                <div key={item.id} className={`w-1/${itemsPerView} flex-shrink-0 px-3`}>
                  <Card
                    className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer"
                    onClick={() => onItemClick?.(item)}
                  >
                    <div className={`relative ${variant === "tourism" ? "h-64" : "h-48"}`}>
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className={`font-semibold ${variant === "tourism" ? "text-lg" : "text-sm"} mb-1`}>
                          {item.title}
                        </h3>
                        <p className="text-xs opacity-90">{item.description}</p>
                        {item.date && (
                          <p className="text-xs opacity-75 mt-1">
                            {new Date(item.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {items.length > itemsPerView && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
                onClick={nextSlide}
                disabled={currentIndex >= items.length - itemsPerView}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
