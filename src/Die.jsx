import React from 'react'

const Die = (props) => {
  return (
    <div className='die-container' onClick={props.holdDice}>
      {props.value}
    </div>
  )
}

export default Die


