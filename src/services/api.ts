import axios from 'axios'
import { getApiConfig } from '../config/api'

const config = getApiConfig()

// Create axios instance with base configuration
const api = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIMEOUT,
  headers: config.DEFAULT_HEADERS,
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, redirect to login
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Authentication API
export const authAPI = {
  // Login user
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await api.post(config.ENDPOINTS.AUTH.LOGIN, credentials)
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Register user
  register: async (userData: { 
    email: string; 
    password: string; 
    firstName: string; 
    lastName: string;
    organization?: string;
  }) => {
    try {
      const response = await api.post(config.ENDPOINTS.AUTH.REGISTER, userData)
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken')
  },

  // Refresh token
  refreshToken: async () => {
    try {
      const response = await api.post(config.ENDPOINTS.AUTH.REFRESH)
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token)
      }
      return response.data
    } catch (error) {
      throw error
    }
  }
}

// Forest Management API
export const forestAPI = {
  // Get all forests for current user
  getForests: async () => {
    try {
      const response = await api.get(config.ENDPOINTS.FORESTS)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get specific forest by ID
  getForest: async (id: string) => {
    try {
      const response = await api.get(`${config.ENDPOINTS.FORESTS}${id}/`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Create new forest
  createForest: async (forestData: {
    name: string
    location: string
    area: number
    description?: string
  }) => {
    try {
      const response = await api.post(config.ENDPOINTS.FORESTS, forestData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Update forest
  updateForest: async (id: string, forestData: any) => {
    try {
      const response = await api.put(`${config.ENDPOINTS.FORESTS}${id}/`, forestData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Delete forest
  deleteForest: async (id: string) => {
    try {
      await api.delete(`${config.ENDPOINTS.FORESTS}${id}/`)
      return true
    } catch (error) {
      throw error
    }
  }
}

// Drone Management API
export const droneAPI = {
  // Get all drones for current user
  getDrones: async () => {
    try {
      const response = await api.get(config.ENDPOINTS.DRONES)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get drone status
  getDroneStatus: async (id: string) => {
    try {
      const response = await api.get(`${config.ENDPOINTS.DRONES}${id}/status/`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Control drone
  controlDrone: async (id: string, command: string) => {
    try {
      const response = await api.post(`${config.ENDPOINTS.DRONES}${id}/control/`, { command })
      return response.data
    } catch (error) {
      throw error
    }
  }
}

// Monitoring API
export const monitoringAPI = {
  // Get real-time data
  getRealTimeData: async (forestId: string) => {
    try {
      const response = await api.get(`${config.ENDPOINTS.MONITORING}${forestId}/realtime/`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get historical data
  getHistoricalData: async (forestId: string, startDate: string, endDate: string) => {
    try {
      const response = await api.get(`${config.ENDPOINTS.MONITORING}${forestId}/historical/`, {
        params: { start_date: startDate, end_date: endDate }
      })
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get alerts
  getAlerts: async (forestId?: string) => {
    try {
      const params = forestId ? { forest_id: forestId } : {}
      const response = await api.get(`${config.ENDPOINTS.MONITORING}alerts/`, { params })
      return response.data
    } catch (error) {
      throw error
    }
  }
}

// Reports API
export const reportsAPI = {
  // Generate report
  generateReport: async (reportData: {
    type: string
    forestId: string
    startDate: string
    endDate: string
    parameters: any
  }) => {
    try {
      const response = await api.post(`${config.ENDPOINTS.REPORTS}generate/`, reportData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get report history
  getReportHistory: async () => {
    try {
      const response = await api.get(`${config.ENDPOINTS.REPORTS}history/`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Download report
  downloadReport: async (reportId: string) => {
    try {
      const response = await api.get(`${config.ENDPOINTS.REPORTS}${reportId}/download/`, {
        responseType: 'blob'
      })
      return response.data
    } catch (error) {
      throw error
    }
  }
}

// Weather API
export const weatherAPI = {
  // Get current weather for forest location
  getCurrentWeather: async (forestId: string) => {
    try {
      const response = await api.get(`${config.ENDPOINTS.WEATHER}${forestId}/current/`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get weather forecast
  getWeatherForecast: async (forestId: string, days: number = 7) => {
    try {
      const response = await api.get(`${config.ENDPOINTS.WEATHER}${forestId}/forecast/`, {
        params: { days }
      })
      return response.data
    } catch (error) {
      throw error
    }
  }
}

// Dashboard API
export const dashboardAPI = {
  // Get dashboard overview
  getOverview: async () => {
    try {
      const response = await api.get(`${config.ENDPOINTS.DASHBOARD}overview/`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Get dashboard statistics
  getStatistics: async (period: string = 'week') => {
    try {
      const response = await api.get(`${config.ENDPOINTS.DASHBOARD}statistics/`, {
        params: { period }
      })
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default api
