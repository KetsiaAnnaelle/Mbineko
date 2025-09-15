import React from 'react';
import Navbar from '../../reusable-components/Navbar';
import HeroSection from '../../reusable-components/HeroSection';
import FunctionnalitiesSection from '../../reusable-components/FunctionnalitiesSection';
import ImpactsSection from '../../reusable-components/ImpactsSection';
import Team from '../../reusable-components/Team';
import About from '../../reusable-components/About';
// import { createBrowserRouter } from "react-router";


const Home = () => {
    return (
        <div className="min-h-dvh">
            <Navbar />
            <main>
                <HeroSection />
                <FunctionnalitiesSection />
                <ImpactsSection />
                <Team />
                <About />
            </main>
        </div>
    );
};

export default Home;