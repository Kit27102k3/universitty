import { MapPin, Phone, Mail, Globe, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nctuLogo from '@/assets/nctu-logo.png';

const Footer = () => {
  const quickLinks = [
    'Giới thiệu',
    'Tuyển sinh',
    'Đào tạo',
    'Nghiên cứu',
    'Sinh viên',
    'Cựu sinh viên'
  ];

  const programs = [
    'Công nghệ thông tin',
    'Kinh tế - Quản trị',
    'Y tế công cộng',
    'Kỹ thuật',
    'Ngoại ngữ',
    'Nghệ thuật & Thiết kế'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={nctuLogo} 
                alt="NCTU Logo" 
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="font-bold text-lg">NCTU</h3>
                <p className="text-sm opacity-80">Nam Cần Thơ University</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm opacity-90">
                  168 Nguyễn Văn Cừ, Phường An Khánh,<br />
                  Quận Ninh Kiều, TP. Cần Thơ
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <p className="text-sm opacity-90">0939 257 838</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <p className="text-sm opacity-90">info@nctu.edu.vn</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                <p className="text-sm opacity-90">www.nctu.edu.vn</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-university-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Chương trình đào tạo</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href="#programs"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-university-gold transition-colors"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kết nối với chúng tôi</h4>
            
            <div className="flex gap-3 mb-6">
              <Button size="icon" variant="ghost" className="hover:bg-white/20 hover:text-university-gold">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20 hover:text-university-gold">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20 hover:text-university-gold">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Nhận thông tin mới nhất</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email của bạn"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded focus:outline-none focus:border-university-gold placeholder:text-white/60"
                />
                <Button size="sm" className="bg-university-gold hover:bg-university-gold/90 text-primary">
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2024 Trường Đại học Nam Cần Thơ. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Chính sách bảo mật</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Điều khoản sử dụng</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Bản đồ trang web</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;