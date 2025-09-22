import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Camera, Navigation, Eye, Maximize2 } from 'lucide-react';

const forests = [
  { 
    id: 1, 
    name: 'Forêt du Dia et Lobo', 
    visitors: 2, 
    active: true,
    description: 'Forêt primaire exceptionnelle',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 2, 
    name: 'Forêt du Dia et Lobo', 
    visitors: 0, 
    active: false,
    description: 'Zone de conservation',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 3, 
    name: 'Forêt du Dia et Lobo', 
    visitors: 1, 
    active: false,
    description: 'Écosystème diversifié',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  { 
    id: 4, 
    name: 'Forêt du Dia et Lobo', 
    visitors: 0, 
    active: false,
    description: 'Patrimoine naturel',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

export default function ForestSelection() {
  const [selectedForest, setSelectedForest] = useState(1);
  const activeForest = forests.find(f => f.id === selectedForest);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sélectionner une <span className="text-green-600">forêt</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez parmi nos forêts disponibles et plongez dans une expérience immersive unique
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Forest Selection Panel */}
          <div className="xl:col-span-1 space-y-4">
            {forests.map((forest) => (
              <Card
                key={forest.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedForest === forest.id
                    ? 'ring-2 ring-green-500 bg-gradient-to-r from-green-50 to-green-25 shadow-lg'
                    : 'hover:shadow-md hover:border-green-200'
                }`}
                onClick={() => setSelectedForest(forest.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{forest.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{forest.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {forest.visitors} visiteur{forest.visitors !== 1 ? 's' : ''}
                      </div>
                    </div>
                    {forest.active && (
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mb-1" />
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                          Live
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Forest Preview */}
          <div className="xl:col-span-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/10] relative">
                <img
                  src={activeForest?.image}
                  alt={activeForest?.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Top Controls */}
                <div className="absolute top-6 right-6 flex space-x-3">
                  <Button size="icon" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </Button>
                  <Button size="icon" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full">
                    <Camera className="w-5 h-5 text-gray-700" />
                  </Button>
                  <Button size="icon" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full">
                    <Maximize2 className="w-5 h-5 text-gray-700" />
                  </Button>
                </div>

                {/* Live Indicator */}
                {activeForest?.active && (
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span>EN DIRECT</span>
                    </div>
                  </div>
                )}

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Entrée de la forêt
                        </h3>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                          Bienvenue à l'entrée majestueuse de la forêt du Dia et lobo. Les Ébènes centenaires 
                          forment une arche naturelle qui vous invite à découvrir ce patrimoine forestier exceptionnel.
                        </p>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6">
                        <Eye className="w-4 h-4 mr-2" />
                        Visiter
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full">
                        Entrée de la forêt
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full border-green-200 hover:bg-green-50">
                        Cœur de la forêt
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full border-green-200 hover:bg-green-50">
                        Rochers emblématiques
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full border-green-200 hover:bg-green-50">
                        Zone de biodiversité
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}