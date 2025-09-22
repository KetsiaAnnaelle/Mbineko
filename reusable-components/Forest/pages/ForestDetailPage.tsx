

import ForestStats from '../sections/ForestStats';
import CTASection from '../sections/CTASection';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import type { Forest } from '@/types/forest';
import ForestHero from '../sections/ForestHero';

interface ForestDetailPageProps {
  forest: Forest;
  onBack: () => void;
}

export default function ForestDetailPage({ forest, onBack }: ForestDetailPageProps) {
  return (
    <div className="min-h-screen">
      <Header showBackButton onBack={onBack} />
      <ForestHero forest={forest} />
      <ForestStats forest={forest} />
      <CTASection />
      <Footer />
    </div>
  );
}