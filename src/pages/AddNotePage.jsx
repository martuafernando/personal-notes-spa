import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { addNote } from '../utils/local-data'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function wrapper (Component) {
  const WrappedComponent = (props) => {
    const navigate = useNavigate()

    return <Component navigate={navigate} />
  }

  WrappedComponent.displayName = `Wrapped(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}

class AddNotePage extends React.Component {
  constructor (props) {
    super(props)

    this.navigate = props.navigate
    this.state = {
      title: '',
      body: ''
    }

    this.onCreateNotesHandler = this.onCreateNotesHandler.bind(this)
    this.onChangeEventHandler = this.onChangeEventHandler.bind(this)
  }

  render () {
    return (
      <form
        className='add-new-page__input'
        onSubmit={this.onCreateNotesHandler}>
        <input
          className='add-new-page__input__title'
          placeholder='Catatan Rahasia'
          type="text"
          name="title"
          id="title"
          onChange={this.onChangeEventHandler}
        />
        <div
          className='add-new-page__input__body'
          name='body'
          id="body"
          data-placeholder='Sebenarnya adalah ...'
          onInput={this.onChangeEventHandler}
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

  onChangeEventHandler (event) {
    const { id, value, innerHTML, type } = event.target
    this.setState(previousState => {
      return {
        ...previousState,
        [id]: type === 'text' ? value : innerHTML
      }
    })
  }

  onCreateNotesHandler () {
    addNote({
      title: this.state.title,
      body: this.state.body
    })
    this.navigate('/')
  }
}

AddNotePage.propTypes = {
  navigate: PropTypes.func.isRequired
}

export default wrapper(AddNotePage)
