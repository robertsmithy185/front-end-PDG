import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual database query
  const services = [
    { id: "1", name: "Pendidikan", description: "Layanan Pendidikan", icon: "🎓", category: "education" },
    { id: "2", name: "Keuangan", description: "Layanan Keuangan", icon: "💰", category: "finance" },
    { id: "3", name: "Kesehatan", description: "Layanan Kesehatan", icon: "🏥", category: "health" },
    { id: "4", name: "Perdagangan", description: "Layanan Perdagangan", icon: "🛒", category: "trade" },
    { id: "5", name: "Telekomunikasi", description: "Layanan Telekomunikasi", icon: "📡", category: "telecommunication" },
    { id: "6", name: "Industri", description: "Layanan Industri", icon: "🏭", category: "industry" },
    { id: "7", name: "Pariwisata", description: "Layanan Pariwisata", icon: "🏖️", category: "tourism" },
    { id: "8", name: "Geografis", description: "Informasi Geografis", icon: "🗺️", category: "geography" },
    { id: "9", name: "Pemerintahan", description: "Layanan Pemerintahan", icon: "🏛️", category: "government" },
    { id: "10", name: "Sosial", description: "Layanan Sosial", icon: "🤝", category: "social" },
    { id: "11", name: "Kependudukan", description: "Layanan Kependudukan", icon: "🧍‍♂️🧍‍♀️", category: "population" },
    { id: "12", name: "Transportasi", description: "Layanan Transportasi", icon: "🚌", category: "transportation" },
    { id: "13", name: "Pertanian", description: "Layanan Pertanian", icon: "🌾", category: "agriculture" },
  ];

    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 })
  }
}
