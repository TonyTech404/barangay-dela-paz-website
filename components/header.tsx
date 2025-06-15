"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import InstallPWAButton from "./install-pwa-button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Officials", href: "/officials" },
    { name: "News", href: "/news" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Emergency", href: "/emergency" },
    { name: "Contact", href: "/contact" },
  ]

  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="bg-white shadow-sm border-b border-[#C4C4C4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/barangay-logo.png"
                alt="Barangay Dela Paz Official Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#333333] font-poppins">Barangay Dela Paz</h1>
              <p className="text-xs text-[#666666] hidden sm:block">Lungsod ng Biñan, Lalawigan ng Laguna</p>
            </div>
          </Link>

          {/* Desktop Navigation and Install Button */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-6 mr-6">
              {navigation.map((item) => {
                const isActive = isActivePath(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-colors relative py-5 ${
                      isActive ? "text-[#0E58D8] font-semibold" : "text-[#333333] hover:text-[#0E58D8]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0E58D8] rounded-full"></span>
                    )}
                  </Link>
                )
              })}
            </nav>
            <div className="border-l border-[#C4C4C4] pl-6">
              <InstallPWAButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#C4C4C4]">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isActive = isActivePath(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-2 px-3 transition-colors rounded-md ${
                      isActive
                        ? "text-[#0E58D8] font-semibold bg-[#E8F0FE]"
                        : "text-[#333333] hover:text-[#0E58D8] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-2 mt-2 border-t border-[#C4C4C4]">
                <InstallPWAButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
