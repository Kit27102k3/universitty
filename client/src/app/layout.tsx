import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import BackToTop from '@/components/BackToTop'
import ClientProviders from '@/components/ClientProviders'
import { LanguageProvider } from "@/contexts/LanguageContext";
import { UserProvider } from "@/contexts/UserContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Đại học Nam Cần Thơ',
  description: 'Trang web chính thức của Đại học Nam Cần Thơ',
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: '/nctu-logo.png',
    apple: '/nctu-logo.png',
  },
  openGraph: {
    title: 'Đại học Nam Cần Thơ',
    description: 'Trang web chính thức của Đại học Nam Cần Thơ',
    images: ['/nctu-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <LanguageProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </LanguageProvider>
      </body>
    </html>
  );
} 