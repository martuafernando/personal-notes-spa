import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import Header from './components/Header'
import ArchivePage from './pages/ArchivePage'
import DetailPage from './pages/DetailPage'

function App () {
  return (
    <>
    <Header title='Aplikasi Catatan' />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/notes/:noteId" element={<DetailPage />} />
      </Routes>
    </main>
    </>
  )
}

export default App
