import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import ArchivePage from './pages/ArchivePage'
import DetailPage from './pages/DetailPage'
import AddNotePage from './pages/AddNotePage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import { isUserLogged } from './utils/network-data'
import { LanguageContext } from './contexts/LanguageContext'
import * as textContent from './asset/textContent.json'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

function App () {
  const isAuthenticated = isUserLogged()
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  })
  
  return (
    <div className='app-container'>
      <Header title={textContent[language].title} />
      <main>
        {isAuthenticated && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/notes/new" element={<AddNotePage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/notes/:noteId" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
