import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ThemeToggle from './toggle/ThemeToggle'
import LanguageToggle from './toggle/LanguageToggle'
import { isUserLogged } from '../utils/network-data'
export default function Header ({ title }) {
  const isAuthenticated = isUserLogged()
  return (
    <header>
      <h1>
        <Link to="/">{ title }</Link>
      </h1>
      { isAuthenticated && (
        <Navigation />
      ) }
      <LanguageToggle />
      <ThemeToggle />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
