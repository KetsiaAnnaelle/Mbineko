
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



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
    { path: "/forests", element: <ForestMonitoringPage /> },
    { path: "/visite", element: <VirtualVisite /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
export default App



