import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('es');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
