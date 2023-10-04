import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

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
