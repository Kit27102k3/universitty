"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Computer,
  Building,
  Stethoscope,
  Calculator,
  Globe,
  Palette,
  ArrowRight,
  BookOpen,
  MapPin,
  Star,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const statsImages = [
    "/banner-home-3.jpg",
    "/banner-sdg.jpg",
    "/banner-totnghiep.jpg",
    "/banner-hocbong.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % statsImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + statsImages.length) % statsImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      icon: Computer,
      title: "Công nghệ thông tin",
      description:
        "Đào tạo chuyên gia CNTT với kiến thức sâu về lập trình, AI, và phát triển phần mềm.",
      duration: "4 năm",
      degree: "Cử nhân",
    },
    {
      icon: Building,
      title: "Kinh tế - Quản trị",
      description:
        "Phát triển kỹ năng lãnh đạo và quản lý doanh nghiệp trong môi trường toàn cầu.",
      duration: "4 năm",
      degree: "Cử nhân",
    },
    {
      icon: Stethoscope,
      title: "Y tế công cộng",
      description:
        "Đào tạo chuyên gia y tế với định hướng phục vụ cộng đồng và chăm sóc sức khỏe.",
      duration: "5 năm",
      degree: "Bác sĩ",
    },
    {
      icon: Calculator,
      title: "Kỹ thuật",
      description:
        "Chương trình kỹ thuật đa ngành với trang thiết bị hiện đại và giảng viên giàu kinh nghiệm.",
      duration: "4 năm",
      degree: "Kỹ sư",
    },
    {
      icon: Globe,
      title: "Ngoại ngữ",
      description:
        "Phát triển năng lực ngoại ngữ và kỹ năng giao tiếp quốc tế.",
      duration: "4 năm",
      degree: "Cử nhân",
    },
    {
      icon: Palette,
      title: "Nghệ thuật & Thiết kế",
      description:
        "Khuyến khích sáng tạo và phát triển tài năng nghệ thuật trong môi trường học tập hiện đại.",
      duration: "4 năm",
      degree: "Cử nhân",
    },
  ];

  return (
    <section id="programs" className="-mt-10 bg-university-gray/30">
      <div className="relative w-full flex justify-center z-30  mb-16">
        <div className="flex gap-4 w-full max-w-4xl px-4">
          <button className="flex-1 bg-white border-2 border-red-600 text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            Sinh viên
          </button>
          <button className="flex-1 bg-white border-2 border-red-600 text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            Tuyển sinh 2025
          </button>
          <button className="flex-1 bg-white border-2 border-red-600 text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="text-center">
              <div>Tạp chí</div>
              <div>khoa học</div>
            </div>
          </button>
          <button className="flex-1 bg-white border-2 border-red-600 text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            Tuyển dụng
          </button>
          <button className="flex-1 bg-red-600 border-2 border-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg">
            Xét tuyển
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Chương trình đào tạo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá các chương trình đào tạo đa dạng với chất lượng giáo dục
            hàng đầu, được thiết kế để phát triển toàn diện năng lực sinh viên.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-primary-hover transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <span>Thời gian: {program.duration}</span>
                    <span>Bằng cấp: {program.degree}</span>
                  </div>

                  <Button className="w-full group/btn">
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Xem tất cả chương trình
          </Button>
        </div>
      </div>

      {/* Thống kê - Những dấu ấn khó quên */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bên trái - Slideshow hình */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {statsImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {statsImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
              <div
                className="h-full bg-white transition-all duration-1000 ease-linear"
                style={{
                  width: `${((currentSlide + 1) / statsImages.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-center mb-2">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Những dấu ấn khó quên trong{" "}
                <span className="text-red-600">12 năm</span> gắn bó với sứ mệnh
                và phát triển
              </h2>
            </div>
            {/* Bên phải - Thống kê */}
            <div className="grid grid-cols-2 gap-6">
              {/* Sinh viên */}

              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  38.000+
                </div>
                <div className="text-sm text-muted-foreground">Người học</div>
              </div>

              {/* Khuôn viên */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  260.000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Khuôn viên trường (m²)
                </div>
              </div>

              {/* Xếp hạng VNUR */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">61</div>
                <div className="text-sm text-muted-foreground">
                  Bảng xếp hạng VNUR-2024
                </div>
              </div>

              {/* Sinh viên quốc tế */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">80</div>
                <div className="text-sm text-muted-foreground">
                  Sinh viên quốc tế
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
