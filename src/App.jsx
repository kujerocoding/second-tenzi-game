import React from 'react'
import Die from './Die'
import {useState} from 'react'

const App = () => {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = [];
    for(let i = 0; i < 10; i++){
      const die = Math.ceil(Math.random() * 5)
      newDice.push(die)
    }
    return newDice
  }
  
  const dieElements = dice.map(die => <Die value={die} />)

  return (
    <div>
      <p>{dieElements}</p>
    </div>
  )
}

export default App
