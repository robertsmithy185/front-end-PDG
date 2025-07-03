"use client"

import { MapPin, Phone, Printer, Twitter, Linkedin, Facebook } from "lucide-react"

interface FooterProps {
  contactInfo?: {
    address: string
    phone: string
    fax: string
  }
  aboutSections?: {
    title: string
    content: string
  }[]
  socialLinks?: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
  copyright?: string
}

export default function Footer({
  contactInfo = {
    address: "345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345",
    phone: "(123) 456-7890",
    fax: "(123) 456-7890",
  },
  aboutSections = [
    {
      title: "Tentang Parepare dalam Genggaman",
      content:
        '"Parepare dalam Genggaman" adalah platform digital terpadu milik Pemerintah Kota Parepare yang bertujuan untuk memudahkan masyarakat dalam mengakses berbagai layanan publik, mendapatkan informasi, dan memantau perkembangan kota hanya melalui satu portal online.',
    },
    {
      title: "Tentang Satu Data Parepare",
      content:
        "Satu Data Parepare adalah portal resmi Pemerintah Kota Parepare yang menyediakan data terbuka dan terstandarisasi dari berbagai instansi daerah. Portal ini menjadi kebijakan berbagi data, keterbukaan informasi publik, serta kolaborasi antara pemerintah dan masyarakat.",
    },
  ],
  socialLinks = {},
  copyright = "© 2025 Pemerintah Kota Parepare - Parepare dalam Genggaman. Seluruh hak cipta dilindungi undang-undang.",
}: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">LOGO</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Printer className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">{contactInfo.fax}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              )}
              {!socialLinks.twitter && !socialLinks.linkedin && !socialLinks.facebook && (
                <>
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </>
              )}
            </div>
          </div>

          {/* About Sections */}
          {aboutSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8 text-sm">
              <span className="cursor-pointer hover:text-green-400 transition-colors">Kebijakan Privasi</span>
              <span className="cursor-pointer hover:text-green-400 transition-colors">Syarat dan Ketentuan</span>
            </div>
            <p className="text-sm text-gray-400 text-center">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
