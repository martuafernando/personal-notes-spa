import React from 'react'
import PropTypes from 'prop-types'

export default function SearchBar ({ onSearch, placeholder }) {
  return (
    <form className="search-bar">
      <input
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired
}
