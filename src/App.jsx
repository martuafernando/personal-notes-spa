import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import Header from './components/Header';

function App () {
  return (
    <>
    <Header title='Aplikasi Catatan' />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
    </>
  )
}

export default App
