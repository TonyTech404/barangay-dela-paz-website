"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Officials", href: "/officials" },
    { name: "News", href: "/news" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Emergency", href: "/emergency" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-[#C4C4C4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#0E58D8] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">DP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#333333] font-poppins">Barangay Dela Paz</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#333333] hover:text-[#0E58D8] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#C4C4C4]">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#333333] hover:text-[#0E58D8] font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
