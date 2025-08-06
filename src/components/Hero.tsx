import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';
import campusHero from '@/assets/campus-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${campusHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Trường Đại học
            <span className="block text-university-gold">Nam Cần Thơ</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Xây dựng tri thức - Phát triển bền vững
          </p>
          
          <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
            Trường Đại học Nam Cần Thơ (NCTU) cam kết cung cấp chất lượng giáo dục đại học 
            hàng đầu, đào tạo nguồn nhân lực chất lượng cao phục vụ sự phát triển kinh tế - xã hội của đất nước.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-university-gold hover:bg-university-gold/90 text-primary font-semibold px-8">
              Tuyển sinh 2024
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 hover:text-white">
              Xem thêm thông tin
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-university-gold" />
              </div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-lg opacity-80">Sinh viên</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-12 h-12 text-university-gold" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-80">Chương trình đào tạo</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-university-gold" />
              </div>
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-lg opacity-80">Năm thành lập</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;