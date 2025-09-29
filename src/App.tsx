/* Optional default Vite styles were causing PostCSS to load. Remove if not needed. */
// import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './hooks/useAuth'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForestMonitoringPage from './pages/ForestMonitoringPage';
import VirtualVisite from './pages/VirtualVisite';
import StatistiqueDetails from './pages/StatistiqueDetails';
import { ThemeProvider } from "@/components/theme-provider"
import ResetPasswordPage from './pages/ResetPasswordPage';
import ThreeDVisualization from './pages/ThreeDVisualization';
import Cartography from './pages/Cartography';
import VirtualTour from './pages/VirtualTour';
import Cartography3D from './pages/Cartography3D';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
  { path: "/forests", element: <ForestMonitoringPage /> },
  { 
    path: "/forests/statistics", 
    element: <StatistiqueDetails 
      forest={{
        id: "1",
        name: "Forêt Statistiques",
        location: "Localisation par défaut",
        image: "/default-forest.jpg",
        area: "1500 ha",
        temperature: "22.5°C",
        coverage: 78,
        humidity: 65,
        description: "Forêt de démonstration pour les statistiques",
        stats: {
          china: 10,
          india: 50,
          brazil: 30,
          others: 10
        }
      }} 
      onBack={() => window.history.back()} 
    /> 
  },
  { path: "/visite", element: <VirtualVisite /> },
  { path: "/visualization-3d", element: <ThreeDVisualization /> },
  { path: "/cartographie", element: <Cartography /> },
  { path: "/virtual-tour", element: <VirtualTour /> },
  { path: "/cartography-3d", element: <Cartography3D /> },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App