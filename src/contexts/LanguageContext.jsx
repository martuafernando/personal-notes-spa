import React, { useMemo } from 'react'
import { getLanguage, putLanguage } from '../utils/network-data';

export const LanguageContext = React.createContext('id')

export function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState(getLanguage)

  function onLanguageToggled() {
    setLanguage((prevLanguage) => {
      const currentLanguage = prevLanguage === 'id' ? 'en' : 'id'
      putLanguage(currentLanguage)
      return currentLanguage
    })
  }

  return (
    <LanguageContext.Provider value={ useMemo(() => {
      return { language, onLanguageToggled }
    }) }>
      {children}
    </LanguageContext.Provider>
  );
}