import React from 'react'

const Button = props => {
    const { count, incrementCounter, decrementCounter} = props

    console.log("Button Component rendered")
    return (
        <div>
            <p>Counter : {count}</p>
            <button onClick={incrementCounter}>Increment Counter</button>
            <button onClick={decrementCounter}>Decrement Counter</button>
        </div>
    )
}

export default React.memo(Button)