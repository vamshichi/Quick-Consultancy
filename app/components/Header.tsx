'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart2, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Quick Consultancy</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.path ? 'text-blue-600 underline' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-gray-50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.path ? 'text-blue-600 underline' : 'text-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

