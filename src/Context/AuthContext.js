import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  localStorage.removeItem('login')
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'))
  const [loginData , setData] = useState('')

  const userData = (data) =>{ 
    setData(data);
  }

  const login = () => {
    localStorage.setItem('login',true)
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('login')
    setIsLoggedIn(false);
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout , userData , loginData}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);