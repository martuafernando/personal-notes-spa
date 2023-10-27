import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)
