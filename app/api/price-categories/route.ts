import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual database query
    const categories = [
      { id: "1", name: "Beras & Serealia" },
      { id: "2", name: "Sayuran" },
      { id: "3", name: "Buah-buahan" },
      { id: "4", name: "Protein Hewani" },
      { id: "5", name: "Bumbu & Rempah" },
      { id: "6", name: "Minyak & Lemak" },
    ]

    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}
