import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual database query
      const destinations = [
        {
          id: "1",
          name: "Pelabuhan Nusantara",
          image: "/images/pelabuhan-nusantara.jpg",
          description: "Pelabuhan utama Parepare dan spot sunset favorit.",
        },
        {
          id: "2",
          name: "Monumen Cinta Sejati Habibie & Ainun",
          image: "/images/monumen-habibie-ainun.jpg",
          description: "Monumen ikonik cinta sejati Presiden ke-3 RI.",
        },
        {
          id: "3",
          name: "Ladoma Resort",
          image: "/images/ladoma-resort.jpg",
          description: "Resort mewah di tepi laut, cocok untuk staycation.",
        },
        {
          id: "4",
          name: "Bulu Nepo",
          image: "/images/bulu-nepo.jpg",
          description: "Wisata alam dengan panorama kota dari ketinggian.",
        },
        {
          id: "5",
          name: "Tonrangeng River Side",
          image: "/images/tonrangeng-river.jpg",
          description: "Taman tepi laut dengan jembatan dan pemandangan indah.",
        },
        {
          id: "6",
          name: "Pantai Paputo",
          image: "/images/pantai-paputo.jpg",
          description: "Pantai pasir putih yang cocok untuk rekreasi keluarga.",
        },
        {
          id: "7",
          name: "Taman Mattirotasi",
          image: "/images/taman-mattirotasi.jpg",
          description: "Taman kota untuk jogging dan bersantai bersama keluarga.",
        },
        {
          id: "8",
          name: "Jembatan Kembar Parepare",
          image: "/images/jembatan-kembar.jpg",
          description: "Jembatan ikonik dengan pemandangan laut yang indah.",
        },
        {
          id: "9",
          name: "Masjid Terapung BJ Habibie",
          image: "/images/masjid-terapung.jpg",
          description: "Masjid di atas laut dengan arsitektur modern dan tenang.",
        },
        {
          id: "10",
          name: "Taman Mattirotasi",
          image: "/images/taman-mattirotasi.jpg",
          description: "Taman kota untuk jogging dan bersantai bersama keluarga.",
        },
        {
          id: "11",
          name: "Kuliner Soreang & Pasar Senggol",
          image: "/images/kuliner-soreang.jpg",
          description: "Sentra kuliner malam khas Parepare yang ramai dikunjungi.",
        },
      ];

    return NextResponse.json(destinations)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 })
  }
}
