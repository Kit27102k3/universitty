"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
  FileText,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ExamSchedulePage() {
  const { t } = useLanguage();
  const [currentWeek, setCurrentWeek] = useState(new Date());

  // Fake exam schedule data
  const examData = [
    {
      day: "Thứ 2",
      date: "15/01/2025",
      exams: [
        {
          id: 1,
          time: "08:00 - 10:00",
          subject: "Lập trình Web",
          room: "A101",
          teacher: "ThS. Nguyễn Văn A",
          type: "Kiểm tra giữa kỳ",
          status: "upcoming",
          duration: "120 phút"
        }
      ]
    },
    {
      day: "Thứ 3",
      date: "16/01/2025",
      exams: []
    },
    {
      day: "Thứ 4",
      date: "17/01/2025",
      exams: [
        {
          id: 2,
          time: "13:00 - 15:00",
          subject: "Cơ sở dữ liệu",
          room: "B205",
          teacher: "TS. Trần Thị B",
          type: "Kiểm tra cuối kỳ",
          status: "upcoming",
          duration: "120 phút"
        }
      ]
    },
    {
      day: "Thứ 5",
      date: "18/01/2025",
      exams: [
        {
          id: 3,
          time: "09:00 - 11:00",
          subject: "Toán rời rạc",
          room: "C301",
          teacher: "PGS.TS. Lê Văn C",
          type: "Kiểm tra giữa kỳ",
          status: "completed",
          duration: "120 phút"
        }
      ]
    },
    {
      day: "Thứ 6",
      date: "19/01/2025",
      exams: []
    },
    {
      day: "Thứ 7",
      date: "20/01/2025",
      exams: [
        {
          id: 4,
          time: "14:00 - 16:00",
          subject: "Lập trình hướng đối tượng",
          room: "Lab A",
          teacher: "ThS. Phạm Thị D",
          type: "Kiểm tra thực hành",
          status: "upcoming",
          duration: "120 phút"
        }
      ]
    },
    {
      day: "Chủ nhật",
      date: "21/01/2025",
      exams: []
    }
  ];

  const getWeekRange = (date: Date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start, end };
  };

  const { start, end } = getWeekRange(currentWeek);

  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeek(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeek(newDate);
  };

  const goToCurrentWeek = () => {
    setCurrentWeek(new Date());
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "upcoming":
        return <Clock className="w-4 h-4" />;
      case "cancelled":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Kiểm tra cuối kỳ":
        return "bg-red-100 text-red-800";
      case "Kiểm tra giữa kỳ":
        return "bg-orange-100 text-orange-800";
      case "Kiểm tra thực hành":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button onClick={() => window.history.back()} className="text-gray-600 hover:text-gray-800">
                ← Quay lại
              </button>
              <h1 className="text-xl font-bold text-gray-800">Lịch thi theo tuần</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Week Navigation */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPreviousWeek}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  Tuần {start.toLocaleDateString('vi-VN')} - {end.toLocaleDateString('vi-VN')}
                </h2>
                <p className="text-sm text-gray-500">Học kỳ 1 năm học 2024-2025</p>
              </div>
              <button
                onClick={goToNextWeek}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={goToCurrentWeek}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Tuần hiện tại
            </button>
          </div>
        </div>

        {/* Exam Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {examData.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-lg shadow">
              {/* Day Header */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">{day.day}</h3>
                <p className="text-sm text-gray-500">{day.date}</p>
              </div>
              
              {/* Exams */}
              <div className="p-4">
                {day.exams.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Không có lịch thi</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {day.exams.map((exam) => (
                      <div
                        key={exam.id}
                        className="p-3 border border-gray-200 rounded-lg hover:border-red-300 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(exam.status)}
                            <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(exam.type)}`}>
                              {exam.type}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{exam.time}</span>
                        </div>
                        
                        <h4 className="font-medium text-gray-800 mb-1">{exam.subject}</h4>
                        
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>Phòng: {exam.room}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>GV: {exam.teacher}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Thời gian: {exam.duration}</span>
                          </div>
                        </div>

                        {exam.status === "upcoming" && (
                          <div className="mt-2 flex items-center gap-1 text-orange-600 text-xs">
                            <AlertTriangle className="w-3 h-3" />
                            <span>Chuẩn bị thi</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng số bài thi</p>
                <p className="text-xl font-bold text-gray-800">4 bài</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Đã hoàn thành</p>
                <p className="text-xl font-bold text-gray-800">1 bài</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Sắp thi</p>
                <p className="text-xl font-bold text-gray-800">3 bài</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Cần chuẩn bị</p>
                <p className="text-xl font-bold text-gray-800">2 bài</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">Lưu ý quan trọng</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Mang theo thẻ sinh viên và dụng cụ học tập khi đi thi</li>
                <li>• Có mặt tại phòng thi trước 15 phút</li>
                <li>• Không được sử dụng điện thoại trong phòng thi</li>
                <li>• Kiểm tra kỹ thông tin phòng thi và thời gian thi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 