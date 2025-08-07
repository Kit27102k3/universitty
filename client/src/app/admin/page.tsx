"use client";
import { useUser } from "@/contexts/UserContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const stats = [
  { label: "Tổng số người dùng", value: "1,234", sub: "+10% so với tháng trước" },
  { label: "Môn học", value: "89", sub: "45 môn đang giảng dạy" },
  { label: "Lớp học phần", value: "156", sub: "23 lớp chờ xếp lịch" },
  { label: "Xung đột lịch", value: "7", sub: "Cần xử lý ngay", danger: true },
];

const recentActivities = [
  { text: "Thêm lớp học phần mới", time: "5 phút trước", type: "add" },
  { text: "Yêu cầu đổi lịch từ GV Nguyễn", time: "15 phút trước", type: "warning" },
];

const sidebarMenu = [
  { group: "TỔNG QUAN", items: ["Tổng quan"] },
  { group: "QUẢN LÝ NGƯỜI DÙNG", items: ["Quản lý người dùng", "Quản lý giáo viên", "Quản lý sinh viên"] },
  { group: "QUẢN LÝ HỌC TẬP", items: ["Quản lý khoa/bộ môn", "Quản lý môn học", "Quản lý lớp học", "Quản lý học kỳ"] },
  { group: "QUẢN LÝ LỊCH", items: ["Quản lý phòng học", "Quản lý ca học", "Quản lý lịch học"] },
  { group: "QUẢN LÝ ĐĂNG KÝ", items: ["Quản lý đăng ký học", "Yêu cầu đổi lịch"] },
  { group: "BÁO CÁO & THÔNG BÁO", items: ["Quản lý thông báo", "Thống kê báo cáo"] },
];

export default function AdminDashboard() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.replace("/");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-[#181F2A] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#232B3E] p-6 flex flex-col gap-6">
        <div className="font-bold text-lg flex items-center gap-2 mb-4">
          <span className="material-icons">event</span>
          Hệ thống Xếp Lịch Giảng Dạy
        </div>
        <nav className="flex-1 flex flex-col gap-4">
          {sidebarMenu.map((group) => (
            <div key={group.group}>
              <div className="text-xs text-gray-400 font-semibold mb-2">{group.group}</div>
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <li key={item} className="hover:bg-[#2C3650] rounded px-2 py-1 cursor-pointer text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">Tổng quan</div>
          <div className="flex items-center gap-4">
            <span className="material-icons">notifications</span>
            <span className="material-icons">account_circle</span>
            <div>
              <div>Người dùng</div>
              <div className="text-xs text-gray-400">Quản trị viên</div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((s, i) => (
            <div key={i} className={`bg-[#232B3E] rounded-lg p-6 ${s.danger ? "border border-red-500" : ""}`}>
              <div className="text-2xl font-bold mb-2">{s.value}</div>
              <div className="text-sm mb-1">{s.label}</div>
              <div className={`text-xs ${s.danger ? "text-red-400" : "text-gray-400"}`}>{s.sub}</div>
            </div>
          ))}
        </div>
        {/* Charts & Activities */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#232B3E] rounded-lg p-6 min-h-[220px]">
            <div className="font-semibold mb-2">Thống kê giảng dạy</div>
            <div className="text-gray-400 text-sm">Biểu đồ thống kê số tiết dạy</div>
          </div>
          <div className="bg-[#232B3E] rounded-lg p-6 min-h-[220px]">
            <div className="font-semibold mb-2">Hoạt động gần đây</div>
            <ul className="text-sm flex flex-col gap-2">
              {recentActivities.map((a, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`material-icons text-base ${a.type === "warning" ? "text-yellow-400" : "text-blue-400"}`}>{a.type === "warning" ? "warning" : "add"}</span>
                  <span>{a.text}</span>
                  <span className="ml-auto text-xs text-gray-400">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 