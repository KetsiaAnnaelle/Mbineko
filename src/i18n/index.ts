// import { useMemo } from 'react'
// import { useLanguage } from '@/components/language-provider'

// type Translations = Record<string, Record<'FR' | 'EN', string>>

// const translations: Translations = {
//   'nav.home': { FR: 'Accueil', EN: 'Home' },
//   'nav.features': { FR: 'Fonctionnalités', EN: 'Features' },
//   'nav.impacts': { FR: 'Impacts', EN: 'Impacts' },
//   'nav.team': { FR: 'Équipes & partenaires', EN: 'Team & Partners' },
//   'nav.about': { FR: 'À propos', EN: 'About' },
//   'nav.contact': { FR: 'Contact', EN: 'Contact' },
//   'cta.register': { FR: 'S’INSCRIRE', EN: 'REGISTER' },
//   'ui.menu': { FR: 'Menu', EN: 'Menu' },
// }

// export function useI18n() {
//   const { language } = useLanguage()

//   const t = useMemo(() => {
//     return (key: string, fallback?: string) => {
//       const entry = translations[key]
//       if (!entry) return fallback ?? key
//       return entry[language] ?? fallback ?? key
//     }
//   }, [language])

//   return { t, language }
// }



import { useMemo } from 'react'
import { useLanguage } from '@/components/language-provider'

// Définition stricte des langues possibles
type Language = 'FR' | 'EN'

// Les traductions : chaque clé correspond à une entrée avec FR et EN
type Translations = Record<string, Record<Language, string>>

const translations: Translations = {
  'nav.home': { FR: 'Accueil', EN: 'Home' },
  'nav.features': { FR: 'Fonctionnalités', EN: 'Features' },
  'nav.impacts': { FR: 'Impacts', EN: 'Impacts' },
  'nav.team': { FR: 'Équipes & partenaires', EN: 'Team & Partners' },
  'nav.about': { FR: 'À propos', EN: 'About' },
  'nav.contact': { FR: 'Contact', EN: 'Contact' },
  'cta.register': { FR: 'S’INSCRIRE', EN: 'REGISTER' },
  'ui.menu': { FR: 'Menu', EN: 'Menu' },
}

export function useI18n() {
  const { language } = useLanguage()

  const t = useMemo(() => {
    return (key: string, fallback?: string) => {
      const entry = translations[key]
      if (!entry) return fallback ?? key

      // Ici on indique à TS que "language" est bien du type Language
      return entry[language as Language] ?? fallback ?? key
    }
  }, [language])

  return { t, language }
}


