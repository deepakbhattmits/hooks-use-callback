import React from 'react'

const Button = props => {
    const { count, handleClick } = props

    console.log("Button Component rendered")
    return (
        <div>
            <p>Counter : {count}</p>
            <button onClick={handleClick}>Increment Counter</button>
        </div>
    )
}

export default React.memo(Button)