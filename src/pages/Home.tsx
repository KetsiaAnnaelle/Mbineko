import React from "react";
import Navbar from '../../reusable-components/Layout/Navbar';
import HeroSection from '../../reusable-components/LandingPage/HeroSection';
import FunctionnalitiesSection from '../../reusable-components/LandingPage/FunctionnalitiesSection';
import ImpactsSection from '../../reusable-components/LandingPage/ImpactsSection';
import Team from '../../reusable-components/LandingPage/Team';
import About from '../../reusable-components/LandingPage/About';  
import Contact from '../../reusable-components/LandingPage/Contact';  
import MobileAppSection from '../../reusable-components/LandingPage/MobileAppSection';  
import Footer from '../../reusable-components/Layout/Footer';  

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