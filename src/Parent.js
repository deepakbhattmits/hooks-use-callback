import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Textbox from './Textbox'
import DropDown from './DropDown'
import Modal from './Modal'

function Parent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [open, setOpen] = useState(false);

  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const updateName = useCallback((e) => {
    const { value } = e.target
    setName(value)
  }, [])
  const show = () => {
    setOpen(!open)
  }
  const close = useCallback((e) => {
    setOpen(false)
  }, [])
  const onKeyUp = useCallback((e) => {
    if (e.keyCode === 27) {
      console.log('You pressed the escape key!')
      setOpen(false)
    }
  }, [])

  return (
    <div>
      <button onClick={show}>show</button>
      <Modal
        open={open}
        close={close}
        onKeyUp={onKeyUp}
      />
      <DropDown />
      <Title />

      <Button count={count} handleClick={incrementCounter} />
      <label>Name is <strong>{name.toUpperCase()}</strong></label>
      <Textbox text={name} handleClick={updateName} />
    </div>
  )
}

export default Parent
