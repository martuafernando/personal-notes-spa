import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../utils'
import { Link } from 'react-router-dom'
import parser from 'html-react-parser'
export default function NoteItem ({
  id,
  title,
  body,
  createdAt
}) {
  return (
    <div className="note-item">
        <h4 className="note-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h4>
        <p className="note-item__createdAt">
          {showFormattedDate(createdAt)}
        </p>
        <div className="note-item__body">{parser(body)}</div>
    </div>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}
