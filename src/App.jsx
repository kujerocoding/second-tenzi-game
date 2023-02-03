import React from 'react'
import Die from './Die'
import {useState} from 'react'
import './App.css'
import { nanoid } from 'nanoid'

const App = () => {

  const [dice, setDice] = useState(allNewDice())


  function allNewDice() {
    const newDice = [];
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function generateNewDie(){
    const die = Math.ceil(Math.random() * 5)
    return {
      id: nanoid(),
      value: die,
      isHeld: false
    }
  }

  function rollDice(){
    setDice(allNewDice())
  }

  function holdDice(id){
    return setDice(prevDie => prevDie.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
  }
  
  const dieElements = dice.map(die => <Die 
    value={die.value}
    holdDice={() => holdDice(die.id)}
    isHeld={die.isHeld}
     />)


  return (
    <main>
      <h1>Tenzi</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {dieElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
