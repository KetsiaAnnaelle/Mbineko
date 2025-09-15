import React from 'react';
// import { Check } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";

const points = [
    "Surveillance en temps réel de votre zone forestière",
    "Localisation GPS précise de chaque équipement",
    "Assistance technique 24h/24 et 7j/7 et maintenance",
    "Données téléchargeables et rapports détaillés",
];

const FunctionnalitiesSection: React.FC = () => {
    return (
        <section id="features" className="py-10 md:py-16">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
                <h2 className="title text-center mb-12">FONCTIONNALITES</h2>
                <div className="grid grid-cols-10 gap-4 md:gap-8 items-start gap-y-12">
                    <div className="col-span-10 md:col-span-5 lg:col-span-6 space-y-5">
                        <p className="body-text max-w-prose">
                            Chaque kit MBINEKO comprend des drones de surveillances, des capteurs environnementaux et un accès complet à notre plateforme de surveillance
                        </p>
                        <ul className="space-y-3 reveal">
                            {points.map((text) => (
                                <li key={text} className="flex items-start gap-3 body-text">
                                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center">
                                        <FaCheckCircle  className="h-4 w-4 text-green-600" />
                                    </span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-10 md:col-span-5 lg:col-span-4 md:col-start-7 flex justify-center reveal">
                        <Card className="max-w-md hover:shadow-lg transition-shadow border-none">
                            <CardHeader>
                                <CardTitle className="subtitle">Nouvelles fonctionnalités</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img src="/assets/img/img-functionnalities.PNG" alt="Fonctionnalités" className="" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionnalitiesSection;