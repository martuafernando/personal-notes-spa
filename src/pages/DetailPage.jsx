import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data'
import DeleteNoteButton from '../components/button/DeleteNoteButton'
import ArchiveNoteButton from '../components/button/ArchiveNoteButton'
import { showFormattedDate } from '../utils'
import UnarchiveNoteButton from '../components/button/UnarchiveNoteButton'

import parser from 'html-react-parser'

export default function DetailPage () {
  const params = useParams()
  const navigate = useNavigate()
  const [note, setNote] = useState()

  useEffect(() => {
    (async () => {
      const { error, data } = await getNote(params.noteId)
      if (!error) setNote(data)
    })()
  }, [])

  function onArchiveNoteHandler (noteId) {
    archiveNote(noteId)
    navigate('/')
  }

  function onUnarchiveNoteHandler (noteId) {
    unarchiveNote(noteId)
    navigate('/')
  }

  function onDeleteNoteHandler (noteId) {
    deleteNote(noteId)
    navigate('/')
  }

  return (
    <>
      <div className="detail-page">
        <h2 className={'detail-page__title ' + (note?.title === undefined ? 'skeleton-text' : '')}>{note?.title}</h2>
        <p className={'detail-page__createdAt ' + (note?.createdAt === undefined ? 'skeleton-text' : '')} >{ note?.createdAt && showFormattedDate(note?.createdAt) }</p>
        <div className={'detail-page__body ' + (note?.body === undefined ? 'skeleton-text' : '')}>{ note?.body && parser(note?.body) }</div>
      </div>
      <div className="homepage__action">
        {note?.archived
          ? <UnarchiveNoteButton
            id={params.noteId}
            onUnarchive={onUnarchiveNoteHandler}
          />
          : <ArchiveNoteButton
            id={params.noteId}
            onArchive={onArchiveNoteHandler}
          />
        }
        <DeleteNoteButton
          id={params.noteId}
          onDelete={onDeleteNoteHandler}
        />
      </div>
    </>
  )
}
