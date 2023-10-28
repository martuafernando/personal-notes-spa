import React, { useContext, useEffect, useState } from 'react'
import NoteList from '../components/NoteList'
import { getActiveNotes } from '../utils/network-data'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import * as textContent from '../asset/textContent.json'
import useInput from '../hooks/useInput'
import { LanguageContext } from '../contexts/LanguageContext'

export default function HomePage () {
  const [notes, setNotes] = useState()
  const [keyword, onKeywordChangedHandler] = useInput('')
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    (async () => {
      const { error, data } = await getActiveNotes()
      if (!error) setNotes(data)
    })()
  }, [])

  return (
    <>
      <h2>{textContent[language]['active-notes-page-title']}</h2>
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
