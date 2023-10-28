import { FiMoon, FiSun } from 'react-icons/fi'
import { ThemeContext } from '../../contexts/ThemeContext'
import React, { useContext } from 'react'

function ThemeToggle () {
  const { theme, onThemeToggled } = useContext(ThemeContext)
  return (
    <button
      className='toggle-theme'
      onClick={onThemeToggled}
    > { theme === 'light' ? <FiMoon /> : <FiSun /> }
    </button>
  )
}

export default ThemeToggle
