"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BookOpen,
  GraduationCap,
  Target,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Download,
  ChevronDown,
  ChevronRight,
  Calendar,
  Award,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function CurriculumPage() {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState("all");
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null);

  // Fake curriculum data
  const curriculumData = {
    major: "Công nghệ thông tin",
    degree: "Cử nhân",
    totalCredits: 140,
    duration: "4 năm",
    programType: "Chính quy",
    curriculum: [
      {
        year: "Năm 1",
        semesters: [
          {
            id: "1.1",
            name: "Học kỳ 1",
            credits: 25,
            subjects: [
              {
                id: 1,
                code: "INT1001",
                name: "Nhập môn Công nghệ thông tin",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "A"
              },
              {
                id: 2,
                code: "MTH1001",
                name: "Toán cao cấp 1",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "B+"
              },
              {
                id: 3,
                code: "ENG1001",
                name: "Anh văn căn bản 1",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "A-"
              },
              {
                id: 4,
                code: "PHY1001",
                name: "Vật lý đại cương",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "B"
              },
              {
                id: 5,
                code: "PED1001",
                name: "Giáo dục thể chất 1",
                credits: 1,
                type: "Bắt buộc",
                status: "completed",
                grade: "A"
              }
            ]
          },
          {
            id: "1.2",
            name: "Học kỳ 2",
            credits: 28,
            subjects: [
              {
                id: 6,
                code: "INT1002",
                name: "Lập trình căn bản",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "A"
              },
              {
                id: 7,
                code: "MTH1002",
                name: "Toán cao cấp 2",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "B+"
              },
              {
                id: 8,
                code: "ENG1002",
                name: "Anh văn căn bản 2",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "A-"
              },
              {
                id: 9,
                code: "CHE1001",
                name: "Hóa học đại cương",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "B"
              },
              {
                id: 10,
                code: "PED1002",
                name: "Giáo dục thể chất 2",
                credits: 1,
                type: "Bắt buộc",
                status: "completed",
                grade: "A"
              }
            ]
          }
        ]
      },
      {
        year: "Năm 2",
        semesters: [
          {
            id: "2.1",
            name: "Học kỳ 3",
            credits: 26,
            subjects: [
              {
                id: 11,
                code: "INT2001",
                name: "Lập trình hướng đối tượng",
                credits: 3,
                type: "Bắt buộc",
                status: "in-progress",
                grade: "N/A"
              },
              {
                id: 12,
                code: "INT2002",
                name: "Cơ sở dữ liệu",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "A"
              },
              {
                id: 13,
                code: "MTH2001",
                name: "Toán rời rạc",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "A-"
              },
              {
                id: 14,
                code: "INT2003",
                name: "Cấu trúc dữ liệu và giải thuật",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "B+"
              }
            ]
          },
          {
            id: "2.2",
            name: "Học kỳ 4",
            credits: 27,
            subjects: [
              {
                id: 15,
                code: "INT2004",
                name: "Mạng máy tính",
                credits: 3,
                type: "Bắt buộc",
                status: "in-progress",
                grade: "N/A"
              },
              {
                id: 16,
                code: "INT2005",
                name: "Lập trình Web",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "A"
              },
              {
                id: 17,
                code: "INT2006",
                name: "Hệ điều hành",
                credits: 3,
                type: "Bắt buộc",
                status: "completed",
                grade: "B+"
              }
            ]
          }
        ]
      },
      {
        year: "Năm 3",
        semesters: [
          {
            id: "3.1",
            name: "Học kỳ 5",
            credits: 24,
            subjects: [
              {
                id: 18,
                code: "INT3001",
                name: "Phát triển ứng dụng Web",
                credits: 3,
                type: "Bắt buộc",
                status: "not-started",
                grade: "N/A"
              },
              {
                id: 19,
                code: "INT3002",
                name: "Trí tuệ nhân tạo",
                credits: 3,
                type: "Tự chọn",
                status: "not-started",
                grade: "N/A"
              }
            ]
          },
          {
            id: "3.2",
            name: "Học kỳ 6",
            credits: 25,
            subjects: [
              {
                id: 20,
                code: "INT3003",
                name: "Đồ án môn học",
                credits: 3,
                type: "Bắt buộc",
                status: "not-started",
                grade: "N/A"
              }
            ]
          }
        ]
      },
      {
        year: "Năm 4",
        semesters: [
          {
            id: "4.1",
            name: "Học kỳ 7",
            credits: 15,
            subjects: [
              {
                id: 21,
                code: "INT4001",
                name: "Đồ án tốt nghiệp",
                credits: 10,
                type: "Bắt buộc",
                status: "not-started",
                grade: "N/A"
              }
            ]
          }
        ]
      }
    ],
    requirements: {
      totalCredits: 140,
      requiredCredits: 120,
      electiveCredits: 20,
      gpaRequirement: 2.0,
      graduationRequirements: [
        "Hoàn thành tất cả môn học bắt buộc",
        "Đạt GPA tối thiểu 2.0",
        "Hoàn thành đồ án tốt nghiệp",
        "Đạt chuẩn ngoại ngữ",
        "Hoàn thành khóa luận tốt nghiệp"
      ]
    }
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

  const toggleSemester = (semesterId: string) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  const calculateProgress = () => {
    let completedCredits = 0;
    let totalCredits = 0;
    
    curriculumData.curriculum.forEach(year => {
      year.semesters.forEach(semester => {
        semester.subjects.forEach(subject => {
          totalCredits += subject.credits;
          if (subject.status === "completed") {
            completedCredits += subject.credits;
          }
        });
      });
    });
    
    return {
      completed: completedCredits,
      total: totalCredits,
      percentage: ((completedCredits / totalCredits) * 100).toFixed(1)
    };
  };

  const progress = calculateProgress();

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
              <h1 className="text-xl font-bold text-gray-800">Chương trình khung</h1>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Tải chương trình</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Program Overview */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Thông tin chương trình</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ngành:</span>
                  <span className="font-medium">{curriculumData.major}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bằng cấp:</span>
                  <span className="font-medium">{curriculumData.degree}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thời gian:</span>
                  <span className="font-medium">{curriculumData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loại hình:</span>
                  <span className="font-medium">{curriculumData.programType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng tín chỉ:</span>
                  <span className="font-medium">{curriculumData.totalCredits}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tiến độ học tập</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Tín chỉ đã tích lũy</span>
                    <span>{progress.completed}/{progress.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progress.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{progress.percentage}% hoàn thành</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{progress.completed}</div>
                    <div className="text-sm text-gray-600">Tín chỉ đã hoàn thành</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{progress.total - progress.completed}</div>
                    <div className="text-sm text-gray-600">Tín chỉ còn lại</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Structure */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Cấu trúc chương trình đào tạo</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {curriculumData.curriculum.map((year, yearIndex) => (
                <div key={yearIndex} className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">{year.year}</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {year.semesters.map((semester) => (
                      <div key={semester.id} className="p-4">
                        <div 
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => toggleSemester(semester.id)}
                        >
                          <div className="flex items-center gap-3">
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform ${expandedSemester === semester.id ? 'rotate-180' : ''}`}
                            />
                            <div>
                              <h4 className="font-medium text-gray-800">{semester.name}</h4>
                              <p className="text-sm text-gray-500">{semester.credits} tín chỉ</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{semester.subjects.length} môn học</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        
                        {expandedSemester === semester.id && (
                          <div className="mt-4 space-y-3">
                            {semester.subjects.map((subject) => (
                              <div key={subject.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium text-gray-800">{subject.code}</span>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                      subject.type === "Bắt buộc" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                                    }`}>
                                      {subject.type}
                                    </span>
                                  </div>
                                  <div className="text-sm text-gray-600">{subject.name}</div>
                                  <div className="text-xs text-gray-500">{subject.credits} tín chỉ</div>
                                </div>
                                <div className="flex items-center gap-3">
                                  {subject.grade !== "N/A" ? (
                                    <span className={`px-2 py-1 text-xs rounded-full ${getGradeColor(subject.grade)}`}>
                                      {subject.grade}
                                    </span>
                                  ) : (
                                    <span className="text-sm text-gray-400">N/A</span>
                                  )}
                                  <div className="flex items-center gap-1">
                                    {getStatusIcon(subject.status)}
                                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(subject.status)}`}>
                                      {subject.status === "completed" ? "Hoàn thành" : 
                                       subject.status === "in-progress" ? "Đang học" : "Chưa bắt đầu"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Yêu cầu tốt nghiệp</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Tổng tín chỉ:</span>
                <span className="font-medium">{curriculumData.requirements.totalCredits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tín chỉ bắt buộc:</span>
                <span className="font-medium">{curriculumData.requirements.requiredCredits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tín chỉ tự chọn:</span>
                <span className="font-medium">{curriculumData.requirements.electiveCredits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GPA tối thiểu:</span>
                <span className="font-medium">{curriculumData.requirements.gpaRequirement}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Điều kiện tốt nghiệp</h3>
            <div className="space-y-3">
              {curriculumData.requirements.graduationRequirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng môn học</p>
                <p className="text-xl font-bold text-gray-800">21</p>
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
                <p className="text-xl font-bold text-gray-800">15</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Đang học</p>
                <p className="text-xl font-bold text-gray-800">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Còn lại</p>
                <p className="text-xl font-bold text-gray-800">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 