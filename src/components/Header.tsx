import { useState } from "react";
import { Menu, X, Phone, Globe, HomeIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import nctuLogo from "@/assets/nctu-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("vi");

  const navItems = [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Đào tạo", href: "#programs" },
    { name: "Nghiên cứu", href: "#research" },
    { name: "Tin tức", href: "#news" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  return (
    <header className="bg-background shadow-soft sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2"></div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 hover:text-university-gold transition-colors">
                <HomeIcon className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 hover:text-university-gold transition-colors">
                <span>Sinh viên</span>
              </button>
              <button className="flex items-center gap-2 hover:text-university-gold transition-colors">
                <span>Cán bộ - Giáo viên</span>
              </button>
              <button className="flex items-center gap-2 hover:text-university-gold transition-colors">
                <SearchIcon className="w-4 h-4" />
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 hover:text-university-gold transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "vi" ? "English" : "Tiếng Việt"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={nctuLogo}
              alt="NCTU Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">
                TRƯỜNG ĐẠI HỌC NAM CẦN THƠ
              </h1>
              <p className="text-sm text-muted-foreground">
                Nam Can Tho University
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
