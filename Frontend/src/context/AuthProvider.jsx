import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [adminToken, setAdminToken] = useState(true)
  const [user, setUser] = useState(null)

  const signin = async (token) => {
    setAdminToken(true)
    setUser(true)
  };

  const signout = async () => {
    setAdminToken(false)
    setUser(false)
  };
  return <AuthContext.Provider value={{ adminToken, user, signin, signout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
