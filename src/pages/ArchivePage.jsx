import React, { useContext, useEffect, useState } from 'react'
import NoteList from '../components/NoteList'
import { getArchivedNotes } from '../utils/network-data'
import SearchBar from '../components/SearchBar'
import useInput from '../hooks/useInput'
import * as textContent from '../asset/textContent.json'
import { LanguageContext } from '../contexts/LanguageContext'

export default function ArchivePage () {
  const [keyword, onKeywordChangedHandler] = useInput('')
  const [notes, setNotes] = useState()
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    (async () => {
      const { error, data } = await getArchivedNotes()
      if (!error) setNotes(data)
    })()
  }, [])

  return (
    <>
      <h2>Catatan Arsip</h2>
      <SearchBar
        placeholder={textContent[language]['searchbar-placeholder']}
        onSearch={onKeywordChangedHandler}
      />
      <NoteList
        notes={
          notes && (
            notes
              .filter((it) => it.title
                .toLowerCase()
                .includes(keyword.toLowerCase()))
          )
        }
      />
    </>
  )
}
