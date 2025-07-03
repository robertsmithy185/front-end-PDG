import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const commodityId = searchParams.get("commodity")

    // Mock data - replace with actual database query
    const generatePriceHistory = (basePrice: number) => {
      const history = []
      const dates = ["2025-01-27", "2025-01-28", "2025-01-29", "2025-01-30", "2025-01-31", "2025-02-01", "2025-02-02"]

      dates.forEach((date, index) => {
        const variation = (Math.random() - 0.5) * 4000 // Random variation ±2000
        history.push({
          date,
          price: Math.round(basePrice + variation),
        })
      })

      return history
    }

    const marketPrices = [
      {
        id: "1",
        marketName: "Pasar Sumpang",
        currentPrice: 20000,
        yesterdayPrice: 22000,
        difference: -2000,
        lastUpdated: "2025-01-02T10:00:00Z",
        priceHistory: generatePriceHistory(21000),
      },
      {
        id: "2",
        marketName: "Pasar Lakessi",
        currentPrice: 20000,
        yesterdayPrice: 22000,
        difference: -2000,
        lastUpdated: "2025-01-02T10:00:00Z",
        priceHistory: generatePriceHistory(21000),
      },
      {
        id: "3",
        marketName: "Pasar Sentral",
        currentPrice: 21500,
        yesterdayPrice: 21000,
        difference: 500,
        lastUpdated: "2025-01-02T09:30:00Z",
        priceHistory: generatePriceHistory(21250),
      },
      {
        id: "4",
        marketName: "Pasar Tradisional Bacukiki",
        currentPrice: 19500,
        yesterdayPrice: 20000,
        difference: -500,
        lastUpdated: "2025-01-02T11:15:00Z",
        priceHistory: generatePriceHistory(19750),
      },
    ]

    return NextResponse.json(marketPrices)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch market prices" }, { status: 500 })
  }
}
