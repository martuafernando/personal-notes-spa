import React from "react"
import Navigation from "./Navigation"

export default function Header({ title }) {
  return (
    <header>
      <h1>
        <a href="/">{ title }</a>
      </h1>
      <Navigation />
    </header>
  )
}