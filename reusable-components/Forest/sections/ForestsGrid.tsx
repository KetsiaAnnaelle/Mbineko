import ForestCard from '../cards/ForestCard';
import type { Forest } from '@/types/forest';

interface ForestsGridProps {
  forests: Forest[];
  onForestSelect: (forest: Forest) => void;
}


export default function ForestsGrid({ forests, onForestSelect }: ForestsGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Forêts analysables
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sélectionnez une forêt pour accéder aux données détaillées de surveillance environnementale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forests.map((forest) => (
            <ForestCard
              key={forest.id}
              forest={forest}
              onExplore={() => onForestSelect(forest)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}