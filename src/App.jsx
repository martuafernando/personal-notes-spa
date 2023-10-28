import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import ArchivePage from './pages/ArchivePage'
import DetailPage from './pages/DetailPage'
import AddNotePage from './pages/AddNotePage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import { getUserLogged, isUserLogged } from './utils/network-data'
import { LanguageContext } from './contexts/LanguageContext'
import * as textContent from './asset/textContent.json'
import { Suspense, useContext, useEffect, useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

function App () {
  const [ isAuthenticated, setAuthenticated ] = useState(isUserLogged)
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  const [userData, setUserData] = useState({
    name: ''
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (isAuthenticated) {
      (async function () {
        const { error, data } = await getUserLogged()
        setUserData(data)
        if (error) setAuthenticated(false)
      })()
    }
  }, [isAuthenticated])
  
  return (
    <div className='app-container'>
      <Header
        title={textContent[language].title}
        userName={ userData.name }
      />
      <main>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/new" element={<AddNotePage />} />
              <Route path="/archives" element={<ArchivePage />} />
              <Route path="/notes/:noteId" element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  )
}

export default App
