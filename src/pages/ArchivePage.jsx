import React from "react"
import NoteList from "../components/NoteList"
import { getArchivedNotes } from "../utils/local-data"
import AddNoteButton from "../components/button/addNoteButton"
import SearchBar from "../components/SearchBar"

export default class ArchivePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      notes: getArchivedNotes(),
      keyword: ''
    }

    this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this)
  }

  render() {
    return (
      <>
        <h2>Catatan Arsip</h2>
        <SearchBar
          placeholder='Cari berdasarkan judul ...'
          onSearch={this.onSearchNotesHandler}
        />
        <NoteList
          notes={
            this.state.notes
              .filter((it)=> it.title
                .toLowerCase()
                .includes(this.state.keyword.toLowerCase()))
          }
        />
      </>
    )
  }

  onSearchNotesHandler(keyword) {
    this.setState(previousState => {
      return {
        ...previousState,
        keyword
      }
    })
  }
}