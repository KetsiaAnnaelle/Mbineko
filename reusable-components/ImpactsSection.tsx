import React from 'react';
import { Card, CardContent } from "../src/components/ui/card";

interface ImpactCardProps {
  number: number;
  iconPath: string;
  description: string[];
  animationDelay: string;
}

const impactData: ImpactCardProps[] = [
  {
    number: 9,
    iconPath: "/assets/img/ODD9.jpg",
    description: [
      "Utilisation des capteurs intelligents et d'une plateforme numérique",
      "Innovation technologique apporté à l'environnement",
    ],
    animationDelay: "delay-0",
  },
  {
    number: 11,
    iconPath: "/assets/img/ODD 11.png",
    description: [
      "Contribution à une meilleure gestions des ressources naturelles",
      "Protection des zones forestièresproches des populatons",
    ],
    animationDelay: "delay-100",
  },
  {
    number: 12,
    iconPath: "/assets/img/ODD 12.png",
    description: [
      "Les données peuvent encouager une gestion durable des ressources naturelles.",
    ],
    animationDelay: "delay-200",
  },
  {
    number: 13,
    iconPath: "/assets/img/ODD 13.png",
    description: [
      "Prévention des risques (incendies, déforestation...)",
    ],
    animationDelay: "delay-300",
  },
  {
    number: 15,
    iconPath: "/assets/img/ODD 15.png",
    description: [
      "Préservations de la forêts, de biodiversité et des sols?",
      "Suivi en temps réel pou protéger les écosystèmes?",
    ],
    animationDelay: "delay-400",
  },
  {
    number: 17,
    iconPath: "/assets/img/ODD 17.png",
    description: [
      "Collaboration entre chercheurrs, ONG, gouvernements et communautés locales?",
    ],
    animationDelay: "delay-500",
  },
];

const ImpactsSection: React.FC = () => {
  return (
    <section id="impacts" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
        <h2 className="title text-center mb-12 md:mb-16">IMPACTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {impactData.map((impact) => (
            <Card
              key={impact.number}
              className={`relative overflow-hidden rounded-xl shadow-lg h-80 md:h-96 transform transition-all duration-700 ease-out reveal ${impact.animationDelay} hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Full-bleed image fills card */}
              <img
                src={impact.iconPath}
                alt={`ODD ${impact.number} image`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Bottom overlay for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <CardContent className="relative z-10 flex h-full items-end p-4 md:p-6">
                <div className="body-text text-white space-y-1 text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                  {impact.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactsSection;
