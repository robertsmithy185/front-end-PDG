"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface Service {
  id: string
  name: string
  description: string
  icon: string
  category: string
}

interface ServicesSectionProps {
  services: Service[]
  categories: string[]
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

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Layanan Kota Parepare</h2>
          <p className="text-gray-600 mb-8">Temukan aplikasi dan pelayanan di Kota Parepare</p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Cari Layanan"
              className="pl-12 py-3 text-lg rounded-full border-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onServiceClick?.(service)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 text-green-500">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Services */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-8">Kategori Layanan</h3>
          <p className="text-gray-600 mb-8">Temukan aplikasi dan pelayanan di Kota Parepare berdasarkan kategori!</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onCategoryClick?.(category)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
