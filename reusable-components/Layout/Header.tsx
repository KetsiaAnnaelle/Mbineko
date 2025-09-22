import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('FR');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const changeLanguage = (lang: string) => {
        setCurrentLanguage(lang);
        // Ici vous pouvez ajouter la logique pour changer la langue
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[9999] w-full"
            style={{
                background: 'rgba(34,139,34,0.25)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
                margin: 0,
                padding: 0,
            }}
        >
            {/* Partie colorée à droite - étendue jusqu'au bord */}
            <div
                className="absolute top-0 right-0 h-full w-full md:w-1/2"
                style={{
                    background: 'rgba(34,139,34,0.5)',
                    borderTopLeftRadius: '24px',
                    zIndex: 0,
                }}
            />
            
            {/* Fond blanc qui s'étend jusqu'au bord droit */}
            <div
                className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-white -z-10"
            />
            
            <div className="relative z-10 w-full">
                <div className="w-full px-0 md:px-0">
                    <div className="flex items-center justify-between py-3 px-4 md:px-6">
                        {/* Logo avec animation */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3"
                        >
                            <img
                                src="/assets/img/logo.png"
                                alt="MBINEKO"
                                className="h-9 w-auto"
                                style={{ width: '94px', height: '73px' }}
                            />
                        </motion.div>

                        {/* Navigation desktop */}
                        <nav className="hidden md:flex items-center flex-1 justify-center mx-8">
                            <div className="flex items-center gap-1 rounded-full bg-white py-2 px-6 shadow-sm">
                                <Link 
                                    className={`text-sm px-4 py-2 whitespace-nowrap ${activeLink === '#home' ? 'rounded-full bg-primary/15 text-primary' : 'hover:text-primary'}`} 
                                    to="/forests"
                                    onClick={() => setActiveLink('#home')}
                                >
                                    Accueil
                                </Link>
                                <Link 
                                    className={`text-sm px-4 py-2 whitespace-nowrap ${activeLink === '#features' ? 'rounded-full bg-primary/15 text-primary' : 'hover:text-primary'}`} 
                                    to="/Surveillance"
                                    onClick={() => setActiveLink('#Surveillance')}
                                >
                                    Surveillance
                                </Link>
                                <Link 
                                    className={`text-sm px-4 py-2 whitespace-nowrap ${activeLink === '#impacts' ? 'rounded-full bg-primary/15 text-primary' : 'hover:text-primary'}`} 
                                    to="/Cartographie"
                                    onClick={() => setActiveLink('#Cartographie')}
                                >
                                    Cartographie
                                </Link>
                                <Link 
                                    className={`text-sm px-4 py-2 whitespace-nowrap ${activeLink === '#team' ? 'rounded-full bg-primary/15 text-primary' : 'hover:text-primary'}`} 
                                    to="/center"
                                    onClick={() => setActiveLink('#center')}
                                >
                                   Visite Virtuelle
                                </Link>
                                
                            </div>
                        </nav>

                        {/* Actions à droite */}
                        <div className="flex items-center gap-3">
                            {/* Icône changement de langue */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20">
                                        <Globe className="h-4 w-4" />
                                        <span className="sr-only">Changer la langue</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-32">
                                    <DropdownMenuItem onClick={() => changeLanguage('FR')} className="cursor-pointer">
                                        🇫🇷 Français
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => changeLanguage('EN')} className="cursor-pointer">
                                        🇺🇸 English
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Icône mode sombre */}
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={toggleDarkMode}
                                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20"
                            >
                                {isDarkMode ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                                <span className="sr-only">Basculer le mode sombre</span>
                            </Button>

                            {/* Bouton CTA */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:block"
                            >
                                <Button
                                    className="rounded-full px-6 shadow-sm text-white"
                                    style={{ backgroundColor: '#228B22' }}
                                    onClick={() => window.location.href = '/register'}
                                >
                                    S'INSCRIRE
                                </Button>
                            </motion.div>

                            {/* Menu hamburger mobile */}
                            <button
                                className="md:hidden rounded-md p-2 bg-white/10 hover:bg-white/20"
                                aria-label="menu"
                                onClick={() => setOpen(true)}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="text-white"
                                >
                                    <path
                                        d="M3 6h14M3 10h14M3 14h14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Off-canvas menu mobile */}
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-50 md:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setOpen(false)}
                        />
                        <aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 space-y-4">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold">Menu</h3>
                                <button
                                    className="rounded-md p-2 border hover:bg-gray-50"
                                    aria-label="close"
                                    onClick={() => setOpen(false)}
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20">
                                        <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="space-y-2">
                                <Link to="#home" className="block py-3 px-4 text-lg hover:bg-gray-50 rounded-md" onClick={() => {setOpen(false); setActiveLink('#home');}}>Accueil</Link>
                                <Link to="#features" className="block py-3 px-4 text-lg hover:bg-gray-50 rounded-md" onClick={() => {setOpen(false); setActiveLink('#Surveillance');}}>Surveillance</Link>
                                <Link to="#impacts" className="block py-3 px-4 text-lg hover:bg-gray-50 rounded-md" onClick={() => {setOpen(false); setActiveLink('#Cartographie');}}>Cartographie</Link>
                                <Link to="#team" className="block py-3 px-4 text-lg hover:bg-gray-50 rounded-md" onClick={() => {setOpen(false); setActiveLink('#center');}}>  Multi-centres</Link>
                            </div>

                            <div className="pt-4 border-t">
                                <div className="flex items-center gap-3 mb-4">
                                    {/* Sélecteur de langue mobile */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="flex-1">
                                                <Globe className="h-4 w-4 mr-2" />
                                                {currentLanguage}
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem onClick={() => changeLanguage('FR')}>
                                                🇫🇷 Français
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => changeLanguage('EN')}>
                                                🇺🇸 English
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    {/* Bouton mode sombre mobile */}
                                    <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                                        {isDarkMode ? (
                                            <Sun className="h-4 w-4" />
                                        ) : (
                                            <Moon className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>

                                <Button 
                                    className="w-full rounded-full"
                                    style={{ backgroundColor: '#228B22' }}
                                    onClick={() => window.location.href = '/register'}
                                >
                                    Se Deconnecter
                                </Button>
                            </div>
                        </aside>
                    </motion.div>
                )}
            </div>
        </header>
    );
};
