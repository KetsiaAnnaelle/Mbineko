import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <header className="sticky top-0 z-50 animate-slideInDown relative"
            style={{
                background: 'rgba(34,139,34,0.25)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 1px 0 rgba(0,0,0,0.06)'
            }}
        >
            {/* Partie colorée à droite avec arrondi en haut à gauche */}
            <div
                className="absolute top-0 right-0 h-full w-1/2"
                style={{
                    background: 'rgba(34,139,34,0.5)',
                    borderTopLeftRadius: '24px',
                    zIndex: 0
                }}
            />
            <div className="relative z-10">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
                    <div className="grid grid-cols-10 gap-4 md:gap-6 items-center py-3">
                        <div className="col-span-5 md:col-span-2 flex items-center gap-3">
                            <img src="/assets/img/logo.png" alt="MBINEKO" className="h-9 w-auto" style={{ width: '94px', height: '73px' }}/>
                            {/* <span className="hidden md:inline font-semibold text-neutral-800">MBINEKO</span> */}
                        </div>
                        <nav className="col-span-10 md:col-span-6 order-3 md:order-none">
                            <button className="md:hidden rounded-md p-2 border" aria-label="menu" onClick={() => setOpen(true)}>
                                <svg width="20" height="20" viewBox="0 0 20 20"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2"/></svg>
                            </button>
                            <div className="hidden lg:flex justify-center">
                                <div className="flex items-center gap-3 rounded-full bg-white py-1 px-4 shadow-sm w-full col-span-10">
                                    <Link className="text-sm rounded-full bg-primary/15 text-primary px-2 py-1.5" to="#home">Accueil</Link>
                                    <Link className="text-sm hover:text-primary px-2 py-1" to="#features">Fonctionnalités</Link>
                                    <Link className="text-sm hover:text-primary px-2 py-1" to="#impacts">Impacts</Link>
                                    <Link className="text-sm hover:text-primary px-2 py-1" to="#team">Equipes et partenaires</Link>
                                    <Link className="text-sm hover:text-primary px-2 py-1" to="#about">A propos de nous</Link>
                                    <Link className="text-sm hover:text-primary px-2 py-1" to="#contact">Contactez-nous</Link>
                                    <div className="col-span-5 md:col-span-2 flex justify-end">
                                        <Button className="rounded-full bg-primary px-6 shadow-sm text-white" style={{ backgroundColor:'#228B22' }}>COMMENCER</Button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Off-canvas menu mobile */}
                {open && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
                        <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 space-y-4">
                            <button className="ml-auto rounded-md p-2 border" aria-label="close" onClick={() => setOpen(false)}>
                                <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2"/></svg>
                            </button>
                            <Link to="#home" className="block py-2 text-lg" onClick={() => setOpen(false)}>Accueil</Link>
                            <Link to="#features" className="block py-2 text-lg" onClick={() => setOpen(false)}>Fonctionnalités</Link>
                            <Link to="#impacts" className="block py-2 text-lg" onClick={() => setOpen(false)}>Impacts</Link>
                            <Link to="#team" className="block py-2 text-lg" onClick={() => setOpen(false)}>Equipes et partenaires</Link>
                            <Link to="#about" className="block py-2 text-lg" onClick={() => setOpen(false)}>A propos de nous</Link>
                            <Link to="#contact" className="block py-2 text-lg" onClick={() => setOpen(false)}>Contactez-nous</Link>
                            <Button className="w-full bg-primary rounded-full">COMMENCER</Button>
                        </aside>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;