import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Textbox from './Textbox'
import DropDown from './DropDown'

function Parent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const updateName = useCallback((e) => {
    const { value } = e.target
    setName(value)
  }, [])

  return (
    <div>
      <DropDown />
      <Title />

      <Button count={count} handleClick={incrementCounter} />
      <label>Name is <strong>{name.toUpperCase()}</strong></label>
      <Textbox text={name} handleClick={updateName} />
    </div>
  )
}

export default Parent
