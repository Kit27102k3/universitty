"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  User,
  BookOpen,
  CreditCard,
  Activity,
  FileText,
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Edit,
  Download,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import StudentHeader from "@/app/sinh-vien/components/StudentHeader";
export default function StudentInfoPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("personal");
  const [showPassword, setShowPassword] = useState(false);

  // Fake student data
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
    email: "2110339@nctu.edu.vn",
    phone: "0123456789",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    emergencyContact: {
      name: "Nguyễn Văn A",
      relationship: "Cha",
      phone: "0987654321"
    },
    academicInfo: {
      gpa: 3.8,
      creditsEarned: 120,
      creditsRequired: 140,
      status: "Đang học",
      enrollmentDate: "01/09/2021",
      expectedGraduation: "06/2025"
    },
    financialInfo: {
      totalDebt: 5000000,
      paidAmount: 3500000,
      remainingDebt: 1500000,
      lastPayment: "15/12/2024",
      nextPayment: "15/01/2025"
    },
    activities: [
      {
        id: 1,
        type: "Học tập",
        title: "Tham gia cuộc thi lập trình ACM-ICPC",
        date: "15/12/2024",
        status: "Hoàn thành",
        description: "Đạt giải khuyến khích cấp trường"
      },
      {
        id: 2,
        type: "Hoạt động",
        title: "Tham gia CLB Công nghệ thông tin",
        date: "01/09/2024",
        status: "Đang tham gia",
        description: "Thành viên tích cực"
      }
    ]
  };

  const tabs = [
    { id: "personal", label: "Thông tin cá nhân", icon: User },
    { id: "academic", label: "Học tập", icon: BookOpen },
    { id: "financial", label: "Tài chính", icon: CreditCard },
    { id: "activities", label: "Hoạt động", icon: Activity },
    { id: "documents", label: "Tài liệu", icon: FileText },
  ];

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {/* Basic Info */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Thông tin cơ bản</h3>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <Edit className="w-4 h-4" />
            <span className="text-sm">Chỉnh sửa</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-200">
              <Image src={student.avatar} alt="avatar" width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">{student.name}</h4>
              <p className="text-gray-600">MSSV: {student.id}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Giới tính:</span>
              <span className="font-medium">{student.gender}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ngày sinh:</span>
              <span className="font-medium">{student.dob}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Nơi sinh:</span>
              <span className="font-medium">{student.pob}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Thông tin liên hệ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{student.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">Điện thoại:</span>
              <span className="font-medium">{student.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">Địa chỉ:</span>
              <span className="font-medium">{student.address}</span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Liên hệ khẩn cấp</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Họ tên:</span>
                <span className="font-medium">{student.emergencyContact.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quan hệ:</span>
                <span className="font-medium">{student.emergencyContact.relationship}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Điện thoại:</span>
                <span className="font-medium">{student.emergencyContact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Thông tin học tập</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Lớp:</span>
              <span className="font-medium">{student.class}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Khóa:</span>
              <span className="font-medium">{student.course}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ngành:</span>
              <span className="font-medium">{student.major}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bậc đào tạo:</span>
              <span className="font-medium">{student.level}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Loại hình:</span>
              <span className="font-medium">{student.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ngày nhập học:</span>
              <span className="font-medium">{student.academicInfo.enrollmentDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Dự kiến tốt nghiệp:</span>
              <span className="font-medium">{student.academicInfo.expectedGraduation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Trạng thái:</span>
              <span className="font-medium text-green-600">{student.academicInfo.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAcademicInfo = () => (
    <div className="space-y-6">
      {/* GPA & Credits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{student.academicInfo.gpa}</div>
          <div className="text-gray-600">GPA</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">{student.academicInfo.creditsEarned}</div>
          <div className="text-gray-600">Tín chỉ đã tích lũy</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{student.academicInfo.creditsRequired}</div>
          <div className="text-gray-600">Tín chỉ yêu cầu</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tiến độ học tập</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Tín chỉ đã tích lũy</span>
              <span>{student.academicInfo.creditsEarned}/{student.academicInfo.creditsRequired}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(student.academicInfo.creditsEarned / student.academicInfo.creditsRequired) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic History */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Lịch sử học tập</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium">Hoàn thành HK1 (2021-2022)</div>
                <div className="text-sm text-gray-500">GPA: 3.9 | 25 tín chỉ</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium">Hoàn thành HK2 (2021-2022)</div>
                <div className="text-sm text-gray-500">GPA: 3.8 | 28 tín chỉ</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancialInfo = () => (
    <div className="space-y-6">
      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {student.financialInfo.totalDebt.toLocaleString()}đ
          </div>
          <div className="text-gray-600">Tổng học phí</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {student.financialInfo.paidAmount.toLocaleString()}đ
          </div>
          <div className="text-gray-600">Đã thanh toán</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">
            {student.financialInfo.remainingDebt.toLocaleString()}đ
          </div>
          <div className="text-gray-600">Còn nợ</div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Lịch sử thanh toán</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium">Thanh toán học phí HK1</div>
                <div className="text-sm text-gray-500">{student.financialInfo.lastPayment}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-green-600">2,000,000đ</div>
              <div className="text-sm text-gray-500">Đã thanh toán</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <div>
                <div className="font-medium">Học phí HK2</div>
                <div className="text-sm text-gray-500">Hạn thanh toán: {student.financialInfo.nextPayment}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-orange-600">1,500,000đ</div>
              <div className="text-sm text-gray-500">Chưa thanh toán</div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Phương thức thanh toán</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span>Chuyển khoản ngân hàng</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span>Thanh toán trực tuyến</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Hoạt động gần đây</h3>
        <div className="space-y-4">
          {student.activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{activity.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activity.status === "Hoàn thành" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {activity.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{activity.date}</span>
                  <span>{activity.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tài liệu học tập</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">Bảng điểm học tập</div>
                <div className="text-sm text-gray-500">Cập nhật: 15/12/2024</div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Download className="w-4 h-4" />
              <span className="text-sm">Tải xuống</span>
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-medium">Giấy chứng nhận sinh viên</div>
                <div className="text-sm text-gray-500">Cập nhật: 01/09/2024</div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Download className="w-4 h-4" />
              <span className="text-sm">Tải xuống</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <StudentHeader student={student} />
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {activeTab === "personal" && renderPersonalInfo()}
          {activeTab === "academic" && renderAcademicInfo()}
          {activeTab === "financial" && renderFinancialInfo()}
          {activeTab === "activities" && renderActivities()}
          {activeTab === "documents" && renderDocuments()}
        </div>
      </div>

      <Footer />
    </main>
  );
} 