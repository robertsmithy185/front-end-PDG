"use client"


interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  backgroundImage = "/images/hero-bg.png",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F4E8D8] px-4 sm:px-6 lg:px-12 py-12">
  {/* Background Blur Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  ></div>

  {/* Content */}
  <div className="container mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-12 items-center">
      
      {/* Kiri - Judul dan Subtitle */}
      <div className="space-y-4 text-center lg:text-left mt-10 sm:mt-0">
        <h1 className="text-2xl md:text-4xl font-bold text-orange-500">{title}</h1>
        <p className="text-base text-gray-700 max-w-sm mx-auto lg:mx-0">{subtitle}</p>
        <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-base"
            onClick={onCtaClick}
          >
            {ctaText}
        </button>
      </div>

      {/* Tengah - Gambar */}
      <div className="flex justify-center items-center h-full">
        <img
          src="/images/fotowalikota.png"
          alt="Ilustrasi"
          className="w-full max-w-none h-auto object-contain max-h-[600px]"
        />
      </div>

      {/* Kanan - Deskripsi */}
      <div className="space-y-4 text-center lg:text-right">
        <h2 className="text-xl md:text-2xl font-bold text-orange-500">{description}</h2>
        <p className="text-base text-gray-700">
          Dirancang untuk memudahkan warga, membangun kota bersama.
        </p>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 z-50 -mb-[2rem] sm:-mb-[2rem] lg:-mb-[1rem]">
    <img
      src="/images/desain3.png"
      alt="Desain Bawah"
      className="w-screen h-auto object-cover"
    />
  </div>
</section>
  )
}
