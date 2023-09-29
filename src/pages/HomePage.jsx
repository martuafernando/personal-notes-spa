import React from "react"
import NoteList from "../components/NoteList"
import { getActiveNotes } from "../utils/local-data"
import AddNoteButton from "../components/button/addNoteButton"
import SearchBar from "../components/SearchBar"

export default class HomePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      notes: getActiveNotes(),
      keyword: ''
    }

    this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this)
  }

  render() {
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
              .filter((it)=> it.title
                .toLowerCase()
                .includes(this.state.keyword.toLowerCase()))
          }
        />
        <div className="homepage__action">
          <AddNoteButton onClick={() => console.log('testing::')}/>
        </div>
      </>
    )
  }

  onSearchNotesHandler(keyword) {
    console.log('testing::')
    this.setState(previousState => {
      return {
        ...previousState,
        keyword
      }
    })
  }
}