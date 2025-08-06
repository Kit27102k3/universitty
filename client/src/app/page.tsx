import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import News from '@/components/News'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <News />
      <Footer />
    </main>
  )
} 