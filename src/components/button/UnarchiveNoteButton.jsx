import React from 'react'
import { FiInbox } from 'react-icons/fi'
import PropTypes from 'prop-types'

export default function UnarchiveNoteButton ({ id, onUnarchive }) {
  return (
    <button
      type="button"
      title="Arsipkan"
      className="action"
      onClick={() => onUnarchive(id)}
    >
      <FiInbox />
    </button>
  )
}

UnarchiveNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired
}
