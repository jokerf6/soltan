"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Car,
  MapPinIcon,
  Crown,
  ArrowRight,
  Zap,
  Paintbrush,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/header";
import { useCart, type Car as CarType } from "@/contexts/cart-context";
import { useRouter } from "next/navigation";

const cars: CarType[] = [
  {
    id: 1,
    name: "اكصدام لانوس أبيض",
    price: 500,
    image: "/images/item.jpg",
    category: "اكصدامات",
    description:
      "أكصدامات قوية، تصميم فخم، وخامات تدوم. خلي سيارتك مميزة على الطريق",
  },
  {
    id: 2,
    name: "شاشة اسمارت",
    price: 150,
    image: "/images/item2.jpg",
    category: "شاشات",
    description: "شاشات سمارت تجمع الفخامة والابتكار لسيارتك",
  },
  {
    id: 3,
    name: "فرش جلد",
    price: 75,
    image: "/images/item3.jpg",
    category: "فرش",
    description: " فرش كراسي يجمع الأناقة مع المتانة",
  },
  // {
  //   id: 2,
  //   name: "Range Rover",
  //   price: 450,
  //   image: "/placeholder.svg?height=300&width=400&text=Range+Rover",
  //   rating: 5,
  //   category: "suv",
  //   description: "Conquer any terrain with this luxury SUV that combines rugged capability with refined elegance.",
  //   features: ["All-Terrain", "Luxury Comfort", "Advanced 4WD", "Premium Sound"],
  //   specs: {
  //     engine: "V8 Supercharged",
  //     power: "518 HP",
  //     acceleration: "0-60 mph in 4.3s",
  //     topSpeed: "225 mph",
  //   },
  // },
  // {
  //   id: 3,
  //   name: "Mercedes Class",
  //   price: 500,
  //   image: "/luxury-black-mercedes-sedan.png",
  //   rating: 5,
  //   category: "luxury",
  //   description: "The epitome of automotive excellence, this Mercedes offers unmatched sophistication and performance.",
  //   features: ["Executive Package", "Massage Seats", "Ambient Lighting", "Premium Audio"],
  //   specs: {
  //     engine: "V12 Twin-Turbo",
  //     power: "621 HP",
  //     acceleration: "0-60 mph in 3.7s",
  //     topSpeed: "250 mph",
  //   },
  // },
];

