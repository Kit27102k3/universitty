import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import News from '@/components/News';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <News />
      <Footer />
    </div>
  );
};

export default Index;