import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
        {/* Section Équipe */}
        <div className="text-center space-y-6 mb-12">
          <h2 className="title">ÉQUIPE ET PARTENAIRES</h2>
          <p className="body-text text-neutral-600 max-w-2xl mx-auto">Une équipe pluridisciplinaire au service de la forêt et de l'innovation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image de l'équipe */}
          <div className="order-2 md:order-1 reveal">
            <Card className="overflow-hidden shadow-lg rounded-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/assets/img/Team.jpg"
                    alt="Équipe MBINEKO"
                    className="w-full h-72 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">Bienvenue</h3>
                    <p className="text-white/80 text-sm">chez MBINEKO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Description de l'équipe */}
          <div className="order-1 md:order-2 text-left space-y-5 reveal">
            <p className="body-text text-neutral-700">
              Chez MBINEKO, nous croyons que la technologie peut être un puissant allié de la nature. Notre équipe réunit des profils variés (développeur mobile, développeur web, expert IoT, expert réseau, big data, UX designer), avec une vision commune : comprendre et protéger nos forêts.
            </p>
            <p className="body-text text-neutral-700">
              Ensemble, nous transformons des données en actions concrètes, pour que chaque génération puisse profiter de la richesse des écosystèmes.
            </p>
          </div>
        </div>

        {/* Section Partenaires */}
        <div className="text-center space-y-8 mt-16">
          <h3 className="subtitle">PARTENAIRES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all reveal">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-orange-500">Orange</h4>
                  <p className="text-xl font-semibold text-neutral-900">Digital Center</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all reveal delay-100">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-neutral-900">AWS</h4>
                  <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;