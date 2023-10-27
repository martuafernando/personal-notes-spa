import { FaLanguage } from 'react-icons/fa';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function LanguageToggle() {
  const { onLanguageToggled } = useContext(LanguageContext)
  return (
    <button
      className='toggle-theme'
      onClick={onLanguageToggled}
    > <FaLanguage />
    </button>
  )
}

export default LanguageToggle