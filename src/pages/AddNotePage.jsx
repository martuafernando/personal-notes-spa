import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { addNote } from '../utils/network-data'
import { useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'

export default function AddNotePage () {
  const [title, onTitleChanged] = useInput('')
  const [body, onBodyChanged] = useInput('')
  const navigate = useNavigate()

  function onCreateNotesHandler (event) {
    event.preventDefault()
    console.log('testing::', title, body)
    addNote({ title, body })
    navigate('/')
  }

  return (
    <form
      className='add-new-page__input'
      onSubmit={onCreateNotesHandler}>
      <input
        required
        className='add-new-page__input__title'
        placeholder='Catatan Rahasia'
        type="text"
        name="title"
        id="title"
        onChange={onTitleChanged}
      />
      <div
        className='add-new-page__input__body'
        name='body'
        id="body"
        data-placeholder='Sebenarnya adalah ...'
        onInput={onBodyChanged}
        contentEditable>
        </div>
      <div className="add-new-page__action">
        <button
          className='action'
          type="submit">
          <FiCheck/>
        </button>
      </div>
    </form>
  )
}
