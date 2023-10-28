import React, { useMemo } from 'react'
import { putTheme } from '../utils/network-data'
import PropTypes from 'prop-types'

export const ThemeContext = React.createContext('dark')

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = React.useState('light')

  function onThemeToggled () {
    setTheme((prevTheme) => {
      const currentTheme = prevTheme === 'light' ? 'dark' : 'light'
      putTheme(currentTheme)
      return currentTheme
    })
  }

  return (
    <ThemeContext.Provider value={ useMemo(() => {
      return { theme, onThemeToggled }
    }) }>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any
}
