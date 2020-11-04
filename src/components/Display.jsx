import React from 'react'

const Num = (props) => {
    const wordStyle = {
        color: props.color,
        background: props.bgcolor,
    }
    return (
        <>
            {
            isNaN(+props.id) ? 
            <h1 style={wordStyle}>{props.id}</h1> : 
            <h1>The Number is: {props.id} </h1>
            }
        </>
    )
}

export default Num;