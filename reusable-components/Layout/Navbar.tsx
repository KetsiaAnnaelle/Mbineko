"use client";

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-scroll';
import { useLanguage } from '@/components/language-provider';
import { useTheme } from '@/components/theme-provider';
import { useI18n } from '@/i18n';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const { language: currentLanguage, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const { user, logout } = useAuth();
  const { t } = useI18n();

  const toggleDarkMode = () => setTheme(isDarkMode ? 'light' : 'dark');
  const changeLanguage = (lang: 'FR' | 'EN') => setLanguage(lang);

  const navLinks = [
    { id: 'home', label: t('nav.home', 'Accueil') },
    { id: 'features', label: t('nav.features', 'Fonctionnalités') },
    { id: 'impacts', label: t('nav.impacts', 'Impacts') },
    { id: 'team', label: t('nav.team', 'Équipe') },
    { id: 'about', label: t('nav.about', 'À propos') },
    { id: 'contact', label: t('nav.contact', 'Contact') },
  ];

  const primaryGreen = '#228B22';

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full bg-[green]/10 backdrop-blur-md shadow-md">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <img src="/assets/img/logo.png" alt="MBINEKO" className="h-15 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth
                duration={500}
                offset={-80}
                className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeLink === link.id
                    ? `bg-[${primaryGreen}] text-white shadow-md`
                    : 'text-gray-700 hover:text-white hover:bg-green-900'
                }`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right controls (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="rounded-full px-6 py-2 font-semibold shadow-md text-white"
              style={{ backgroundColor: primaryGreen }}
              onClick={() => window.location.href = '/register'}
            >
              S'INSCRIRE
            </Button>

            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" className="h-9 w-9 rounded-full bg-white/20 hover:bg-white/30">
                  <Globe className="h-4 w-4 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem onClick={() => changeLanguage('FR')}>🇫🇷 Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('EN')}>🇺🇸 English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark mode toggle */}
            <Button size="icon" onClick={toggleDarkMode} className="h-9 w-9 rounded-full bg-white/20 hover:bg-white/30">
              {isDarkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-white" />}
            </Button>

            {/* User avatar */}
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="h-9 w-9 rounded-full bg-[${primaryGreen}] text-white flex items-center justify-center font-semibold">
                    {`${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase()}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem onClick={() => (window.location.href = '/profile/edit')}>Edit profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => (window.location.href = '/profile/delete')}>Delete profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              className="rounded-full px-4 py-2 text-white font-semibold"
              style={{ backgroundColor: primaryGreen }}
              onClick={() => window.location.href = '/register'}
            >
              S'INSCRIRE
            </Button>
            <button onClick={() => setOpen(true)} className="p-2 rounded-md bg-white/20 hover:bg-white/30 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Off-Canvas Mobile Menu */}
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 md:hidden"
        >
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 bg-[${primaryGreen}] text-white p-6 flex flex-col justify-between">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Menu</h3>
              <button onClick={() => setOpen(false)} className="p-2 rounded-xl hover:bg-green-800">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-80}
                  className="py-3 px-4 rounded-xl hover:bg-green-900 transition-all duration-300"
                  onClick={() => { setActiveLink(link.id); setOpen(false); }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language & Dark mode controls */}
            <div className="flex flex-col gap-3 mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full bg-transparent text-white hover:bg-green-900">
                    <Globe className="h-4 w-4 mr-2" />
                    {currentLanguage}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <DropdownMenuItem onClick={() => changeLanguage('FR')}>🇫🇷 Français</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('EN')}>🇺🇸 English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button size="icon" onClick={toggleDarkMode} className="bg-transparent text-white hover:bg-green-900">
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </aside>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
