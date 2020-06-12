import React from 'react'

const MostraVoltas = (props) =>{//Componente sempre com Letra Maiúscula
    return (
      <p className='voltas'>
        <span >{props.voltas} </span> 
        <br/>
        Voltas
      </p>    
    )
  }

  export default MostraVoltas