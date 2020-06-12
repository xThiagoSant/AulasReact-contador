import React, {useState, useEffect} from 'react'
import './styles.css'

//Componentes Funcional
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'

function App() {
  const [numVoltas, setnumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if (running){
      timer = setInterval(() =>{
        setTempo( oldTempo => oldTempo + 1)//Diferente aqui não pego diretamente o valor mas pego-o num função
      },1000)
    }

    return () => {
      if(timer){
        clearInterval(timer)
      }
    }

  },[running])

  const toogleRunning = () =>{
    setRunning(!running)
  }

  const increment = () =>{
    setnumVoltas(numVoltas + 1) //pego o estado atual e somo 1 - é diferente de numVoltas++
  }

  const decrement = () =>{
    if(numVoltas > 0){
      setnumVoltas(numVoltas - 1)
    }    
  }

  const reset = () =>{
    setTempo(0)
    setnumVoltas(0)
  }

  return (
    <div>
      <MostraVoltas voltas={numVoltas}/>

      <Button className='bigger' text='+' onClick={increment}/>
      <Button className='bigger' text='-' onClick={decrement}/>
      
      {
        //Se eu colocar dentro de uma expressão {} tudo dentro dela só vai mostrar em tela se a expressão for verdadeira
        //neste caso se numVoltas for maior que zero
        //após os is comercial executa ou não o conteúdo
        numVoltas > 0 && <MostraTempo tempo={tempo/numVoltas}/>
      }         

      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toogleRunning} />
      <Button text='Reiniciar' onClick={reset} />
    </div>
  )
}

export default App