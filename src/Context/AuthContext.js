import { LocalSee } from '@mui/icons-material';
import React, { createContext, useState, useContext , useEffect} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'))

  const login = () => {
    localStorage.setItem('login',true)
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem('login',false)
    setIsLoggedIn(false);
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);