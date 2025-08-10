"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { useCart } from "@/contexts/cart-context"
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  CreditCard,
  Shield,
  Truck,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react"

export default function CartPage() {
  const router = useRouter()
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert("Booking confirmed! You will receive a confirmation email shortly.")
    setIsCheckingOut(false)
  }

  const subtotal = getTotalPrice()
  const tax = subtotal * 0.1
  const total = subtotal + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[80vh]">
          <div className="text-center animate-fade-in-up">
            <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-400 mb-8">Discover our luxury car collection and start your journey</p>
            <Button
              onClick={() => router.push("/")}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="mb-6 border-gray-700 hover:border-yellow-500 hover:text-yellow-500 animate-fade-in-left"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>

          <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">
            Your <span className="text-yellow-500">Rental Cart</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      {/* Car Image */}
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Car Details */}
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-2 hover:text-yellow-500 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <Badge className="bg-yellow-500 text-black mb-3">{item.category.toUpperCase()}</Badge>

                        {item.startDate && item.endDate && (
                          <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>Pick up: {item.startDate}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>Return: {item.endDate}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Quantity & Price */}
                      <div className="text-right">
                        <div className="flex items-center justify-end space-x-2 mb-4">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 border-gray-600 hover:border-yellow-500 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 border-gray-600 hover:border-yellow-500 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        <p className="text-2xl font-bold text-yellow-500 mb-2">${item.price * item.quantity}.00</p>
                        <p className="text-sm text-gray-400 mb-4">${item.price}/day</p>

                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 animate-fade-in-right">
                <CardHeader>
                  <CardTitle className="text-lg">Promo Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-gray-700 border-gray-600 focus:border-yellow-500"
                    />
                    <Button variant="outline" className="border-gray-600 hover:border-yellow-500 bg-transparent">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 animate-fade-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax & Fees</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-gray-600" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-yellow-500">${total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 animate-fade-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {[
                      { icon: Shield, text: "Secure Payment" },
                      { icon: Truck, text: "Free Delivery" },
                      { icon: Clock, text: "24/7 Support" },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <feature.icon className="w-4 h-4 text-yellow-500" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold py-4 text-lg transition-all duration-300 hover:scale-105 animate-fade-in-right"
                style={{ animationDelay: "0.3s" }}
              >
                {isCheckingOut ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-black"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </>
                )}
              </Button>

              {/* Pickup Location */}
              <Card
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 animate-fade-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                    Pickup Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">
                    AutoCar Premium Location
                    <br />
                    Dubai Marina, UAE
                    <br />
                    Available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
