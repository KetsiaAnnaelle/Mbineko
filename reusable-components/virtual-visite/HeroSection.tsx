// import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-50 border border-green-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Technologie de pointe</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block">VISITE VIRTUELLE</span>
            <span className="block bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
              DES FORÊTS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Explorez nos forêts chez vous grâce à notre technologie de visite virtuelle immersive.
            <br />
            <span className="text-green-600 font-medium">Découvrez chaque recoin de ces écosystèmes exceptionnels.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Commencer la visite
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-green-200 hover:border-green-300 hover:bg-green-50 px-8 py-4 rounded-full transition-all duration-300 group">
              En savoir plus
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
              <div className="text-gray-600">Forêts disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">360°</div>
              <div className="text-gray-600">Vue immersive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Accès libre</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}