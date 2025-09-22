// import React from 'react';
import { MapPin, Thermometer, ArrowDown, Play, Shield, Mountain, Eye } from 'lucide-react';

// Mock data for demonstration
const forest = {
  name: "Forêt du Dja et Lobo",
  location: "Cameroun",
  area: "2 000 ha",
  temperature: "25°C",
  description: "Une réserve de biosphère exceptionnelle abritant une biodiversité remarquable au cœur de l'Afrique centrale.",
  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
};

export default function ForestHero() {
  return (
    <section className="relative h-[75vh] overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${forest.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top Navigation Space */}
        <div className="h-20" />
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#228B22]/15 border border-emerald-400/30 backdrop-blur-sm">
                <Shield className="h-4 w-4 text-[#228B22]" />
                <span className="text-sm font-medium text-[#228B22]">Réserve de Biosphère UNESCO</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
                <div className="text-white drop-shadow-2xl">
                  {forest.name.split(' ').slice(0, 2).join(' ')}
                </div>
                <div className="text-[#228B22] drop-shadow-2xl">
                  {forest.name.split(' ').slice(2).join(' ')}
                </div>
              </h1>

              {/* Location and Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#228B22] " />
                  <span className="text-lg font-semibold">{forest.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-[#228B22] " />
                  <span className="text-lg font-semibold">{forest.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-[#228B22] " />
                  <span className="text-lg font-semibold">{forest.temperature}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
                {forest.description}
              </p>

              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-5">
                <button className="group relative overflow-hidden bg-[#228B22]  hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                  <div className="flex items-center justify-center gap-2">
                    <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Explorer la forêt</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </button>
                
                <button className="group border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-2">
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Vidéo immersive</span>
                  </div>
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        {/* <div className="bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-6 lg:px-12 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Espèces protégées", value: "1,200+" },
                { label: "Superficie totale", value: forest.area },
                { label: "Années de protection", value: "45+" },
                { label: "Visiteurs annuels", value: "25,000" }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-2xl font-bold text-[#228B22]  group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-xs mb-2 font-medium tracking-wider">DÉCOUVRIR</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}