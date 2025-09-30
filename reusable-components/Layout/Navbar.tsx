"use client";
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Globe } from 'lucide-react';
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

  // i18n handled by useI18n

  // Appliquer le thème au chargement
  useEffect(() => {
    // Nothing here; theme comes from ThemeProvider
  }, []);

  // Basculer Dark Mode
  const toggleDarkMode = () => setTheme(isDarkMode ? 'light' : 'dark');

  // Changer la langue
  const changeLanguage = (lang: 'FR' | 'EN') => setLanguage(lang);

  // Charger la langue au démarrage
  useEffect(() => {
    // language is managed by LanguageProvider
  }, []);

  type NavLink = { id: string; label: string }
  const { t } = useI18n();
  const navLinks: NavLink[] = [
    { id: 'home', label: t('nav.home') },
    { id: 'features', label: t('nav.features') },
    { id: 'impacts', label: t('nav.impacts') },
    { id: 'team', label: t('nav.team') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];
  const register = t('cta.register');
  const menu = t('ui.menu');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999] w-full"
      style={{
        background: 'rgba(34, 139, 34, 0.6)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      }}
    >
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-between py-4 px-5 md:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <img
              src="/assets/img/logo.png"
              alt="MBINEKO"
              className="h-10 w-auto"
              style={{ width: '100px', height: 'auto' }}
            />
          </motion.div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center flex-1 justify-center mx-8">
            <div className="flex items-center gap-1 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md py-2 px-6 shadow-md">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer text-sm px-5 py-2 transition-all duration-300 rounded-full 
                    ${activeLink === link.id
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-200 hover:text-green-600 hover:bg-green-50 dark:hover:bg-gray-700'}`}
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Actions à droite */}
          <div className="flex items-center gap-3">
            {/* Sélecteur langue */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/20 hover:bg-white/30">
                  <Globe className="h-4 w-4 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem onClick={() => changeLanguage('FR')}>🇫🇷 Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('EN')}>🇺🇸 English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark mode */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="h-9 w-9 rounded-full bg-white/20 hover:bg-white/30"
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-white" />}
            </Button>

          {/* User avatar */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="h-9 w-9 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
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

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
              <Button
                className="rounded-full px-7 shadow-lg text-white font-semibold"
                style={{ background: 'linear-gradient(90deg, #228B22, #32CD32)' }}
                onClick={() => window.location.href = '/register'}
              >
                {register}
              </Button>
            </motion.div>

            {/* Hamburger mobile */}
            <button
              className="md:hidden rounded-md p-2 bg-white/20 hover:bg-white/30 text-white"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 20 20" className="text-current">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 md:hidden overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <aside className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-green-900 to-green-800 text-white shadow-xl p-6 space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">{menu}</h3>
                <button
                  className="rounded-md p-2 border hover:bg-green-700"
                  aria-label="close"
                  onClick={() => setOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Liens mobile */}
              <div className="space-y-2">
                {navLinks.map((link: NavLink) => (
                  <Link
                    key={link.id}
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`block py-3 px-4 text-lg rounded-lg cursor-pointer 
                      hover:bg-green-700 transition-all duration-200 
                      ${activeLink === link.id ? 'bg-green-700 font-semibold shadow-md' : ''}`}
                    onClick={() => { setOpen(false); setActiveLink(link.id); }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Footer mobile */}
              <div className="pt-4 border-t border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  {/* Langue */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex-1 bg-green-800 text-white hover:bg-green-700">
                        <Globe className="h-4 w-4 mr-2" />
                        {currentLanguage}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => changeLanguage('FR')}>🇫🇷 Français</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => changeLanguage('EN')}>🇺🇸 English</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Dark mode */}
                  <Button variant="outline" size="icon" onClick={toggleDarkMode} className="bg-green-800 text-white hover:bg-green-700">
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>

                <Button
                  className="w-full rounded-full text-white font-semibold shadow-md"
                  style={{ background: 'linear-gradient(90deg, #228B22, #32CD32)' }}
                  onClick={() => window.location.href = '/register'}
                >
                  {register}
                </Button>
              </div>
            </aside>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
