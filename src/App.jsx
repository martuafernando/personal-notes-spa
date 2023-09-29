import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import Header from './components/Header';
import ArchivePage from './pages/ArchivePage';

function App () {
  return (
    <>
    <Header title='Aplikasi Catatan' />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/notes" element={<ArchivePage />} />
      </Routes>
    </main>
    </>
  )
}

export default App
