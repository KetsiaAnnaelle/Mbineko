import { Button } from '@/components/ui/button';
import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10" style={{background:'rgba(34, 139, 34, 0.25)'}} />
            <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
                <div className="grid grid-cols-10 gap-4 md:gap-6 py-12 md:py-20 items-center">
                    {/* Contenu texte */}
                    <div className="col-span-10 md:col-span-5 lg:col-span-4 space-y-5">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            <span className="text-green-700">LA FORET,</span> CONNECTEE ET
                            <span className="block">PROTEGEE</span>
                        </h1>
                        <p className="text-lg text-gray-700 max-w-prose">
                            Notre technologie transforme la nature en données exploitables. Prédisez les risques, surveillez les sols et préservez la biodiversité avec MBINEKO.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button className="rounded-md bg-green-700 px-6 py-3 text-white shadow-md hover:shadow-lg transition">
                                TELECHARGER L'APPLICATION MOBILE
                            </Button>
                            <Button variant="outline" className="px-6 py-3 border-green-700 text-green-700 hover:bg-green-50 transition">
                                COMMANDER LE KIT
                            </Button>
                        </div>
                    </div>
                    {/* Image du téléphone */}
                    <div className="col-span-8 md:col-span-5 lg:col-span-6 flex justify-center md:justify-center absolute ml-80">
                        <div className="relative">
                            <img src="/assets/img/phone-logo.png" alt="App" className="max-w-[600px] w-full drop-shadow-xl" />
                            {/* <div className="absolute -top-6 right-6 hidden md:block rotate-[25deg] bg-white/95 rounded-xl shadow p-3 w-52 mb-10">
                                <p className="text-center text-sm font-semibold text-green-700 ">Plus de 150 arbres répertoriés</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Fond vert côté droit */}
            <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none -z-10 rounded-bl-4xl" style={{background:'linear-gradient(#228B2280 50%)'}}/>
        </section>
    );
};

export default HeroSection;