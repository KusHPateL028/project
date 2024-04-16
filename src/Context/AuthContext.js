import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  localStorage.removeItem('login')
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'))
  const [loginData , setData] = useState('')
  const [activeMenu, setActiveMenu] = useState(null);

	const handleMenuClick = (menu) => {
		setActiveMenu(menu);
	};

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
    <AuthContext.Provider value={{ isLoggedIn, login, logout , userData , loginData , handleMenuClick , activeMenu}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);