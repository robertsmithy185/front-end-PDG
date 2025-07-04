"use client"

import Carousel from "@/components/carousel"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect, useRef, useState } from "react"

// Types for API data
interface Service {
  id: string
  name: string
  description: string
  icon: ReactNode
  category: string
}

interface TourismDestination {
  id: string
  title: string
  image: string
  description: string
}

interface NewsItem {
  id: string
  title: string
  image: string
  date: string
  description: string
}

export default function ParepareLandingPage() {
  const [services, setServices] = useState<Service[]>([])
  const [destinations, setDestinations] = useState<TourismDestination[]>([])
  const [news, setNews] = useState<NewsItem[]>([])
  const router = useRouter()
  const newsSectionRef = useRef<HTMLDivElement>(null)


  // Mock API calls - replace with actual API endpoints
  useEffect(() => {
    // Mock services data
    setServices([
      {
        id: "1",
        name: "Pendidikan",
        description: "Layanan Pendidikan",
        icon: (
          <Image
            src="/images/IconSekolah.svg"
            alt="Icon Sekolah"
            width={40}
            height={40}
          />
        ),
        category: "education",
      },
      {
        id: "2",
        name: "Keuangan",
        description: "Layanan Keuangan",
        icon: (
          <Image
            src="/images/IconKeuangan.svg"
            alt="Icon Keuangan"
            width={40}
            height={40}
          />
        ),
        category: "finance",
      },
      {
        id: "3",
        name: "Kesehatan",
        description: "Layanan Kesehatan",
        icon: (
          <Image
            src="/images/IconKesehatan.svg"
            alt="Icon Kesehatan"
            width={40}
            height={40}
          />
        ),
        category: "health",
      },
      {
        id: "4",
        name: "Telekomunikasi",
        description: "Layanan Telekomunikasi",
        icon: (
          <Image
            src="/images/IconTelekomunikasi.svg"
            alt="Icon Telekomunikasi"
            width={40}
            height={40}
          />
        ),
        category: "telecommunication",
      },
      {
        id: "5",
        name: "Perdagangan",
        description: "Layanan Perdagangan",
        icon: (
          <Image
            src="/images/IconPerdagangan.svg"
            alt="Icon Perdagangan"
            width={40}
            height={40}
          />
        ),
        category: "trade",
      },
      {
        id: "6",
        name: "Industri",
        description: "Layanan Industri",
        icon: (
          <Image
            src="/images/IconIndustri.svg"
            alt="Icon Industri"
            width={40}
            height={40}
          />
        ),
        category: "industry",
      },
      {
        id: "7",
        name: "Pariwisata",
        description: "Layanan Pariwisata",
        icon: (
          <Image
            src="/images/IconPariwisata.svg"
            alt="Icon Pariwisata"
            width={40}
            height={40}
          />
        ),
        category: "tourism",
      },
      {
        id: "8",
        name: "Geografis",
        description: "Informasi Geografis",
        icon: (
          <Image
            src="/images/IconGeografis.svg"
            alt="Icon Geografis"
            width={40}
            height={40}
          />
        ),
        category: "geography",
      },
      {
        id: "9",
        name: "Pemerintahan",
        description: "Layanan Pemerintahan",
        icon: (
          <Image
            src="/images/IconPemerintahan.svg"
            alt="Icon Pemerintahan"
            width={40}
            height={40}
          />
        ),
        category: "government",
      },
      {
        id: "10",
        name: "Sosial",
        description: "Layanan Sosial",
        icon: (
          <Image
            src="/images/IconSosial.svg"
            alt="Icon Sosial"
            width={40}
            height={40}
          />
        ),
        category: "social",
      },
      {
        id: "11",
        name: "Kependudukan",
        description: "Layanan Kependudukan",
        icon: (
          <Image
            src="/images/IconKependudukan.svg"
            alt="Icon Kependudukan"
            width={40}
            height={40}
          />
        ),
        category: "population",
      },
      {
        id: "12",
        name: "Transportasi",
        description: "Layanan Transportasi",
        icon: (
          <Image
            src="/images/IconTransportasi.svg"
            alt="Icon Transportasi"
            width={40}
            height={40}
          />
        ),
        category: "transportation",
      },
      {
        id: "13",
        name: "Pertanian",
        description: "Layanan Pertanian",
        icon: (
          <Image
            src="/images/IconPertanian.svg"
            alt="Icon Pertanian"
            width={40}
            height={40}
          />
        ),
        category: "agriculture",
      },
    ]);

    // Mock destinations data
    setDestinations([
      {
        id: "1",
        title: "Pelabuhan Nusantara",
        image: "/destinasi/kapal.jpg",
        description: "Pelabuhan utama dan spot sunset favorit di Parepare.",
      },
      {
        id: "2",
        title: "Monumen Cinta Sejati Habibie & Ainun",
        image: "/destinasi/monumen.jpeg",
        description: "Monumen ikonik yang melambangkan cinta sejati.",
      },
      {
        id: "3",
        title: "Ladoma Resort",
        image: "/destinasi/ladoma-resort.jpg",
        description: "Resort mewah di tepi laut, cocok untuk liburan santai.",
      },
      {
        id: "4",
        title: "Bulu Nepo",
        image: "/destinasi/bulu-nepo.jpg",
        description: "Wisata alam perbukitan dengan pemandangan kota dari atas.",
      },
      {
        id: "5",
        title: "Tonrangeng River Side",
        image: "/destinasi/tonrangeng.jpg",
        description: "Taman sungai yang indah dengan jembatan unik dan laut.",
      },
      {
        id: "6",
        title: "Pantai Lumpue",
        image: "/destinasi/pantai-lumpue.jpg",
        description: "Pantai tenang dengan pasir bersih dan suasana santai.",
      },
      {
        id: "7",
        title: "Pantai Paputo",
        image: "/destinasi/pantai-paputo.jpg",
        description: "Pantai pasir putih yang cocok untuk liburan keluarga.",
      },
      {
        id: "8",
        title: "Jembatan Kembar Parepare",
        image: "/destinasi/jembatan-kembar.jpg",
        description: "Jembatan ikonik dengan pemandangan indah saat malam hari.",
      },
      {
        id: "9",
        title: "Masjid Terapung BJ Habibie",
        image: "/destinasi/masjid-terapung.jpg",
        description: "Masjid modern di atas laut, tempat ibadah dan wisata religi.",
      },
      {
        id: "10",
        title: "Taman Mattirotasi",
        image: "/destinasi/taman-mattirotasi.jpg",
        description: "Taman kota yang nyaman untuk jogging dan bersantai.",
      },
      {
        id: "11",
        title: "Kuliner Soreang & Pasar Senggol",
        image: "/destinasi/kuliner-soreang.jpg",
        description: "Sentra makanan khas Parepare yang ramai di malam hari.",
      },
    ]);

    // Mock news data
    setNews([
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
      {
        id: "4",
        title: "Festival Budaya Parepare 2025",
        image: "/placeholder.svg?height=300&width=500",
        date: "2024-12-28",
        description: "Perayaan budaya lokal yang meriah",
      },
      {
        id: "5",
        title: "Peningkatan Fasilitas Kesehatan",
        image: "/placeholder.svg?height=300&width=500",
        date: "2024-12-25",
        description: "Modernisasi rumah sakit daerah",
      },
    ])
  }, [])

  const handleServiceClick = (service: Service) => {
    if (service.name === "Perdagangan") {
      router.push("/Dinas_Perdagangan")
    }
    // Add other service routes here
  }

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category)
    // Handle category navigation
  }

  const handleDestinationClick = (destination: TourismDestination) => {
    console.log("Destination clicked:", destination)
    // Handle destination detail navigation
  }

  const handleNewsClick = (newsItem: NewsItem) => {
    console.log("News clicked:", newsItem)
    // Handle news detail navigation
  }

  const handleViewAllNews = () => {
    router.push("/berita")
  }

  // Transform data for carousel components
  const destinationItems = destinations.map((dest) => ({
    id: dest.id,
    title: dest.title,
    image: dest.image,
    description: dest.description,
  }))

  const newsItems = news.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    description: item.description,
    date: item.date,
  }))

  const categories = [
  { name: 'Wirausaha', icon: '/images/Wirausaha.svg' },
  { name: 'Wisatawan', icon: '/images/Wisatawan.svg' },
  { name: 'Pelajar', icon: '/images/Pelajar.svg' },
  { name: 'Masyarakat', icon: '/images/Masyarakat.svg' },
]
  const scrollToNews = () => {
    newsSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar dengan prop scrollToNews */}
      <Navbar onScrollToNews={scrollToNews} />

      {/* Hero Section */}
      <HeroSection
        title="Parepare dalam Genggaman"
        subtitle="Layanan digital kota Parepare, mudah diakses, cepat, dan terpercaya—semuanya hanya dalam satu genggaman."
        description="Temukan berbagai layanan publik, informasi kota, dan pelaporan langsung dari masyarakat."
        ctaText="Jelajahi Layanan"
        onCtaClick={() => {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }}
      />

      {/* Services Section */}
      <div id="services">
        <ServicesSection
          services={services}
          categories={categories}
          onServiceClick={handleServiceClick}
          onCategoryClick={handleCategoryClick}
        />
      </div>

      {/* Carousel Wisata */}
      <Carousel
        title="Destinasi Wisata di Kota Parepare"
        subtitle="Lihat berbagai macam penawaran menarik disini"
        items={destinationItems}
        variant="tourism"
        onItemClick={handleDestinationClick}
      />

      {/* Carousel Berita dengan ref */}
      <div ref={newsSectionRef}>
        <Carousel
          title="Berita Utama"
          subtitle="Berita Seputar Kota Parepare"
          items={newsItems}
          variant="news"
          showButton={true}
          buttonText="Lihat Semua"
          onButtonClick={handleViewAllNews}
          onItemClick={handleNewsClick}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
