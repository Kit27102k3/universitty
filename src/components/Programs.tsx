import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Computer, 
  Building, 
  Stethoscope, 
  Calculator, 
  Globe, 
  Palette,
  ArrowRight
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Computer,
      title: 'Công nghệ thông tin',
      description: 'Đào tạo chuyên gia CNTT với kiến thức sâu về lập trình, AI, và phát triển phần mềm.',
      duration: '4 năm',
      degree: 'Cử nhân'
    },
    {
      icon: Building,
      title: 'Kinh tế - Quản trị',
      description: 'Phát triển kỹ năng lãnh đạo và quản lý doanh nghiệp trong môi trường toàn cầu.',
      duration: '4 năm',
      degree: 'Cử nhân'
    },
    {
      icon: Stethoscope,
      title: 'Y tế công cộng',
      description: 'Đào tạo chuyên gia y tế với định hướng phục vụ cộng đồng và chăm sóc sức khỏe.',
      duration: '5 năm',
      degree: 'Bác sĩ'
    },
    {
      icon: Calculator,
      title: 'Kỹ thuật',
      description: 'Chương trình kỹ thuật đa ngành với trang thiết bị hiện đại và giảng viên giàu kinh nghiệm.',
      duration: '4 năm',
      degree: 'Kỹ sư'
    },
    {
      icon: Globe,
      title: 'Ngoại ngữ',
      description: 'Phát triển năng lực ngoại ngữ và kỹ năng giao tiếp quốc tế.',
      duration: '4 năm',
      degree: 'Cử nhân'
    },
    {
      icon: Palette,
      title: 'Nghệ thuật & Thiết kế',
      description: 'Khuyến khích sáng tạo và phát triển tài năng nghệ thuật trong môi trường học tập hiện đại.',
      duration: '4 năm',
      degree: 'Cử nhân'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-university-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Chương trình đào tạo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá các chương trình đào tạo đa dạng với chất lượng giáo dục hàng đầu, 
            được thiết kế để phát triển toàn diện năng lực sinh viên.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-primary-hover transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <span>Thời gian: {program.duration}</span>
                    <span>Bằng cấp: {program.degree}</span>
                  </div>
                  
                  <Button className="w-full group/btn">
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Xem tất cả chương trình
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;