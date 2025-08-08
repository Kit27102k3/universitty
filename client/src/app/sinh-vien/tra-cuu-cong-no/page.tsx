"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  CreditCard,
  DollarSign,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Calendar,
  Banknote,
  ChevronRight,
  Eye,
  EyeOff,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function DebtLookupPage() {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedYear, setSelectedYear] = useState("all");

  // Fake debt data
  const debtData = {
    totalDebt: 50000000,
    paidAmount: 35000000,
    remainingDebt: 15000000,
    lastPayment: "15/12/2024",
    nextPayment: "15/01/2025",
    paymentHistory: [
      {
        id: 1,
        semester: "HK1 2024-2025",
        amount: 20000000,
        paidAmount: 20000000,
        remainingAmount: 0,
        dueDate: "15/09/2024",
        paymentDate: "10/09/2024",
        status: "paid",
        method: "Chuyển khoản"
      },
      {
        id: 2,
        semester: "HK2 2024-2025",
        amount: 20000000,
        paidAmount: 15000000,
        remainingAmount: 5000000,
        dueDate: "15/01/2025",
        paymentDate: "15/12/2024",
        status: "partial",
        method: "Chuyển khoản"
      },
      {
        id: 3,
        semester: "HK1 2023-2024",
        amount: 18000000,
        paidAmount: 18000000,
        remainingAmount: 0,
        dueDate: "15/09/2023",
        paymentDate: "12/09/2023",
        status: "paid",
        method: "Tiền mặt"
      }
    ],
    upcomingPayments: [
      {
        id: 1,
        semester: "HK2 2024-2025",
        amount: 5000000,
        dueDate: "15/01/2025",
        status: "pending"
      },
      {
        id: 2,
        semester: "HK1 2025-2026",
        amount: 20000000,
        dueDate: "15/09/2025",
        status: "upcoming"
      }
    ],
    paymentMethods: [
      {
        id: 1,
        name: "Chuyển khoản ngân hàng",
        bank: "Vietcombank",
        accountNumber: "1234567890",
        accountName: "Trường Đại học Nam Cần Thơ",
        description: "Chuyển khoản học phí"
      },
      {
        id: 2,
        name: "Thanh toán trực tuyến",
        bank: "VNPay",
        accountNumber: "N/A",
        accountName: "N/A",
        description: "Thanh toán qua VNPay"
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "partial":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-red-100 text-red-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="w-4 h-4" />;
      case "partial":
        return <Clock className="w-4 h-4" />;
      case "pending":
        return <AlertCircle className="w-4 h-4" />;
      case "upcoming":
        return <Calendar className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const calculateProgress = () => {
    return ((debtData.paidAmount / debtData.totalDebt) * 100).toFixed(1);
  };

  const filteredHistory = selectedYear === "all" 
    ? debtData.paymentHistory 
    : debtData.paymentHistory.filter(payment => payment.semester.includes(selectedYear));

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
              <h1 className="text-xl font-bold text-gray-800">Tra cứu công nợ</h1>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Tải báo cáo</span>
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
                <p className="text-sm text-gray-600">Tổng học phí</p>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(debtData.totalDebt)}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Đã thanh toán</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(debtData.paidAmount)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Còn nợ</p>
                <p className="text-2xl font-bold text-orange-600">{formatCurrency(debtData.remainingDebt)}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tiến độ thanh toán</p>
                <p className="text-2xl font-bold text-blue-600">{calculateProgress()}%</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Biểu đồ thanh toán</h2>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span className="text-sm">{showDetails ? "Ẩn chi tiết" : "Xem chi tiết"}</span>
            </button>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2">
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-full h-40 flex items-end">
                <div
                  className="w-full bg-green-500 rounded-t transition-all duration-300"
                  style={{ height: `${(debtData.paidAmount / debtData.totalDebt) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-600 mt-2 text-center">
                <div>Đã thanh toán</div>
                <div className="font-medium">{formatCurrency(debtData.paidAmount)}</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-full h-40 flex items-end">
                <div
                  className="w-full bg-orange-500 rounded-t transition-all duration-300"
                  style={{ height: `${(debtData.remainingDebt / debtData.totalDebt) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-600 mt-2 text-center">
                <div>Còn nợ</div>
                <div className="font-medium">{formatCurrency(debtData.remainingDebt)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Lịch sử thanh toán</h2>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tất cả năm học</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Học kỳ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Số tiền
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Đã thanh toán
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Còn nợ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hạn thanh toán
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày thanh toán
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phương thức
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredHistory.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{payment.semester}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatCurrency(payment.amount)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-green-600 font-medium">{formatCurrency(payment.paidAmount)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-orange-600 font-medium">{formatCurrency(payment.remainingAmount)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{payment.dueDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{payment.paymentDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{payment.method}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(payment.status)}
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(payment.status)}`}>
                          {payment.status === "paid" ? "Đã thanh toán" : 
                           payment.status === "partial" ? "Thanh toán một phần" : "Chưa thanh toán"}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Payments */}
        <div className="bg-white rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold text-gray-800 p-6 border-b border-gray-200">Khoản thanh toán sắp tới</h2>
          <div className="p-6">
            <div className="space-y-4">
              {debtData.upcomingPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{payment.semester}</h4>
                      <p className="text-sm text-gray-500">Hạn thanh toán: {payment.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium text-gray-800">{formatCurrency(payment.amount)}</div>
                      <div className="text-sm text-gray-500">{payment.status === "pending" ? "Cần thanh toán" : "Sắp đến hạn"}</div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Thanh toán
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 p-6 border-b border-gray-200">Phương thức thanh toán</h2>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {debtData.paymentMethods.map((method) => (
                <div key={method.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-800">{method.name}</h4>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>Ngân hàng: {method.bank}</div>
                    <div>Số tài khoản: {method.accountNumber}</div>
                    <div>Tên tài khoản: {method.accountName}</div>
                    <div>Nội dung: {method.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">Lưu ý quan trọng</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Thanh toán đúng hạn để tránh bị cấm thi</li>
                <li>• Giữ lại biên lai thanh toán để đối soát</li>
                <li>• Liên hệ phòng tài chính nếu có thắc mắc</li>
                <li>• Có thể thanh toán trực tuyến hoặc chuyển khoản</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 