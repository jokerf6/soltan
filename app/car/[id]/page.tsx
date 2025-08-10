"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Header } from "@/components/header"
import { useCart, type Car } from "@/contexts/cart-context"
import {
  Star,
  ArrowLeft,
  CalendarIcon,
  Zap,
  Shield,
  Award,
  Gauge,
  Fuel,
  Users,
  Settings,
  CheckCircle,
  Heart,
  Share2,
} from "lucide-react"
import { format } from "date-fns"

const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes Class 2",
    price: 500,
    image: "/luxury-dark-sedan.png",
    rating: 5,
    category: "luxury",
    description:
      "Experience ultimate luxury with this premium Mercedes sedan featuring cutting-edge technology and unparalleled comfort. This vehicle represents the pinnacle of automotive engineering, combining performance with sophistication.",
    features: [
      "Premium Leather Seats",
      "Advanced Safety Systems",
      "Luxury Interior Package",
      "High Performance Engine",
      "Panoramic Sunroof",
      "Premium Sound System",
    ],
    specs: {
      engine: "V8 Biturbo",
      power: "630 HP",
      acceleration: "0-60 mph in 3.4s",
      topSpeed: "250 mph",
    },
  },
  {
    id: 2,
    name: "Range Rover",
    price: 450,
    image: "/placeholder.svg?height=400&width=600&text=Range+Rover",
    rating: 5,
    category: "suv",
    description:
      "Conquer any terrain with this luxury SUV that combines rugged capability with refined elegance. Perfect for both city driving and off-road adventures.",
    features: [
      "All-Terrain Capability",
      "Luxury Comfort Package",
      "Advanced 4WD System",
      "Premium Sound System",
      "Heated Seats",
      "Navigation System",
    ],
    specs: {
      engine: "V8 Supercharged",
      power: "518 HP",
      acceleration: "0-60 mph in 4.3s",
      topSpeed: "225 mph",
    },
  },
  {
    id: 3,
    name: "Mercedes Class",
    price: 500,
    image: "/luxury-black-mercedes-sedan.png",
    rating: 5,
    category: "luxury",
    description:
      "The epitome of automotive excellence, this Mercedes offers unmatched sophistication and performance. Every detail has been crafted to provide the ultimate driving experience.",
    features: [
      "Executive Package",
      "Massage Seats",
      "Ambient Lighting",
      "Premium Audio System",
      "Wireless Charging",
      "Advanced Driver Assistance",
    ],
    specs: {
      engine: "V12 Twin-Turbo",
      power: "621 HP",
      acceleration: "0-60 mph in 3.7s",
      topSpeed: "250 mph",
    },
  },
]

export default function CarDetails() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [car, setCar] = useState<Car | null>(null)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const carImages = [
    car?.image || "/placeholder.svg",
    "/placeholder.svg?height=400&width=600&text=Interior+View",
    "/placeholder.svg?height=400&width=600&text=Side+View",
    "/placeholder.svg?height=400&width=600&text=Rear+View",
  ]

  useEffect(() => {
    const carId = Number.parseInt(params.id as string)
    const foundCar = cars.find((c) => c.id === carId)
    setCar(foundCar || null)
    setIsLoading(false)
  }, [params.id])

  const handleRentNow = () => {
    if (car) {
      addToCart(
        car,
        startDate ? format(startDate, "yyyy-MM-dd") : undefined,
        endDate ? format(endDate, "yyyy-MM-dd") : undefined,
      )
      router.push("/cart")
    }
  }

  const calculateDays = () => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 1
  }

  const totalPrice = car ? car.price * calculateDays() : 0

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    )
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Car Not Found</h1>
          <Button onClick={() => router.push("/")} className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="mb-6 border-gray-700 hover:border-yellow-500 hover:text-yellow-500 animate-fade-in-left"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Gallery */}
              <div className="animate-fade-in-left">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={carImages[selectedImage] || "/placeholder.svg"}
                    alt={car.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className={`border-gray-700 ${isLiked ? "bg-red-500 border-red-500" : "hover:border-yellow-500"}`}
                      onClick={() => setIsLiked(!isLiked)}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? "fill-white" : ""}`} />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-gray-700 hover:border-yellow-500 bg-transparent"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {carImages.map((img, index) => (
                    <div
                      key={index}
                      className={`aspect-video relative cursor-pointer rounded overflow-hidden transition-all duration-300 ${
                        selectedImage === index ? "ring-2 ring-yellow-500" : "hover:opacity-80"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${car.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Car Details */}
              <div className="animate-fade-in-right">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">{car.category.toUpperCase()}</Badge>
                  <Badge variant="outline" className="border-gray-600">
                    Premium
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-yellow-500 transition-colors duration-300">
                  {car.name}
                </h1>

                <div className="flex items-center mb-6">
                  {[...Array(car.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                  <span className="ml-2 text-gray-400">(4.9/5 - 127 reviews)</span>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{car.description}</p>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Zap, label: "Engine", value: car.specs?.engine },
                    { icon: Gauge, label: "Power", value: car.specs?.power },
                    { icon: Fuel, label: "0-60 mph", value: car.specs?.acceleration },
                    { icon: Settings, label: "Top Speed", value: car.specs?.topSpeed },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <spec.icon className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="text-sm text-gray-400">{spec.label}</p>
                          <p className="font-semibold">{spec.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-6 rounded-lg mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-yellow-500">
                      ${car.price}.00
                      <span className="text-lg text-gray-400">/day</span>
                    </span>
                    {startDate && endDate && (
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{calculateDays()} days</p>
                        <p className="text-xl font-bold">Total: ${totalPrice}.00</p>
                      </div>
                    )}
                  </div>

                  {/* Date Selection */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-gray-600 hover:border-yellow-500 justify-start text-left font-normal bg-transparent"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Pick up date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          className="text-white"
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-gray-600 hover:border-yellow-500 justify-start text-left font-normal bg-transparent"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Return date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          className="text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <Button
                    onClick={handleRentNow}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold py-3 transition-all duration-300 hover:scale-105 group"
                  >
                    <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Rent This Car Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">
              Premium <span className="text-yellow-500">Features</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {car.features?.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium group-hover:text-yellow-500 transition-colors duration-300">
                      {feature}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Awards */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Shield, title: "5-Star Safety", desc: "Top safety ratings" },
                { icon: Award, title: "Award Winning", desc: "Industry recognition" },
                { icon: Users, title: "Expert Service", desc: "Professional support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
