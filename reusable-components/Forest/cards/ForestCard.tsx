import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Forest } from '@/types/forest';

interface ForestCardProps {
  forest: Forest;
  onExplore: () => void;
}

export default function ForestCard({ forest, onExplore }: ForestCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={forest.image}
          alt={forest.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {forest.name}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{forest.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm">
            <span className="font-medium text-gray-900">{forest.area}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-green-600">{forest.coverage}%</span>
            <span className="text-gray-500 ml-1">couverture</span>
          </div>
        </div>
        
        <Button 
          onClick={onExplore}
          className="w-full bg-green-600 hover:bg-green-700 text-white group"
        >
          Explorer
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}