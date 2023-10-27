import React, { useMemo } from 'react'

export const ThemeContext = React.createContext('dark')

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light')

  function onThemeToggled() {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={ useMemo(() => {
      return { theme, onThemeToggled }
    }) }>
      {children}
    </ThemeContext.Provider>
  );
}