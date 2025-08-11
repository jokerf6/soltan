"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Filter,
  Grid3X3,
  List,
  Heart,
  Share2,
  Download,
  Eye,
  Calendar,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/header";

// نوع البيانات للعناصر في المعرض
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  likes: number;
  views: number;
  featured: boolean;
}

// بيانات تجريبية للمعرض
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "تعديل BMW M3 - تصميم رياضي",
    description: "تعديل شامل لسيارة BMW M3 مع إضافة كت بودي رياضي وتحسينات أداء",
    type: "image",
    src: "/images/gallery/bmw-m3-modified.jpg",
    category: "سيارات رياضية",
    tags: ["BMW", "M3", "كت بودي", "رياضي"],
    date: "2024-01-15",
    author: "فريق السلطان",
    likes: 245,
    views: 1520,
    featured: true,
  },
  {
    id: 2,
    title: "تركيب جرافيك مرسيدس",
    description: "تصميم وتركيب جرافيك مخصص لسيارة مرسيدس بألوان مميزة",
    type: "image",
    src: "/images/gallery/mercedes-wrap.jpg",
    category: "جرافيك",
    tags: ["مرسيدس", "جرافيك", "تركيب", "تصميم"],
    date: "2024-01-10",
    author: "فريق السلطان",
    likes: 189,
    views: 2340,
    featured: true,
  },
  {
    id: 3,
    title: "تعديل داخلي فاخر",
    description: "تجديد كامل للمقصورة الداخلية بجلد طبيعي وإضاءة LED",
    type: "image",
    src: "/images/gallery/lexus-interior.jpg",
    category: "تعديل داخلي",
    tags: ["لكزس", "جلد", "إضاءة", "فاخر"],
    date: "2024-01-08",
    author: "فريق السلطان",
    likes: 156,
    views: 890,
    featured: false,
  },
  {
    id: 4,
    title: "نظام صوتي متطور",
    description: "تركيب نظام صوتي عالي الجودة مع مضخمات وسماعات احترافية",
    type: "image",
    src: "/images/gallery/audio-system-thumb.jpg",
    category: "أنظمة صوتية",
    tags: ["صوت", "مضخمات", "سماعات", "تركيب"],
    date: "2024-01-05",
    author: "فريق السلطان",
    likes: 203,
    views: 1780,
    featured: false,
  },
  {
    id: 5,
    title: "تعديل إضاءة خارجية",
    description: "تركيب إضاءة LED تحت السيارة وإضاءة زينة للجنوط",
    type: "image",
    src: "/images/gallery/led-lighting.jpg",
    category: "إضاءة",
    tags: ["LED", "إضاءة", "زينة", "جنوط"],
    date: "2024-01-03",
    author: "فريق السلطان",
    likes: 178,
    views: 1120,
    featured: false,
  },
  {
    id: 6,
    title: "عملية طلاء كاملة",
    description: "عملية الطلاء الكاملة للسيارة بلون معدني مميز",
    type: "image",
    src: "/images/gallery/paint-job-thumb.jpg",
    category: "طلاء",
    tags: ["طلاء", "معدني", "عملية", "تجديد"],
    date: "2024-01-01",
    author: "فريق السلطان",
    likes: 267,
    views: 3200,
    featured: true,
  },
];

