import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function LogoutButton ({ onLogout }) {
  return (
    <button
      type="button"
      title="Keluar"
      className="button-logout"
      onClick={() => onLogout()}
    >
      <FiLogOut />
    </button>
  )
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired
}
