// import Header from '@/components/layout/Header';
// import Hero from '@/components/sections/Hero';
import ForestsGrid from '../sections/ForestsGrid';
import FeaturesSection from '../sections/FeaturesSection';
import CTASection from '../sections/CTASection';
import Footer from '../../Layout/Footer';
import { forests, features } from '@/data/forests';
import type { Forest } from '@/types/forest';
import Hero from '../sections/Hero';
import Header from '../../Layout/Header';

interface ForestPageProps {
  onForestSelect: (forest: Forest) => void;
}


export default function ForestPage({ onForestSelect }: ForestPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20 lg:pt-24">
        <Hero />
      </div>
      <ForestsGrid forests={forests} onForestSelect={onForestSelect} />
      <FeaturesSection features={features} />
      <CTASection />
      <Footer />
    </div>
  );
}