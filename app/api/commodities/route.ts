import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual database query
    const commodities = [
      { id: "1", name: "Beras Varietas Kristal (Premium)", category: "1", unit: "Kg" },
      { id: "2", name: "Beras Varietas IR64", category: "1", unit: "Kg" },
      { id: "3", name: "Jagung Pipilan Kering", category: "1", unit: "Kg" },
      { id: "4", name: "Cabai Merah Keriting", category: "5", unit: "Kg" },
      { id: "5", name: "Cabai Rawit Merah", category: "5", unit: "Kg" },
      { id: "6", name: "Bawang Merah", category: "5", unit: "Kg" },
      { id: "7", name: "Bawang Putih", category: "5", unit: "Kg" },
      { id: "8", name: "Daging Sapi", category: "4", unit: "Kg" },
      { id: "9", name: "Daging Ayam", category: "4", unit: "Kg" },
      { id: "10", name: "Telur Ayam", category: "4", unit: "Kg" },
    ]

    return NextResponse.json(commodities)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch commodities" }, { status: 500 })
  }
}
