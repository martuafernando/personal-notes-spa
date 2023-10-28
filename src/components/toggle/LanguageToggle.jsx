import { FaLanguage } from 'react-icons/fa'
import React, { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'

function LanguageToggle () {
  const { onLanguageToggled } = useContext(LanguageContext)
  return (
    <button
      className='toggle-locale'
      onClick={onLanguageToggled}
    > <FaLanguage />
    </button>
  )
}

export default LanguageToggle
