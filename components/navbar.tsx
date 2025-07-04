"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const menuItems = [
  { label: "Topik", hasDropdown: true },
  { label: "Berita", hasDropdown: false },
  { label: "FAQ", hasDropdown: false },
  { label: "Support", hasDropdown: false },
]

const topikOptions = [
  "Pendidikan" ,
  "Keuangan" ,
  "Kesehatan" ,
  "Telekomunikasi" ,
  'Perdagangan' ,
  "Industri" ,
  "Pariwisata" ,
  "Geografis" ,
  "Pemerintahan" ,
  "Sosial" ,
  "Kependudukan" ,
  "Transportasi" ,
  "Pertanian"
]

interface NavbarProps {
  onScrollToNews?: () => void
}

export default function Navbar({ onScrollToNews }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-6xl px-4">
      <div className="flex items-center justify-between w-full px-4 py-3 rounded-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-green-700">
          <Image src="/images/logoParepare.png" alt="Logo" width={30} height={30} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white md:bg-green-600 px-6 py-2 rounded-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => {
                if (item.label === "Berita") {
                  onScrollToNews?.()
                }
              }}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-green-100 transition-colors">
                <span className="font-medium">{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </div>

              {/* Dropdown untuk Topik */}
              {item.label === "Topik" && (
                <div className="absolute top-full mt-2 left-0 bg-white text-green-700 rounded-xl shadow-lg py-4 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-auto w-80">
                  <div className="grid grid-cols-2 gap-2">
                    {topikOptions.map((option, idx) => (
                      <Link
                        key={idx}
                        href={`/topik/${option.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-2 py-1 hover:bg-green-100 rounded-md text-sm transition-colors"
                      >
                        {option}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-[#FF9100] text-white font-medium px-6 py-3 rounded-full shadow hover:bg-[#FF9100]/80 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-xl shadow px-4 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className="font-semibold text-green-700 cursor-pointer"
                onClick={() => {
                  if (item.label === "Berita") {
                    onScrollToNews?.()
                    setIsMobileMenuOpen(false)
                  }
                }}
              >
                {item.label}
              </div>
              {item.label === "Topik" && (
                <div className="mt-1 space-y-1 pl-4">
                  {topikOptions.map((option, idx) => (
                    <Link
                      key={idx}
                      href={`/topik/${option.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-gray-700 hover:text-green-600"
                    >
                      {option}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/login"
            className="block text-center mt-4 bg-[#FF9100] text-white font-medium px-4 py-2 rounded-full shadow hover:bg-[#FF9100]/80 transition-colors"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}