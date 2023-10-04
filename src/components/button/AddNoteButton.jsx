import React from 'react'
import { FiPlus } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function AddNoteButton ({ onClick }) {
  return (
    <button
      type="button"
      title="Tambah"
      className="action"
      onClick={() => onClick()}
    >
      <FiPlus />
    </button>
  )
}

AddNoteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
