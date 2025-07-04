'use client'

import Navbar from "@/components/navbar"
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Sobat Harga',
    icon: '/images/chart-candlestick.svg',
    href: '/layanan/sobat-harga',
  },
  {
    title: 'Distribusi Pupuk',
    icon: '/images/shopping-cart.svg',
    href: '/distribusi-pupuk',
  },
  {
    title: 'Analisis Harga Bahan Pokok',
    icon: '/images/bar-chart.svg',
    href: '/analisis-harga',
  },
  {
    title: 'Data Industri Kecil Menengah',
    icon: '/images/store.svg',
    href: '/data-ikm',
  },
]

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="mt-16"> {/* atur jarak dari atas */}
            <Navbar />
        </div>
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
        Dinas Perdagangan Kota Parepare
      </h1>
      <p className="text-gray-700 leading-relaxed mb-10">
        Dinas Perdagangan Kota Parepare adalah instansi pemerintah daerah yang
        menangani urusan di bidang <strong>Perdagangan</strong>,{' '}
        <strong>Industri</strong>, dan <strong>Metrologi</strong>. Dinas ini
        berkomitmen untuk meningkatkan pelayanan publik, mendukung pertumbuhan
        usaha lokal, dan menjaga keadilan dalam transaksi melalui pengawasan
        alat ukur. Kini, layanan dan informasi dinas dapat diakses dengan mudah
        melalui portal Parepare Dalam Genggaman.
      </p>
      <p className="text-3xl md:text-2xl font-bold text-orange-500 mb-4">Jelajahi Layanan Kami</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="flex items-center justify-center p-6 border rounded-xl shadow-sm hover:shadow-md transition hover:bg-green-50 group"
          >
            <div className="flex flex-col items-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="mb-4"
              />
              <p className="text-green-600 text-center font-medium group-hover:underline">
                {service.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
