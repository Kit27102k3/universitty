"use client";

import { useState } from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Home, 
  Search, 
  Calendar,
  FileText,
  Award,
  CheckCircle
} from 'lucide-react'

export default function TraCuuPage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('degree');

  const tabs = [
    { id: 'degree', label: t('lookup.tabs.degree') },
    { id: 'itCertificate', label: t('lookup.tabs.itCertificate') },
    { id: 'vstepCertificate', label: t('lookup.tabs.vstepCertificate') }
  ];

  const trainingTypes = [
    { value: 'university', label: t('lookup.form.trainingTypeOptions.university') },
    { value: 'college', label: t('lookup.form.trainingTypeOptions.college') },
    { value: 'master', label: t('lookup.form.trainingTypeOptions.master') },
    { value: 'phd', label: t('lookup.form.trainingTypeOptions.phd') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/banner-home-3.jpg')"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            {/* Lookup Text Overlay */}
            <div className="bg-white bg-opacity-90 rounded-lg p-6 inline-block mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
                {t('lookup.title')}
              </h1>
            </div>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-white">
              <Home className="w-4 h-4" />
              <span>/</span>
              <span className="font-medium">
                {t('header.lookup')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Training Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('lookup.form.trainingType')}
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        {trainingTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('lookup.form.dateOfBirth')}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={t('lookup.form.dateOfBirthPlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Entry Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('lookup.form.entryNumber')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('lookup.form.fullName')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder=""
                      />
                    </div>

                    {/* Template Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('lookup.form.templateNumber')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-start justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="confirm"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                      required
                    />
                    <label htmlFor="confirm" className="ml-2 text-sm text-gray-600">
                      {t('lookup.form.confirmInfo')}
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Search className="w-4 h-4" />
                    {t('lookup.form.search')}
                  </button>
                </div>
              </form>
            </div>

            {/* Information Section */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'vi' ? 'Văn bằng chính quy' : 'Official Degrees'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'vi' 
                    ? 'Tra cứu thông tin văn bằng chính quy được cấp bởi trường'
                    : 'Lookup information about official degrees issued by the university'
                  }
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'vi' ? 'Chứng chỉ quốc tế' : 'International Certificates'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'vi'
                    ? 'Xác minh chứng chỉ CNTT và VSTEP được cấp bởi trường'
                    : 'Verify IT and VSTEP certificates issued by the university'
                  }
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'vi' ? 'Xác minh nhanh' : 'Quick Verification'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'vi'
                    ? 'Hệ thống tra cứu nhanh chóng và chính xác 24/7'
                    : 'Fast and accurate verification system available 24/7'
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