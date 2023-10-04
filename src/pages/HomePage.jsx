import React from 'react'
import NoteList from '../components/NoteList'
import { getActiveNotes } from '../utils/local-data'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      notes: getActiveNotes(),
      keyword: ''
    }

    this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this)
  }

  render () {
    return (
      <>
        <h2>Catatan Aktif</h2>
        <SearchBar
          placeholder='Cari berdasarkan judul ...'
          onSearch={this.onSearchNotesHandler}
        />
        <NoteList
          notes={
            this.state.notes
              .filter((it) => it.title
                .toLowerCase()
                .includes(this.state.keyword.toLowerCase()))
          }
        />
        <div className="homepage__action">
          <Link
            className="action"
            title='Tambah'
            to='/notes/new'>
            <FiPlus/>
          </Link>
        </div>
      </>
    )
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
