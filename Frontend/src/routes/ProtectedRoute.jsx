import React from 'react'
import { useAuth } from '../context/AuthProvider';
import { Navigate} from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { adminToken } = useAuth();

  if (!adminToken) {
    return <Navigate to="/admin/signIn" replace />;
  }

  return children;
};
