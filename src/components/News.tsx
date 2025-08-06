import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: 'Lễ khai giảng năm học 2024-2025',
      excerpt: 'Trường Đại học Nam Cần Thơ tổ chức lễ khai giảng năm học mới với sự tham gia của hơn 3,000 tân sinh viên.',
      date: '15/09/2024',
      category: 'Sự kiện',
      readTime: '3 phút đọc',
      featured: true
    },
    {
      title: 'Hội thảo khoa học quốc tế về công nghệ giáo dục',
      excerpt: 'Sự kiện quy tụ các chuyên gia hàng đầu trong lĩnh vực công nghệ giáo dục từ các trường đại học danh tiếng.',
      date: '10/09/2024',
      category: 'Nghiên cứu',
      readTime: '5 phút đọc',
      featured: false
    },
    {
      title: 'Sinh viên NCTU đạt giải nhất cuộc thi startup quốc gia',
      excerpt: 'Đội thi của trường đã xuất sắc giành giải nhất với dự án ứng dụng AI trong nông nghiệp thông minh.',
      date: '05/09/2024',
      category: 'Thành tích',
      readTime: '4 phút đọc',
      featured: false
    },
    {
      title: 'Khai trương phòng thí nghiệm AI và Big Data',
      excerpt: 'Phòng thí nghiệm mới được trang bị thiết bị hiện đại nhất, phục vụ nghiên cứu và đào tạo trong lĩnh vực AI.',
      date: '01/09/2024',
      category: 'Cơ sở vật chất',
      readTime: '3 phút đọc',
      featured: false
    },
    {
      title: 'Chương trình học bổng du học Hàn Quốc 2024',
      excerpt: 'Cơ hội học bổng toàn phần cho sinh viên xuất sắc theo học tại các trường đại học hàng đầu Hàn Quốc.',
      date: '28/08/2024',
      category: 'Học bổng',
      readTime: '6 phút đọc',
      featured: false
    },
    {
      title: 'Hợp tác chiến lược với tập đoàn công nghệ hàng đầu',
      excerpt: 'Ký kết thỏa thuận hợp tác trong đào tạo và cung cấp cơ hội việc làm cho sinh viên tốt nghiệp.',
      date: '25/08/2024',
      category: 'Hợp tác',
      readTime: '4 phút đọc',
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Sự kiện': 'bg-primary text-primary-foreground',
      'Nghiên cứu': 'bg-university-gold text-white',
      'Thành tích': 'bg-green-500 text-white',
      'Cơ sở vật chất': 'bg-blue-500 text-white',
      'Học bổng': 'bg-purple-500 text-white',
      'Hợp tác': 'bg-orange-500 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Tin tức & Sự kiện
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất về hoạt động của trường, 
            thành tích sinh viên và các sự kiện quan trọng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            {newsItems.filter(item => item.featured).map((item, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 mb-8 bg-gradient-card border-0">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <Button className="group/btn">
                    Đọc thêm
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Tin mới nhất</h3>
            <div className="space-y-6">
              {newsItems.filter(item => !item.featured).map((item, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-0 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{item.readTime}</span>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Xem
                        <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Xem tất cả tin tức
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;