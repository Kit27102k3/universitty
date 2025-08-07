"use client";

import { useState } from "react";
import { Menu, X, Phone, Globe, HomeIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "./LoginModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState(""); // "student" hoặc "staff"
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchClosing, setSearchClosing] = useState(false);

  const handleCloseSearch = () => {
    setSearchClosing(true);
    setTimeout(() => {
      setSearchOpen(false);
      setSearchClosing(false);
    }, 300);
  };

  const navItems = [
    { name: t('header.home'), href: "/" },
    { name: t('header.about'), href: "/gioi-thieu" },
    { name: t('header.education'), href: "/dao-tao" },
    { name: t('header.research'), href: "/nghien-cuu" },
    { name: t('header.news'), href: "/tin-tuc" },
    { name: t('header.contact'), href: "/lien-he" },
  ];

  const aboutSubItems = [
    "Sứ mệnh - Tầm nhìn",
    "Lịch sử hình thành",
    "Hành trình truyền lửa",
    "Mô hình doanh nghiệp",
    "Hội đồng trường - Ban giám hiệu",
    "Đối tác chiến lược",
    "Khuôn viên trường",
    "Kiểm định chất lượng",
    "Công khai",
    "Thông tin liên hệ",
    "Quy định và chính sách",
  ];

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  return (
    <header className="bg-background shadow-soft sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2"></div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <HomeIcon className="w-4 h-4" />
              </button>
              <Link
                href="/sinh-vien"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <span>{t('header.student')}</span>
              </Link>
              <button
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                onClick={() => {
                  setLoginRole("staff");
                  setLoginOpen(true);
                }}
              >
                <span>{t('header.staff')}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-yellow-400 transition-colors" onClick={() => setSearchOpen(!searchOpen)}>
                <SearchIcon className="w-4 h-4" />
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "vi" ? t('header.english') : t('header.vietnamese')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 ${searchClosing ? 'animate-out slide-out-to-top duration-300 ease-in' : 'animate-in slide-in-from-top duration-300 ease-out'}`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('header.searchPlaceholder')}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
              </div>
              <button
                onClick={handleCloseSearch}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/nctu-logo.png"
              alt="NCTU Logo"
              width={60}
              height={60}
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-primary">NAM CAN THO</h1>
              <p className="text-xl text-primary font-bold">UNIVERSITY</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.name === t('header.about') ? (
                <div key={item.name} className="relative group p-4">
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                  >
                    {item.name}
                  </a>
                  <div className="fixed left-0 right-0 top-[72px] w-screen mt-12 bg-white shadow-lg rounded-none opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-50">
                    <div className="flex">
                      <div className="w-1/3 relative flex flex-col justify-center items-start p-8 bg-gradient-to-tr from-blue-900/80 to-blue-700/80 text-white overflow-hidden min-h-[320px]">
                        <img
                          src="/about-bg.jpg"
                          alt={t('header.about')}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-l-lg -z-10"
                        />
                        <h3 className="text-3xl font-bold mb-2">{t('header.about')}</h3>
                        <p className="mb-6 text-lg font-medium">
                          {t('home.hero.description')}
                        </p>
                        <a
                          href="#about"
                          className="border border-white px-6 py-2 rounded text-white font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                        >
                          {t('common.viewDetails')}
                        </a>
                      </div>
                      <div className="w-2/3 grid grid-cols-3 gap-6 p-8">
                        {aboutSubItems.map((sub, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="text-[16px] text-blue-900 hover:text-primary font-medium transition-colors"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

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
      <LoginModal
        open={loginOpen}
        onOpenChange={setLoginOpen}
        role={loginRole}
      />
    </header>
  );
};

export default Header;
