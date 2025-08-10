import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
})
export const metadata: Metadata = {
  title: "AutoCar - Luxury Car Rentals",
  description: "Experience luxury lifestyle rentals with premium vehicles",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
