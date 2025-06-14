import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/barangay-logo.png" alt="Barangay Dela Paz Official Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-poppins">Barangay Dela Paz</h3>
                <p className="text-sm text-gray-300">Lungsod ng Biñan, Lalawigan ng Laguna</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Lungsod ng Biñan, Lalawigan ng Laguna - Building a stronger community together.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#0E58D8] transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/officials" className="text-gray-300 hover:text-white transition-colors">
                  Officials & Staff
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  News & Announcements
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Barangay Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Barangay Clearance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Certificate of Residency
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Certificate of Indigency
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Business Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#0E58D8] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Dela Paz Street, Barangay Dela Paz, Biñan City, Laguna
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#0E58D8]" />
                <span className="text-gray-300 text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#0E58D8]" />
                <span className="text-gray-300 text-sm">info@delapaz.gov.ph</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2023 Barangay Dela Paz, Lungsod ng Biñan, Lalawigan ng Laguna. All rights reserved. | Official Website
          </p>
        </div>
      </div>
    </footer>
  )
}
