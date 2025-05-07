import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('admin'));
  
  // Verificar si el usuario existe y es administrador
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default AdminProtectedRoute;