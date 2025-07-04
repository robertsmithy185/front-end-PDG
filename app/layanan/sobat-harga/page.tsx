"use client"

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Minus, TrendingDown, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Types for API data
interface PriceData {
  date: string
  price: number
}

interface MarketPrice {
  id: string
  marketName: string
  currentPrice: number
  yesterdayPrice: number
  difference: number
  lastUpdated: string
  priceHistory: PriceData[]
}

interface Commodity {
  id: string
  name: string
  category: string
  unit: string
}

interface Category {
  id: string
  name: string
}

export default function SobatHargaPage() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [commodities, setCommodities] = useState<Commodity[]>([])
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedCommodity, setSelectedCommodity] = useState<string>("")
  const [loading, setLoading] = useState(true)

  // Fetch data from APIs
  useEffect(() => {
    fetchCategories()
    fetchCommodities()
    fetchMarketPrices()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/price-categories")
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const fetchCommodities = async () => {
    try {
      const response = await fetch("/api/commodities")
      const data = await response.json()
      setCommodities(data)
      if (data.length > 0) {
        setSelectedCommodity(data[0].id)
      }
    } catch (error) {
      console.error("Error fetching commodities:", error)
    }
  }

  const fetchMarketPrices = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/market-prices?commodity=${selectedCommodity}`)
      const data = await response.json()
      setMarketPrices(data)
    } catch (error) {
      console.error("Error fetching market prices:", error)
    } finally {
      setLoading(false)
    }
  }

  // Refetch market prices when commodity changes
  useEffect(() => {
    if (selectedCommodity) {
      fetchMarketPrices()
    }
  }, [selectedCommodity])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  const getPriceTrend = (difference: number) => {
    if (difference > 0) {
      return { icon: TrendingUp, color: "text-red-500", text: "naik" }
    } else if (difference < 0) {
      return { icon: TrendingDown, color: "text-green-500", text: "turun" }
    } else {
      return { icon: Minus, color: "text-gray-500", text: "tetap" }
    }
  }

  const selectedCommodityData = commodities.find((c) => c.id === selectedCommodity)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar/>

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">Sobat Harga Kota Parepare</h1>
          <p className="text-lg text-gray-600 mb-8">Temukan Kemudahan dalam mengecek harga barang</p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48 bg-white border-2 rounded-full">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCommodity} onValueChange={setSelectedCommodity}>
              <SelectTrigger className="w-full sm:w-48 bg-white border-2 rounded-full">
                <SelectValue placeholder="Barang" />
              </SelectTrigger>
              <SelectContent>
                {commodities
                  .filter((c) => selectedCategory === "all" || c.category === selectedCategory)
                  .map((commodity) => (
                    <SelectItem key={commodity.id} value={commodity.id}>
                      {commodity.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Selected Commodity Title */}
        {selectedCommodityData && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedCommodityData.name}/{selectedCommodityData.unit}
            </h2>
          </div>
        )}

        {/* Market Price Cards */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {marketPrices.map((market) => {
              const trend = getPriceTrend(market.difference)
              const TrendIcon = trend.icon

              return (
                <Card key={market.id} className="overflow-hidden shadow-lg">
                  <CardHeader className="bg-slate-800 text-white">
                    <CardTitle className="text-xl font-bold text-center">{market.marketName}</CardTitle>
                    <p className="text-center text-sm opacity-90">
                      Terakhir diperbarui: {formatDate(market.lastUpdated)}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6">
                    {/* Price Summary */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Hari ini</p>
                        <p className="font-bold text-lg">{formatPrice(market.currentPrice)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Kemarin</p>
                        <p className="font-bold text-lg">{formatPrice(market.yesterdayPrice)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Selisih</p>
                        <div className={`flex items-center justify-center ${trend.color}`}>
                          <TrendIcon className="w-4 h-4 mr-1" />
                          <span className="font-bold">
                            {Math.abs(market.difference) > 0 ? formatPrice(Math.abs(market.difference)) : "Rp. 0"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price Trend Alert */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                      <div className="flex items-center">
                        <div className="bg-orange-100 rounded-full p-2 mr-3">
                          <TrendIcon className={`w-4 h-4 ${trend.color}`} />
                        </div>
                        <span className="text-sm text-gray-700">
                          Harga barang mengalami <span className="font-semibold">{trend.text}</span>{" "}
                          {Math.abs((market.difference / market.yesterdayPrice) * 100).toFixed(2)}% dari harga kemarin
                        </span>
                      </div>
                    </div>

                    {/* Price Chart */}
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={market.priceHistory}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis
                            dataKey="date"
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => {
                              const date = new Date(value)
                              return date.toLocaleDateString("id-ID", {
                                day: "2-digit",
                                month: "short",
                              })
                            }}
                          />
                          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `Rp${(value / 1000).toFixed(0)}k`} />
                          <Tooltip
                            formatter={(value: number) => [formatPrice(value), "Harga"]}
                            labelFormatter={(label) => formatDate(label)}
                          />
                          <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#f97316"
                            strokeWidth={3}
                            dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: "#f97316", strokeWidth: 2 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-4">Data Harga Penjualan Perhari</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* Additional Statistics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">{marketPrices.length}</div>
              <p className="text-gray-600">Pasar Terpantau</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">{commodities.length}</div>
              <p className="text-gray-600">Komoditas Terdaftar</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
              <p className="text-gray-600">Pemantauan Aktif</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
