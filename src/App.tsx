
/* Optional default Vite styles were causing PostCSS to load. Remove if not needed. */
// import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './hooks/useAuth'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
export default App



