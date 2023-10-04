import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data'
import DeleteNoteButton from '../components/button/DeleteNoteButton'
import ArchiveNoteButton from '../components/button/ArchiveNoteButton'
import { showFormattedDate } from '../utils'
import UnarchiveNoteButton from '../components/button/UnarchiveNoteButton'

function wrapper (Component) {
  return props => <Component {...props} params={useParams()} navigate = {useNavigate()} />
}

class DetailPage extends React.Component {
  constructor (props) {
    super(props)

    this.navigate = props.navigate

    this.state = {
      note: getNote(props.params.noteId)
    }

    this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this)
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this)
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
  }

  render () {
    return (
      <>
        <div className="detail-page">
          <h2 className="detail-page__title">{this.state.note.title}</h2>
          <p className="detail-page__createdAt">{showFormattedDate(this.state.note.createdAt)}</p>
          <p className="detail-page__body">{this.state.note.body}</p>
        </div>
        <div className="homepage__action">
          {this.state.note.archived
            ? <UnarchiveNoteButton
              id={this.props.params.noteId}
              onUnarchive={this.onUnarchiveNoteHandler}
            />
            : <ArchiveNoteButton
              id={this.props.params.noteId}
              onArchive={this.onArchiveNoteHandler}
            />
          }
          <DeleteNoteButton
            id={this.props.params.noteId}
            onDelete={this.onDeleteNoteHandler}
          />
        </div>
      </>
    )
  }

  onArchiveNoteHandler (noteId) {
    unarchiveNote(noteId)
    archiveNote(noteId)
    this.navigate('/')
  }

  onUnarchiveNoteHandler (noteId) {
    unarchiveNote(noteId)
    this.navigate('/')
  }

  onDeleteNoteHandler (noteId) {
    deleteNote(noteId)
    this.navigate('/')
  }

  onSearchNotesHandler (keyword) {
    this.setState(previousState => {
      return {
        ...previousState,
        keyword
      }
    })
  }
}

export default wrapper(DetailPage)
