import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function DeleteNoteButton ({ id, onDelete }) {
  return (
    <button
      type="button"
      title="Hapus"
      className="action"
      onClick={() => onDelete(id)}
    >
      <FiTrash2 />
    </button>
  )
}

DeleteNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}