const features = [
  {
    title: "تصميم فريد",
    description:
      "ابتكر شكل سيارتك بتصاميم مميزة تجذب الأنظار وتعبّر عن شخصيتك.",
    icon: Paintbrush, // مثال من lucide-react أو أيقونة مناسبة
  },
  {
    title: "خامات عالية الجودة",
    description: "نستخدم خامات احترافية مقاومة للعوامل الجوية لضمان مظهر يدوم.",
    icon: ShieldCheck,
  },
  {
    title: "تركيب دقيق",
    description: "فريق محترف يضمن تركيب مثالي بدون فقاعات أو عيوب.",
    icon: Wrench,
  },
];
export default function LuxuryCarRental() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useCart();
  const navigation = useRouter();
  const links = [
    "https://www.facebook.com/fabrikasoltan/",
    "https://www.tiktok.com/@alsoltan2_1",
  ];
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCars = cars.filter(
    (car) => activeFilter === "all" || car.category === activeFilter
  );
  const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 50 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/background.jpg"
            alt="Luxury car in modern setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span
                className="inline-block animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                قمة الرفاهية
              </span>
              <br />
              <span
                className="inline-block animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                أسلوب حياة لا مثيل له
              </span>
              <br />
              <span
                className="inline-block animate-fade-in-up text-yellow-500"
                style={{ animationDelay: "0.6s" }}
              >
                قطع غيار فاخرة
              </span>
            </h1>
            <p
              className={`text-xl mb-8 text-gray-300 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              لأن سيارتك تستحق الأفضل
            </p>
            <Button
              className={`bg-transparent border-2 cursor-pointer border-white text-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black px-8 py-3 text-lg transition-all duration-500 group ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              اكتشف الأن
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Floating Animation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Today's Specials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 lg:mb-0 animate-fade-in-left">
              <span className="text-yellow-500">منتجاتنا</span>
            </h2>
            <div className="flex flex-wrap gap-4 animate-fade-in-right">
              {[
                { key: "all", label: "كل الاقسام" },
                { key: "suv", label: "وشوش" },
                { key: "luxury", label: "اكصدامات" },
              ].map((filter) => (
                <Button
                  key={filter.key}
                  variant="outline"
                  className={`border-gray-600 text-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-yellow-500 border-yellow-500 text-black"
                      : "bg-transparent"
                  }`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <Card
                key={car.id}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-semibold transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                    {car.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {car.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {car.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-500">
                      {car.price}.00
                      <span className="text-sm text-gray-400">ج.م</span>
                    </span>
                    <div className="flex space-x-2">
                      <Button
                        className="bg-yellow-500 hover:bg-yellow-600 text-black group/btn"
                        onClick={() => addToCart(car)}
                      >
                        <Zap className="w-4 h-4 mr-1 group-hover/btn:animate-pulse" />
                        اشتري الان
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-left">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-20 animate-pulse h-full w-100"></div>
              <video
                style={{ height: "500px", width: "600px" }}
                src="/videos/Download.mp4"
                width={600}
                height={400}
                className="rounded-lg relative z-10 hover:scale-105 transition-transform duration-700"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="inline-block hover:text-yellow-500 transition-colors duration-300">
                  شغل فاخر
                </span>
                <br />
                <span className="inline-block hover:text-yellow-500 transition-colors duration-300">
                  عندنا وبس
                </span>
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-yellow-500 font-semibold animate-pulse">
                  تابعنا
                </span>
                <div className="flex space-x-3">
                  {[Facebook, TikTokIcon].map((Icon, index) => (
                    <Icon
                      key={index}
                      onClick={() => navigation.push(links[index])}
                      className="w-6 h-6 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                تصميم وتركيب جرافيك{" "}
                <span className="text-yellow-500">السيارات باحتراف</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                حوّل سيارتك لتحفة فنية على الطريق! نقدم خدمة لزق وتركيب جرافيك
                السيارات بأحدث الخامات والتقنيات، مع دقة عالية في التصميم
                والتنفيذ، لتجذب الأنظار في الفعاليات والمناسبات الخاصة. مظهر
                عصري، ألوان جذابة، وحماية تدوم.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center group animate-fade-in-up hover:transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-yellow-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/test1.jpg"
                    alt="Luxury car"
                    width={300}
                    height={200}
                    className="rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                  <Image
                    src="/images/test2.jpg"
                    alt="Car interior"
                    width={300}
                    height={200}
                    className="rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-8">
                  <Image
                    src="/images/test3.jpg"
                    alt="Luxury interior"
                    width={300}
                    height={400}
                    className="rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500 via-transparent to-blue-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 border-2 border-yellow-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Car className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-xl font-bold group-hover:text-yellow-500 transition-colors duration-300">
                  السلطان
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    text: "6 اكتوبر الحي الحادي عشر المجاوره السابعه, 6 October City, Egypt",
                  },
                  { icon: Phone, text: "92758520 10 20+" },
                  { icon: Mail, text: "fhakem75@gmail.com" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <item.icon className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-yellow-500 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 mt-6">
                {[Facebook, TikTokIcon].map((Icon, index) => (
                  <Icon
                    key={index}
                    onClick={() => navigation.push(links[index])}
                    className="w-6 h-6 hover:text-yellow-500 cursor-pointer transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="lg:col-span-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="الاسم الاول"
                  className="bg-gray-800/50 cursor-pointer backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-500 transition-all duration-300"
                />
                <Input
                  placeholder="الاسم الاخير"
                  className="bg-gray-800/50 cursor-pointer backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-500 transition-all duration-300"
                />
                <Input
                  placeholder="البريد الالكتروني"
                  type="email"
                  className="bg-gray-800/50 cursor-pointer backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-500 transition-all duration-300"
                />
                <Input
                  placeholder="رقم الهاتف"
                  className="bg-gray-800/50 cursor-pointer backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-500 transition-all duration-300"
                />
              </div>
              <Textarea
                placeholder="العنوان"
                className="mt-4 bg-gray-800/50 backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400 min-h-[100px] focus:border-yellow-500 transition-all duration-300"
              />
              <Button className="mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-2 w-full md:w-auto transition-all duration-300 hover:scale-105">
                إرسال رسالة
              </Button>
            </div>
          </div>

          <div
            className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-gray-400 text-sm">
 © 2024   حقوق الطبع والنشر السلطان
            </p>
            <p className="text-gray-400 text-sm">
              تم التصميم والتطوير بواسطة Sailentra
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
