import { Button } from '@/components/ui/button';
import { MapPin, Thermometer, TreePine } from 'lucide-react';
import type { Forest } from '@/types/forest';

interface ForestHeroProps {
  forest: Forest;
}

export default function ForestHero({ forest }: ForestHeroProps) {
  return (
    <section 
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat mt-14"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${forest.image})`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {forest.name}
        </h1>
        <div className="flex items-center justify-center space-x-6 mb-6">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{forest.location}</span>
          </div>
          <div className="flex items-center">
            <TreePine className="h-5 w-5 mr-2" />
            <span>{forest.area}</span>
          </div>
          <div className="flex items-center">
            <Thermometer className="h-5 w-5 mr-2" />
            <span>{forest.temperature}</span>
          </div>
        </div>
        <p className="text-lg opacity-90 mb-8">
          {forest.description}
        </p>
      </div>
    </section>
  );
}