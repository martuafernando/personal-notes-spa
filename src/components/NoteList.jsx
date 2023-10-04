import React from 'react'
import PropTypes, { objectOf } from 'prop-types'
import NoteItem from './NoteItem'

export default function NoteList ({ notes }) {
  return (
    <>
      <div className="notes-list">
        {
          notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
            />
          ))
        }
      </div>
      {
        notes.length === 0 && (
          <div className="notes-list-empty">
            <p> Tidak ada catatan </p>
          </div>
        )
      }
    </>
  )
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(objectOf(NoteItem)).isRequired
}
