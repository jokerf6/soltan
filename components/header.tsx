"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, Phone, ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getCartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 border-2 border-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Car className="w-5 h-5 text-yellow-500" />
          </div>
          <span className="text-xl font-bold transition-colors duration-300 group-hover:text-yellow-500">السلطان</span>
        </Link>



        <nav className="hidden md:flex space-x-8">
          {[{title:"الرئيسية", link:"/Home"}, {title:"المعرض", link:"Gallery"}, {title:"عن فابريكا", link:"About"}, { title:"تواصل معنا", link:"Contact Us"}].map((item) => (
            <Link
              key={item.link}
              href={item.link === "Home" ? "/" : `/${item.link.toLowerCase().replace(" ", "-")}`}
              className="relative hover:text-yellow-500 transition-colors duration-300 group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div dir="ltr" className=" justify-center flex items-center space-x-4">

          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-gray-700 bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-black/95 backdrop-blur-md border-t border-gray-800 px-4 py-4 space-y-4">
       {[{title:"الرئيسية", link:"/Home"}, {title:"المعرض", link:"Gallery"}, {title:"عن فابريكا", link:"About"}, { title:"تواصل معنا", link:"Contact Us"}].map((item) => (
                    <Link
              key={item.link}
              href={item.link === "Home" ? "/" : `/${item.link.toLowerCase().replace(" ", "-")}`}
              className="block hover:text-yellow-500 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
