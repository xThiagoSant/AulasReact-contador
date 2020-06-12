import React from 'react'

//Quando tem apenas um elemento podemos criar o coponente assim
const Button = (props) => <button {...props}>{props.text}</button>

export default Button