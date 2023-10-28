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
        <h4 className={ 'note-item__title ' + (title === undefined ? 'skeleton-text' : '') }>
          <Link to={`/notes/${id}`}>{title}</Link>
        </h4>
        <p className={'note-item__createdAt ' + (createdAt === undefined ? 'skeleton-text' : '') }>
          { createdAt && showFormattedDate(createdAt) }
        </p>
        <div className={ 'note-item__body ' + (body === undefined ? 'skeleton-text' : '')}>
          {body && parser(body)}
        </div>
    </div>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string
}
