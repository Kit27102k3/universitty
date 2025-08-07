import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FlaskConical, Users, Award, BookOpen, TrendingUp, Globe, Microscope, Lightbulb } from 'lucide-react'

export default function NghienCuuPage() {
  const researchAreas = [
    {
      id: 1,
      name: "Công nghệ thông tin & AI",
      description: "Nghiên cứu về trí tuệ nhân tạo, machine learning, big data và các ứng dụng công nghệ mới.",
      projects: 25,
      publications: 45,
      researchers: 15,
      icon: TrendingUp
    },
    {
      id: 2,
      name: "Kinh tế & Quản lý",
      description: "Nghiên cứu về phát triển kinh tế, quản lý doanh nghiệp và các mô hình kinh doanh mới.",
      projects: 18,
      publications: 32,
      researchers: 12,
      icon: BookOpen
    },
    {
      id: 3,
      name: "Kỹ thuật & Công nghệ",
      description: "Nghiên cứu về các giải pháp kỹ thuật, công nghệ xanh và phát triển bền vững.",
      projects: 22,
      publications: 38,
      researchers: 18,
      icon: Microscope
    },
    {
      id: 4,
      name: "Khoa học xã hội",
      description: "Nghiên cứu về giáo dục, văn hóa và các vấn đề xã hội đương đại.",
      projects: 15,
      publications: 28,
      researchers: 10,
      icon: Users
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Phát triển hệ thống AI cho nông nghiệp thông minh",
      leader: "PGS.TS Nguyễn Văn A",
      duration: "2023-2025",
      budget: "2.5 tỷ VNĐ",
      status: "Đang thực hiện",
      description: "Nghiên cứu ứng dụng AI trong việc tối ưu hóa sản xuất nông nghiệp tại ĐBSCL."
    },
    {
      id: 2,
      title: "Mô hình kinh tế tuần hoàn cho doanh nghiệp vừa và nhỏ",
      leader: "TS. Trần Thị B",
      duration: "2023-2024",
      budget: "1.8 tỷ VNĐ",
      status: "Hoàn thành",
      description: "Xây dựng mô hình kinh tế tuần hoàn phù hợp với điều kiện Việt Nam."
    },
    {
      id: 3,
      title: "Công nghệ xử lý nước thải bằng vi sinh vật",
      leader: "PGS.TS Lê Văn C",
      duration: "2024-2026",
      budget: "3.2 tỷ VNĐ",
      status: "Đang thực hiện",
      description: "Phát triển công nghệ xử lý nước thải thân thiện với môi trường."
    },
    {
      id: 4,
      title: "Nghiên cứu về giáo dục STEM trong thời đại số",
      leader: "TS. Phạm Thị D",
      duration: "2023-2024",
      budget: "1.2 tỷ VNĐ",
      status: "Hoàn thành",
      description: "Đánh giá hiệu quả của phương pháp giáo dục STEM trong bối cảnh chuyển đổi số."
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Machine Learning Applications in Smart Agriculture: A Comprehensive Review",
      authors: "Nguyễn Văn A, Trần Thị B, Lê Văn C",
      journal: "IEEE Transactions on Agriculture",
      year: 2024,
      citations: 15,
      type: "Journal"
    },
    {
      id: 2,
      title: "Circular Economy Models for Vietnamese SMEs: Challenges and Opportunities",
      authors: "Trần Thị B, Nguyễn Văn D",
      journal: "Sustainability Science",
      year: 2024,
      citations: 8,
      type: "Journal"
    },
    {
      id: 3,
      title: "AI-Driven Water Quality Monitoring System",
      authors: "Lê Văn C, Phạm Thị E",
      journal: "Environmental Technology",
      year: 2023,
      citations: 12,
      type: "Conference"
    },
    {
      id: 4,
      title: "Digital Transformation in Higher Education: A Case Study from Vietnam",
      authors: "Phạm Thị D, Nguyễn Văn F",
      journal: "Education and Information Technologies",
      year: 2023,
      citations: 6,
      type: "Journal"
    }
  ];

  const stats = [
    { icon: FlaskConical, number: "80+", label: "Dự án nghiên cứu" },
    { icon: BookOpen, number: "150+", label: "Công bố khoa học" },
    { icon: Users, number: "50+", label: "Nhà nghiên cứu" },
    { icon: Award, number: "25+", label: "Giải thưởng" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nghiên Cứu</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Đổi mới sáng tạo, nghiên cứu ứng dụng và đóng góp cho sự phát triển của xã hội
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

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lĩnh Vực Nghiên Cứu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tập trung vào các lĩnh vực nghiên cứu chiến lược, đáp ứng nhu cầu phát triển 
              của khu vực và quốc gia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area) => (
              <div key={area.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.name}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{area.projects}</div>
                        <div className="text-sm text-gray-500">Dự án</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">{area.publications}</div>
                        <div className="text-sm text-gray-500">Công bố</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">{area.researchers}</div>
                        <div className="text-sm text-gray-500">Nghiên cứu viên</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dự Án Nghiên Cứu Gần Đây
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Các dự án nghiên cứu đang thực hiện và đã hoàn thành với những đóng góp 
              thiết thực cho cộng đồng
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Đang thực hiện' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Chủ nhiệm: {project.leader}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Thời gian: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Kinh phí: {project.budget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Công Bố Khoa Học
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những công trình nghiên cứu được công bố trên các tạp chí uy tín trong nước và quốc tế
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Tác giả:</span> {pub.authors}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Tạp chí:</span> {pub.journal}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Năm: {pub.year}</span>
                      <span>•</span>
                      <span>Trích dẫn: {pub.citations}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        pub.type === 'Journal' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {pub.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cơ Sở Nghiên Cứu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hệ thống phòng thí nghiệm và trang thiết bị hiện đại phục vụ nghiên cứu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phòng thí nghiệm CNTT</h3>
              <p className="text-gray-600">
                Hệ thống máy tính hiệu năng cao, phòng lab AI/ML, và các thiết bị chuyên dụng
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phòng thí nghiệm Kỹ thuật</h3>
              <p className="text-gray-600">
                Các thiết bị đo lường, phân tích và thí nghiệm kỹ thuật tiên tiến
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trung tâm Sáng tạo</h3>
              <p className="text-gray-600">
                Không gian làm việc sáng tạo, ươm tạo ý tưởng và phát triển startup
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 