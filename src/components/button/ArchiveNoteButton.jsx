import React from 'react'
import { FiArchive } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function ArchiveNoteButton ({ id, onArchive }) {
  return (
    <button
      type="button"
      title="Arsipkan"
      className="action"
      onClick={() => onArchive(id)}
    >
      <FiArchive />
    </button>
  )
}

ArchiveNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired
}
