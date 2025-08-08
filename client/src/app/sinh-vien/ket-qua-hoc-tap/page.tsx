"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BookOpen,
  BarChart2,
  Download,
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  FileText,
  ChevronDown,
  Eye,
  EyeOff,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function AcademicResultsPage() {
  const { t } = useLanguage();
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [showGPA, setShowGPA] = useState(true);

  // Fake academic data
  const academicData = {
    overallGPA: 3.8,
    totalCredits: 120,
    completedSemesters: 6,
    currentSemester: "HK1 2024-2025",
    gpaHistory: [
      { semester: "HK1 2021-2022", gpa: 3.9, credits: 25 },
      { semester: "HK2 2021-2022", gpa: 3.8, credits: 28 },
      { semester: "HK1 2022-2023", gpa: 3.7, credits: 26 },
      { semester: "HK2 2022-2023", gpa: 3.9, credits: 27 },
      { semester: "HK1 2023-2024", gpa: 3.8, credits: 24 },
      { semester: "HK2 2023-2024", gpa: 3.8, credits: 25 },
    ],
    currentSemesterGrades: [
      {
        id: 1,
        subject: "Lập trình Web",
        code: "INT1234",
        credits: 3,
        midterm: 8.5,
        final: 9.0,
        average: 8.8,
        grade: "A",
        status: "completed"
      },
      {
        id: 2,
        subject: "Cơ sở dữ liệu",
        code: "INT1235",
        credits: 3,
        midterm: 7.5,
        final: 8.0,
        average: 7.8,
        grade: "B+",
        status: "completed"
      },
      {
        id: 3,
        subject: "Toán rời rạc",
        code: "MTH1234",
        credits: 3,
        midterm: 8.0,
        final: 8.5,
        average: 8.3,
        grade: "A-",
        status: "completed"
      },
      {
        id: 4,
        subject: "Lập trình hướng đối tượng",
        code: "INT1236",
        credits: 3,
        midterm: 9.0,
        final: 9.5,
        average: 9.3,
        grade: "A+",
        status: "completed"
      },
      {
        id: 5,
        subject: "Mạng máy tính",
        code: "INT1237",
        credits: 3,
        midterm: 7.0,
        final: 7.5,
        average: 7.3,
        grade: "B",
        status: "completed"
      }
    ]
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "text-green-600 bg-green-100";
      case "A":
        return "text-green-600 bg-green-100";
      case "A-":
        return "text-green-600 bg-green-100";
      case "B+":
        return "text-blue-600 bg-blue-100";
      case "B":
        return "text-blue-600 bg-blue-100";
      case "B-":
        return "text-blue-600 bg-blue-100";
      case "C+":
        return "text-yellow-600 bg-yellow-100";
      case "C":
        return "text-yellow-600 bg-yellow-100";
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

  const getAverageColor = (average: number) => {
    if (average >= 9.0) return "text-green-600";
    if (average >= 8.0) return "text-blue-600";
    if (average >= 7.0) return "text-yellow-600";
    if (average >= 6.0) return "text-orange-600";
    return "text-red-600";
  };

  const calculateSemesterGPA = () => {
    const totalPoints = academicData.currentSemesterGrades.reduce((sum, grade) => {
      return sum + (grade.average * grade.credits);
    }, 0);
    const totalCredits = academicData.currentSemesterGrades.reduce((sum, grade) => {
      return sum + grade.credits;
    }, 0);
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const currentSemesterGPA = calculateSemesterGPA();

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
              <h1 className="text-xl font-bold text-gray-800">Kết quả học tập</h1>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Tải bảng điểm</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">GPA Tổng thể</p>
                <p className="text-2xl font-bold text-gray-800">{academicData.overallGPA}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">GPA HK hiện tại</p>
                <p className="text-2xl font-bold text-gray-800">{currentSemesterGPA}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tín chỉ tích lũy</p>
                <p className="text-2xl font-bold text-gray-800">{academicData.totalCredits}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Học kỳ hoàn thành</p>
                <p className="text-2xl font-bold text-gray-800">{academicData.completedSemesters}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* GPA Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Biểu đồ GPA theo học kỳ</h2>
            <button
              onClick={() => setShowGPA(!showGPA)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              {showGPA ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span className="text-sm">{showGPA ? "Ẩn" : "Hiện"}</span>
            </button>
          </div>
          
          {showGPA && (
            <div className="h-64 flex items-end justify-between gap-2">
              {academicData.gpaHistory.map((semester, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full h-40 flex items-end">
                    <div
                      className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                      style={{ height: `${(semester.gpa / 4.0) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-2 text-center">
                    <div>{semester.semester}</div>
                    <div className="font-medium">{semester.gpa}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Current Semester Grades */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Bảng điểm học kỳ hiện tại</h2>
              <div className="flex items-center gap-4">
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tất cả môn học</option>
                  <option value="completed">Đã hoàn thành</option>
                  <option value="in-progress">Đang học</option>
                </select>
              </div>
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
                    Giữa kỳ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cuối kỳ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trung bình
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Điểm chữ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {academicData.currentSemesterGrades.map((grade) => (
                  <tr key={grade.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{grade.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{grade.code}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{grade.credits}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{grade.midterm}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{grade.final}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${getAverageColor(grade.average)}`}>
                        {grade.average}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getGradeColor(grade.grade)}`}>
                        {grade.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Academic Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Thống kê điểm số</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Điểm A (9.0-10.0):</span>
                <span className="text-sm font-medium text-green-600">2 môn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Điểm B (7.0-8.9):</span>
                <span className="text-sm font-medium text-blue-600">2 môn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Điểm C (5.0-6.9):</span>
                <span className="text-sm font-medium text-yellow-600">1 môn</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tiến độ học tập</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tín chỉ đã tích lũy</span>
                  <span>{academicData.totalCredits}/140</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(academicData.totalCredits / 140) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Còn {140 - academicData.totalCredits} tín chỉ để tốt nghiệp
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Xu hướng GPA</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">GPA tăng dần qua các học kỳ</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600">Đạt danh hiệu sinh viên xuất sắc</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-600">Đang theo đúng lộ trình học tập</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 