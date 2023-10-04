import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export default function Header ({ title }) {
  return (
    <header>
      <h1>
        <Link to="/">{ title }</Link>
      </h1>
      <Navigation />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
