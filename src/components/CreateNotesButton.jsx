import React from "react"

export function CreateNotesButton({id, onCreate}){
  return (
    <button
      className='note-item__delete-button'
      onClick={() => onCreate(id)}
    >
      Delete
    </button>
  )
}