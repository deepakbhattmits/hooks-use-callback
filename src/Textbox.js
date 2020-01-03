import React from 'react'

const Textbox = props => {
    const { name, handleClick } = props
    // console.log("Textbox :> Rendered")
    return (
        <div>
            <input type="text" placeholder="Enter Name" value={name} onChange={handleClick} />
        </div>
    )
}

export default React.memo(Textbox)