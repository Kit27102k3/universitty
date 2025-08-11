"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Bell,
  Calendar,
  FileText,
  User,
  BookOpen,
  BarChart2,
  ChevronDown,
  Home,
  Search,
  Menu,
  LogOut,
  Settings,
  User as UserIcon,
  CreditCard,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import StudentHeader from "../components/StudentHeader";
import BackToTop from "@/components/BackToTop";

export default function StudentPortalPage() {
  const { t } = useLanguage();
  const router = useRouter();

  // Fake student info
  const student = {
    avatar: "/me.jpg",
    id: "2110339",
    name: "Nguyễn Trọng Khiêm",
    gender: "Nam",
    dob: "27/10/2003",
    pob: "Sóc Trăng",
    class: "DH21TIN06",
    course: "2021",
    level: "Đại học",
    type: "Chính quy 4",
    major: "Công nghệ thông tin",
  };

  // Fake stats
  const reminders = 0;
  const schedule = 0;
  const exams = 0;

  // Fake course data
  const courses = [
    { code: "010100086181", name: "Anh văn căn bản 1", credits: 3 },
    { code: "010100089854", name: "Toán cao cấp 1", credits: 3 },
    { code: "010100087274", name: "Giáo dục thể chất 1", credits: 1 },
    { code: "010100089644", name: "Tin học căn bản", credits: 3 },
  ];

  // Chart data
  const chartData = [
    { period: "HK1", yourScore: 8.0, avgScore: 7.5 },
    { period: "HK2", yourScore: 7.7, avgScore: 7.2 },
    { period: "HK3", yourScore: 9.1, avgScore: 8.8 },
    { period: "HK4", yourScore: 9.7, avgScore: 9.3 },
    { period: "HK5", yourScore: 9.3, avgScore: 8.9 },
    { period: "HK6", yourScore: 9.6, avgScore: 9.1 },
  ];

  const maxScore = Math.max(
    ...chartData.map((d) => Math.max(d.yourScore, d.avgScore))
  );

  // Fake news data
  const newsItems = [
    {
      id: 1,
      title: "Thông báo lịch đăng ký học phần HK1",
      time: "10 phút trước",
      icon: FileText,
      url: "/tin-tuc/dang-ky-hoc-phan-hk1"
    },
    {
      id: 2,
      title: "Sự kiện Hội thảo AI & Ứng dụng",
      time: "1 giờ trước",
      icon: Calendar,
      url: "/tin-tuc/hoi-thao-ai-ung-dung"
    },
    {
      id: 3,
      title: "Học bổng khuyến học 2025",
      time: "Hôm qua",
      icon: BookOpen,
      url: "/tin-tuc/hoc-bong-khuyen-hoc-2025"
    },
    {
      id: 4,
      title: "Thông báo nghỉ học do bảo trì điện",
      time: "2 ngày trước",
      icon: Bell,
      url: "/tin-tuc/thong-bao-nghi-hoc-bao-tri-dien"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Custom Header */}
      <StudentHeader student={student} newsItems={newsItems} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Dòng 1: 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Cột trái: Thông tin sinh viên */}
          <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Thông tin sinh viên
              </h2>
              <div className="flex gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200 mb-2">
                    <Image
                      src={student.avatar}
                      alt="avatar"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    Xem chi tiết
                  </a>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div>
                    <span className="font-semibold">MSSV:</span>{" "}
                    <span className="text-blue-700 font-semibold">
                      {student.id}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Lớp học:</span>{" "}
                    {student.class}
                  </div>
                  <div>
                  <span className="font-semibold">Họ tên:</span> {student.name}
                  </div>
                  <div>
                    <span className="font-semibold">Khóa học:</span>{" "}
                    {student.course}
                  </div>
                  <div>
                    <span className="font-semibold">Giới tính:</span>{" "}
                    {student.gender}
                  </div>
                  <div>
                    <span className="font-semibold">Bậc đào tạo:</span>{" "}
                    {student.level}
                  </div>
                  <div>
                    <span className="font-semibold">Ngày sinh:</span>{" "}
                    <span className="font-semibold text-blue-700">
                      {student.dob}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Loại hình đào tạo:</span>{" "}
                    {student.type}
                  </div>
                  <div>
                    <span className="font-semibold">Nơi sinh:</span>{" "}
                    <span className="font-semibold text-blue-700">
                      {student.pob}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Ngành:</span>{" "}
                    <span className="font-semibold text-blue-700">
                      {student.major}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          {/* Cột phải: Nhắc nhở và lịch */}
          <div className="flex flex-col gap-6 h-full">
            {/* Dòng trên: Nhắc nhở mới, chưa xem */}
            <div className="bg-white rounded-lg shadow p-6 flex-1 flex flex-col justify-center text-center">
              <div className="text-3xl font-bold text-blue-700">
                {reminders}
              </div>
              <div className="text-gray-600 text-sm mb-2">
                Nhắc nhở mới, chưa xem
              </div>
              <a href="#" className="text-blue-600 text-xs hover:underline">
                Xem chi tiết
              </a>
            </div>
            {/* Dòng dưới: 2 box ngang nhau */}
            <div className="grid grid-cols-2 gap-6 flex-1">
              <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col justify-center">
                <div className="text-3xl font-bold text-blue-700">
                  {schedule}
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  Lịch học trong tuần
                </div>
                <a href="#" className="text-blue-600 text-xs hover:underline">
                  Xem chi tiết
                </a>
                <Calendar className="w-5 h-5 text-blue-300 mx-auto mt-1" />
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col justify-center">
                <div className="text-3xl font-bold text-orange-600">
                  {exams}
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  Lịch thi trong tuần
                </div>
                <a href="#" className="text-orange-600 text-xs hover:underline">
                  Xem chi tiết
                </a>
                <Calendar className="w-5 h-5 text-orange-300 mx-auto mt-1" />
              </div>
            </div>
          </div>
        </div>
        {/* Dòng 2: 3 cột ngang nhau */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cột 1: Kết quả học tập */}
          <section className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Kết quả học tập
                </h2>
                <div className="relative">
                  <select className="appearance-none border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none">
                    <option>HK1(2021-2022)</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              {/* Chart */}
              <div className="h-64 flex items-end justify-between gap-2">
                {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="relative w-full h-40 flex items-end">
                      {/* Your Score Bar */}
                      <div
                        className="w-full bg-orange-500 rounded-t"
                        style={{
                          height: `${(data.yourScore / maxScore) * 100}%`,
                        }}
                      ></div>
                      {/* Average Score Line */}
                      <div
                        className="absolute w-full border-t-2 border-yellow-400"
                      style={{ bottom: `${(data.avgScore / maxScore) * 100}%` }}
                      >
                        <div className="w-3 h-3 bg-yellow-400 rounded-full -mt-1.5 mx-auto"></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                      {data.period}
                    </div>
                  </div>
                ))}
              </div>
              {/* Legend */}
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className="text-sm">Điểm của bạn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                  <span className="text-sm">Điểm TB lớp học phần</span>
                </div>
              </div>
          </section>
          {/* Cột 2: Tiến độ học tập */}
          <section className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tiến độ học tập
              </h3>
              <div className="relative flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="#e5e7eb" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="16"
                    strokeDasharray="314"
                    strokeDashoffset="0"
                  />
                  <circle cx="60" cy="60" r="40" fill="#fff" />
                </svg>
                <div className="absolute text-lg font-bold text-green-600">
                  161/161
                </div>
              </div>
          </section>
          {/* Cột 3: Lớp học phần */}
          <section className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Lớp học phần
                </h3>
                <div className="relative">
                  <select className="appearance-none border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none">
                    <option>HK1(2021-2022)</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <div key={index} className="border-b border-gray-100 pb-2">
                    <div className="text-blue-600 text-sm font-medium">
                      {course.code}
                    </div>
                    <div className="text-gray-800 text-sm">{course.name}</div>
                    <div className="text-gray-600 text-xs">
                      {course.credits} tín chỉ
                    </div>
                  </div>
                ))}
              </div>
          </section>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </main>
  );
}
