import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual database query
    const news = [
      {
        id: "1",
        title: "ITH Jalankan Program MBKM 2025",
        image: "/placeholder.svg?height=300&width=500",
        date: "2025-01-02",
        description: "ITH Jalankan Program MBKM 2025",
      },
      {
        id: "2",
        title: "Program Pembangunan Infrastruktur",
        image: "/placeholder.svg?height=300&width=500",
        date: "2025-01-01",
        description: "Update pembangunan infrastruktur kota",
      },
      {
        id: "3",
        title: "Pelayanan Digital Terbaru",
        image: "/placeholder.svg?height=300&width=500",
        date: "2024-12-30",
        description: "Inovasi pelayanan digital untuk masyarakat",
      },
    ]

    return NextResponse.json(news)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}
