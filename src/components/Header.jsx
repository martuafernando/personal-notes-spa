import React from 'react'
import Navigation from './Navigation'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import ThemeToggle from './toggle/ThemeToggle'
import LanguageToggle from './toggle/LanguageToggle'
import { isUserLogged, logout } from '../utils/network-data'
import LogoutButton from './button/LogoutButton'
export default function Header ({ title, userName }) {
  const isAuthenticated = isUserLogged()
  const navigate = useNavigate()

  function onUserLogout () {
    logout()
    navigate(0)
  }
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
      { isAuthenticated && (
        <>
          <LogoutButton onLogout={onUserLogout} />
          <p>{userName}</p>
        </>

      ) }
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
}
