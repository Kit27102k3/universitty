"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, Tag, ArrowRight, Search } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TinTucPage() {
  const { t, language } = useLanguage();

  const news = [
    {
      id: 1,
      title: language === 'vi' 
        ? "Lễ khai giảng năm học mới 2024-2025"
        : "Opening Ceremony for Academic Year 2024-2025",
      excerpt: language === 'vi'
        ? "Trường ĐH Nam Cần Thơ long trọng tổ chức lễ khai giảng năm học mới với sự tham gia của hơn 5.000 sinh viên và cán bộ giảng viên."
        : "Nam Can Tho University solemnly organized the opening ceremony for the new academic year with the participation of more than 5,000 students and faculty members.",
      image: "/news-1.jpg",
      category: language === 'vi' ? "Sự kiện" : "Events",
      author: language === 'vi' ? "Ban Truyền thông" : "Communications Department",
      date: "15/09/2024",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: language === 'vi'
        ? "Sinh viên NCTU đạt giải nhất cuộc thi lập trình quốc tế"
        : "NCTU Students Win First Prize in International Programming Contest",
      excerpt: language === 'vi'
        ? "Đội tuyển sinh viên khoa Công nghệ thông tin đã xuất sắc giành giải nhất tại cuộc thi lập trình ACM-ICPC khu vực châu Á."
        : "The Information Technology student team excellently won first prize at the ACM-ICPC programming contest in the Asian region.",
      image: "/news-2.jpg",
      category: language === 'vi' ? "Thành tích" : "Achievements",
      author: language === 'vi' ? "Khoa CNTT" : "IT Faculty",
      date: "12/09/2024",
      views: 890,
      featured: false
    },
    {
      id: 3,
      title: language === 'vi'
        ? "Ký kết hợp tác với tập đoàn công nghệ hàng đầu"
        : "Signing Cooperation Agreement with Leading Technology Corporation",
      excerpt: language === 'vi'
        ? "Trường ĐH Nam Cần Thơ ký kết thỏa thuận hợp tác với tập đoàn FPT về đào tạo và nghiên cứu công nghệ AI."
        : "Nam Can Tho University signed a cooperation agreement with FPT Corporation on AI technology training and research.",
      image: "/news-3.jpg",
      category: language === 'vi' ? "Hợp tác" : "Cooperation",
      author: language === 'vi' ? "Phòng Hợp tác" : "Cooperation Department",
      date: "10/09/2024",
      views: 756,
      featured: false
    },
    {
      id: 4,
      title: "Hội thảo khoa học quốc tế về phát triển bền vững",
      excerpt: "Trường tổ chức hội thảo khoa học quốc tế với chủ đề 'Phát triển bền vững trong thời đại số'.",
      image: "/news-4.jpg",
      category: "Hội thảo",
      author: "Viện Nghiên cứu",
      date: "08/09/2024",
      views: 634,
      featured: false
    },
    {
      id: 5,
      title: "Công bố kết quả tuyển sinh đại học 2024",
      excerpt: "Trường công bố kết quả tuyển sinh đại học chính quy năm 2024 với tỷ lệ trúng tuyển cao.",
      image: "/news-5.jpg",
      category: "Tuyển sinh",
      author: "Phòng Đào tạo",
      date: "05/09/2024",
      views: 2100,
      featured: false
    },
    {
      id: 6,
      title: "Khánh thành phòng lab công nghệ mới",
      excerpt: "Trường khánh thành phòng lab công nghệ thông tin hiện đại với trang thiết bị tiên tiến nhất.",
      image: "/news-6.jpg",
      category: "Cơ sở vật chất",
      author: "Phòng Kỹ thuật",
      date: "03/09/2024",
      views: 445,
      featured: false
    }
  ];

  const categories = [
    "Tất cả", "Sự kiện", "Thành tích", "Hợp tác", "Hội thảo", "Tuyển sinh", "Cơ sở vật chất"
  ];

  const popularNews = news.slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tin Tức & Sự Kiện</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Cập nhật những tin tức mới nhất về hoạt động, thành tích và sự kiện của trường
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Tin Tức Mới Nhất</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm tin tức..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Featured Article */}
              {news.filter(item => item.featured).map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <div className="relative h-64 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span>{article.views} lượt xem</span>
                    </div>
                    <button className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                      Đọc thêm <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* News Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {news.filter(item => !item.featured).map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                        <span>{article.views} lượt xem</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">Trước</button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
                  <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
                  <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
                  <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">Sau</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Danh Mục</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded hover:bg-gray-50 transition-colors ${
                        index === 0 ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular News */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tin Nổi Bật</h3>
                <div className="space-y-4">
                  {popularNews.map((article) => (
                    <div key={article.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Thẻ</h3>
                <div className="flex flex-wrap gap-2">
                  {["Đào tạo", "Nghiên cứu", "Sinh viên", "Giảng viên", "Công nghệ", "Hợp tác", "Thành tích"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 