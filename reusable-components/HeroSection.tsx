import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ to, duration = 1500, suffix = "" }: { to: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const increment = to / (duration / 16);
        const step = () => {
            start += increment;
            if (start < to) {
                setCount(Math.floor(start));
                requestAnimationFrame(step);
            } else {
                setCount(to);
            }
        };
        step();
        // eslint-disable-next-line
    }, [to, duration]);
    return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10" style={{ background: 'rgba(34, 139, 34, 0.25)' }} />
            <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
                <div className="grid grid-cols-10 gap-4 md:gap-6 py-12 md:py-20 items-center">
                    {/* Texte */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-span-10 md:col-span-5 lg:col-span-4 space-y-5"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            <span className="text-green-700">LA FORET,</span> CONNECTEE ET
                            <span className="block">PROTEGEE</span>
                        </h1>
                        <p className="text-lg text-gray-700 max-w-prose">
                            Notre technologie transforme la nature en données exploitables. Prédisez les risques, surveillez les sols et préservez la biodiversité avec MBINEKO.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button className="rounded-full bg-green-700 px-6 py-3 text-white shadow-md hover:shadow-lg transition">
                                TELECHARGER L'APPLICATION MOBILE
                            </Button>
                            <Button variant="outline" className="rounded-full px-6 py-3 border-green-700 text-green-700 hover:bg-green-50 transition">
                                COMMANDER LE KIT
                            </Button>
                        </div>
                    </motion.div>

                    {/* Conteneur pour les images avec positionnement relatif */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="col-span-10 md:col-span-5 lg:col-span-6 flex justify-center items-center relative min-h-[400px] md:min-h-[500px]"
                    >
                        {/* Image téléphone avec onde - Positionné à gauche */}
                        <motion.div
                            initial={{ x: 50, y: 0, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute left-0 md:left-10 top-1/2 transform -translate-y-1/2 z-10 w-2/3 md:w-1/2 max-w-[280px]"
                        >
                            {/* Onde animée */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl border-4 border-green-600/40"
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-3xl border-4 border-green-600/20"
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            />

                            {/* Image téléphone */}
                            <img
                                src="/assets/img/phone-logo.png"
                                alt="App"
                                className="relative z-10 w-full drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* Image drone - Positionné à droite avec animation flottante */}
                        <motion.div
                            initial={{ x: -50, y: 0, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 z-0 w-2/3 md:w-1/2 max-w-[320px]"
                        >
                            <motion.img 
                                src="/assets/img/Drone.jpg" 
                                alt="drone" 
                                className="w-full rounded-2xl shadow-2xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            
                            {/* Effet de lumière pour le drone */}
                            <motion.div 
                                className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-400 rounded-full filter blur-xl opacity-30"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Section "Plus de 150 forêts répertoriées" */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 md:mt-20 bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden mb-10"
                >
                    {/* Fond décoratif */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-100 opacity-50"></div>
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-green-200 opacity-30"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-6">
                            Plus de <span className="text-green-700">150 forêts</span> déjà répertoriées
                        </h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {/* Statistique 1 */}
                            <motion.div 
                                className="text-center p-4 bg-green-50 rounded-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-green-800">
                                    <Counter to={150} suffix="+" />
                                </div>
                                <div className="text-sm md:text-base text-green-700 mt-2">Forêts surveillées</div>
                            </motion.div>
                            
                            {/* Statistique 2 */}
                            <motion.div 
                                className="text-center p-4 bg-green-50 rounded-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-green-800">
                                    <Counter to={24} suffix="/7" />
                                </div>
                                <div className="text-sm md:text-base text-green-700 mt-2">Surveillance continue</div>
                            </motion.div>
                            
                            {/* Statistique 3 */}
                            <motion.div 
                                className="text-center p-4 bg-green-50 rounded-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-green-800">
                                    <Counter to={500} suffix="+" />
                                </div>
                                <div className="text-sm md:text-base text-green-700 mt-2">Capteurs déployés</div>
                            </motion.div>
                            
                            {/* Statistique 4 */}
                            <motion.div 
                                className="text-center p-4 bg-green-50 rounded-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-green-800">
                                    <Counter to={98} suffix="%" />
                                </div>
                                <div className="text-sm md:text-base text-green-700 mt-2">Satisfaction clients</div>
                            </motion.div>
                        </div>
                        
                    </div>
                </motion.div>
            </div>

            {/* Fond vert côté droit */}
            <div
                className="absolute inset-y-0 right-0 w-1/2 pointer-events-none -z-10 rounded-bl-4xl"
                style={{ background: 'linear-gradient(#228B2280 50%)' }}
            />
        </section>
    );
};

export default HeroSection;