import { Button } from '@/components/ui/button';
import StatCard from '../cards/StatCard';
import ProgressCard from '../cards/ProgressCard';
import { MapPin, Map, Share, Eye, Heart } from 'lucide-react';
import type { Forest } from '@/types/forest';

interface ForestStatsProps {
  forest: Forest;
}

export default function ForestStats({ forest }: ForestStatsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-wrap gap-3 mb-6">
                <Button variant="outline" className="text-green-600 border-green-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  Géolocaliser
                </Button>
                <Button variant="outline">
                  Statistiques
                </Button>
                <Button variant="outline">
                  Cartes
                </Button>
                <Button variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Voir
                </Button>
                <Button variant="destructive">
                  <Heart className="h-4 w-4 mr-2" />
                  S3S
                </Button>
                <Button variant="outline" className="bg-blue-50 border-blue-200 text-blue-600">
                  <Share className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Données de la forêt</h3>
              <div className="space-y-4">
                <ProgressCard
                  label="Chine"
                  value={forest.stats.china}
                  color="bg-red-500"
                />
                <ProgressCard
                  label="Inde"
                  value={forest.stats.india}
                  color="bg-green-500"
                />
                <ProgressCard
                  label="Brésil"
                  value={forest.stats.brazil}
                  color="bg-yellow-500"
                />
                <ProgressCard
                  label="Autres"
                  value={forest.stats.others}
                  color="bg-blue-500"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <StatCard
              title="Température (°C)"
              value="18.5"
              color="bg-purple-100 text-purple-800"
              icon="thermometer"
            />
            <StatCard
              title="Humidité"
              value={`${forest.humidity}%`}
              color="bg-blue-100 text-blue-800"
              icon="droplets"
            />
            <StatCard
              title="Précipités"
              value="24°ST"
              color="bg-orange-100 text-orange-800"
              icon="cloud-rain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}