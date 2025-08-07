"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Target, Eye, History, Award, Users, Globe, Building, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function GioiThieuPage() {
  const { t, language } = useLanguage();

  const milestones = [
    {
      year: "2010",
      title: language === 'vi' ? "Thành lập trường" : "University Founded",
      description: language === 'vi' 
        ? "Trường ĐH Nam Cần Thơ được thành lập với sứ mệnh đào tạo nguồn nhân lực chất lượng cao cho khu vực ĐBSCL."
        : "Nam Can Tho University was established with the mission of training high-quality human resources for the Mekong Delta region."
    },
    {
      year: "2015",
      title: language === 'vi' ? "Mở rộng quy mô" : "Scale Expansion",
      description: language === 'vi'
        ? "Trường mở rộng thêm nhiều ngành đào tạo và xây dựng cơ sở vật chất hiện đại."
        : "The university expanded more training programs and built modern facilities."
    },
    {
      year: "2018",
      title: language === 'vi' ? "Đạt chuẩn kiểm định" : "Achieved Accreditation",
      description: language === 'vi'
        ? "Trường đạt chuẩn kiểm định chất lượng giáo dục quốc gia và được công nhận đạt tiêu chuẩn quốc tế."
        : "The university achieved national education quality accreditation and was recognized as meeting international standards."
    },
    {
      year: "2020",
      title: language === 'vi' ? "Chuyển đổi số" : "Digital Transformation",
      description: language === 'vi'
        ? "Triển khai chương trình chuyển đổi số toàn diện trong đào tạo và quản lý."
        : "Implemented comprehensive digital transformation program in training and management."
    },
    {
      year: "2024",
      title: language === 'vi' ? "Phát triển bền vững" : "Sustainable Development",
      description: language === 'vi'
        ? "Trường trở thành trung tâm đào tạo và nghiên cứu hàng đầu khu vực ĐBSCL."
        : "The university became a leading training and research center in the Mekong Delta region."
    }
  ];

  const values = [
    {
      icon: Target,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: Users,
      title: t('about.values.humanistic.title'),
      description: t('about.values.humanistic.description')
    },
    {
      icon: Globe,
      title: t('about.values.integration.title'),
      description: t('about.values.integration.description')
    },
    {
      icon: Award,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  const leadership = [
    {
      name: language === 'vi' ? "PGS.TS Nguyễn Văn A" : "Assoc. Prof. Dr. Nguyen Van A",
      position: language === 'vi' ? "Hiệu trưởng" : "President",
      image: "/leader-1.jpg",
      description: language === 'vi'
        ? "Chuyên gia về Công nghệ thông tin với hơn 20 năm kinh nghiệm trong lĩnh vực giáo dục."
        : "Expert in Information Technology with over 20 years of experience in education."
    },
    {
      name: language === 'vi' ? "TS. Trần Thị B" : "Dr. Tran Thi B",
      position: language === 'vi' ? "Phó Hiệu trưởng" : "Vice President",
      image: "/leader-2.jpg",
      description: language === 'vi'
        ? "Chuyên gia về Quản lý giáo dục và phát triển chương trình đào tạo."
        : "Expert in Educational Management and Training Program Development."
    },
    {
      name: language === 'vi' ? "TS. Lê Văn C" : "Dr. Le Van C",
      position: language === 'vi' ? "Phó Hiệu trưởng" : "Vice President",
      image: "/leader-3.jpg",
      description: language === 'vi'
        ? "Chuyên gia về Nghiên cứu khoa học và hợp tác quốc tế."
        : "Expert in Scientific Research and International Cooperation."
    }
  ];

  const stats = [
    { icon: GraduationCap, number: "5000+", label: t('home.stats.students') },
    { icon: Users, number: "200+", label: t('home.stats.teachers') },
    { icon: Building, number: "50+", label: t('home.stats.programs') },
    { icon: Award, number: "95%", label: t('home.stats.employment') }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('about.subtitle')}
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

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.aboutTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.aboutDescription1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.aboutDescription2')}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{t('about.mission')}</h3>
                  <p className="text-blue-800">
                    {t('about.missionText')}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-900 mb-2">{t('about.vision')}</h3>
                  <p className="text-green-800">
                    {t('about.visionText')}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  {language === 'vi' ? 'Hình ảnh trường sẽ được hiển thị ở đây' : 'University image will be displayed here'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.history.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.history.subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.leadership.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.leadership.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.campus.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.campus.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Building className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'vi' ? 'Tòa nhà chính' : 'Main Building'}
                </h3>
                <p className="text-gray-600">
                  {language === 'vi' 
                    ? 'Tòa nhà 5 tầng với các phòng học hiện đại, thư viện và văn phòng.'
                    : '5-story building with modern classrooms, library and offices.'
                  }
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'vi' ? 'Phòng thí nghiệm' : 'Laboratories'}
                </h3>
                <p className="text-gray-600">
                  {language === 'vi'
                    ? 'Hệ thống phòng lab hiện đại phục vụ thực hành và nghiên cứu.'
                    : 'Modern laboratory system serving practice and research.'
                  }
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'vi' ? 'Ký túc xá' : 'Dormitory'}
                </h3>
                <p className="text-gray-600">
                  {language === 'vi'
                    ? 'Ký túc xá khang trang với đầy đủ tiện nghi cho sinh viên.'
                    : 'Spacious dormitory with full amenities for students.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 