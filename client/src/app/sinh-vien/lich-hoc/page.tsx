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
  BookOpen,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import StudentHeader from "../components/StudentHeader";
import BackToTop from "@/components/BackToTop";

export default function SchedulePage() {
  const { t } = useLanguage();
  const [currentWeek, setCurrentWeek] = useState(new Date());

  // Fake student info for header
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

  // Fake schedule data
  const scheduleData = [
    {
      day: "Thứ 2",
      date: "15/01/2025",
      classes: [
        {
          id: 1,
          time: "07:00 - 10:30",
          subject: "Lập trình Web",
          room: "A101",
          teacher: "ThS. Nguyễn Văn A",
          type: "Lý thuyết",
          status: "upcoming"
        },
        {
          id: 2,
          time: "13:00 - 16:30",
          subject: "Cơ sở dữ liệu",
          room: "B205",
          teacher: "TS. Trần Thị B",
          type: "Thực hành",
          status: "completed"
        }
      ]
    },
    {
      day: "Thứ 3",
      date: "16/01/2025",
      classes: [
        {
          id: 3,
          time: "07:00 - 10:30",
          subject: "Toán rời rạc",
          room: "C301",
          teacher: "PGS.TS. Lê Văn C",
          type: "Lý thuyết",
          status: "upcoming"
        }
      ]
    },
    {
      day: "Thứ 4",
      date: "17/01/2025",
      classes: [
        {
          id: 4,
          time: "13:00 - 16:30",
          subject: "Lập trình hướng đối tượng",
          room: "Lab A",
          teacher: "ThS. Phạm Thị D",
          type: "Thực hành",
          status: "upcoming"
        }
      ]
    },
    {
      day: "Thứ 5",
      date: "18/01/2025",
      classes: [
        {
          id: 5,
          time: "07:00 - 10:30",
          subject: "Mạng máy tính",
          room: "A102",
          teacher: "TS. Hoàng Văn E",
          type: "Lý thuyết",
          status: "upcoming"
        }
      ]
    },
    {
      day: "Thứ 6",
      date: "19/01/2025",
      classes: [
        {
          id: 6,
          time: "13:00 - 16:30",
          subject: "Đồ án môn học",
          room: "Lab B",
          teacher: "ThS. Nguyễn Thị F",
          type: "Thực hành",
          status: "upcoming"
        }
      ]
    },
    {
      day: "Thứ 7",
      date: "20/01/2025",
      classes: []
    },
    {
      day: "Chủ nhật",
      date: "21/01/2025",
      classes: []
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

  return (
    <main className="min-h-screen bg-gray-50">
      <StudentHeader student={student} />
      <div className="container mx-auto px-4 py-6">
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

        <div className="overflow-x-auto">
          <div className="grid grid-cols-7 min-w-[900px] gap-4">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-lg shadow min-h-[220px] flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">{day.day}</h3>
                  <p className="text-sm text-gray-500">{day.date}</p>
                </div>
                <div className="p-4 flex-1">
                  {day.classes.length === 0 ? (
                    <div className="text-center py-8 flex flex-col items-center justify-center h-full">
                      <BookOpen className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Không có lịch học</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {day.classes.map((classItem) => (
                        <div
                          key={classItem.id}
                          className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2 min-w-0">
                            <div className="flex items-center gap-2 flex-nowrap min-w-0">
                              {getStatusIcon(classItem.status)}
                            </div>
                            <div className="mb-2">
                              <span className={`px-2 py-0.5 text-xs rounded-full whitespace-nowrap ${getStatusColor(classItem.status)}`}>{classItem.type}</span>
                              <div className="text-xs text-gray-500 mt-1">{classItem.time}</div>
                            </div>
                          </div>
                          <h4 className="font-medium text-gray-800 mb-1">{classItem.subject}</h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{classItem.room}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{classItem.teacher}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng số tiết học</p>
                <p className="text-xl font-bold text-gray-800">8 tiết</p>
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
                <p className="text-xl font-bold text-gray-800">2 tiết</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Sắp tới</p>
                <p className="text-xl font-bold text-gray-800">6 tiết</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </main>
  );
} 