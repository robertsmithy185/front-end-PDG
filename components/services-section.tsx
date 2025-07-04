"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

interface Service {
  id: string
  name: string
  description: string
  icon: string
  category: string
}

interface Category {
  name: string
  icon: string // path gambar
}

interface ServicesSectionProps {
  services: Service[]
  categories: Category[]
  onServiceClick?: (service: Service) => void
  onCategoryClick?: (category: string) => void
}

export default function ServicesSection({
  services,
  categories,
  onServiceClick,
  onCategoryClick,
}: ServicesSectionProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Layanan Kota Parepare</h2>
          <p className="text-gray-600 mb-8">Temukan aplikasi dan pelayanan di Kota Parepare</p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-8 h-8" />
            <Input
              placeholder="Cari Layanan"
              className="pl-12 py-6 text-lg rounded-xl border-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Service Categories + Scroll Buttons */}
        <div className="relative mb-12">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable Container */}
          <div ref={scrollRef} className="overflow-x-auto scroll-smooth scrollbar-hide">
            <div className="flex gap-16 w-max max-w-full px-8">
              {filteredServices.map((service) => (
                <Card
                  key={service.id}
                  className="min-w-[250px] flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => onServiceClick?.(service)}
                >
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-green-100 text-2xl">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Category Services */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-8">Kategori Layanan</h3>
          <p className="text-gray-600 mb-8">Temukan aplikasi dan pelayanan di Kota Parepare berdasarkan kategori!</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onCategoryClick?.(category.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <img src={category.icon} alt={category.name} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
