"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Search,
  Filter,
  Grid,
  List,
  Heart,
  ShoppingCart,
  Zap,
  Eye,
  ArrowUpDown,
} from "lucide-react";
import { Header } from "@/components/header";
import { useCart, type Car as CarType } from "@/contexts/cart-context";

const allProducts: CarType[] = [
  {
    id: 1,
    name: "اكصدام لانوس أبيض",
    price: 500,
    image: "/images/item.jpg",
    category: "اكصدامات",
    description: "أكصدامات قوية، تصميم فخم، وخامات تدوم. خلي سيارتك مميزة على الطريق",
    rating: 5,
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "شاشة اسمارت",
    price: 150,
    image: "/images/item2.jpg",
    category: "شاشات",
    description: "شاشات سمارت تجمع الفخامة والابتكار لسيارتك",
    rating: 4,
    inStock: true,
    featured: false,
  },
  {
    id: 3,
    name: "فرش جلد",
    price: 75,
    image: "/images/item3.jpg",
    category: "فرش",
    description: "فرش كراسي يجمع الأناقة مع المتانة",
    rating: 5,
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "اكصدام BMW أسود",
    price: 750,
    image: "/images/item.jpg",
    category: "اكصدامات",
    description: "اكصدام BMW عالي الجودة بتصميم رياضي أنيق",
    rating: 5,
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "شاشة أندرويد 10 بوصة",
    price: 300,
    image: "/images/item2.jpg",
    category: "شاشات",
    description: "شاشة أندرويد بحجم 10 بوصة مع جميع التطبيقات",
    rating: 4,
    inStock: false,
    featured: true,
  },
  {
    id: 6,
    name: "فرش جلد طبيعي",
    price: 120,
    image: "/images/item3.jpg",
    category: "فرش",
    description: "فرش من الجلد الطبيعي عالي الجودة",
    rating: 5,
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: "وش مرسيدس",
    price: 400,
    image: "/images/item.jpg",
    category: "وشوش",
    description: "وش مرسيدس أصلي بتصميم كلاسيكي فاخر",
    rating: 5,
    inStock: true,
    featured: true,
  },
  {
    id: 8,
    name: "وش BMW رياضي",
    price: 450,
    image: "/images/item.jpg",
    category: "وشوش",
    description: "وش BMW بتصميم رياضي حديث",
    rating: 4,
    inStock: true,
    featured: false,
  },
];

const categories = [
  { value: "all", label: "جميع الأقسام" },
  { value: "اكصدامات", label: "اكصدامات" },
  { value: "شاشات", label: "شاشات" },
  { value: "فرش", label: "فرش" },
  { value: "وشوش", label: "وشوش" },
];

const sortOptions = [
  { value: "default", label: "الترتيب الافتراضي" },
  { value: "price-low", label: "السعر: من الأقل للأعلى" },
  { value: "price-high", label: "السعر: من الأعلى للأقل" },
  { value: "name", label: "الاسم" },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };


  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-500">معرض</span> المنتجات
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              اكتشف مجموعتنا الكاملة من قطع غيار السيارات الفاخرة
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="اختر القسم" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      className="text-white hover:bg-gray-700"
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="ترتيب حسب" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {sortOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-white hover:bg-gray-700"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-800 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`${
                    viewMode === "grid"
                      ? "bg-yellow-500 text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`${
                    viewMode === "list"
                      ? "bg-yellow-500 text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-400">
            عرض {filteredProducts.length} من {allProducts.length} منتج
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">لا توجد منتجات</h3>
              <p className="text-gray-400">جرب تغيير معايير البحث</p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-6"
              }
            >
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-fade-in-up ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list"
                        ? "w-48 h-48 flex-shrink-0"
                        : "aspect-video"
                    }`}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Product Badges */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      {product.featured && (
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          مميز
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          نفد المخزون
                        </span>
                      )}
                    </div>

                    {/* Favorite Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 left-2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          favorites.includes(product.id)
                            ? "text-red-500 fill-current"
                            : "text-white"
                        }`}
                      />
                    </Button>
                  </div>

                  <CardContent
                    className={`p-6 ${
                      viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-yellow-500 font-semibold">
                          {product.category}
                        </span>
                    
                      </div>

                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-500 transition-colors duration-300">
                        {product.name}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yellow-500">
                        {product.price}.00
                        <span className="text-sm text-gray-400 mr-1">ج.م</span>
                      </span>
                      
                      <div className="flex gap-2">
               
                        <Button
                          className={`${
                            product.inStock
                              ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                              : "bg-gray-600 text-gray-400 cursor-not-allowed"
                          } group/btn`}
                          onClick={() => product.inStock && addToCart(product)}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? (
                            <>
                              <Zap className="w-4 h-4 mr-1 group-hover/btn:animate-pulse" />
                              اشتري الآن
                            </>
                          ) : (
                            "نفد المخزون"
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            اشترك في النشرة الإخبارية
          </h2>
          <p className="text-gray-300 mb-8">
            احصل على آخر العروض والمنتجات الجديدة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              اشترك الآن
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

