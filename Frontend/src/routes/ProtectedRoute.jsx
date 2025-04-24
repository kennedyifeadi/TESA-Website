import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { adminToken } = useAuth();
  

  if (!adminToken) {
    return <Navigate to="/admin/signIn" replace />;
  }

  return children;
};
