import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem('adminToken'));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const ONE_DAY_MS = 10000;

  const signin = async (token) => {
    const expiration = Date.now() + ONE_DAY_MS;
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminTokenExpiration', expiration.toString());
    setAdminToken(token);
    setUser(true);
  };

  const signout = async (navigateToSignIn = true) => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminTokenExpiration');
    setAdminToken(null);
    setUser(null);
    if (navigateToSignIn) {
      navigate("/admin/signIn");
    }
  };

  const checkTokenValidity = () => {
    const token = localStorage.getItem('adminToken');
    const expiration = localStorage.getItem('adminTokenExpiration');

    if (!token || !expiration || Date.now() > parseInt(expiration)) {
      signout(false); // Don't redirect when just checking
    } else {
      setAdminToken(token);
      setUser(true);
    }
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <AuthContext.Provider value={{ adminToken, user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
