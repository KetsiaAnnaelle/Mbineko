"use client";
import React from "react";
import { motion } from "framer-motion";

interface ImpactCardProps {
  number: number;
  iconPath: string;
  description: string[];
  delay: number;
}

const impactData: ImpactCardProps[] = [
  {
    number: 9,
    iconPath: "/assets/img/ODD9.jpg",
    description: [
      "Utilisation des capteurs intelligents et d'une plateforme numérique",
      "Innovation technologique au service de l'environnement",
    ],
    delay: 0.1,
  },
  {
    number: 11,
    iconPath: "/assets/img/ODD 11.png",
    description: [
      "Contribution à une meilleure gestion des ressources naturelles",
      "Protection des zones forestières proches des populations",
    ],
    delay: 0.2,
  },
  {
    number: 12,
    iconPath: "/assets/img/ODD 12.png",
    description: [
      "Encourager une gestion durable des ressources naturelles grâce aux données collectées",
    ],
    delay: 0.3,
  },
  {
    number: 13,
    iconPath: "/assets/img/ODD 13.png",
    description: ["Prévention des risques (incendies, déforestation, etc.)"],
    delay: 0.4,
  },
  {
    number: 15,
    iconPath: "/assets/img/ODD 15.png",
    description: [
      "Préservation des forêts, de la biodiversité et des sols",
      "Suivi en temps réel pour protéger les écosystèmes",
    ],
    delay: 0.5,
  },
  {
    number: 17,
    iconPath: "/assets/img/ODD 17.png",
    description: [
      "Collaboration entre chercheurs, ONG, gouvernements et communautés locales",
    ],
    delay: 0.6,
  },
];

const ImpactsSection: React.FC = () => {
  return (
    <section
      id="impacts"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
          🌍 Nos <span className="text-green-600">Impacts</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {impactData.map((impact) => (
            <motion.div
              key={impact.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: impact.delay,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* Image en haut de la card */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={impact.iconPath}
                  alt={`ODD ${impact.number}`}
                  className="w-full h-full object-contain bg-white p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Texte en bas */}
              <div className="p-6 space-y-2 text-center">
                {impact.description.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Effet glow au hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-green-400/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactsSection;
