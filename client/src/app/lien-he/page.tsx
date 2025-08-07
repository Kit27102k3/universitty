"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LienHePage() {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: language === 'vi' 
        ? "168 Nguyễn Văn Linh, Quận Ninh Kiều, TP. Cần Thơ"
        : "168 Nguyen Van Linh, Ninh Kieu District, Can Tho City",
      description: language === 'vi' ? "Trụ sở chính của trường" : "Main campus"
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: "0292.3.730.730",
      description: language === 'vi' ? "Hotline tư vấn tuyển sinh" : "Admission hotline"
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: "info@nctu.edu.vn",
      description: language === 'vi' ? "Thông tin chung" : "General information"
    },
    {
      icon: Clock,
      title: t('contact.workingHours'),
      content: language === 'vi' ? "Thứ 2 - Thứ 6: 7:30 - 17:00" : "Monday - Friday: 7:30 - 17:00",
      description: language === 'vi' ? "Thứ 7: 7:30 - 11:30" : "Saturday: 7:30 - 11:30"
    }
  ];

  const departments = [
    {
      name: language === 'vi' ? "Phòng Đào tạo" : "Training Department",
      phone: "0292.3.730.731",
      email: "daotao@nctu.edu.vn"
    },
    {
      name: language === 'vi' ? "Phòng Tuyển sinh" : "Admission Department",
      phone: "0292.3.730.732",
      email: "tuyensinh@nctu.edu.vn"
    },
    {
      name: language === 'vi' ? "Phòng Hợp tác quốc tế" : "International Cooperation Department",
      phone: "0292.3.730.733",
      email: "htqt@nctu.edu.vn"
    },
    {
      name: language === 'vi' ? "Phòng Công tác sinh viên" : "Student Affairs Department",
      phone: "0292.3.730.734",
      email: "ctsv@nctu.edu.vn"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">{t('contact.sendMessage')}</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('contact.fullNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('contact.phonePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.subject')}
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">{t('contact.selectSubject')}</option>
                      <option value="tuyensinh">{t('contact.admissionConsultation')}</option>
                      <option value="daotao">{t('contact.educationInfo')}</option>
                      <option value="nghiencuu">{t('contact.researchCooperation')}</option>
                      <option value="doanhnghiep">{t('contact.businessCooperation')}</option>
                      <option value="khac">{t('contact.other')}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.messageContent')} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.send')}
                </button>
              </form>
            </div>

            {/* Map and Departments */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">
                      {language === 'vi' ? 'Bản đồ sẽ được hiển thị ở đây' : 'Map will be displayed here'}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.location')}</h3>
                  <p className="text-gray-600">
                    {t('contact.locationDescription')}
                  </p>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{t('contact.departments')}</h3>
                </div>
                
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-medium text-gray-900 mb-2">{dept.name}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{dept.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>{dept.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.faq.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'vi' 
                    ? "Làm thế nào để đăng ký xét tuyển?"
                    : "How to register for admission?"
                  }
                </h3>
                <p className="text-gray-600">
                  {language === 'vi'
                    ? "Bạn có thể đăng ký xét tuyển trực tuyến qua website hoặc đến trực tiếp phòng tuyển sinh để được hướng dẫn chi tiết."
                    : "You can register for admission online through the website or visit the admission office directly for detailed guidance."
                  }
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'vi'
                    ? "Học phí của trường như thế nào?"
                    : "What are the tuition fees?"
                  }
                </h3>
                <p className="text-gray-600">
                  {language === 'vi'
                    ? "Học phí được tính theo tín chỉ và thay đổi theo từng ngành học. Vui lòng liên hệ phòng đào tạo để biết thêm chi tiết."
                    : "Tuition fees are calculated by credit and vary by major. Please contact the training department for more details."
                  }
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'vi'
                    ? "Trường có ký túc xá không?"
                    : "Does the university have dormitories?"
                  }
                </h3>
                <p className="text-gray-600">
                  {language === 'vi'
                    ? "Có, trường có ký túc xá với đầy đủ tiện nghi, phù hợp cho sinh viên từ các tỉnh khác đến học tập."
                    : "Yes, the university has dormitories with full amenities, suitable for students from other provinces to study."
                  }
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'vi'
                    ? "Cơ hội việc làm sau khi tốt nghiệp?"
                    : "Job opportunities after graduation?"
                  }
                </h3>
                <p className="text-gray-600">
                  {language === 'vi'
                    ? "Trường có tỷ lệ sinh viên có việc làm cao với mức lương tốt. Nhiều doanh nghiệp đối tác thường xuyên tuyển dụng sinh viên tốt nghiệp."
                    : "The university has a high employment rate with good salaries. Many partner companies regularly recruit graduates."
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