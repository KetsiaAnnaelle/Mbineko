import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1600)'
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explorez les <span className="text-green-400">Forêts</span> du Monde
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Découvrez les merveilles et vivez les plus belles forêts de la planète.
          Accédez à des données environnementales en temps réel et rejoignez la communauté
          de surveillance forestière mondiale.
        </p>
        <Button 
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg group"
        >
          Commencer l'exploration
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}