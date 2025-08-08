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

export default function StudentPortalPage() {
  const { t } = useLanguage();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
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

  const handleNewsClick = (url: string) => {
    setShowNewsDropdown(false);
    router.push(url);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Custom Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="text-red-600 font-bold text-2xl mr-2">
                  <Image
                    src="/nctu-logo.png"
                    alt="logo"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="text-sm flex flex-col items-center justify-center ">
                  <div className="font-semibold text-[8px] -mb-1 text-[#51bb1a]">
                    BỘ GIÁO DỤC VÀ ĐÀO TẠO
                  </div>
                  <div className="font-semibold text-[10px] text-red-500">
                    TRƯỜNG ĐẠI HỌC NAM CẦN THƠ
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Home className="w-5 h-5" />
                <span className="text-sm">Trang chủ</span>
              </button>
              {/* Tin tức dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  onClick={() => {
                    setShowNewsDropdown((prev) => !prev);
                    setShowUserDropdown(false);
                  }}
                >
                <Bell className="w-5 h-5" />
                <span className="text-sm">Tin tức</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showNewsDropdown ? "rotate-180" : ""}`} />
                </button>
                {/* News Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 ease-in-out ${
                    showNewsDropdown
                      ? "opacity-100 transform translate-y-0 max-h-96"
                      : "opacity-0 transform -translate-y-2 max-h-0 pointer-events-none"
                  }`}
                >
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <div className="font-medium text-gray-900 text-sm">Tin tức mới</div>
                    <div className="text-xs text-gray-500">Cập nhật trong ngày</div>
                  </div>
                  <div
                    className="py-1 pr-3 overflow-y-auto max-h-80"
                    style={{
                      transition: "max-height 0.3s",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#d1d5db transparent",
                      msOverflowStyle: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.scrollbarColor = "#9ca3af transparent";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.scrollbarColor = "#d1d5db transparent";
                    }}
                  >
                    <style jsx>{`
                      div::-webkit-scrollbar { width: 6px; }
                      div::-webkit-scrollbar-track { background: transparent; }
                      div::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; transition: background 0.2s; }
                      div::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
                    `}</style>
                    {newsItems.map((news) => (
                      <button
                        key={news.id}
                        onClick={() => handleNewsClick(news.url)}
                        className="w-full flex items-start gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 text-left"
                      >
                        <news.icon className="w-4 h-4 mt-0.5" />
                        <div>
                          <div className="font-medium">{news.title}</div>
                          <div className="text-xs text-gray-500">{news.time}</div>
                        </div>
              </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* User Profile */}
              <div className="relative">
                <button
                  onClick={() => { setShowUserDropdown(!showUserDropdown); setShowNewsDropdown(false); }}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image
                      src={student.avatar}
                      alt="avatar"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium">{student.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showUserDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu with Animation */}
                <div
                  className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 ease-in-out ${
                    showUserDropdown
                      ? "opacity-100 transform translate-y-0 max-h-96"
                      : "opacity-0 transform -translate-y-2 max-h-0 pointer-events-none"
                  }`}
                >
                  {/* User Info Header */}
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Image
                          src={student.avatar}
                          alt="avatar"
                          width={32}
                          height={32}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {student.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          MSSV: {student.id}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Menu Items with custom scroll */}
                  <div
                    className="py-1 pr-3 overflow-y-auto max-h-80"
                    style={{ 
                      transition: 'max-height 0.3s',
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#d1d5db transparent',
                      msOverflowStyle: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.scrollbarColor = '#9ca3af transparent';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.scrollbarColor = '#d1d5db transparent';
                    }}
                  >
                    <style jsx>{`
                      div::-webkit-scrollbar {
                        width: 6px;
                      }
                      div::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      div::-webkit-scrollbar-thumb {
                        background: #d1d5db;
                        border-radius: 3px;
                        transition: background 0.2s;
                      }
                      div::-webkit-scrollbar-thumb:hover {
                        background: #9ca3af;
                      }
                    `}</style>
                    <a
                      href="/sinh-vien/thong-tin"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      <UserIcon className="w-4 h-4" />
                      Thông tin sinh viên
                    </a>
                    <a
                      href="/sinh-vien/lich-hoc"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      <Calendar className="w-4 h-4" />
                      Lịch học theo tuần
                    </a>
                    <a
                      href="/sinh-vien/lich-thi"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      <FileText className="w-4 h-4" />
                      Lịch thi theo tuần
                    </a>
                    <a
                      href="/sinh-vien/ket-qua-hoc-tap"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      <BookOpen className="w-4 h-4" />
                      Kết quả học tập
                    </a>
                    <a
                      href="/sinh-vien/tien-do-hoc-tap"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      <BarChart2 className="w-4 h-4" />
                      Tiến độ học tập
                    </a>
                    <a
                      href="/sinh-vien/tra-cuu-cong-no"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      <CreditCard className="w-4 h-4" />
                      Tra cứu công nợ
                    </a>
                    <a
                      href="/sinh-vien/chuong-trinh-khung"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Chương trình khung
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                      <a
                        href="#"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                      <Settings className="w-4 h-4" />
                      Cài đặt
                      </a>
                      <a
                        href="#"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                      >
                      <LogOut className="w-4 h-4" />
                        Đăng xuất
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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

      <Footer />
    </main>
  );
}
