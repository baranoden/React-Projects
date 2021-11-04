import React from 'react'

const style = {
    background: "#1C0C5B",
    border: "2px solid #3D2C8D",
    fontSize: "30px",
    color: "#916BBF",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none"
}



const Square = ({value, onClick}) => 



(<button style={style} onClick={onClick}>
    {value}
</button>)

export default Square
