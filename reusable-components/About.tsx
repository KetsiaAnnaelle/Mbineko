import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
        <Card className="overflow-hidden shadow-xl rounded-2xl reveal">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 min-h-[520px]">
              {/* Image */}
              <div className="relative">
                <img
                  src="/assets/img/Team.jpg"
                  alt="Équipe MBINEKO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm">
                    <h3 className="text-sm font-bold tracking-wide">BIENVENUE</h3>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-gray-800 tracking-wide">À PROPOS DE</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">NOUS</h3>
                  </div>
                  
                  <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
                    <p>
                      Mbineko est une initiative née de la conviction que la technologie peut aider à préserver nos forêts. Grâce à des capteurs intelligents et à une plateforme de suivi, nous collectons et analysons des données précieuses sur les sols, les arbres et les écosystèmes.
                    </p>
                    <p>
                      Ces informations permettent d'anticiper les risques, de mieux comprendre l'état des forêts et d'accompagner les communautés, chercheurs et décideurs dans la protection de l'environnement.
                    </p>
                    <p>
                      Notre mission est simple : transformer les données en actions concrètes pour un avenir durable, où la nature et l'innovation avancent ensemble.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-sm font-bold tracking-wide rounded-md transition-colors">
                      NOUS CONTACTER
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;