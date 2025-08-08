"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  AlertCircle,
  GraduationCap,
  Award,
  Calendar,
  FileText,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function AcademicProgressPage() {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState("all");

  // Fake progress data
  const progressData = {
    totalCredits: 140,
    earnedCredits: 120,
    remainingCredits: 20,
    progressPercentage: 85.7,
    completedSubjects: 40,
    totalSubjects: 47,
    currentSemester: "HK1 2024-2025",
    expectedGraduation: "06/2025",
    gpa: 3.8,
    subjects: [
      {
        id: 1,
        code: "INT1234",
        name: "Lập trình Web",
        credits: 3,
        status: "completed",
        semester: "HK1 2024-2025",
        grade: "A",
        gpa: 4.0
      },
      {
        id: 2,
        code: "INT1235",
        name: "Cơ sở dữ liệu",
        credits: 3,
        status: "completed",
        semester: "HK1 2024-2025",
        grade: "B+",
        gpa: 3.3
      },
      {
        id: 3,
        code: "MTH1234",
        name: "Toán rời rạc",
        credits: 3,
        status: "completed",
        semester: "HK1 2024-2025",
        grade: "A-",
        gpa: 3.7
      },
      {
        id: 4,
        code: "INT1236",
        name: "Lập trình hướng đối tượng",
        credits: 3,
        status: "in-progress",
        semester: "HK1 2024-2025",
        grade: "N/A",
        gpa: 0
      },
      {
        id: 5,
        code: "INT1237",
        name: "Mạng máy tính",
        credits: 3,
        status: "in-progress",
        semester: "HK1 2024-2025",
        grade: "N/A",
        gpa: 0
      },
      {
        id: 6,
        code: "INT1238",
        name: "Đồ án môn học",
        credits: 3,
        status: "not-started",
        semester: "HK2 2024-2025",
        grade: "N/A",
        gpa: 0
      }
    ],
    semesters: [
      {
        year: "2021-2022",
        semester: "HK1",
        credits: 25,
        gpa: 3.9,
        status: "completed"
      },
      {
        year: "2021-2022",
        semester: "HK2",
        credits: 28,
        gpa: 3.8,
        status: "completed"
      },
      {
        year: "2022-2023",
        semester: "HK1",
        credits: 26,
        gpa: 3.7,
        status: "completed"
      },
      {
        year: "2022-2023",
        semester: "HK2",
        credits: 27,
        gpa: 3.9,
        status: "completed"
      },
      {
        year: "2023-2024",
        semester: "HK1",
        credits: 24,
        gpa: 3.8,
        status: "completed"
      },
      {
        year: "2023-2024",
        semester: "HK2",
        credits: 25,
        gpa: 3.8,
        status: "completed"
      },
      {
        year: "2024-2025",
        semester: "HK1",
        credits: 15,
        gpa: 3.8,
        status: "in-progress"
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "not-started":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "in-progress":
        return <Clock className="w-4 h-4" />;
      case "not-started":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
      case "A":
      case "A-":
        return "text-green-600 bg-green-100";
      case "B+":
      case "B":
      case "B-":
        return "text-blue-600 bg-blue-100";
      case "C+":
      case "C":
      case "C-":
        return "text-yellow-600 bg-yellow-100";
      case "D":
        return "text-orange-600 bg-orange-100";
      case "F":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const filteredSubjects = selectedYear === "all" 
    ? progressData.subjects 
    : progressData.subjects.filter(subject => subject.semester.includes(selectedYear));

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
              <h1 className="text-xl font-bold text-gray-800">Tiến độ học tập</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tín chỉ đã tích lũy</p>
                <p className="text-2xl font-bold text-gray-800">{progressData.earnedCredits}</p>
                <p className="text-xs text-gray-500">/ {progressData.totalCredits} tín chỉ</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tiến độ hoàn thành</p>
                <p className="text-2xl font-bold text-gray-800">{progressData.progressPercentage}%</p>
                <p className="text-xs text-gray-500">Còn {progressData.remainingCredits} tín chỉ</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Môn học hoàn thành</p>
                <p className="text-2xl font-bold text-gray-800">{progressData.completedSubjects}</p>
                <p className="text-xs text-gray-500">/ {progressData.totalSubjects} môn học</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">GPA hiện tại</p>
                <p className="text-2xl font-bold text-gray-800">{progressData.gpa}</p>
                <p className="text-xs text-gray-500">Dự kiến tốt nghiệp: {progressData.expectedGraduation}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Circle */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Biểu đồ tiến độ</h2>
          <div className="flex items-center justify-center">
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="16"
                />
                {/* Progress circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="16"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - progressData.progressPercentage / 100)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">{progressData.progressPercentage}%</div>
                  <div className="text-sm text-gray-500">Hoàn thành</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Semester Progress */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tiến độ theo học kỳ</h2>
          <div className="space-y-4">
            {progressData.semesters.map((semester, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{semester.semester} {semester.year}</div>
                    <div className="text-sm text-gray-500">{semester.credits} tín chỉ</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium text-gray-800">GPA: {semester.gpa}</div>
                    <div className="text-sm text-gray-500">{semester.credits} tín chỉ</div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(semester.status)}`}>
                    {semester.status === "completed" ? "Hoàn thành" : 
                     semester.status === "in-progress" ? "Đang học" : "Chưa bắt đầu"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Danh sách môn học</h2>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tất cả năm học</option>
                <option value="2021-2022">2021-2022</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Môn học
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mã môn
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tín chỉ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Học kỳ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Điểm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubjects.map((subject) => (
                  <tr key={subject.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{subject.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{subject.code}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{subject.credits}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{subject.semester}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {subject.grade !== "N/A" ? (
                        <span className={`px-2 py-1 text-xs rounded-full ${getGradeColor(subject.grade)}`}>
                          {subject.grade}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(subject.status)}
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(subject.status)}`}>
                          {subject.status === "completed" ? "Hoàn thành" : 
                           subject.status === "in-progress" ? "Đang học" : "Chưa bắt đầu"}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Progress Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Thống kê tiến độ</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Môn học đã hoàn thành:</span>
                <span className="text-sm font-medium text-green-600">{progressData.completedSubjects}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Môn học đang học:</span>
                <span className="text-sm font-medium text-blue-600">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Môn học chưa bắt đầu:</span>
                <span className="text-sm font-medium text-gray-600">5</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Dự kiến tốt nghiệp</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Thời gian còn lại: 2 học kỳ</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">Dự kiến: {progressData.expectedGraduation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-600">Đang theo đúng lộ trình</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Thành tích học tập</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-gray-600">GPA xuất sắc (>3.8)</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">Tiến độ học tập ổn định</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Không có môn học bị rớt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 