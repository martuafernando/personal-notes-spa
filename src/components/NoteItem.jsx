import React from "react"
import PropTypes from "prop-types"

export default function NoteItem({
  id,
  title,
  body,
  createdAt,
}) {
  return (
    <div className="note-item">
        <h4 className="note-item__title">
          <a href={`/notes/${id}`}>{title}</a>
        </h4>
        <p className="note-item__createdAt">
          {new Date(createdAt).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="note-item__body">{body}</p>
    </div>
  )
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
