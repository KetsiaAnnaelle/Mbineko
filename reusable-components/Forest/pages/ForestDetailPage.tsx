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

// export default function ForestDetailPage({ forest, onBack }: ForestDetailPageProps) {
export default function ForestDetailPage({ forest }: ForestDetailPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Header showBackButton onBack={onBack} /> */}
      <div className="pt-16 md:pt-20 lg:pt-24">
        <ForestHero forest={forest}/>
      </div>
      <ForestStats forest={forest} />
      <CTASection />
      <Footer />
    </div>
  );
}