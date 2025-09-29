import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Moon, Sun, Globe, Menu, X, TreePine, Sparkles } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("FR")

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang)
  }

  const navItems = [
    { href: "/forests", label: "Accueil", key: "#home" },
    { href: "/Surveillance", label: "Surveillance", key: "#Surveillance" },
    { href: "/Cartographie", label: "Cartographie", key: "#Cartographie" },
    { href: "/visite", label: "Visite Virtuelle", key: "#center" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full">
      <div className="relative glass backdrop-blur-xl border-b border-white/20 shadow-strong">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-700/15" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <img src="/assets/img/logo2.png" alt="logo" className="h-12"/>
              </motion.div>

              {/* Navigation Desktop */}
              <nav className="hidden lg:flex items-center flex-1 justify-center mx-12">
                <div className="flex items-center gap-2 glass rounded-2xl py-3 px-6 shadow-medium border border-white/30 backdrop-blur-xl">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      className={`body-sm px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap ${
                        activeLink === item.key
                          ? "bg-white/90 text-green-600 shadow-soft font-semibold"
                          : "text-black/90 hover:text-white hover:bg-white/10"
                      }`}
                      to={item.href}
                      onClick={() => setActiveLink(item.key)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Right controls */}
              <div className="flex items-center gap-3">
                {/* Language selector without animation */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white shadow-sm"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="sr-only">Changer la langue</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    side="bottom"
                    sideOffset={10}
                    className="w-36 bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-md rounded-xl z-[99999] fixed"
                  >
                    <DropdownMenuItem
                      onClick={() => changeLanguage("FR")}
                      className="cursor-pointer hover:bg-white/10"
                    >
                      🇫🇷 Français
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => changeLanguage("EN")}
                      className="cursor-pointer hover:bg-white/10"
                    >
                      🇺🇸 English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Dark mode toggle */}
                {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white shadow-sm"
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span className="sr-only">Basculer le mode sombre</span>
                </Button> */}

                

                {/* CTA Button */}
                <Link to="/register"  >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
                    <Button
                      className="gradient-primary text-white rounded-2xl px-6 py-2.5 font-semibold shadow-medium hover-lift transition-all duration-300 flex items-center gap-2"
                      
                    >
                      <Sparkles className="w-4 h-4" />
                      S'INSCRIRE
                    </Button>
                  </motion.div>
                </Link>

                {/* Mobile menu button */}
                <button
                  className="lg:hidden rounded-xl p-2.5 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white transition-all duration-300"
                  aria-label="menu"
                  onClick={() => setOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, type: "spring", damping: 25 }}
          className="fixed inset-0 z-[99999] lg:hidden"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <aside className="absolute right-0 top-0 h-full w-80 bg-white/10 backdrop-blur-xl border-l border-white/20 p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <h3 className="subtitle-md text-white">Menu</h3>
              </div>
              <button
                className="rounded-xl p-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all duration-300"
                aria-label="close"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="block py-4 px-4 body-md text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20"
                  onClick={() => {
                    setOpen(false)
                    setActiveLink(item.key)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="pt-4 border-t border-white/20 space-y-4">
              <div className="flex items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      {currentLanguage}
                    </Button>
                  </DropdownMenuTrigger>
                  {/* No animation */}
                  <DropdownMenuContent className="glass backdrop-blur-xl border border-white/30">
                    <DropdownMenuItem onClick={() => changeLanguage("FR")} className="hover:bg-white/10">
                      🇫🇷 Français
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage("EN")} className="hover:bg-white/10">
                      🇺🇸 English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>

              <Button
                className="w-full gradient-primary text-white rounded-2xl py-3 font-semibold shadow-medium hover-lift transition-all duration-300"
                onClick={() => (window.location.href = "/register")}
              >
                S'INSCRIRE
              </Button>
            </div>
          </aside>
        </motion.div>
      )}
    </header>
  )
}