const categories = [
  "الكل",
  "سيارات رياضية",
  "جرافيك",
  "تعديل داخلي",
  "أنظمة صوتية",
  "إضاءة",
  "طلاء",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "الكل" || item.category === selectedCategory
  );

  const featuredItems = galleryItems.filter((item) => item.featured);

  const toggleLike = (itemId: number) => {
    setLikedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const shareItem = (item: GalleryItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-hero.jpg"
            alt="معرض السيارات المعدلة"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 text-center">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <span className="text-yellow-500">معرض</span> أعمالنا
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            اكتشف مجموعة من أفضل أعمال التعديل والتطوير التي قمنا بها
          </p>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-yellow-500">أعمال مميزة</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail || item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-yellow-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-8 h-8 text-black" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-black">مميز</Badge>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{item.views}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart
                          className={`w-4 h-4 cursor-pointer ${
                            likedItems.includes(item.id)
                              ? "fill-red-500 text-red-500"
                              : ""
                          }`}
                          onClick={() => toggleLike(item.id)}
                        />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-yellow-500 hover:bg-yellow-600 text-black"
                          onClick={() => setSelectedItem(item)}
                        >
                          عرض
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={`${
                    selectedCategory === category
                      ? "bg-yellow-500 text-black hover:bg-yellow-600"
                      : "border-gray-600 text-white hover:bg-yellow-500 hover:text-black"
                  } transition-all duration-300`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                className={`${
                  viewMode === "grid"
                    ? "bg-yellow-500 text-black"
                    : "border-gray-600 text-white hover:bg-yellow-500 hover:text-black"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                className={`${
                  viewMode === "list"
                    ? "bg-yellow-500 text-black"
                    : "border-gray-600 text-white hover:bg-yellow-500 hover:text-black"
                }`}
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div
            className={`${
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
            }`}
          >
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-fade-in-up ${
                  viewMode === "list" ? "flex" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${
                    viewMode === "list"
                      ? "w-1/3 aspect-video"
                      : "aspect-video"
                  } relative overflow-hidden`}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail || item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-yellow-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-black/50 text-white text-xs"
                    >
                      {item.type === "image" ? "صورة" : "فيديو"}
                    </Badge>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span className="text-xs">{item.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart
                          className={`w-3 h-3 cursor-pointer ${
                            likedItems.includes(item.id)
                              ? "fill-red-500 text-red-500"
                              : ""
                          }`}
                          onClick={() => toggleLike(item.id)}
                        />
                        <span className="text-xs">{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent
                  className={`${viewMode === "list" ? "flex-1" : ""} p-4`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold group-hover:text-yellow-500 transition-colors duration-300 line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-yellow-500/20"
                        onClick={() => shareItem(item)}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-gray-600"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {item.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString("ar-EG")}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-yellow-500 hover:bg-yellow-600 text-black"
                          onClick={() => setSelectedItem(item)}
                        >
                          عرض تفصيلي
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
              <p className="text-gray-400">
                لم نجد أي عناصر تطابق الفئة المحددة
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for detailed view */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl bg-gray-900 border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-yellow-500">
                {selectedItem.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                {selectedItem.type === "image" ? (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={selectedItem.src}
                    controls
                    className="w-full h-full object-cover rounded-lg"
                    poster={selectedItem.thumbnail}
                  />
                )}
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {selectedItem.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-yellow-500 text-yellow-500"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">الفئة:</span>
                    <p className="font-semibold">{selectedItem.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">التاريخ:</span>
                    <p className="font-semibold">
                      {new Date(selectedItem.date).toLocaleDateString("ar-EG")}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-400">المشاهدات:</span>
                    <p className="font-semibold">{selectedItem.views}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">الإعجابات:</span>
                    <p className="font-semibold">{selectedItem.likes}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button
                    className={`flex-1 ${
                      likedItems.includes(selectedItem.id)
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => toggleLike(selectedItem.id)}
                  >
                    <Heart
                      className={`w-4 h-4 mr-2 ${
                        likedItems.includes(selectedItem.id) ? "fill-current" : ""
                      }`}
                    />
                    {likedItems.includes(selectedItem.id) ? "مُعجب به" : "إعجاب"}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-600 hover:bg-yellow-500 hover:text-black"
                    onClick={() => shareItem(selectedItem)}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    مشاركة
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            هل تريد تعديل سيارتك؟
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            انضم إلى عملائنا المميزين واحصل على تعديل احترافي لسيارتك
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-3"
          >
            تواصل معنا الآن
          </Button>
        </div>
      </section>
    </div>
  );
}

