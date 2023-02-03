import React from 'react'
import Die from './Die'
import {useState,useEffect} from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

const App = () => {

  const [dice, setDice] = useState(allNewDice())
  const [tenzi, setTenzi] = useState(false)
  const [count, setCount] = useState(0)

  useEffect( () => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzi(true)
    }
  },[dice])

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
    if (!tenzi){
      setDice(prevDice => prevDice.map(die => die.isHeld ? die : generateNewDie()))
      setCount(count => count + 1)
    }else{
      setTenzi(false)
      setDice(allNewDice())
      setCount(0)
    }
    
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
      {tenzi ? <Confetti /> : ""}
      <h1>Tenzi</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {dieElements}
      </div>
      <p>{tenzi ? "You Won!" : ""}</p>
      <p>Dice count : {count}</p>
      <button onClick={rollDice}>{tenzi ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
