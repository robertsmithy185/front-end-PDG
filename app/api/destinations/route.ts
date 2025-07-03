import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual database query
    const destinations = [
      {
        id: "1",
        name: "Pelabuhan Nusantara",
        image: "/placeholder.svg?height=300&width=400",
        description: "Pelabuhan utama Parepare",
      },
      {
        id: "2",
        name: "Monument B.J. Habibie dan Ainun",
        image: "/placeholder.svg?height=300&width=400",
        description: "Monument bersejarah",
      },
      {
        id: "3",
        name: "Ladoma Resort",
        image: "/placeholder.svg?height=300&width=400",
        description: "Resort wisata alam",
      },
      {
        id: "4",
        name: "Bulu Nepo",
        image: "/placeholder.svg?height=300&width=400",
        description: "Wisata alam pegunungan",
      },
      {
        id: "5",
        name: "Tonrangeng River Side",
        image: "/placeholder.svg?height=300&width=400",
        description: "Wisata sungai",
      },
    ]

    return NextResponse.json(destinations)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 })
  }
}
