"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GraduationCap, BookOpen, Users, Award, Clock, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DaoTaoPage() {
  const { t, language } = useLanguage();

  const programs = [
    {
      id: 1,
      name: language === 'vi' ? "Công nghệ thông tin" : "Information Technology",
      level: language === 'vi' ? "Đại học" : "Bachelor",
      duration: language === 'vi' ? "4 năm" : "4 years",
      students: 1200,
      description: language === 'vi' 
        ? "Chương trình đào tạo kỹ sư công nghệ thông tin với các chuyên ngành: Khoa học máy tính, Kỹ thuật phần mềm, Mạng máy tính và truyền thông."
        : "Information Technology engineering training program with specializations: Computer Science, Software Engineering, Computer Networks and Telecommunications.",
      features: language === 'vi' 
        ? ["Thực hành 70%", "Liên kết doanh nghiệp", "Chứng chỉ quốc tế"]
        : ["70% Practical", "Business Partnerships", "International Certificates"]
    },
    {
      id: 2,
      name: language === 'vi' ? "Kinh tế - Quản lý" : "Economics - Management",
      level: language === 'vi' ? "Đại học" : "Bachelor",
      duration: language === 'vi' ? "4 năm" : "4 years",
      students: 800,
      description: language === 'vi'
        ? "Đào tạo cử nhân kinh tế với các chuyên ngành: Quản trị kinh doanh, Kế toán, Tài chính - Ngân hàng."
        : "Economics degree training with specializations: Business Administration, Accounting, Finance - Banking.",
      features: language === 'vi'
        ? ["Thực tập doanh nghiệp", "Mô phỏng thị trường", "Chứng chỉ ACCA"]
        : ["Business Internships", "Market Simulation", "ACCA Certificates"]
    },
    {
      id: 3,
      name: language === 'vi' ? "Kỹ thuật - Công nghệ" : "Engineering - Technology",
      level: language === 'vi' ? "Đại học" : "Bachelor",
      duration: language === 'vi' ? "4 năm" : "4 years",
      students: 600,
      description: language === 'vi'
        ? "Chương trình đào tạo kỹ sư các ngành: Điện tử - Viễn thông, Cơ khí, Xây dựng."
        : "Engineering training program in fields: Electronics - Telecommunications, Mechanical Engineering, Construction.",
      features: language === 'vi'
        ? ["Phòng lab hiện đại", "Dự án thực tế", "Chứng chỉ kỹ thuật"]
        : ["Modern Labs", "Real Projects", "Technical Certificates"]
    },
    {
      id: 4,
      name: language === 'vi' ? "Thạc sĩ CNTT" : "Master of IT",
      level: language === 'vi' ? "Sau đại học" : "Postgraduate",
      duration: language === 'vi' ? "2 năm" : "2 years",
      students: 150,
      description: language === 'vi'
        ? "Chương trình thạc sĩ công nghệ thông tin với các chuyên ngành: AI/ML, Cybersecurity, Software Engineering."
        : "Master's program in Information Technology with specializations: AI/ML, Cybersecurity, Software Engineering.",
      features: language === 'vi'
        ? ["Nghiên cứu ứng dụng", "Liên kết quốc tế", "Luận văn thực tế"]
        : ["Applied Research", "International Partnerships", "Practical Thesis"]
    }
  ];

  const stats = [
    { icon: GraduationCap, number: "5000+", label: t('home.stats.students') },
    { icon: BookOpen, number: "50+", label: t('home.stats.programs') },
    { icon: Users, number: "200+", label: t('home.stats.teachers') },
    { icon: Award, number: "95%", label: t('home.stats.employment') }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('education.title')}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('education.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('education.programs.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('education.programs.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {program.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{program.students} {language === 'vi' ? 'sinh viên' : 'students'}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    {t('common.viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('education.features.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('education.features.modernPrograms.title')}</h3>
              <p className="text-gray-600">
                {t('education.features.modernPrograms.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('education.features.qualityTeachers.title')}</h3>
              <p className="text-gray-600">
                {t('education.features.qualityTeachers.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('education.features.recognizedDegree.title')}</h3>
              <p className="text-gray-600">
                {t('education.features.recognizedDegree.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 