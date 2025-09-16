import React from "react";
import Navbar from '../../reusable-components/Navbar';
import HeroSection from '../../reusable-components/HeroSection';
import FunctionnalitiesSection from '../../reusable-components/FunctionnalitiesSection';
import ImpactsSection from '../../reusable-components/ImpactsSection';
import Team from '../../reusable-components/Team';
import About from '../../reusable-components/About';  
import Contact from '../../reusable-components/Contact';  
import MobileAppSection from '../../reusable-components/MobileAppSection';  
import Footer from '../../reusable-components/Footer';  

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Container avec padding-top pour compenser la navbar fixe */}
      <div className="pt-20"> {/* Ajustez cette valeur selon la hauteur de votre navbar */}
        <HeroSection />
        <FunctionnalitiesSection />
        <MobileAppSection />
        <ImpactsSection />
        <Team />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}