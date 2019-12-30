import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Textbox from './Textbox'
import DropDown from './DropDown'
import Modal from './Modal'
import {useCounter} from './hooks/useCounter';

const Parent =()=> {
  const { count, incrementCounter, decrementCounter } = useCounter();
  // console.log('test : ',count, 'function : ', incrementCounter, decrementCounter)
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [open, setOpen] = useState(false);

  // const incrementCounter = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])
  // const decrementCounter = useCallback(() => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   }
  //   }, [count])
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
       <Button handleClick={decrementCounter}>Decrement</Button>
        <strong>{count}</strong>
      <Button handleClick={incrementCounter}>Increment</Button>
      <p>Name is <strong>{name.toUpperCase()}</strong></p>
      <Textbox text={name} handleClick={updateName} />
    </div>
  )
}

export default Parent
