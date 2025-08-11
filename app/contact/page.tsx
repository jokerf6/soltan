"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Calendar,
  Headphones,
} from "lucide-react";
import { Header } from "@/components/header";

const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    details: ["+20 123 456 7890", "+20 987 654 3210"],
    description: "متاحون للرد على استفساراتك",
  },
  {
    icon: Mail,
    title: "راسلنا",
    details: ["info@fabrikasultan.com", "support@fabrikasultan.com"],
    description: "نرد على رسائلك خلال 24 ساعة",
  },
  {
    icon: MapPin,
    title: "زورنا",
    details: ["شارع الهرم، الجيزة", "مصر"],
    description: "مفتوح من السبت للخميس",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: ["السبت - الخميس: 9 ص - 9 م", "الجمعة: 2 م - 9 م"],
    description: "خدمة العملاء متاحة دائماً",
  },
];

const services = [
  "استشارة مجانية",
  "تصميم جرافيك السيارات",
  "قطع غيار أصلية",
  "تركيب وصيانة",
  "خدمة ما بعد البيع",
  "أخرى",
];

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

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        message: "",
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

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
              <span className="text-yellow-500">تواصل</span> معنا
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنكون سعداء للرد على
              استفساراتك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-8 h-8 text-yellow-500" />
                    <h2 className="text-3xl font-bold">أرسل لنا رسالة</h2>
                  </div>
                  
                  {submitStatus === "success" && (
                    <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-400">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-yellow-500" />
                          الاسم الكامل *
                        </label>
                        <Input
                          type="text"
                          placeholder="أدخل اسمك الكامل"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4 text-yellow-500" />
                          البريد الإلكتروني *
                        </label>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Phone className="w-4 h-4 text-yellow-500" />
                          رقم الهاتف
                        </label>
                        <Input
                          type="tel"
                          placeholder="+20 123 456 7890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Headphones className="w-4 h-4 text-yellow-500" />
                          نوع الخدمة
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                            <SelectValue placeholder="اختر نوع الخدمة" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            {services.map((service) => (
                              <SelectItem
                                key={service}
                                value={service}
                                className="text-white hover:bg-gray-600"
                              >
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-yellow-500" />
                        موضوع الرسالة *
                      </label>
                      <Input
                        type="text"
                        placeholder="ما هو موضوع رسالتك؟"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-yellow-500" />
                        الرسالة *
                      </label>
                      <Textarea
                        placeholder="اكتب رسالتك هنا..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 min-h-32"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          جاري الإرسال...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          إرسال الرسالة
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-fade-in-right space-y-8">
              {/* Map Placeholder */}
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">موقعنا على الخريطة</h3>
                      <p className="text-gray-400">شارع الهرم، الجيزة، مصر</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Phone className="w-6 h-6 text-yellow-500" />
                    اتصال سريع
                  </h3>
                  <p className="text-gray-300 mb-6">
                    هل تحتاج مساعدة فورية؟ اتصل بنا الآن أو تواصل معنا عبر وسائل
                    التواصل الاجتماعي
                  </p>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Phone className="w-5 h-5 mr-2" />
                      اتصل الآن: +20 123 456 7890
                    </Button>
                    
                    <div className="flex gap-4 justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        <Facebook className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                      >
                        <Instagram className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black"
                      >
                        <TikTokIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">أسئلة شائعة</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">ما هي مدة الضمان؟</h4>
                        <p className="text-gray-400 text-sm">نوفر ضمان سنة كاملة على جميع منتجاتنا</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">هل التركيب مجاني؟</h4>
                        <p className="text-gray-400 text-sm">نعم، التركيب مجاني مع الشراء</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">هل تقدمون خدمة التوصيل؟</h4>
                        <p className="text-gray-400 text-sm">نعم، نوصل لجميع أنحاء القاهرة والجيزة</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-4">
          <Card className="bg-red-900/20 border-red-500/30">
            <CardContent className="p-6 text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">حالة طوارئ؟</h3>
              <p className="text-gray-300 mb-4">
                في حالة الطوارئ أو الحاجة لمساعدة فورية، اتصل بخط الطوارئ
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                خط الطوارئ: +20 100 000 0000
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

