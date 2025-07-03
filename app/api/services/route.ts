import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual database query
    const services = [
      { id: "1", name: "Pendidikan", description: "Layanan Pendidikan", icon: "🎓", category: "education" },
      { id: "2", name: "Keuangan", description: "Layanan Keuangan", icon: "💰", category: "finance" },
      { id: "3", name: "Kesehatan", description: "Layanan Kesehatan", icon: "🏥", category: "health" },
      { id: "4", name: "Perdagangan", description: "Layanan Perdagangan", icon: "🛒", category: "trade" },
    ]

    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 })
  }
}
