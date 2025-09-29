// Configuration de l'API Backend
// Modifiez cette URL selon votre configuration

// Utiliser les variables d'environnement Vite (import.meta.env)
// Définissez VITE_API_URL dans un fichier .env.local à la racine du projet
const ENV = (import.meta as any).env ?? {}
const ENV_API_URL = (ENV.VITE_API_URL as string) || undefined
const ENV_MODE = (ENV.MODE as string) || 'development'

export const API_CONFIG = {
  // URL de base de l'API Django
  BASE_URL: ENV_API_URL || 'http://localhost:8000/api',

  // Timeout des requêtes (en millisecondes)
  TIMEOUT: 10000,

  // Headers par défaut
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },

  // Endpoints de l'API
  ENDPOINTS: {
    AUTH: {
      // Aligné avec les routes fournies par l'utilisateur
      LOGIN: '/login/',
      REGISTER: '/register/',
      REFRESH: '/auth/refresh/',
      FORGOT_PASSWORD: '/password-reset/',
      RESET_PASSWORD_CONFIRM: '/password-reset-confirm/',
      LOGOUT: '/auth/logout/',
    },
    FORESTS: '/forests/',
    DRONES: '/drones/',
    MONITORING: '/monitoring/',
    REPORTS: '/reports/',
    WEATHER: '/weather/',
    DASHBOARD: '/dashboard/',
  },

  // Configuration des retry
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY: 1000,
  },
}

// Configuration pour différents environnements
export const getApiConfig = () => {
  switch (ENV_MODE) {
    case 'production':
      return {
        ...API_CONFIG,
        BASE_URL: ENV_API_URL || 'https://api.mbineko.com/api',
        TIMEOUT: 15000,
      }
    case 'staging':
      return {
        ...API_CONFIG,
        BASE_URL: ENV_API_URL || 'https://staging-api.mbineko.com/api',
        TIMEOUT: 12000,
      }
    default:
      return API_CONFIG
  }
}
