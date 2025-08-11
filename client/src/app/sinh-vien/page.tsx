"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  User,
  Home,
  BookOpen,
  Calendar,
  FileText,
  CheckSquare,
  Wifi,
  Network,
  Library,
  Briefcase,
  PenTool,
  Monitor,
  LogIn,
  Lock,
  GraduationCap,
  CreditCard,
  Award,
  Clock,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export default function SinhVienPage() {
  const { t, language } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "Nguyễn Văn A",
    id: "SV2024001",
    major: "Công nghệ thông tin",
    year: "Năm 2",
    gpa: "3.8",
  });

  const tools = [
    {
      icon: FileText,
      title: t("student.tools.studentPortal"),
      description: t("student.tools.studentPortalDesc"),
      href: "/sinh-vien/portal",
    },
    {
      icon: Wifi,
      title: t("student.tools.elearning"),
      description: t("student.tools.elearningDesc"),
    },
    {
      icon: CheckSquare,
      title: t("student.tools.courseRegistration"),
      description: t("student.tools.courseRegistrationDesc"),
    },
    {
      icon: Calendar,
      title: t("student.tools.timetable"),
      description: t("student.tools.timetableDesc"),
    },
    {
      icon: User,
      title: t("student.tools.studentConfirmation"),
      description: t("student.tools.studentConfirmationDesc"),
    },
    {
      icon: Network,
      title: t("student.tools.supportPortal"),
      description: t("student.tools.supportPortalDesc"),
    },
    {
      icon: Library,
      title: t("student.tools.libraryPortal"),
      description: t("student.tools.libraryPortalDesc"),
    },
    {
      icon: Briefcase,
      title: t("student.tools.studentHandbook"),
      description: t("student.tools.studentHandbookDesc"),
    },
    {
      icon: PenTool,
      title: t("student.tools.teachingEvaluation"),
      description: t("student.tools.teachingEvaluationDesc"),
    },
    {
      icon: Monitor,
      title: t("student.tools.itSupport"),
      description: t("student.tools.itSupportDesc"),
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/banner-home-3.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 inline-block mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-2">
                {t("header.student")}
              </h1>
            </div>

            <div className="flex items-center gap-2 text-sm text-white">
              <Home className="w-4 h-4" />
              <span>/</span>
              <span className="font-medium">{t("header.student")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t("student.title")}
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() =>
                      tool.href && window.location.assign(tool.href)
                    }
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <tool.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1 leading-tight">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-tight">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              {isLoggedIn ? (
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {studentInfo.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {studentInfo.id} • {studentInfo.major}
                    </p>
                    <p className="text-xs text-gray-500">
                      {studentInfo.year} • GPA: {studentInfo.gpa}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">5</div>
                      <div className="text-xs text-gray-600">
                        {language === "vi" ? "Môn học" : "Courses"}
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        85%
                      </div>
                      <div className="text-xs text-gray-600">
                        {language === "vi" ? "Điểm TB" : "Average"}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {language === "vi" ? "Thao tác nhanh" : "Quick Actions"}
                    </h3>
                    <div className="space-y-2">
                      <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-sm">
                          {language === "vi" ? "Xem lịch học" : "View Schedule"}
                        </span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                        <CreditCard className="w-5 h-5 text-green-600" />
                        <span className="text-sm">
                          {language === "vi" ? "Học phí" : "Tuition Fee"}
                        </span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                        <Award className="w-5 h-5 text-purple-600" />
                        <span className="text-sm">
                          {language === "vi"
                            ? "Kết quả học tập"
                            : "Academic Results"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {language === "vi" ? "Thông báo" : "Notifications"}
                      </h3>
                      <Bell className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-600 p-2 bg-yellow-50 rounded">
                        {language === "vi"
                          ? "Đăng ký học phần kỳ 2 bắt đầu từ 15/12"
                          : "Course registration for semester 2 starts from 15/12"}
                      </div>
                      <div className="text-xs text-gray-600 p-2 bg-blue-50 rounded">
                        {language === "vi"
                          ? "Lịch thi cuối kỳ đã được cập nhật"
                          : "Final exam schedule has been updated"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      <LogOut className="w-4 h-4" />
                      {language === "vi" ? "Đăng xuất" : "Logout"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
                      <LogIn className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {t("student.login")}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {t("student.loginSubtitle")}
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("student.studentId")}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={t("student.studentIdPlaceholder")}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("student.password")}
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="password"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={t("student.passwordPlaceholder")}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {t("student.rememberMe")}
                        </span>
                      </label>
                      <a
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {t("student.forgotPassword")}
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      {t("student.loginButton")}
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-3">
                        {t("student.orLoginWith")}
                      </p>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                          Google
                        </button>
                        <button className="flex-1 bg-gray-800 text-white py-2 px-3 rounded text-sm hover:bg-gray-900 transition-colors">
                          Microsoft
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                      {t("student.noAccount")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
