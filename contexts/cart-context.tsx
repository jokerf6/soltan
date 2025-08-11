"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface Car {
  id: number
  name: string
  price: number
  image: string
  category: string
  description?: string
  rating?: number
  inStock?: boolean
  featured?: boolean
}

interface CartItem extends Car {
  quantity: number
  startDate?: string
  endDate?: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (car: Car, startDate?: string, endDate?: string) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  getTotalPrice: () => number
  getCartCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (car: Car, startDate?: string, endDate?: string) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === car.id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1, startDate, endDate } : item,
        )
      }
      return [...prev, { ...car, quantity: 1, startDate, endDate }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
