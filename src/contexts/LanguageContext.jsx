import React, { useMemo } from 'react'

export const LanguageContext = React.createContext('id')

export function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState('id')

  function onLanguageToggled() {
    console.log('testing::', language)
    setLanguage((prevLanguage) => prevLanguage === 'id' ? 'en' : 'id')
  }

  return (
    <LanguageContext.Provider value={ useMemo(() => {
      return { language, onLanguageToggled }
    }) }>
      {children}
    </LanguageContext.Provider>
  );
}