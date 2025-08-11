"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Users,
  Award,
  Clock,
  CheckCircle,
  Wrench,
  Paintbrush,
  ShieldCheck,
  Target,
  Heart,
  Zap,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Header } from "@/components/header";

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "عميل راضي",
    description: "خدمنا آلاف العملاء بجودة عالية",
  },
  {
    icon: Award,
    number: "10+",
    label: "سنوات خبرة",
    description: "خبرة طويلة في مجال قطع غيار السيارات",
  },
  {
    icon: CheckCircle,
    number: "15000+",
    label: "مشروع مكتمل",
    description: "نفذنا آلاف المشاريع بنجاح",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "خدمة العملاء",
    description: "دعم فني متواصل على مدار الساعة",
  },
];

const services = [
  {
    icon: Paintbrush,
    title: "تصميم جرافيك السيارات",
    description: "تصاميم مبتكرة وجذابة تجعل سيارتك مميزة على الطريق",
    features: ["تصاميم حصرية", "خامات عالية الجودة", "ألوان ثابتة"],
  },
  {
    icon: Wrench,
    title: "قطع غيار أصلية",
    description: "نوفر قطع غيار أصلية ومضمونة لجميع أنواع السيارات",
    features: ["ضمان الجودة", "أسعار تنافسية", "توفر دائم"],
  },
  {
    icon: ShieldCheck,
    title: "تركيب احترافي",
    description: "فريق فني متخصص لضمان تركيب مثالي وآمن",
    features: ["خبرة عالية", "أدوات حديثة", "ضمان التركيب"],
  },
];

const team = [
  {
    name: "أحمد السلطان",
    role: "المؤسس والمدير العام",
    image: "/images/team1.jpg",
    description: "خبرة 15 عام في مجال قطع غيار السيارات",
  },
  {
    name: "محمد علي",
    role: "مدير التصميم",
    image: "/images/team2.jpg",
    description: "متخصص في تصميم جرافيك السيارات",
  },
  {
    name: "سارة أحمد",
    role: "مديرة خدمة العملاء",
    image: "/images/team3.jpg",
    description: "خبيرة في التعامل مع العملاء وحل المشاكل",
  },
];

const values = [
  {
    icon: Target,
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا",
  },
  {
    icon: Heart,
    title: "رضا العملاء",
    description: "رضا عملائنا هو هدفنا الأول ونسعى لتحقيقه دائماً",
  },
  {
    icon: Zap,
    title: "الابتكار",
    description: "نواكب أحدث التقنيات والتطورات في المجال",
  },
  {
    icon: TrendingUp,
    title: "التطوير المستمر",
    description: "نسعى للتطوير والتحسين المستمر في خدماتنا",
  },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
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
              عن <span className="text-yellow-500">فابريكا السلطان</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              رحلة من الشغف والإبداع في عالم قطع غيار السيارات وتصميم الجرافيك
              منذ أكثر من عقد من الزمن
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                قصة <span className="text-yellow-500">نجاحنا</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                بدأت فابريكا السلطان كحلم صغير في عام 2013، عندما قرر أحمد
                السلطان تحويل شغفه بالسيارات إلى مشروع يخدم المجتمع. من ورشة
                صغيرة في حي شعبي، نمت الفابريكا لتصبح واحدة من أبرز الأسماء في
                مجال قطع غيار السيارات وتصميم الجرافيك.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                اليوم، نفخر بخدمة آلاف العملاء في جميع أنحاء البلاد، ونواصل
                رحلتنا في تقديم أفضل الخدمات والمنتجات بجودة عالية وأسعار
                تنافسية.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>جودة مضمونة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>خدمة متميزة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>أسعار تنافسية</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/test1.jpg"
                    alt="فابريكا السلطان"
                    width={300}
                    height={200}
                    className="rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                  <Image
                    src="/images/test2.jpg"
                    alt="ورشة العمل"
                    width={300}
                    height={200}
                    className="rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-8">
                  <Image
                    src="/images/test3.jpg"
                    alt="منتجاتنا"
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              أرقام <span className="text-yellow-500">تتحدث عنا</span>
            </h2>
            <p className="text-gray-300 text-lg">
              إنجازاتنا على مدار السنوات الماضية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center hover:transform hover:scale-105 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                    {stat.number}
                  </h3>
                  <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-yellow-500">خدماتنا</span> المتميزة
            </h2>
            <p className="text-gray-300 text-lg">
              نقدم مجموعة شاملة من الخدمات عالية الجودة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-yellow-500">قيمنا</span> ومبادئنا
            </h2>
            <p className="text-gray-300 text-lg">
              المبادئ التي نؤمن بها ونعمل وفقاً لها
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up hover:transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              فريق <span className="text-yellow-500">العمل</span>
            </h2>
            <p className="text-gray-300 text-lg">
              تعرف على الأشخاص الذين يقفون وراء نجاحنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            جاهز للبدء معنا؟
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            تواصل معنا اليوم واحصل على استشارة مجانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              اتصل بنا الآن
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3"
            >
              <Mail className="w-5 h-5 mr-2" />
              راسلنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

