import { useState } from 'react'

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)
  const onValueChangeHandler = (event) => {
    setValue(event.target.nodeName !== 'DIV' ? event.target.value : event.target.innerHTML)
  }
  return [value, onValueChangeHandler]
}

export default useInput