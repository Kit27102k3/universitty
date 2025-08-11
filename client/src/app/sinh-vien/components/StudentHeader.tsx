"use client";

import { useState } from "react";
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
  Settings,
  User as UserIcon,
  CreditCard,
  GraduationCap,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Student {
  avatar: string;
  id: string;
  name: string;
  gender: string;
  dob: string;
  pob: string;
  class: string;
  course: string;
  level: string;
  type: string;
  major: string;
}

interface NewsItem {
  id: number;
  title: string;
  time: string;
  icon: any;
  url: string;
}

interface StudentHeaderProps {
  student: Student;
  newsItems?: NewsItem[];
}

export default function StudentHeader({ student, newsItems = [] }: StudentHeaderProps) {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const router = useRouter();

  // Default news items if none provided
  const defaultNewsItems: NewsItem[] = [
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

  const finalNewsItems = newsItems.length > 0 ? newsItems : defaultNewsItems;

  const handleNewsClick = (url: string) => {
    setShowNewsDropdown(false);
    router.push(url);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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

          <div className="flex items-center space-x-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Home className="w-5 h-5" />
              <Link href="/sinh-vien" className="text-sm">Trang chủ</Link>
            </button>
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
                  {finalNewsItems.map((news) => (
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

              <div
                className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 ease-in-out ${
                  showUserDropdown
                    ? "opacity-100 transform translate-y-0 max-h-96"
                    : "opacity-0 transform -translate-y-2 max-h-0 pointer-events-none"
                }`}
              >
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
  );
} 